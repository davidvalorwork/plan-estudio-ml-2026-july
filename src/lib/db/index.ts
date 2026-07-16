import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const DATA_DIR = path.join(process.cwd(), "data");
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const DB_PATH = path.join(DATA_DIR, "progress.db");

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (_db) return _db;
  const db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS concept_progress (
      concept_id   TEXT PRIMARY KEY,
      stage        INTEGER NOT NULL DEFAULT 0, -- 0=no empezado, 1..5 = etapas Rule of Five
      next_due_at  INTEGER,                    -- epoch ms, NULL si stage=0
      last_seen_at INTEGER,
      streak_ok    INTEGER NOT NULL DEFAULT 0  -- aciertos consecutivos
    );

    CREATE TABLE IF NOT EXISTS quiz_log (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      concept_id  TEXT NOT NULL,
      remembered  INTEGER NOT NULL, -- 0/1
      at          INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS user_stats (
      id          INTEGER PRIMARY KEY CHECK (id = 1),
      xp          INTEGER NOT NULL DEFAULT 0,
      last_active_day TEXT, -- 'YYYY-MM-DD'
      streak_days INTEGER NOT NULL DEFAULT 0
    );

    INSERT OR IGNORE INTO user_stats (id, xp, last_active_day, streak_days) VALUES (1, 0, NULL, 0);
  `);
  _db = db;
  return db;
}

// Rule of Five: inmediato / +24h / +1 semana / +1 mes / +3 meses (en ms)
export const STAGE_OFFSETS_MS = [
  0,
  24 * 60 * 60 * 1000,
  7 * 24 * 60 * 60 * 1000,
  30 * 24 * 60 * 60 * 1000,
  90 * 24 * 60 * 60 * 1000,
];

export type ConceptProgressRow = {
  concept_id: string;
  stage: number;
  next_due_at: number | null;
  last_seen_at: number | null;
  streak_ok: number;
};

export function getAllProgress(): ConceptProgressRow[] {
  return getDb().prepare("SELECT * FROM concept_progress").all() as ConceptProgressRow[];
}

export function getProgress(conceptId: string): ConceptProgressRow | undefined {
  return getDb()
    .prepare("SELECT * FROM concept_progress WHERE concept_id = ?")
    .get(conceptId) as ConceptProgressRow | undefined;
}

export function upsertReview(conceptId: string, remembered: boolean): ConceptProgressRow {
  const db = getDb();
  const now = Date.now();
  const current = getProgress(conceptId);
  const currentStage = current?.stage ?? 0;

  const nextStage = remembered ? Math.min(currentStage + 1, 5) : 1;
  const offset = STAGE_OFFSETS_MS[Math.max(nextStage - 1, 0)] ?? 0;
  const nextDueAt = now + offset;
  const streakOk = remembered ? (current?.streak_ok ?? 0) + 1 : 0;

  db.prepare(
    `INSERT INTO concept_progress (concept_id, stage, next_due_at, last_seen_at, streak_ok)
     VALUES (@concept_id, @stage, @next_due_at, @last_seen_at, @streak_ok)
     ON CONFLICT(concept_id) DO UPDATE SET
       stage = excluded.stage,
       next_due_at = excluded.next_due_at,
       last_seen_at = excluded.last_seen_at,
       streak_ok = excluded.streak_ok`
  ).run({
    concept_id: conceptId,
    stage: nextStage,
    next_due_at: nextDueAt,
    last_seen_at: now,
    streak_ok: streakOk,
  });

  db.prepare(`INSERT INTO quiz_log (concept_id, remembered, at) VALUES (?, ?, ?)`).run(
    conceptId,
    remembered ? 1 : 0,
    now
  );

  return getProgress(conceptId)!;
}

const XP_PER_REVIEW = 10;
const XP_MASTERED_BONUS = 50;

export function awardXpForReview(remembered: boolean, reachedMastered: boolean) {
  const db = getDb();
  const today = new Date().toISOString().slice(0, 10);
  const stats = db.prepare("SELECT * FROM user_stats WHERE id = 1").get() as {
    xp: number;
    last_active_day: string | null;
    streak_days: number;
  };

  let streakDays = stats.streak_days;
  if (stats.last_active_day !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    streakDays = stats.last_active_day === yesterday ? streakDays + 1 : 1;
  }

  const gained = (remembered ? XP_PER_REVIEW : 0) + (reachedMastered ? XP_MASTERED_BONUS : 0);

  db.prepare(
    `UPDATE user_stats SET xp = xp + ?, last_active_day = ?, streak_days = ? WHERE id = 1`
  ).run(gained, today, streakDays);
}

export function getUserStats() {
  const db = getDb();
  const stats = db.prepare("SELECT * FROM user_stats WHERE id = 1").get() as {
    xp: number;
    last_active_day: string | null;
    streak_days: number;
  };
  const level = Math.floor(stats.xp / 100) + 1;
  return { ...stats, level };
}

export function dueConceptIds(now = Date.now()): string[] {
  const rows = getDb()
    .prepare("SELECT concept_id FROM concept_progress WHERE stage > 0 AND next_due_at <= ?")
    .all(now) as { concept_id: string }[];
  return rows.map((r) => r.concept_id);
}

// Progreso guardado en localStorage del navegador (por dispositivo/usuario).
// No requiere servidor ni base de datos — funciona igual en local, Vercel o estático.

const PROGRESS_KEY = "plan-ml:progress";
const STATS_KEY = "plan-ml:stats";

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

// Autocalificación estilo Anki. "good" es el equivalente a "lo recordé" del quiz MCQ.
export type Grade = "again" | "hard" | "good" | "easy";

function nextStageForGrade(currentStage: number, grade: Grade): number {
  if (grade === "again") return 1;
  if (grade === "hard") return Math.max(currentStage, 1);
  if (grade === "easy") return Math.min(currentStage + 2, 5);
  return Math.min(currentStage + 1, 5); // "good"
}

type UserStatsRow = {
  xp: number;
  last_active_day: string | null;
  streak_days: number;
};

const EMPTY_STATS: UserStatsRow = { xp: 0, last_active_day: null, streak_days: 0 };

function readProgress(): Record<string, ConceptProgressRow> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(PROGRESS_KEY) ?? "{}");
  } catch {
    return {};
  }
}

function writeProgress(data: Record<string, ConceptProgressRow>) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

function readStats(): UserStatsRow {
  if (typeof window === "undefined") return EMPTY_STATS;
  try {
    return JSON.parse(window.localStorage.getItem(STATS_KEY) ?? "null") ?? EMPTY_STATS;
  } catch {
    return EMPTY_STATS;
  }
}

function writeStats(stats: UserStatsRow) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function getAllProgress(): ConceptProgressRow[] {
  return Object.values(readProgress());
}

export function getProgress(conceptId: string): ConceptProgressRow | undefined {
  return readProgress()[conceptId];
}

export function upsertReview(conceptId: string, grade: Grade): ConceptProgressRow {
  const all = readProgress();
  const now = Date.now();
  const current = all[conceptId];
  const currentStage = current?.stage ?? 0;

  const nextStage = nextStageForGrade(currentStage, grade);
  const offset = STAGE_OFFSETS_MS[Math.max(nextStage - 1, 0)] ?? 0;
  const streakOk =
    grade === "again" ? 0 : grade === "hard" ? current?.streak_ok ?? 0 : (current?.streak_ok ?? 0) + 1;

  const row: ConceptProgressRow = {
    concept_id: conceptId,
    stage: nextStage,
    next_due_at: now + offset,
    last_seen_at: now,
    streak_ok: streakOk,
  };

  all[conceptId] = row;
  writeProgress(all);
  return row;
}

const GRADE_XP: Record<Grade, number> = { again: 0, hard: 5, good: 10, easy: 15 };
const XP_MASTERED_BONUS = 50;

export function awardXpForReview(grade: Grade, reachedMastered: boolean): number {
  const stats = readStats();
  const today = new Date().toISOString().slice(0, 10);

  let streakDays = stats.streak_days;
  if (stats.last_active_day !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    streakDays = stats.last_active_day === yesterday ? streakDays + 1 : 1;
  }

  const gained = GRADE_XP[grade] + (reachedMastered ? XP_MASTERED_BONUS : 0);

  writeStats({ xp: stats.xp + gained, last_active_day: today, streak_days: streakDays });
  return gained;
}

export function getUserStats() {
  const stats = readStats();
  const level = Math.floor(stats.xp / 100) + 1;
  return { ...stats, level };
}

export function dueConceptIds(now = Date.now()): string[] {
  return Object.values(readProgress())
    .filter((r) => r.stage > 0 && r.next_due_at !== null && r.next_due_at <= now)
    .map((r) => r.concept_id);
}

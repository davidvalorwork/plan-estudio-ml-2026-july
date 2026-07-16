"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { phases, allConcepts } from "@/lib/content/phases";
import { makeStatusLookup } from "@/lib/progress-status";
import { ProgressBar } from "@/components/ProgressBar";
import { getAllProgress, getUserStats, type ConceptProgressRow } from "@/lib/db";
import { useLanguage } from "@/lib/language";
import { UI } from "@/lib/ui-strings";
import { localizedPhaseTitle } from "@/lib/content/localized";

type ApiResponse = {
  progress: ConceptProgressRow[];
  stats: { xp: number; level: number; streak_days: number };
};

export default function Dashboard() {
  const { lang } = useLanguage();
  const t = UI[lang];
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    setData({ progress: getAllProgress(), stats: getUserStats() });
  }, []);

  if (!data) return <p className="text-neutral-400">{t.loadingProgress}</p>;

  const statusFor = makeStatusLookup(data.progress);
  const total = allConcepts().length;
  const masteredTotal = allConcepts().filter((c) => statusFor(c.id) === "mastered").length;
  const now = Date.now();
  const dueToday = data.progress.filter(
    (p) => p.stage > 0 && p.next_due_at !== null && p.next_due_at <= now
  ).length;

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Stat label={t.level} value={data.stats.level} />
        <Stat label={t.xp} value={data.stats.xp} />
        <Stat label={t.streakDays} value={data.stats.streak_days} />
        <Stat label={t.dueToday} value={dueToday} accent={dueToday > 0} />
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-lg font-semibold">{t.overallProgress}</h2>
          <span className="text-sm text-neutral-400">{t.conceptsMastered(masteredTotal, total)}</span>
        </div>
        <ProgressBar pct={(masteredTotal / total) * 100} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">{t.phases}</h2>
        <div className="grid gap-3">
          {phases.map((phase) => {
            const cIds = phase.concepts.map((c) => c.id);
            const phaseMastered = cIds.filter((id) => statusFor(id) === "mastered").length;
            const phasePct = (phaseMastered / cIds.length) * 100;
            return (
              <div
                key={phase.id}
                className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{t.phaseLabel(phase.order, localizedPhaseTitle(phase, lang))}</span>
                  <span className="text-xs text-neutral-400">
                    {phaseMastered}/{cIds.length}
                  </span>
                </div>
                <ProgressBar pct={phasePct} />
                <div className="flex flex-wrap gap-2 mt-1">
                  <Link
                    href={`/fase/${phase.id}`}
                    className="rounded-lg border border-emerald-700 text-emerald-300 px-4 py-2.5 text-sm font-medium text-center hover:bg-emerald-950/40"
                  >
                    {t.viewPhase}
                  </Link>
                  <Link
                    href={`/flashcards/${phase.id}`}
                    className="rounded-lg border border-fuchsia-700 text-fuchsia-300 px-4 py-2.5 text-sm font-medium text-center hover:bg-fuchsia-950/40"
                  >
                    {t.flashcardsLink}
                  </Link>
                  <Link
                    href={`/quiz/${phase.id}`}
                    className="rounded-lg border border-amber-700 text-amber-300 px-4 py-2.5 text-sm font-medium text-center hover:bg-amber-950/40"
                  >
                    {t.quizLink}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
      <div className={`text-2xl font-bold ${accent ? "text-amber-400" : ""}`}>{value}</div>
      <div className="text-xs text-neutral-400">{label}</div>
    </div>
  );
}

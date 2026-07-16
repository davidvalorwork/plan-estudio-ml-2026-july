"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { phases, allConcepts } from "@/lib/content/phases";
import { makeStatusLookup } from "@/lib/progress-status";
import { ProgressBar } from "@/components/ProgressBar";
import { getAllProgress, getUserStats, type ConceptProgressRow } from "@/lib/db";

type ApiResponse = {
  progress: ConceptProgressRow[];
  stats: { xp: number; level: number; streak_days: number };
};

export default function Dashboard() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    setData({ progress: getAllProgress(), stats: getUserStats() });
  }, []);

  if (!data) return <p className="text-neutral-400">Cargando progreso…</p>;

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
        <Stat label="Nivel" value={data.stats.level} />
        <Stat label="XP" value={data.stats.xp} />
        <Stat label="Racha (días)" value={data.stats.streak_days} />
        <Stat label="Repaso hoy" value={dueToday} accent={dueToday > 0} />
      </section>

      <section>
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-lg font-semibold">Progreso general</h2>
          <span className="text-sm text-neutral-400">
            {masteredTotal}/{total} conceptos dominados
          </span>
        </div>
        <ProgressBar pct={(masteredTotal / total) * 100} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Fases</h2>
        <div className="grid gap-3">
          {phases.map((phase) => {
            const cIds = phase.concepts.map((c) => c.id);
            const phaseMastered = cIds.filter((id) => statusFor(id) === "mastered").length;
            const phasePct = (phaseMastered / cIds.length) * 100;
            return (
              <div
                key={phase.id}
                className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">
                    Fase {phase.order} — {phase.title}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {phaseMastered}/{cIds.length}
                  </span>
                </div>
                <ProgressBar pct={phasePct} />
                <div className="flex gap-3 text-sm mt-1">
                  <Link href={`/fase/${phase.id}`} className="text-emerald-400 hover:underline">
                    Ver fase
                  </Link>
                  <Link href={`/quiz/${phase.id}`} className="text-amber-400 hover:underline">
                    Quiz
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

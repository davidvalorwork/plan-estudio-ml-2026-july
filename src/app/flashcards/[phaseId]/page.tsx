"use client";

import { useState, use } from "react";
import Link from "next/link";
import { getPhase } from "@/lib/content/phases";
import { characterFor } from "@/lib/content/characters";
import { upsertReview, awardXpForReview, type Grade } from "@/lib/db";

type Stage = "front" | "back" | "graded";

const GRADE_LABEL: Record<Grade, string> = {
  again: "Otra vez",
  hard: "Difícil",
  good: "Bien",
  easy: "Fácil",
};

const GRADE_STYLE: Record<Grade, string> = {
  again: "border-rose-700 text-rose-300 hover:bg-rose-950/40",
  hard: "border-amber-700 text-amber-300 hover:bg-amber-950/40",
  good: "border-emerald-700 text-emerald-300 hover:bg-emerald-950/40",
  easy: "border-sky-700 text-sky-300 hover:bg-sky-950/40",
};

export default function FlashcardsPage({ params }: { params: Promise<{ phaseId: string }> }) {
  const { phaseId } = use(params);
  const phase = getPhase(phaseId);
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("front");
  const [done, setDone] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const concepts = phase?.concepts ?? [];
  const current = concepts[index];
  const character = characterFor(current?.id);

  if (!phase) return <p>Fase no encontrada.</p>;

  function grade(g: Grade) {
    if (!current) return;
    const row = upsertReview(current.id, g);
    const reachedMastered = g !== "again" && row.stage === 5;
    const gained = awardXpForReview(g, reachedMastered);
    setXpGained((x) => x + gained);
    setFeedback(
      reachedMastered
        ? `Concepto dominado. +${gained} XP`
        : gained > 0
          ? `+${gained} XP`
          : "Sin XP esta vez — va a repetirse pronto"
    );
    setStage("graded");
  }

  function next() {
    setFeedback(null);
    setStage("front");
    if (index + 1 < concepts.length) {
      setIndex((i) => i + 1);
    } else {
      setDone(true);
    }
  }

  if (done) {
    return (
      <div className="space-y-4 text-center py-16">
        <h1 className="text-2xl font-bold">Tarjetas completas 🎉</h1>
        <p className="text-neutral-400">Ganaste {xpGained} XP en esta ronda.</p>
        <Link href="/" className="text-emerald-400 hover:underline">
          Volver al dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center justify-between text-sm text-neutral-400">
        <span>
          Fase {phase.order} — {phase.title} · Tarjetas
        </span>
        <span>
          {index + 1}/{concepts.length}
        </span>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 space-y-4 min-h-[20rem]">
        {character && (
          <div className="text-xs uppercase tracking-wide text-fuchsia-400">
            {character.franchise}: {character.character}
          </div>
        )}

        {stage === "front" && (
          <div className="space-y-4">
            {character && (
              <p className="text-sm text-fuchsia-300/90 border-l-2 border-fuchsia-800 pl-3">
                {character.scene}
              </p>
            )}
            <p className="text-lg font-medium text-neutral-100">{current.prompt}</p>
            <p className="text-xs text-neutral-500 italic">
              Intentá recitar la respuesta de memoria antes de voltear la tarjeta.
            </p>
            <button
              onClick={() => setStage("back")}
              className="w-full rounded-lg bg-neutral-100 text-neutral-900 py-2 font-medium hover:bg-white"
            >
              Mostrar respuesta
            </button>
          </div>
        )}

        {(stage === "back" || stage === "graded") && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{current.name}</h2>
            <p className="text-neutral-300">{current.lesson}</p>
            <p className="text-sm text-sky-300/90 border-l-2 border-sky-800 pl-3">
              Ejemplo: {current.example}
            </p>
            <p className="text-sm text-emerald-300/90 border-l-2 border-emerald-800 pl-3">
              Relación: {current.relation}
            </p>

            {stage === "back" && (
              <div className="space-y-2">
                <p className="text-xs text-neutral-500">¿Qué tan bien la recordaste?</p>
                <div className="grid grid-cols-4 gap-2">
                  {(["again", "hard", "good", "easy"] as Grade[]).map((g) => (
                    <button
                      key={g}
                      onClick={() => grade(g)}
                      className={`rounded-lg border py-2 text-sm font-medium transition-colors ${GRADE_STYLE[g]}`}
                    >
                      {GRADE_LABEL[g]}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {stage === "graded" && (
              <>
                {feedback && <p className="text-center text-sm text-amber-400">{feedback}</p>}
                <button
                  onClick={next}
                  className="w-full rounded-lg bg-neutral-100 text-neutral-900 py-2 font-medium hover:bg-white"
                >
                  Siguiente
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

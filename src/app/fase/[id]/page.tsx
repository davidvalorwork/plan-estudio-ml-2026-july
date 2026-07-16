"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { getPhase } from "@/lib/content/phases";
import { en } from "@/lib/content/en";
import { characterFor } from "@/lib/content/characters";
import { makeStatusLookup, type Status } from "@/lib/progress-status";
import { SpeakButton } from "@/components/SpeakButton";
import { getAllProgress, type ConceptProgressRow } from "@/lib/db";

const STATUS_LABEL: Record<Status, string> = {
  "not-started": "sin empezar",
  learning: "en progreso",
  mastered: "dominado",
};

const STATUS_COLOR: Record<Status, string> = {
  "not-started": "text-neutral-500",
  learning: "text-amber-400",
  mastered: "text-emerald-400",
};

type Lang = "es" | "en";

export default function FasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const phase = getPhase(id);
  const [progress, setProgress] = useState<ConceptProgressRow[]>([]);
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  if (!phase) return <p>Fase no encontrada.</p>;

  const statusFor = makeStatusLookup(progress);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            Fase {phase.order} — {phase.title}
          </h1>
          <div className="flex gap-1 rounded-full border border-neutral-700 p-0.5">
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                lang === "es" ? "bg-neutral-100 text-neutral-900" : "text-neutral-400"
              }`}
            >
              Español
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                lang === "en" ? "bg-neutral-100 text-neutral-900" : "text-neutral-400"
              }`}
            >
              English
            </button>
          </div>
        </div>
        <div className="flex gap-4 mt-2 text-sm">
          <Link href={`/flashcards/${phase.id}`} className="text-fuchsia-400 hover:underline">
            Ir a las tarjetas →
          </Link>
          <Link href={`/quiz/${phase.id}`} className="text-amber-400 hover:underline">
            Ir al quiz →
          </Link>
        </div>
      </div>

      <details className="group rounded-lg border border-violet-900 bg-violet-950/30 p-3" open>
        <summary className="cursor-pointer font-medium text-violet-300 select-none">
          🧩 Cómo funciona todo mezclado (síntesis de la fase)
        </summary>
        <p className="text-sm text-neutral-300 mt-2">{phase.synthesis}</p>
      </details>

      <div className="grid gap-2">
        {phase.concepts.map((c) => {
          const status = statusFor(c.id);
          const enC = en[c.id];
          const displayName = lang === "en" && enC ? enC.name : c.name;
          const displayLesson = lang === "en" && enC ? enC.lesson : c.lesson;
          const displayExample = lang === "en" && enC ? enC.example : c.example;
          const speakText = enC ? `${enC.name}. ${enC.lesson}` : c.name;
          const character = characterFor(c.id);

          return (
            <div key={c.id} className="rounded-lg border border-neutral-800 bg-neutral-900 p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <SpeakButton text={speakText} />
                  <div className="font-medium">{displayName}</div>
                </div>
                <span className={`text-xs font-semibold shrink-0 ${STATUS_COLOR[status]}`}>
                  {STATUS_LABEL[status]}
                </span>
              </div>

              <details className="group mt-2">
                <summary className="cursor-pointer text-sm text-neutral-300 select-none hover:text-neutral-100">
                  📖 Concepto + ejemplo
                </summary>
                <div className="mt-2 space-y-2 pl-1">
                  <p className="text-sm text-neutral-300">{displayLesson}</p>
                  <p className="text-sm text-sky-300/90 border-l-2 border-sky-800 pl-2">
                    {lang === "en" ? "Example" : "Ejemplo"}: {displayExample}
                  </p>
                </div>
              </details>

              <details className="group mt-2">
                <summary className="cursor-pointer text-sm text-neutral-300 select-none hover:text-neutral-100">
                  🔗 Cómo se relaciona con otros conceptos
                </summary>
                <p className="mt-2 text-sm text-emerald-300/90 border-l-2 border-emerald-800 pl-2">
                  {c.relation}
                </p>
              </details>

              {character && (
                <details className="group mt-2">
                  <summary className="cursor-pointer text-sm text-neutral-300 select-none hover:text-neutral-100">
                    🎭 Asociación personaje-acción ({character.franchise})
                  </summary>
                  <p className="mt-2 text-sm text-fuchsia-300/90 border-l-2 border-fuchsia-800 pl-2">
                    <strong>{character.character}</strong> — {character.scene}
                  </p>
                </details>
              )}

              <p className="text-xs text-neutral-500 mt-3 italic">Quiz: {c.prompt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

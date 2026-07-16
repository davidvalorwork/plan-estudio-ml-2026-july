"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { getPhase } from "@/lib/content/phases";
import { en } from "@/lib/content/en";
import { characterFor } from "@/lib/content/characters";
import { makeStatusLookup, type Status } from "@/lib/progress-status";
import { SpeakButton } from "@/components/SpeakButton";
import { getAllProgress, type ConceptProgressRow } from "@/lib/db";
import { useLanguage } from "@/lib/language";
import { UI } from "@/lib/ui-strings";
import { localizedConcept, localizedPhaseTitle, localizedPhaseSynthesis, localizedScene } from "@/lib/content/localized";

export default function FasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const phase = getPhase(id);
  const { lang } = useLanguage();
  const t = UI[lang];
  const [progress, setProgress] = useState<ConceptProgressRow[]>([]);

  useEffect(() => {
    setProgress(getAllProgress());
  }, []);

  if (!phase) return <p>{t.phaseNotFound}</p>;

  const statusFor = makeStatusLookup(progress);

  const STATUS_LABEL: Record<Status, string> = {
    "not-started": t.statusNotStarted,
    learning: t.statusLearning,
    mastered: t.statusMastered,
  };

  const STATUS_COLOR: Record<Status, string> = {
    "not-started": "text-neutral-500",
    learning: "text-amber-400",
    mastered: "text-emerald-400",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t.phaseLabel(phase.order, localizedPhaseTitle(phase, lang))}</h1>
        <div className="flex flex-wrap gap-2 mt-3 text-sm">
          <Link
            href={`/flashcards/${phase.id}`}
            className="rounded-lg border border-fuchsia-700 text-fuchsia-300 px-4 py-2.5 font-medium hover:bg-fuchsia-950/40"
          >
            {t.goToFlashcards}
          </Link>
          <Link
            href={`/quiz/${phase.id}`}
            className="rounded-lg border border-amber-700 text-amber-300 px-4 py-2.5 font-medium hover:bg-amber-950/40"
          >
            {t.goToQuiz}
          </Link>
        </div>
      </div>

      <details className="group rounded-lg border border-violet-900 bg-violet-950/30 p-3" open>
        <summary className="cursor-pointer font-medium text-violet-300 select-none py-1">
          {t.synthesisTitle}
        </summary>
        <p className="text-sm text-neutral-300 mt-2">{localizedPhaseSynthesis(phase, lang)}</p>
      </details>

      <div className="grid gap-2">
        {phase.concepts.map((c) => {
          const status = statusFor(c.id);
          const localized = localizedConcept(c, lang);
          const enC = en[c.id];
          const speakText = enC ? `${enC.name}. ${enC.lesson}` : c.name;
          const character = characterFor(c.id);

          return (
            <div key={c.id} className="rounded-lg border border-neutral-800 bg-neutral-900 p-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <SpeakButton text={speakText} />
                  <div className="font-medium">{localized.name}</div>
                </div>
                <span className={`text-xs font-semibold shrink-0 ${STATUS_COLOR[status]}`}>
                  {STATUS_LABEL[status]}
                </span>
              </div>

              <details className="group mt-2">
                <summary className="cursor-pointer text-sm text-neutral-300 select-none hover:text-neutral-100 py-2">
                  {t.conceptAndExample}
                </summary>
                <div className="mt-2 space-y-2 pl-1">
                  <p className="text-sm text-neutral-300">{localized.lesson}</p>
                  <p className="text-sm text-sky-300/90 border-l-2 border-sky-800 pl-2">
                    {t.example}: {localized.example}
                  </p>
                </div>
              </details>

              <details className="group mt-2">
                <summary className="cursor-pointer text-sm text-neutral-300 select-none hover:text-neutral-100 py-2">
                  {t.relationTitle}
                </summary>
                <p className="mt-2 text-sm text-emerald-300/90 border-l-2 border-emerald-800 pl-2">
                  {localized.relation}
                </p>
              </details>

              {character && (
                <details className="group mt-2">
                  <summary className="cursor-pointer text-sm text-neutral-300 select-none hover:text-neutral-100 py-2">
                    {t.characterTitle(character.franchise)}
                  </summary>
                  <p className="mt-2 text-sm text-fuchsia-300/90 border-l-2 border-fuchsia-800 pl-2">
                    <strong>{character.character}</strong> — {localizedScene(c.id, character.scene, lang)}
                  </p>
                </details>
              )}

              <p className="text-xs text-neutral-500 mt-3 italic">
                {t.quizLabel}: {localized.prompt}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

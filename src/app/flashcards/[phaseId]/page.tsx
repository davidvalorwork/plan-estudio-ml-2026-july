"use client";

import { useState, use } from "react";
import Link from "next/link";
import { getPhase } from "@/lib/content/phases";
import { characterFor } from "@/lib/content/characters";
import { upsertReview, awardXpForReview, type Grade } from "@/lib/db";
import { useLanguage } from "@/lib/language";
import { UI } from "@/lib/ui-strings";
import { localizedConcept, localizedPhaseTitle, localizedScene } from "@/lib/content/localized";
import { initials } from "@/lib/text";

type Stage = "front" | "back" | "graded";

const GRADE_STYLE: Record<Grade, string> = {
  again: "border-rose-700 text-rose-300 hover:bg-rose-950/40",
  hard: "border-amber-700 text-amber-300 hover:bg-amber-950/40",
  good: "border-emerald-700 text-emerald-300 hover:bg-emerald-950/40",
  easy: "border-sky-700 text-sky-300 hover:bg-sky-950/40",
};

export default function FlashcardsPage({ params }: { params: Promise<{ phaseId: string }> }) {
  const { phaseId } = use(params);
  const phase = getPhase(phaseId);
  const { lang } = useLanguage();
  const t = UI[lang];
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("front");
  const [done, setDone] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const concepts = phase?.concepts ?? [];
  const current = concepts[index];
  const character = current ? characterFor(current.id) : undefined;
  const localized = current ? localizedConcept(current, lang) : undefined;

  const GRADE_LABEL: Record<Grade, string> = {
    again: t.gradeAgain,
    hard: t.gradeHard,
    good: t.gradeGood,
    easy: t.gradeEasy,
  };

  if (!phase) return <p>{t.phaseNotFound}</p>;

  function grade(g: Grade) {
    if (!current) return;
    const row = upsertReview(current.id, g);
    const reachedMastered = g !== "again" && row.stage === 5;
    const gained = awardXpForReview(g, reachedMastered);
    setXpGained((x) => x + gained);
    setFeedback(reachedMastered ? t.gradedMastered(gained) : gained > 0 ? t.gradedPlain(gained) : t.gradedNone);
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
        <h1 className="text-2xl font-bold">{t.flashcardsComplete}</h1>
        <p className="text-neutral-400">{t.xpEarned(xpGained)}</p>
        <Link href="/" className="text-emerald-400 hover:underline">
          {t.backToDashboard}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div className="flex items-center justify-between text-sm text-neutral-400">
        <span>
          {t.phaseLabel(phase.order, localizedPhaseTitle(phase, lang))} · {t.flashcardsSubtitle}
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

        {stage === "front" && current && localized && (
          <div className="space-y-4">
            {character && (
              <p className="text-sm text-fuchsia-300/90 border-l-2 border-fuchsia-800 pl-3">
                {localizedScene(current.id, character.scene, lang)}
              </p>
            )}
            <p className="text-lg font-medium text-neutral-100">{localized.prompt}</p>
            <p className="text-xs text-neutral-500 italic">{t.recallHint}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setStage("back")}
                className="flex-1 rounded-lg bg-neutral-100 text-neutral-900 py-3 text-base font-medium hover:bg-white"
              >
                {t.showAnswer}
              </button>
              <button
                onClick={next}
                className="rounded-lg border border-neutral-700 text-neutral-400 px-5 py-3 text-base font-medium hover:border-neutral-500 hover:text-neutral-200"
              >
                {t.skip}
              </button>
            </div>
          </div>
        )}

        {(stage === "back" || stage === "graded") && localized && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{localized.name}</h2>
            <p className="text-neutral-300">{localized.lesson}</p>
            {lang === "en" && (
              <p className="text-xs text-neutral-500 font-mono tracking-wide">{initials(localized.lesson)}</p>
            )}
            <p className="text-sm text-sky-300/90 border-l-2 border-sky-800 pl-3">
              {t.example}: {localized.example}
            </p>
            <p className="text-sm text-emerald-300/90 border-l-2 border-emerald-800 pl-3">
              {t.relationTitle}: {localized.relation}
            </p>

            {stage === "back" && (
              <div className="space-y-2">
                <p className="text-xs text-neutral-500">{t.howWellRemembered}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(["again", "hard", "good", "easy"] as Grade[]).map((g) => (
                    <button
                      key={g}
                      onClick={() => grade(g)}
                      className={`rounded-lg border py-3 text-base font-medium transition-colors ${GRADE_STYLE[g]}`}
                    >
                      {GRADE_LABEL[g]}
                    </button>
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-full rounded-lg border border-neutral-700 text-neutral-400 py-2.5 text-sm font-medium hover:border-neutral-500 hover:text-neutral-200"
                >
                  {t.skip}
                </button>
              </div>
            )}

            {stage === "graded" && (
              <>
                {feedback && <p className="text-center text-sm text-amber-400">{feedback}</p>}
                <button
                  onClick={next}
                  className="w-full rounded-lg bg-neutral-100 text-neutral-900 py-3 text-base font-medium hover:bg-white"
                >
                  {t.next}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

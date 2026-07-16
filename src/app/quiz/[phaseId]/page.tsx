"use client";

import { useState, use, useMemo } from "react";
import Link from "next/link";
import { getPhase } from "@/lib/content/phases";
import { characterFor } from "@/lib/content/characters";
import { type QuizQuestion } from "@/lib/content/quizzes";
import { upsertReview, awardXpForReview } from "@/lib/db";
import { useLanguage } from "@/lib/language";
import { UI } from "@/lib/ui-strings";
import { localizedConcept, localizedPhaseTitle, localizedScene, localizedQuiz } from "@/lib/content/localized";
import { initials } from "@/lib/text";

type Stage = "study" | "question" | "answered";

function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickQuestion(questions: QuizQuestion[]): QuizQuestion {
  const base = questions[Math.floor(Math.random() * questions.length)];
  const order = shuffle(base.options.map((_, i) => i));
  return {
    question: base.question,
    options: order.map((i) => base.options[i]),
    correctIndex: order.indexOf(base.correctIndex),
  };
}

export default function QuizPage({ params }: { params: Promise<{ phaseId: string }> }) {
  const { phaseId } = use(params);
  const phase = getPhase(phaseId);
  const { lang } = useLanguage();
  const t = UI[lang];
  const [index, setIndex] = useState(0);
  const [stage, setStage] = useState<Stage>("study");
  const [done, setDone] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const concepts = phase?.concepts ?? [];
  const current = concepts[index];
  const character = current ? characterFor(current.id) : undefined;
  const localized = current ? localizedConcept(current, lang) : undefined;
  const question = useMemo(
    () => (current ? pickQuestion(localizedQuiz(current.id, lang)) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [current?.id, lang]
  );

  if (!phase) return <p>{t.phaseNotFound}</p>;

  function selectOption(optionIndex: number) {
    if (selected !== null || !question || !current) return;
    setSelected(optionIndex);
    setStage("answered");
    const correct = optionIndex === question.correctIndex;

    const row = upsertReview(current.id, correct ? "good" : "again");
    const reachedMastered = correct && row.stage === 5;
    const gained = awardXpForReview(correct ? "good" : "again", reachedMastered);

    setXpGained((x) => x + gained);
    setFeedback(
      correct
        ? reachedMastered
          ? t.correctMastered(gained)
          : t.correctPlain(gained)
        : t.incorrect(question.options[question.correctIndex])
    );
  }

  function next() {
    setFeedback(null);
    setSelected(null);
    setStage("study");
    if (index + 1 < concepts.length) {
      setIndex((i) => i + 1);
    } else {
      setDone(true);
    }
  }

  if (done) {
    return (
      <div className="space-y-4 text-center py-16">
        <h1 className="text-2xl font-bold">{t.quizComplete}</h1>
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
        <span>{t.phaseLabel(phase.order, localizedPhaseTitle(phase, lang))}</span>
        <span>
          {index + 1}/{concepts.length}
        </span>
      </div>

      <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 space-y-4">
        {character && (
          <div className="text-xs uppercase tracking-wide text-fuchsia-400">
            {character.franchise}: {character.character}
          </div>
        )}
        <h2 className="text-xl font-semibold">{localized?.name}</h2>

        {stage === "study" && localized && current && (
          <div className="space-y-4">
            <p className="text-neutral-300">{localized.lesson}</p>
            {lang === "en" && (
              <p className="text-xs text-neutral-500 font-mono tracking-wide">{initials(localized.lesson)}</p>
            )}
            <p className="text-sm text-sky-300/90 border-l-2 border-sky-800 pl-3">
              {t.example}: {localized.example}
            </p>
            {character && (
              <p className="text-sm text-fuchsia-300/90 border-l-2 border-fuchsia-800 pl-3">
                {localizedScene(current.id, character.scene, lang)}
              </p>
            )}
            <button
              onClick={() => setStage("question")}
              className="w-full rounded-lg bg-neutral-100 text-neutral-900 py-3 text-base font-medium hover:bg-white"
            >
              {t.readyForQuiz}
            </button>
          </div>
        )}

        {(stage === "question" || stage === "answered") && question && (
          <div className="space-y-4">
            <p className="text-neutral-300 font-medium">{question.question}</p>
            <div className="flex flex-col gap-2">
              {question.options.map((opt, i) => {
                const isSelected = selected === i;
                const isCorrectOpt = i === question.correctIndex;
                let style = "border-neutral-700 hover:border-neutral-500";
                if (selected !== null) {
                  if (isCorrectOpt) style = "border-emerald-500 bg-emerald-950/40 text-emerald-300";
                  else if (isSelected) style = "border-rose-500 bg-rose-950/40 text-rose-300";
                  else style = "border-neutral-800 opacity-50";
                }
                return (
                  <button
                    key={i}
                    onClick={() => selectOption(i)}
                    disabled={selected !== null}
                    className={`text-left rounded-lg border px-5 py-4 text-base transition-colors ${style}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {feedback && <p className="text-center text-sm text-amber-400">{feedback}</p>}
            {stage === "answered" && (
              <button
                onClick={next}
                className="w-full rounded-lg bg-neutral-100 text-neutral-900 py-3 text-base font-medium hover:bg-white"
              >
                {t.next}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

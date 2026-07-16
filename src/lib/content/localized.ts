import type { Phase, Concept } from "./phases";
import { en, enPhases } from "./en";
import { quizzes, type QuizQuestion } from "./quizzes";
import { quizzesEn } from "./quizzes.en";
import { characterSceneEn } from "./characters.en";
import type { Lang } from "@/lib/language";

export function localizedPhaseTitle(phase: Phase, lang: Lang): string {
  if (lang === "en") return enPhases[phase.id]?.title ?? phase.title;
  return phase.title;
}

export function localizedPhaseSynthesis(phase: Phase, lang: Lang): string {
  if (lang === "en") return enPhases[phase.id]?.synthesis ?? phase.synthesis;
  return phase.synthesis;
}

export function localizedConcept(concept: Concept, lang: Lang): Concept {
  const enC = en[concept.id];
  if (lang === "en" && enC) {
    return {
      id: concept.id,
      name: enC.name,
      lesson: enC.lesson,
      example: enC.example,
      relation: enC.relation ?? concept.relation,
      prompt: enC.prompt ?? concept.prompt,
    };
  }
  return concept;
}

export function localizedScene(conceptId: string, sceneEs: string, lang: Lang): string {
  if (lang === "en") return characterSceneEn[conceptId] ?? sceneEs;
  return sceneEs;
}

export function localizedQuiz(conceptId: string, lang: Lang): QuizQuestion[] {
  if (lang === "en") return quizzesEn[conceptId] ?? quizzes[conceptId] ?? [];
  return quizzes[conceptId] ?? [];
}

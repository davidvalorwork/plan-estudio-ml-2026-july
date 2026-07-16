import type { Lang } from "@/lib/language";

export type GuideSection = { heading: string; steps: string[] };
export type GuideContent = { title: string; intro: string; sections: GuideSection[]; closing: string };

export const GUIDE: Record<Lang, GuideContent> = {
  es: {
    title: "Cómo usar esta herramienta para estudiar",
    intro:
      "No es solo un banco de flashcards — combina varias técnicas de memoria a propósito. Esta guía es el protocolo completo, paso a paso.",
    sections: [
      {
        heading: "La primera vez que ves un concepto",
        steps: [
          "Entrá a la Fase y leé primero la síntesis completa de la fase (🧩 arriba) — da el mapa general antes de las piezas sueltas.",
          "Por cada concepto, leé en este orden: lección → ejemplo → relación. No te saltees \"relación\": es lo que evita memorizar datos aislados.",
          "Leé la escena del personaje y visualizala activamente — es el gancho de doble codificación (imagen + concepto).",
          "Pasá a Quiz de esa fase — reconocimiento inmediato, detecta huecos obvios el mismo día.",
          "Pasá a Tarjetas — recuerdo libre, más exigente. Autocalificate con honestidad: si dudaste, es \"Difícil\", no \"Bien\".",
        ],
      },
      {
        heading: "Todos los días",
        steps: [
          "Abrí el dashboard y mirá \"Repaso hoy\" — hacé solo esos. No repasar lo que no está vencido es lo que hace funcionar la repetición espaciada (Rule of Five: inmediato → 24h → 1 semana → 1 mes → 3 meses corre solo en el fondo).",
          "Usá Tarjetas para esos repasos (más diagnóstico) y Quiz cuando tengas poco tiempo.",
          "Sumá 3-5 conceptos nuevos por día, no una fase entera de una vez.",
        ],
      },
      {
        heading: "Para memorizar algo palabra por palabra",
        steps: [
          "Cambiá el selector a English — ahí aparece la pista de iniciales al final de la explicación.",
          "Tapá el texto, mirá solo las iniciales, recitá en voz alta, después revisá.",
          "Si el texto es largo, aplicá el Recall Rehearsal: repasalo adelante, atrás, desde el centro hacia los dos lados, salteando pares/impares, y entrando al azar — para no perder siempre la misma parte del medio.",
        ],
      },
      {
        heading: "Una vez por semana",
        steps: [
          "Hacé una pasada completa de una fase entera en voz alta, usando solo la pista del personaje como disparador, y grabate — la sección Guion tiene los 96 conceptos ya ordenados para esto. Te obliga a explicar, no solo reconocer, y ahí aparecen los huecos que el quiz no mostró.",
        ],
      },
    ],
    closing:
      "La idea general: entendé antes de memorizar, recordá activamente todos los días solo lo que toca, y reservá la memorización dura (iniciales + recitación en voz alta) para lo que realmente necesitás verbatim — para la mayoría de los conceptos alcanza con entenderlos y poder explicarlos con tus palabras.",
  },
  en: {
    title: "How to use this tool to study",
    intro:
      "It's not just a flashcard bank — it deliberately combines several memory techniques. This guide is the full step-by-step protocol.",
    sections: [
      {
        heading: "The first time you see a concept",
        steps: [
          "Open the Phase and read the full phase synthesis first (🧩 at the top) — it gives you the big picture before the individual pieces.",
          "For each concept, read in this order: lesson → example → relation. Don't skip \"relation\" — it's what keeps you from memorizing isolated facts.",
          "Read the character scene and actively visualize it — that's the dual-coding hook (image + concept).",
          "Move to that phase's Quiz — immediate recognition, catches obvious gaps the same day.",
          "Move to Flashcards — free recall, more demanding. Grade yourself honestly: if you hesitated, it's \"Hard\", not \"Good\".",
        ],
      },
      {
        heading: "Every day",
        steps: [
          "Open the dashboard and check \"Due today\" — do only those. Not reviewing what isn't due yet is what makes spaced repetition work (Rule of Five: immediately → 24h → 1 week → 1 month → 3 months runs on its own in the background).",
          "Use Flashcards for those reviews (more diagnostic) and Quiz when you're short on time.",
          "Add 3-5 new concepts per day, not a whole phase at once.",
        ],
      },
      {
        heading: "To memorize something word for word",
        steps: [
          "Switch the toggle to English — that's where the initial-letter cue appears at the end of the explanation.",
          "Cover the text, look only at the initials, recite it out loud, then check.",
          "If the text is long, apply Recall Rehearsal: review it forward, backward, from the center outward both ways, skipping odd/even, and entering at random — so you stop always losing the same middle part.",
        ],
      },
      {
        heading: "Once a week",
        steps: [
          "Do a full read-aloud pass of an entire phase, using only the character cue as the trigger, and record yourself — the Script section already has all 96 concepts laid out for this. It forces you to explain, not just recognize, and that's where you'll find the gaps the quiz didn't show.",
        ],
      },
    ],
    closing:
      "The general idea: understand before memorizing, actively recall every day only what's due, and save hard memorization (initials + reciting aloud) for what you actually need verbatim — for most concepts, understanding them well enough to explain in your own words is enough.",
  },
};

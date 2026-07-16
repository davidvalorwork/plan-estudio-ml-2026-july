import type { Lang } from "@/lib/language";

export type MemoryTipsContent = {
  buttonLabel: string;
  title: string;
  close: string;
  items: string[];
};

// Resumen de la investigación en memory.md, enfocado en lo aplicable a memorizar
// verbatim (no solo conceptos): chunking, recitación en voz alta, Rule of Five,
// Magnetic Bridging Figure, pista de iniciales, Recall Rehearsal de 5 direcciones.
export const MEMORY_TIPS: Record<Lang, MemoryTipsContent> = {
  es: {
    buttonLabel: "Tips de memorización",
    title: "🧠 Tips de memorización",
    close: "Cerrar",
    items: [
      "Cortá el texto en frases cortas (chunks) — la memoria de trabajo sostiene unas 4 a la vez.",
      "Recitá en voz alta antes de revisar — se recuerda mejor que releyendo en silencio (production effect).",
      "Repetición espaciada (Rule of Five): inmediato → 24h → 1 semana → 1 mes → 3 meses.",
      "Un personaje recorre la secuencia (Magnetic Bridging Figure): cada estación del recorrido es un chunk distinto del texto.",
      "Pista de iniciales: mirá solo la primera letra de cada palabra e intentá recitar el resto de memoria.",
      "Recall Rehearsal (5 direcciones): repasá adelante, atrás, desde el centro hacia los dos lados, salteando pares/impares, y entrando al azar — para no perder siempre la mitad del texto.",
    ],
  },
  en: {
    buttonLabel: "Memorization tips",
    title: "🧠 Memorization tips",
    close: "Close",
    items: [
      "Cut the text into short phrases (chunks) — working memory holds about 4 at a time.",
      "Recite it out loud before checking — remembered better than re-reading silently (production effect).",
      "Spaced repetition (Rule of Five): immediately → 24h → 1 week → 1 month → 3 months.",
      "One character walks the sequence (Magnetic Bridging Figure): each station on the route is a different chunk of the text.",
      "Initial-letter cue: look only at the first letter of each word and try to recite the rest from memory.",
      "Recall Rehearsal (5 directions): review forward, backward, from the center outward both ways, skipping odd/even stations, and entering at random — so you stop always losing the middle of the text.",
    ],
  },
};

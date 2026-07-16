// Genera un guion en texto plano/markdown para grabarte recitando todos los
// conceptos del plan, en el mismo orden encadenado que usan los personajes
// (fase por fase, y dentro de cada fase en el orden de la cadena de memoria).
// Uso: npx tsx scripts/generate-recitation-script.ts > GUION_RECITACION.md

import { phases } from "../src/lib/content/phases";
import { characterFor } from "../src/lib/content/characters";

const lines: string[] = [];

lines.push("# Guion de recitación — Plan ML / Transformers / RL");
lines.push("");
lines.push(
  "Guion para grabarte en voz alta explicando cada concepto, en el mismo orden de la cadena de personajes (fase 0 → fase 8). " +
    "Técnica: por cada concepto, primero intentá recitar de memoria la lección y el ejemplo usando solo el título y la escena del " +
    "personaje como pista (recuerdo activo / active recall); recién después leé el texto completo para corregirte. Grabarte y " +
    "escucharte luego es una forma de repetición espaciada adicional."
);
lines.push("");

let globalIndex = 0;
const totalConcepts = phases.reduce((n, p) => n + p.concepts.length, 0);

for (const phase of phases) {
  lines.push(`## Fase ${phase.order} — ${phase.title}`);
  lines.push("");
  lines.push(`_Síntesis de la fase:_ ${phase.synthesis}`);
  lines.push("");

  for (const concept of phase.concepts) {
    globalIndex += 1;
    const character = characterFor(concept.id);
    lines.push(`### ${globalIndex}/${totalConcepts}. ${concept.name}`);
    lines.push("");
    if (character) {
      lines.push(`**Pista (${character.franchise} — ${character.character}):** ${character.scene}`);
      lines.push("");
    }
    lines.push(`**Recitá primero de memoria, luego corregí con esto:**`);
    lines.push("");
    lines.push(`- Concepto: ${concept.lesson}`);
    lines.push(`- Ejemplo: ${concept.example}`);
    lines.push(`- Relación con lo demás: ${concept.relation}`);
    lines.push(`- Pregunta de autoevaluación: ${concept.prompt}`);
    lines.push("");
  }
}

console.log(lines.join("\n"));

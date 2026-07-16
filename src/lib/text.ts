// Pista de iniciales: primera letra de cada palabra, para memorizar un texto
// palabra por palabra (técnica clásica de memorización verbatim de discursos/citas).
export function initials(text: string): string {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.match(/[A-Za-zÀ-ÿ0-9]/)?.[0]?.toUpperCase() ?? word[0])
    .join(" ");
}

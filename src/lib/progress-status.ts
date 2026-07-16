import type { ConceptProgressRow } from "@/lib/db";

export type Status = "not-started" | "learning" | "mastered";

export function statusFromRow(row: ConceptProgressRow | undefined): Status {
  if (!row || row.stage === 0) return "not-started";
  if (row.stage >= 5) return "mastered";
  return "learning";
}

export function makeStatusLookup(rows: ConceptProgressRow[]) {
  const byId = new Map(rows.map((r) => [r.concept_id, r]));
  return (conceptId: string): Status => statusFromRow(byId.get(conceptId));
}

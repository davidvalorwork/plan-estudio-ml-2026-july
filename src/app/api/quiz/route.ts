import { NextResponse } from "next/server";
import { upsertReview, awardXpForReview } from "@/lib/db";

export async function POST(req: Request) {
  const body = (await req.json()) as { conceptId?: string; remembered?: boolean };
  const { conceptId, remembered } = body;
  if (!conceptId || typeof remembered !== "boolean") {
    return NextResponse.json({ error: "conceptId y remembered son requeridos" }, { status: 400 });
  }

  const row = upsertReview(conceptId, remembered);
  const reachedMastered = remembered && row.stage === 5;
  awardXpForReview(remembered, reachedMastered);

  return NextResponse.json({ row, reachedMastered });
}

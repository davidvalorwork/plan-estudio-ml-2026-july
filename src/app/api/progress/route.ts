import { NextResponse } from "next/server";
import { getAllProgress, getUserStats } from "@/lib/db";

export async function GET() {
  const progress = getAllProgress();
  const stats = getUserStats();
  return NextResponse.json({ progress, stats });
}

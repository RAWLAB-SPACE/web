import { NextResponse } from "next/server";

export async function GET() {
  const hasToken = Boolean(process.env.INSTAGRAM_ACCESS_TOKEN);

  return NextResponse.json({
    connected: hasToken,
    source: hasToken ? "instagram" : "mock",
    message: hasToken
      ? "Instagram token detected."
      : "No Instagram token found. Using mock data.",
  });
}
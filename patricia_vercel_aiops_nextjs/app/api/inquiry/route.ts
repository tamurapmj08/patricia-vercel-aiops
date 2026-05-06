import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload?.email || !payload?.name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (process.env.FORM_ENDPOINT) {
    await fetch(process.env.FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  return NextResponse.json({ ok: true, message: "Inquiry received" });
}

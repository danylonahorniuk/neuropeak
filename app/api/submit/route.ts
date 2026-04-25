import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return NextResponse.json(
      { error: "Google Script URL not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name, phone, email, comment } = body;

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, comment }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Submit error:", err);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}

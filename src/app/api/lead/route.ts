import { NextResponse } from "next/server";

// Lead form submissions are validated here and forwarded to the Van and Man
// Manchester Google Sheet via its Apps Script webhook (public /exec endpoint).
const LEAD_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwePdNfOsTaE_AOMXuN840SjZKBsckCEsG6pGf4jIbRv32wDry7uq1opZnkiaKeofHg/exec";

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
};

export async function POST(request: Request) {
  let data: Lead = {};
  try {
    data = (await request.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  if (!data.name || !data.phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required" },
      { status: 400 }
    );
  }

  const lead = {
    site: "Van and Man Manchester",
    name: String(data.name).slice(0, 200),
    phone: String(data.phone).slice(0, 40),
    email: data.email ? String(data.email).slice(0, 200) : "",
    service: data.service ? String(data.service).slice(0, 120) : "",
    location: data.location ? String(data.location).slice(0, 120) : "",
    message: data.message ? String(data.message).slice(0, 2000) : "",
    receivedAt: new Date().toISOString(),
    source: "vanandmanmanchester.co.uk",
  };

  // Forward to the Google Sheet. A webhook hiccup must not block the customer
  // or lose the lead, so we log on failure and still return ok.
  try {
    const res = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    if (!res.ok) console.error("Lead webhook non-OK:", res.status, lead);
  } catch (err) {
    console.error("Lead webhook failed:", err, lead);
  }

  return NextResponse.json({ ok: true });
}

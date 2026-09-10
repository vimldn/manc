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

  // Forward to the Google Sheet. Delivery is attempted twice before it is
  // called a failure, because a single transient Apps Script blip is common.
  //
  // The response reports delivery HONESTLY. A lead that never reached the
  // sheet must not be reported to the customer as sent, and must not be
  // counted as a conversion in GA4 - a silently lost lead is the worst
  // outcome here. Every attempt is logged server-side either way, so the
  // details survive in the Vercel logs even when the webhook is down.
  let delivered = false;
  let lastError = "";

  for (let attempt = 1; attempt <= 2 && !delivered; attempt++) {
    try {
      const res = await fetch(LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (res.ok) {
        // The Apps Script replies {"ok":true,"tab":"Manchester"} on a good
        // write. Treat an explicit ok:false as a failure; anything that is
        // not JSON is treated as success, since HTTP 200 is the contract.
        let body: unknown = null;
        try {
          body = JSON.parse(await res.text());
        } catch {
          body = null;
        }
        const rejected =
          body !== null &&
          typeof body === "object" &&
          "ok" in (body as Record<string, unknown>) &&
          (body as Record<string, unknown>).ok === false;

        if (rejected) {
          lastError = "webhook rejected";
          console.error(`Lead webhook rejected the lead (attempt ${attempt}):`, body, lead);
        } else {
          delivered = true;
        }
      } else {
        lastError = `HTTP ${res.status}`;
        console.error(`Lead webhook non-OK (attempt ${attempt}):`, res.status, lead);
      }
    } catch (err) {
      lastError = err instanceof Error ? err.message : "fetch failed";
      console.error(`Lead webhook failed (attempt ${attempt}):`, err, lead);
    }
  }

  if (!delivered) {
    console.error(
      `LEAD NOT DELIVERED after 2 attempts (${lastError}), details follow:`,
      JSON.stringify(lead),
    );
    return NextResponse.json(
      { ok: false, delivered: false, error: "Could not record the enquiry" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}

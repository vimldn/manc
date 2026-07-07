import { NextResponse } from "next/server";

// ---------------------------------------------------------------
// LEAD HANDLER
// This receives the quote/contact form submissions.
//
// Right now it just logs the lead to the server console so nothing is
// lost while the site is being set up. Before you rent this site out,
// connect ONE of the options below so leads reach the operator.
//
// Option A - Email: use a service like Resend/SendGrid to email the lead.
// Option B - Zapier / Make webhook: POST the lead to a webhook URL.
// Option C - Google Sheets: POST to a Google Apps Script web app URL
//            (this matches the simple, no-database webhook approach).
// Option D - CRM: POST to the operator's CRM inbound endpoint.
//
// Set the webhook URL as an environment variable (LEAD_WEBHOOK_URL) in
// Vercel so you never commit a secret to the repo.
// ---------------------------------------------------------------

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
};

export async function POST(request: Request) {
  let lead: Lead = {};
  try {
    lead = (await request.json()) as Lead;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  // Minimal server side validation.
  if (!lead.name || !lead.phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required" },
      { status: 400 }
    );
  }

  // Placeholder logging so no lead is silently dropped during setup.
  // Replace this with a real delivery method before going live.
  const received = {
    ...lead,
    receivedAt: new Date().toISOString(),
    source: "vanandmanmanchester.co.uk",
  };
  console.log("NEW LEAD:", JSON.stringify(received));

  // ---- EXAMPLE: forward to a webhook (Zapier / Make / Google Sheets / CRM) ----
  // Uncomment and set LEAD_WEBHOOK_URL in your environment to enable.
  //
  // const webhook = process.env.LEAD_WEBHOOK_URL;
  // if (webhook) {
  //   try {
  //     await fetch(webhook, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(received),
  //     });
  //   } catch (err) {
  //     console.error("Lead webhook failed:", err);
  //     // We still return ok:true so the customer is not blocked by a
  //     // downstream outage. The lead is in the server logs as a backup.
  //   }
  // }

  return NextResponse.json({ ok: true });
}

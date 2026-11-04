// Live leads dashboard copy.
// The lead goes to the fleet push relay (the Fleet Lead List Apps Script) at
// the same moment it goes to this site's sheet webhook, so the dashboard shows
// it within seconds. The relay holds the dashboard secret, so nothing secret
// lives in this repo. The /exec URL is public, hardcoded per fleet convention.
//
// This never throws and never changes what the visitor sees: the sheet webhook
// alone decides the response. If this call fails, the Fleet Lead List index
// still copies the sheet row to the dashboard within a minute.
const LIVE_PUSH_URL =
  "https://script.google.com/macros/s/AKfycbzUAqc7z1aG6fGFoLGv2lAWJiQAk8pppsidf-v-I97UHl0dj-VVmMPlO2sNEQWsZmdX/exec";
// Bare domain, the same label the dashboard index uses for this site.
const LIVE_SITE = "vanandmanmanchester.co.uk";

type LiveLead = {
  site?: string;
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  location?: string;
  message?: string;
  source?: string;
};

// A route that retries the sheet webhook passes the same lead object again;
// it is sent to the dashboard once.
const sent = new WeakSet<object>();

async function pushLive(lead: LiveLead): Promise<void> {
  if (sent.has(lead)) return;
  sent.add(lead);
  try {
    const details = [
      lead.service ? `Service: ${lead.service}` : "",
      lead.location ? `Location: ${lead.location}` : "",
      lead.message ? `Message: ${lead.message.replace(/\s*\n\s*/g, " / ")}` : "",
      lead.source ? `Source: ${lead.source}` : "",
    ].filter(Boolean).join("  |  ");
    await fetch(LIVE_PUSH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        leads: [{
          site: LIVE_SITE,
          name: lead.name || "",
          phone: lead.phone || "",
          email: lead.email || "",
          details,
          leadSheet: lead.site || "",
          tab: "",
          submittedAt: new Date().toISOString(),
          tz: "Europe/London",
        }],
      }),
      // Apps Script answers a POST with a redirect once doPost has run; the
      // relay has done its work by then, so there is nothing to follow.
      redirect: "manual",
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    // Deliberately silent: the sheet has the lead and the index catches up.
  }
}

/**
 * fetch() for the sheet webhook, plus the live dashboard copy in parallel.
 * Returns (or throws) exactly what the webhook fetch returns (or throws).
 */
export async function fetchWithLivePush(
  lead: LiveLead,
  input: string,
  init: RequestInit,
): Promise<Response> {
  const [res] = await Promise.all([fetch(input, init), pushLive(lead)]);
  return res;
}

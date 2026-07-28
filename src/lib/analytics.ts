// -------------------------------------------------------------
// Central analytics helper. Wraps gtag (GA4, id in layout.tsx) so every
// conversion event goes through one typed function. No personally
// identifiable form data (name, phone, email) is ever sent - only the
// event name and non-PII context such as the selected service or area.
//
// Events:
//   call_click        - user tapped a telephone link
//   whatsapp_click    - user tapped a WhatsApp CTA
//   quote_click       - user tapped a "Get a quote" button/link
//   quote_submit      - quote form submitted successfully
//   quote_error       - quote form failed validation
//   email_click       - user tapped an email link
// -------------------------------------------------------------

export type AnalyticsEvent =
  | "call_click"
  | "whatsapp_click"
  | "quote_click"
  | "quote_submit"
  | "quote_error"
  | "email_click";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a GA4 event. Safe to call on the server or before gtag loads. */
export function track(event: AnalyticsEvent, params: Params = {}) {
  if (typeof window === "undefined") return;
  // Also push to dataLayer so GTM setups can pick it up if added later.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

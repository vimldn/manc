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
//   quote_submit      - the API ACCEPTED the lead. Never fired on click alone,
//                       and never fired when the request failed.
//   quote_error       - validation failed, the network failed, or the API
//                       rejected the lead. Carries error_type.
//   email_click       - user tapped an email link
//
// GA4 key events (conversions): quote_submit and call_click only.
// quote_click and quote_error are diagnostic and must stay unmarked.
//
// Every event carries page_path automatically so a conversion can be traced
// back to the page it started on (the long-distance page is the one that
// matters most here). Never add a parameter that carries a name, phone
// number, email address or free-text message.
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
  const payload: Params = { page_path: window.location.pathname, ...params };
  // Also push to dataLayer so GTM setups can pick it up if added later.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
}

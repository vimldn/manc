// -------------------------------------------------------------
// SITE CONFIG - single source of truth for all business data.
//
// Change a phone number, WhatsApp number, opening hours, insurance
// figure or review count HERE in one place and it updates everywhere.
// Nothing business-specific should be hardcoded in components or pages.
//
// PLACEHOLDER RULE: fields wrapped in PLACEHOLDER(...) are NOT yet
// verified. Components must not render a PLACEHOLDER value to the public.
// Helper `isReal()` below returns false for any unfilled placeholder, so
// UI can hide unverified claims until the operator supplies real data.
// -------------------------------------------------------------

/** Marks a value the operator still needs to confirm. Never render to public. */
export const PLACEHOLDER = (label: string) => `__PLACEHOLDER__${label}`;

/** True only when a config value is present and not an unfilled placeholder. */
export const isReal = (v: unknown): v is string =>
  typeof v === "string" && v.trim().length > 0 && !v.startsWith("__PLACEHOLDER__");

export const site = {
  // Display brand. Domain stays vanandmanmanchester.co.uk; the public brand
  // reads "Man and Van Manchester" (fleet naming, matches search intent).
  name: "Man and Van Manchester",

  // Registered legal entity name for schema/legal pages. UNCONFIRMED.
  legalName: PLACEHOLDER("REGISTERED COMPANY NAME"),

  domain: "vanandmanmanchester.co.uk",
  url: "https://vanandmanmanchester.co.uk",

  // Manchester dialling code is 0161.
  phoneDisplay: "0161 399 8702",
  phoneTel: "+441613998702",

  // Lead email. Point the lead API at the operator's inbox / Zapier / CRM.
  email: "quotes@vanandmanmanchester.co.uk",

  // WhatsApp. `enabled` gates every WhatsApp CTA in the UI. Keep it false
  // until a REAL WhatsApp business number is confirmed, then set the number
  // in full international format (no +, no spaces) and flip enabled to true.
  whatsapp: {
    enabled: false,
    number: PLACEHOLDER("WHATSAPP NUMBER e.g. 447700900000"),
    prefill: "Hello, I would like a quote for a man and van job in Manchester.",
  },

  city: "Manchester",
  region: "Greater Manchester",
  country: "United Kingdom",

  // ---------------------------------------------------------------
  // ADDRESS
  //
  // 3 Piccadilly Place M1 3BN geocodes to Orega Serviced Offices, so this is
  // an office address rather than a staffed customer-facing shopfront. The
  // operator instructed on 2026-08-07 that it be published in the footer and
  // on the contact page, so showPublicly is on.
  //
  // Do NOT list this address as a location on a Google Business Profile: GBP
  // guidelines forbid representing a serviced/virtual office as an operating
  // location for an area-served mobile business. Website display is separate.
  //
  // publicStatus is a label only, nothing reads it:
  //   "staffed"    - genuine staffed premises
  //   "registered" - registered / office address
  //   "virtual"    - serviced or virtual office
  //   "service-area" - no public address
  // ---------------------------------------------------------------
  address: {
    street: "3 Piccadilly Place",
    locality: "Manchester",
    region: "Greater Manchester",
    postcode: "M1 3BN",
    countryCode: "GB",
    mapQuery: "3 Piccadilly Place, Manchester M1 3BN",
    publicStatus: "registered" as "staffed" | "registered" | "virtual" | "service-area",
    showPublicly: true,
  },

  hours: "Mon to Sun, 7am to 9pm",
  openingHoursSchema: "Mo-Su 07:00-21:00",

  strapline: "Reliable man and van removals across Manchester",

  // ---------------------------------------------------------------
  // TRUST DATA. Every field here is UNVERIFIED until the operator confirms.
  // Nothing below renders publicly while it is a PLACEHOLDER (see isReal()).
  // Do NOT invent any of these values - they carry legal / E-E-A-T risk.
  // ---------------------------------------------------------------
  companyNumber: PLACEHOLDER("COMPANIES HOUSE NUMBER, or blank if sole trader"),
  vatNumber: PLACEHOLDER("VAT NUMBER, or blank if not VAT registered"),

  reviews: {
    // Only fill these from a genuine Google Business Profile / Trustpilot.
    googleUrl: PLACEHOLDER("GOOGLE BUSINESS PROFILE URL"),
    googleRating: PLACEHOLDER("GENUINE GOOGLE RATING e.g. 4.9"),
    googleCount: PLACEHOLDER("GENUINE GOOGLE REVIEW COUNT"),
    trustpilotUrl: PLACEHOLDER("TRUSTPILOT URL, if used"),
    trustpilotRating: PLACEHOLDER("TRUSTPILOT RATING, if used"),
  },

  yearsTrading: PLACEHOLDER("GENUINE YEARS TRADING or founding year"),
  movesCompleted: PLACEHOLDER("GENUINE COMPLETED-MOVE COUNT, if tracked"),

  insurance: {
    provider: PLACEHOLDER("INSURANCE PROVIDER NAME"),
    goodsInTransit: PLACEHOLDER("VERIFIED GOODS IN TRANSIT LIMIT e.g. £10,000"),
    publicLiability: PLACEHOLDER("VERIFIED PUBLIC LIABILITY LIMIT e.g. £1,000,000"),
    employersLiability: PLACEHOLDER("EMPLOYERS LIABILITY LIMIT, if staff employed"),
  },

  // Environment Agency waste carrier registration. REQUIRED before any
  // "licensed waste" claim on the rubbish-removal / clearance pages.
  wasteCarrierReg: PLACEHOLDER("ENVIRONMENT AGENCY WASTE CARRIER REGISTRATION NUMBER"),

  fleet: {
    vanCount: PLACEHOLDER("NUMBER OF VANS, if the operator wants to state it"),
  },

  social: {
    facebook: PLACEHOLDER("FACEBOOK PAGE URL"),
    instagram: PLACEHOLDER("INSTAGRAM URL"),
  },
};

// Primary "nearby areas" surfaced on the homepage and in copy.
export const primaryAreas = [
  "Manchester City Centre",
  "Salford",
  "Didsbury",
  "Chorlton",
  "Fallowfield",
];

/** Build a wa.me link with the pre-filled enquiry message. */
export const whatsappHref = () =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.prefill)}`;

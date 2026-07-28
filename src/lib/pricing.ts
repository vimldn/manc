import { PLACEHOLDER } from "./config";

// -------------------------------------------------------------
// PRICING DATA. No genuine prices have been supplied, so every `from`
// value is a PLACEHOLDER and the UI shows "Price on quote" instead of a
// number (see isReal() in config). When the operator confirms real rates,
// replace the PLACEHOLDER(...) values with plain strings like "£45/hour"
// and the figures appear automatically. Do NOT invent prices.
// -------------------------------------------------------------

export type PriceRow = {
  key: string;
  label: string;
  detail: string;
  // e.g. "£45/hour" or "£120". Keep as PLACEHOLDER until confirmed.
  from: string;
  bestFor: string;
};

export const priceRows: PriceRow[] = [
  {
    key: "one-small",
    label: "One mover, small van",
    detail: "Driver plus a short-wheelbase or SWB van.",
    from: PLACEHOLDER("ONE MOVER SMALL VAN RATE e.g. £40/hour"),
    bestFor: "Single items, a few boxes, a studio move.",
  },
  {
    key: "one-large",
    label: "One mover, large van",
    detail: "Driver plus a long-wheelbase or Luton van.",
    from: PLACEHOLDER("ONE MOVER LARGE VAN RATE"),
    bestFor: "Studio and one-bed flats, small deliveries.",
  },
  {
    key: "two-large",
    label: "Two movers, large van",
    detail: "Two people plus a long-wheelbase or Luton van.",
    from: PLACEHOLDER("TWO MOVERS LARGE VAN RATE"),
    bestFor: "One and two-bed flats and small houses.",
  },
  {
    key: "two-luton",
    label: "Two movers, Luton van",
    detail: "Two people plus a Luton, often with a tail lift.",
    from: PLACEHOLDER("TWO MOVERS LUTON RATE"),
    bestFor: "Two and three-bed houses, larger moves.",
  },
  {
    key: "single-item",
    label: "Single item delivery",
    detail: "One collection and one drop-off, priced per job.",
    from: PLACEHOLDER("SINGLE ITEM FROM PRICE"),
    bestFor: "A sofa, bed, wardrobe or Marketplace pickup.",
  },
  {
    key: "long-distance",
    label: "Long distance move",
    detail: "Fixed price on the route, load and mileage.",
    from: PLACEHOLDER("LONG DISTANCE FROM PRICE"),
    bestFor: "Manchester to London and anywhere in the UK.",
  },
];

// Factors that move the price up or down. Purely explanatory, no numbers.
export const priceFactors: { h: string; body: string }[] = [
  { h: "Van size", body: "A bigger van costs more to run, so the right size for the load keeps the price fair. We help you pick it." },
  { h: "Number of movers", body: "One mover is cheapest. A second pair of hands speeds up heavy or stair-heavy jobs and can work out cheaper overall." },
  { h: "Distance and mileage", body: "Local moves are priced on time. Longer runs factor in mileage and fuel, usually as a fixed figure." },
  { h: "Loading time", body: "How much there is, how well it is boxed and how far the carry is all affect how long loading takes." },
  { h: "Stairs and lifts", body: "Upper floors with no lift, or a booked goods lift, add handling time. We plan for it in the quote." },
  { h: "Parking and access", body: "A close, legal parking spot speeds everything up. Long carries, narrow roads and permit zones add time." },
  { h: "Waiting time", body: "If keys, completions or building management hold the job up, waiting time may apply. We tell you the terms up front." },
  { h: "Dismantling and packing", body: "Flat-pack dismantling, reassembly and packing help are optional extras added only if you want them." },
  { h: "Heavy or awkward items", body: "Pianos, large American fridges and gym equipment need the right kit and crew, so mention them when you book." },
  { h: "Weekend or evening", body: "Peak slots such as weekends and end-of-tenancy dates book up fast. Ask and we will tell you what applies." },
];

// Charges the brief asks us to be transparent about. Values are placeholders.
export const priceExtras: { label: string; value: string }[] = [
  { label: "Minimum booking", value: PLACEHOLDER("MINIMUM BOOKING e.g. 2 hours") },
  { label: "Deposit", value: PLACEHOLDER("DEPOSIT POLICY e.g. none, or £X to hold a date") },
  { label: "Waiting time", value: PLACEHOLDER("WAITING TIME RATE") },
  { label: "Cancellation", value: PLACEHOLDER("CANCELLATION / RESCHEDULE POLICY") },
  { label: "Weekend / evening", value: PLACEHOLDER("WEEKEND OR EVENING SURCHARGE, if any") },
  { label: "Packing materials", value: PLACEHOLDER("PACKING MATERIALS PRICE, if supplied") },
  { label: "VAT", value: PLACEHOLDER("VAT STATUS e.g. prices include VAT / not VAT registered") },
];

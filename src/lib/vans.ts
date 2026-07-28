import { PLACEHOLDER } from "./config";

// -------------------------------------------------------------
// VAN GUIDE DATA. Dimensions and capacities are left as PLACEHOLDER
// because the actual fleet is not confirmed. The UI shows the guidance
// text and hides any unfilled dimension. Do NOT invent van dimensions.
// Load examples are deliberately cautious ("as a rough guide") because
// what fits depends on box count, access and whether items dismantle.
// -------------------------------------------------------------

export type Van = {
  key: string;
  name: string;
  // e.g. "approx 2.4m x 1.2m x 1.2m load space". PLACEHOLDER until confirmed.
  dimensions: string;
  movers: string;
  bestFor: string;
  loadExamples: string[];
  access: string;
};

export const vans: Van[] = [
  {
    key: "small",
    name: "Small van (SWB)",
    dimensions: PLACEHOLDER("SMALL VAN LOAD DIMENSIONS"),
    movers: "One mover, second on request",
    bestFor: "Single items and small, quick jobs.",
    loadExamples: [
      "Several boxes and a few small items",
      "A sofa or a mattress on its own",
      "A Marketplace or IKEA pickup",
    ],
    access: "Easiest to park on tight city-centre and terraced streets.",
  },
  {
    key: "lwb",
    name: "Long-wheelbase van (LWB)",
    dimensions: PLACEHOLDER("LWB VAN LOAD DIMENSIONS"),
    movers: "One or two movers",
    bestFor: "Studio and one-bed flat moves.",
    loadExamples: [
      "As a rough guide, a studio or small one-bed flat",
      "A bed, wardrobe, sofa and boxes together",
      "A larger single-item run with extras",
    ],
    access: "Good balance of space and manoeuvrability around Manchester.",
  },
  {
    key: "luton",
    name: "Luton van",
    dimensions: PLACEHOLDER("LUTON VAN LOAD DIMENSIONS"),
    movers: "Two movers recommended",
    bestFor: "One and two-bed homes.",
    loadExamples: [
      "As a rough guide, a one or two-bed flat or small house",
      "White goods, sofas, beds and multiple boxes",
      "A small office or studio relocation",
    ],
    access: "Taller box body needs a little more room to park and reverse.",
  },
  {
    key: "luton-taillift",
    name: "Luton van with tail lift",
    dimensions: PLACEHOLDER("LUTON TAIL-LIFT VAN LOAD DIMENSIONS"),
    movers: "Two movers recommended",
    bestFor: "Larger moves and heavy items.",
    loadExamples: [
      "As a rough guide, a two or three-bed house",
      "Heavy items that are safer lifted than carried",
      "Bulk deliveries and gym or commercial equipment",
    ],
    access: "The tail lift helps with heavy items where there is no step-free route.",
  },
];

// -------------------------------------------------------------
// CASE STUDIES. Only GENUINE completed moves belong here. The array is
// empty until real jobs are supplied - do NOT invent a location, date,
// item list or customer quote. Each record has `published`; the page only
// renders published: true entries, so a draft placeholder never ships.
//
// To add a real case study, push an object matching CaseStudy with
// published: true and only fields you can stand behind.
// -------------------------------------------------------------

export type CaseStudyCategory =
  | "student"
  | "apartment"
  | "house"
  | "office"
  | "single-item"
  | "long-distance"
  | "storage"
  | "same-day";

export const caseStudyCategories: { key: CaseStudyCategory; label: string }[] = [
  { key: "student", label: "Student move" },
  { key: "apartment", label: "City-centre apartment" },
  { key: "house", label: "House removal" },
  { key: "office", label: "Office relocation" },
  { key: "single-item", label: "Single-item collection" },
  { key: "long-distance", label: "Long-distance move" },
  { key: "storage", label: "Storage-unit move" },
  { key: "same-day", label: "Same-day booking" },
];

// One record per genuinely completed job. Required fields are the ones the
// operator will always know after a move. Everything optional is left off
// rather than guessed: an omitted field simply does not render.
//
// `situation` and `outcome` together should read as 100 to 200 words about
// what the job actually involved. Do NOT pad them with invented detail.
export type CaseStudy = {
  published: boolean;
  slug: string;
  category: CaseStudyCategory;
  title: string;
  month: string; // e.g. "September 2026"
  fromArea: string;
  toArea: string;
  vehicle: string;
  crew: string;
  situation: string;
  itemsMoved: string;
  access: string;
  duration: string;
  outcome: string;

  // Optional detail. Record it when it is known, omit it when it is not.
  propertyType?: string; // e.g. "Two-bed flat, third floor"
  stairs?: string; // e.g. "Three flights at collection, none at delivery"
  lift?: string; // e.g. "Goods lift, booked for 9am"
  parking?: string; // e.g. "Loading bay, 30 minute limit"
  distance?: string; // e.g. "About 200 miles"
  price?: string; // Only publish a real figure the operator is happy to show.
  customerQuote?: string; // Genuine, with permission. Never invented.
  photos?: { src: string; alt: string }[]; // Real photographs of the job only.

  relatedService?: string; // service slug this job links back to
};

// GENUINE CASE STUDIES ONLY. Empty until real jobs are supplied.
export const caseStudies: CaseStudy[] = [];

export const publishedCaseStudies = () => caseStudies.filter((c) => c.published);

/** Published jobs that belong to one service page, newest first as entered. */
export const caseStudiesForService = (serviceSlug: string) =>
  publishedCaseStudies().filter((c) => c.relatedService === serviceSlug);

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

export type CaseStudy = {
  published: boolean;
  slug: string;
  category: CaseStudyCategory;
  title: string;
  month: string; // e.g. "June 2026"
  fromArea: string;
  toArea: string;
  vehicle: string;
  crew: string;
  situation: string;
  itemsMoved: string;
  access: string;
  duration: string;
  outcome: string;
  customerQuote?: string; // genuine only
  relatedService?: string; // slug
};

// GENUINE CASE STUDIES ONLY. Empty until real jobs are supplied.
export const caseStudies: CaseStudy[] = [];

export const publishedCaseStudies = () => caseStudies.filter((c) => c.published);

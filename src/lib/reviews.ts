// -------------------------------------------------------------
// REVIEWS. This array is EMPTY on purpose. Do NOT add fabricated
// reviews, names, ratings or dates - that breaches UK CMA/DMCCA rules
// and is an E-E-A-T risk. Only paste genuine, verifiable reviews here
// (e.g. copied from the Google Business Profile), and only then should
// review/aggregateRating schema be considered.
//
// To add a real review, push an object matching the Review type below.
// `category` should be one of the reviewCategories keys so filtering works.
// -------------------------------------------------------------

export type ReviewCategory =
  | "house"
  | "flat"
  | "student"
  | "office"
  | "furniture"
  | "long-distance";

export const reviewCategories: { key: ReviewCategory | "all"; label: string }[] = [
  { key: "all", label: "All reviews" },
  { key: "house", label: "House moves" },
  { key: "flat", label: "Flat moves" },
  { key: "student", label: "Student moves" },
  { key: "office", label: "Office moves" },
  { key: "furniture", label: "Furniture delivery" },
  { key: "long-distance", label: "Long distance" },
];

export type Review = {
  name: string;
  platform: "Google" | "Trustpilot" | "Facebook";
  rating: number; // 1-5, genuine only
  date: string; // ISO date of the review
  category: ReviewCategory;
  area: string;
  text: string;
  sourceUrl?: string;
};

// GENUINE REVIEWS ONLY. Leave empty until real reviews are supplied.
export const reviews: Review[] = [];

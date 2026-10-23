import "server-only";
import content from "@/content/student-moving-articles.json";
import photoCredits from "@/content/student-photo-credits.json";

export type StudentArticle = {
  id: number;
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  university: string;
  bodyHtml: string;
  faqs: { question: string; answer: string }[];
  sources: { title: string; url: string }[];
  publishAt: string;
  originalPublishedAt?: string;
  reviewedAt: string;
  photos: string[];
};

export type StudentPhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  photographer: string;
  sourceUrl: string;
  licence: string;
};

const articles: StudentArticle[] = content;
const photos: StudentPhoto[] = photoCredits;

// Every public entry point uses this gate. These records stay on the server;
// future drafts are never passed to a client component or listed in a sitemap.
export function getPublishedStudentArticles(now = new Date()): StudentArticle[] {
  const timestamp = now.getTime();
  return articles
    .filter((article) => Date.parse(article.publishAt) <= timestamp)
    .sort((a, b) => Date.parse(b.publishAt) - Date.parse(a.publishAt) || a.id - b.id);
}

export function getPublishedStudentArticle(slug: string, now = new Date()) {
  return getPublishedStudentArticles(now).find((article) => article.slug === slug);
}

export function getStudentPhoto(id: string): StudentPhoto {
  const photo = photos.find((item) => item.id === id);
  if (!photo) throw new Error(`Unknown student article photo: ${id}`);
  return photo;
}

export function getRelatedStudentArticles(article: StudentArticle, now = new Date()) {
  return getPublishedStudentArticles(now)
    .filter((other) => other.slug !== article.slug)
    .sort((a, b) => Number(b.university === article.university) - Number(a.university === article.university))
    .slice(0, 4);
}

export function articleDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    timeZone: "Europe/London", day: "numeric", month: "long", year: "numeric",
  });
}

export function prepareStudentArticle(bodyHtml: string) {
  const headings: { id: string; title: string }[] = [];
  // The HTML is reviewed, repository-owned editorial content, not user input.
  const html = bodyHtml
    .replace(/<h2(?:\s[^>]*)?>([\s\S]*?)<\/h2>/g, (_, title: string) => {
      const id = `guide-section-${headings.length + 1}`;
      headings.push({ id, title: title.replace(/<[^>]*>/g, "") });
      return `<h2 id="${id}">${title}</h2>`;
    })
    .replace(/<table(?:\s[^>]*)?>[\s\S]*?<\/table>/g, (table) =>
      `<div class="student-table-scroll" role="region" aria-label="Moving checklist table" tabindex="0">${table}</div>`);
  const sections = html.split(/(?=<h2 id=)/);
  const split = Math.max(1, Math.ceil(sections.length / 2));
  return { headings, firstHalf: sections.slice(0, split).join(""), secondHalf: sections.slice(split).join("") };
}

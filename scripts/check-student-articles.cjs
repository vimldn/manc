/* Run with node scripts/check-student-articles.cjs. No network required. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const articles = require("../src/content/student-moving-articles.json");
const photos = require("../src/content/student-photo-credits.json");
const knownPaths = new Set(Object.keys(require("../src/content/sitemap-dates.json")));
const code = ts.transpileModule(fs.readFileSync(path.join(root, "src/lib/studentArticles.ts"), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
}).outputText;
const exportsObject = {};
vm.runInNewContext(code, {
  exports: exportsObject,
  require: (id) => id === "server-only" ? {} : require(path.join(root, "src", id.replace(/^@\//, ""))),
  Date,
});
const { getPublishedStudentArticles, getPublishedStudentArticle, getRelatedStudentArticles, prepareStudentArticle } = exportsObject;

assert.equal(articles.length, 30, "The approved campaign contains 30 articles");
assert.equal(new Set(articles.map((a) => a.slug)).size, 30, "Slugs must be unique");
assert.deepEqual(articles.map((a) => a.id), Array.from({ length: 30 }, (_, i) => i + 1));

// Independent expected release boundaries, including the UK clock change.
for (const [now, expected] of [
  ["2026-10-23T07:59:59Z", 0], ["2026-10-23T08:00:00Z", 2],
  ["2026-10-24T07:59:59Z", 2], ["2026-10-24T08:00:00Z", 4],
  ["2026-10-25T08:59:59Z", 4], ["2026-10-25T09:00:00Z", 6],
  ["2026-11-06T08:59:59Z", 28], ["2026-11-06T09:00:00Z", 30],
]) assert.equal(getPublishedStudentArticles(new Date(now)).length, expected, `Release boundary ${now}`);

const today = new Date("2026-10-23T12:00:00Z");
const publicToday = new Set(getPublishedStudentArticles(today).map((a) => a.slug));
assert.deepEqual([...publicToday].sort(), ["moving-out-richmond-park-manchester", "moving-out-unsworth-park"].sort());
assert.equal(getPublishedStudentArticle("moving-out-whitworth-park-halls", today), undefined);
assert.equal(getPublishedStudentArticle("halls-to-student-house-manchester", today), undefined, "Legacy version must remain in use before replacement");
assert.equal(getPublishedStudentArticle("halls-to-student-house-manchester", new Date("2026-10-26T09:00:00Z")).originalPublishedAt, "2026-10-22");
for (const a of getPublishedStudentArticles(today)) {
  for (const related of getRelatedStudentArticles(a, today)) assert(publicToday.has(related.slug), "Related links cannot expose future articles");
}

const releases = new Map();
const localDate = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit" });
const localTime = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/London", hour: "2-digit", minute: "2-digit", hour12: false });
let words = 0;
for (const article of articles) {
  const label = `${article.id}: ${article.slug}`;
  const day = localDate.format(new Date(article.publishAt));
  releases.set(day, (releases.get(day) || 0) + 1);
  assert.equal(localTime.format(new Date(article.publishAt)), "09:00", `${label}: UK release time`);
  assert(article.seoTitle.length >= 30 && article.seoTitle.length <= 65, `${label}: SEO title length`);
  assert(article.description.length >= 110 && article.description.length <= 170, `${label}: description length`);
  assert.equal(article.faqs.length, 5, `${label}: five FAQs`);
  assert.equal(article.photos.length, 2, `${label}: two photos`);
  assert.equal(new Set(article.photos).size, 2, `${label}: photos should differ`);
  for (const photoId of article.photos) {
    const photo = photos.find((p) => p.id === photoId);
    assert(photo && photo.alt && photo.width > 0 && photo.height > 0, `${label}: photo metadata`);
    assert(fs.existsSync(path.join(root, "public", photo.src)), `${label}: photo file`);
  }
  const hrefs = [...article.bodyHtml.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  const internal = new Set(hrefs.filter((href) => href.startsWith("/") && !href.startsWith("//")));
  const external = new Set(hrefs.filter((href) => href.startsWith("https://")));
  assert(internal.size >= 3, `${label}: contextual internal links`);
  for (const href of internal) assert(knownPaths.has(href.split("#")[0]), `${label}: existing internal destination ${href}`);
  assert(external.size >= 2, `${label}: authoritative sources`);
  for (const source of article.sources) assert(external.has(source.url), `${label}: source also linked in body`);
  assert(!/<(?:script|iframe|form|h1)\b|\bon\w+=|javascript:/i.test(article.bodyHtml), `${label}: editorial HTML only`);
  const prepared = prepareStudentArticle(article.bodyHtml);
  assert(prepared.headings.length >= 4 && prepared.secondHalf.length > 0, `${label}: useful article structure`);
  const count = `${article.bodyHtml.replace(/<[^>]*>/g, " ")} ${article.faqs.map((f) => `${f.question} ${f.answer}`).join(" ")}`.trim().split(/\s+/).length;
  assert(count >= 750 && count <= 1200, `${label}: article depth`);
  words += count;
}
assert.equal(releases.size, 15, "Fifteen publication days");
for (const [day, count] of releases) assert.equal(count, 2, `${day}: two articles per day`);
console.log(`PASS: 30 articles, ${words.toLocaleString()} words, 60 photo placements, 150 FAQs, 15 days at two per day, DST boundaries and publication visibility.`);

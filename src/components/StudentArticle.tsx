import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import {
  articleDate, getRelatedStudentArticles, getStudentPhoto, prepareStudentArticle,
  type StudentArticle as Article, type StudentPhoto,
} from "@/lib/studentArticles";

function ArticlePhoto({ photo, priority = false }: { photo: StudentPhoto; priority?: boolean }) {
  return (
    <figure className={`student-article-photo${photo.height > photo.width ? " student-article-photo-portrait" : ""}`}>
      <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt}
        sizes="(max-width: 760px) calc(100vw - 46px), (max-width: 1023px) calc(100vw - 72px), 760px"
        priority={priority} className="h-auto w-full rounded-lg" />
      <figcaption>
        Generated illustration. It does not show a named hall or a real customer.
      </figcaption>
    </figure>
  );
}

export default function StudentArticle({ article }: { article: Article }) {
  const path = `/moving-guides/${article.slug}/`;
  const url = site.url + path;
  const hero = getStudentPhoto(article.photos[0]);
  const secondary = getStudentPhoto(article.photos[1]);
  const body = prepareStudentArticle(article.bodyHtml);
  const faqs = article.faqs.map(({ question, answer }) => ({ q: question, a: answer }));
  const related = getRelatedStudentArticles(article);
  const trail = [{ name: "Home", path: "/" }, { name: "Moving Guides", path: "/moving-guides/" }, { name: article.title, path }];
  const wordCount = `${article.bodyHtml.replace(/<[^>]*>/g, " ")} ${article.faqs.map((faq) => `${faq.question} ${faq.answer}`).join(" ")}`.trim().split(/\s+/).length;

  return (
    <>
      <JsonLd data={[
        articleSchema({ headline: article.title, description: article.description, url,
          datePublished: article.originalPublishedAt ?? article.publishAt, dateModified: article.publishAt,
          image: [site.url + hero.src, site.url + secondary.src],
          keywords: [article.primaryKeyword, ...article.secondaryKeywords],
        }),
        breadcrumbSchema(trail), faqSchema(faqs),
      ]} />
      <Breadcrumbs trail={trail} />
      <div className="interior-page interior-moving-guides mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-3">
        <article className="min-w-0 lg:col-span-2" data-student-article={article.slug}>
          <p className="eyebrow">Student moving guides</p>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">{article.title}</h1>
          <div className="student-article-byline">
            <p>By the {site.name} team</p>
            <p><time dateTime={article.originalPublishedAt ?? article.publishAt}>Published {articleDate(article.originalPublishedAt ?? article.publishAt)}</time> · {Math.max(3, Math.ceil(wordCount / 220))} minute read</p>
            {article.originalPublishedAt && <p><time dateTime={article.publishAt}>Updated {articleDate(article.publishAt)}</time></p>}
            <p>Sources checked {articleDate(article.reviewedAt)}</p>
          </div>
          <p className="student-article-intro mt-5 rounded-lg border-l-4 border-brand bg-brand-light p-5">{article.excerpt}</p>
          <ArticlePhoto photo={hero} priority />
          <nav aria-label="On this page" className="student-article-contents rounded-lg border border-gray-200 p-5">
            <p className="font-bold">In this guide</p>
            <ul>
              {body.headings.map((heading) => <li key={heading.id}><a href={`#${heading.id}`}>{heading.title}</a></li>)}
              <li><a href="#student-faqs">Frequently asked questions</a></li>
            </ul>
          </nav>
          <div className="student-article-body" dangerouslySetInnerHTML={{ __html: body.firstHalf }} />
          <ArticlePhoto photo={secondary} />
          <div className="student-article-body" dangerouslySetInnerHTML={{ __html: body.secondHalf }} />
          <section className="student-article-sources">
            <h2>Sources and useful links</h2>
            <ul className="mt-4 space-y-3">
              {article.sources.map((source) => <li key={source.url}><a href={source.url}>{source.title}</a></li>)}
            </ul>
          </section>
          <section className="rounded-lg border border-gray-200 bg-white p-6">
            <h2>Plan your student move</h2>
            <p className="mt-3">Tell us your collection hall, destination, moving date, floor and what needs moving. We can then quote for the transport and loading help you need.</p>
            <Link href="/quote/" className="mt-5 inline-block rounded-md bg-cta px-6 py-3 font-bold text-white hover:bg-cta-dark">Get a student moving quote</Link>
          </section>
        </article>
        <aside className="min-w-0 lg:col-span-1">
          <div className="rounded-lg border border-gray-200 bg-white p-6 lg:sticky lg:top-24">
            <h2>Help with your move</h2>
            <ul className="student-article-related mt-5 space-y-4">
              <li><Link href="/services/student-moves/">Student man and van in Manchester</Link></li>
              <li><Link href="/services/student-storage-manchester/">Transport to and from student storage</Link></li>
              <li><Link href="/prices/">Moving prices and quote information</Link></li>
            </ul>
            {related.length > 0 && <>
              <h3 className="mt-8">More student guides</h3>
              <ul className="student-article-related mt-4 space-y-4">
                {related.map((other) => <li key={other.slug}><Link href={`/moving-guides/${other.slug}/`}>{other.title}</Link></li>)}
              </ul>
            </>}
            <Link href="/moving-guides/" className="mt-6 inline-block font-bold text-brand underline">Browse all moving guides</Link>
          </div>
        </aside>
      </div>
      <div id="student-faqs" className="scroll-mt-24"><Faq faqs={faqs} /></div>
      <Cta label="Need a hand with your student move?" />
    </>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { guides } from "@/lib/guides";
import { articleDate, getPublishedStudentArticles, getStudentPhoto } from "@/lib/studentArticles";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const PATH = "/moving-guides/";
export const dynamic = "force-dynamic";

export const metadata: Metadata = pageMeta({
  title: "Moving Guides for Manchester | Frank's Van and Man Manchester",
  description:
    "Practical Manchester moving guides: student halls, university moves, summer storage, packing, man and van costs and planning your moving day.",
  path: PATH,
});

export default function MovingGuidesPage() {
  const studentArticles = getPublishedStudentArticles();
  const publishedSlugs = new Set(studentArticles.map((article) => article.slug));
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Moving Guides", url: site.url + PATH }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Moving Guides", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Moving Guides", path: PATH },
        ]}
      />

      <div className="interior-page interior-moving-guides mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Moving Guides for Manchester</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Straight answers to the questions people actually ask before a move, written from real
          experience of Manchester streets, stairs and loading bays. No filler.
        </p>

        {studentArticles.length > 0 && <section className="mt-10" aria-labelledby="student-guides-heading">
          <h2 id="student-guides-heading">Student moves and Manchester halls</h2>
          <p className="mt-3 max-w-3xl">Practical help with moving out of university halls, packing your room and arranging transport between homes or storage.</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studentArticles.map((article) => {
              const photo = getStudentPhoto(article.photos[0]);
              return <Link key={article.slug} href={`/moving-guides/${article.slug}/`} className="student-guide-card block overflow-hidden rounded-lg border border-gray-200 bg-white hover:border-brand">
                <Image src={photo.src} width={photo.width} height={photo.height} alt="" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="aspect-[3/2] w-full object-cover" />
                <div className="p-5">
                  <time dateTime={article.publishAt} className="text-xs text-gray-600">{articleDate(article.publishAt)}</time>
                  <h3 className="mt-3 text-brand-dark">{article.title}</h3>
                  <p className="mt-3 text-sm text-gray-700">{article.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand">Read the guide →</span>
                </div>
              </Link>;
            })}
          </div>
        </section>}
        <h2 className="mt-12">More moving advice</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {guides.filter((g) => !publishedSlugs.has(g.slug)).map((g) => (
            <Link
              key={g.slug}
              href={`/moving-guides/${g.slug}/`}
              className="block rounded-lg border border-gray-200 bg-white p-5 hover:border-brand hover:bg-brand-light"
            >
              <h2 className="text-lg font-bold text-brand-dark">{g.h1}</h2>
              <p className="mt-2 text-sm text-gray-700">{g.answer.slice(0, 140)}&hellip;</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">Read the guide</span>
            </Link>
          ))}
        </div>
      </div>

      <Cta label="Ready to Get a Quote?" />
    </>
  );
}

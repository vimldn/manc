import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { guides, getGuide } from "@/lib/guides";
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  const url = `${site.url}/moving-guides/${g.slug}/`;
  return {
    title: g.title,
    description: g.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: g.title, description: g.metaDescription, url, type: "article" },
    twitter: { card: "summary_large_image", title: g.title, description: g.metaDescription },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();

  const url = `${site.url}/moving-guides/${g.slug}/`;
  const reviewed = new Date(g.updated).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: g.h1,
            description: g.metaDescription,
            url,
            datePublished: g.updated,
            dateModified: g.updated,
          }),
          ...(g.faqs ? [faqSchema(g.faqs)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Moving Guides", path: "/moving-guides/" },
            { name: g.h1, path: `/moving-guides/${g.slug}/` },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Moving Guides", path: "/moving-guides/" },
          { name: g.h1, path: `/moving-guides/${g.slug}/` },
        ]}
      />

      <div className="mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold text-gray-900">{g.h1}</h1>
          <p className="mt-2 text-sm text-gray-500">
            Reviewed by the {site.name} team &bull; Last reviewed {reviewed}
          </p>

          {/* Direct answer first */}
          <div className="mt-5 rounded-lg border-l-4 border-brand bg-brand-light p-5">
            <p className="text-gray-800">{g.answer}</p>
          </div>

          {/* Contents */}
          {g.sections.length > 1 && (
            <nav aria-label="On this page" className="mt-6 rounded-lg border border-gray-200 p-4">
              <p className="text-sm font-bold text-gray-900">On this page</p>
              <ul className="mt-2 space-y-1 text-sm">
                {g.sections.map((s, i) => (
                  <li key={s.h2}>
                    <a href={`#s${i}`} className="text-brand hover:text-brand-dark">
                      {s.h2}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {g.sections.map((s, i) => (
            <section key={s.h2} id={`s${i}`} className="mt-8 scroll-mt-24">
              <h2 className="text-xl font-bold text-gray-900">{s.h2}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-3 text-gray-700">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Related</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {g.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="font-semibold text-brand hover:text-brand-dark">
                    {r.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/moving-guides/" className="font-semibold text-brand hover:text-brand-dark">
                  All moving guides
                </Link>
              </li>
            </ul>
          </section>

          <div className="mt-8 rounded-lg bg-brand p-6 text-center">
            <p className="text-lg font-bold text-white">Ready for a quote on your Manchester move?</p>
            <div className="mt-3 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/quote/"
                className="rounded-md bg-cta px-6 py-3 font-bold text-white hover:bg-cta-dark"
              >
                Get a Quote
              </Link>
              <a
                href={`tel:${site.phoneTel}`}
                className="rounded-md border-2 border-white/70 px-6 py-3 font-bold text-white hover:bg-white hover:text-gray-900"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 rounded-lg border border-gray-200 bg-white p-5">
            <h2 className="text-base font-bold text-gray-900">Popular guides</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {guides
                .filter((o) => o.slug !== g.slug)
                .slice(0, 4)
                .map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/moving-guides/${o.slug}/`}
                      className="text-brand hover:text-brand-dark"
                    >
                      {o.h1}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </div>

      {g.faqs && <Faq faqs={g.faqs} />}
      <Cta label="Get help with your move" />
    </>
  );
}

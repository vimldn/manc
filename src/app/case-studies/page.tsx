import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { publishedCaseStudies, caseStudyCategories } from "@/lib/caseStudies";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const PATH = "/case-studies/";

export const metadata: Metadata = pageMeta({
  title: "Recent Moves and Case Studies | Man and Van Manchester",
  description:
    "Real completed moves across Manchester and Greater Manchester, from student moves and city-centre apartments to house removals and long-distance jobs.",
  path: PATH,
});

export default function CaseStudiesPage() {
  const studies = publishedCaseStudies();

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Recent Moves and Case Studies", url: site.url + PATH }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: PATH },
        ]}
      />

      <div className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Recent Moves</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Real jobs from around Manchester, with the van, crew and access challenge for each. We only
          publish moves we have actually done, so this fills up over time rather than with invented
          stories.
        </p>

        {studies.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {studies.map((c) => (
              <article key={c.slug} className="rounded-lg border border-gray-200 bg-white p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {caseStudyCategories.find((k) => k.key === c.category)?.label}
                </span>
                <h2 className="mt-1 text-lg font-bold text-gray-900">{c.title}</h2>
                <p className="mt-1 text-xs text-gray-500">
                  {c.fromArea} to {c.toArea} &bull; {c.month}
                </p>
                <p className="mt-3 text-sm text-gray-700">{c.situation}</p>
                <dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>
                    <dt className="font-semibold text-gray-800">Vehicle</dt>
                    <dd>{c.vehicle}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800">Crew</dt>
                    <dd>{c.crew}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800">Access</dt>
                    <dd>{c.access}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-800">Time</dt>
                    <dd>{c.duration}</dd>
                  </div>
                </dl>
                {c.customerQuote && (
                  <blockquote className="mt-3 border-l-2 border-gray-200 pl-3 text-sm italic text-gray-700">
                    {c.customerQuote}
                  </blockquote>
                )}
                {c.relatedService && (
                  <Link
                    href={`/services/${c.relatedService}/`}
                    className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
                  >
                    Related service
                  </Link>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-lg border border-gray-200 bg-brand-light p-6">
            <h2 className="text-xl font-bold text-brand-dark">Recent Moves Coming Soon</h2>
            <p className="mt-2 max-w-2xl text-gray-700">
              We are putting together short write-ups of recent Manchester moves, with the van, crew
              and any access challenge for each. In the meantime, here are the kinds of jobs we do
              most:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {caseStudyCategories.map((k) => (
                <span
                  key={k.key}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700"
                >
                  {k.label}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/quote/"
                className="rounded-md bg-cta px-5 py-2.5 text-sm font-bold text-white hover:bg-cta-dark"
              >
                Get a quote for your move
              </Link>
            </div>
          </div>
        )}
      </div>

      <Cta label="Planning a Move in Manchester?" />
    </>
  );
}

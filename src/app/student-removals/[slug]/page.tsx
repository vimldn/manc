import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import RichText from "@/components/RichText";
import RecentMoves from "@/components/RecentMoves";
import CallLink from "@/components/CallLink";
import { site } from "@/lib/config";
import { studentPages, getStudentPage } from "@/lib/studentRemovals";
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return studentPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getStudentPage(params.slug);
  if (!p) return {};
  const url = `${site.url}/student-removals/${p.slug}/`;
  return {
    title: p.title,
    description: p.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.metaDescription, url },
  };
}

export default function StudentRemovalsPage({ params }: { params: { slug: string } }) {
  const p = getStudentPage(params.slug);
  if (!p) notFound();

  const url = `${site.url}/student-removals/${p.slug}/`;
  const trail = [
    { name: "Home", path: "/" },
    { name: "Student Removals", path: "/student-removals/" },
    { name: p.navLabel, path: `/student-removals/${p.slug}/` },
  ];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: p.h1, url }),
          serviceSchema({
            name: p.h1,
            description: p.metaDescription,
            url,
            serviceType: "Student removals",
          }),
          faqSchema(p.faqs),
          breadcrumbSchema(trail),
        ]}
      />
      <Breadcrumbs trail={trail} />

      <div className="mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold text-gray-900">{p.h1}</h1>

          {p.intro.map((para, i) => (
            <RichText
              key={para.slice(0, 40)}
              className={i === 0 ? "mt-4 text-lg text-gray-700" : "mt-4 text-gray-700"}
              text={para}
            />
          ))}

          {/* Checkable facts, not a marketing strip. */}
          <dl className="mt-8 grid gap-3 rounded-lg border border-gray-200 bg-gray-50 p-5 sm:grid-cols-2">
            {p.keyFacts.map((f) => (
              <div key={f.label}>
                <dt className="text-sm text-gray-600">{f.label}</dt>
                <dd className="mt-0.5 text-sm font-semibold text-gray-900">{f.value}</dd>
              </div>
            ))}
          </dl>

          {p.sections.map((sec) => (
            <section key={sec.h2} className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">{sec.h2}</h2>
              <RichText className="mt-3 text-gray-700" text={sec.body} />
              {sec.bullets && (
                <ul className="mt-3 space-y-2 text-gray-700">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span aria-hidden className="font-bold text-brand">
                        &#10003;
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {sec.outro && <RichText className="mt-3 text-gray-700" text={sec.outro} />}
              {sec.sub && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-900">{sec.sub.h3}</h3>
                  <RichText className="mt-2 text-gray-700" text={sec.sub.body} />
                </div>
              )}
            </section>
          ))}

          {p.halls && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-gray-900">Halls We Move Students In and Out Of</h2>
              <p className="mt-3 text-gray-700">
                Taken from the university&apos;s own accommodation listing for 2026/27 and checked in{" "}
                {p.reviewed}. Hall lists change, so tell us the building name when you book.
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {p.halls.map((group) => (
                  <div
                    key={group.group}
                    className="rounded-lg border border-gray-200 bg-white p-5"
                  >
                    <h3 className="text-base font-bold text-gray-900">{group.group}</h3>
                    <p className="mt-1 text-sm text-gray-600">{group.note}</p>
                    <ul className="mt-3 space-y-1 text-sm text-gray-700">
                      {group.names.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">How to Book</h2>
            <ol className="mt-3 space-y-2 text-sm text-gray-700">
              {p.booking.map((b, i) => (
                <li key={b} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{b}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              What we cover and how your belongings are protected is set out on the{" "}
              <Link
                href="/insurance-and-compliance/"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                insurance and compliance page
              </Link>
              .
            </p>
          </section>

          <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Related Pages</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {p.related.map((r) => (
                <li key={r.path}>
                  <Link
                    href={r.path}
                    className="font-semibold text-brand hover:text-brand-dark"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/student-removals/"
                  className="font-semibold text-brand hover:text-brand-dark"
                >
                  All student removals in Manchester
                </Link>
              </li>
            </ul>
          </section>

          <div className="mt-8 rounded-lg bg-brand p-6 text-center">
            <p className="text-lg font-bold text-white">
              Call Now About Your {p.name} Move
            </p>
            <CallLink
              where="student_removals_cta"
              className="mt-3 inline-block rounded-md bg-cta px-6 py-3 text-lg font-bold text-white hover:bg-cta-dark"
            >
              Call {site.phoneDisplay}
            </CallLink>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <QuoteForm
              heading="Quote for a Student Move"
              compact
              defaultService="Student Moves"
              formName="student_removals_page"
            />
          </div>
        </aside>
      </div>

      <RecentMoves serviceSlug="student-moves" heading="Recent Student Moves" />
      <Faq faqs={p.faqs} />
      <Cta label={`Book Your ${p.name} Move`} />
    </>
  );
}

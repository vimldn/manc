import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { studentPages } from "@/lib/studentRemovals";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Student Removals in Manchester | Man and Van Manchester",
  description:
    "Student removals across Manchester by university and campus. Halls drop-off windows, goods lifts and Oxford Road bus gates planned around. Call for a quote.",
  path: "/student-removals/",
});

const collection = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Student Removals in Manchester",
  url: site.url + "/student-removals/",
  isPartOf: { "@id": site.url + "/#website" },
  about: { "@id": site.url + "/#business" },
};

export default function StudentRemovalsIndex() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Student Removals", path: "/student-removals/" },
  ];

  return (
    <>
      <JsonLd data={[collection, breadcrumbSchema(trail)]} />
      <Breadcrumbs trail={trail} />

      <section className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Student Removals in Manchester</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Manchester moves more students in a single September week than most cities do all year, and
          every institution does it differently. These pages cover the moves by university and
          campus: which halls are actually open this year, how long you get at the drop-off point,
          which roads a van is allowed to use, and what the job costs.
        </p>
        <p className="mt-4 max-w-3xl text-gray-700">
          If you want the general version rather than a campus page, our{" "}
          <Link
            href="/services/student-moves/"
            className="font-semibold text-brand hover:text-brand-dark"
          >
            student man and van service
          </Link>{" "}
          covers halls, house shares and room swaps across the city.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {studentPages.map((p) => (
            <Link
              key={p.slug}
              href={`/student-removals/${p.slug}/`}
              className="rounded-lg border border-gray-200 bg-white p-5 hover:border-brand hover:bg-brand-light"
            >
              <h2 className="text-base font-bold text-gray-900">{p.h1}</h2>
              <p className="mt-2 text-sm text-gray-600">{p.cardBlurb}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">
                Read the page
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-gray-600">
          More campuses and student areas are being added to this section. If yours is not here yet,
          ask anyway, because we cover every university in the city.
        </p>
      </section>

      <section className="mx-auto max-w-container px-4 pb-12">
        <div className="mx-auto max-w-xl">
          <QuoteForm heading="Get a quote for a student move" formName="student_removals_index" />
        </div>
      </section>

      <Cta label="Book a Student Move in Manchester" />
    </>
  );
}

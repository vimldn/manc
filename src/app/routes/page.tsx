import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { routePages } from "@/lib/routePages";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Removal Routes from Manchester | Frank's Van and Man Manchester",
  description:
    "Man and van routes from Manchester to other UK cities, each with the drive, the tolls, the parking at the far end and what the move costs. Get a quote.",
  path: "/routes/",
});

const collection = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Removal Routes from Manchester",
  url: site.url + "/routes/",
  isPartOf: { "@id": site.url + "/#website" },
  about: { "@id": site.url + "/#business" },
};

export default function RoutesIndex() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Routes", path: "/routes/" },
  ];

  return (
    <>
      <JsonLd data={[collection, breadcrumbSchema(trail)]} />
      <Breadcrumbs trail={trail} />

      <section className="interior-page interior-student-removals interior-routes mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Removal Routes from Manchester</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Each route page covers one city: the roads between here and there, any tolls on the way,
          the parking rules at the far end and what a move costs. They work in both directions, so
          a move into Manchester is priced the same way as a move out.
        </p>
        <p className="mt-4 max-w-3xl text-gray-700">
          For anywhere not listed, our{" "}
          <Link
            href="/services/long-distance-removals/"
            className="font-semibold text-brand hover:text-brand-dark"
          >
            long distance man and van
          </Link>{" "}
          covers the whole of the UK.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {routePages.map((p) => (
            <Link
              key={p.slug}
              href={`/routes/${p.slug}/`}
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
          More routes are being added. If yours is not here yet, ask anyway: the price is worked out
          the same way for any destination.
        </p>
      </section>

      <section className="mx-auto max-w-container px-4 pb-12">
        <div className="mx-auto max-w-xl">
          <QuoteForm heading="Get a quote for a long distance move" defaultService="Long Distance" formName="routes_index" />
        </div>
      </section>

      <Cta label="Book a Long Distance Move from Manchester" />
    </>
  );
}

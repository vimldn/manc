import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { locations } from "@/lib/locations";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Areas We Cover | Man and Van Across Manchester | Van and Man Manchester",
  description:
    "Man and van coverage across Manchester and nearby areas including the city centre, Salford, Didsbury, Chorlton, Fallowfield and more. Find your area and call for a quote.",
  path: "/locations/",
});

const collection = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Man and Van Coverage Areas in Manchester",
  url: site.url + "/locations/",
  isPartOf: { "@id": site.url + "/#website" },
  about: { "@id": site.url + "/#business" },
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={[
          collection,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations/" },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/" },
        ]}
      />

      <section className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Areas We Cover in Manchester</h1>
        <p className="mt-4 max-w-3xl text-gray-700">
          Van and Man Manchester covers the whole of Manchester and Greater Manchester. Whether you
          are in a city centre apartment, a Fallowfield house share or a family home in Sale, we
          serve your area seven days a week. Choose your area below for local man and van
          information, or call for a quote.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/locations/${l.slug}/`}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-brand hover:shadow-md"
            >
              <div className="text-base font-bold text-brand-dark">Man and van in {l.name}</div>
              <div className="mt-1 text-sm text-gray-500">{l.postcode}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container px-4 pb-12">
        <div className="mx-auto max-w-xl">
          <QuoteForm heading="Get a quote for your area" />
        </div>
      </section>

      <Cta label="Serving Manchester and nearby areas" />
    </>
  );
}

import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Man and Van Services in Manchester | Van and Man Manchester",
  description:
    "Full list of man and van services in Manchester: house removals, flat moves, van hire, rubbish removal, furniture delivery, student and office moves. Call for a quote.",
  path: "/services/",
});

const collection = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Man and Van Services in Manchester",
  url: site.url + "/services/",
  isPartOf: { "@id": site.url + "/#website" },
  about: { "@id": site.url + "/#business" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          collection,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ]}
      />

      <section className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Man and Van Services in Manchester</h1>
        <p className="mt-4 max-w-3xl text-gray-700">
          Whatever you need moving, we have a service for it. From a single item collected across
          town to a full house removal or a long distance run to London, here is everything Van and
          Man Manchester offers across Manchester and nearby areas. Not sure which fits? Call for a
          quote and we will point you to the right one.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container px-4 pb-12">
        <div className="mx-auto max-w-xl">
          <QuoteForm heading="Get a quote for any service" />
        </div>
      </section>

      <Cta label="Not sure which service you need?" />
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { locations, getLocation } from "@/lib/locations";
import { services } from "@/lib/services";
import { faqSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export function generateMetadata({ params }: { params: { location: string } }): Metadata {
  const l = getLocation(params.location);
  if (!l) return {};
  const url = `${site.url}/locations/${l.slug}/`;
  return {
    title: l.title,
    description: l.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: l.title, description: l.metaDescription, url },
  };
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const l = getLocation(params.location);
  if (!l) notFound();

  const url = `${site.url}/locations/${l.slug}/`;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: l.h1, url }),
          faqSchema(l.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Locations", path: "/locations/" },
            { name: l.name, path: `/locations/${l.slug}/` },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/" },
          { name: l.name, path: `/locations/${l.slug}/` },
        ]}
      />

      <div className="mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold text-gray-900">{l.h1}</h1>
          <p className="mt-1 text-sm font-semibold text-gray-500">{l.postcode}</p>
          <p className="mt-4 text-lg text-gray-700">{l.intro}</p>

          {l.local.map((para, i) => (
            <p key={i} className="mt-4 text-gray-700">
              {para}
            </p>
          ))}

          {/* Services available in this area (links back to all main services) */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              Man and van services in {l.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              All of our services are available in {l.name} and the surrounding {l.postcode} area:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-brand-dark hover:border-brand hover:bg-brand-light"
                >
                  {s.navLabel} in {l.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Neighbouring areas */}
          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Nearby areas we also cover</h2>
            <p className="mt-2 text-sm text-gray-700">
              As well as {l.name}, we cover neighbouring areas including {l.neighbours.join(", ")}.
              Moving between them is usually a short, cheap job.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {locations
                .filter((o) => o.slug !== l.slug)
                .slice(0, 6)
                .map((o) => (
                  <Link
                    key={o.slug}
                    href={`/locations/${o.slug}/`}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-brand hover:text-brand-dark"
                  >
                    {o.name}
                  </Link>
                ))}
            </div>
          </section>

          {/* Call now CTA */}
          <div className="mt-8 rounded-lg bg-brand p-6 text-center">
            <p className="text-lg font-bold text-white">Man and van in {l.name}, ready when you are</p>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-3 inline-block rounded-md bg-cta px-6 py-3 text-lg font-bold text-white hover:bg-cta-dark"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <QuoteForm heading={`Quote in ${l.name}`} compact defaultLocation={l.name} />
          </div>
        </aside>
      </div>

      <Faq faqs={l.faqs} heading={`Man and van in ${l.name}: FAQs`} />
      <Cta label={`Get your ${l.name} man and van quote`} />
    </>
  );
}

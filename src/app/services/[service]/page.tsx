import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { services, getService } from "@/lib/services";
import { locations } from "@/lib/locations";
import { serviceSchema, faqSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const s = getService(params.service);
  if (!s) return {};
  const url = `${site.url}/services/${s.slug}/`;
  return {
    title: s.title,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: s.title, description: s.metaDescription, url },
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const s = getService(params.service);
  if (!s) notFound();

  const url = `${site.url}/services/${s.slug}/`;
  const related = s.related.map((slug) => getService(slug)).filter(Boolean);
  const featuredLocations = locations.slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: s.h1, url }),
          serviceSchema({ name: s.h1, description: s.metaDescription, url }),
          faqSchema(s.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services/" },
            { name: s.navLabel, path: `/services/${s.slug}/` },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: s.navLabel, path: `/services/${s.slug}/` },
        ]}
      />

      <div className="mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold text-gray-900">{s.h1}</h1>
          <p className="mt-4 text-lg text-gray-700">{s.intro}</p>

          {s.sections.map((sec) => (
            <section key={sec.h2} className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">{sec.h2}</h2>
              <p className="mt-3 text-gray-700">{sec.body}</p>
            </section>
          ))}

          {/* Internal links to related services */}
          <section className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Related services</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {related.map((r) => (
                <li key={r!.slug}>
                  <Link
                    href={`/services/${r!.slug}/`}
                    className="font-semibold text-brand hover:text-brand-dark"
                  >
                    {r!.h1}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="font-semibold text-brand hover:text-brand-dark">
                  See all man and van services in Manchester
                </Link>
              </li>
            </ul>
          </section>

          {/* Internal links to location pages */}
          <section className="mt-8">
            <h2 className="text-lg font-bold text-gray-900">Available across Manchester</h2>
            <p className="mt-2 text-sm text-gray-600">
              We provide {s.navLabel.toLowerCase()} across Manchester and nearby areas, including:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {featuredLocations.map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}/`}
                  className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-brand-dark hover:border-brand hover:bg-brand-light"
                >
                  {l.name}
                </Link>
              ))}
              <Link
                href="/locations/"
                className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-brand-dark hover:border-brand hover:bg-brand-light"
              >
                All areas
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Also see our{" "}
              <Link href="/contact/" className="font-semibold text-brand hover:text-brand-dark">
                contact page
              </Link>{" "}
              or{" "}
              <Link href="/quote/" className="font-semibold text-brand hover:text-brand-dark">
                get a quote
              </Link>
              .
            </p>
          </section>

          {/* Call now CTA */}
          <div className="mt-8 rounded-lg bg-brand p-6 text-center">
            <p className="text-lg font-bold text-white">
              Call now for {s.navLabel.toLowerCase()} in Manchester
            </p>
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
            <QuoteForm heading="Quote for this service" compact defaultService={s.navLabel} />
          </div>
        </aside>
      </div>

      <Faq faqs={s.faqs} />
      <Cta label={`Book your ${s.navLabel.toLowerCase()} in Manchester`} />
    </>
  );
}

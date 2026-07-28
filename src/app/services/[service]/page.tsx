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
import { getServiceDetails } from "@/lib/serviceDetails";
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
  const d = getServiceDetails(s.slug);

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

          {d && (
            <>
              <section className="mt-10">
                <h2 className="text-xl font-bold text-gray-900">Who this is for</h2>
                <p className="mt-3 text-gray-700">{d.forWho}</p>
              </section>

              <section className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                  <h2 className="text-base font-bold text-gray-900">What is included</h2>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {d.included.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span aria-hidden className="font-bold text-brand">&#10003;</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                  <h2 className="text-base font-bold text-gray-900">What is not included</h2>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    {d.notIncluded.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span aria-hidden className="text-gray-400">&ndash;</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">Access and what to plan for</h2>
                <p className="mt-3 text-gray-700">{d.access}</p>
              </section>

              <section className="mt-8 grid gap-4 sm:grid-cols-2">
                <div>
                  <h2 className="text-base font-bold text-gray-900">Van and movers</h2>
                  <p className="mt-2 text-sm text-gray-700">{d.vanRec}</p>
                  <Link
                    href="/our-vans/"
                    className="mt-2 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
                  >
                    See the van size guide
                  </Link>
                </div>
                <div>
                  <h2 className="text-base font-bold text-gray-900">Equipment we bring</h2>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {d.equipment.map((e) => (
                      <li
                        key={e}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">What affects the price</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {d.pricingFactors.map((p) => (
                    <span
                      key={p}
                      className="rounded-md bg-brand-light px-3 py-1.5 text-sm text-brand-dark"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <Link
                  href="/prices/"
                  className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  How our pricing works
                </Link>
              </section>

              <section className="mt-8">
                <h2 className="text-xl font-bold text-gray-900">How to book</h2>
                <ol className="mt-3 space-y-2 text-sm text-gray-700">
                  {d.booking.map((b, i) => (
                    <li key={b} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{b}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <p className="mt-6 text-sm text-gray-600">
                Your belongings and our cover are explained on the{" "}
                <Link
                  href="/insurance-and-compliance/"
                  className="font-semibold text-brand hover:text-brand-dark"
                >
                  insurance and compliance page
                </Link>
                .
              </p>
            </>
          )}

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

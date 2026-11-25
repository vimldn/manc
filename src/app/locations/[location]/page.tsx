import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import CallLink from "@/components/CallLink";
import { site } from "@/lib/config";
import { locations, getLocation } from "@/lib/locations";
import { priceRows, priceExtras } from "@/lib/pricing";
import { services } from "@/lib/services";
import { faqSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

const localPriorities: Record<string, { advice: string; services: string[] }> = {
  "manchester-city-centre": { advice: "Before booking, ask building management about goods lift reservations, permitted loading hours and vehicle height limits. Send us the loading entrance rather than just the residential entrance.", services: ["flat-apartment-removals","man-and-van-hire","office-removals"] },
  salford: { advice: "For riverside apartments, check whether the loading entrance is separate from the main reception. For terraced homes, tell us how far we can legally park from the front door.", services: ["flat-apartment-removals","house-removals","furniture-delivery"] },
  didsbury: { advice: "Measure the narrowest hallway and staircase before moving large wardrobes or sofas. Tell us whether furniture needs dismantling and whether there is room for a large van outside.", services: ["house-removals","furniture-delivery","furniture-dismantling"] },
  chorlton: { advice: "For terraces near Beech Road, check the signs on your street and tell us about narrow doorways, steps and any long carry from legal parking.", services: ["house-removals","furniture-delivery","man-and-van-hire"] },
  fallowfield: { advice: "Confirm your tenancy handover and key-return times before booking. Housemates can request a shared trip with multiple drop-offs; if contracts leave a gap, arrange storage at your chosen facility first.", services: ["student-moves","student-storage-manchester","man-and-van-hire"] },
  withington: { advice: "If you are moving between shared houses, confirm which items belong to you and which stay with the landlord. Label boxes by destination if you are sharing the van with housemates.", services: ["student-moves","student-storage-manchester","flat-apartment-removals"] },
  hulme: { advice: "Check your accommodation's departure instructions and whether reception requires a vehicle registration or lift booking. Give us your block and entrance details along with the postcode.", services: ["student-moves","student-storage-manchester","flat-apartment-removals"] },
  sale: { advice: "For moves between Sale and Manchester, send both postcodes and tell us about driveways, stairs and bulky items. If access is restricted, a smaller van or a different loading plan may be preferable.", services: ["house-removals","man-and-van-hire","furniture-delivery"] },
};

export function generateStaticParams() {
  return locations.filter((l) => !l.customPage).map((l) => ({ location: l.slug }));
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
  if (!l || l.customPage) notFound();

  const url = `${site.url}/locations/${l.slug}/`;
  const priority = localPriorities[l.slug];
  const featured = priority ? priority.services.map(slug => services.find(s => s.slug === slug)).filter((s): s is (typeof services)[number] => Boolean(s)) : services.filter(s => ["man-and-van-hire","house-removals","flat-apartment-removals","furniture-delivery"].includes(s.slug));

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

      <div className="interior-page interior-locations mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold text-gray-900">{l.h1}</h1>
          <p className="mt-1 text-sm font-semibold text-gray-500">{l.postcode}</p>
          <p className="mt-4 text-lg text-gray-700">{l.intro}</p>

          {l.local.map((para, i) => (
            <p key={i} className="mt-4 text-gray-700">
              {para}
            </p>
          ))}

          {priority && <section className="mt-8 rounded-lg border border-gray-200 p-5">
            <h2 className="text-xl font-bold">Planning your move in {l.name}</h2>
            <p className="mt-3 text-gray-700">{priority.advice}</p>
            <h3 className="mt-5 font-bold">Manchester guide rates</h3>
            <dl className="mt-2 divide-y">{priceRows.filter(r => ["one-small","one-large","two-large"].includes(r.key)).map(r => <div key={r.key} className="flex justify-between gap-3 py-2"><dt>{r.label}</dt><dd className="font-semibold">{r.from}</dd></div>)}</dl>
            <p className="mt-3 text-sm">Minimum booking: {priceExtras.find(e => e.label === "Minimum booking")?.value}. Final quote depends on the journey and access. <Link href="/prices/" className="font-semibold text-brand underline">Full guide prices</Link>.</p>
            <Link href="/quote/" className="mt-4 inline-block rounded-md bg-cta px-5 py-3 font-bold text-white">Get a quote for {l.name}</Link>
          </section>}
          {/* Relevant services available in this area */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">
              Man and Van Services in {l.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Start with these moving services in {l.name} and the surrounding {l.postcode} area:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {featured.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-brand-dark hover:border-brand hover:bg-brand-light"
                >
                  {s.navLabel}
                </Link>
              ))}
            </div>
            <Link href="/services/" className="mt-4 inline-block font-semibold text-brand underline">See all moving services</Link>
          </section>

          {/* Neighbouring areas */}
          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Nearby Areas We Also Cover</h2>
            <p className="mt-2 text-sm text-gray-700">
              As well as {l.name}, we cover neighbouring areas including {l.neighbours.join(", ")}.
              Moving between them is usually a short, cheap job.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {locations
                .filter((o) => o.slug !== l.slug && l.neighbours.some(name => name.toLowerCase() === o.name.toLowerCase()))
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
            <p className="text-lg font-bold text-white">Man and Van in {l.name}, Ready When You Are</p>
            <CallLink where="location_page_cta" className="mt-3 inline-block rounded-md bg-cta px-6 py-3 text-lg font-bold text-white hover:bg-cta-dark">
            Call {site.phoneDisplay}
          </CallLink>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <QuoteForm
              heading={`Quote in ${l.name}`}
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={l.faqs} heading={`Man and Van in ${l.name}: FAQs`} />
      <Cta label={`Get Your ${l.name} Man and Van Quote`} />
    </>
  );
}

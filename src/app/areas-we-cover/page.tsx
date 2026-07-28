import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { locations } from "@/lib/locations";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const PATH = "/areas-we-cover/";

export const metadata: Metadata = pageMeta({
  title: "Areas We Cover | Man and Van Across Greater Manchester",
  description:
    "The Manchester and Greater Manchester areas our man and van service covers, grouped by region. City centre, south Manchester, north Manchester, Salford and Trafford.",
  path: PATH,
});

// Group the existing location pages by region. Only areas that have a real,
// bespoke location page are listed, so nothing links to a thin or missing page.
const regionOf: Record<string, string> = {
  "manchester-city-centre": "Manchester City Centre",
  salford: "Salford",
  "salford-quays": "Salford",
  didsbury: "South Manchester",
  chorlton: "South Manchester",
  fallowfield: "South Manchester",
  withington: "South Manchester",
  sale: "South Manchester",
  hulme: "South Manchester",
  wythenshawe: "South Manchester",
  "old-trafford": "Trafford",
  stretford: "Trafford",
  "cheetham-hill": "North Manchester",
  prestwich: "North Manchester",
};

const regionOrder = [
  "Manchester City Centre",
  "South Manchester",
  "North Manchester",
  "Salford",
  "Trafford",
];

export default function AreasWeCoverPage() {
  const grouped = regionOrder.map((region) => ({
    region,
    areas: locations.filter((l) => regionOf[l.slug] === region),
  }));

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Areas We Cover", url: site.url + PATH }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Cover", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Areas We Cover", path: PATH },
        ]}
      />

      <div className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Areas We Cover in Greater Manchester
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          We are a mobile man and van service covering Manchester and the surrounding areas. Tap an
          area for local detail on parking, access and the kinds of moves we do there. If your area
          is not listed, we very likely still cover it, so just ask.
        </p>

        <div className="mt-10 space-y-10">
          {grouped.map((g) => (
            <section key={g.region}>
              <h2 className="text-xl font-bold text-gray-900">{g.region}</h2>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {g.areas.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/locations/${l.slug}/`}
                    className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-brand-dark hover:border-brand hover:bg-brand-light"
                  >
                    Man and van in {l.name}
                    <span className="mt-0.5 block text-xs font-normal text-gray-500">
                      {l.postcode}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-lg bg-brand-light p-6">
          <h2 className="text-lg font-bold text-brand-dark">Not sure if we cover your postcode?</h2>
          <p className="mt-2 text-sm text-gray-700">
            We regularly travel across Bury, Bolton, Oldham, Stockport, Tameside and out to the
            surrounding towns for house moves, single items and long-distance jobs. Send your
            postcode and we will confirm.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/quote/"
              className="rounded-md bg-cta px-5 py-2.5 text-sm font-bold text-white hover:bg-cta-dark"
            >
              Check my area
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-md border-2 border-brand px-5 py-2.5 text-sm font-bold text-brand-dark hover:bg-white"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <Cta label="Book a man and van in your area" />
    </>
  );
}

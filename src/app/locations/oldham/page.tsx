import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import RichText from "@/components/RichText";
import CallLink from "@/components/CallLink";
import { site } from "@/lib/config";
import { getLocation } from "@/lib/locations";
import { priceRows } from "@/lib/pricing";
import { faqSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";

// -------------------------------------------------------------
// Bespoke Oldham page. Oldham gives resident permits away free but publishes
// nothing about dispensations, and the A62 flyover closure changes how a van
// gets into town. Checked on oldham.gov.uk in September 2026.
// -------------------------------------------------------------

const l = getLocation("oldham")!;
const url = `${site.url}/locations/oldham/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

// A sample of the 36, from the council's own conservation area dataset. The
// spread of dates is the point: Saddleworth villages first, town centre last.
const conservationAreas = [
  { area: "Diglea, Dobcross and Harrop Green", designated: "March 1972" },
  { area: "Delph", designated: "June 1972" },
  { area: "Alexandra Park", designated: "November 1975" },
  { area: "Uppermill", designated: "April 1977" },
  { area: "Oldham Town Centre", designated: "August 2019" },
];

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const faqs = [
  {
    q: "Do Oldham resident parking permits cost anything?",
    a: "No. The council states there is no charge for a resident permit, which makes Oldham cheaper than every borough around it. You need proof of address, such as a V5C, a rent book or a utility bill.",
  },
  {
    q: "Do I need a dispensation to park a removals van in Oldham?",
    a: "Oldham uses the term but publishes no application page, fee or notice period, so the route is the Parking Shop on 0161 770 6654 or parkingshop@oldham.gov.uk. Ask early, because there is no published turnaround to rely on.",
  },
  {
    q: "Can a skip go on a yellow line in Oldham?",
    a: "Not without permission. The council's own wording is that skips should not be placed on waiting restrictions without the proper dispensation from the parking department, so a clearance that needs a skip needs that call first.",
  },
  {
    q: "Is the A62 still closed at the Oldham Way flyover?",
    a: "The council's scheme page says a full closure of the A62 in both directions is in place for the flyover refurbishment, which started on site in May 2026, and it has not published an end date. Check it before you set off.",
  },
  {
    q: "Where can visitors park on moving day in Oldham?",
    a: "In a permit zone, visitors have to use any limited-waiting sections or a visitor pass. Temporary permits are available from the council, so ask for them before the day rather than on it.",
  },
  {
    q: "How much is a man and van in Oldham?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. Oldham into central Manchester is about seven miles, so a move that way is priced on the distance as well as the load.`,
  },
];

export default function OldhamPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Oldham", path: "/locations/oldham/" },
  ];

  return (
    <>
      <JsonLd
        data={[webPageSchema({ name: l.h1, url }), faqSchema(faqs), breadcrumbSchema(trail)]}
      />
      <Breadcrumbs trail={trail} />

      <div className="mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-3">
        <article className="min-w-0 lg:col-span-2">
          <h1 className="text-3xl font-extrabold text-gray-900">{l.h1}</h1>
          <p className="mt-1 text-sm font-semibold text-gray-500">{l.postcode}</p>
          <p className="mt-4 text-lg text-gray-700">
            Oldham is the only borough near here that gives resident parking permits away free. It
            is also the one that publishes least about letting a van sit on a restriction, so the
            paperwork side of a move here is a phone call rather than a form.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We cover OL1 to OL9, from the streets around the town centre out to Chadderton, Royton, Failsworth and the Saddleworth villages. The run down the A62 or the M60 into the city is a regular one, so moves in both directions are ordinary work for us."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Free Resident Permits, Unpublished Dispensations</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Oldham states plainly that there is no charge for a resident permit. Proof of address does the work instead: a V5C, a rent book or a utility bill. Temporary permits are available too, and in a permit zone visitors have to use the limited-waiting sections or a visitor pass rather than parking on a resident bay."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="The other half of the picture is thinner. Oldham uses the word dispensation, but there is no application page, no fee and no notice period published anywhere on the council's site, so there is nothing to book online. The route is the Parking Shop, on 0161 770 6654 or parkingshop@oldham.gov.uk, and the sensible move is to ring as soon as the date is fixed."
            />
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                "Resident permits are free, so sort one for the new address before you move in.",
                "Temporary permits cover helpers' cars; visitor bays are not a substitute.",
                "For the van on a restriction, ring the Parking Shop early. There is no published turnaround.",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden className="font-bold text-brand">
                    &#10003;
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              The permit conditions are on the council&apos;s{" "}
              <a
                href="https://www.oldham.gov.uk/info/201061/parking/1848/residential_parking_permits"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                residential parking permits page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">The A62 Flyover Closure</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The £6.5m refurbishment of the Oldham Way flyover, the Manchester Street viaduct, went on site in May 2026, and the council's scheme page says a full closure of the A62 in both directions is in place. No end date has been published."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Traffic is routed around the Manchester Street roundabout, and the HGV diversion runs Broadway, Salmon Fields, Higginshaw Lane and Shaw Road. A Luton is not an HGV, but on a weekday the practical effect is the same: the direct road into the middle of Oldham is not available and the alternative is busy. We build that into the timing rather than the price."
            />
            <p className="mt-3 text-sm text-gray-600">
              The council keeps the current position on its{" "}
              <a
                href="https://www.oldham.gov.uk/info/201058/transport_parking_and_travel/3231/oldham_way_flyover_refurbishment_scheme"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                flyover refurbishment page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">A Town Centre That Moved in March</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Oldham's £450m regeneration programme changed the middle of town this year. The Loom, the new performance venue, opened on 28 March 2026, and the new Oldham Market opened the next day inside The Spindles, reached through the doors opposite Molino Lounge on Yorkshire Street. Parliament Square reopened at the same time."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="For [a flat move in the centre](/services/flat-apartment-removals/) that means the loading points people used a year ago may not be the ones to aim for now, and event nights at a 1,000 capacity venue are a new thing to plan around. If the address is inside the ring road, tell us the nearest side street and we will check what it looks like this month."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Thirty Six Conservation Areas</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Oldham has 36 conservation areas, and its own dataset shows how spread out the designations are. The Saddleworth villages came first in the early 1970s and the town centre only in 2019."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  A sample of Oldham conservation areas and when they were designated
                </caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Conservation area</th>
                    <th scope="col" className="py-2 font-bold">Designated</th>
                  </tr>
                </thead>
                <tbody>
                  {conservationAreas.map((c) => (
                    <tr key={c.area} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{c.area}</td>
                      <td className="py-2">{c.designated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <RichText
              className="mt-3 text-gray-700"
              text="Designation does not affect a van turning up and loading. It does affect anything bolted to the building or standing on the pavement: demolition is controlled whether or not the building is listed, trees are protected, and the council asks you to contact Planning Services before starting work. So a move that needs scaffolding, a hoist or a skip in one of these streets needs a call first, and Oldham does charge for a hoarding or a scaffold licence."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Skips and Clearances</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The clearest thing Oldham publishes about dispensations is on its skips page: skips should not be placed on waiting restrictions without the proper dispensation being given by the parking department. If you are clearing a property rather than moving one, that sentence is the one that matters."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Plenty of clearances do not need a skip at all. [Clearing it into the van](/services/rubbish-removal/) is often quicker and cheaper, and it is licensed waste carriage rather than a container sitting on the street for a week while the parking department is chased."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What an Oldham Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Oldham sits about seven miles out from the city centre, so a move into town is priced on the distance as well as the load, and the flyover closure adds time rather than cost. Every rate we quote from is [published rather than given over the phone](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Oldham</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Manchester City Centre", path: "/locations/manchester-city-centre/" },
                { name: "Ancoats", path: "/locations/ancoats/" },
                { name: "Levenshulme", path: "/locations/levenshulme/" },
                { name: "Bury", path: "/locations/bury/" },
                { name: "All areas", path: "/locations/" },
              ].map((a) => (
                <Link
                  key={a.path}
                  href={a.path}
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </section>

          <div className="mt-8 rounded-lg bg-brand p-6 text-center">
            <p className="text-lg font-bold text-white">Moving In or Out of Oldham?</p>
            <CallLink
              where="location_page_cta"
              className="mt-3 inline-block rounded-md bg-cta px-6 py-3 text-lg font-bold text-white hover:bg-cta-dark"
            >
              Call {site.phoneDisplay}
            </CallLink>
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <QuoteForm
              heading="Quote in Oldham"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Oldham: FAQs" />
      <Cta label="Get Your Oldham Man and Van Quote" />
    </>
  );
}

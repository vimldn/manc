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
// Bespoke Ancoats page. Its structure follows what is actually true in
// Ancoats: a car-light regeneration area built around a mobility hub, a
// residents' permit zone, and a conservation area of converted cotton mills.
// Every figure below was checked on Manchester City Council's pages or the
// hub operator's page in September 2026.
// -------------------------------------------------------------

const l = getLocation("ancoats")!;
const url = `${site.url}/locations/ancoats/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const parking: { rule: string; detail: string }[] = [
  { rule: "Zone 2 permit hours", detail: "Monday to Sunday, 8am to 9pm" },
  { rule: "Parking bays, no permit", detail: "Up to 90 minutes during scheme hours" },
  { rule: "Past This Point streets", detail: "Permit holders only during scheme hours" },
  { rule: "Outside scheme hours", detail: "No permit needed from 9pm to 8am" },
  { rule: "Double yellow lines", detail: "No parking at any time" },
  { rule: "Mobility Hub height limit", detail: "2.10m, too low for a removal van" },
];

const faqs = [
  {
    q: "Can a removal van park in the Ancoats Mobility Hub?",
    a: "No. The hub on Poland Street has a maximum vehicle height of 2.10m, which is lower than a removal van. The van has to stop legally on the street near your building instead.",
  },
  {
    q: "What are the Ancoats permit parking hours?",
    a: "Ancoats is Zone 2 of the council's permit scheme, which runs Monday to Sunday from 8am to 9pm. Non-permit holders can use the parking bays for up to 90 minutes, and no permit is needed between 9pm and 8am.",
  },
  {
    q: "Does my Ancoats apartment block have its own parking?",
    a: "Not always. The Mobility Hub was created to centralise parking for a number of adjacent residential developments, so check with your building where vehicles can stop for a move.",
  },
  {
    q: "Why is parking so controlled in Ancoats?",
    a: "The council's permit scheme is there to stop all-day parking by commuters and visitors, including people going to the Co-op Live arena, so residents can park near their homes.",
  },
  {
    q: "Is Ancoats a conservation area?",
    a: "Yes. The council designated it in June 1989, covering the area bounded by Great Ancoats Street, Oldham Road, Kemp Street, Wadeford Close, Jersey Street and the Rochdale Canal.",
  },
  {
    q: "How much is a man and van in Ancoats?",
    a: `Local moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. A move between Ancoats and the city centre is a short run, so most of the time goes on loading.`,
  },
];

export default function AncoatsPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Ancoats", path: "/locations/ancoats/" },
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
            A man and van in Ancoats spends less time driving than working out where it can stop.
            The old mill district just north of Great Ancoats Street has been rebuilt as a
            car-light neighbourhood, with a permit zone on the streets and new apartment blocks
            that park their residents in a shared hub a removal van cannot fit into.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="An Ancoats move is usually a short run to or from the [city centre](/locations/manchester-city-centre/), Salford or the south Manchester suburbs, and a one or two bedroom flat usually fits a single van load. What decides how long it takes is the hour you load, which street the van stops on, and whether your building has a loading point of its own."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">The Mobility Hub Is Not for Vans</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The Ancoats Mobility Hub on Poland Street opened to the public on 6 May 2025. It is an eight storey car park with 406 car parking spaces, 102 electric vehicle charging points, 150 secure bike spaces and space for car club vehicles. The council says it centralises parking, cycle storage and last mile deliveries for a number of adjacent residential developments, which has helped unlock 1,500 new homes nearby."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="For a move, the important number is the height limit. The operator lists a maximum vehicle height of 2.10m at 21 Poland Street, M4 6NE, which rules out a removal van. So in the newer blocks built around the hub, there is often no car park of your own and no hub space to use either. The van loads from the street, and planning that stop is the first thing we do for any Ancoats job."
            />
            <p className="mt-3 text-sm text-gray-600">
              The council describes the hub and the investment behind it on its{" "}
              <a
                href="https://www.manchester.gov.uk/news-stories/2025/manchesters-trailblazing-mobility-hub-looks-ahead-to-public-opening-next-month"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                Ancoats Mobility Hub announcement
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Zone 2 Permit Parking</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Ancoats is Zone 2 of the council's Ancoats and Miles Platting permit parking scheme, which runs every day from 8am to 9pm. The council set it up to stop all-day parking by commuters and visitors, including people heading to the Co-op Live arena. Some streets are marked Past This Point and are for permit holders only during those hours, and in the parking bays anyone without a permit can stay up to 90 minutes. The full rules are on the council's [Ancoats and Miles Platting permit scheme page](https://www.manchester.gov.uk/parking/parking-at-your-home/resident-parking-schemes/background)."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <caption className="sr-only">Parking rules in Ancoats</caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Rule</th>
                    <th scope="col" className="py-2 font-bold">What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {parking.map((p) => (
                    <tr key={p.rule} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{p.rule}</td>
                      <td className="py-2">{p.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <RichText
              className="mt-4 text-gray-700"
              text="Two things follow from that for a removal. A move that starts before 8am or loads after 9pm falls outside the scheme hours altogether. And a daytime move uses the ordinary loading rules on yellow lines, which in many places allow a vehicle to stop while it is genuinely loading, provided no loading ban is marked on the kerb. Our [same-day man and van](/services/same-day-man-and-van/) page explains those loading rules in full."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Moving In and Out of the Old Mills</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Manchester City Council describes Ancoats as the first industrial estate in the world, where huge cotton spinning mills grew up beside the Rochdale Canal with workers' housing packed around them. The council designated the heart of it a conservation area in June 1989, bounded by Great Ancoats Street, Oldham Road, Kemp Street, Wadeford Close, Jersey Street and the Rochdale Canal."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Several of those mills have been converted into apartments, and a converted mill moves differently from a new build. Corridors can be long, entrances are not always on the side of the building nearest the road, and a building that was never designed for residents may have one lift serving a lot of flats. Ask your building manager where vehicles should stop and whether the lift can be reserved, then send us the answers with your quote request."
            />
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                "Find out which entrance is closest to your flat, not just the front door.",
                "Reserve the lift if the building allows it, and tell us the time slot.",
                "Measure any sofa or wardrobe against the narrowest corridor before moving day.",
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden className="font-bold text-brand">
                    &#10003;
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Oldham Road and Great Ancoats Street</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The two main roads that frame Ancoats set the approach for most moves. Ancoats lies immediately north of Great Ancoats Street, which separates it from the city centre, and Oldham Road forms another edge of the conservation area. The council rebuilt the junction of Oldham Road with Poland Street and Radium Street, adding cycleways, new pedestrian crossings, resurfacing and new signals, with the work completed in August 2024."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="The council's investment in Ancoats follows low traffic neighbourhood principles, so the streets inside those roads are not built for through traffic. For a van that means approaching from the main road nearest your building and stopping as close to the entrance as the rules allow, rather than looping the neighbourhood looking for a space. If your block has a known loading point, we use it."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What an Ancoats Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Local moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, and two movers with a large van from ${rate("two-large")}. A single item such as a sofa collected from or delivered to Ancoats starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="A one or two bedroom Ancoats flat usually goes in a single van load, so the cost sits in the carry from the van to the flat and the wait for the lift rather than the drive. An early start outside the permit hours often shortens the whole job. The full breakdown is on our [prices page](/prices/), and the [flat and apartment removals](/services/flat-apartment-removals/) page covers lift and loading bay moves across the city."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Ancoats</h2>
            <p className="mt-2 text-sm text-gray-700">
              Ancoats sits on the doorstep of the city centre, so the most common runs are short
              ones:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Manchester City Centre", path: "/locations/manchester-city-centre/" },
                { name: "Salford", path: "/locations/salford/" },
                { name: "Hulme", path: "/locations/hulme/" },
                { name: "Chorlton", path: "/locations/chorlton/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Ancoats?</p>
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
              heading="Quote in Ancoats"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Ancoats: FAQs" />
      <Cta label="Get Your Ancoats Man and Van Quote" />
    </>
  );
}

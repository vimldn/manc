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
// Bespoke Levenshulme page. Its spine is the Active Neighbourhood scheme:
// fourteen modal filters that close residential streets to through traffic,
// which is the single thing that changes how a van reaches an address here.
// Checked on Manchester City Council's pages in September 2026.
// -------------------------------------------------------------

const l = getLocation("levenshulme")!;
const url = `${site.url}/locations/levenshulme/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

// The council's own list of the fourteen filters made permanent.
const filterStreets = [
  "Buckhurst Road",
  "Cardus Street (North)",
  "Delamere Road and Gordon Avenue",
  "Dorset Road",
  "Caremine Avenue",
  "Guildford Road",
  "Henderson Street",
  "Longden Road",
  "Manor Road East",
  "Mayford Road",
  "Molyneux Road",
  "Osborne Road",
  "Portville Road and Randolph Street",
  "Victoria Road",
];

const faqs = [
  {
    q: "Can your van get down my street in Levenshulme?",
    a: "Yes, but sometimes only from one end. Fourteen modal filters close streets to through traffic, so a filtered street is still reachable while no longer being drivable end to end. Give us the street name and we will work out which side to approach from.",
  },
  {
    q: "Which Levenshulme streets have modal filters?",
    a: "The council made fourteen permanent, including Buckhurst Road, Dorset Road, Guildford Road, Longden Road, Mayford Road, Molyneux Road, Osborne Road and Victoria Road. The full list is on this page.",
  },
  {
    q: "Will a satnav route work for a removal van here?",
    a: "Not always. A satnav may still route through a street that is now filtered, which means a wasted loop and a longer carry. We plan the approach before the day rather than following the phone.",
  },
  {
    q: "Are there roadworks on the A6 in Levenshulme?",
    a: "The council scheduled work on a new crossing on the A6 Stockport Road at Sparrow Crossing, between Mayford Road and Belvoir Avenue, to begin in January 2026. Work on Matthews Lane, Slade Lane and the A6 Arcadia crossing was completed by May 2025.",
  },
  {
    q: "Is part of Levenshulme a conservation area?",
    a: "Yes. Rushford Park was designated in March 1986. It is a residential area of more than seven hectares between the main railway line to the east and Slade Lane to the west.",
  },
  {
    q: "How much is a man and van in Levenshulme?",
    a: `Local moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. A terraced house here is usually a single van load.`,
  },
];

export default function LevenshulmePage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Levenshulme", path: "/locations/levenshulme/" },
  ];

  return (
    <>
      <JsonLd
        data={[webPageSchema({ name: l.h1, url }), faqSchema(faqs), breadcrumbSchema(trail)]}
      />
      <Breadcrumbs trail={trail} />

      <div className="mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-extrabold text-gray-900">{l.h1}</h1>
          <p className="mt-1 text-sm font-semibold text-gray-500">{l.postcode}</p>
          <p className="mt-4 text-lg text-gray-700">
            Levenshulme is the one part of Manchester where the route matters more than the
            distance. Fourteen modal filters now close residential streets to through traffic, so
            plenty of addresses can only be reached from one particular end. Get that wrong in a
            loaded van and you are either reversing back out or carrying boxes a lot further than
            you planned.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We move houses and flats across M19 every week, most of them terraces and conversions either side of the A6 Stockport Road. The move itself is straightforward. The planning is knowing which streets are filtered, which junctions are dug up this month, and where a van can legally stand while it loads."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">The Filters Decide the Approach</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Levenshulme and Burnage were the first part of Greater Manchester to get a filtered neighbourhood. The council describes the filters as closing roads to through traffic to stop rat running. Twenty five locations were suggested at first, cut to fourteen after consultation, and phase one's thirteen filters are now in place with their signage, planting and lining finished."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="For a removal that is not a problem, it is just information. Every filtered street is still reachable by van. It simply cannot be driven end to end any more, so the van has to come in from the open side. Tell us the street when you book and we will check the current layout on the council's own scheme pages before we set off."
            />
            <h3 className="mt-6 text-lg font-bold text-gray-900">
              The fourteen permanent filters
            </h3>
            <ul className="mt-3 grid gap-x-6 gap-y-2 text-gray-700 sm:grid-cols-2">
              {filterStreets.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="font-bold text-brand">
                    &#10003;
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              Two of these, Henderson Street and Manor Road East, were moved from their trial
              positions after residents commented. The council keeps the current picture on its{" "}
              <a
                href="https://www.manchester.gov.uk/info/500386/levenshulme_and_burnage/8450/levenshulme_and_burnage_active_neighbourhood_scheme"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                Active Neighbourhood scheme pages
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">A6 Stockport Road and Broom Lane</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The A6 Stockport Road is the spine of Levenshulme and the way most vans arrive. The council scheduled construction of the new Sparrow Crossing, between Mayford Road and Belvoir Avenue, to start on the A6 in January 2026 after the Christmas embargo. Work at Matthews Lane, Slade Lane and the A6 Arcadia crossing was already complete by May 2025."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Broom Lane, between Cronshaw Street and the A6, is being reshaped as well. The council has confirmed it will stay open to two-way traffic, with the planned one-way chicane dropped and the west pavement widened to 1.5 metres. Live works change where a van can wait, so we check the current position rather than assuming last month's layout still holds."
            />
            <p className="mt-3 text-sm text-gray-600">
              The council posts dated updates, including its{" "}
              <a
                href="https://www.manchester.gov.uk/roads-and-transport/active-travel/active-neighbourhoods/levenshulme-and-burnage/november-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                November 2025 scheme update
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Rushford Park and the Terraces</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Rushford Park, designated a conservation area in March 1986, covers more than seven hectares of Levenshulme between the main railway line on its eastern edge and Slade Lane to the west. Around it, the M19 streets are mostly terraced, which shapes every move made here: a van on the street rather than a drive, a front door straight onto the pavement, and a staircase that turns."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="That combination rewards a short carry and a second pair of hands. We park as close to the door as the street allows, protect the hall on the way through, and part-dismantle anything that will not turn on the stairs. Send a photo of the staircase with your quote request if you have a sofa bed or a large wardrobe."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Where the Van Stands to Load</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="On a filtered street the traffic is lighter, which usually makes loading easier rather than harder once the van is on the right side. The ordinary rules still apply: load where there is no loading ban marked on the kerb, keep the loading genuine and continuous, and move the van as soon as it is finished. Our [same-day man and van](/services/same-day-man-and-van/) page sets out the council's loading rules in full, and the [parking guide](/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/) covers bay suspensions when you have five working days' notice."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Levenshulme Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Local moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Most M19 terraces are a two or three bedroom job in one van load, and the filters add minutes rather than pounds once the route is right. Moving within south Manchester, to [Withington](/locations/withington/) or [Didsbury](/locations/didsbury/), is a short run. The full breakdown is on our [prices page](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Levenshulme</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Stockport", path: "/locations/stockport/" },
                { name: "Withington", path: "/locations/withington/" },
                { name: "Fallowfield", path: "/locations/fallowfield/" },
                { name: "Manchester City Centre", path: "/locations/manchester-city-centre/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Levenshulme?</p>
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
              heading="Quote in Levenshulme"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Levenshulme: FAQs" />
      <Cta label="Get Your Levenshulme Man and Van Quote" />
    </>
  );
}

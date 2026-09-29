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
// Bespoke Bury page. Bury is the one borough in our area that does not issue a
// "dispensation" at all: it has a waiver and a suspension, on separate forms,
// with no published fee. Checked on bury.gov.uk in September 2026.
// -------------------------------------------------------------

const l = getLocation("bury")!;
const url = `${site.url}/locations/bury/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

// Three of Bury's thirteen zones, chosen because the renewal dates are months
// apart, which is the point: there is no single borough-wide date.
const zones = [
  { zone: "Zone A", streets: "Irwell Street, Lower Bank Street, Phoenix Street", renews: "1 October" },
  { zone: "Zone D", streets: "Fold Street, Millett Street, Sankey Street, Tenterden Street", renews: "1 July" },
  { zone: "Zone J", streets: "Highfield Road, Prestwich", renews: "1 May" },
];

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const faqs = [
  {
    q: "Do I need a parking dispensation to move in Bury?",
    a: "Bury does not issue dispensations. It has a waiver, for parking on yellow lines or in a bay that is not pay and display, and a suspension, for parking in a pay and display bay or a council car park. They are separate online forms.",
  },
  {
    q: "How much does a Bury waiver or suspension cost?",
    a: "Bury does not publish a price for either, so ask when you apply. The council does warn that extra charges may apply to an urgent request. Neighbouring Bolton charges £7.90 a day and Manchester £30, so treat Bury's as an unknown rather than as free.",
  },
  {
    q: "How long does a Bury waiver take to come through?",
    a: "The council says it processes applications within two working days. If you need one sooner than that, its urgent number is 0161 253 5353, and it notes extra charges may apply.",
  },
  {
    q: "Which Bury streets have resident permit parking?",
    a: "The schemes run in streets close to town centres, around hospitals and near Metrolink stations. There are zones A to M, with no zone I, and each has its own renewal date rather than one date for the borough.",
  },
  {
    q: "Can visitors park in a Bury permit zone on moving day?",
    a: "Temporary permits are £3.50 each. Buy them before the day rather than on it, because the zone is enforced whether or not your own permits have arrived.",
  },
  {
    q: "How much is a man and van in Bury?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. Bury to Prestwich or the city centre is a short run down the A56.`,
  },
];

export default function BuryPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Bury", path: "/locations/bury/" },
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
            Bury is the one borough we work in that does not issue a parking dispensation. It has a
            waiver and a suspension instead, on two separate forms, and it publishes no price for
            either. The paperwork takes two working days, so it is worth knowing which one you need.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We cover BL8 and BL9, from the terraces around the town centre out to Walmersley, Tottington and Whitefield. The run down the A56 or the M66 into [Prestwich](/locations/prestwich/) and the city centre is one we make constantly, so a move either way is ordinary work."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">A Waiver and a Suspension, Not a Dispensation</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Every other council near here calls it a dispensation. Bury splits the same job in two. A waiver covers parking on yellow lines or in any bay that is not pay and display, which includes a loading bay or a residents' parking zone. A suspension covers parking in an on-street pay and display bay or in a council car park."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Both are online forms, and both are open to tradespeople and site workers where it is essential to their work, which is how [a van and crew on a house move](/services/man-and-van-hire/) qualifies. Picking the wrong one wastes the two working days it takes to process, so check what the kerb outside the address actually is before you apply."
            />
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                "Yellow lines, loading bay or a residents' zone: the waiver form.",
                "Pay and display bay or a council car park: the suspension form.",
                "Neither is priced on the council's site, so ask for the figure when you apply.",
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
              Both forms are linked from Bury&apos;s{" "}
              <a
                href="https://www.bury.gov.uk/roads-travel-and-parking/parking/apply-for-a-parking-permit/waivers-and-suspensions"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                waivers and suspensions page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Two Working Days, and a Number If You Have Not Got Them</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Bury says it will process an application within two working days. That is the same notice Bolton asks for and shorter than Manchester's five, but it still means a Friday move needs sorting on Tuesday at the latest. Bank holidays push it out further."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="For anything urgent the council gives a phone number, 0161 253 5353, and warns that extra charges may apply. Since it does not publish a standard fee either, the honest answer is that a Bury waiver is priced on application. Next door in [Bolton the same permission is £7.90 a day](/locations/bolton/), and in Manchester it is £30, so an unpublished fee is not the same as a free one."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Thirteen Zones, Thirteen Renewal Dates</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Bury's resident schemes run in streets close to town centres, around hospitals and near Metrolink stations, which is a fair description of where most of the moves are. The zones are lettered A to M with no zone I, and each one renews on its own date rather than a single date for the borough."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Example Bury resident parking zones and their renewal dates
                </caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Zone</th>
                    <th scope="col" className="py-2 pr-4 font-bold">Streets</th>
                    <th scope="col" className="py-2 font-bold">Renews</th>
                  </tr>
                </thead>
                <tbody>
                  {zones.map((z) => (
                    <tr key={z.zone} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{z.zone}</td>
                      <td className="py-2 pr-4">{z.streets}</td>
                      <td className="py-2">{z.renews}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <RichText
              className="mt-3 text-gray-700"
              text="Temporary permits are £3.50 each, which is what helpers' cars need. Buy them ahead of the day. The council has also stopped taking applications for new resident schemes until further notice, so the map of zones you move into is the map that will be there next year."
            />
            <p className="mt-3 text-sm text-gray-600">
              The full zone list and the street names in each one are on the council&apos;s{" "}
              <a
                href="https://www.bury.gov.uk/roads-travel-and-parking/parking/apply-for-a-parking-permit/resident-parking-scheme-zones"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                resident parking scheme zones page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Market Days Decide the Town Centre</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Bury Market trades on Wednesdays, Fridays and Saturdays, and those are the three days the town centre is busiest. During the £33m market rebuild the council kept construction work to the non-market days, Monday, Tuesday, Thursday and Sunday, plus some evenings and nights, which tells you which days the roads around the market are easiest for a van."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="The published programme also took around 100 spaces out of the Market Car Park for the contractor's compound, from August 2024 through to July 2026, with Murray Road staying open subject to occasional vehicle restrictions. For a flat move near the market, a Monday or a Thursday start is easier than a Saturday, whatever stage the works are at."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Beyond the market, Bury's town centre masterplan was approved in March 2022 and runs in phases to 2040, taking in the interchange, Station Square and eventually the Mill Gate. It is a long programme, so treat the town centre as a place where something is usually being built."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Bury Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Bury is the far end of the M66 from the city centre, so a move into Manchester is priced on the distance as well as the load. A move inside the borough is a local job. Every rate we quote from is [published rather than given over the phone](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Bury</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Prestwich", path: "/locations/prestwich/" },
                { name: "Cheetham Hill", path: "/locations/cheetham-hill/" },
                { name: "Bolton", path: "/locations/bolton/" },
                { name: "Salford", path: "/locations/salford/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Bury?</p>
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
              heading="Quote in Bury"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Bury: FAQs" />
      <Cta label="Get Your Bury Man and Van Quote" />
    </>
  );
}

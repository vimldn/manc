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
// Bespoke Rochdale page. Rochdale publishes no dispensation and no bay
// suspension: the only priced way to suspend a restriction is a £1,130
// temporary traffic order, so the page turns on the borrowable visitor permit
// and round the clock enforcement. Checked on rochdale.gov.uk, September 2026.
// -------------------------------------------------------------

const l = getLocation("rochdale")!;
const url = `${site.url}/locations/rochdale/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

// The two schemes inside Rochdale town itself, from the council's list. The
// expiry dates are the council's own and are the reason to check before a move.
const townSchemes = [
  { scheme: "Church Stile", expires: "30 September 2028" },
  { scheme: "Rochdale Railway Station", expires: "31 July 2028" },
];

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const faqs = [
  {
    q: "Can a removals van use my Rochdale visitor permit?",
    a: "Yes. The council's own wording is that if a tradesperson or contractor is working at your property, they can borrow your permit. A crew moving your furniture is working at your property, so the permit covers the van.",
  },
  {
    q: "Does Rochdale issue a parking dispensation?",
    a: "It publishes none. There is no dispensation, waiver or bay suspension product on the council's site, and no fee for one. The only published way to suspend a restriction is a temporary traffic regulation order.",
  },
  {
    q: "How much is a temporary traffic regulation order in Rochdale?",
    a: "£1,130. That covers closing a road or footpath, introducing a one-way or no waiting system, or suspending an existing restriction. It is a highway works product, not something a house move would normally need.",
  },
  {
    q: "When are Rochdale's parking schemes enforced?",
    a: "All of them, 24 hours a day, 7 days a week, unless the signs at the location say otherwise. There is no quiet hour to load in.",
  },
  {
    q: "Will a short stop be excused if I get a ticket?",
    a: "Rochdale's enforcement policy lists 'you had only parked for a few minutes', 'you were not causing an obstruction' and 'there was nowhere else to park' among the grounds on which a ticket is unlikely to be cancelled.",
  },
  {
    q: "How much is a man and van in Rochdale?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. Rochdale into central Manchester is about twelve miles down the A58 or the M62.`,
  },
];

export default function RochdalePage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Rochdale", path: "/locations/rochdale/" },
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
            Rochdale is the borough where the paperwork everyone else sells simply does not exist.
            There is no dispensation and no bay suspension to buy, enforcement runs around the
            clock, and the one permission the council does price costs £1,130.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We cover OL11, OL12 and OL16, from the terraces around the town centre out to Norden, Bamford and Milnrow. The M62 puts central Manchester about half an hour away, so we work [Rochdale and the city](/locations/manchester-city-centre/) in both directions most weeks."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Your Visitor Permit Can Cover the Van</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="This is the single most useful thing Rochdale publishes, and almost nobody knows it. The council's own wording on resident permits is that if a tradesperson or contractor is working at your property, they can borrow your permit. A crew carrying your furniture down the stairs is working at your property."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="So in a scheme street the answer is not a form and a fee, it is your own visitor permit handed to the driver when the van arrives. Sort it before moving day rather than on it, because it is issued to you as the resident and the new address will not have one waiting."
            />
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                "Have the visitor permit in your hand before the van turns up, not in the post.",
                "It is your permit to lend, so somebody has to be there to lend it.",
                "Moving out and moving in are two addresses; only one of them is yours today.",
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
              The wording is on the council&apos;s{" "}
              <a
                href="https://www.rochdale.gov.uk/residential-streets-parking-home/residents-parking-permit"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                resident parking permit page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">£1,130, or Nothing at All</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Rochdale does not sell a parking dispensation. It is not on the parking pages, not in the enforcement policy, and not tucked into the skip or scaffolding pages where other councils keep it. The only published route to suspending a restriction is a temporary traffic regulation order, and that costs £1,130."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="A TTRO exists to close a road, impose a one-way system or suspend a restriction for works. No house move justifies it. The practical consequence is that a Rochdale move is planned around the loading rules and the borrowed permit rather than bought out of trouble, which is the opposite of how a [move in Manchester itself](/locations/manchester-city-centre/) works at £30 a day."
            />
            <p className="mt-3 text-sm text-gray-600">
              The fee is published on the council&apos;s{" "}
              <a
                href="https://www.rochdale.gov.uk/roadworks-repairs-restrictions/apply-temporary-traffic-regulations"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                temporary traffic regulation order page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Enforced Around the Clock</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Most permit schemes have hours, and a move that starts at seven in the morning slips under them. Rochdale's do not. The council states that all the schemes are enforced by its civil enforcement officers 24 hours a day, 7 days a week, unless the signs at the location say otherwise."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Its enforcement policy is equally blunt about what will not get a ticket cancelled: that you had only parked for a few minutes, that you were not causing an obstruction, and that there was nowhere else to park are all listed as grounds unlikely to succeed. An early start buys you a quieter street in Rochdale, not an unenforced one."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Two Schemes in Town, Each With an End Date</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The borough has ten resident schemes, and unusually the council publishes an expiry date for each one. Only two of the ten are in Rochdale town itself, which means most addresses here sit outside any scheme and need no permit at all."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  The two resident parking schemes in Rochdale town and their published expiry dates
                </caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Scheme</th>
                    <th scope="col" className="py-2 font-bold">Published expiry</th>
                  </tr>
                </thead>
                <tbody>
                  {townSchemes.map((t) => (
                    <tr key={t.scheme} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{t.scheme}</td>
                      <td className="py-2">{t.expires}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <RichText
              className="mt-3 text-gray-700"
              text="An expiry date is not a promise the scheme ends, but it does mean the rules on your street are reviewed on a date the council has already published. Worth a look before you buy, because a street that is open kerb today may be a permit street on renewal."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Where to Put the Second Car</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Rochdale town centre has two large decks rather than a scatter of small car parks. Rochdale Riverside opened with a 520 space multi storey in April 2020, and the Rochdale Exchange carries over 732 spaces. Between them they solve the question of where family park while the van is loaded."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Market days are the exception. Both the Pioneers Market and the outdoor market at The Butts trade on Mondays, Wednesdays and Saturdays, and those are the three days the middle of town is busiest. A Tuesday or a Thursday move near the centre is the easier one."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Rochdale Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Rochdale is about twelve miles out, so a move into the city is priced on the distance as well as the load, and a move inside the borough is a local job. Every rate we quote from is [published rather than given over the phone](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Rochdale</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Oldham", path: "/locations/oldham/" },
                { name: "Bury", path: "/locations/bury/" },
                { name: "Manchester City Centre", path: "/locations/manchester-city-centre/" },
                { name: "Cheetham Hill", path: "/locations/cheetham-hill/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Rochdale?</p>
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
              heading="Quote in Rochdale"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Rochdale: FAQs" />
      <Cta label="Get Your Rochdale Man and Van Quote" />
    </>
  );
}

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
// Bespoke Eccles page. Eccles is in the City of Salford, whose parking rules
// are the friendliest to a removal of any council we work in: a short
// furniture removal needs no dispensation at all. Checked on salford.gov.uk
// in September 2026.
// -------------------------------------------------------------

const l = getLocation("eccles")!;
const url = `${site.url}/locations/eccles/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const salfordOptions = [
  {
    option: "Short removals load",
    cost: "No charge",
    notice: "None needed",
    detail: "Salford lists furniture removals completed in a short period as not needing a dispensation",
  },
  {
    option: "Parking dispensation",
    cost: "£10 per calendar day",
    notice: "At least 24 hours",
    detail: "Covers limited waiting bays, permit bays and yellow lines with no loading restriction",
  },
  {
    option: "Restriction suspension",
    cost: "£15 per day per space",
    notice: "At least 72 hours, excluding weekends",
    detail: "Cones placed by the council's contractors, and tickets issued to anyone else parking there",
  },
];

const faqs = [
  {
    q: "Do I need a parking dispensation for a move in Eccles?",
    a: "Usually not. Salford City Council lists furniture removals and other bulky items completed within a short period among the vehicles that do not require a dispensation. For a longer job, a dispensation costs £10 per calendar day.",
  },
  {
    q: "How do I reserve a space outside the house?",
    a: "Salford calls it a restriction suspension. It costs £15 per day per vehicular space, roughly every two metres, and needs at least 72 hours' notice excluding weekends. The council's contractors place the cones and can ticket anyone else who parks there.",
  },
  {
    q: "Is that cheaper than Manchester?",
    a: "Yes. Manchester City Council charges £30 per bay per day and needs five working days' notice. Salford's suspension is half that, and a short removals load needs nothing at all.",
  },
  {
    q: "Are there permit schemes in Eccles?",
    a: "Yes, in parts of it. Salford runs Monton Zone A and Zone B and the Eccles Community Parking Scheme, all digital permits. Check the signs on your own street for the hours.",
  },
  {
    q: "What is happening to Eccles town centre?",
    a: "Salford City Council appointed Muse as its strategic regeneration partner for Eccles town centre in July 2025, and a masterplan is being developed after community events in autumn 2025 and early 2026.",
  },
  {
    q: "How much is a man and van in Eccles?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. Eccles to the city centre or the Quays is a short run.`,
  },
];

export default function EcclesPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Eccles", path: "/locations/eccles/" },
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
            Eccles is in the City of Salford, and Salford has the most sensible parking rules for
            a removal of any council we work in. A short furniture removal does not need a
            dispensation at all, and where you do need paperwork it costs a fraction of what the
            same thing costs in Manchester.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We move houses and flats across M30, from the terraces near the town centre out to Monton and Patricroft. Runs to [Salford](/locations/salford/), [Salford Quays](/locations/salford-quays/) or the city centre are short, so the cost sits in the loading rather than the driving."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Salford Asks for Less Than Manchester</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Most councils treat a removal van like any other vehicle that wants to park where it should not. Salford does not. Its dispensation page lists the vehicles that do not need one, and furniture removals and other bulky items which will be completed within a short period of time are on that list, alongside the emergency services and postal deliveries."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <caption className="sr-only">Salford parking options for a removal</caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Option</th>
                    <th scope="col" className="py-2 pr-4 font-bold">Cost</th>
                    <th scope="col" className="py-2 font-bold">Notice</th>
                  </tr>
                </thead>
                <tbody>
                  {salfordOptions.map((o) => (
                    <tr key={o.option} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{o.option}</td>
                      <td className="py-2 pr-4">{o.cost}</td>
                      <td className="py-2">{o.notice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700">
              {salfordOptions.map((o) => (
                <li key={o.detail} className="flex gap-2">
                  <span aria-hidden className="font-bold text-brand">
                    &#10003;
                  </span>
                  <span>
                    <strong className="font-semibold">{o.option}:</strong> {o.detail}.
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              The terms are on Salford's{" "}
              <a
                href="https://www.salford.gov.uk/parking-roads-and-travel/parking-car-parks-and-bus-lanes/parking-dispensation-request-form/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                parking dispensation page
              </a>{" "}
              and its{" "}
              <a
                href="https://www.salford.gov.uk/parking-roads-and-travel/parking-car-parks-and-bus-lanes/parking-restriction-suspension-requests/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                suspension request page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">When the Suspension Is Worth £15</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="A suspension is worth paying for when the street is full every day and a long carry would cost more in time than the fee does in cash. Salford's price covers the suspension notices over the signs on site, cones placed by the council's own enforcement contractors, and penalty notices to anyone who parks in your space anyway. In effect the space is reserved for you."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="It needs 72 hours' notice, not counting weekends, so it has to be arranged the week before a Saturday move rather than the day before. For anything longer than two weeks Salford uses a temporary traffic order instead, which is a different process entirely."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Permit Streets Around Monton</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Parts of the area do have resident permit schemes. Salford runs Monton Zone A and Monton Zone B, and the Eccles Community Parking Scheme, all on digital permits rather than paper ones. The hours are set street by street and shown on the signs, so we ask for the street name rather than working from the postcode."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Because a short removals load needs no dispensation, a permit street is rarely a problem for the van itself. What it does affect is anyone helping who turns up in a car and leaves it there for the afternoon."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">A Town Centre Being Rebuilt</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Eccles town centre is mid change. Salford City Council appointed Muse as its strategic regeneration partner in July 2025, and the two have been running community events through autumn 2025 and early 2026 to shape a masterplan for the centre, with new homes part of the plan."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="For a move that means two things. Routes near the centre change as sites are cleared, so we check before the day rather than assuming last year's layout. And the new homes coming will be flats with lifts and loading bays rather than terraces, which is a different kind of job. Our [flat and apartment removals](/services/flat-apartment-removals/) page covers that side."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What an Eccles Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Any council fee is paid to Salford rather than to us, and on most Eccles jobs there is no fee to pay at all. The full breakdown is on our [prices page](/prices/), and if your move crosses into Manchester, the [parking guide](/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/) covers that side's rules."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Eccles</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Worsley", path: "/locations/worsley/" },
                { name: "Salford", path: "/locations/salford/" },
                { name: "Salford Quays", path: "/locations/salford-quays/" },
                { name: "Stretford", path: "/locations/stretford/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Eccles?</p>
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
              heading="Quote in Eccles"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Eccles: FAQs" />
      <Cta label="Get Your Eccles Man and Van Quote" />
    </>
  );
}

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
// Bespoke Worsley page. Worsley is Salford, but a very different Salford
// from Eccles: a conservation area village, big houses on private drives,
// and RHS Bridgewater bringing visitor traffic through it. Checked on
// salford.gov.uk and rhs.org.uk in September 2026.
// -------------------------------------------------------------

const l = getLocation("worsley")!;
const url = `${site.url}/locations/worsley/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const faqs = [
  {
    q: "Do I need council paperwork to move in Worsley?",
    a: "Usually not. Salford City Council lists furniture removals completed within a short period among the vehicles that do not need a parking dispensation. A longer job needs a £10 dispensation, and reserving a space costs £15 per day with 72 hours' notice.",
  },
  {
    q: "Are there permit streets in Worsley?",
    a: "A few. Salford runs schemes on Egerton Road and Barton Road in M28. Most of Worsley is unrestricted, with driveways rather than permit bays.",
  },
  {
    q: "Is Worsley village a conservation area?",
    a: "Yes. Salford adopted an appraisal for the Worsley Village conservation area in July 2007, and at the same time extended the boundary to take in part of the south side of Barton Road and northwards to Old Warke Dam and the Aviary.",
  },
  {
    q: "Does RHS Bridgewater affect moving day?",
    a: "It can. The garden is at Worsley, M28 2LJ, and on a sunny weekend the traffic heading for it uses the same roads as your move. A weekday or an early start avoids it.",
  },
  {
    q: "Can a Luton van get down the village lanes?",
    a: "Usually yes, but the older lanes are narrow with parked cars and low branches. Tell us the address and we will check the approach, and bring the right van rather than the biggest one.",
  },
  {
    q: "How much is a man and van in Worsley?",
    a: `Moves are priced on time. Two movers with a large van start from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. Larger detached houses here usually need the Luton and a full day.`,
  },
];

export default function WorsleyPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Worsley", path: "/locations/worsley/" },
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
            Worsley is Salford, but not the Salford most people picture. It is a conservation area
            village of black and white houses by the canal, ringed by large detached homes on
            private drives and newer estates out towards the M60. The moves here are bigger than
            average, and the obstacles are trees, gravel and garden traffic rather than permit bays.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We cover M28, from the village itself out to Boothstown and the edge of Walkden. Runs to [Eccles](/locations/eccles/), [Salford](/locations/salford/) or the Quays are quick on the motorway, and a full house here is usually a Luton and two movers rather than a single van load."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Salford Rules Are the Easy Part</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Worsley sits under Salford City Council, which is the friendliest set of parking rules for a removal in Greater Manchester. Salford lists furniture removals and other bulky items completed within a short period among the vehicles that do not need a parking dispensation at all. A longer job needs a dispensation at £10 per calendar day with 24 hours' notice, and reserving the kerb outright is a restriction suspension at £15 per day per space with 72 hours' notice, excluding weekends."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Most Worsley addresses never need any of it, because there is a drive to load from. Where it matters is the village core, where the houses face straight onto narrow lanes. Our [Eccles](/locations/eccles/) page sets the three options out side by side, and the rules are on Salford's [parking dispensation page](https://www.salford.gov.uk/parking-roads-and-travel/parking-car-parks-and-bus-lanes/parking-dispensation-request-form/)."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">The Village Conservation Area</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Salford adopted an appraisal for the [Worsley Village conservation area](https://www.salford.gov.uk/conworsleyvi) in July 2007, and extended the boundary at the same time to include part of the south side of Barton Road and to run north as far as Old Warke Dam and the Aviary. It is the part of Worsley people picture: the Bridgewater Canal, the green, and the timbered houses around it."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Old buildings on old lanes make for a particular kind of move. Doorways are narrow, ceilings can be low, staircases turn tightly, and there is often nowhere to stand a van except the road itself. We measure the awkward pieces against the tightest turn before the day and part-dismantle what will not go round it."
            />
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                "Send a photo of the front door and the staircase if the house is period.",
                "Tell us about low branches or an archway on the approach, which decide the van height.",
                "Gravel drives slow a trolley down, so we plan a longer carry time rather than rushing it.",
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
            <h2 className="text-xl font-bold text-gray-900">RHS Bridgewater and Weekend Traffic</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="RHS Garden Bridgewater is at Worsley, M28 2LJ, and it has changed the traffic pattern of the area since it opened. On a fine weekend the roads towards the garden carry visitors rather than residents, and the lanes that are quiet on a Tuesday morning are not quiet at all on a Saturday in May."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="It rarely stops a move, but it does decide the best hour to start one. If you have a choice, we load early or pick a weekday. If you do not, we plan the approach so the van is not queueing behind garden traffic with a half loaded lorry."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Big Houses, Long Carries</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Away from the village, Worsley is detached houses, garages, lofts and garden rooms. The van can usually get onto the drive, which is the good news. The less good news is that the distance from a double garage at the side of the house to the tail of the van is often further than the whole carry in a terrace."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="That is where quotes go wrong, so count the loft, the garage and the shed when you describe the job. A four bedroom house with all three is a Luton, two movers and most of a day. Our [house removals](/services/house-removals/) page covers how we plan a whole house, and [packing services](/services/packing-services/) covers the part most people run out of time for."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Worsley Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a large van starts from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Most Worsley jobs are at the larger end, so they are priced on the Luton rather than the small van, and the council fee is usually nothing at all. The full breakdown is on our [prices page](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Worsley</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Eccles", path: "/locations/eccles/" },
                { name: "Salford", path: "/locations/salford/" },
                { name: "Salford Quays", path: "/locations/salford-quays/" },
                { name: "Prestwich", path: "/locations/prestwich/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Worsley?</p>
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
              heading="Quote in Worsley"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Worsley: FAQs" />
      <Cta label="Get Your Worsley Man and Van Quote" />
    </>
  );
}

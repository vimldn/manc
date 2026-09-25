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
// Bespoke Swinton page. Swinton is Salford's own administrative centre, and
// its parking schemes are split between paper and digital permits, which is
// the detail that actually catches people out on moving day. Checked on
// salford.gov.uk in September 2026.
// -------------------------------------------------------------

const l = getLocation("swinton")!;
const url = `${site.url}/locations/swinton/`;

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
    q: "Do I need a permit or a dispensation to move in Swinton?",
    a: "Usually neither. Salford lists furniture removals completed within a short period among the vehicles that do not need a parking dispensation. A longer job needs one at £10 per calendar day with 24 hours' notice.",
  },
  {
    q: "Which Swinton streets have permit schemes?",
    a: "Swinton Zone A and Zone B run on paper permits, and the Crompton Street scheme in M27 runs on digital permits through MiPermit. Most of Swinton is outside any scheme.",
  },
  {
    q: "What is the difference between a paper and a digital permit?",
    a: "A paper permit is a physical thing that has to be displayed in the windscreen, so it cannot be transferred to a different vehicle at short notice. A digital permit is held against the registration on the council's system.",
  },
  {
    q: "Is Swinton part of Manchester?",
    a: "No, it is in the City of Salford, and it is the administrative centre for that council. The parking rules and fees are Salford's, not Manchester's.",
  },
  {
    q: "Is there a conservation area near Swinton?",
    a: "Irlams o' th' Height, just to the south east, was designated in 1991. It covers about one hectare of the old weavers' village, and the streets there are narrow.",
  },
  {
    q: "How much is a man and van in Swinton?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. Swinton to Eccles, Worsley or Salford is a short run.`,
  },
];

export default function SwintonPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Swinton", path: "/locations/swinton/" },
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
            Swinton is where Salford City Council runs itself from, which makes it the one place
            in the borough where the parking rules are written on the doorstep. Most of M27 sits
            outside any permit scheme, and the schemes that do exist are split between paper
            permits and digital ones, which is the detail that catches people out on moving day.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We move houses and flats across M27, from the streets around the civic centre out towards Pendlebury and the M60. Runs to [Eccles](/locations/eccles/), [Worsley](/locations/worsley/) or [Salford](/locations/salford/) take minutes, so the cost sits in the loading rather than the driving."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Paper Permits and Digital Permits</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Salford has been moving its parking schemes from paper to digital, and Swinton has one of each. Swinton Zone A and Zone B still run on paper permits, which have to be displayed in the windscreen of the vehicle they were issued for. The Crompton Street scheme in M27 has moved to digital permits, held against a registration on the council's system."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="That matters when friends and family turn up to help. A paper visitor permit cannot be moved to a different car from a phone, and a digital one needs the registration adding before the car arrives. The van itself is rarely the problem, because a short removals load does not need a dispensation in Salford at all."
            />
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                "Check which scheme your street is in before the day, not on it.",
                "Sort visitor permits for helpers' cars in advance, especially on a paper scheme.",
                "The removal van can load without paperwork, as long as the load is a short one.",
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
              Salford lists which schemes are paper and which are digital on its{" "}
              <a
                href="https://www.salford.gov.uk/parking-roads-and-travel/parking-car-parks-and-bus-lanes/residents-parking-permits/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                resident permits page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Salford Fees, if You Need Them</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Where a job runs long enough to need permission, Salford charges £10 per calendar day for a dispensation with 24 hours' notice, or £15 per day per vehicular space to suspend the restriction outright with 72 hours' notice, excluding weekends. Both are cheaper than Manchester's £30 a day. Our [Eccles](/locations/eccles/) page sets the three Salford options out side by side."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">The Civic Centre End of Town</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Salford describes Swinton as the administrative centre for the city council, and the civic centre on Chorley Road is the anchor of the town. That brings weekday traffic to the middle of Swinton that has nothing to do with the people who live there, and it fills the kerb along the main road during office hours."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="For a move on or near Chorley Road, an early start or a weekend is easier than the middle of a weekday. Away from the main road the residential streets are quieter and the van usually gets close to the door."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">A Town Centre Still Being Planned</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Swinton's future is under discussion rather than under construction. After wide engagement with residents, businesses, schools and community groups, the council published the Swinton Vision, which sets out what people want from the town and where the opportunities are. Unlike Eccles, there is no masterplan or developer partner yet."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="In practice that means the streets you move into today are the streets that will be there next year. It also means the housing stock is what it is: a mix of interwar semis, terraces and newer estates, most with a drive or a kerb the van can use."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Irlams o' th' Height and the Older Streets</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="South east of Swinton, [Irlams o' th' Height](https://www.salford.gov.uk/conirlams) was designated a conservation area in 1991. It is small, about a hectare, and it preserves what was a handloom weavers' village recorded as far back as the 12th century in the old parish of Eccles."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Old village streets mean narrow frontages, tight turns and cottages whose staircases were never built for a modern sofa. If you are moving into one, send a photo of the door and the stairs with your quote request and we will bring the right van and enough hands."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Swinton Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="A three bedroom semi with a loft and a garage is a Luton and two movers. A flat or a first move out is usually one van load. The full breakdown is on our [prices page](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Swinton</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Eccles", path: "/locations/eccles/" },
                { name: "Worsley", path: "/locations/worsley/" },
                { name: "Salford", path: "/locations/salford/" },
                { name: "Bolton", path: "/locations/bolton/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Swinton?</p>
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
              heading="Quote in Swinton"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Swinton: FAQs" />
      <Cta label="Get Your Swinton Man and Van Quote" />
    </>
  );
}

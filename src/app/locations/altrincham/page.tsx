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
// Bespoke Altrincham page. Altrincham is in Trafford, so the parking
// dispensation, its fee and its notice period come from Trafford Council,
// and they differ from both Manchester and Stockport. That comparison is the
// spine of the page. Checked on trafford.gov.uk, stockport.gov.uk and
// manchester.gov.uk in September 2026.
// -------------------------------------------------------------

const l = getLocation("altrincham")!;
const url = `${site.url}/locations/altrincham/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const councils = [
  {
    council: "Trafford (Altrincham)",
    notice: "At least 3 days",
    cost: "£18.50 per vehicle, per day",
  },
  {
    council: "Manchester",
    notice: "Minimum 5 working days",
    cost: "£30 per bay or vehicle, per day",
  },
  {
    council: "Stockport",
    notice: "Reply within 10 working days",
    cost: "Not published, a charge may be payable",
  },
];

const faqs = [
  {
    q: "Who do I apply to for parking for a move in Altrincham?",
    a: "Trafford Council, not Manchester City Council. Trafford calls it a parking dispensation, and house removals are one of the reasons it considers.",
  },
  {
    q: "How much is a parking dispensation in Altrincham?",
    a: "Trafford Council charges £18.50 per day, per vehicle. Longer projects are priced at £225 for a month, £336 for two months and £441 for three.",
  },
  {
    q: "How much notice does Trafford need?",
    a: "At least 3 days, so the council can check the location is viable and meets health and safety requirements. Apply as soon as your moving date is fixed.",
  },
  {
    q: "When do Trafford resident permit schemes operate?",
    a: "Trafford says most of its schemes operate during the working day from Monday to Saturday, with the exact times shown on the street signs. Outside those hours parking is uncontrolled unless another restriction applies.",
  },
  {
    q: "Do you cover Hale, Bowdon and Timperley as well?",
    a: "Yes. We move households across WA14 and WA15, and between Altrincham and Sale, Stretford and south Manchester.",
  },
  {
    q: "How much is a man and van in Altrincham?",
    a: `Moves are priced on time. Two movers with a large van start from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. Larger family houses usually need the Luton.`,
  },
];

export default function AltrinchamPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Altrincham", path: "/locations/altrincham/" },
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
            Altrincham is in Trafford, not Manchester, and a move here runs on Trafford Council's
            rules. The parking permission you need for the van has a different name, a different
            fee and a shorter notice period than it does a few miles up the road. Get those right
            and an Altrincham move is one of the simpler jobs in south Manchester.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We cover WA14 and WA15, from flats above the shops in the town centre to the larger family houses out towards Hale and Bowdon. Moves between Altrincham and [Sale](/locations/sale/), [Stretford](/locations/stretford/) or south Manchester are short runs, and bigger houses here usually mean a Luton and two movers rather than a small van."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Trafford Parking Dispensations</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="If the van cannot stop legally outside, Trafford Council can give a parking dispensation, which lets a vehicle park where it normally could not. Trafford only considers one where it is essential for the vehicle to be at the location, and house removals are one of the four reasons it lists, alongside building works, weddings and filming. The fee is £18.50 per day, per vehicle."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="You apply on the council's form, giving the location, the dates, the times and the vehicle registrations, then send it by email or post. Trafford asks for at least 3 days' notice so it can check the location is viable and meets health and safety requirements. The details are on Trafford's [parking dispensation page](https://www.trafford.gov.uk/parking/apply-long-term-parking-permits)."
            />
            <h3 className="mt-6 text-lg font-bold text-gray-900">
              Three Councils, Three Sets of Terms
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              A lot of Altrincham moves start or finish in another borough, so it helps to know
              each council's terms.
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Parking dispensation terms in Trafford, Manchester and Stockport
                </caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Council</th>
                    <th scope="col" className="py-2 pr-4 font-bold">Notice</th>
                    <th scope="col" className="py-2 font-bold">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {councils.map((c) => (
                    <tr key={c.council} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{c.council}</td>
                      <td className="py-2 pr-4">{c.notice}</td>
                      <td className="py-2">{c.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <RichText
              className="mt-4 text-gray-700"
              text="Moving from Altrincham to somewhere in Manchester means two applications to two councils on two sets of terms. Our [Stockport](/locations/stockport/) page covers that borough's rules in more detail."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Resident Permit Schemes in Trafford</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Trafford's resident parking schemes vary by location, but the council says most operate during the working day from Monday to Saturday, with the exact times shown on the signs in each scheme. During those hours many spaces are kept for resident and visitor permit holders. Outside them, parking is uncontrolled unless another traffic order applies."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="For a move, that makes Sunday or an early start the easiest time to find space on a permit street. On a weekday, a van can still stop to load where there is no loading ban, but a dispensation is the safer route if the job will take more than a short while. Trafford explains how its schemes work on its [resident parking pages](https://www.trafford.gov.uk/parking/resident-parking-schemes/how-scheme-operates)."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Town Centre Flats and Conservation Areas</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Parts of Altrincham town centre are conservation areas with their own Trafford appraisals, including Goose Green and Stamford New Road. In practice town centre moves are often older buildings, narrow frontages and flats above shops, where the front door is on a busy street and the stairs inside were never built for modern furniture."
            />
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                "Check whether your flat's entrance is at the front or through a rear yard.",
                "Measure the tightest turn on the stairs before booking a large sofa or wardrobe move.",
                "Ask the landlord or managing agent whether deliveries can use a rear service area.",
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
            <h2 className="text-xl font-bold text-gray-900">Family Houses in Hale and Bowdon</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Away from the centre, the jobs get bigger. A four bedroom house with a loft and a garage is a Luton and two movers, sometimes most of a day, and the carry from a long drive to the van adds more time than the drive itself. Tell us about the loft, the garage and the shed when you ask for a quote, because those are where estimates usually go wrong."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Packing is where a family move saves the most time on the day. Our [packing services](/services/packing-services/) cover a full or part pack, and [house removals](/services/house-removals/) sets out how a whole-house move is planned."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What an Altrincham Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a large van starts from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="A town centre flat is usually a two or three hour job. A family house in Hale or Bowdon usually needs the Luton, and a Trafford dispensation, if you need one, is a separate council fee paid directly to Trafford. The full breakdown is on our [prices page](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Altrincham</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Sale", path: "/locations/sale/" },
                { name: "Stretford", path: "/locations/stretford/" },
                { name: "Wythenshawe", path: "/locations/wythenshawe/" },
                { name: "Stockport", path: "/locations/stockport/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Altrincham?</p>
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
              heading="Quote in Altrincham"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Altrincham: FAQs" />
      <Cta label="Get Your Altrincham Man and Van Quote" />
    </>
  );
}

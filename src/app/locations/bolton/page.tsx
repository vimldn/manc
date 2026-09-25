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
// Bespoke Bolton page. Bolton Council is the fourth council in our patch and
// the cheapest to deal with: a £7.90 dispensation, and only three resident
// permit zones in the whole borough. Checked on bolton.gov.uk in September
// 2026, alongside the Salford, Trafford and Manchester terms.
// -------------------------------------------------------------

const l = getLocation("bolton")!;
const url = `${site.url}/locations/bolton/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const councils = [
  { council: "Bolton", cost: "£7.90 per vehicle, per day", notice: "2 working days" },
  { council: "Salford", cost: "£10 per day, or nothing for a short load", notice: "24 hours" },
  { council: "Trafford", cost: "£18.50 per vehicle, per day", notice: "3 days" },
  { council: "Manchester", cost: "£30 per bay or vehicle, per day", notice: "5 working days" },
];

const suspension = [
  { days: "1 day", oneBay: "£34.40", twoBays: "£42.30" },
  { days: "2 days", oneBay: "£42.30", twoBays: "£58.10" },
  { days: "3 days", oneBay: "£50.20", twoBays: "£73.90" },
];

const faqs = [
  {
    q: "What does a parking dispensation cost in Bolton?",
    a: "£7.90 per vehicle, per day, paid when you collect it. Bolton asks for at least two working days' notice, and the dispensation has to be obtained before the vehicle parks.",
  },
  {
    q: "Is that cheaper than the other councils?",
    a: "Yes, it is the cheapest in our area. Salford charges £10 a day, Trafford £18.50 and Manchester £30. Salford also lets a short removals load go without any dispensation at all.",
  },
  {
    q: "How much is it to suspend a parking bay in Bolton?",
    a: "There is a standard charge of £26.50 plus £7.90 per bay, per day, so one bay for one day is £34.40. Cancelling needs two working days' notice or you are still charged.",
  },
  {
    q: "Are there resident permit zones in Bolton?",
    a: "Only three in the whole borough: Zone A around Dorset Street in Bolton, Zone C around Marsden Street in Westhoughton and Zone D on Mill Street, Westhoughton. Everywhere else is ordinary street parking.",
  },
  {
    q: "Are there roadworks in Bolton town centre?",
    a: "The council lists junction improvements at Topp Way and Higher Bridge Street, which started on 18 May 2026, and A666 bridge refurbishment works at the Manchester Slip Road and Loxham Street bridges from 3 August 2026.",
  },
  {
    q: "How much is a man and van in Bolton?",
    a: `Moves are priced on time. Two movers with a large van start from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. Bolton to Manchester is a longer run than a local job, so tell us both postcodes.`,
  },
];

export default function BoltonPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Bolton", path: "/locations/bolton/" },
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
            Bolton is its own council, and of the four we deal with it asks for the least. A
            parking dispensation costs £7.90 a day here, against £30 for the same thing in
            Manchester, and only three streets' worth of the borough sits inside a resident permit
            scheme. For a move that means less paperwork and less cost before anyone lifts a box.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We cover BL1 to BL7, from the town centre terraces out to Horwich, Farnworth and Westhoughton, and we run the road between Bolton and Manchester constantly. A move within Bolton is a local job, and a move into the city is priced on the distance as well as the load."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">The Cheapest Dispensation in the Area</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Bolton Council issues a parking dispensation when loading and unloading will take longer than is normally permitted, which is exactly what a house move is. It costs £7.90 per vehicle per day, is paid when you collect it, and has to be in hand before the van parks. Apply at least two working days before the date you need it."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Parking dispensation costs and notice across four councils
                </caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Council</th>
                    <th scope="col" className="py-2 pr-4 font-bold">Cost</th>
                    <th scope="col" className="py-2 font-bold">Notice</th>
                  </tr>
                </thead>
                <tbody>
                  {councils.map((c) => (
                    <tr key={c.council} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{c.council}</td>
                      <td className="py-2 pr-4">{c.cost}</td>
                      <td className="py-2">{c.notice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Bolton publishes its terms on the{" "}
              <a
                href="https://www.bolton.gov.uk/parking-permits/parking-permits-1/3"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                parking dispensation page
              </a>
              .
            </p>
            <RichText
              className="mt-3 text-gray-700"
              text="A move that crosses into Manchester needs that council's paperwork as well, on its own terms and its own fee. Our guide to [reserving parking for a move in Manchester](/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/) covers that side."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Suspending a Pay and Display Bay</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="If the van needs a pay and display bay in the town centre rather than permission to sit on a restriction, Bolton suspends the bay instead. That is a standard charge of £26.50 plus £7.90 per bay per day, so one bay for a day comes to £34.40 and two bays to £42.30. Cancelling needs two working days' notice, or the charge still stands."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <caption className="sr-only">Bolton bay suspension charges</caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Length</th>
                    <th scope="col" className="py-2 pr-4 font-bold">One bay</th>
                    <th scope="col" className="py-2 font-bold">Two bays</th>
                  </tr>
                </thead>
                <tbody>
                  {suspension.map((s) => (
                    <tr key={s.days} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{s.days}</td>
                      <td className="py-2 pr-4">{s.oneBay}</td>
                      <td className="py-2">{s.twoBays}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <RichText
              className="mt-4 text-gray-700"
              text="A bay is about the length of a car, and a Luton needs two. For most Bolton addresses neither is necessary, because the street outside is unrestricted and the van simply parks."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Three Permit Zones in the Whole Borough</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Bolton runs three resident parking schemes in total. Zone A covers the Dorset Street area of Bolton, taking in parts of Castle Street, Dowson Street, Court Street, May Street and Halstead Street. Zone C covers Marsden Street in Westhoughton with parts of Edward Street and Wood Street, and Zone D covers part of Mill Street, also in Westhoughton."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Everywhere else, the van parks like any other vehicle, subject to the ordinary yellow line and loading rules. That is unusual in Greater Manchester and it makes Bolton one of the more straightforward places we move people. The council lists the exact house numbers on its [resident permits page](https://www.bolton.gov.uk/parking-permits/parking-permits-1)."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Town Centre Works to Plan Around</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Two schemes shape the approach into Bolton at the moment. Junction improvements at Topp Way and Higher Bridge Street started on 18 May 2026, and refurbishment of the Manchester Slip Road and Loxham Street bridges on the A666 began on 3 August 2026. Public realm work on Market Street in Farnworth has been running since June 2024."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="None of them stops a move, but all of them change the route and the timing. We check the council's current scheme list before a town centre job rather than finding out at a closed junction with a loaded van."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Bolton Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Bolton is further out than most of our patch, so a move between Bolton and central Manchester carries the drive as well as the load. Tell us both postcodes and the floor at each end and we will price it properly. Longer runs are covered on our [long distance removals](/services/long-distance-removals/) page, and the full breakdown is on the [prices page](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Bolton</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Swinton", path: "/locations/swinton/" },
                { name: "Worsley", path: "/locations/worsley/" },
                { name: "Prestwich", path: "/locations/prestwich/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Bolton?</p>
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
              heading="Quote in Bolton"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Bolton: FAQs" />
      <Cta label="Get Your Bolton Man and Van Quote" />
    </>
  );
}

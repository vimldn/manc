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
// Bespoke Stockport page. Stockport is its own metropolitan borough, so the
// parking paperwork, the permits and the roadworks are all run by a different
// council from Manchester's. That difference is the spine of the page.
// Checked on stockport.gov.uk and manchester.gov.uk in September 2026.
// -------------------------------------------------------------

const l = getLocation("stockport")!;
const url = `${site.url}/locations/stockport/`;

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
    point: "Who you apply to",
    manchester: "Manchester City Council",
    stockport: "Stockport Council",
  },
  {
    point: "Notice period",
    manchester: "Minimum five working days",
    stockport: "Not published, but a reply within ten working days",
  },
  {
    point: "Cost",
    manchester: "£30 per bay or vehicle, per day",
    stockport: "Not published, a charge may be payable",
  },
  {
    point: "Removals accepted",
    manchester: "Yes, domestic removals listed",
    stockport: "Yes, domestic removals listed",
  },
];

const faqs = [
  {
    q: "Do you cover Stockport as well as Manchester?",
    a: "Yes. Stockport is a separate borough, and we move households across SK1 to SK8 and between Stockport and Manchester every week.",
  },
  {
    q: "How do I reserve parking for a move in Stockport?",
    a: "You apply to Stockport Council rather than Manchester City Council. Its parking dispensations service covers suspending a bay and permission to park on yellow lines, and domestic removals are one of the accepted reasons. The council says it will respond within ten working days, so apply early.",
  },
  {
    q: "Does a Stockport dispensation cost anything?",
    a: "The council says a charge may be payable but does not publish an amount. Manchester, by contrast, charges £30 per bay or per vehicle per day and needs five working days' notice.",
  },
  {
    q: "Can I use a resident permit for the removal van?",
    a: "No. A Stockport permit is issued for a named vehicle, has to be displayed in the windscreen, and the vehicle must be parked completely inside a marked bay. It cannot be used on double yellow lines or at bus stops.",
  },
  {
    q: "Are Stockport's free car parks still free?",
    a: "The council has said its free car parks become chargeable in 2026, with a limited number of resident permits for people who live nearby. It has also discontinued visitor scratch cards.",
  },
  {
    q: "How much is a man and van in Stockport?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. A run between Stockport and south Manchester adds the drive but is still a short job.`,
  },
];

export default function StockportPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Stockport", path: "/locations/stockport/" },
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
            Stockport is not part of Manchester, and for a removal that matters more than the few
            miles between them. It is its own metropolitan borough with its own council, which
            means different parking paperwork, a different permit scheme and its own roadworks
            programme. Everything people learn about moving in Manchester has to be checked again
            here.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We cover the whole of SK1 to SK8, from town centre apartments near the Interchange to the terraces and semis out towards Heaton Chapel, Cheadle and Bredbury. Moves between Stockport and [Levenshulme](/locations/levenshulme/) or the south Manchester suburbs are short runs up the A6."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">A Different Council, Different Rules</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="If your street is too tight to load on, the answer in both boroughs is a dispensation or a bay suspension, but you apply to different places on different terms. Stockport Council runs one combined service covering suspending parking bays and getting permission to park on yellow lines, and it lists domestic removals among the special circumstances it will consider. You apply online with the vehicle type and registration, the reason, the activities, and the dates and times you need."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Parking dispensations in Stockport compared with Manchester
                </caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Point</th>
                    <th scope="col" className="py-2 pr-4 font-bold">Manchester</th>
                    <th scope="col" className="py-2 font-bold">Stockport</th>
                  </tr>
                </thead>
                <tbody>
                  {councils.map((c) => (
                    <tr key={c.point} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{c.point}</td>
                      <td className="py-2 pr-4">{c.manchester}</td>
                      <td className="py-2">{c.stockport}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              The Stockport terms are on the council's{" "}
              <a
                href="https://www.stockport.gov.uk/parking-dispensations"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                parking dispensations page
              </a>
              . Because it quotes a reply within ten working days rather than a minimum notice
              period, the safe move is to apply as soon as the date is fixed.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Permits, Scratch Cards and 2026</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="A Stockport resident permit is a physical one. It has to be displayed clearly in the windscreen, the vehicle must be parked completely inside a marked bay, and it does not allow parking on double yellow lines or at bus stops. None of that helps a removal van, which is why the dispensation route exists."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Two changes are worth knowing if you are moving into the borough. The council has discontinued visitor scratch cards, so a relative helping with the move cannot be covered that way. And its free council car parks are becoming chargeable in 2026, with a limited number of resident permits for people living near them."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">The Interchange and the Town Centre</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Stockport town centre has been rebuilt around its transport. The Interchange opened in March 2024, a £140m scheme begun in 2021, with 18 bus stands handling up to 164 departures an hour, new walking and cycling links to the railway station, and a two acre rooftop park since named Viaduct Park. The council calls it the first phase of the regeneration of Stockport Town Centre West."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="For anyone moving into the new town centre flats, that means a building with managed access rather than a driveway. Ask your block where vehicles are allowed to stop, whether there is a service entrance, and whether a lift needs booking, then send us the answers. Our [flat and apartment removals](/services/flat-apartment-removals/) page covers how we work around lifts and loading bays."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Roadworks Until 2028</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The A34 Corridor Improvement Plan runs between the M60 and the A555, with construction taking place between 2024 and 2028 in phases. The council also lists live schemes at Great Portwood Street, the Stockport Road East junction, Buckingham Road on the A6 corridor, Carrington Road, Romiley, Jacksons Lane and Castle Hill."
            />
            <p className="mt-3 text-sm text-gray-600">
              We check the council's{" "}
              <a
                href="https://www.stockport.gov.uk/roadworks"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                road closures and diversions list
              </a>{" "}
              before a Stockport job, because a closure on the A6 or the A34 changes the route and
              the timing rather than the price.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Stockport Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="A move inside Stockport is priced like any local job. A move between Stockport and Manchester adds the drive up or down the A6, which is a short run outside the peak hours. Tell us both postcodes and the floor at each end and we will price it properly. The breakdown is on our [prices page](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Stockport</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Levenshulme", path: "/locations/levenshulme/" },
                { name: "Didsbury", path: "/locations/didsbury/" },
                { name: "Sale", path: "/locations/sale/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Stockport?</p>
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
              heading="Quote in Stockport"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Stockport: FAQs" />
      <Cta label="Get Your Stockport Man and Van Quote" />
    </>
  );
}

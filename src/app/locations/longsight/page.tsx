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
// Bespoke Longsight page. Unlike its neighbours, almost no Longsight street
// sits inside a residents parking scheme, so the things that actually shape
// a move here are the market days on Dickenson Road and whatever is dug up
// that month. Checked on manchester.gov.uk and TfGM in September 2026.
// -------------------------------------------------------------

const l = getLocation("longsight")!;
const url = `${site.url}/locations/longsight/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const marketDays = [
  { day: "Tuesday", market: "Mixed market", hours: "9am to 3pm" },
  { day: "Wednesday", market: "General market", hours: "9am to 4.30pm" },
  { day: "Thursday", market: "Mixed market", hours: "9am to 3pm" },
  { day: "Friday", market: "General market", hours: "9am to 4.30pm" },
  { day: "Saturday", market: "General market", hours: "9am to 5pm" },
];

const faqs = [
  {
    q: "Do I need a parking permit for a move in Longsight?",
    a: "Almost certainly not. The council's Rusholme and Moss Side scheme stops at the edge of Longsight, and the only Longsight-side addresses in it are 61 to 67 Dickenson Road. Most streets here sit outside any permit scheme.",
  },
  {
    q: "Does Longsight Market affect moving day?",
    a: "It can if you are close to Dickenson Road. The general market runs Wednesday and Friday from 9am to 4.30pm and Saturday from 9am to 5pm, and the mixed market on Tuesday and Thursday from 9am to 3pm.",
  },
  {
    q: "Can the van stop on the street to load?",
    a: "Yes, where there is no loading ban marked on the kerb. Loading has to be genuine and the van moves on once it is done, which is the normal rule across Manchester.",
  },
  {
    q: "Is Victoria Park part of Longsight?",
    a: "It borders it to the west. Victoria Park was designated a conservation area in March 1972, and its boundary runs along Anson Road, Daisy Bank Road and Scarsdale Road among others.",
  },
  {
    q: "Are there roadworks in Longsight at the moment?",
    a: "They change constantly. In September 2026 Birch Hall Lane was closed to through traffic between Telfer Road and Dickenson Road for reconstruction. We check the live list before every job rather than trusting a satnav.",
  },
  {
    q: "How much is a man and van in Longsight?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. Most terraces here are a single van load.`,
  },
];

export default function LongsightPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Longsight", path: "/locations/longsight/" },
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
            Longsight is the easy one. Where its neighbours have permit schemes, filters and
            timed bays, almost every street here sits outside all of that, so the van parks where
            it can legally stop and the job gets on with itself. What does change a Longsight move
            is the market, the main road and whatever the council has dug up that month.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We move houses and flats across M13 and M12, mostly terraces on the streets either side of the A6 Stockport Road. Runs to [Levenshulme](/locations/levenshulme/), [Ardwick](/locations/ardwick/) or the city centre take minutes, so the time goes on the carry rather than the drive."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">No Permit Scheme on Most Streets</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The council's Rusholme and Moss Side residents parking scheme runs right up to the edge of Longsight and stops. The only Longsight-side addresses inside it are 61 to 67 Dickenson Road, the odd numbers. Everything else is ordinary street parking, which for a removal is the simplest situation there is."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="That does not mean anything goes. The usual loading rules still apply: no stopping where kerb markings and signs ban loading, none on crossing zigzags, and the van moves on as soon as the load is in. Our [same-day man and van](/services/same-day-man-and-van/) page sets out those rules, and the [parking guide](/moving-guides/how-to-reserve-parking-for-a-move-in-manchester/) covers bay suspensions if your street does turn out to be restricted."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Market Days on Dickenson Road</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Longsight Market sits at Dickenson Road and St John's Road, M13 0WG, and it runs five days a week. If you live near it, the day of your move matters more than the hour: market traffic, deliveries and shoppers all compete for the same kerb."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <caption className="sr-only">Longsight Market opening days and hours</caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Day</th>
                    <th scope="col" className="py-2 pr-4 font-bold">Market</th>
                    <th scope="col" className="py-2 font-bold">Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {marketDays.map((m) => (
                    <tr key={m.day} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{m.day}</td>
                      <td className="py-2 pr-4">{m.market}</td>
                      <td className="py-2">{m.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Monday and Sunday are the quiet days by the market. The council publishes the current
              times on its{" "}
              <a
                href="https://www.manchester.gov.uk/longsightmarket"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                Longsight Market page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Roadworks Decide the Approach</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="With no permit scheme to plan around, the thing most likely to cost you time in Longsight is a closure. In September 2026, Birch Hall Lane was shut to through traffic between Telfer Road and Dickenson Road for reconstruction works, with signed diversions in place. Closures like that turn a two minute approach into a loop around the A6."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="We check the live roadworks list for your street before the day rather than letting a satnav find out for us. If your road is closed, we work out which end is open and load from there."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Victoria Park on the Western Edge</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Longsight runs up against the Victoria Park conservation area, designated in March 1972, whose boundary follows Anson Road, the backs of Langdale Road and Laindon Road, Daisy Bank Road and Scarsdale Road. It is a very different kind of street: large Victorian villas, long drives and mature trees rather than terraces."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Those houses move differently. A villa split into flats means a shared entrance and a staircase that was built for one family, and a long drive means a longer carry to the van than the photo suggests. Tell us which floor and how far the door is from the road when you ask for a quote."
            />
            <p className="mt-3 text-sm text-gray-600">
              The council describes the area and its boundary on the{" "}
              <a
                href="https://www.manchester.gov.uk/info/511/conservation_areas/932/victoria_park_conservation_area"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                Victoria Park conservation area page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Longsight Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Because parking is usually straightforward here, a Longsight terrace is often quicker than the same house a mile west. A move into a converted flat on the Victoria Park side takes longer because of the stairs. The full breakdown is on our [prices page](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Longsight</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Levenshulme", path: "/locations/levenshulme/" },
                { name: "Ardwick", path: "/locations/ardwick/" },
                { name: "Moss Side", path: "/locations/moss-side/" },
                { name: "Fallowfield", path: "/locations/fallowfield/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Longsight?</p>
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
              heading="Quote in Longsight"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Longsight: FAQs" />
      <Cta label="Get Your Longsight Man and Van Quote" />
    </>
  );
}

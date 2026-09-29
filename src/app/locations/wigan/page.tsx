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
// Bespoke Wigan page. Wigan calls its schemes controlled parking zones and
// sells six permit products, none of them a dispensation, so a move is handled
// with a visitor day permit. Prices rose on 26 June 2026. Taken from the
// council's own statutory notice, September 2026.
// -------------------------------------------------------------

const l = getLocation("wigan")!;
const url = `${site.url}/locations/wigan/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

// Straight from the council's statutory notice of 2 June 2026.
const permitPrices = [
  { permit: "Residential permit", before: "£30.00", after: "£35.00" },
  { permit: "Visitor day permits", before: "£16.00", after: "£20.00" },
  { permit: "Business permit, first pass", before: "£30.00", after: "£35.00" },
];

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

const faqs = [
  {
    q: "Does Wigan issue a parking dispensation for a removals van?",
    a: "No. Wigan's permit system offers business permits, business visitor day permits, contract permits for car parks, resident permits, resident visitor day permits and resident visitor permits. None of them is a dispensation or a bay suspension.",
  },
  {
    q: "So what covers the van in a controlled parking zone?",
    a: "A resident visitor day permit, which is the product a household uses for anyone visiting the address. Get hold of them before moving day, because they are issued to the resident.",
  },
  {
    q: "How much is a Wigan parking permit now?",
    a: "From 26 June 2026 a residential permit is £35, up from £30, and visitor day permits are £20, up from £16. A first business permit also went from £30 to £35. The council published the new rates in a statutory notice on 2 June 2026.",
  },
  {
    q: "What does Wigan call its permit areas?",
    a: "Controlled parking zones, usually shortened to CPZ. If a street is in one, the signs at the entrance to the zone carry the hours rather than each individual bay.",
  },
  {
    q: "Is the town centre being dug up?",
    a: "The Galleries site is being rebuilt as Fettlers, a £135m scheme whose market hall is about 75,000 square feet and is scheduled to open in late 2026, alongside a 144 bed Hampton by Hilton. Expect the streets around it to change while the work finishes.",
  },
  {
    q: "How much is a man and van in Wigan?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. Wigan is the far west of our area, so a move into Manchester is priced on the distance as well as the load.`,
  },
];

export default function WiganPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Wigan", path: "/locations/wigan/" },
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
            Wigan does not sell a parking dispensation, so a move inside a controlled parking zone
            is covered by the same visitor day permit a household uses for anyone else. That permit
            went up in price on 26 June 2026, which is the number worth knowing before you move.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We cover WN1 through WN6, from the town centre out to Standish, Orrell, Hindley and across to Leigh. Wigan is the western edge of the area we work, so a move into the city is a longer run than a job inside the borough, and both are ordinary work for [a van and crew](/services/man-and-van-hire/)."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Six Permits, and None of Them Is a Dispensation</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Wigan's permit system lists exactly six things you can apply for: business permits, business visitor day permits, contract permits for a car park, resident permits, resident visitor day permits and resident visitor permits. There is no dispensation, no waiver and no bay suspension anywhere in that list."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="For a house move that leaves one sensible answer: the resident visitor day permit, the product a household already uses for anyone visiting the address. It is issued to the resident, so it has to be in hand before the day rather than arranged by the crew when they arrive."
            />
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                "Check whether the street is in a controlled parking zone before you book.",
                "If it is, the visitor day permits are yours to get hold of, not ours.",
                "Two addresses means two sets of rules, and only one of them is yours today.",
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
            <h2 className="text-xl font-bold text-gray-900">The Prices Changed on 26 June 2026</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Wigan published a statutory notice on 2 June 2026 setting new permit charges from 26 June. If you are working from a figure someone gave you last year, it is out of date."
            />
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[460px] border-collapse text-left text-sm">
                <caption className="sr-only">
                  Wigan Borough Council parking permit charges before and after 26 June 2026
                </caption>
                <thead>
                  <tr className="border-b border-gray-300 text-gray-900">
                    <th scope="col" className="py-2 pr-4 font-bold">Permit</th>
                    <th scope="col" className="py-2 pr-4 font-bold">Was</th>
                    <th scope="col" className="py-2 font-bold">Now</th>
                  </tr>
                </thead>
                <tbody>
                  {permitPrices.map((p) => (
                    <tr key={p.permit} className="border-b border-gray-200 text-gray-700">
                      <td className="py-2 pr-4 font-semibold">{p.permit}</td>
                      <td className="py-2 pr-4">{p.before}</td>
                      <td className="py-2">{p.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <RichText
              className="mt-3 text-gray-700"
              text="Set against what the surrounding councils charge to let a van sit on a restriction for a single day, £20 of visitor permits is cheap. [Manchester wants £30 a day](/locations/manchester-city-centre/) for the equivalent permission and Trafford £18.50, and neither of those leaves you with anything afterwards."
            />
            <p className="mt-3 text-sm text-gray-600">
              The new rates are in the council&apos;s{" "}
              <a
                href="https://publicnoticeportal.uk/notice/traffic-and-roads/6a2010f495aea0aad6de8279"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                statutory notice of 2 June 2026
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">School-Run Loading Bans in Orrell</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The council advertised new loading restrictions on Sandy Lane, St James Road and Gantley Road in Orrell, running Monday to Friday from 8am to 9am and from 3pm to 4pm, with objections due by the end of June 2026. They are short windows, but they land exactly where a moving day tends to start and where a second load tends to finish."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Read the signs on the day, because a restriction advertised in June is usually in force by now. On those streets we would start at half nine rather than eight, or take the first hour somewhere the van can legally stand."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">The Galleries Is Now Fettlers</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The old Galleries shopping centre is being rebuilt as Fettlers, a £135m scheme with a market hall of roughly 75,000 square feet due to open in late 2026 and a 144 bed Hampton by Hilton alongside it. The site sits in the middle of town, so the streets around it are a moving target while the work finishes."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="If the address is a town centre flat, tell us the nearest side street when you ask for a price and we will check what the access looks like that week rather than assuming last year's layout."
            />
            <p className="mt-3 text-sm text-gray-600">
              The developer sets the scheme out on its{" "}
              <a
                href="https://www.cityheart.co.uk/projects/fettlers/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                Fettlers project page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Wigan Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Wigan is the western edge of the area we cover, so a move into Manchester carries a real drive and is priced on the distance as well as the load. Every rate we quote from is [published rather than given over the phone](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Wigan</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Bolton", path: "/locations/bolton/" },
                { name: "Salford", path: "/locations/salford/" },
                { name: "Eccles", path: "/locations/eccles/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Wigan?</p>
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
              heading="Quote in Wigan"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Wigan: FAQs" />
      <Cta label="Get Your Wigan Man and Van Quote" />
    </>
  );
}

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
// Bespoke Moss Side page. The Rusholme and Moss Side scheme is unusual: no
// marked bays on most streets, and hours that vary sign by sign, so the rule
// is to read the sign at the entrance to the street. Checked on
// manchester.gov.uk and Historic England in September 2026.
// -------------------------------------------------------------

const l = getLocation("moss-side")!;
const url = `${site.url}/locations/moss-side/`;

const rate = (key: string) =>
  (priceRows.find((r) => r.key === key)?.from ?? "price on quote").replace(/^From /, "");

export const metadata: Metadata = {
  title: l.title,
  description: l.metaDescription,
  alternates: { canonical: url },
  openGraph: { title: l.title, description: l.metaDescription, url },
};

// Streets the council lists in the scheme. Part-streets are shown as ranges,
// because only those numbers are included.
const schemeStreets = [
  "Maine Road",
  "Monton Street",
  "Great Southern Street",
  "Crofton Street",
  "Cyril Street",
  "Dunworth Street",
  "Ossory Street",
  "Victory Street",
  "Walmer Street and Walmer Street East",
  "Great Western Street, 234 to 420 even and 183 to 357 odd",
  "Moss Lane East, 366 to 508 even",
  "Upper Lloyd Street, 6 to 98 even and 11 to 49 odd",
  "Claremont Road, 338 to 554 even and 333 to 499 odd",
];

const faqs = [
  {
    q: "Is there a parking permit scheme in Moss Side?",
    a: "Yes. The Rusholme and Moss Side residents parking scheme came into force in January 2024. The restricted hours vary street by street and are shown on the sign at the entrance to each street.",
  },
  {
    q: "Why are there no parking bays marked on my street?",
    a: "That is deliberate. On the past this point streets the council marked no bays, so residents can arrange parking to suit their own street. Other streets in the scheme do have marked bays.",
  },
  {
    q: "Can the van park on a permit street during a move?",
    a: "It can stop to load where loading is allowed, and outside the hours shown on the sign there is no restriction at all. A permit never allows parking on double yellow lines, and white H-bar markings across a driveway have to stay clear even inside a bay.",
  },
  {
    q: "Which Moss Side streets are in the scheme?",
    a: "Maine Road, Monton Street, Great Southern Street, Crofton Street and others, plus parts of Great Western Street, Moss Lane East, Upper Lloyd Street and Claremont Road. The council publishes the full list with the exact house numbers.",
  },
  {
    q: "Is Alexandra Park protected?",
    a: "Yes. It is a Grade II registered park and garden, first listed on 11 May 1995.",
  },
  {
    q: "How much is a man and van in Moss Side?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. A terraced house here is usually a single van load.`,
  },
];

export default function MossSidePage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Moss Side", path: "/locations/moss-side/" },
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
            Moss Side has the most unusual parking scheme we work in. There are no marked bays on
            most of its permit streets, and the restricted hours are not the same from one street
            to the next. The sign at the entrance to your road is the only thing that tells you
            the rule, which is why we ask for the street name rather than just the postcode.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We move houses, flats and student rooms across M14 and M15, between Moss Side and [Hulme](/locations/hulme/), [Fallowfield](/locations/fallowfield/) and the city centre. Most of the housing here is terraced, so the job is usually one van load and a short carry from the door."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">A Scheme With No Marked Bays</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The Rusholme and Moss Side residents parking scheme came into force in January 2024, after a consultation in 2021. On the streets signed past this point, the council deliberately marked no bays, so residents can arrange parking to best suit their street. Other streets in the scheme do have marked bays, where permit holders can stay as long as they like and everyone else is limited to the time on the sign."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="The hours differ from street to street. In the council's own example the restriction runs Monday to Friday from 10am to 6pm, and outside the hours on the sign there is no restriction on those streets at all. So an early start, an evening load or a weekend move often sidesteps the scheme completely."
            />
            <ul className="mt-4 space-y-2 text-gray-700">
              {[
                "Read the sign at the entrance to the street, because times and days vary.",
                "A permit never allows parking on double yellow lines at any time.",
                "White H-bar markings keep a driveway clear, even where they sit inside a bay.",
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
              The council sets out how the scheme works on its{" "}
              <a
                href="https://www.manchester.gov.uk/info/500347/resident_parking_schemes/8564/rusholme_and_moss_side_residents_parking_scheme"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                Rusholme and Moss Side scheme page
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Streets Inside the Scheme</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Some roads are only partly included, with the scheme covering a run of house numbers rather than the whole street. These are the Moss Side streets on the council's list, and the numbers matter: on Claremont Road and Great Western Street, one end is in the scheme and the other is not."
            />
            <ul className="mt-4 grid gap-x-6 gap-y-2 text-gray-700 sm:grid-cols-2">
              {schemeStreets.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden className="font-bold text-brand">
                    &#10003;
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-gray-600">
              The council publishes the complete list, including the Rusholme streets, with exact
              house numbers.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Alexandra Park and the Roads Around It</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Alexandra Park is a Grade II registered park and garden, first listed on 11 May 1995, and it anchors the western side of Moss Side. The roads that frame it, Alexandra Road South, Claremont Road, Princess Road and Demesne Road, are the ones most moves here approach on."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Princess Road is fast and busy, and stopping a loaded van on it is not an option. We come off it onto the residential streets and work out the closest legal stopping point to your door before the day, which is usually a matter of metres rather than minutes."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">New Homes and a Changing Area</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="On 20 March 2026 the council announced that parts of Moss Side and Whalley Range, together called Moss Side West, would be the fifth Manchester neighbourhood to receive Pride in Place funding, with up to £20m to spend over ten years on what local people choose to improve."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Manchester had already put Pride in Place money into Clayton Vale, Gorton South, Benchill South and Harpurhey South before Moss Side West. For a mover it means the same thing each time: streets change, new homes appear, and the questions shift from terraced staircases to lifts, bays and which entrance is closest."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What a Moss Side Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, two movers with a large van from ${rate("two-large")} and two movers with a Luton from ${rate("two-luton")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Moss Side sits close to the universities, so a good share of the work here is rooms and shared houses rather than whole homes. Student moves have their own page under [student man and van](/services/student-moves/), and the full price breakdown is on our [prices page](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Moss Side</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Hulme", path: "/locations/hulme/" },
                { name: "Fallowfield", path: "/locations/fallowfield/" },
                { name: "Longsight", path: "/locations/longsight/" },
                { name: "Old Trafford", path: "/locations/old-trafford/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Moss Side?</p>
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
              heading="Quote in Moss Side"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Moss Side: FAQs" />
      <Cta label="Get Your Moss Side Man and Van Quote" />
    </>
  );
}

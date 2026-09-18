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
// Bespoke Ardwick page. Ardwick's moves are shaped by a weekday permit
// scheme on the Brunswick side, show nights at the O2 Apollo on Stockport
// Road, and the A6 and Hyde Road junctions. Checked on Manchester City
// Council's pages and the venue's own travel page in September 2026.
// -------------------------------------------------------------

const l = getLocation("ardwick")!;
const url = `${site.url}/locations/ardwick/`;

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
    q: "When does the Ardwick resident parking scheme apply?",
    a: "Monday to Friday, 8am to 6pm. Outside those hours there is no limit on how long people can park in the scheme's bays.",
  },
  {
    q: "Which streets are in the Ardwick permit scheme?",
    a: "The council publishes the full list. It covers the Brunswick side of Ardwick, including Brunswick Street, Blackstock Street and Coral Street among many others.",
  },
  {
    q: "Should I avoid moving on an O2 Apollo show night?",
    a: "If you are near Stockport Road or Hyde Road, an earlier slot is easier. The venue's two official car parks open an hour before the time on the ticket and cannot be reserved, so surrounding streets can be busy on show nights.",
  },
  {
    q: "Were there works at the Hyde Road roundabout?",
    a: "Yes, and they are complete. The council refreshed the signs and road markings and replaced road studs at the pedestrian crossings on all five roads into the roundabout.",
  },
  {
    q: "Is Ardwick being redeveloped?",
    a: "The council's Executive approved a draft Neighbourhood Development Framework for Ardwick Green, covering roughly 230,000 square metres south of the Mancunian Way. The public consultation has closed.",
  },
  {
    q: "How much is a man and van in Ardwick?",
    a: `Moves are priced on time. One mover with a large van starts from ${rate("one-large")} and two movers from ${rate("two-large")}. Ardwick is close to the city centre, so most local moves are short runs.`,
  },
];

export default function ArdwickPage() {
  const trail = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations/" },
    { name: "Ardwick", path: "/locations/ardwick/" },
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
            Ardwick sits just south east of the city centre, between the Mancunian Way and the big
            junctions on Hyde Road and the A6. A move here is usually short in distance and
            decided by three things: whether your street is in the weekday permit scheme, whether
            there is a show at the O2 Apollo that evening, and which way the van comes in.
          </p>
          <RichText
            className="mt-4 text-gray-700"
            text="We move flats and houses across M12, from the Brunswick side to the streets around Ardwick Green. Runs into the [city centre](/locations/manchester-city-centre/), [Ancoats](/locations/ancoats/) or down the A6 to [Levenshulme](/locations/levenshulme/) take minutes rather than an hour, so most of the time on an Ardwick job goes on the carry and the stairs."
          />

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">The Weekday Permit Scheme</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The Ardwick resident parking scheme applies Monday to Friday, 8am to 6pm, with no limit on how long people can park outside those hours. A permit does not allow parking on double yellow lines at any time, or on single yellow lines during their restricted times. Permits are free, last a year, and are tied to the vehicles registered at each home, and homes with a driveway are expected to use it."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="The scheme covers a long list of streets on the Brunswick side, including Brunswick Street, Blackstock Street and Coral Street. For a move, the simplest fix is timing: a Saturday, a Sunday or an early evening load falls outside the scheme hours entirely. On a weekday, a van can still stop to load where there is no loading ban, but it cannot sit in a permit bay for the afternoon. The full street list is on the council's [Ardwick parking scheme page](https://www.manchester.gov.uk/info/500347/resident_parking_schemes/8423/ardwick_resident_parking_scheme)."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">O2 Apollo Show Nights</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The O2 Apollo Manchester is on Stockport Road in Ardwick, M12 6AP. The venue runs two official car parks, one on Apsley Grove and one just off Hyde Road, both cash only with a £15 minimum and open an hour before the time on the ticket. It warns that the unofficial parking opposite is not connected to the venue, and spaces in its own car parks are limited and cannot be reserved."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="If you are moving near Stockport Road or Hyde Road on a show night, the streets around it can fill up in the hour before doors. Tell us your date and we will check whether there is a show, then plan the load for earlier in the day. It costs nothing to avoid and saves a slow carry past a queue."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Hyde Road, the A6 and the Mancunian Way</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="Ardwick is where several of south Manchester's main roads meet. The A6 runs through it as Ardwick Green South, Hyde Road heads east from the roundabout, and the Mancunian Way runs along the northern edge. The council has finished safety works at the Hyde Road roundabout, refreshing the signs and road markings and replacing the road studs at the pedestrian crossings on all five approaches."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Busy junctions matter more for a van than for a car, because the wrong exit means a long loop back. We plan which side of the main road your street sits on before we set off, especially for addresses just off the A6, where the approach depends on which direction the van is travelling."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">Ardwick Green and the Plans Around It</h2>
            <RichText
              className="mt-3 text-gray-700"
              text="The council's Executive approved a draft Neighbourhood Development Framework for Ardwick Green, an area of roughly 230,000 square metres immediately south of the Mancunian Way, divided by the A6 and reaching towards the Mayfield regeneration area and Wadeson Road. The public consultation on it has closed, and the framework is meant to guide new development while protecting the existing residential and business communities."
            />
            <RichText
              className="mt-3 text-gray-700"
              text="New development means new apartment blocks, and apartment moves run on lifts and loading bays rather than kerbside parking. If you are moving into one of the newer buildings, ask the building where vehicles should stop and whether the lift needs booking. Our [flat and apartment removals](/services/flat-apartment-removals/) page covers how we plan those moves, and the council sets out the framework on its [Ardwick Green consultation page](https://www.manchester.gov.uk/info/200024/consultations_and_surveys/8070/ardwick_green_consultation)."
            />
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-bold text-gray-900">What an Ardwick Move Costs</h2>
            <RichText
              className="mt-3 text-gray-700"
              text={`Moves are priced on time. One mover with a small van starts from ${rate("one-small")}, one mover with a large van from ${rate("one-large")}, and two movers with a large van from ${rate("two-large")}. A single item collection or delivery starts from ${rate("single-item")}.`}
            />
            <RichText
              className="mt-3 text-gray-700"
              text="Because Ardwick is so close to the centre and the universities, many moves here are flats and rooms rather than whole houses, and a one or two bedroom flat usually fits a single van load. A weekend slot outside the permit hours is often the quickest way to do it. The full breakdown is on our [prices page](/prices/)."
            />
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">Moves Around Ardwick</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { name: "Manchester City Centre", path: "/locations/manchester-city-centre/" },
                { name: "Ancoats", path: "/locations/ancoats/" },
                { name: "Levenshulme", path: "/locations/levenshulme/" },
                { name: "Hulme", path: "/locations/hulme/" },
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
            <p className="text-lg font-bold text-white">Moving In or Out of Ardwick?</p>
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
              heading="Quote in Ardwick"
              compact
              defaultLocation={l.name}
              formName="location_page"
            />
          </div>
        </aside>
      </div>

      <Faq faqs={faqs} heading="Man and Van in Ardwick: FAQs" />
      <Cta label="Get Your Ardwick Man and Van Quote" />
    </>
  );
}

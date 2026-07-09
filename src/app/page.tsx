import Link from "next/link";
import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import ServiceCard from "@/components/ServiceCard";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { faqSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Man and Van Manchester | House Removals & Van Hire | Van and Man Manchester",
  description:
    "Man and van in Manchester for house removals, flat moves, rubbish removal and furniture delivery. Cheap, reliable and covering all of Greater Manchester. Call for a quote.",
  alternates: { canonical: site.url + "/" },
};

const homeFaqs = [
  {
    q: "How much does a man and van cost in Manchester?",
    a: "It depends on the size of the job, the distance and how long it takes. Most single item and small flat moves are our cheapest jobs, while full house and long distance moves cost more. Tell us what you are moving and we will give you a clear quote.",
  },
  {
    q: "Do you cover all of Manchester?",
    a: "Yes. We cover Manchester city centre and nearby areas including Salford, Didsbury, Chorlton, Fallowfield and across Greater Manchester. Give us your postcode and we will confirm.",
  },
  {
    q: "Can you do a same day or next day move?",
    a: "Often yes, depending on how the day is running. Smaller jobs and single item runs are easiest to fit in at short notice. Get in touch and we will tell you the soonest slot.",
  },
  {
    q: "Are you a cheap man and van service?",
    a: "We keep our prices competitive by being efficient, not by hiding fees. You get a clear rate before we start, with no surprises added at the end.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Man and Van Manchester", url: site.url + "/" }),
          faqSchema(homeFaqs),
        ]}
      />

      {/* 1. HERO */}
      <section className="bg-brand-light">
        <div className="mx-auto grid max-w-container items-start gap-8 px-4 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Man and Van Manchester Services
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Reliable, cheap man and van in Manchester for house removals, flat moves, rubbish
              removal and furniture delivery. Serving Manchester and nearby areas, seven days a
              week.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phoneTel}`}
                className="rounded-md bg-cta px-6 py-3 text-center text-lg font-bold text-white hover:bg-cta-dark"
              >
                Call {site.phoneDisplay}
              </a>
              <Link
                href="/quote/"
                className="rounded-md border-2 border-brand px-6 py-3 text-center text-lg font-bold text-brand hover:bg-white"
              >
                Get a Quote
              </Link>
            </div>
            <p className="mt-4 text-sm font-semibold text-gray-600">
              {site.hours} &bull; Covering all of Greater Manchester
            </p>
          </div>
          <div>
            <QuoteForm heading="Get a Free Quote" />
          </div>
        </div>
      </section>

      {/* 2. INTRO */}
      <section className="mx-auto max-w-container px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900">
          Your local man and van in Manchester
        </h2>
        <p className="mt-4 max-w-3xl text-gray-700">
          Van and Man Manchester is a man and van service covering Manchester and the whole of
          Greater Manchester. We help people move house and flat, hire a van and a pair of hands by
          the hour, clear rubbish, and deliver furniture and single items. Whether you are a
          student in Fallowfield, a family in Didsbury or a business in the city centre, we turn up
          on time, handle your things carefully and charge a fair price. Call for a quote and you
          get a straight answer, not a runaround.
        </p>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-container px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900">Our man and van services</h2>
          <p className="mt-2 text-gray-600">
            Everything from a single sofa to a full house move. Pick the service that fits.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. MAIN SERVICE EXPLANATION */}
      <section className="mx-auto max-w-container px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Man and van in Manchester</h2>
            <p className="mt-4 text-gray-700">
              Most people call us for a house or flat move, and that is what we do best. We bring a
              clean, insured van, blankets, straps and a trolley, and the manpower to shift your
              furniture without damage. Manchester has its quirks, from tight terraced streets in
              Chorlton to loading bays in the city centre, and we plan around all of them so your
              move runs smoothly.
            </p>
            <p className="mt-4 text-gray-700">
              Need something smaller? Man and van hire lets you book us by the hour for exactly as
              long as you need. Bought a sofa on Marketplace? Our furniture and single item service
              collects and delivers the same day where we can. Got a pile of junk? Our rubbish
              removal service loads it and takes it away.
            </p>
          </div>
          {/* 5. MOBILE / FLEXIBLE SERVICE SECTION */}
          <div className="rounded-lg border border-gray-200 bg-brand-light p-6">
            <h2 className="text-xl font-bold text-brand-dark">Flexible, mobile service</h2>
            <p className="mt-3 text-gray-700">
              We come to you, anywhere in Manchester. There is no depot to visit and nothing to
              collect. Book us for a one hour single item run or a full day house move, on weekdays,
              evenings or weekends. That flexibility is why locals search for a man and van near me
              and end up calling us.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>&bull; One or two movers, whatever the job needs</li>
              <li>&bull; Same day and next day where available</li>
              <li>&bull; Weekend and evening slots</li>
              <li>&bull; Clear prices, no hidden fees</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. SAME DAY / URGENT SECTION */}
      <section className="bg-gray-900">
        <div className="mx-auto max-w-container px-4 py-10 text-center">
          <h2 className="text-2xl font-bold text-white">Need a man and van today?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-300">
            Short notice move, urgent single item or a last minute clearance? Call us and we will
            tell you the soonest slot we have. Smaller jobs can often be done same day or next day.
          </p>
          <a
            href={`tel:${site.phoneTel}`}
            className="mt-5 inline-block rounded-md bg-cta px-6 py-3 text-lg font-bold text-white hover:bg-cta-dark"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </section>

      {/* 7. COVERAGE AREA */}
      <section className="mx-auto max-w-container px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900">Areas we cover in Manchester</h2>
        <p className="mt-2 text-gray-600">
          We serve Manchester and nearby areas. Tap your area for local man and van information.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/locations/${l.slug}/`}
              className="rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-brand-dark hover:border-brand hover:bg-brand-light"
            >
              Man and van in {l.name}
            </Link>
          ))}
        </div>
      </section>

      {/* 7b. "Near me" keyword block (A/B test) */}
      <section className="bg-brand-light">
        <div className="mx-auto max-w-container px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                h2: "Man and Van Near Me in Manchester",
                body: "Wherever you are in Greater Manchester, we are the local man and van close to hand. From Chorlton and Didsbury to Salford and Prestwich, a driver and van can reach you quickly, with a clear price agreed before we start.",
              },
              {
                h2: "House Removals Near Me",
                body: "Looking for house removals near you? We cover Manchester and the surrounding towns, moving flats and family homes from Fallowfield to Sale, wrapping the furniture and shifting it for one fixed figure.",
              },
              {
                h2: "Same Day Man and Van Near Me",
                body: "Need a man and van today? When the diary allows we can be with you the same day across Manchester, so an urgent move or a last-minute collection in Stretford or Salford Quays still gets sorted.",
              },
            ].map((item) => (
              <div key={item.h2}>
                <h2 className="text-xl font-bold text-brand-dark sm:text-2xl">{item.h2}</h2>
                <p className="mt-2 text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-container px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900">Why choose Van and Man Manchester</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["On time, every time", "We turn up when we say we will and keep you posted if anything changes."],
              ["Careful with your stuff", "Blankets, straps and proper handling so nothing gets scratched or broken."],
              ["Clear, fair prices", "A straight quote before we start. No hidden fuel charges or surprise extras."],
              ["Local knowledge", "We know Manchester parking, permits and loading bays, so moves run smoothly."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-bold text-brand-dark">{title}</h3>
                <p className="mt-2 text-sm text-gray-700">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SIMPLE PROCESS */}
      <section className="mx-auto max-w-container px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["1. Call", "Call or send a quick message with what you are moving."],
            ["2. Quote", "We give you a clear price and a time that suits you."],
            ["3. Schedule", "We book you in, weekdays, evenings or weekends."],
            ["4. Complete", "We turn up, load up and get you moved."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg bg-brand-light p-5">
              <h3 className="text-base font-bold text-brand-dark">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ */}
      <Faq faqs={homeFaqs} />

      {/* 11. TESTIMONIALS
          Intentionally left empty. Do NOT add fabricated testimonials or star
          ratings. When the operator has genuine, verifiable reviews (e.g. from
          Google Business Profile), add them here and only then consider review
          schema. Shipping fake reviews is both against policy and a trust risk. */}

      {/* 12. FINAL CTA */}
      <Cta label="Get your man and van quote today" />
    </>
  );
}

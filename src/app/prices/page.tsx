import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site, isReal } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { priceRows, priceFactors, priceExtras } from "@/lib/pricing";
import { breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/schema";

const PATH = "/prices/";

export const metadata: Metadata = pageMeta({
  title: "Man and Van Prices in Manchester | How Our Quotes Work",
  description:
    "How man and van pricing works in Manchester: van and mover combinations, the factors that affect the price and the extras to know about before you book.",
  path: PATH,
});

const faqs = [
  {
    q: "How much does a man and van cost in Manchester?",
    a: "It depends on the van size, the number of movers, the distance and how long the job takes. Small flat and single-item moves are the cheapest; full house and long-distance moves cost more. Tell us what you are moving and we will give you a clear figure.",
  },
  {
    q: "Do you charge by the hour or a fixed price?",
    a: "Local moves are usually priced by the hour, which keeps short jobs cheap. Longer and long-distance moves are usually a fixed price so you know the cost before we set off. We will tell you which works out better for your job.",
  },
  {
    q: "Are there any hidden charges?",
    a: "No. We agree the price before we start. Anything that could change it, such as waiting time or extra stops, is explained up front so there are no surprises at the end.",
  },
];

export default function PricesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Man and Van Prices in Manchester", url: site.url + PATH }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Prices", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Prices", path: PATH },
        ]}
      />

      <div className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Man and Van Prices in Manchester</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Every move is a little different, so we quote on what you are actually moving rather than a
          one-size-fits-all figure. This page explains how the price is worked out, what each van and
          mover option suits, and the extras worth knowing about before you book.
        </p>

        {/* Van + mover combinations */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">Van and mover options</h2>
          <p className="mt-2 max-w-3xl text-gray-600">
            Picking the right combination is the biggest single thing that keeps the price fair. If
            you are not sure, describe the job and we will recommend the cheapest option that will
            actually do it.
          </p>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-900">
                  <th className="py-3 pr-4 font-bold">Option</th>
                  <th className="py-3 pr-4 font-bold">What it is</th>
                  <th className="py-3 pr-4 font-bold">Best for</th>
                  <th className="py-3 font-bold">From</th>
                </tr>
              </thead>
              <tbody>
                {priceRows.map((r) => (
                  <tr key={r.key} className="border-b border-gray-100 align-top">
                    <td className="py-3 pr-4 font-semibold text-gray-900">{r.label}</td>
                    <td className="py-3 pr-4 text-gray-600">{r.detail}</td>
                    <td className="py-3 pr-4 text-gray-600">{r.bestFor}</td>
                    <td className="py-3 font-semibold text-brand-dark">
                      {isReal(r.from) ? r.from : "Price on quote"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Prices shown as &ldquo;Price on quote&rdquo; are given per job once we know the detail.
            For a firm figure, send both postcodes and a description of what you are moving.
          </p>
        </section>

        {/* Factors */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">What affects the price</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {priceFactors.map((f) => (
              <div key={f.h} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-bold text-brand-dark">{f.h}</h3>
                <p className="mt-2 text-sm text-gray-700">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Extras / transparency */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Good to know before you book</h2>
          <p className="mt-2 max-w-3xl text-gray-600">
            We would rather be clear about these up front than surprise you later.
          </p>
          <dl className="mt-6 divide-y divide-gray-100 rounded-lg border border-gray-200">
            {priceExtras.map((e) => (
              <div key={e.label} className="flex flex-col gap-1 p-4 sm:flex-row sm:justify-between">
                <dt className="font-semibold text-gray-900">{e.label}</dt>
                <dd className="text-gray-600 sm:text-right">
                  {isReal(e.value) ? e.value : "Confirmed when you book"}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-12 grid gap-4 rounded-lg bg-brand-light p-6 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-brand-dark">Want a real figure for your move?</h2>
            <p className="mt-2 text-sm text-gray-700">
              Tell us what you are moving, from and to, and we will give you a clear quote with no
              obligation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/quote/"
              className="rounded-md bg-cta px-6 py-3 text-center font-bold text-white hover:bg-cta-dark"
            >
              Get a Quote
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-md border-2 border-brand px-6 py-3 text-center font-bold text-brand-dark hover:bg-white"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-600">
          See what fits each vehicle on our{" "}
          <Link href="/our-vans/" className="font-semibold text-brand hover:text-brand-dark">
            van size guide
          </Link>
          , or read about{" "}
          <Link
            href="/insurance-and-compliance/"
            className="font-semibold text-brand hover:text-brand-dark"
          >
            insurance and compliance
          </Link>
          .
        </p>
      </div>

      <Faq faqs={faqs} />
      <Cta label="Get your man and van quote today" />
    </>
  );
}

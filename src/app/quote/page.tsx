import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Man and Van Quotes in Manchester | Prices & Costs | Van and Man Manchester",
  description:
    "Get a free man and van quote in Manchester. Clear prices for house removals, flat moves, van hire and rubbish removal. No hidden costs. Call or request a quote online.",
  path: "/quote/",
});

const quoteFaqs = [
  {
    q: "How much does a man and van cost in Manchester?",
    a: "Prices depend on the size of the job, the distance and how long it takes. A single item or small flat move is our cheapest option, while a full house or long distance move costs more. We give you a clear figure before we start, with no hidden extras.",
  },
  {
    q: "What affects the price of my move?",
    a: "The main factors are how much you are moving, whether you need one or two movers, the distance between addresses, and access such as stairs, lifts and parking. Tell us these and we can quote accurately.",
  },
  {
    q: "Is the quote free and with no obligation?",
    a: "Yes. Getting a quote costs nothing and does not commit you to anything. Call or send your details and we will give you a price.",
  },
  {
    q: "Can I get a cheaper price for a small job?",
    a: "Yes. Small jobs like single item collections and studio flat moves are our lowest cost service. If you only have a few items, mention it and we will quote the cheapest suitable option.",
  },
];

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Man and Van Quotes in Manchester", url: site.url + "/quote/" }),
          faqSchema(quoteFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Quote", path: "/quote/" },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Quote", path: "/quote/" },
        ]}
      />

      <div className="mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            Man and Van Quotes in Manchester
          </h1>
          <p className="mt-4 text-gray-700">
            Want to know what your move will cost? Get a free, no obligation man and van quote for
            anywhere in Manchester and Greater Manchester. We give you a clear price up front, so
            there are no surprises on the day.
          </p>
          <h2 className="mt-8 text-xl font-bold text-gray-900">How our pricing works</h2>
          <p className="mt-3 text-gray-700">
            We quote on four things: how much you are moving, whether you need one or two movers, the
            distance, and access at both ends such as stairs, lifts and parking. Give us those
            details and we can give you an accurate, honest price rather than a vague estimate that
            changes later.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>&bull; Single item and furniture runs: our cheapest jobs</li>
            <li>&bull; Studio and one bed flat moves: usually a single van load</li>
            <li>&bull; Full house removals: priced on size and hours</li>
            <li>&bull; Long distance (e.g. Manchester to London): fixed price by route</li>
          </ul>
          <p className="mt-4 text-gray-700">
            For the fastest quote, call{" "}
            <a href={`tel:${site.phoneTel}`} className="font-bold text-brand hover:text-brand-dark">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>

        <div>
          <QuoteForm heading="Get your free quote" />
        </div>
      </div>

      <Faq faqs={quoteFaqs} />
    </>
  );
}

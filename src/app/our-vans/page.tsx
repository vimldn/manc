import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site, isReal } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { vans } from "@/lib/vans";
import { breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/schema";

const PATH = "/our-vans/";

export const metadata: Metadata = pageMeta({
  title: "What Size Van Do I Need? Manchester Van Size Guide",
  description:
    "A plain guide to van sizes for a Manchester move: small, long-wheelbase and Luton vans, what fits in each and how many movers you are likely to need.",
  path: PATH,
});

const faqs = [
  {
    q: "What size van do I need for my move?",
    a: "The right vehicle depends on the amount of furniture, the box count, access and whether items can be dismantled. As a rough guide, a studio suits a long-wheelbase van and a one to two-bed home suits a Luton. Tell us what you have and we will confirm.",
  },
  {
    q: "Will my one-bed flat fit in a single van?",
    a: "Most one-bed flats fit in a single Luton or large van in one load, but it depends on how much you have and whether large items dismantle. We would rather get it right first time than send a van that is too small.",
  },
  {
    q: "Do bigger vans cost more?",
    a: "A larger van costs a little more to run, so matching the van to the load keeps the price fair. We always suggest the smallest vehicle that will comfortably do the job.",
  },
];

export default function OurVansPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Manchester Van Size Guide", url: site.url + PATH }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Our Vans", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Our Vans", path: PATH },
        ]}
      />

      <div className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          What Size Van Do I Need? Manchester Van Guide
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Picking the right van keeps a move quick and the price fair. The correct vehicle depends on
          how much furniture there is, the box count, the access at both ends and whether large items
          can be dismantled. Here is a plain guide, then tell us what you have and we will confirm the
          best option.
        </p>

        <div className="mt-10 space-y-6">
          {vans.map((v) => (
            <section key={v.key} className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-bold text-gray-900">{v.name}</h2>
                <span className="text-sm font-semibold text-brand-dark">{v.movers}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Best for:</span> {v.bestFor}
              </p>
              {isReal(v.dimensions) && (
                <p className="mt-1 text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Load space:</span> {v.dimensions}
                </p>
              )}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">What It Typically Carries</h3>
                  <ul className="mt-2 space-y-1 text-sm text-gray-700">
                    {v.loadExamples.map((ex) => (
                      <li key={ex}>&bull; {ex}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Access Notes</h3>
                  <p className="mt-2 text-sm text-gray-700">{v.access}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href="/quote/"
                  className="inline-block rounded-md bg-cta px-5 py-2.5 text-sm font-bold text-white hover:bg-cta-dark"
                >
                  Get a quote for this van
                </Link>
              </div>
            </section>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm text-gray-600">
          Not sure which to book? That is normal, and picking the wrong size is exactly what we help
          you avoid. Describe the job on our{" "}
          <Link href="/quote/" className="font-semibold text-brand hover:text-brand-dark">
            quote form
          </Link>{" "}
          or call {site.phoneDisplay}, and see how the cost is worked out on the{" "}
          <Link href="/prices/" className="font-semibold text-brand hover:text-brand-dark">
            prices page
          </Link>
          .
        </p>
      </div>

      <Faq faqs={faqs} />
      <Cta label="Not Sure What Size Van You Need?" />
    </>
  );
}

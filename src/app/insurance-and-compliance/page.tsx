import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site, isReal } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema, faqSchema } from "@/lib/schema";

const PATH = "/insurance-and-compliance/";

export const metadata: Metadata = pageMeta({
  title: "Insurance and Compliance | Man and Van Manchester",
  description:
    "What our insurance and compliance means in practice: goods in transit and public liability cover, waste carrier registration, how to request a certificate and how claims work.",
  path: PATH,
});

const faqs = [
  {
    q: "Are my belongings insured during the move?",
    a: "Goods-in-transit cover is designed to protect your items while they are in the van. Cover has conditions and limits, so for anything high in value tell us before the move and ask us for the current certificate.",
  },
  {
    q: "Can I see your insurance certificate?",
    a: "Yes. Ask us and we will share the current goods-in-transit and public liability certificates so you can see exactly what is covered before you book.",
  },
  {
    q: "What should I do about high-value items?",
    a: "Declare them before the move. Standard cover often has a per-item limit, so telling us in advance means we can advise on handling and on whether extra cover is sensible.",
  },
];

// Each cover renders its confirmed limit only when config holds a real value;
// otherwise it explains the cover and points the customer to the certificate.
const covers = [
  {
    h: "Goods-in-Transit Cover",
    body: "Protects your belongings while they are being carried in the van. It is the cover most people mean when they ask if a move is insured. Limits and conditions apply, so declare high-value items in advance.",
    limit: site.insurance.goodsInTransit,
    limitLabel: "Cover limit",
  },
  {
    h: "Public Liability Cover",
    body: "Covers injury or damage to property that could happen while we are working at your home, for example if something is knocked on a staircase or in a communal area.",
    limit: site.insurance.publicLiability,
    limitLabel: "Cover limit",
  },
  {
    h: "Employer's Liability",
    body: "Where a business employs staff, employer's liability cover is a legal requirement. It applies if the operator employs movers rather than working as a sole trader.",
    limit: site.insurance.employersLiability,
    limitLabel: "Cover limit",
  },
  {
    h: "Commercial Vehicle Cover",
    body: "Every van on the road must carry valid commercial motor insurance by law. That is separate from goods-in-transit cover, which protects the contents rather than the vehicle.",
    limit: "",
    limitLabel: "",
  },
];

export default function InsuranceCompliancePage() {
  const hasProvider = isReal(site.insurance.provider);
  const hasWaste = isReal(site.wasteCarrierReg);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Insurance and Compliance", url: site.url + PATH }),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insurance and Compliance", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Insurance and Compliance", path: PATH },
        ]}
      />

      <div className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Insurance and Compliance</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          &ldquo;Fully insured&rdquo; means little on its own, so here is what our cover actually
          protects, how to see the paperwork and what to do about valuable items. If anything here
          matters to your move, ask us and we will share the current certificates before you book.
        </p>

        {hasProvider && (
          <p className="mt-4 max-w-3xl text-sm text-gray-600">
            Cover is arranged through {site.insurance.provider}.
          </p>
        )}

        <section className="mt-10 space-y-5">
          {covers.map((c) => (
            <div key={c.h} className="rounded-lg border border-gray-200 bg-white p-6">
              <h2 className="text-xl font-bold text-gray-900">{c.h}</h2>
              <p className="mt-2 text-gray-700">{c.body}</p>
              {isReal(c.limit) ? (
                <p className="mt-3 text-sm font-semibold text-brand-dark">
                  {c.limitLabel}: {c.limit}
                </p>
              ) : (
                c.limitLabel && (
                  <p className="mt-3 text-sm text-gray-500">
                    Ask us for the current certificate to see the exact cover level.
                  </p>
                )
              )}
            </div>
          ))}
        </section>

        {/* Waste carrier registration */}
        <section className="mt-10 rounded-lg border border-gray-200 bg-brand-light p-6">
          <h2 className="text-xl font-bold text-brand-dark">Waste Carrier Registration</h2>
          {hasWaste ? (
            <p className="mt-2 text-gray-700">
              For rubbish removal and house clearances, household waste must be handled by a
              registered waste carrier. Our Environment Agency registration is{" "}
              <span className="font-semibold">{site.wasteCarrierReg}</span>. We dispose of what we
              collect through the proper routes and recycle where we can.
            </p>
          ) : (
            <p className="mt-2 text-gray-700">
              For rubbish removal and house clearances, household waste must be handled by a
              registered waste carrier. Ask us for our current registration details before booking a
              clearance, and we will dispose of what we collect through the proper routes and recycle
              where we can. See our{" "}
              <Link
                href="/services/rubbish-removal/"
                className="font-semibold text-brand hover:text-brand-dark"
              >
                rubbish removal service
              </Link>
              .
            </p>
          )}
        </section>

        {/* Claims + certificates */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-gray-900">How a Claim Works</h2>
            <p className="mt-2 text-gray-700">
              If something is damaged, tell us as soon as you notice it, keep the item and any
              packaging, and take a photo. We will talk you through the next step and, where cover
              applies, help you make a claim. Being upfront about high-value items before the move
              makes any claim far simpler.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Requesting a Certificate</h2>
            <p className="mt-2 text-gray-700">
              Landlords, letting agents, offices and building managers often ask for proof of cover
              before a move. Ask us and we will send the relevant certificate. For office and
              apartment-block moves it is worth requesting this a few days ahead.
            </p>
          </div>
        </section>

        <p className="mt-8 text-sm text-gray-600">
          Questions about cover for your move?{" "}
          <Link href="/contact/" className="font-semibold text-brand hover:text-brand-dark">
            Contact us
          </Link>{" "}
          or{" "}
          <Link href="/quote/" className="font-semibold text-brand hover:text-brand-dark">
            get a quote
          </Link>
          .
        </p>
      </div>

      <Faq faqs={faqs} />
      <Cta label="Ask us about cover for your move" />
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { guides } from "@/lib/guides";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const PATH = "/moving-guides/";

export const metadata: Metadata = pageMeta({
  title: "Moving Guides for Manchester | Man and Van Manchester",
  description:
    "Practical moving guides for Manchester: what a man and van costs, what size van you need, preparing for a flat move and reserving parking for your move.",
  path: PATH,
});

export default function MovingGuidesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Moving Guides", url: site.url + PATH }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Moving Guides", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Moving Guides", path: PATH },
        ]}
      />

      <div className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Moving Guides for Manchester</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Straight answers to the questions people actually ask before a move, written from real
          experience of Manchester streets, stairs and loading bays. No filler.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/moving-guides/${g.slug}/`}
              className="block rounded-lg border border-gray-200 bg-white p-5 hover:border-brand hover:bg-brand-light"
            >
              <h2 className="text-lg font-bold text-brand-dark">{g.h1}</h2>
              <p className="mt-2 text-sm text-gray-700">{g.answer.slice(0, 140)}&hellip;</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">Read the guide</span>
            </Link>
          ))}
        </div>
      </div>

      <Cta label="Ready to Get a Quote?" />
    </>
  );
}

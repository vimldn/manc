import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "About Us | Van and Man Manchester",
  description:
    "Van and Man Manchester is a local man and van service covering Manchester and Greater Manchester. Reliable removals, van hire and clearances at fair prices.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "About Van and Man Manchester", url: site.url + "/about/" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about/" },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">About Van and Man Manchester</h1>
        <p className="mt-4 text-gray-700">
          Van and Man Manchester is a local man and van service covering Manchester and the whole of
          Greater Manchester. We help people move house and flat, hire a van and a pair of hands,
          clear rubbish and deliver furniture. We are the people who actually turn up and do the
          move, not a call centre passing you around.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">What we stand for</h2>
        <p className="mt-3 text-gray-700">
          Moving is stressful, and the last thing you need is a company that turns up late, damages
          your things or adds charges at the end. We keep it simple: turn up on time, handle your
          belongings with care, and charge a fair, clear price agreed before we start. That is it.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">Where we work</h2>
        <p className="mt-3 text-gray-700">
          We cover Manchester city centre and nearby areas including Salford, Didsbury, Chorlton,
          Fallowfield, Withington, Old Trafford, Hulme, Wythenshawe, Prestwich, Stretford, Sale and
          Salford Quays, plus the rest of Greater Manchester. We also run long distance jobs from
          Manchester to London and across the UK.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">Get in touch</h2>
        <p className="mt-3 text-gray-700">
          Call{" "}
          <a href={`tel:${site.phoneTel}`} className="font-bold text-brand hover:text-brand-dark">
            {site.phoneDisplay}
          </a>{" "}
          for a quote, or use our quote form and we will call you back. We are available {site.hours}.
        </p>
      </article>

      <Cta />
    </>
  );
}

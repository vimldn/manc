import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallLink from "@/components/CallLink";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site, isReal } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "About Man and Van Manchester | Removals and Delivery Service",
  description:
    "Man and Van Manchester is a local removals and delivery service covering Manchester and Greater Manchester, from single items to full house and long-distance moves.",
  path: "/about/",
});

const services = [
  "House removals",
  "Flat and apartment removals",
  "Man and van hire",
  "Furniture and single-item delivery",
  "Student moves",
  "Office and business moves",
  "Long-distance removals",
  "Rubbish removal where appropriate",
];

export default function AboutPage() {
  // Only renders once a real person is recorded in config. Never invented.
  const namedOperator = isReal(site.operator.name) && isReal(site.operator.role);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "About Man and Van Manchester", url: site.url + "/about/" }),
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
        <h1 className="text-3xl font-extrabold text-gray-900">About {site.name}</h1>
        <p className="mt-4 text-lg text-gray-700">
          {site.name} is a local removals and delivery service covering Manchester and Greater
          Manchester. We help with house moves, flats and apartments, student moves, office moves,
          furniture collections, single-item deliveries and long-distance moves across the UK.
        </p>
        <p className="mt-4 text-gray-700">
          The idea is simple: clear communication, sensible pricing and the right van and number of
          movers for the job.
        </p>

        <h2 className="mt-10 text-xl font-bold text-gray-900">What We Do</h2>
        <p className="mt-3 text-gray-700">
          We handle everything from a single sofa collected across Manchester to a full home move or
          a long-distance journey from Manchester to London.
        </p>
        <p className="mt-3 text-gray-700">Our main services include:</p>
        <ul className="mt-3 space-y-2 text-gray-700">
          {services.map((s) => (
            <li key={s} className="flex gap-2">
              <span aria-hidden className="font-bold text-brand">
                &#10003;
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-bold text-gray-900">Where We Work</h2>
        <p className="mt-3 text-gray-700">
          We cover Manchester and Greater Manchester, including Manchester City Centre, Salford,
          Didsbury, Chorlton, Fallowfield, Withington, Old Trafford, Hulme, Wythenshawe, Cheetham
          Hill, Prestwich, Stretford, Sale and Salford Quays.
        </p>
        <p className="mt-3 text-gray-700">
          We also carry out{" "}
          <Link
            href="/services/long-distance-removals/"
            className="font-semibold text-brand hover:text-brand-dark"
          >
            long-distance moves from Manchester
          </Link>{" "}
          to destinations throughout the UK.
        </p>

        <h2 className="mt-10 text-xl font-bold text-gray-900">How Quotes Work</h2>
        <p className="mt-3 text-gray-700">
          Every move is slightly different, so we quote according to the actual job.
        </p>
        <p className="mt-3 text-gray-700">
          For most moves we need the collection and delivery postcodes, a description of what is
          being moved, the preferred date and details of any stairs, lifts or difficult access.
        </p>
        <p className="mt-3 text-gray-700">
          For larger moves, photographs or a short video can help us recommend the right vehicle and
          crew.
        </p>
        <p className="mt-3 text-gray-700">
          You can see our current guide prices on the{" "}
          <Link href="/prices/" className="font-semibold text-brand hover:text-brand-dark">
            Man and Van Prices in Manchester
          </Link>{" "}
          page.
        </p>

        {namedOperator && (
          <>
            <h2 className="mt-10 text-xl font-bold text-gray-900">Who Runs {site.name}</h2>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-start">
              {isReal(site.operator.photo) && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={site.operator.photo}
                  alt={`${site.operator.name}, ${site.operator.role} at ${site.name}`}
                  className="h-32 w-32 shrink-0 rounded-lg object-cover"
                />
              )}
              <div>
                <p className="text-gray-700">
                  {site.name} is run by {site.operator.name}, {site.operator.role}.
                </p>
                {isReal(site.operator.bio) && (
                  <p className="mt-3 text-gray-700">{site.operator.bio}</p>
                )}
              </div>
            </div>
          </>
        )}

        <h2 className="mt-10 text-xl font-bold text-gray-900">Contact {site.name}</h2>
        <dl className="mt-3 space-y-2 text-gray-700">
          <div className="flex gap-2">
            <dt className="font-semibold text-gray-900">Phone:</dt>
            <dd>
              <CallLink where="about_page" className="font-bold text-brand hover:text-brand-dark" />
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold text-gray-900">Hours:</dt>
            <dd>{site.hours}</dd>
          </div>
          {site.address.showPublicly && (
            <div className="flex gap-2">
              <dt className="font-semibold text-gray-900">Address:</dt>
              <dd>
                {site.address.street}, {site.address.locality} {site.address.postcode}
              </dd>
            </div>
          )}
        </dl>
        <p className="mt-4 text-gray-700">
          For a written quote, use the{" "}
          <Link href="/quote/" className="font-semibold text-brand hover:text-brand-dark">
            online quote form
          </Link>{" "}
          and tell us what you are moving, where it is going and when you need it moved.
        </p>
      </article>

      <Cta />
    </>
  );
}

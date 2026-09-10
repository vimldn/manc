import Link from "next/link";
import type { CaseStudy } from "@/lib/caseStudies";
import { caseStudyCategories } from "@/lib/caseStudies";

// Renders one genuine completed move. Every optional field is conditional, so
// a job with less detail recorded still renders cleanly and nothing is
// invented to fill a gap.
export default function CaseStudyCard({ study: c }: { study: CaseStudy }) {
  const label = caseStudyCategories.find((k) => k.key === c.category)?.label;

  const facts: { dt: string; dd: string }[] = [
    { dt: "Property", dd: c.propertyType },
    { dt: "Load", dd: c.itemsMoved },
    { dt: "Vehicle", dd: c.vehicle },
    { dt: "Movers", dd: c.crew },
    { dt: "Stairs", dd: c.stairs },
    { dt: "Lift", dd: c.lift },
    { dt: "Parking", dd: c.parking },
    { dt: "Access", dd: c.access },
    { dt: "Distance", dd: c.distance },
    { dt: "Time taken", dd: c.duration },
    { dt: "Price", dd: c.price },
  ].filter((f): f is { dt: string; dd: string } => Boolean(f.dd));

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5">
      {label && <p className="text-sm font-semibold text-brand">{label}</p>}
      <h3 className="mt-1 text-lg font-bold text-gray-900">{c.title}</h3>
      <p className="mt-1 text-sm text-gray-500">
        {c.fromArea} to {c.toArea} &bull; {c.month}
      </p>

      <p className="mt-3 text-sm text-gray-700">{c.situation}</p>
      <p className="mt-2 text-sm text-gray-700">{c.outcome}</p>

      {c.photos && c.photos.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {c.photos.map((p) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-40 w-full rounded-md object-cover"
            />
          ))}
        </div>
      )}

      <dl className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-600">
        {facts.map((f) => (
          <div key={f.dt}>
            <dt className="font-semibold text-gray-800">{f.dt}</dt>
            <dd>{f.dd}</dd>
          </div>
        ))}
      </dl>

      {c.customerQuote && (
        <blockquote className="mt-4 border-l-2 border-gray-200 pl-3 text-sm italic text-gray-700">
          {c.customerQuote}
        </blockquote>
      )}

      {c.relatedService && (
        <Link
          href={`/services/${c.relatedService}/`}
          className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Related service
        </Link>
      )}
    </article>
  );
}

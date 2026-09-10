import Link from "next/link";
import CaseStudyCard from "./CaseStudyCard";
import { caseStudiesForService } from "@/lib/caseStudies";

// Shows genuine completed jobs for one service. Renders NOTHING when there are
// none, so a service page never carries an empty "Recent Moves" heading and no
// job is ever invented to fill the block.
export default function RecentMoves({
  serviceSlug,
  heading,
}: {
  serviceSlug: string;
  heading: string;
}) {
  const studies = caseStudiesForService(serviceSlug);
  if (studies.length === 0) return null;

  return (
    <section className="mx-auto max-w-container px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
      <p className="mt-2 max-w-3xl text-gray-600">
        Jobs we have actually completed, with the van, crew and access on each one.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {studies.map((c) => (
          <CaseStudyCard key={c.slug} study={c} />
        ))}
      </div>
      <Link
        href="/case-studies/"
        className="mt-5 inline-block font-semibold text-brand hover:text-brand-dark"
      >
        See more recent moves
      </Link>
    </section>
  );
}

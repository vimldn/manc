import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}/`}
      className="block rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-brand hover:shadow-md"
    >
      <h3 className="text-base font-bold text-brand-dark">{service.navLabel}</h3>
      <p className="mt-2 text-sm text-gray-600">{service.metaDescription.split(".")[0]}.</p>
      <span className="mt-3 inline-block text-sm font-semibold text-cta">Learn more &rarr;</span>
    </Link>
  );
}

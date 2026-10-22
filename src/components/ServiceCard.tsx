import Link from "next/link";
import type { Service } from "@/lib/services";
export default function ServiceCard({ service }: { service: Service }) {
  return <Link href={`/services/${service.slug}/`} className="service-card"><h3>{service.navLabel}</h3><p>{service.metaDescription.split(".")[0]}.</p><span>Let’s move it <b aria-hidden>↗</b></span></Link>;
}

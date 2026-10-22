import Link from "next/link";
import { site } from "@/lib/config";
import CallLink from "@/components/CallLink";
export default function Cta({ label = "Let’s get you moving." }: { label?: string }) {
  return <section className="franks-cta"><div className="section-wrap"><p className="eyebrow">FRANK’S VAN AND MAN MANCHESTER</p><h2>{label}</h2><p>A few things or the whole lot. Tell us the plan.</p><div className="cta-actions"><Link href="/quote/" className="button">Get a free quote ↗</Link><CallLink where="cta_band" className="cta-phone">{site.phoneDisplay}</CallLink></div></div></section>;
}

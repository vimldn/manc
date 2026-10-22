import type { Faq as FaqType } from "@/lib/services";
export default function Faq({ faqs, heading = "A few useful answers." }: { faqs: FaqType[]; heading?: string }) {
  if (!faqs.length) return null;
  return <section className="franks-faq section-wrap"><div><p className="eyebrow">GOOD TO KNOW</p><h2>{heading}</h2></div><div className="faq-items">{faqs.map((f,i) => <details key={i}><summary>{f.q}<span aria-hidden>+</span></summary><p>{f.a}</p></details>)}</div></section>;
}

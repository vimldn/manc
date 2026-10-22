import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import CallLink from "@/components/CallLink";
import MoveStarter from "@/components/MoveStarter";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { faqSchema, webPageSchema } from "@/lib/schema";
export const metadata: Metadata = {
  title: "Frank's Van and Man Manchester | House Removals & Van Hire",
  description:
    "Man and van in Manchester for house removals, flat moves, rubbish removal and furniture delivery. Cheap, reliable and covering all of Greater Manchester. Call for a quote.",
  alternates: { canonical: site.url + "/" },
};

const homeFaqs = [
  {
    q: "How much does a man and van cost in Manchester?",
    a: "It depends on the size of the job, the distance and how long it takes. Most single item and small flat moves are our cheapest jobs, while full house and long distance moves cost more. Tell us what you are moving and we will give you a clear quote.",
  },
  {
    q: "Do you cover all of Manchester?",
    a: "Yes. We cover Manchester city centre and nearby areas including Salford, Didsbury, Chorlton, Fallowfield and across Greater Manchester. Give us your postcode and we will confirm.",
  },
  {
    q: "Can you do a same day or next day move?",
    a: "Often yes, depending on how the day is running. Smaller jobs and single item runs are easiest to fit in at short notice. Get in touch and we will tell you the soonest slot.",
  },
  {
    q: "Are you a cheap man and van service?",
    a: "We keep our prices competitive by being efficient, not by hiding fees. You get a clear rate before we start, with no surprises added at the end.",
  },
];

export default function HomePage() {
  return <div className="home-page">
    <JsonLd data={[webPageSchema({ name: site.name, url: site.url + "/" }), faqSchema(homeFaqs)]} />
    <section className="home-hero">
      <div className="hero-inner"><div className="hero-copy">
        <p className="eyebrow">FRANK’S VAN AND MAN MANCHESTER</p>
        <h1>Big moves.<br /><span className="hand-underline">Good hands.</span></h1>
        <p className="hero-description">Your local man and van in Manchester. From a single sofa to a whole new home, we’ll help you get there.</p>
        <p className="hero-small">{site.hours} · Across Greater Manchester</p>
      </div><div className="hero-art"><Image src="/images/franks-moving-van.webp" alt="Illustration of Frank’s green moving van packed with furniture, boxes and houseplants in Manchester" width={1536} height={1024} priority sizes="(max-width: 760px) 100vw, 60vw" /></div></div>
      <div className="starter-wrap"><MoveStarter /></div>
    </section>
    <section className="home-intro section-wrap"><p className="eyebrow">A FRIENDLY FACE. A HELPING HAND.</p><h2>A little lift.<br />Or the <em>whole lot.</em></h2><p>Moving is a big enough job already. We help with the heavy bit — house moves, flat moves, furniture collections and everything in between. Tell us what’s coming, where it’s going and when you need us.</p><Link className="text-link" href="/about/">Get to know Frank’s ↗</Link></section>
    <section className="home-services section-wrap"><div className="section-heading"><p className="eyebrow">WHAT ARE WE MOVING?</p><Link className="text-link" href="/services/">Explore all services ↗</Link></div><div className="service-editorial">
      {[['01','A few things.','A sofa you’ve fallen for. A student room. The boxes that won’t fit in your car.','/services/furniture-delivery/'],['02','A whole home.','From the first box to the last armchair. Flats, houses and fresh starts.','/services/house-removals/'],['03','Your business.','Desks, equipment and the next chapter for your team. Let’s make room for it.','/services/office-removals/']].map(([n,title,body,href]) => <Link className="service-feature" href={href} key={n}><span className="service-number">{n}</span><h2>{title}</h2><p>{body}</p><span className="service-arrow" aria-hidden>↗</span></Link>)}
    </div><div className="all-services">{services.map(s => <Link key={s.slug} href={`/services/${s.slug}/`}>{s.navLabel}<span aria-hidden>↗</span></Link>)}</div></section>
    <section className="local-section"><div className="section-wrap local-grid"><div><p className="eyebrow">LOCAL KNOW-HOW GOES A LONG WAY</p><h2>Manchester,<br /><em>door to door.</em></h2><p>Terraced streets in Chorlton. A flat in Fallowfield. An office in Salford Quays. Tell us about the stairs, parking and tight corners so we can plan your move properly.</p><Link className="text-link" href="/areas-we-cover/">Find your area ↗</Link></div><div className="local-note"><span className="hand-note">Third-floor flat?<br />Massive sofa?</span><p>Tell us now.<br />We’ll plan the right help.</p><Link href="/our-vans/">Which van do I need? ↗</Link></div></div><div className="section-wrap area-directory">{locations.map(l => <Link key={l.slug} href={`/locations/${l.slug}/`}>{l.name} <span aria-hidden>↗</span></Link>)}</div></section>
    <section className="section-wrap how-section"><div><p className="eyebrow">LESS FUSS. MORE MOVING.</p><h2>From here<br />to <em>sorted.</em></h2><Link href="/prices/" className="text-link">How our prices work ↗</Link></div><ol>{[['Tell us the plan','What you’re moving, both addresses, your date and anything we should know about access.'],['Get your quote','We’ll work out the van and help you need, and agree the price before your move.'],['Leave the lifting to us','We’ll load up, head over and help get your things into their new home.']].map(([title,body],i) => <li key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>
    <section className="urgent-band"><div className="section-wrap"><h2>Need a hand <em>today?</em></h2><p>Short-notice jobs welcome, subject to availability. Give us a ring and we’ll tell you what’s possible.</p><CallLink where="homepage_same_day" className="button">Call {site.phoneDisplay} ↗</CallLink></div></section>
    <section className="section-wrap planning-section"><p className="eyebrow">A LITTLE PREPARATION HELPS</p><h2>Before the big day.</h2><div>{[['/moving-guides/','Good advice. Less guesswork.','Packing, planning and the practical bits.'],['/our-vans/','Make room for everything.','Our guide to van sizes and moving help.'],['/insurance-and-compliance/','Know where you stand.','Straight answers about cover and compliance.'],['/case-studies/','Every move is different.','Explore our recent moves.']].map(([href,title,body]) => <Link key={href} href={href}><h3>{title} <span aria-hidden>↗</span></h3><p>{body}</p></Link>)}</div></section>
    <Faq faqs={homeFaqs} heading="A few things you might be wondering." />
    <Cta label="New beginnings. This way." />
  </div>;
}

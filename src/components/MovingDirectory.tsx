import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallLink from "@/components/CallLink";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import {site} from "@/lib/config";
import {priceRows,priceExtras} from "@/lib/pricing";
import {breadcrumbSchema,faqSchema,webPageSchema} from "@/lib/schema";
import {movingDirectories,directorySpokes,type MovingDirectory} from "@/lib/movingDirectories";
export default function MovingDirectory({hub}:{hub:MovingDirectory}){
const path="/"+hub.slug+"/";
const trail=[{name:"Home",path:"/"},{name:hub.name,path}];
const pages=directorySpokes.filter(p=>p.silo===hub.slug);
return <>
<JsonLd data={[webPageSchema({name:hub.h1,url:site.url+path}),breadcrumbSchema(trail),faqSchema(hub.faqs)]}/>
<Breadcrumbs trail={trail}/>
<div className="interior-page mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-3">
<article className="lg:col-span-2">
<p className="eyebrow">FRANK’S · GREATER MANCHESTER</p><h1>{hub.h1}</h1><p className="mt-4 text-lg">{hub.intro}</p>
<div className="mt-5 flex flex-wrap items-center gap-4"><Link href="/quote/" className="button">Get a free quote ↗</Link><CallLink where="moving_directory" className="font-bold text-brand-dark">{site.phoneDisplay}</CallLink></div>
<section className="mt-8 rounded-lg border border-gray-200 p-5"><h2>What we need from you</h2><ul className="mt-3 list-disc space-y-2 pl-5">{hub.checks.map(x=><li key={x}>{x}</li>)}</ul></section>
{hub.sections.map(([h,body])=><section className="mt-8" key={h}><h2>{h}</h2><p className="mt-3">{body}</p></section>)}
<section className="mt-8"><h2>What might it cost?</h2><dl className="mt-3 divide-y">{priceRows.filter(r=>hub.rates.includes(r.key)).map(r=><div key={r.key} className="py-3"><div className="flex justify-between gap-3"><dt>{r.label}</dt><dd className="font-bold">{r.from}</dd></div><p className="mt-1 text-sm">{r.bestFor}</p></div>)}</dl><p className="mt-3 text-sm">Guide rates only. Minimum booking: {priceExtras.find(e=>e.label==="Minimum booking")?.value}. We’ll confirm the final quote for your job. <Link href="/prices/" className="text-link">See all our guide prices.</Link></p></section>
{pages.length>0&&<section className="mt-8"><h2>{hub.name}</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{pages.map(p=><Link className="rounded-lg border border-gray-200 p-4" key={p.slug} href={path+p.slug+"/"}><h3>{p.title}</h3><p className="mt-2 text-sm">{p.description}</p></Link>)}</div></section>}
<section className="mt-8"><h2>Need a hand with something else?</h2><p className="mt-3"><Link href={"/services/"+hub.service+"/"} className="text-link">See the moving service</Link> · <Link href="/our-vans/" className="text-link">Which van do I need?</Link> · <Link href="/locations/" className="text-link">Areas we cover</Link></p><ul className="mt-4 space-y-2">{movingDirectories.filter(d=>d.slug!==hub.slug).map(d=><li key={d.slug}><Link className="text-link" href={"/"+d.slug+"/"}>{d.name}</Link></li>)}</ul></section>
</article><aside><div className="lg:sticky lg:top-24"><QuoteForm heading="Tell us what needs moving" formName={hub.slug+"_hub"} compact/></div></aside></div><Faq faqs={hub.faqs}/><Cta label="Let’s get your move sorted."/></>;}

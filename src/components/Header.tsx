"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Brand from "./Brand";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { track } from "@/lib/analytics";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <header className="site-header">
    <div className="header-note"><span>YOUR NEXT CHAPTER. OUR PAIR OF HANDS.</span><a href={`tel:${site.phoneTel}`} onClick={() => track("call_click", { location: "header" })}>Let’s talk · {site.phoneDisplay}</a></div>
    <div className="header-main"><Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/" aria-current={path === "/" ? "page" : undefined}>Home</Link>
        <div className="nav-group"><Link href="/services/">Our services <span aria-hidden>⌄</span></Link><div className="nav-panel">{services.map(s => <Link key={s.slug} href={`/services/${s.slug}/`}>{s.navLabel}</Link>)}</div></div>
        <div className="nav-group"><Link href="/locations/">Areas we cover <span aria-hidden>⌄</span></Link><div className="nav-panel nav-areas">{locations.map(l => <Link key={l.slug} href={`/locations/${l.slug}/`}>{l.name}</Link>)}</div></div>
        <Link href="/prices/">Prices</Link><Link href="/moving-guides/">Moving guides</Link><Link href="/about/">About</Link>
      </nav>
      <Link href="/quote/" className="button header-quote" onClick={() => track("quote_click", { location: "header" })}>Get a quote <span aria-hidden>↗</span></Link>
      <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? "Close ×" : "Menu ☰"}</button>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
      <Link href="/" onClick={() => setOpen(false)}>Home</Link>
      <details><summary>Our services</summary><Link href="/services/">All services →</Link>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}/`}>{s.navLabel}</Link>)}</details>
      <details><summary>Areas we cover</summary><Link href="/locations/">All locations →</Link>{locations.map(l => <Link key={l.slug} href={`/locations/${l.slug}/`}>{l.name}</Link>)}</details>
      {[['/prices/', 'Prices'], ['/student-removals/', 'Student moves'], ['/moving-guides/', 'Moving guides'], ['/about/', 'About Frank’s'], ['/contact/', 'Contact']].map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}
      <Link href="/quote/" className="button">Get a quote ↗</Link>
    </nav>}
  </header>;
}

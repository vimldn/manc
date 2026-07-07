"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-container items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="text-lg font-extrabold text-brand-dark sm:text-xl">
          Van and Man <span className="text-cta">Manchester</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="/" className="text-sm font-semibold text-gray-800 hover:text-brand">
            Home
          </Link>

          <div className="group relative">
            <Link
              href="/services/"
              className="text-sm font-semibold text-gray-800 hover:text-brand"
            >
              Services
            </Link>
            <div className="invisible absolute left-0 top-full z-50 w-64 rounded-md border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-brand-light hover:text-brand-dark"
                >
                  {s.navLabel}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/locations/"
              className="text-sm font-semibold text-gray-800 hover:text-brand"
            >
              Locations
            </Link>
            <div className="invisible absolute left-0 top-full z-50 grid w-80 grid-cols-2 gap-1 rounded-md border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {locations.map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}/`}
                  className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-brand-light hover:text-brand-dark"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about/" className="text-sm font-semibold text-gray-800 hover:text-brand">
            About
          </Link>
          <Link href="/contact/" className="text-sm font-semibold text-gray-800 hover:text-brand">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="text-sm font-bold text-brand-dark"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            {site.phoneDisplay}
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-md bg-cta px-4 py-2 text-sm font-bold text-white hover:bg-cta-dark"
          >
            Call Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-6 bg-gray-800" />
          <span className="mt-1.5 block h-0.5 w-6 bg-gray-800" />
          <span className="mt-1.5 block h-0.5 w-6 bg-gray-800" />
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          <a
            href={`tel:${site.phoneTel}`}
            className="mb-4 block rounded-md bg-cta px-4 py-3 text-center text-base font-bold text-white"
          >
            Call {site.phoneDisplay}
          </a>
          <MobileLinks onNavigate={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}

function MobileLinks({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="space-y-4 text-sm">
      <Link href="/" onClick={onNavigate} className="block font-semibold text-gray-900">
        Home
      </Link>
      <div>
        <Link
          href="/services/"
          onClick={onNavigate}
          className="block font-semibold text-gray-900"
        >
          Services
        </Link>
        <div className="mt-2 grid grid-cols-2 gap-1">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              onClick={onNavigate}
              className="text-gray-600"
            >
              {s.navLabel}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Link
          href="/locations/"
          onClick={onNavigate}
          className="block font-semibold text-gray-900"
        >
          Locations
        </Link>
        <div className="mt-2 grid grid-cols-2 gap-1">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/locations/${l.slug}/`}
              onClick={onNavigate}
              className="text-gray-600"
            >
              {l.name}
            </Link>
          ))}
        </div>
      </div>
      <Link href="/about/" onClick={onNavigate} className="block font-semibold text-gray-900">
        About
      </Link>
      <Link href="/contact/" onClick={onNavigate} className="block font-semibold text-gray-900">
        Contact
      </Link>
    </div>
  );
}

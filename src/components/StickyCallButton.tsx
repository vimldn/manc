"use client";

import Link from "next/link";
import { site, whatsappHref } from "@/lib/config";
import { track } from "@/lib/analytics";

// Sticky mobile action bar: Call, WhatsApp (when enabled) and Quote.
// Hidden on desktop. WhatsApp column only appears once a real number is set,
// so the bar shows two columns until then and three afterwards.
export default function StickyCallButton() {
  const showWhatsApp = site.whatsapp.enabled;
  const cols = showWhatsApp ? "grid-cols-3" : "grid-cols-2";

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 grid ${cols} border-t border-black/10 shadow-lg lg:hidden`}
    >
      <a
        href={`tel:${site.phoneTel}`}
        onClick={() => track("call_click", { location: "sticky_bar" })}
        className="flex flex-col items-center justify-center bg-cta py-2.5 text-xs font-bold text-white"
        aria-label={`Call ${site.phoneDisplay}`}
      >
        <span aria-hidden className="text-base">&#9742;</span>
        Call
      </a>

      {showWhatsApp && (
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { location: "sticky_bar" })}
          className="flex flex-col items-center justify-center bg-[#25D366] py-2.5 text-xs font-bold text-white"
          aria-label="Message us on WhatsApp"
        >
          <span aria-hidden className="text-base">&#128172;</span>
          WhatsApp
        </a>
      )}

      <Link
        href="/quote/"
        onClick={() => track("quote_click", { location: "sticky_bar" })}
        className="flex flex-col items-center justify-center bg-gray-900 py-2.5 text-xs font-bold text-white"
      >
        <span aria-hidden className="text-base">&#9998;</span>
        Get a Quote
      </Link>
    </div>
  );
}

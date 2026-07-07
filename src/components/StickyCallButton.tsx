"use client";

import { site } from "@/lib/config";

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      className="fixed inset-x-0 bottom-0 z-50 block bg-cta px-4 py-4 text-center text-base font-bold text-white shadow-lg lg:hidden"
      aria-label={`Call ${site.phoneDisplay}`}
    >
      Call for a Quote: {site.phoneDisplay}
    </a>
  );
}

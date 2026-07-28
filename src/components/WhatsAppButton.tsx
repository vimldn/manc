"use client";

import { site, whatsappHref } from "@/lib/config";
import { track } from "@/lib/analytics";

type Props = {
  /** Visual variant. */
  variant?: "solid" | "outline" | "bar";
  /** Optional label override. */
  label?: string;
  className?: string;
};

// WhatsApp green. Renders nothing until a real WhatsApp number is confirmed
// (site.whatsapp.enabled), so no invented number is ever exposed.
export default function WhatsAppButton({
  variant = "solid",
  label = "WhatsApp Us",
  className = "",
}: Props) {
  if (!site.whatsapp.enabled) return null;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition";
  const styles: Record<string, string> = {
    solid: "bg-[#25D366] text-white hover:bg-[#1da851]",
    outline: "border-2 border-[#25D366] text-[#075E54] hover:bg-[#25D366] hover:text-white",
    bar: "bg-[#25D366] text-white",
  };

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location: "site" })}
      className={`${base} ${styles[variant]} ${className}`}
      aria-label="Message us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.74-.86-2-.95-.27-.1-.47-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.34.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5l-.56-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.2 1.87.12.57-.09 1.74-.71 1.99-1.4.24-.69.24-1.28.17-1.4-.07-.12-.27-.2-.57-.35zM12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.77.46 3.42 1.27 4.86L2 22l5.28-1.38A9.94 9.94 0 0 0 12.02 22c5.52 0 10-4.48 10-10S17.54 2 12.02 2z" />
      </svg>
      {label}
    </a>
  );
}

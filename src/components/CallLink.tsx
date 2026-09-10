"use client";

import { site } from "@/lib/config";
import { track } from "@/lib/analytics";

// Every telephone link on the site should go through this component so that
// call_click fires from all of them, not just the header and the sticky bar.
// `where` names the placement in GA4; it carries no personal data.
export default function CallLink({
  where,
  className,
  children,
  ariaLabel,
}: {
  where: string;
  className?: string;
  children?: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      onClick={() => track("call_click", { location: where })}
      className={className}
      aria-label={ariaLabel}
    >
      {children ?? site.phoneDisplay}
    </a>
  );
}

import { site, isReal } from "@/lib/config";

// A strip of genuine trust signals. Numeric/claimed items (rating, review
// count, years, insurance, waste reg) render ONLY when config holds a real,
// confirmed value. The always-true operational facts (local number, 7 days,
// hours, coverage) render regardless. No invented figures ever show.
export default function TrustBar() {
  const items: { label: string; sub: string }[] = [];

  if (isReal(site.reviews.googleRating) && isReal(site.reviews.googleCount)) {
    items.push({
      label: `${site.reviews.googleRating}/5 on Google`,
      sub: `${site.reviews.googleCount} reviews`,
    });
  }
  if (isReal(site.yearsTrading)) {
    items.push({ label: site.yearsTrading, sub: "Serving Manchester" });
  }
  if (isReal(site.insurance.goodsInTransit)) {
    items.push({ label: "Goods in transit cover", sub: "Certificate on request" });
  }
  if (isReal(site.wasteCarrierReg)) {
    items.push({ label: "Registered waste carrier", sub: "Responsible disposal" });
  }

  // Always-true operational signals.
  items.push({ label: `Local ${site.phoneDisplay.split(" ")[0]} number`, sub: "Manchester based" });
  items.push({ label: "Seven days a week", sub: site.hours });
  items.push({ label: "Same-day where available", sub: "Short-notice jobs welcome" });
  items.push({ label: "All of Greater Manchester", sub: "City and nearby areas" });

  return (
    <section aria-label="Why customers choose us" className="border-b border-gray-200 bg-white">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-4 px-4 py-5 sm:grid-cols-4">
        {items.slice(0, 4).map((it) => (
          <div key={it.label} className="text-center">
            <p className="text-sm font-bold text-brand-dark">{it.label}</p>
            <p className="mt-0.5 text-xs text-gray-500">{it.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

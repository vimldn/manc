import { site } from "@/lib/config";
import CallLink from "@/components/CallLink";

export default function Cta({ label = "Ready to Move?" }: { label?: string }) {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white">{label}</h2>
          <p className="mt-1 text-brand-light">
            Call now for a fast, no obligation quote across Manchester and nearby areas.
          </p>
        </div>
        <CallLink where="cta_band" className="whitespace-nowrap rounded-md bg-cta px-6 py-3 text-lg font-bold text-white hover:bg-cta-dark">
            Call {site.phoneDisplay}
          </CallLink>
      </div>
    </section>
  );
}

import type { Faq as FaqType } from "@/lib/services";

export default function Faq({ faqs, heading = "Frequently Asked Questions" }: { faqs: FaqType[]; heading?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="mx-auto max-w-container px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
      <div className="mt-6 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
        {faqs.map((f, i) => (
          <details key={i} className="group px-5 py-4">
            <summary className="cursor-pointer list-none text-base font-semibold text-gray-900">
              {f.q}
            </summary>
            <p className="mt-2 text-sm text-gray-700">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

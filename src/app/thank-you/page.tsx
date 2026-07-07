import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/lib/config";

export const metadata: Metadata = {
  title: "Thank You | Van and Man Manchester",
  description: "Thanks for your enquiry. We will be in touch shortly with your man and van quote.",
  alternates: { canonical: site.url + "/thank-you/" },
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-3xl font-extrabold text-gray-900">Thanks, we have got your details</h1>
      <p className="mt-4 text-lg text-gray-700">
        We will be in touch shortly with your man and van quote. If you need us quickly, the fastest
        way to get a price is to call us now.
      </p>
      <a
        href={`tel:${site.phoneTel}`}
        className="mt-8 inline-block rounded-md bg-cta px-8 py-4 text-lg font-bold text-white hover:bg-cta-dark"
      >
        Call {site.phoneDisplay}
      </a>
      <div className="mt-8">
        <Link href="/" className="text-sm font-semibold text-brand hover:text-brand-dark">
          Back to home
        </Link>
      </div>
    </section>
  );
}

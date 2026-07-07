import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use | Van and Man Manchester",
  description: "The terms of use for the Van and Man Manchester website.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Terms", path: "/terms/" }]} />
      <article className="mx-auto max-w-3xl px-4 py-8 text-gray-700">
        <h1 className="text-3xl font-extrabold text-gray-900">Terms of Use</h1>
        <p className="mt-4">
          By using this website you agree to these terms. The information on this site is provided in
          good faith to help you understand our man and van services in Manchester.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">Quotes and pricing</h2>
        <p className="mt-3">
          Prices mentioned on this site are for guidance only. A firm price is given when you contact
          us and provide the details of your move. Quotes are subject to confirmation.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">Service availability</h2>
        <p className="mt-3">
          Availability depends on demand and the details of your job. We will always tell you the
          soonest slot we can offer.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">Contact</h2>
        <p className="mt-3">
          Questions about these terms can be sent to {site.email}.
        </p>
        <p className="mt-8 text-sm text-gray-500">
          This is a general template and should be reviewed by the site operator before going live.
        </p>
      </article>
    </>
  );
}

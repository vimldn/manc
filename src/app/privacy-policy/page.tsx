import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/config";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy | Van and Man Manchester",
  description: "How Van and Man Manchester collects and uses the information you provide when requesting a man and van quote.",
  path: "/privacy-policy/",
});

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy/" }]} />
      <article className="mx-auto max-w-3xl px-4 py-8 text-gray-700">
        <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
        <p className="mt-4">
          This privacy policy explains how {site.name} handles the information you provide through
          this website. We keep things simple and only use your details to respond to your enquiry.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">What we collect</h2>
        <p className="mt-3">
          When you use our quote or contact form, we collect the details you enter, such as your
          name, phone number, email, the service you need, your area and any message. We only ask
          for what we need to give you a quote.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">How we use it</h2>
        <p className="mt-3">
          We use your details solely to contact you about your enquiry and arrange your move. We do
          not sell your information to third parties.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">Data retention</h2>
        <p className="mt-3">
          We keep enquiry details only for as long as needed to deal with your request and any
          follow up, then remove them.
        </p>
        <h2 className="mt-8 text-xl font-bold text-gray-900">Your rights</h2>
        <p className="mt-3">
          You can ask us what information we hold about you and request that we delete it. Contact us
          at {site.email} to do so.
        </p>
        <p className="mt-8 text-sm text-gray-500">
          This is a general template and should be reviewed by the site operator before going live
          to ensure it reflects actual data handling and complies with UK GDPR.
        </p>
      </article>
    </>
  );
}

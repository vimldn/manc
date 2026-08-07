import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  title: "Contact | Man and Van Manchester | Man and Van Manchester",
  description:
    "Contact Man and Van Manchester for a fast man and van quote. Call us or send your details and we will call you back. Covering all of Greater Manchester.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Contact Man and Van Manchester", url: site.url + "/contact/" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact/" },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
      />

      <div className="mx-auto grid max-w-container gap-10 px-4 py-8 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Contact Man and Van Manchester</h1>
          <p className="mt-4 text-gray-700">
            The fastest way to get a quote is to call us. Tell us what you are moving, where from and
            where to, and we will give you a clear price. Prefer we call you? Fill in the form and we
            will be in touch.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-gray-200 bg-brand-light p-5">
              <div className="text-sm font-semibold text-gray-600">Call for a quote</div>
              <a
                href={`tel:${site.phoneTel}`}
                className="mt-1 block text-2xl font-extrabold text-brand-dark"
              >
                {site.phoneDisplay}
              </a>
              <div className="mt-1 text-sm text-gray-600">{site.hours}</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="text-sm font-semibold text-gray-600">Email</div>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block text-lg font-bold text-brand hover:text-brand-dark"
              >
                {site.email}
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-5">
              <div className="text-sm font-semibold text-gray-600">Coverage</div>
              <p className="mt-1 text-sm text-gray-700">
                Manchester and Greater Manchester, plus long distance runs across the UK. Serving
                Manchester and nearby areas.
              </p>
            </div>
            {site.address.showPublicly && (
              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="text-sm font-semibold text-gray-600">Office</div>
                <address className="mt-1 text-sm not-italic text-gray-700">
                  {site.address.street}
                  <br />
                  {site.address.locality} {site.address.postcode}
                </address>
                <iframe
                  title={`${site.name} office location, ${site.address.street}, ${site.address.locality} ${site.address.postcode}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    site.address.mapQuery,
                  )}&z=16&output=embed`}
                  className="mt-4 h-64 w-full rounded-lg border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </div>

        <div>
          <QuoteForm heading="Request a callback" />
        </div>
      </div>
    </>
  );
}

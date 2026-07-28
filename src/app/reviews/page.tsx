import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { site, isReal } from "@/lib/config";
import { pageMeta } from "@/lib/seo";
import { reviews, reviewCategories } from "@/lib/reviews";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const PATH = "/reviews/";

export const metadata: Metadata = pageMeta({
  title: "Customer Reviews | Man and Van Manchester",
  description:
    "Genuine customer reviews for our Manchester man and van service. See feedback on house moves, flat moves, student moves and furniture deliveries across Greater Manchester.",
  path: PATH,
});

export default function ReviewsPage() {
  const hasReviews = reviews.length > 0;
  const hasGoogle = isReal(site.reviews.googleUrl);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: "Customer Reviews", url: site.url + PATH }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Reviews", path: PATH },
          ]),
        ]}
      />
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: PATH },
        ]}
      />

      <div className="mx-auto max-w-container px-4 py-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Customer Reviews</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          We would rather show you genuine feedback than a wall of made-up five-star quotes. Real
          reviews from Manchester customers appear here as we gather them.
        </p>

        {hasReviews ? (
          <>
            <div className="mt-6 flex flex-wrap gap-2">
              {reviewCategories.map((c) => (
                <span
                  key={c.key}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700"
                >
                  {c.label}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {reviews.map((r, i) => (
                <figure key={i} className="rounded-lg border border-gray-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <figcaption className="font-bold text-gray-900">{r.name}</figcaption>
                    <span className="text-sm text-gray-500">
                      {"★".repeat(r.rating)}
                      {"☆".repeat(5 - r.rating)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {r.platform} &bull; {r.area} &bull; {new Date(r.date).toLocaleDateString("en-GB")}
                  </p>
                  <blockquote className="mt-3 text-sm text-gray-700">{r.text}</blockquote>
                  {r.sourceUrl && (
                    <a
                      href={r.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs font-semibold text-brand hover:text-brand-dark"
                    >
                      View on {r.platform}
                    </a>
                  )}
                </figure>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-8 rounded-lg border border-gray-200 bg-brand-light p-6">
            <h2 className="text-xl font-bold text-brand-dark">We Are Collecting Reviews</h2>
            <p className="mt-2 max-w-2xl text-gray-700">
              We are gathering verified reviews from recent Manchester moves and will publish them
              here. {hasGoogle ? "In the meantime, you can read and leave a review on our Google Business Profile." : "If we have just helped you move, a short review really helps other people choose with confidence."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {hasGoogle && (
                <a
                  href={site.reviews.googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-cta px-5 py-2.5 text-sm font-bold text-white hover:bg-cta-dark"
                >
                  See us on Google
                </a>
              )}
              <Link
                href="/quote/"
                className="rounded-md border-2 border-brand px-5 py-2.5 text-sm font-bold text-brand-dark hover:bg-white"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}

        <p className="mt-8 text-sm text-gray-600">
          Read about how we work on our{" "}
          <Link href="/about/" className="font-semibold text-brand hover:text-brand-dark">
            about page
          </Link>
          , or see{" "}
          <Link href="/case-studies/" className="font-semibold text-brand hover:text-brand-dark">
            recent moves
          </Link>
          .
        </p>
      </div>

      <Cta label="Ready to Book Your Move?" />
    </>
  );
}

import { site, primaryAreas } from "./config";
import { locations } from "./locations";
import type { Faq } from "./services";

// ---------------------------------------------------------------
// MovingCompany is a valid LocalBusiness subtype and the correct type
// for a man and van operator. No aggregateRating or reviews are included
// because none are real. Do not add fabricated reviews.
//
// TODO (before go live): if the operator has a real registered address,
// add an "address" object here. It is intentionally omitted for a mobile,
// area served service so that no fake address ships.
// ---------------------------------------------------------------
export function movingCompanySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": site.url + "/#business",
    name: site.name,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    priceRange: "££",
    areaServed: [
      { "@type": "City", name: "Manchester" },
      ...locations.map((l) => ({ "@type": "Place", name: l.name })),
    ],
    openingHours: "Mo-Su 07:00-21:00",
    knowsAbout: [
      "man and van",
      "house removals",
      "flat removals",
      "rubbish removal",
      "furniture delivery",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": site.url + "/#website",
    name: site.name,
    url: site.url,
    inLanguage: "en-GB",
    publisher: { "@id": site.url + "/#business" },
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.name,
    provider: { "@id": site.url + "/#business" },
    areaServed: { "@type": "City", name: "Manchester" },
    url: args.url,
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: site.url + t.path,
    })),
  };
}

export function webPageSchema(args: { name: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: args.name,
    url: args.url,
    isPartOf: { "@id": site.url + "/#website" },
    about: { "@id": site.url + "/#business" },
  };
}

// primaryAreas exported for reuse in copy if needed
export { primaryAreas };

import { site, primaryAreas, isReal } from "./config";
import { locations } from "./locations";
import type { Faq } from "./services";

// ---------------------------------------------------------------
// MovingCompany is a valid LocalBusiness subtype and the correct type
// for a man and van operator. No aggregateRating or reviews are included
// because none are real. Do not add fabricated reviews.
//
// The postal address is only emitted when config marks it as a genuine,
// publicly-listable staffed location (address.showPublicly). While the
// registered address is a serviced/virtual office it is left out, so no
// misleading "operating location" ships in structured data.
// ---------------------------------------------------------------
export function movingCompanySchema() {
  const graph: Record<string, unknown> = {
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
    openingHours: site.openingHoursSchema,
    knowsAbout: [
      "man and van",
      "house removals",
      "flat removals",
      "rubbish removal",
      "furniture delivery",
    ],
  };

  if (isReal(site.legalName)) graph.legalName = site.legalName;
  if (isReal(site.vatNumber)) graph.vatID = site.vatNumber;

  if (site.address.showPublicly) {
    graph.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postcode,
      addressCountry: site.address.countryCode,
    };
  }

  const sameAs = [site.social.facebook, site.social.instagram, site.reviews.googleUrl].filter(
    isReal,
  );
  if (sameAs.length) graph.sameAs = sameAs;

  return graph;
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

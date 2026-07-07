import type { MetadataRoute } from "next";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

// Hardcoded last modified date. Bump this when you make a meaningful
// content change so search engines see a fresh signal.
const LAST_MODIFIED = "2026-07-08";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(LAST_MODIFIED);

  const staticPaths: { path: string; priority: number }[] = [
    { path: "/", priority: 1.0 },
    { path: "/services/", priority: 0.9 },
    { path: "/locations/", priority: 0.9 },
    { path: "/quote/", priority: 0.8 },
    { path: "/contact/", priority: 0.7 },
    { path: "/about/", priority: 0.5 },
    { path: "/privacy-policy/", priority: 0.2 },
    { path: "/terms/", priority: 0.2 },
  ];

  const servicePaths = services.map((s) => ({
    path: `/services/${s.slug}/`,
    priority: 0.8,
  }));

  const locationPaths = locations.map((l) => ({
    path: `/locations/${l.slug}/`,
    priority: 0.8,
  }));

  return [...staticPaths, ...servicePaths, ...locationPaths].map((p) => ({
    url: site.url + p.path,
    lastModified,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}

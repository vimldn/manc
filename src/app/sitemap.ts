import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import type { MetadataRoute } from "next";
import { site } from "@/lib/config";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { guides } from "@/lib/guides";
import { studentPages } from "@/lib/studentRemovals";

// lastModified is the one sitemap hint Google reads, so it has to be true.
// A single hand-bumped date on every URL told Google the whole site changed at
// once, and was forgotten as soon as pages started shipping daily. Each URL now
// reports the last commit that touched the file it is built from:
//
// - a bespoke location page dates from its own route file, so adding Rochdale
//   does not refresh Bolton;
// - pages built from a shared data file share that file's date, which is
//   honest because they did change together;
// - index and static pages date from their route file and the data they list.
//
// If git is unavailable, as in a tarball build, the date is omitted rather than
// guessed. A sitemap with no lastmod is a smaller problem than a wrong one.
function lastCommit(...files: string[]): Date | undefined {
  let latest: Date | undefined;
  for (const file of files) {
    try {
      const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim();
      if (!iso) continue;
      const d = new Date(iso);
      if (!latest || d > latest) latest = d;
    } catch {
      // git missing or not a repository: leave this file out.
    }
  }
  return latest;
}

// The route file behind a static path, e.g. "/prices/" -> src/app/prices/page.tsx.
const routeFile = (path: string) =>
  path === "/" ? "src/app/page.tsx" : `src/app${path.replace(/\/$/, "")}/page.tsx`;

export default function sitemap(): MetadataRoute.Sitemap {
  // Shared sources, resolved once per build rather than once per URL.
  const servicesData = lastCommit("src/lib/services.ts", "src/lib/serviceDetails.ts");
  const locationsData = lastCommit("src/lib/locations.ts");
  const studentData = lastCommit("src/lib/studentRemovals.ts");
  const guidesData = lastCommit("src/lib/guides.ts");

  // Index pages also change when the list they show changes.
  const staticPaths: { path: string; priority: number; data?: string[] }[] = [
    { path: "/", priority: 1.0 },
    { path: "/services/", priority: 0.9, data: ["src/lib/services.ts"] },
    { path: "/locations/", priority: 0.9, data: ["src/lib/locations.ts"] },
    { path: "/areas-we-cover/", priority: 0.7, data: ["src/lib/locations.ts"] },
    { path: "/prices/", priority: 0.8, data: ["src/lib/pricing.ts"] },
    { path: "/our-vans/", priority: 0.7, data: ["src/lib/vans.ts"] },
    { path: "/insurance-and-compliance/", priority: 0.6 },
    { path: "/moving-guides/", priority: 0.7, data: ["src/lib/guides.ts"] },
    { path: "/student-removals/", priority: 0.9, data: ["src/lib/studentRemovals.ts"] },
    { path: "/reviews/", priority: 0.5 },
    { path: "/case-studies/", priority: 0.5 },
    { path: "/quote/", priority: 0.8 },
    { path: "/contact/", priority: 0.7 },
    { path: "/about/", priority: 0.5 },
    { path: "/privacy-policy/", priority: 0.2 },
    { path: "/terms/", priority: 0.2 },
  ];

  const entries: { path: string; priority: number; lastModified?: Date }[] = [
    ...staticPaths.map((p) => ({
      path: p.path,
      priority: p.priority,
      lastModified: lastCommit(routeFile(p.path), ...(p.data ?? [])),
    })),
    ...services.map((s) => ({
      path: `/services/${s.slug}/`,
      priority: 0.8,
      lastModified: servicesData,
    })),
    ...locations.map((l) => {
      const bespoke = `src/app/locations/${l.slug}/page.tsx`;
      return {
        path: `/locations/${l.slug}/`,
        priority: 0.8,
        lastModified: l.customPage && existsSync(bespoke) ? lastCommit(bespoke) : locationsData,
      };
    }),
    ...studentPages.map((p) => ({
      path: `/student-removals/${p.slug}/`,
      priority: 0.8,
      lastModified: studentData,
    })),
    ...guides.map((g) => ({
      path: `/moving-guides/${g.slug}/`,
      priority: 0.6,
      lastModified: guidesData,
    })),
  ];

  return entries.map((p) => ({
    url: site.url + p.path,
    ...(p.lastModified ? { lastModified: p.lastModified } : {}),
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}

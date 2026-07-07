import type { Metadata } from "next";
import { site } from "./config";

type MetaArgs = {
  title: string;
  description: string;
  path: string; // e.g. "/services/house-removals/"
};

export function pageMeta({ title, description, path }: MetaArgs): Metadata {
  const url = site.url + path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_GB",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

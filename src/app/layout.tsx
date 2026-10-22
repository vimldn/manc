import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./fonts.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/config";
import { movingCompanySchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Frank's Van and Man Manchester | House Removals & Van Hire",
    template: "%s",
  },
  description:
    "Man and van in Manchester for house removals, flat moves, rubbish removal and furniture delivery. Cheap, reliable and covering all of Greater Manchester. Call for a quote.",
  alternates: { canonical: site.url + "/" },
  openGraph: {
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#123f30",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YQ35V58ZEW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YQ35V58ZEW');
          `}
        </Script>

        <JsonLd data={[websiteSchema(), movingCompanySchema()]} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}

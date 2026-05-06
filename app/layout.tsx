import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import { getSiteUrl } from "@/lib/site-config";
import "./globals.css";

const siteUrl = getSiteUrl();
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  title: {
    template: "%s | RoadToKorea",
    default: "RoadToKorea - Discover the Best Cities in South Korea",
  },
  description: "Find your next destination in South Korea. Explore must-visit cities, hidden gems, and local secrets with RoadToKorea.",
  keywords: ["Korea travel", "South Korea", "Korean cities", "Seoul travel", "Busan travel", "Korea tourism"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "RoadToKorea - Discover the Best Cities in South Korea",
    description: "Find your next destination in South Korea. Explore must-visit cities, hidden gems, and local secrets with RoadToKorea.",
    siteName: "RoadToKorea",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadToKorea - Discover the Best Cities in South Korea",
    description: "Find your next destination in South Korea. Explore must-visit cities, hidden gems, and local secrets with RoadToKorea.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RoadToKorea",
    "url": siteUrl,
    "description": "Find your next destination in South Korea. Explore must-visit cities, hidden gems, and local secrets with RoadToKorea."
  };

  return (
    <html lang="en">
      <head>
        {adsenseClient ? (
          <Script
            id="adsense-script"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
      </head>
      <body className="antialiased bg-mesh-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}

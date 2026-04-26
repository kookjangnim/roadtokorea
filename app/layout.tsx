import type { Metadata } from "next";
import Header from "@/components/Header";
import { getSiteUrl } from "@/lib/site-config";
import "./globals.css";

const siteUrl = getSiteUrl();

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

import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
    url: "https://roadtokorea.blog",
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
    canonical: "https://roadtokorea.blog",
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
    "url": "https://roadtokorea.blog",
    "description": "Find your next destination in South Korea. Explore must-visit cities, hidden gems, and local secrets with RoadToKorea."
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

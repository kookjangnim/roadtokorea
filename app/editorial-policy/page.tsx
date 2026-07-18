import type { Metadata } from 'next';
import StaticPageShell from '@/components/StaticPageShell';
import { getSiteUrl } from '@/lib/site-config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Editorial and Advertising Policy',
  description:
    'How RoadToKorea approaches route research, corrections, advertising, affiliate links, and editorial independence.',
  alternates: {
    canonical: `${siteUrl}/editorial-policy`,
  },
};

export default function EditorialPolicyPage() {
  return (
    <StaticPageShell
      eyebrow="Editorial & advertising policy"
      title="Useful travel guidance comes before commercial placement."
      lede="This page explains how RoadToKorea structures its guides, handles corrections, and separates editorial navigation from advertising or affiliate relationships."
    >
      <>
        <p><strong>Last reviewed: July 18, 2026</strong></p>

        <h2>Editorial purpose</h2>
        <p>
          RoadToKorea helps English-speaking travelers understand South Korea through routes,
          stopover decisions, transport trade-offs, and connected city chapters. The site is
          designed to help readers decide how a trip should move rather than simply repeat a list
          of popular attractions.
        </p>

        <h2>How recommendations are framed</h2>
        <p>
          Route pages explain why a city may deserve an overnight stay, a short pause, or no stop
          at all. Practical details can change, so readers should confirm schedules, prices,
          closures, and booking conditions with the relevant operator before traveling.
        </p>

        <h2>Corrections and updates</h2>
        <p>
          Factual corrections are welcome. Please email{' '}
          <a href="mailto:sawjyjm@gmail.com">sawjyjm@gmail.com</a> with the page URL and a short
          description of the issue. Material corrections are reviewed before the relevant guide is
          updated.
        </p>

        <h2>Advertising and affiliate links</h2>
        <p>
          RoadToKorea may use display advertising, sponsored placements, or affiliate links. Those
          commercial elements do not purchase a favorable editorial conclusion. Advertising units
          are visually separated from navigation and guide content, and sponsored material will be
          labeled when it is published.
        </p>

        <h2>Images and external services</h2>
        <p>
          The site uses a mix of locally stored editorial assets and media supplied or referenced
          through third-party services. Image captions, source records, and replacement workflows
          are maintained where available. Maps, booking tools, analytics, and advertising services
          may be operated by third parties under their own terms and privacy practices.
        </p>

        <h2>Reader responsibility</h2>
        <p>
          Travel conditions change and every itinerary involves personal judgment. RoadToKorea is
          an informational publication, not a substitute for official transport, safety,
          immigration, medical, or emergency advice.
        </p>
      </>
    </StaticPageShell>
  );
}

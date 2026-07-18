import type { Metadata } from 'next';
import StaticPageShell from '@/components/StaticPageShell';
import { getSiteUrl } from '@/lib/site-config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Read the RoadToKorea terms covering travel information, third-party services, licensed media, acceptable use, and corrections.',
  alternates: {
    canonical: `${siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <StaticPageShell
      eyebrow="Terms of use"
      title="Use RoadToKorea as a planning guide, then verify the details that can change."
      lede="These terms explain the limits of the site, how licensed editorial material may be used, and where readers remain responsible for current travel decisions."
    >
      <>
        <p><strong>Effective: July 19, 2026</strong></p>

        <h2>Informational purpose</h2>
        <p>
          RoadToKorea provides general travel information, route comparisons, city context, and
          editorial planning guidance. It is not an official transport operator, tourism office,
          immigration authority, medical service, emergency service, or legal adviser.
        </p>

        <h2>Conditions change</h2>
        <p>
          Timetables, fares, opening hours, access rules, weather conditions, road conditions, and
          booking availability can change without notice. Confirm time-sensitive information with
          the relevant official authority, venue, transport operator, or accommodation provider
          before relying on it.
        </p>

        <h2>Personal experience and editorial judgment</h2>
        <p>
          Some guides contain clearly labeled personal context from the editor, including current
          or former residence, family connections, or past visits. Personal memory is kept separate
          from current factual verification and should not be read as a guarantee that conditions
          remain the same.
        </p>

        <h2>Third-party services and links</h2>
        <p>
          The site may link to maps, booking services, tourism offices, transport operators,
          videos, advertising providers, or other third parties. Those services operate under
          their own terms and privacy practices. A link does not guarantee availability, accuracy,
          safety, or a favorable editorial conclusion.
        </p>

        <h2>Advertising and affiliate relationships</h2>
        <p>
          RoadToKorea may display advertising or use affiliate links. Commercial relationships do
          not purchase favorable coverage. Sponsored material will be identified where applicable,
          and editorial navigation is kept separate from advertising placement.
        </p>

        <h2>Text, design, and licensed photography</h2>
        <p>
          Original text, page design, route organization, and editorial presentation may not be
          copied or republished as a competing guide without permission. Some photographs are
          licensed from third-party libraries or referenced under separate licenses. Access to an
          image on this site does not grant a right to download, redistribute, resell, or sublicense
          it.
        </p>

        <h2>Acceptable use</h2>
        <p>
          Do not use the site to interfere with its operation, bypass access controls, scrape or
          reproduce protected material at scale, misrepresent RoadToKorea content as your own, or
          use the service in a way that violates applicable law or third-party rights.
        </p>

        <h2>Limitation and corrections</h2>
        <p>
          Travel decisions involve personal judgment and risk. RoadToKorea is not responsible for
          losses caused by relying on information that has changed or by decisions made through a
          third-party service. If you find a factual error, email{' '}
          <a href="mailto:sawjyjm@gmail.com">sawjyjm@gmail.com</a> with the page URL so it can be
          reviewed.
        </p>

        <h2>Updates to these terms</h2>
        <p>
          These terms may be updated as the site, advertising tools, or editorial services change.
          The effective date at the top of this page will show the latest published version.
        </p>
      </>
    </StaticPageShell>
  );
}


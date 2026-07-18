import type { Metadata } from 'next';
import Link from 'next/link';
import StaticPageShell from '@/components/StaticPageShell';
import { getSiteUrl } from '@/lib/site-config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'About RoadToKorea',
  description:
    'Learn what RoadToKorea covers, who it is for, and how the site approaches Korea travel planning.',
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <StaticPageShell
      eyebrow="About"
      title="Route-first Korea travel, built for slower and smarter trips."
      lede="RoadToKorea is designed for travelers who want to understand how a trip moves, not just which city looks famous on a list."
    >
      <>
        <h2>What this site is for</h2>
        <p>
          RoadToKorea organizes Korea travel around route logic, travel pace, and stopover value.
          Instead of treating every city like a must-do headline, the site tries to show when a
          place deserves real time, when it works as a short hinge, and when it is better skipped.
        </p>

        <h2>Who it helps most</h2>
        <p>
          This site is best for travelers planning multi-city trips, slower overland journeys, and
          stays that need to feel coherent from one stop to the next. It is especially useful when
          you want more than a quick Seoul-Busan checklist and want the route itself to make sense.
        </p>

        <h2>How the content is shaped</h2>
        <p>
          RoadToKorea combines editorial route guidance, city-level planning notes, and practical
          travel framing. The goal is not to overwhelm you with every possible attraction, but to
          help you make better decisions about sequence, pacing, and overnight value.
        </p>

        <h2 id="editorial-desk">Who creates the guides</h2>
        <p>
          RoadToKorea is written and reviewed by the RoadToKorea Editorial Desk, led by a
          Korea-based editor. The editor currently lives in Wonju, has a close family connection
          to Chungju through the editor&apos;s in-laws, previously lived in Gangneung, and first
          visited Gyeongju and Jeju on school trips.
        </p>
        <p>
          Those personal connections are labeled on the relevant city pages. They are used to add
          honest context about how a place fits into real life and travel memory, not to imply that
          every venue, timetable, or neighborhood has been inspected recently.
        </p>

        <h2>Experience is labeled, not manufactured</h2>
        <p>
          A guide only uses first-person experience when the editor has a real connection to that
          place. Other city pages rely on route comparison, licensed location photography,
          official tourism and operator references, map context, and human editorial judgment.
          Missing experience is never replaced with a fictional visit.
        </p>

        <h2>Research and AI assistance</h2>
        <p>
          Drafting and organization may be assisted by software, including AI tools. The published
          structure, route logic, source selection, image checks, and final wording are reviewed by
          a person. AI-generated travel images are not used as documentary photography on the
          site. Read the full{' '}
          <Link href="/editorial-policy#research-method">research and AI policy</Link>.
        </p>

        <h2>Ads and commercial transparency</h2>
        <p>
          Some pages may include advertising, sponsored placements, or affiliate links in the
          future. When that happens, the site&apos;s priority remains the same: to keep the travel
          guidance useful, readable, and honest about why a place or product is being shown.
        </p>
      </>
    </StaticPageShell>
  );
}

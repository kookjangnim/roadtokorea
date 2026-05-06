import type { Metadata } from 'next';
import StaticPageShell from '@/components/StaticPageShell';

export const metadata: Metadata = {
  title: 'Contact RoadToKorea',
  description:
    'Contact RoadToKorea for travel feedback, corrections, partnerships, and editorial questions.',
};

export default function ContactPage() {
  return (
    <StaticPageShell
      eyebrow="Contact"
      title="Questions, corrections, and partnership inquiries."
      lede="If you found an error, want to discuss a collaboration, or have a question about how a route or city guide is framed, email is the best way to reach the site."
    >
      <>
        <h2>Email</h2>
        <p>
          Contact: <a href="mailto:sawjyjm@gmail.com">sawjyjm@gmail.com</a>
        </p>

        <h2>Good reasons to get in touch</h2>
        <ul>
          <li>Travel feedback about a city guide or route page</li>
          <li>Corrections for outdated details, broken links, or image issues</li>
          <li>Partnership, sponsorship, or advertising inquiries</li>
          <li>Editorial questions about how RoadToKorea organizes travel content</li>
        </ul>

        <h2>Response expectations</h2>
        <p>
          Messages are reviewed manually, so replies may not be immediate. If your note is about a
          factual correction on a live page, including the exact page URL helps a lot.
        </p>
      </>
    </StaticPageShell>
  );
}

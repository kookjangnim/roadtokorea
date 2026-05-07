import type { Metadata } from 'next';
import StaticPageShell from '@/components/StaticPageShell';
import { getSiteUrl } from '@/lib/site-config';

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the RoadToKorea privacy policy, including cookie use, advertising disclosures, and contact details.',
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <StaticPageShell
      eyebrow="Privacy Policy"
      title="How RoadToKorea handles visitor data and advertising disclosures."
      lede="RoadToKorea keeps data collection minimal, but some information may still be processed through analytics, email communication, and advertising tools."
    >
      <>
        <h2>Overview</h2>
        <p>
          RoadToKorea is a travel information website. Most pages can be viewed without creating an
          account or submitting personal information directly.
        </p>

        <h2>Information you may provide directly</h2>
        <p>
          If you contact the site by email, your name, email address, and the contents of your
          message may be received and used for the purpose of responding to your inquiry.
        </p>

        <h2>Cookies and advertising</h2>
        <p>
          Third-party vendors, including Google, may use cookies to serve ads based on a user&apos;s
          prior visits to this website or other websites. Google&apos;s use of advertising cookies
          enables Google and its partners to serve ads based on your visit to this site and other
          sites on the Internet.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads">Google Ads Settings</a>. You may also
          learn more about opting out of some third-party vendors&apos; uses of cookies for
          personalized advertising at{' '}
          <a href="https://www.aboutads.info/">aboutads.info</a>.
        </p>

        <h2>Analytics and technical logs</h2>
        <p>
          Like most websites, RoadToKorea may collect basic technical information such as browser
          type, device information, referring pages, and general visit activity through hosting,
          analytics, or security tooling used to operate the site.
        </p>

        <h2>Third-party services</h2>
        <p>
          This site may rely on third-party providers for hosting, analytics, media delivery, maps,
          and advertising. Those providers may process limited technical data as part of delivering
          their services.
        </p>

        <h2>Policy updates</h2>
        <p>
          This privacy policy may be updated as the site changes, including when new advertising or
          analytics tools are introduced. Material updates will be reflected on this page.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related questions, email{' '}
          <a href="mailto:sawjyjm@gmail.com">sawjyjm@gmail.com</a>.
        </p>
      </>
    </StaticPageShell>
  );
}

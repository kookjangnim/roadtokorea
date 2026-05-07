import Link from 'next/link';

const footerExplore = [
  { name: 'Seoul to Busan', href: '/routes/seoul/busan' },
  { name: 'Tier 1 Anchors', href: '/tier-1/cities' },
  { name: 'Tier 2 Longer Stays', href: '/tier-2/cities' },
  { name: 'Quiet Detours', href: '/tier-4/cities' },
];

const footerRoutes = [
  { name: 'KTX route logic', href: '/routes/seoul/busan' },
  { name: 'Drive south with stopovers', href: '/routes/seoul/busan' },
  { name: 'Budget bus version', href: '/routes/seoul/busan' },
  { name: 'Slow bicycle corridor', href: '/routes/seoul/busan' },
];

const footerGuidance = [
  'Start with a route, not a city list.',
  'Choose the transport mode that matches the trip pace you actually want.',
  'Promote cities into the itinerary only when they improve the route.',
];

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-inner">
        <div className="footer-about">
          <Link href="/" className="footer-logo">
            RoadToKorea
          </Link>
          <p className="footer-kicker">Travel Korea Slowly</p>
          <p className="footer-about-text">
            Built for travelers who want Korea to feel deeper, calmer, and more lived-in than a
            fast itinerary usually allows.
          </p>
          <div className="footer-highlight-card">
            <p className="footer-highlight-label">Best use of this site</p>
            <p className="footer-highlight-text">
              Choose a corridor first, compare the transport logic, then open city guides only for
              the stops that deserve time.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Explore</h4>
          {footerExplore.map((item) => (
            <Link key={item.name} href={item.href} className="footer-link">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Route Modes</h4>
          {footerRoutes.map((item) => (
            <Link key={item.name} href={item.href} className="footer-link">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">How To Use</h4>
          <div className="footer-guidance-list">
            {footerGuidance.map((item) => (
              <p key={item} className="footer-guidance-item">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <a href="mailto:sawjyjm@gmail.com" className="footer-contact-link">
            sawjyjm@gmail.com
          </a>
          <p className="footer-contact-copy">
            For partnership, feedback, or travel questions about the places covered here.
          </p>
          <div className="rounded-[1.25rem] border border-stone-200 bg-white/80 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-stone-500">
              Independent project
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-700">
              RoadToKorea is a route-first editorial travel project. For corrections, partnerships,
              or privacy questions, email is the main contact channel.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright 2026 RoadToKorea. Route-first Korea travel guides built around pace, sequence,
          and stopover logic.
        </p>
        <div className="footer-bottom-links">
          <Link href="/about" className="footer-policy-link">
            About
          </Link>
          <Link href="/privacy" className="footer-policy-link">
            Privacy Policy
          </Link>
          <Link href="/contact" className="footer-policy-link">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

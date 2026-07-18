import Link from 'next/link';

const footerRoutes = [
  { name: 'Seoul to Busan', href: '/route-1' },
  { name: 'Seoul to Gangneung', href: '/route-2' },
  { name: 'Seoul to Sokcho', href: '/route-3' },
  { name: 'Mokpo to Busan', href: '/route-7' },
];

const footerExplore = [
  { name: 'All routes', href: '/routes' },
  { name: 'City guides', href: '/updated-cities' },
  { name: 'About RoadToKorea', href: '/about' },
  { name: 'Contact & corrections', href: '/contact' },
];

const footerPolicies = [
  { name: 'Editorial & advertising policy', href: '/editorial-policy' },
  { name: 'Privacy policy', href: '/privacy' },
  { name: 'Terms of use', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-callout">
        <div>
          <p>Start with the journey</p>
          <h2>Where will Korea take you?</h2>
        </div>
        <Link href="/routes">
          Explore all routes <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="footer-inner">
        <div className="footer-about">
          <Link href="/" className="footer-logo">RoadToKorea</Link>
          <p className="footer-kicker">Korea, route by route</p>
          <p className="footer-about-text">
            An independent English-language travel guide for slower, clearer journeys across
            South Korea—built around routes, stopovers, and the places between the headlines.
          </p>
          <a href="mailto:sawjyjm@gmail.com" className="footer-email">sawjyjm@gmail.com</a>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Featured routes</h3>
          {footerRoutes.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">{item.name}</Link>
          ))}
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Explore</h3>
          {footerExplore.map((item) => (
            <Link key={item.href} href={item.href} className="footer-link">{item.name}</Link>
          ))}
        </div>

        <div className="footer-section footer-transparency">
          <h3 className="footer-heading">Reader trust</h3>
          <p>
            Commercial relationships never replace route logic. Advertising and affiliate links,
            when used, are disclosed and kept visually separate from editorial navigation.
          </p>
          {footerPolicies.map((item) => (
            <Link key={item.href} href={item.href} className="footer-policy-link">{item.name} ↗</Link>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 RoadToKorea. Independent Korea travel publishing.</p>
        <p>Made for travelers who want the middle of the journey back.</p>
      </div>
    </footer>
  );
}

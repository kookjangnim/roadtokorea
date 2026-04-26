import Link from 'next/link';

const footerExplore = [
  { name: 'Tier 1 Icons', href: '/tier-1/cities' },
  { name: 'Tier 2 Hubs', href: '/tier-2/cities' },
  { name: 'Tier 4 Detours', href: '/tier-4/cities' },
  { name: 'Latest Stories', href: '#journal' },
];

const footerCities = [
  { name: 'Seoul', href: '/tier-1/seoul' },
  { name: 'Busan', href: '/tier-1/busan' },
  { name: 'Jeju', href: '/tier-1/jeju' },
  { name: 'Gyeongju', href: '/tier-2/gyeongju' },
];

const footerGuidance = [
  'Start with flagship cities if this is your first Korea trip.',
  'Use cultural hubs for slower neighborhood-based itineraries.',
  'Use detours when you want local texture beyond standard lists.',
];

export default function Footer() {
  return (
    <footer className="footer-wrap" id="about">
      <div className="footer-inner">
        <div className="footer-about">
          <Link href="/" className="footer-logo">
            RoadToKorea
          </Link>
          <p className="footer-kicker">Field guide for modern Korea travel</p>
          <p className="footer-about-text">
            Built to help travelers move from obvious first stops to places that feel
            more lived-in, local, and memorable.
          </p>
          <div className="footer-highlight-card">
            <p className="footer-highlight-label">Best use of this site</p>
            <p className="footer-highlight-text">
              Pick a trip tier, compare the cities, then use story pages to shape the route.
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
          <h4 className="footer-heading">Featured Cities</h4>
          {footerCities.map((item) => (
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
          <div className="footer-socials">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              className="footer-social-icon"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.723 2.082-1.132 3.478-1.188.964-.038 1.87.043 2.716.243-.015-.91-.16-1.636-.476-2.22-.543-.982-1.49-1.5-2.738-1.5l-.073.002c-.88.025-1.62.328-2.14.879l-1.46-1.42c.849-.874 1.97-1.37 3.248-1.44l.181-.005c1.914 0 3.39.77 4.267 2.228.62 1.032.907 2.327.889 3.958.048.027.094.053.14.082 1.2.712 2.105 1.69 2.605 2.836.7 1.606.755 4.262-1.355 6.323-1.83 1.79-4.076 2.584-7.27 2.606z" />
                <path d="M14.729 14.04c-.725-.273-1.616-.412-2.648-.412-.036 0-.071 0-.107.001-.985.039-1.758.283-2.303.727-.497.404-.735.917-.709 1.525.052.95.783 1.593 1.96 1.726.14.016.282.023.425.023.935 0 1.763-.32 2.397-.924.547-.52.906-1.212 1.085-2.074a5.433 5.433 0 00-.1-.592z" />
              </svg>
            </a>
            <a
              href="mailto:sawjyjm@gmail.com"
              aria-label="Email"
              className="footer-social-icon"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="20"
                height="20"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4l-10 8L2 4" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright 2026 RoadToKorea. Curated routes, regional context, and local-first city
          guides.
        </p>
        <div className="footer-bottom-links">
          <a href="#about" className="footer-policy-link">
            About
          </a>
          <a href="#" className="footer-policy-link">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

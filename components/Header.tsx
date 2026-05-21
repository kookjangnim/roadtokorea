'use client';

import { useState } from 'react';
import Link from 'next/link';

const featuredRoutes = [
  { name: 'Route 1', href: '/route-1' },
  { name: 'Route 2', href: '/route-2' },
  { name: 'Busan arrival', href: '/route-1/busan' },
  { name: 'Gangneung junction', href: '/route-2/gangneung' },
];

const primaryLinks = [
  { name: 'Start Here', href: '/' },
  { name: 'Route Guide', href: '/routes' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header-wrap">
      <div className="header-inner">
        <div className="header-brand">
          <Link href="/" className="header-logo">
            RoadToKorea
          </Link>
          <p className="header-tagline">
            Korea travel, organized by route logic instead of tourist noise.
          </p>
        </div>

        <nav className="header-nav-desktop" aria-label="Main navigation">
          {primaryLinks.map((link) => (
            <Link key={link.name} href={link.href} className="header-nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="header-featured-desktop" aria-label="Featured routes">
          <span className="header-featured-label">Featured</span>
          <div className="header-featured-links">
            {featuredRoutes.map((route) => (
              <Link key={route.name} href={route.href} className="header-featured-link">
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        <button
          className="header-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span className={`hamburger-bar ${mobileOpen ? 'open-top' : ''}`} />
          <span className={`hamburger-bar ${mobileOpen ? 'open-mid' : ''}`} />
          <span className={`hamburger-bar ${mobileOpen ? 'open-bot' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="header-mobile-menu" aria-label="Mobile navigation">
          <div className="header-mobile-group">
            <span className="header-mobile-label">Browse</span>
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="header-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="header-mobile-group">
            <span className="header-mobile-label">Featured Routes</span>
            {featuredRoutes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="header-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>

          <div className="header-mobile-note">
            Plan from the route first, then branch into hubs, junctions, and quieter local stops.
          </div>
        </nav>
      )}
    </header>
  );
}

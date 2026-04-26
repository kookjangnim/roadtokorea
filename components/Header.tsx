'use client';

import { useState } from 'react';
import Link from 'next/link';

const featuredCities = [
  { name: 'Seoul', href: '/tier-1/seoul' },
  { name: 'Busan', href: '/tier-1/busan' },
  { name: 'Jeju', href: '/tier-1/jeju' },
  { name: 'Gyeongju', href: '/tier-2/gyeongju' },
];

const primaryLinks = [
  { name: 'Start Here', href: '/' },
  { name: 'Icons', href: '/tier-1/cities' },
  { name: 'Hubs', href: '/tier-2/cities' },
  { name: 'Detours', href: '/tier-4/cities' },
  { name: 'Latest Stories', href: '#journal' },
  { name: 'About', href: '#about' },
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
            Korea travel, organized by trip depth instead of tourist noise.
          </p>
        </div>

        <nav className="header-nav-desktop" aria-label="Main navigation">
          {primaryLinks.map((link) => (
            <Link key={link.name} href={link.href} className="header-nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="header-featured-desktop" aria-label="Featured destinations">
          <span className="header-featured-label">Featured</span>
          <div className="header-featured-links">
            {featuredCities.map((city) => (
              <Link key={city.name} href={city.href} className="header-featured-link">
                {city.name}
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
            <span className="header-mobile-label">Featured Cities</span>
            {featuredCities.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="header-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {city.name}
              </Link>
            ))}
          </div>

          <div className="header-mobile-note">
            Plan with the big names first, then branch into regional hubs and quieter local stops.
          </div>
        </nav>
      )}
    </header>
  );
}

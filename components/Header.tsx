'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const featuredRoutes = [
  { name: 'Seoul → Busan', href: '/route-1', note: 'The classic southbound line' },
  { name: 'Seoul → Gangneung', href: '/route-2', note: 'Mountains into the East Sea' },
  { name: 'Mokpo → Busan', href: '/route-7', note: 'The southern island road' },
];

const primaryLinks = [
  { name: 'Routes', href: '/routes' },
  { name: 'City Guides', href: '/updated-cities' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header-wrap">
      <div className="header-inner">
        <Link href="/" className="header-logo" aria-label="RoadToKorea home">
          <span className="header-logo-mark" aria-hidden="true"><i /><i /></span>
          <span className="header-logo-copy">
            <strong>RoadToKorea</strong>
            <small>Korea, route by route</small>
          </span>
        </Link>

        <nav className="header-nav-desktop" aria-label="Main navigation">
          {primaryLinks.map((link) => {
            const current = link.href === '/routes'
              ? pathname === '/routes' || /^\/route-\d/.test(pathname)
              : pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`header-nav-link ${current ? 'is-current' : ''}`}
                aria-current={current ? 'page' : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <span className="header-independent">Independent travel guide</span>
          <Link href="/routes" className="header-plan-link">
            Plan a journey <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <button
          className="header-hamburger"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span className={`hamburger-bar ${mobileOpen ? 'open-top' : ''}`} />
          <span className={`hamburger-bar ${mobileOpen ? 'open-mid' : ''}`} />
          <span className={`hamburger-bar ${mobileOpen ? 'open-bot' : ''}`} />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`header-mobile-menu ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <nav className="header-mobile-menu__inner" aria-label="Mobile navigation">
          <div className="header-mobile-group">
            <span className="header-mobile-label">Explore</span>
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="header-mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                <span>{link.name}</span><i aria-hidden="true">↗</i>
              </Link>
            ))}
          </div>

          <div className="header-mobile-group header-mobile-group--routes">
            <span className="header-mobile-label">Start with a route</span>
            {featuredRoutes.map((route, index) => (
              <Link
                key={route.name}
                href={route.href}
                className="header-mobile-route"
                onClick={() => setMobileOpen(false)}
              >
                <b>0{index + 1}</b>
                <span><strong>{route.name}</strong><small>{route.note}</small></span>
              </Link>
            ))}
          </div>

          <div className="header-mobile-note">
            <span>RoadToKorea</span>
            Plan the line first. Keep only the cities that make the journey better.
          </div>
        </nav>
      </div>
    </header>
  );
}

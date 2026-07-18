import Image from 'next/image';
import Link from 'next/link';
import AdSenseUnit from '@/components/AdSenseUnit';
import RouteFinder from '@/components/home/RouteFinder';
import type { RouteData } from '@/data/routeStopovers';
import { getAdsenseClient } from '@/lib/site-config';

const routeImages: Record<string, string> = {
  '1': 'https://images.unsplash.com/photo-1575869781339-47700b53a5ca?auto=format&fit=crop&w=1600&q=82',
  '2': '/images/clipartkorea/gangneung/tc02820005412.jpg',
  '3': '/images/clipartkorea/sokcho/tc00240020235.jpg',
  '4': 'https://images.unsplash.com/photo-1575869781339-47700b53a5ca?auto=format&fit=crop&w=1600&q=82',
  '5': '/images/clipartkorea/yeosu/tc00240046415.jpg',
  '6': '/images/clipartkorea/mokpo/tc00240029851.jpg',
  '7': 'https://images.unsplash.com/photo-1575869781339-47700b53a5ca?auto=format&fit=crop&w=1600&q=82',
  '8': '/images/clipartkorea/haenam/tc00240076791.jpg',
};

const routeThemes: Record<string, { eyebrow: string; color: string }> = {
  '1': { eyebrow: 'The classic southbound journey', color: '#d56b45' },
  '2': { eyebrow: 'Mountains into the East Sea', color: '#4a8ea0' },
  '3': { eyebrow: 'Northern peaks and coast', color: '#668060' },
  '4': { eyebrow: 'The full east-coast descent', color: '#ca765f' },
  '5': { eyebrow: 'Food, hanok and southern light', color: '#a77a43' },
  '6': { eyebrow: 'West coast and port cities', color: '#6379a1' },
  '7': { eyebrow: 'Islands, harbors and slow roads', color: '#3e887d' },
  '8': { eyebrow: 'Honam to Korea’s land end', color: '#855f7c' },
};

function getRouteImage(route: RouteData) {
  return routeImages[route.routeCode] ?? '/images/clipartkorea/mokpo/tc00240029851.jpg';
}

function getStops(route: RouteData) {
  const stops = [
    route.from,
    ...route.transports.car.stopovers.map((stopover) => stopover.city),
    route.to,
  ];

  return stops.filter((city, index) => stops.indexOf(city) === index);
}

function getRoutePitch(route: RouteData) {
  if (route.routeCode === '1') return 'The essential Seoul to Busan line, rebuilt around the cities and pauses most travelers rush past.';
  if (route.routeCode === '2') return 'A clean eastbound opening through mountain towns, junction cities, and the Gangneung coast.';
  if (route.routeCode === '7') return 'A harbor-to-harbor island journey that lets the final Busan arrival unfold slowly.';
  if (route.routeCode === '8') return 'A deep Honam descent through food, civic history, port life, and Korea’s southern land end.';
  return route.bestUseCases[0] ?? route.destinationPitch;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface HomeLandingProps {
  routes: RouteData[];
}

export default function HomeLanding({ routes }: HomeLandingProps) {
  const featured = routes[0];
  const remainingRoutes = routes.slice(1);
  const totalCities = new Set(routes.flatMap((route) => getStops(route))).size;
  const finderRoutes = routes.map((route) => ({
    code: route.routeCode,
    from: route.from,
    to: route.to,
    href: route.href,
  }));

  return (
    <main className="home-landing">
      <section className="home-hero">
        <Image
          src="/images/clipartkorea/mokpo/tc00240029851.jpg"
          alt="Mokpo harbor and the city seen from Yudalsan Mountain"
          fill
          priority
          sizes="100vw"
          className="home-hero__image"
        />
        <div className="home-hero__veil" />
        <div className="home-hero__grain" aria-hidden="true" />

        <div className="home-shell home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-kicker home-kicker--light">
              <span /> Independent guide to South Korea
            </p>
            <h1>
              Don&apos;t just visit Korea.
              <em>Understand the way through it.</em>
            </h1>
            <p className="home-hero__lede">
              Thoughtful routes, meaningful stopovers, and local city guides for travelers who
              want the journey to matter as much as the destination.
            </p>
          </div>

          <RouteFinder routes={finderRoutes} />

          <div className="home-hero__proof" aria-label="RoadToKorea guide coverage">
            <div><strong>{routes.length}</strong><span>curated routes</span></div>
            <div><strong>{totalCities}+</strong><span>connected cities</span></div>
            <div><strong>4</strong><span>ways to travel</span></div>
          </div>
        </div>

        <a className="home-hero__scroll" href="#signature-route">
          <span>Begin the journey</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="home-intro">
        <div className="home-shell home-intro__grid">
          <p className="home-kicker"><span /> A different way to see Korea</p>
          <div>
            <h2>The route is not the space between destinations. <em>It is the story.</em></h2>
            <p>
              Most travel guides tell you where to go. RoadToKorea also tells you what belongs
              between here and there—where to pause, what to skip, and how each place changes the
              rhythm of the trip.
            </p>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="home-signature" id="signature-route">
          <div className="home-shell">
            <div className="home-section-heading">
              <div>
                <p className="home-kicker"><span /> Signature journey</p>
                <h2>Start with the line that changed modern Korea.</h2>
              </div>
              <p>
                A familiar route, edited for travelers who want the middle to feel as memorable
                as the two cities at either end.
              </p>
            </div>

            <article className="signature-card">
              <Link href={featured.href} className="signature-card__visual">
                <Image
                  src={getRouteImage(featured)}
                  alt={`${featured.from} to ${featured.to} route guide`}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  className="signature-card__image"
                />
                <div className="signature-card__overlay" />
                <span className="signature-card__number">01</span>
                <span className="signature-card__caption">Haeundae, Busan · The arrival</span>
              </Link>

              <div className="signature-card__body">
                <p className="signature-card__eyebrow">Route {featured.routeCode} · {routeThemes[featured.routeCode]?.eyebrow}</p>
                <h3>{featured.from} <i>to</i> {featured.to}</h3>
                <p className="signature-card__pitch">{getRoutePitch(featured)}</p>

                <dl className="signature-card__meta">
                  <div>
                    <dt>Driving line</dt>
                    <dd>{featured.transports.car.totalTravelTime}</dd>
                  </div>
                  <div>
                    <dt>Distance</dt>
                    <dd>{featured.transports.car.totalDistance}</dd>
                  </div>
                </dl>

                <div className="signature-card__stops" aria-label="Key stops on Route 1">
                  {getStops(featured).slice(0, 6).map((city, index) => (
                    <span key={city}>
                      <i style={{ backgroundColor: index === 0 || index === 5 ? '#d56b45' : undefined }} />
                      {city}
                    </span>
                  ))}
                </div>

                <Link href={featured.href} className="home-text-link">
                  Open Route 1 <ArrowIcon />
                </Link>
              </div>
            </article>
          </div>
        </section>
      ) : null}

      <section className="home-routes">
        <div className="home-shell">
          <div className="home-section-heading home-section-heading--compact">
            <div>
              <p className="home-kicker"><span /> Choose your direction</p>
              <h2>Eight routes. Eight versions of Korea.</h2>
            </div>
            <Link href="/routes" className="home-text-link home-text-link--dark">
              View all route details <ArrowIcon />
            </Link>
          </div>

          <div className="route-editorial-grid">
            {remainingRoutes.map((route, index) => {
              const theme = routeThemes[route.routeCode];
              return (
                <article
                  key={route.routeCode}
                  className={`route-editorial-card ${index < 2 ? 'route-editorial-card--wide' : ''}`}
                  style={{ '--route-accent': theme?.color ?? '#d56b45' } as React.CSSProperties}
                >
                  <Link href={route.href} className="route-editorial-card__link">
                    <Image
                      src={getRouteImage(route)}
                      alt={`${route.from} to ${route.to} route`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className="route-editorial-card__image"
                    />
                    <div className="route-editorial-card__overlay" />
                    <span className="route-editorial-card__code">0{route.routeCode}</span>
                    <div className="route-editorial-card__body">
                      <p>{theme?.eyebrow}</p>
                      <h3>{route.from} <i>to</i> {route.to}</h3>
                      <span className="route-editorial-card__cta">Explore route <ArrowIcon /></span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <AdSenseUnit
        client={getAdsenseClient()}
        slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME}
      />

      <section className="home-method">
        <div className="home-shell home-method__grid">
          <div className="home-method__image-wrap">
            <Image
              src="/images/clipartkorea/haenam/tc00240034550.jpg"
              alt="A real travel view from Korea's land end in Haenam"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
              className="home-method__image"
            />
            <span>Road notes, not bucket lists</span>
          </div>

          <div className="home-method__body">
            <p className="home-kicker home-kicker--light"><span /> How to use this guide</p>
            <h2>Build the trip in the order you will actually live it.</h2>

            <ol className="home-method__steps">
              <li>
                <span>01</span>
                <div><h3>Choose the line</h3><p>Start with a route whose geography and pace match the Korea you want to see.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><h3>Compare the pace</h3><p>Switch between rail, car, bus, and bicycle logic before committing to stops.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><h3>Keep only the places that earn time</h3><p>Open city chapters when they improve the journey—not because a checklist says so.</p></div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="home-trust">
        <div className="home-shell home-trust__grid">
          <div>
            <p className="home-kicker"><span /> Built as a guide, not a feed</p>
            <h2>Travel information should feel useful before it feels monetized.</h2>
          </div>

          <div className="home-trust__content">
            <p>
              RoadToKorea is an independent editorial project. Route logic, practical trade-offs,
              contact details, corrections, and commercial disclosures stay visible so readers
              can understand how the guide is organized.
            </p>
            <div className="home-trust__links">
              <Link href="/about">About the project <ArrowIcon /></Link>
              <Link href="/editorial-policy">Editorial &amp; advertising policy <ArrowIcon /></Link>
              <Link href="/contact">Send a correction <ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

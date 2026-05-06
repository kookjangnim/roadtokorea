import { tier1Cities } from '@/data/tier1Cities';
import { tier2Cities } from '@/data/tier2Cities';
import { tier4Cities } from '@/data/tier4Cities';

export interface SeoulRouteOption {
  slug: string;
  name: string;
  href: string;
  tier: number;
  image: string;
  headline: string;
  description: string;
  routePitch: string;
  transport: string;
  travelTime: string;
  idealStay: string;
  bestFor: string;
  nextMove: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const routeMeta: Record<
  string,
  Omit<SeoulRouteOption, 'name' | 'href' | 'tier' | 'image' | 'headline' | 'description' | 'slug'>
> = {
  busan: {
    routePitch: 'The clearest southbound contrast to Seoul: sea air, denser seafood culture, and a slower urban rhythm.',
    transport: 'KTX',
    travelTime: 'About 2.5 to 3 hours',
    idealStay: '2 to 3 nights',
    bestFor: 'First Korea trips that want one major second city',
    nextMove: 'Pair with Gyeongju if you want history before the coast.',
    coordinates: { lat: 35.1796, lng: 129.0756 },
  },
  jeju: {
    routePitch: 'Best when the trip needs breathing room, landscapes, and a fuller break from the capital.',
    transport: 'Flight',
    travelTime: 'About 1 hour in the air, plus airport transfer time',
    idealStay: '3 to 4 nights',
    bestFor: 'Nature-heavy trips and travelers who want a real reset',
    nextMove: 'Use it as a longer island chapter rather than a quick add-on.',
    coordinates: { lat: 33.4996, lng: 126.5312 },
  },
  gangneung: {
    routePitch: 'A clean eastbound move from Seoul when you want sea views, cafes, and a calmer tempo fast.',
    transport: 'KTX',
    travelTime: 'About 2 hours',
    idealStay: '1 to 2 nights',
    bestFor: 'Weekend escapes, coffee routes, and easy coastal slow travel',
    nextMove: 'Works well before Sokcho-style east coast extensions later.',
    coordinates: { lat: 37.7519, lng: 128.8761 },
  },
  yeosu: {
    routePitch: 'A southern detour for night views, island atmosphere, and a softer harbor-city mood.',
    transport: 'KTX',
    travelTime: 'About 3 to 3.5 hours',
    idealStay: '1 to 2 nights',
    bestFor: 'Couples, coastal routes, and slower southern itineraries',
    nextMove: 'Pairs naturally with Suncheon or Busan on a longer southbound trip.',
    coordinates: { lat: 34.7604, lng: 127.6622 },
  },
  gyeongju: {
    routePitch: 'The best route chapter after Seoul if you want historical weight without losing travel flow.',
    transport: 'KTX plus local transfer',
    travelTime: 'About 2.5 to 3.5 hours total',
    idealStay: '1 to 2 nights',
    bestFor: 'Culture-first itineraries and Seoul to Busan routes',
    nextMove: 'Almost always gets stronger when followed by Busan.',
    coordinates: { lat: 35.8562, lng: 129.2247 },
  },
  wonju: {
    routePitch: 'A near-Seoul slowdown for design-minded travelers who want mountains, museums, and a quieter pace.',
    transport: 'Regional rail or intercity bus',
    travelTime: 'About 1 to 1.5 hours',
    idealStay: '1 to 2 nights',
    bestFor: 'Short slow-travel breaks that do not need a long transfer',
    nextMove: 'Useful as an easy first detour before going deeper east.',
    coordinates: { lat: 37.3422, lng: 127.9202 },
  },
  chungju: {
    routePitch: 'An inland route choice for lakeside calm, lower density, and a less copied Korea chapter.',
    transport: 'Intercity bus or regional rail',
    travelTime: 'About 1.5 to 2 hours',
    idealStay: '1 night',
    bestFor: 'Detour-focused travelers and inland pacing',
    nextMove: 'Fits best when the trip values atmosphere over landmark count.',
    coordinates: { lat: 36.991, lng: 127.926 },
  },
  mungyeong: {
    routePitch: 'A threshold city for travelers who want the inland line to feel topographic, historic, and clearly different from the default Seoul-to-Busan corridor.',
    transport: 'Intercity bus or car',
    travelTime: 'About 2.5 to 3 hours',
    idealStay: '1 night',
    bestFor: 'Inland route travelers, cyclists, and pass-country pacing',
    nextMove: 'Pairs naturally with Chungju before it or Andong after it.',
    coordinates: { lat: 36.5866, lng: 128.1868 },
  },
  andong: {
    routePitch: 'One of the strongest inland city chapters after Seoul if the route should gain cultural depth instead of staying purely logistical.',
    transport: 'KTX plus transfer, intercity bus, or car',
    travelTime: 'About 2.5 to 3.5 hours',
    idealStay: '1 to 2 nights',
    bestFor: 'Culture-first inland routes and slower Seoul-to-Busan sequences',
    nextMove: 'Often gets stronger when paired with Mungyeong before it or Gyeongju after it.',
    coordinates: { lat: 36.5715, lng: 128.7269 },
  },
  yeongdeok: {
    routePitch: 'A route-first east coast stop for travelers who want seafood identity, smaller-port texture, and a coast that feels regionally specific before Busan.',
    transport: 'Car or bus',
    travelTime: 'About 4.5 to 5.5 hours',
    idealStay: '1 night',
    bestFor: 'Coastal self-drive routes, fishing-port atmosphere, and food-led stopovers',
    nextMove: 'Pairs naturally with Pohang before the final Busan descent.',
    coordinates: { lat: 36.4151, lng: 129.3654 },
  },
  pohang: {
    routePitch: 'A late-coast hinge city that helps the long eastbound line land cleanly before Busan.',
    transport: 'KTX plus transfer, bus, or car',
    travelTime: 'About 3 to 4 hours by rail mix, longer by coast drive',
    idealStay: '1 night',
    bestFor: 'Late-route resets and controlled southeast handoffs into Busan',
    nextMove: 'Best used as the final major coast-facing chapter before Busan.',
    coordinates: { lat: 36.0113, lng: 129.3642 },
  },
};

export function getSeoulRouteOptions(): SeoulRouteOption[] {
  const mergedCities = [
    ...Object.values(tier1Cities).map((city) => ({ ...city, tier: 1 })),
    ...Object.values(tier2Cities).map((city) => ({ ...city, tier: 2 })),
    ...Object.values(tier4Cities).map((city) => ({ ...city, tier: 4 })),
  ];

  return mergedCities
    .filter((city) => city.slug !== 'seoul' && routeMeta[city.slug])
    .map((city) => ({
      slug: city.slug,
      name: city.name,
      href: `/tier-${city.tier}/${city.slug}`,
      tier: city.tier,
      image: city.heroImage,
      headline: city.headline,
      description: city.description,
      ...routeMeta[city.slug],
    }))
    .sort((a, b) => a.tier - b.tier || a.name.localeCompare(b.name));
}

export function getSeoulRouteOptionBySlug(citySlug: string): SeoulRouteOption | null {
  return getSeoulRouteOptions().find((route) => route.slug === citySlug) ?? null;
}

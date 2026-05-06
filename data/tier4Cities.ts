export type { Hotspot } from './tier2Cities';
import type { Hotspot } from './tier2Cities';

export interface TierCityData {
  slug: string;
  name: string;
  heroImage: string;
  headline: string;
  description: string;
  culturalInsight: string;
  hotspots: Hotspot[];
}

export const tier4Cities: Record<string, TierCityData> = {
  cheonan: {
    name: 'Cheonan',
    slug: 'cheonan',
    headline: 'The First Low-Stakes Break',
    heroImage: '/images/placeholder.png',
    description: 'An easy early route pause where the Seoul departure softens before the corridor asks for bigger decisions.',
    culturalInsight:
      'Cheonan matters because not every stop on Route 1 needs to carry heavy narrative weight. It is the kind of city that makes the first southbound block feel paced rather than endured.',
    hotspots: []
  },
  gumi: {
    name: 'Gumi',
    slug: 'gumi',
    headline: 'The Mid-Corridor Breather',
    heroImage: '/images/placeholder.png',
    description: 'A practical industrial-riverside city that helps the direct corridor stay flexible without turning into a major detour.',
    culturalInsight:
      'Gumi is useful when the route needs an honest middle pause instead of a destination city. Its value is service, timing, and the ability to keep the corridor calm.',
    hotspots: []
  },
  changnyeong: {
    name: 'Changnyeong',
    slug: 'changnyeong',
    headline: 'The Lower-River Calm',
    heroImage: '/images/placeholder.png',
    description: 'A quieter Nakdong-side chapter where the route regains calm before the final approach to Busan.',
    culturalInsight:
      'Changnyeong matters when the late inland or cycling route needs to exhale. It gives the southern half of Route 1 a lower-pressure reset before the final city energy returns.',
    hotspots: []
  },
  uljin: {
    name: 'Uljin',
    slug: 'uljin',
    headline: 'The Long-Coast Continuity',
    heroImage: '/images/placeholder.png',
    description: 'A quieter east-coast county that keeps the shoreline route broad, open, and less dependent on only larger port cities.',
    culturalInsight:
      'Uljin earns route space because it protects the continuity of the coast. It keeps the east-sea line feeling expansive rather than collapsing into just Gangneung and Pohang.',
    hotspots: []
  },
  sangju: {
    name: 'Sangju',
    slug: 'sangju',
    headline: 'The River-Corridor Hinge',
    heroImage: '/images/placeholder.png',
    description: 'A practical inland city where pass-country effort relaxes into the broader Nakdong southbound flow.',
    culturalInsight:
      'Sangju matters less as a stand-alone headline city and more as a route hinge. It is where the Seoul-to-Busan inland line stops feeling like a sequence of thresholds and begins to read clearly as a longer river-led corridor.',
    hotspots: []
  },
  yeongdeok: {
    name: 'Yeongdeok',
    slug: 'yeongdeok',
    headline: 'The Coastal Flavor Anchor',
    heroImage: '/images/placeholder.png',
    description: 'A smaller east-coast town where seafood identity, port texture, and shoreline air make the route feel regionally specific.',
    culturalInsight:
      'Yeongdeok is less about major-city concentration and more about clarity of flavor. It gives the east coast line a local face, especially when the route needs food, fishing-port character, and one smaller-town chapter before larger southeastern cities take over.',
    hotspots: []
  },
  pohang: {
    name: 'Pohang',
    slug: 'pohang',
    headline: 'The Late-Coast Hinge',
    heroImage: '/images/placeholder.png',
    description: 'A sea-facing industrial city that works as the strongest hinge between the long east coast and the final Busan approach.',
    culturalInsight:
      'Pohang matters because it turns the last stretch of the coast into a controlled handoff instead of a rushed descent. It combines service infrastructure, shoreline mood, and late-route practicality better than smaller coastal stops can.',
    hotspots: []
  },
  mungyeong: {
    name: 'Mungyeong',
    slug: 'mungyeong',
    headline: 'The Pass-Country Threshold',
    heroImage: '/images/placeholder.png',
    description: 'A mountain-pass city where the route narrows, the terrain becomes meaningful, and crossing the peninsula starts to feel earned.',
    culturalInsight:
      'Mungyeong is less about urban density and more about transition. The city carries the logic of gates, passes, and crossings, so staying here makes sense when the route should feel shaped by geography rather than only by transfer time.',
    hotspots: []
  },
  wonju: {
    name: 'Wonju',
    slug: 'wonju',
    headline: 'Nature\'s Embrace',
    heroImage: '/images/destinations/Wonju_Hiker_on_mountain_overlooking_city_1b7177f12b.jpeg',
    description: 'A serene escape where majestic mountains and tranquil temples offer a profound sense of peace.',
    culturalInsight: 'Wonju is defined by its deep connection to nature, offering a spiritual retreat away from the bustling city life. The harmony between ancient traditions and untouched landscapes creates an atmosphere of profound stillness.',
    hotspots: [] // Dynamic hotspots will be loaded from destinations.ts
  },
  chungju: {
    name: 'Chungju',
    slug: 'chungju',
    headline: 'The Lakeside Retreat',
    heroImage: '/images/destinations/Chungju_Lake_ferry_gliding_through_morning_mist_ae1d0cf8dc.jpeg',
    description: 'Surrounded by calm waters and lush landscapes, Chungju is a hidden gem for relaxation and natural beauty.',
    culturalInsight: 'The tranquil waters of Chungju inspire a slower pace of life, reflecting the harmonious balance of Korea\'s inland beauty. From misty morning lakes to quiet forest trails, Chungju offers a perfect sanctuary for those seeking stillness.',
    hotspots: [] // Dynamic hotspots will be loaded from destinations.ts
  }
};

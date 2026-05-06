export interface Hotspot {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt?: string;
  author?: string;
  sourceLink?: string;
  tags: string[];
}

export interface TierCityData {
  slug: string;
  name: string;
  heroImage: string;
  headline: string;
  description: string;
  culturalInsight: string;
  hotspots: Hotspot[];
}

export const tier2Cities: Record<string, TierCityData> = {
  daejeon: {
    slug: 'daejeon',
    name: 'Daejeon',
    heroImage: '/images/placeholder.png',
    headline: 'The Clean Central Split',
    description: 'A practical central-city chapter where hot-spring calm, research-district rhythm, and easy transport make the route easier to manage.',
    culturalInsight:
      'Daejeon matters on Route 1 because it is one of the easiest places to divide the Seoul-to-Busan line without forcing a dramatic detour. Its value is in stability, clean timing, and a central-city rhythm that lets the trip breathe.',
    hotspots: []
  },
  daegu: {
    slug: 'daegu',
    name: 'Daegu',
    heroImage: '/images/cities/daegu.jpg',
    headline: 'The Southern Urban Reset',
    description: 'A market-rich southern city where food, medicine streets, and denser urban rhythm sharpen the route before the final southeast push.',
    culturalInsight:
      'Daegu is one of the strongest reset cities on Route 1. It gives the inland line a dose of southern energy, practical resupply, and evening life without losing the logic of continuing toward Busan.',
    hotspots: []
  },
  andong: {
    slug: 'andong',
    name: 'Andong',
    heroImage: '/images/cities/andong.jpg',
    headline: 'The Inland Cultural Anchor',
    description: 'A slow, weighty inland city where Confucian memory, river geography, and regional food make the route feel authored instead of accidental.',
    culturalInsight:
      'Andong matters because it adds cultural gravity to inland travel. The city does not just break a journey south; it deepens it, turning the route into a chapter about memory, ritual, food, and the logic of staying with purpose.',
    hotspots: []
  },
  gyeongju: {
    slug: 'gyeongju',
    name: 'Gyeongju',
    heroImage: '/images/cities/gyeongju.jpg',
    headline: 'The Museum Without Walls',
    description: 'Step back in time in the ancient capital of the Silla Kingdom, where royal tombs, millennia-old temples, and timeless relics seamlessly blend with modern Korean life.',
    culturalInsight: 'Gyeongju is a living testament to Korea\'s golden age. Here, history is not confined to museums but is breathed in the air, walked upon in the streets, and felt in the shadows of the monumental burial mounds that dot the landscape.',
    hotspots: [] // Hotspots are derived dynamically from destinations.ts
  }
};

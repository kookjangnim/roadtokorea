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
  gyeongju: {
    slug: 'gyeongju',
    name: 'Gyeongju',
    heroImage: '/images/destinations/gyeongju-hero.jpg', 
    headline: 'The Museum Without Walls',
    description: 'Step back in time in the ancient capital of the Silla Kingdom, where royal tombs, millennia-old temples, and timeless relics seamlessly blend with modern Korean life.',
    culturalInsight: 'Gyeongju is a living testament to Korea\'s golden age. Here, history is not confined to museums but is breathed in the air, walked upon in the streets, and felt in the shadows of the monumental burial mounds that dot the landscape.',
    hotspots: [] // Hotspots are derived dynamically from destinations.ts
  }
};

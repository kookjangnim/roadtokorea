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

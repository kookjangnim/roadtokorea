import registry from './reviewedCityQualityRegistry.json';

export type QualityPackStatus = {
  label: string;
  status: 'ready' | 'tracked';
};

export const reviewedCityQualityRegistry = registry as {
  reviewedCities: string[];
  supportTerms: Record<string, string[]>;
};

export function isReviewedCity(citySlug: string) {
  return reviewedCityQualityRegistry.reviewedCities.includes(citySlug.toLowerCase());
}

export function getCityQualityPackStatus(citySlug: string): QualityPackStatus[] {
  if (!isReviewedCity(citySlug)) return [];

  return [
    { label: 'Past and present story', status: 'ready' },
    { label: 'Local support map', status: 'ready' },
    { label: 'Image production slots', status: 'tracked' },
    { label: 'English search intent', status: 'ready' },
  ];
}

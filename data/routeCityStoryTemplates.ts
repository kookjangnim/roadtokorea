import storyTemplates from './routeCityStoryTemplates.json';

export interface RouteCityStoryTemplate {
  city: string;
  routeSlug: string;
  historicalWeight: string;
  modernIdentity: string;
  routeMeaning: string;
  imageBrief: string;
  qualityBar: string[];
}

export const routeCityStoryTemplates =
  storyTemplates as Record<string, RouteCityStoryTemplate>;

export function getRouteCityStoryTemplate(citySlug: string): RouteCityStoryTemplate | null {
  return routeCityStoryTemplates[citySlug] ?? null;
}

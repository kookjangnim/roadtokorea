export type CityDemandTier = 'flagship' | 'major' | 'regional' | 'stopover';

export type CityGuideSourceRange = {
  start: string;
  end?: string;
};

export type CityGuideTopic = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  sourceRanges?: CityGuideSourceRange[];
};

const demandTierByCity: Record<string, CityDemandTier> = {
  seoul: 'flagship',
  busan: 'flagship',
  jeju: 'flagship',
  gyeongju: 'major',
  gangneung: 'major',
  jeonju: 'major',
  incheon: 'major',
  yeosu: 'major',
  sokcho: 'major',
  daegu: 'major',
  andong: 'regional',
  suwon: 'regional',
  gwangju: 'regional',
  daejeon: 'regional',
  chuncheon: 'regional',
  mokpo: 'regional',
  pohang: 'regional',
};

const overviewTopic: CityGuideTopic = {
  slug: 'overview',
  title: 'Full city guide',
  eyebrow: 'Start here',
  summary: 'Read the complete editorial guide, then return to the city hub for focused planning.',
};

const seoulTopics: CityGuideTopic[] = [
  {
    slug: 'first-trip',
    title: 'First trip to Seoul',
    eyebrow: '3–5 day foundation',
    summary: 'Build a first visit around the historic center, markets, the Han River, and one modern district.',
    sourceRanges: [
      { start: 'A First Seoul Visit: Build a Three-to-Five-Day Foundation', end: 'Seoul for Returning Travelers' },
      { start: 'Suggested Ways to Use the Guide', end: 'Moving On from Seoul' },
    ],
  },
  {
    slug: 'transport',
    title: 'Airport, city, and onward transport',
    eyebrow: 'Move without losing the day',
    summary: 'Choose between airport rail, buses, taxis, city transit, trains, and intercity terminals.',
    sourceRanges: [
      { start: 'From the Airport, Around Seoul, and On to the Next City', end: 'Suggested Ways to Use the Guide' },
    ],
  },
  {
    slug: 'neighborhoods',
    title: 'Neighborhoods for repeat visits',
    eyebrow: 'Go beyond landmarks',
    summary: 'Use Mangwon, Seochon, Mullae, Euljiro, Seongsu, and other districts as complete travel days.',
    sourceRanges: [
      { start: 'Seoul for Returning Travelers', end: 'Everyday Seoul: PC Bang, Jjimjilbang, and Late-Night Culture' },
    ],
  },
  {
    slug: 'pc-bang',
    title: 'PC bang and esports guide',
    eyebrow: 'Everyday gaming culture',
    summary: 'Understand non-member access, game accounts, payment friction, T1 Base Camp, and LoL Park.',
    sourceRanges: [
      { start: 'How to use a PC bang', end: 'How to use a jjimjilbang' },
      { start: 'PC bangs international visitors repeatedly mention', end: 'Jjimjilbangs international visitors repeatedly mention' },
    ],
  },
  {
    slug: 'jjimjilbang',
    title: 'Jjimjilbang guide',
    eyebrow: 'Bathhouse culture explained',
    summary: 'Learn the bathing sequence, shared-space etiquette, tattoo questions, and current venue options.',
    sourceRanges: [
      { start: 'How to use a jjimjilbang', end: 'Other approachable everyday experiences' },
      { start: 'Jjimjilbangs international visitors repeatedly mention', end: 'What recent international travelers report' },
    ],
  },
  {
    slug: 'where-to-stay',
    title: 'Where to stay in Seoul',
    eyebrow: 'Choose by morning, not one night',
    summary: 'Compare Jongno, Euljiro, Hongdae, Myeongdong, Gangnam, and Jamsil by trip purpose.',
    sourceRanges: [{ start: 'Where to Stay', end: 'From the Airport, Around Seoul, and On to the Next City' }],
  },
  {
    slug: 'friction-fixes',
    title: 'Traveler friction fixes',
    eyebrow: 'Problems translated into solutions',
    summary: 'Solve Korean phone, kiosk, card, map, elevator, restaurant, and waiting-list problems.',
    sourceRanges: [{ start: 'Traveler Friction Fixes: What Foreign Visitors Get Stuck On', end: 'Practical Etiquette and Planning' }],
  },
];

export function getCityDemandTier(citySlug: string): CityDemandTier {
  return demandTierByCity[citySlug.toLowerCase()] ?? 'stopover';
}

export function getCityGuideTopics(citySlug: string): CityGuideTopic[] {
  if (citySlug.toLowerCase() === 'seoul') return [overviewTopic, ...seoulTopics];
  return [overviewTopic];
}

export function getCityGuideTopic(citySlug: string, topicSlug: string): CityGuideTopic | null {
  return getCityGuideTopics(citySlug).find((topic) => topic.slug === topicSlug) ?? null;
}

export function getAllCityGuideTopicParams(citySlugs: string[]) {
  return citySlugs.flatMap((city) =>
    getCityGuideTopics(city).map((topic) => ({ city, topic: topic.slug })),
  );
}

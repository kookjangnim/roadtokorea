export const HOTSPOT_CATEGORY_KEYS = ['stay', 'food', 'attractions', 'transport', 'tips'] as const;

export type HotspotCategoryKey = (typeof HOTSPOT_CATEGORY_KEYS)[number];

export type HotspotCategoryCard = {
  title: string;
  body: string;
};

export type HotspotCategoryPage = {
  key: HotspotCategoryKey;
  label: string;
  navLabel: string;
  eyebrow: string;
  titleSuffix: string;
  question: string;
  summary: string;
  cards: HotspotCategoryCard[];
  primaryAction: string;
};

type HotspotCategoryOverride = Partial<
  Pick<HotspotCategoryPage, 'question' | 'summary' | 'cards' | 'primaryAction'>
>;

type HotspotCategoryOverrideRegistry = Record<
  string,
  Record<string, Partial<Record<HotspotCategoryKey, HotspotCategoryOverride>>>
>;

export const HOTSPOT_CATEGORY_PAGES: HotspotCategoryPage[] = [
  {
    key: 'stay',
    label: 'Stay',
    navLabel: 'Stay',
    eyebrow: 'Where To Stay',
    titleSuffix: 'Stay Guide',
    question: 'Should you sleep near here?',
    summary:
      'Use this page to decide whether this stop should influence your accommodation choice, or whether it works better as a visit from another base.',
    primaryAction: 'Compare city hotels',
    cards: [
      {
        title: 'Stay nearby when timing matters',
        body:
          'Choose a nearby stay zone when early arrival, evening atmosphere, or a slower next morning would make the stop better.',
      },
      {
        title: 'Stay elsewhere when the stop is short',
        body:
          'If the visit is only a quick landmark or cafe stop, keep accommodation near the stronger transport or food base.',
      },
      {
        title: 'Think in zones, not single hotels',
        body:
          'The first planning decision is the neighborhood. Individual hotel choice can happen after the route logic is clear.',
      },
    ],
  },
  {
    key: 'food',
    label: 'Food',
    navLabel: 'Food',
    eyebrow: 'Food Timing',
    titleSuffix: 'Food Guide',
    question: 'Where should you eat before or after this stop?',
    summary:
      'Use this page to decide whether food belongs inside the same neighborhood, before arrival, or after moving to a stronger eating area.',
    primaryAction: 'Plan the meal window',
    cards: [
      {
        title: 'Match food to the visit time',
        body:
          'Morning stops pair better with cafes and bakeries. Afternoon stops need a lunch escape. Evening stops can carry dinner or drinks.',
      },
      {
        title: 'Do not force food beside every landmark',
        body:
          'The closest restaurant is not always the best route decision. Sometimes one subway stop or a short walk creates a better meal.',
      },
      {
        title: 'Separate snack stops from meals',
        body:
          'A snack can support the visit, but a real meal should usually anchor the next part of the day.',
      },
    ],
  },
  {
    key: 'attractions',
    label: 'Attractions',
    navLabel: 'Attractions',
    eyebrow: 'What To Pair',
    titleSuffix: 'Attractions Guide',
    question: 'What should you combine with this place?',
    summary:
      'Use this page to build a nearby cluster instead of treating the hotspot as an isolated dot on the itinerary.',
    primaryAction: 'Build the cluster',
    cards: [
      {
        title: 'Use a two-hour version',
        body:
          'When time is tight, pair the stop with one nearby walk, viewpoint, market, or cafe instead of expanding the whole district.',
      },
      {
        title: 'Use a half-day version',
        body:
          'When the area has enough texture, combine the hotspot with two or three nearby stops and let the neighborhood carry the day.',
      },
      {
        title: 'Keep one backup option',
        body:
          'Weather, crowds, or fatigue can change the best attraction choice. A nearby indoor or low-effort backup keeps the plan flexible.',
      },
    ],
  },
  {
    key: 'transport',
    label: 'Transport',
    navLabel: 'Transport',
    eyebrow: 'Getting Around',
    titleSuffix: 'Transport Guide',
    question: 'How do you get in and out without wasting energy?',
    summary:
      'Use this page to decide the lowest-friction arrival, exit, and next move so the stop supports the route instead of interrupting it.',
    primaryAction: 'Return to city route',
    cards: [
      {
        title: 'Choose the easiest arrival',
        body:
          'The best access is usually the one that leaves you with the clearest walk, not the one that looks shortest on a map.',
      },
      {
        title: 'Plan the exit before arrival',
        body:
          'A stop feels smoother when you know whether the next move is back to a station, across the neighborhood, or onward to another city.',
      },
      {
        title: 'Use car logic only when it helps',
        body:
          'Driving can be useful for regional routes, but dense city hotspots often work better with transit plus walking.',
      },
    ],
  },
  {
    key: 'tips',
    label: 'Tips',
    navLabel: 'Tips',
    eyebrow: 'Before You Go',
    titleSuffix: 'Travel Tips',
    question: 'What should you know before committing time here?',
    summary:
      'Use this page for timing, crowd, budget, and traveler-fit notes that help prevent a good stop from becoming an awkward one.',
    primaryAction: 'Check the fit',
    cards: [
      {
        title: 'Watch the crowd window',
        body:
          'Famous places can change completely by time of day. Early, late, or weekday timing often matters more than adding another stop.',
      },
      {
        title: 'Match it to your travel style',
        body:
          'Some stops reward slow walking and context. Others are efficient photo or food stops. Do not ask every place to do every job.',
      },
      {
        title: 'Know when to skip',
        body:
          'A strong route sometimes gets better by leaving out a decent place that does not match the day.',
      },
    ],
  },
];

export const HOTSPOT_CATEGORY_OVERRIDES: HotspotCategoryOverrideRegistry = {
  seoul: {
    gyeongbokgung: {
      stay: {
        question: 'Should you sleep near Gyeongbokgung?',
        summary:
          'Gyeongbokgung can shape your stay choice if you want a calm palace morning, a Jongno/Bukchon walking base, or an easy first-day Seoul arrival. It is less useful as a hotel anchor if your night plan is Gangnam, Hongdae, or Itaewon.',
        cards: [
          {
            title: 'Stay around Gwanghwamun or Jongno for the cleanest palace morning',
            body:
              'This keeps Gyeongbokgung, Gwanghwamun Square, Cheonggyecheon, Insadong, and Bukchon within a low-friction first walk.',
          },
          {
            title: 'Use Myeongdong when you want easier shopping and airport flow',
            body:
              'Myeongdong is not as quiet, but it gives first-time visitors more food, shopping, and transit convenience after the palace visit.',
          },
          {
            title: 'Skip a palace-area stay for nightlife-heavy Seoul plans',
            body:
              'If the trip is built around late nights in Hongdae, Itaewon, or Gangnam, visit Gyeongbokgung by day and sleep closer to the evening district.',
          },
        ],
      },
      food: {
        question: 'Where should you eat before or after Gyeongbokgung?',
        summary:
          'Gyeongbokgung works best when food is planned around nearby neighborhoods rather than forced directly beside the palace gate. Seochon, Bukchon, Insadong, and Gwanghwamun each create a different meal rhythm.',
        cards: [
          {
            title: 'Use Seochon for a slower meal before or after the palace',
            body:
              'Seochon is the strongest fit when the visit should feel local, walkable, and less like a checklist stop.',
          },
          {
            title: 'Use Insadong when culture and food should stay together',
            body:
              'Insadong keeps tea, snacks, galleries, and traditional-street atmosphere close to the palace story.',
          },
          {
            title: 'Use Gwanghwamun for practical lunch',
            body:
              'Gwanghwamun is better when the day needs a reliable meal window before moving to another district.',
          },
        ],
      },
      attractions: {
        question: 'What should you combine with Gyeongbokgung?',
        summary:
          'Gyeongbokgung should rarely be treated as a single isolated palace stop. It becomes much stronger when paired with Gwanghwamun, Bukchon, Insadong, Seochon, or Cheonggyecheon depending on the day length.',
        cards: [
          {
            title: 'Two-hour version: palace plus Gwanghwamun',
            body:
              'Use this when the palace is a context stop before the day moves elsewhere. It keeps the visit focused and efficient.',
          },
          {
            title: 'Half-day version: palace, Bukchon, and Insadong',
            body:
              'This gives first-time visitors a clear old-Seoul cluster without turning the day into transit hopping.',
          },
          {
            title: 'Softer version: palace and Seochon',
            body:
              'Choose this when you want cafes, alleys, and a slower neighborhood finish after the formal palace layer.',
          },
        ],
      },
      transport: {
        question: 'How do you get to Gyeongbokgung without wasting energy?',
        summary:
          'The simplest access is usually subway plus walking. Gyeongbokgung Station, Gwanghwamun Station, and Anguk Station each work, but the best choice depends on whether you want to enter through the palace, connect to Bukchon, or continue toward Insadong.',
        cards: [
          {
            title: 'Use Gyeongbokgung Station for the most direct arrival',
            body:
              'This is the cleanest choice when the palace itself is the first priority and the group wants minimal decision fatigue.',
          },
          {
            title: 'Use Gwanghwamun Station for a ceremonial approach',
            body:
              'This works well when the route should start with the square and city-axis feeling before entering the palace area.',
          },
          {
            title: 'Use Anguk Station when Bukchon or Insadong comes next',
            body:
              'Anguk is useful when the palace is part of a broader old-Seoul walking cluster rather than the only stop.',
          },
        ],
      },
      tips: {
        question: 'What should you know before visiting Gyeongbokgung?',
        summary:
          'Gyeongbokgung is easiest to enjoy when the visit is timed for lower crowd pressure and treated as a cultural anchor, not a rushed photo stop. The palace pairs best with one nearby neighborhood rather than too many scattered sights.',
        cards: [
          {
            title: 'Go earlier when the palace matters',
            body:
              'A morning visit usually gives the palace more breathing room and leaves the afternoon free for Bukchon, Insadong, or another district.',
          },
          {
            title: 'Do not overpack the old-Seoul day',
            body:
              'Palace, Bukchon, Insadong, Seochon, and Cheonggyecheon can be too much if every stop gets equal weight.',
          },
          {
            title: 'Use the palace as context',
            body:
              'The visit works best when it explains Seoul history before the day shifts into food, streets, or modern neighborhoods.',
          },
        ],
      },
    },
    gyeongbok: {},
  },
};

export function getHotspotCategoryPage(category: string): HotspotCategoryPage | null {
  return HOTSPOT_CATEGORY_PAGES.find((page) => page.key === category) ?? null;
}

function normalizeHotspotSlug(hotspotSlug: string) {
  if (hotspotSlug === 'gyeongbok') return 'gyeongbokgung';
  return hotspotSlug;
}

export function getResolvedHotspotCategoryPage(
  citySlug: string,
  hotspotSlug: string,
  category: string
): HotspotCategoryPage | null {
  const basePage = getHotspotCategoryPage(category);
  if (!basePage) return null;

  const normalizedHotspot = normalizeHotspotSlug(hotspotSlug);
  const override = HOTSPOT_CATEGORY_OVERRIDES[citySlug]?.[normalizedHotspot]?.[basePage.key];
  if (!override) return basePage;

  return {
    ...basePage,
    ...override,
    cards: override.cards ?? basePage.cards,
  };
}

export function getHotspotCategoryHref(citySlug: string, hotspotSlug: string, category: HotspotCategoryKey) {
  return `/cities/${citySlug}/${hotspotSlug}/${category}`;
}

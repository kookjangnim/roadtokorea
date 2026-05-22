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
    seongsu: {
      stay: {
        question: 'Should you sleep near Seongsu?',
        summary:
          'Seongsu is a strong daytime and early-evening neighborhood, but it is not always the easiest hotel base. Stay nearby when design cafes, boutiques, Seoul Forest, and a slower east-Seoul rhythm matter more than classic sightseeing convenience.',
        cards: [
          { title: 'Stay near Seongsu for a slower creative Seoul day', body: 'This works when cafes, concept stores, galleries, and Seoul Forest are part of the trip identity, not just filler between landmarks.' },
          { title: 'Use Euljiro or Jongno for broader first-time access', body: 'If the itinerary still needs palaces, markets, and central Seoul, Seongsu may work better as a focused side trip than a sleeping base.' },
          { title: 'Use Gangnam if the next day points south', body: 'When the route continues toward COEX, Jamsil, or transport south of the river, Gangnam can be the easier overnight even if Seongsu is the better daytime stop.' },
        ],
      },
      food: {
        question: 'Where should you eat around Seongsu?',
        summary:
          'Seongsu is strongest for cafes, bakeries, casual restaurants, and design-led spaces. The best food plan is usually a cafe-first or lunch-plus-walk rhythm rather than a heavy formal meal.',
        cards: [
          { title: 'Use cafes as the anchor', body: 'A Seongsu visit often works best when coffee, dessert, and interior atmosphere are treated as part of the destination.' },
          { title: 'Plan lunch before the peak cafe window', body: 'Eat before the area gets too crowded, then use the afternoon for cafes, stores, and Seoul Forest.' },
          { title: 'Move elsewhere for late-night energy', body: 'Seongsu has evening texture, but Hongdae, Itaewon, or Euljiro are stronger if the night itself is the main event.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Seongsu?',
        summary:
          'Seongsu works best as a neighborhood cluster: cafes, stores, Seoul Forest, Ttukseom, and nearby riverside movement. It is less about one landmark and more about a walkable mood.',
        cards: [
          { title: 'Two-hour version: cafe plus design stores', body: 'Use this when Seongsu is a texture stop and the main day belongs somewhere else.' },
          { title: 'Half-day version: Seongsu plus Seoul Forest', body: 'This creates a clean east-Seoul loop with enough walking, green space, and cafe recovery.' },
          { title: 'Rainy-day version: interiors and galleries', body: 'Seongsu is useful when outdoor plans weaken because the neighborhood has many indoor stops close together.' },
        ],
      },
      transport: {
        question: 'How do you get to Seongsu smoothly?',
        summary:
          'Seongsu is easiest by subway and walking. The key is choosing whether the day starts at Seongsu Station, Seoul Forest, or Ttukseom so the route does not zigzag.',
        cards: [
          { title: 'Use Seongsu Station for cafes and stores', body: 'This is the simplest arrival when the neighborhood itself is the main target.' },
          { title: 'Use Seoul Forest when the day needs green space first', body: 'Starting at the park makes the walk feel calmer before moving into the denser cafe streets.' },
          { title: 'Avoid car-first planning', body: 'Parking and short-hop movement can make Seongsu feel harder than it needs to be. Transit plus walking is usually cleaner.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Seongsu?',
        summary:
          'Seongsu rewards slow walking and selective stops. It can feel overrated if treated as a checklist, but it works well when the trip wants present-day Seoul texture.',
        cards: [
          { title: 'Do not try every famous cafe', body: 'Pick one or two strong stops and leave space for walking. Over-planning makes the area feel like a queue route.' },
          { title: 'Weekdays feel much better', body: 'Crowds can flatten the neighborhood. Weekday or earlier visits make the design-store rhythm easier to enjoy.' },
          { title: 'Use it as modern contrast', body: 'Seongsu pairs well after palaces or markets because it shows a completely different present-tense side of Seoul.' },
        ],
      },
    },
    myeongdong: {
      stay: {
        question: 'Should you sleep in Myeongdong?',
        summary:
          'Myeongdong is one of Seoul’s easiest first-time hotel bases because shopping, food, airport access, and central transit are simple. It is less ideal when the trip wants quiet nights or neighborhood depth.',
        cards: [
          { title: 'Stay here for first-time convenience', body: 'Myeongdong reduces decision fatigue because many classic Seoul areas are close and the evening food/shopping layer is immediate.' },
          { title: 'Use it as a shopping and airport-friendly base', body: 'It works well when luggage, cosmetics shopping, airport buses, and easy subway transfers matter.' },
          { title: 'Skip it for calmer local texture', body: 'Travelers who want quiet alleys, design cafes, or late-night music may prefer Seongsu, Jongno, Hongdae, or Itaewon.' },
        ],
      },
      food: {
        question: 'How should you handle food in Myeongdong?',
        summary:
          'Myeongdong is useful for street food, snacks, casual meals, and easy group eating. It is not always the best place for a destination meal, so treat it as convenient energy rather than Seoul’s whole food identity.',
        cards: [
          { title: 'Use street food as a light evening layer', body: 'Myeongdong is strongest when snacks support shopping and walking instead of replacing every meal.' },
          { title: 'Move to Euljiro or Jongno for deeper meals', body: 'A short move can create a stronger dinner if you want local atmosphere beyond the shopping district.' },
          { title: 'Keep one easy group meal option', body: 'The area is practical when travelers have different tastes or need a low-risk dinner after a long day.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Myeongdong?',
        summary:
          'Myeongdong pairs well with Namsan, Namdaemun, Euljiro, Cheonggyecheon, and central palace routes. It is best used as a connector between sightseeing and evening city energy.',
        cards: [
          { title: 'Two-hour version: shopping plus street food', body: 'Use this when Myeongdong is an evening reset after a heavier sightseeing day.' },
          { title: 'Half-day version: Myeongdong, Namsan, and Namdaemun', body: 'This creates a classic central-Seoul cluster without needing long transfers.' },
          { title: 'Night version: Myeongdong into Euljiro', body: 'Move toward Euljiro when the evening should become more local, bar-like, or atmospheric.' },
        ],
      },
      transport: {
        question: 'How do you move through Myeongdong efficiently?',
        summary:
          'Myeongdong is easy by subway and walking, but the streets can be crowded. Plan entrances and exits around Myeongdong Station, Euljiro 1-ga, or City Hall depending on the next stop.',
        cards: [
          { title: 'Use Myeongdong Station for the simplest arrival', body: 'This is best when shopping streets are the main point and you want minimal walking confusion.' },
          { title: 'Use Euljiro 1-ga for a smoother exit north', body: 'This works when the next move is Cheonggyecheon, Jongno, or Euljiro nightlife.' },
          { title: 'Walk to Namsan only when energy is good', body: 'The map can make it look simple, but slope and crowds matter. Do not force the climb after a full day.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Myeongdong?',
        summary:
          'Myeongdong is practical, bright, and crowded. It succeeds when used for convenience and evening energy, but disappoints if expected to represent all of Seoul’s local culture.',
        cards: [
          { title: 'Expect crowds and commercial energy', body: 'This is part of the point. If you want quiet Seoul, use Myeongdong briefly and move elsewhere.' },
          { title: 'Keep purchases late in the day', body: 'Shopping after sightseeing avoids carrying bags through palaces, museums, or long walks.' },
          { title: 'Use it as a base, not the whole trip', body: 'Myeongdong helps the itinerary function, but nearby districts should carry the deeper Seoul story.' },
        ],
      },
    },
    hongdae: {
      stay: {
        question: 'Should you sleep in Hongdae?',
        summary:
          'Hongdae is a strong base for nightlife, music, youth culture, cafes, and airport-rail convenience. It is less efficient for palace-heavy or Gangnam-heavy itineraries.',
        cards: [
          { title: 'Stay here when the night matters', body: 'Hongdae is one of the easiest choices when late food, bars, clubs, busking, and casual movement are part of the plan.' },
          { title: 'Use it for airport-rail convenience', body: 'The area can work well at the beginning or end of a trip when AREX access matters.' },
          { title: 'Skip it for quiet mornings', body: 'If the trip starts early with palaces, museums, or older travelers, central Seoul may feel easier.' },
        ],
      },
      food: {
        question: 'How should you eat around Hongdae?',
        summary:
          'Hongdae is best for casual meals, late-night food, cafes, and group-friendly options. The food plan should match the district’s social energy rather than chase one formal destination meal.',
        cards: [
          { title: 'Use dinner as the start of the night', body: 'Plan food before music, bars, shopping, or walking so the evening has a natural build.' },
          { title: 'Keep cafe time separate from nightlife', body: 'Afternoon Hongdae and late-night Hongdae feel different. Treat them as different uses of the same area.' },
          { title: 'Move toward Yeonnam for a softer meal', body: 'Yeonnam and nearby streets can feel calmer and more cafe-forward than the busiest Hongdae core.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Hongdae?',
        summary:
          'Hongdae works as a youth-culture cluster with Yeonnam, Hapjeong, Sangsu, cafes, shops, live music, and evening streets. It is strongest when the visit is allowed to change mood over time.',
        cards: [
          { title: 'Afternoon version: Yeonnam cafes and shops', body: 'This gives the area a gentler start before the main Hongdae streets get busier.' },
          { title: 'Evening version: Hongdae core and live streets', body: 'Use this when the district’s nightlife and performance energy are the reason to go.' },
          { title: 'Longer version: Hapjeong and Sangsu', body: 'These nearby areas make the visit feel less one-note and more like a west-Seoul neighborhood crawl.' },
        ],
      },
      transport: {
        question: 'How do you get in and out of Hongdae?',
        summary:
          'Hongdae is transit-friendly, especially through Hongik University Station. The main planning issue is not access, but choosing the right exit and avoiding unnecessary backtracking through crowds.',
        cards: [
          { title: 'Use Hongik University Station for the core', body: 'This is the default choice for airport rail, subway access, shopping streets, and first-time visits.' },
          { title: 'Use Hapjeong or Sangsu for a calmer edge', body: 'These stations help when the plan leans toward cafes, bars, or a less crowded entry.' },
          { title: 'Plan late-night return before staying out', body: 'If the night goes long, know whether the return is subway, taxi, or a nearby stay.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Hongdae?',
        summary:
          'Hongdae is best when you want social movement rather than polished sightseeing. It can feel chaotic if you arrive without a time window or expect quiet local charm in the busiest streets.',
        cards: [
          { title: 'Pick afternoon or night deliberately', body: 'The district changes personality. Afternoon is cafes and shops; night is crowds, music, bars, and street energy.' },
          { title: 'Use side streets when the core is too much', body: 'A better Hongdae visit often happens just off the main pressure points.' },
          { title: 'Do not pair it with too many early starts', body: 'Hongdae rewards later energy, so avoid scheduling it before a demanding next morning unless staying nearby.' },
        ],
      },
    },
    itaewon: {
      stay: {
        question: 'Should you sleep in Itaewon?',
        summary:
          'Itaewon is a useful base when the trip wants international food, bars, hillside streets, and central access without staying in a classic shopping district. It is less ideal for travelers who want quiet nights or very simple first-time logistics.',
        cards: [
          { title: 'Stay here for food and nightlife flexibility', body: 'Itaewon works when dinner, bars, and international options are important parts of the Seoul plan.' },
          { title: 'Use it as a central-but-different base', body: 'It gives access to central Seoul while feeling distinct from Myeongdong, Jongno, or Gangnam.' },
          { title: 'Skip it for very quiet or family-first stays', body: 'The hills, nightlife, and late energy can be tiring if the trip needs calm evenings.' },
        ],
      },
      food: {
        question: 'How should you eat around Itaewon?',
        summary:
          'Itaewon is one of Seoul’s strongest areas for international food, casual dining, bars, and group meals. It is especially useful when travelers need variety after several Korean-traditional meals.',
        cards: [
          { title: 'Use Itaewon for variety', body: 'This is the right district when a group wants different cuisines, dietary flexibility, or a break from one food pattern.' },
          { title: 'Plan dinner before drinks', body: 'The area works best when the meal naturally becomes a night route instead of a separate transfer.' },
          { title: 'Use Hannam for a calmer food mood', body: 'Nearby Hannam can soften the plan with cafes, restaurants, and a more polished evening rhythm.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Itaewon?',
        summary:
          'Itaewon pairs well with Hannam, Namsan, museums, rooftop views, and evening food streets. It is more of a mood district than a classic attraction stop.',
        cards: [
          { title: 'Two-hour version: dinner and a hillside walk', body: 'Use this when Itaewon is the evening layer after a more formal sightseeing day.' },
          { title: 'Half-day version: museum, Hannam, and Itaewon', body: 'This makes the district feel broader than nightlife and gives the route cultural balance.' },
          { title: 'Night version: rooftop or bar route', body: 'Choose this when views, drinks, and social energy are the reason to go.' },
        ],
      },
      transport: {
        question: 'How do you move through Itaewon without tiring yourself out?',
        summary:
          'Itaewon looks compact, but slopes and station choices matter. Plan the walk direction before arrival, especially if pairing Itaewon with Hannam, Namsan, or late-night returns.',
        cards: [
          { title: 'Use Itaewon Station for the main street', body: 'This is the cleanest default when the visit is food, bars, or a first look at the district.' },
          { title: 'Use Noksapyeong for a wider approach', body: 'Noksapyeong can work when the plan includes views, walking, or a more scenic entry.' },
          { title: 'Watch hill fatigue', body: 'Do not overload the area with too many slope-heavy stops after a long walking day.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Itaewon?',
        summary:
          'Itaewon is most useful when the trip wants international Seoul, night energy, and food variety. It is less successful when treated as a mandatory daytime landmark.',
        cards: [
          { title: 'Go when the mood fits', body: 'Itaewon is stronger for dinner and evening than for a rushed morning checklist.' },
          { title: 'Match the area to the group', body: 'It is useful for mixed tastes and social plans, but may not suit travelers seeking quiet traditional atmosphere.' },
          { title: 'Pair it with one nearby layer', body: 'Hannam, Namsan, or a museum pairing gives Itaewon more depth than a single main-street pass.' },
        ],
      },
    },
    gangnam: {
      stay: {
        question: 'Should you sleep in Gangnam?',
        summary:
          'Gangnam is a strong base for business, shopping, COEX, clinics, nightlife, and south-of-river plans. It is less convenient when the trip is mostly palaces, old Seoul, or west-side neighborhoods.',
        cards: [
          { title: 'Stay here for south-Seoul efficiency', body: 'Gangnam works when COEX, Jamsil, Sinsa, Apgujeong, or southbound transport matter more than old-city sightseeing.' },
          { title: 'Use it for polished hotel and service density', body: 'The area is practical for travelers who want predictable hotels, shopping, taxis, and late food.' },
          { title: 'Skip it for palace-first itineraries', body: 'If most days start north of the river, Gangnam can create avoidable cross-city travel.' },
        ],
      },
      food: {
        question: 'How should you eat around Gangnam?',
        summary:
          'Gangnam is useful for restaurants, cafes, late meals, and polished group dining. The food plan should be tied to the exact sub-area: Gangnam Station, Sinsa, Apgujeong, COEX, or Jamsil.',
        cards: [
          { title: 'Use Gangnam Station for practical meals', body: 'This area is best for easy group choices, late food, and transit-friendly meeting points.' },
          { title: 'Use Sinsa or Apgujeong for cafes and style', body: 'These areas fit better when food is part of a shopping, cafe, or fashion-oriented day.' },
          { title: 'Use COEX when convenience beats atmosphere', body: 'COEX works when the plan needs indoor reliability, shopping, and low-friction meals.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Gangnam?',
        summary:
          'Gangnam is not a single attraction. It is a south-Seoul cluster of shopping, COEX, Starfield Library, Sinsa, Apgujeong, Jamsil, and nightlife depending on the route.',
        cards: [
          { title: 'Indoor version: COEX and Starfield Library', body: 'Use this when weather, shopping, or low-stress indoor movement matters.' },
          { title: 'Style version: Sinsa and Apgujeong', body: 'This works when the trip wants cafes, boutiques, beauty, and present-day Seoul polish.' },
          { title: 'Evening version: Gangnam Station or Jamsil', body: 'Choose this when dinner, nightlife, shopping, or a south-Seoul hotel base carries the night.' },
        ],
      },
      transport: {
        question: 'How do you move through Gangnam efficiently?',
        summary:
          'Gangnam is wide, so the main mistake is treating it as one walkable district. Choose the sub-area first, then pick the station or taxi route that matches it.',
        cards: [
          { title: 'Use Gangnam Station for the core', body: 'This is the default for meetings, food, and high-frequency transit.' },
          { title: 'Use Samseong for COEX', body: 'Do not route through Gangnam Station when the real target is COEX or Starfield Library.' },
          { title: 'Use taxis selectively', body: 'Short taxi hops can help between south-Seoul pockets, but traffic can erase the benefit at peak times.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Gangnam?',
        summary:
          'Gangnam works best when planned by sub-area and purpose. It can feel generic if treated as a must-see name, but it becomes useful when shopping, services, cafes, COEX, or nightlife are the reason.',
        cards: [
          { title: 'Do not make Gangnam one vague stop', body: 'Pick COEX, Sinsa, Apgujeong, Gangnam Station, or Jamsil. The district is too large for loose wandering.' },
          { title: 'Expect polished, commercial Seoul', body: 'Gangnam is not old-Seoul atmosphere. Its value is modern service density, shopping, and south-side convenience.' },
          { title: 'Pair it with a south-side day', body: 'It works best when several stops sit south of the river instead of forcing a single cross-city detour.' },
        ],
      },
    },
    gyeongbok: {},
  },
  busan: {
    haeundae: {
      stay: {
        question: 'Should you sleep near Haeundae?',
        summary: 'Haeundae is the easiest Busan beach base when the trip wants hotels, beach walks, cafes, and low-friction first-time logistics.',
        cards: [
          { title: 'Stay here for beach-first Busan', body: 'Haeundae works when the beach, Marine City, cafes, and a polished hotel zone should carry the night.' },
          { title: 'Use Seomyeon for city-center transfers', body: 'If the next day needs trains, subway transfers, or west/east flexibility, Seomyeon can be a better base.' },
          { title: 'Skip it for old-port food focus', body: 'Travelers focused on Jagalchi, Nampo, or markets may spend too much time crossing the city from Haeundae.' },
        ],
      },
      food: {
        question: 'How should you eat around Haeundae?',
        summary: 'Haeundae is best for beach-adjacent meals, cafes, hotel-zone dining, and easy seafood plans, but deeper market food usually belongs elsewhere in Busan.',
        cards: [
          { title: 'Use the beach area for easy meals', body: 'This keeps the day smooth when swimming, walking, or evening views matter more than food hunting.' },
          { title: 'Move toward local markets for stronger seafood texture', body: 'Haeundae has convenience, but Busan food feels broader when paired with market or port areas.' },
          { title: 'Plan cafes as recovery', body: 'Beach walks and coastal transit pair naturally with coffee breaks rather than a packed meal schedule.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Haeundae?',
        summary: 'Haeundae works as a coastal cluster with the beach, Dongbaekseom, Marine City, Blue Line Park, and nearby cafe streets.',
        cards: [
          { title: 'Two-hour version: beach and Dongbaekseom', body: 'This gives first-time visitors a clean coastal view without overloading the day.' },
          { title: 'Half-day version: beach, Blue Line Park, and cafes', body: 'Use this when the east coast side of Busan should feel like the main chapter.' },
          { title: 'Night version: Marine City views', body: 'Haeundae gets stronger after dark when skyline and beach atmosphere become part of the point.' },
        ],
      },
      transport: {
        question: 'How do you get in and out of Haeundae smoothly?',
        summary: 'Haeundae is easy once you are in east Busan, but it is not central. Build the day around fewer cross-city moves.',
        cards: [
          { title: 'Use subway for predictable access', body: 'Subway access is slower than it looks from central Busan, but it is stable and easy to understand.' },
          { title: 'Group east-side stops together', body: 'Haeundae, Cheongsapo, and coastal rail plans work better together than mixed with Nampo or Jagalchi.' },
          { title: 'Avoid rush-hour taxi dependence', body: 'Traffic can make cross-city movement feel heavier than the map suggests.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Haeundae?',
        summary: 'Haeundae is polished, popular, and easy. It shines when used as a beach base, but it should not be mistaken for all of Busan.',
        cards: [
          { title: 'Expect a resort-city mood', body: 'This is the smoother side of Busan, with hotels and beach convenience leading the experience.' },
          { title: 'Give sunset or night a role', body: 'The area often feels more memorable when the skyline and beach atmosphere switch on.' },
          { title: 'Balance it with older Busan', body: 'Pairing Haeundae with markets or port districts keeps the city from feeling too polished.' },
        ],
      },
    },
    gwangalli: {
      stay: {
        question: 'Should you sleep near Gwangalli?',
        summary: 'Gwangalli is a strong stay choice when bridge views, beach bars, cafes, and evening atmosphere matter more than pure transit convenience.',
        cards: [
          { title: 'Stay here for the night view', body: 'Gwangan Bridge gives the stay a clear reason, especially for couples and slower Busan evenings.' },
          { title: 'Use Haeundae for a more hotel-heavy beach base', body: 'Haeundae is usually easier for resort-style stays, while Gwangalli feels more social and view-driven.' },
          { title: 'Use Seomyeon when the itinerary is city-wide', body: 'If the plan jumps between many Busan districts, Gwangalli can become a beautiful but less central base.' },
        ],
      },
      food: {
        question: 'How should you eat around Gwangalli?',
        summary: 'Gwangalli food works best as an evening plan: seafood, casual dining, cafes, drinks, and bridge-view pacing.',
        cards: [
          { title: 'Make dinner part of the view', body: 'The district is strongest when food and the bridge atmosphere happen together.' },
          { title: 'Use cafes for a softer afternoon', body: 'Arriving before dinner lets the beach and cafe layer warm up before the night view.' },
          { title: 'Move elsewhere for market intensity', body: 'For raw market energy, Jagalchi or older port areas do a different job than Gwangalli.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Gwangalli?',
        summary: 'Gwangalli is best paired with beach walking, bridge views, cafes, Millak waterfront, and a relaxed evening route.',
        cards: [
          { title: 'Two-hour version: beach and bridge view', body: 'Use this when Gwangalli is an evening pause rather than the whole day.' },
          { title: 'Half-day version: cafes, waterfront, and dinner', body: 'This gives the area enough time to move from day to night naturally.' },
          { title: 'Pair with Haeundae only if the day is coastal', body: 'Two beach districts can work, but only when the route is intentionally east-coast Busan.' },
        ],
      },
      transport: {
        question: 'How do you move through Gwangalli?',
        summary: 'Gwangalli is usually a subway-plus-walk or taxi edge destination. The main decision is whether the evening ends here or continues elsewhere.',
        cards: [
          { title: 'Arrive before peak evening', body: 'Getting in before the busiest dinner window makes the area easier to enjoy.' },
          { title: 'Plan the late return', body: 'Know whether you are walking to a nearby stay, using taxi, or returning by subway.' },
          { title: 'Do not overconnect it', body: 'Gwangalli works best when the night can settle instead of becoming one more transfer.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Gwangalli?',
        summary: 'Gwangalli is a mood stop. It succeeds when you give the bridge view, beach, and evening energy enough time to matter.',
        cards: [
          { title: 'Do not rush the view', body: 'A short photo stop misses why people like the area. Let it become dinner, a walk, or a drink.' },
          { title: 'Check event crowd expectations', body: 'Drone shows and beach events can make the area feel exciting or crowded depending on the trip style.' },
          { title: 'Use it for atmosphere, not checklist sightseeing', body: 'Gwangalli is less about landmarks and more about how Busan feels by the water at night.' },
        ],
      },
    },
    seomyeon: {
      stay: {
        question: 'Should you sleep in Seomyeon?',
        summary: 'Seomyeon is Busan’s practical city-core base for subway access, food, nightlife, shopping, and balanced movement across the city.',
        cards: [
          { title: 'Stay here for city-wide efficiency', body: 'Seomyeon works when the trip needs access to beaches, markets, stations, and nightlife without committing to one edge.' },
          { title: 'Use it for food and late movement', body: 'The area gives easy restaurants, bars, and casual night options close to hotels.' },
          { title: 'Skip it for beach-first romance', body: 'Haeundae or Gwangalli will feel more memorable if the stay itself should be coastal.' },
        ],
      },
      food: {
        question: 'How should you eat around Seomyeon?',
        summary: 'Seomyeon is a strong practical food district with casual meals, late-night options, cafes, and group-friendly choices.',
        cards: [
          { title: 'Use it for easy dinner after transit', body: 'Seomyeon is useful when the day has been long and the group needs a reliable meal zone.' },
          { title: 'Use side streets for better texture', body: 'The main commercial streets are convenient, but smaller alleys often make the meal feel more local.' },
          { title: 'Save seafood-market plans for another district', body: 'Seomyeon handles city food well; port seafood belongs closer to Jagalchi or Nampo.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Seomyeon?',
        summary: 'Seomyeon is more of a base and nightlife district than a classic attraction. Pair it with shopping, cafes, food alleys, and onward movement.',
        cards: [
          { title: 'Two-hour version: food and shopping', body: 'Use this when Seomyeon is a practical reset between larger Busan chapters.' },
          { title: 'Evening version: dinner and nightlife', body: 'This is the district’s strongest use when staying nearby.' },
          { title: 'Transfer version: Seomyeon as the hinge', body: 'Use it to connect east beaches, central markets, and station logic without making every stop coastal.' },
        ],
      },
      transport: {
        question: 'How do you use Seomyeon as a transport base?',
        summary: 'Seomyeon is one of Busan’s easiest subway hubs. It is useful when the itinerary moves in multiple directions.',
        cards: [
          { title: 'Use Seomyeon for multi-district days', body: 'It reduces friction when the route includes beaches, markets, and central Busan.' },
          { title: 'Return here after edge districts', body: 'A central base makes late returns simpler after Haeundae, Gwangalli, or Nampo.' },
          { title: 'Avoid unnecessary taxis at peak hours', body: 'Subway movement is often cleaner than trying to cross Busan by road.' },
        ],
      },
      tips: {
        question: 'What should you know before using Seomyeon?',
        summary: 'Seomyeon is not the prettiest Busan base, but it may be the most useful one. Treat it as a route tool with strong food and night support.',
        cards: [
          { title: 'Choose it for function', body: 'Seomyeon earns its place by making Busan easier to move through.' },
          { title: 'Use the night layer', body: 'The area feels more valuable when dinner, bars, or late cafes are part of the plan.' },
          { title: 'Pair with scenic districts', body: 'Balance Seomyeon with Haeundae, Gwangalli, or port views so the trip still feels visually Busan.' },
        ],
      },
    },
  },
  gyeongju: {
    bulguksa: {
      stay: {
        question: 'Should you sleep near Bulguksa?',
        summary: 'Bulguksa can justify an east-side or Bomun stay when temple timing, Seokguram, and a calmer heritage morning matter.',
        cards: [
          { title: 'Stay east when the temple is the priority', body: 'This reduces morning friction and makes Bulguksa feel like a proper heritage chapter.' },
          { title: 'Use Bomun for easier resort comfort', body: 'Bomun gives hotels, lake walks, and family-friendly convenience while staying close enough to Bulguksa.' },
          { title: 'Use central Gyeongju for old-city evenings', body: 'If the night plan is Hwangnidan-gil or royal tombs, central Gyeongju may fit better.' },
        ],
      },
      food: {
        question: 'Where should you eat around Bulguksa?',
        summary: 'Food around Bulguksa should support temple pacing. Keep meals simple nearby, or move toward Bomun or central Gyeongju for a fuller food plan.',
        cards: [
          { title: 'Eat simply before or after the temple', body: 'A heavy meal can break the quiet rhythm. Keep food practical if the temple is the main purpose.' },
          { title: 'Use Bomun for family-friendly meals', body: 'Bomun works when the group needs easier restaurants and resort-area convenience.' },
          { title: 'Move central for evening food', body: 'Central Gyeongju is stronger when dinner should become part of the city experience.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Bulguksa?',
        summary: 'Bulguksa is strongest with Seokguram, Bomun Lake, or a central heritage handoff depending on time and energy.',
        cards: [
          { title: 'Two-hour version: Bulguksa only', body: 'Use this when the temple is a focused heritage stop and the rest of the day belongs elsewhere.' },
          { title: 'Half-day version: Bulguksa and Seokguram', body: 'This is the strongest cultural pairing, but it needs enough time and transport planning.' },
          { title: 'Softer version: Bulguksa and Bomun', body: 'Pair the temple with lake or resort recovery when the group needs a gentler day.' },
        ],
      },
      transport: {
        question: 'How do you get to Bulguksa efficiently?',
        summary: 'Bulguksa sits away from central Gyeongju, so transport planning matters more than it does for downtown heritage stops.',
        cards: [
          { title: 'Use car or taxi for low-stress timing', body: 'This is often easiest when pairing Bulguksa with Seokguram or Bomun.' },
          { title: 'Use bus only with a loose schedule', body: 'Public transport can work, but it needs more patience and less packed planning.' },
          { title: 'Group east-side stops together', body: 'Avoid bouncing between Bulguksa and central Gyeongju multiple times in one day.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Bulguksa?',
        summary: 'Bulguksa rewards slower attention. It is less successful when squeezed between too many photo stops.',
        cards: [
          { title: 'Give the temple enough quiet time', body: 'The value is in atmosphere, architecture, and context, not only quick photos.' },
          { title: 'Watch weather and walking energy', body: 'Temple paths and nearby pairings can feel heavier in heat, rain, or winter cold.' },
          { title: 'Decide whether Seokguram is included', body: 'That decision changes the whole transport and time plan.' },
        ],
      },
    },
    bomun: {
      stay: {
        question: 'Should you sleep near Bomun Lake?',
        summary: 'Bomun is Gyeongju’s easiest resort-style stay zone, useful for families, drivers, lake walks, and a softer base between central heritage and Bulguksa.',
        cards: [
          { title: 'Stay here for comfort and recovery', body: 'Bomun works when the trip needs hotels, lake air, parking, and lower evening friction.' },
          { title: 'Use it between Bulguksa and central Gyeongju', body: 'The area can bridge temple visits and old-city sightseeing without feeling too urban.' },
          { title: 'Skip it for nightlife and walking streets', body: 'If Hwangnidan-gil and tomb-area evenings matter most, central Gyeongju feels livelier.' },
        ],
      },
      food: {
        question: 'How should you eat around Bomun?',
        summary: 'Bomun food is practical and resort-friendly. Use it for convenience, then look central when the meal should feel more like Gyeongju street culture.',
        cards: [
          { title: 'Use Bomun for easy group meals', body: 'Families and drivers benefit from the area’s lower-friction restaurant choices.' },
          { title: 'Move central for stronger local atmosphere', body: 'Hwangnidan-gil and market-side areas usually carry more distinctive food texture.' },
          { title: 'Use cafes as lake recovery', body: 'A cafe break can be the best use of Bomun between heavier heritage stops.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Bomun?',
        summary: 'Bomun pairs with lake walks, cafes, resorts, Bulguksa, and central Gyeongju depending on whether the day needs recovery or heritage density.',
        cards: [
          { title: 'Two-hour version: lake walk and cafe', body: 'Use this as a calm reset between cultural stops.' },
          { title: 'Half-day version: Bomun and Bulguksa', body: 'This keeps the east-side plan coherent and avoids too much backtracking.' },
          { title: 'Evening version: resort recovery', body: 'Bomun is useful when the night should be calmer than central Gyeongju.' },
        ],
      },
      transport: {
        question: 'How do you use Bomun in the Gyeongju route?',
        summary: 'Bomun is easiest by car or taxi and works best when grouped with east-side heritage or used as the night base.',
        cards: [
          { title: 'Use car logic when staying here', body: 'Parking and road access are part of why Bomun works as a base.' },
          { title: 'Use taxi links to central Gyeongju', body: 'This keeps evenings flexible without forcing a central hotel.' },
          { title: 'Avoid constant shuttling', body: 'Pick either central or Bomun as the day’s anchor instead of moving back and forth repeatedly.' },
        ],
      },
      tips: {
        question: 'What should you know before choosing Bomun?',
        summary: 'Bomun is a comfort zone, not the deepest heritage zone. It improves the trip when recovery and logistics matter.',
        cards: [
          { title: 'Use it for slower travelers', body: 'Families, drivers, and resort-minded travelers often get more value here.' },
          { title: 'Do not expect old-city street energy', body: 'Bomun is calmer and more spread out than central Gyeongju.' },
          { title: 'Pair comfort with culture', body: 'The area works best when Bulguksa, Seokguram, or central heritage still carry the trip’s meaning.' },
        ],
      },
    },
  },
  jeju: {
    aewol: {
      stay: {
        question: 'Should you sleep in Aewol?',
        summary: 'Aewol is a strong west-Jeju stay choice when cafes, sunsets, coastal drives, and a softer first or last night matter.',
        cards: [
          { title: 'Stay here for coastal mood', body: 'Aewol works when the accommodation itself should feel like part of the Jeju experience.' },
          { title: 'Use Jeju City for airport efficiency', body: 'If the schedule is tight, the city may be easier even when Aewol feels prettier.' },
          { title: 'Use Seogwipo for south-island touring', body: 'Aewol is not the best base when waterfalls, Jungmun, or eastern routes dominate the next day.' },
        ],
      },
      food: {
        question: 'How should you eat around Aewol?',
        summary: 'Aewol food is strongest as cafes, seafood, bakery stops, and sunset-adjacent meals rather than a rushed restaurant checklist.',
        cards: [
          { title: 'Use cafes as the main stop', body: 'Cafe views and slow pacing are often the reason Aewol is on the route.' },
          { title: 'Plan seafood or casual dinner near sunset', body: 'The west-coast light can turn a simple meal into the day’s anchor.' },
          { title: 'Do not overdrive for one meal', body: 'Aewol works best when food fits the coast route, not when the route chases a single place.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Aewol?',
        summary: 'Aewol pairs with coastal roads, cafes, sunset points, beaches, and west-Jeju movement rather than dense sightseeing.',
        cards: [
          { title: 'Two-hour version: cafe and coastal walk', body: 'Use this when Aewol is a scenic pause in a bigger Jeju day.' },
          { title: 'Half-day version: west coast drive', body: 'Aewol gets stronger when connected to nearby beaches and viewpoints.' },
          { title: 'Arrival-day version: airport to coast', body: 'It is useful as a soft landing after arriving on Jeju.' },
        ],
      },
      transport: {
        question: 'How do you fit Aewol into a Jeju route?',
        summary: 'Aewol is easiest by car and works best when placed on a west-coast sequence rather than forced from the opposite side of the island.',
        cards: [
          { title: 'Use car-first planning', body: 'Aewol’s value comes from coastal movement, which is hard to capture with rigid transit.' },
          { title: 'Pair with airport timing', body: 'It can work well before departure or after arrival if the schedule allows coast time.' },
          { title: 'Avoid east-west overreach', body: 'Do not combine Aewol with far eastern Jeju unless the day is intentionally long.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Aewol?',
        summary: 'Aewol is about mood, light, and coastal pacing. It disappoints when treated as a quick landmark list.',
        cards: [
          { title: 'Time it for light', body: 'Late afternoon and sunset often make the area feel much stronger.' },
          { title: 'Pick fewer stops', body: 'Aewol is better with one good cafe and a drive than too many tiny detours.' },
          { title: 'Watch wind and weather', body: 'Coastal Jeju changes quickly, so keep the plan flexible.' },
        ],
      },
    },
    seongsan: {
      stay: {
        question: 'Should you sleep near Seongsan Ilchulbong?',
        summary: 'Seongsan is worth sleeping near when sunrise, Udo access, and east-Jeju touring are central to the plan.',
        cards: [
          { title: 'Stay here for sunrise logic', body: 'Sleeping nearby makes an early Seongsan Ilchulbong visit realistic instead of punishing.' },
          { title: 'Use it for Udo access', body: 'The area works well when Udo ferry timing is part of the next day.' },
          { title: 'Skip it for west or south-heavy plans', body: 'If the route points to Aewol, Jungmun, or Seogwipo, Seongsan can be too far east.' },
        ],
      },
      food: {
        question: 'How should you eat around Seongsan?',
        summary: 'Food around Seongsan should support sunrise, Udo, and coastal touring. Keep meals practical unless the east-side day is slow.',
        cards: [
          { title: 'Plan breakfast after sunrise', body: 'An early climb or viewpoint works better when breakfast is nearby and simple.' },
          { title: 'Use seafood when staying east', body: 'A slower Seongsan night can make seafood or coastal meals feel natural.' },
          { title: 'Carry snacks for Udo or long drives', body: 'East-Jeju pacing often includes gaps between stops.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Seongsan Ilchulbong?',
        summary: 'Seongsan pairs naturally with Udo, east-coast drives, canola fields in season, and nearby volcanic-coast scenery.',
        cards: [
          { title: 'Two-hour version: Seongsan only', body: 'Use this when the sunrise peak is the clear focus and the day moves onward.' },
          { title: 'Half-day version: Seongsan and Udo', body: 'This is the strongest east-Jeju pairing when ferry timing is realistic.' },
          { title: 'Seasonal version: canola and coastal views', body: 'Spring and clear-weather days make the surrounding landscape more valuable.' },
        ],
      },
      transport: {
        question: 'How do you fit Seongsan into Jeju movement?',
        summary: 'Seongsan needs deliberate east-side planning. Car travel is the cleanest option for most route versions.',
        cards: [
          { title: 'Stay nearby for sunrise', body: 'This avoids a long pre-dawn drive and makes the visit feel intentional.' },
          { title: 'Group east-side stops', body: 'Pair Seongsan with Udo or nearby coast rather than crossing the island repeatedly.' },
          { title: 'Check ferry timing if Udo is included', body: 'Udo changes the day from a quick stop into a larger route commitment.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Seongsan Ilchulbong?',
        summary: 'Seongsan is iconic but timing-sensitive. It is best when sunrise, weather, and east-side routing are planned together.',
        cards: [
          { title: 'Weather matters a lot', body: 'Clouds, wind, and rain can change the value of a sunrise plan quickly.' },
          { title: 'Do not force sunrise after a late night', body: 'The visit becomes better when the previous night supports the early start.' },
          { title: 'Decide on Udo early', body: 'Udo affects meals, transport, and time budget for the whole day.' },
        ],
      },
    },
    seogwipo: {
      stay: {
        question: 'Should you sleep in Seogwipo?',
        summary: 'Seogwipo is one of Jeju’s strongest bases for south-island nature, waterfalls, markets, coastal drives, and slower multi-night stays.',
        cards: [
          { title: 'Stay here for south-Jeju touring', body: 'Seogwipo works when waterfalls, coast, Jungmun, and Hallasan-side movement matter.' },
          { title: 'Use it for a slower Jeju rhythm', body: 'The city gives enough food and services without feeling as airport-driven as Jeju City.' },
          { title: 'Skip it for east-only or airport-tight plans', body: 'If the schedule is short or focused on Seongsan and Udo, Seogwipo may add distance.' },
        ],
      },
      food: {
        question: 'How should you eat around Seogwipo?',
        summary: 'Seogwipo is useful for markets, seafood, casual local meals, cafes, and post-nature recovery.',
        cards: [
          { title: 'Use markets for a local evening', body: 'Market food gives the city a practical and lively night layer.' },
          { title: 'Use seafood after coastal touring', body: 'South-coast drives and waterfall days pair naturally with seafood or casual local meals.' },
          { title: 'Keep cafes for recovery', body: 'Seogwipo works well when nature stops are broken by simple cafe pauses.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Seogwipo?',
        summary: 'Seogwipo pairs with waterfalls, Olle trails, Jungmun, coastal viewpoints, markets, and south-island drives.',
        cards: [
          { title: 'Two-hour version: waterfall and market', body: 'Use this when Seogwipo is a compact city stop inside a larger island route.' },
          { title: 'Half-day version: coast, waterfall, and cafe', body: 'This lets south Jeju feel scenic without becoming exhausting.' },
          { title: 'Multi-day version: Seogwipo as base', body: 'The city can support several south-island chapters if the trip is slower.' },
        ],
      },
      transport: {
        question: 'How do you use Seogwipo as a Jeju base?',
        summary: 'Seogwipo is best with car-first planning and grouped south-side stops. It can be awkward if the day constantly returns to the north.',
        cards: [
          { title: 'Group south-side attractions', body: 'Waterfalls, coast, Jungmun, and markets work better together than mixed with far-east or far-west stops.' },
          { title: 'Plan airport transfers carefully', body: 'Seogwipo is not close to the airport, so arrival and departure days need a lighter schedule.' },
          { title: 'Use taxis locally when tired', body: 'Short local hops can save energy after nature-heavy days.' },
        ],
      },
      tips: {
        question: 'What should you know before staying in Seogwipo?',
        summary: 'Seogwipo is a strong base when Jeju should feel slower, coastal, and nature-led. It needs time to pay off.',
        cards: [
          { title: 'Give it at least a night', body: 'Seogwipo is less convincing as a rushed day-trip label and stronger as a base.' },
          { title: 'Balance nature with recovery', body: 'Waterfalls, trails, and drives can stack fatigue. Build in food and cafe pauses.' },
          { title: 'Watch island distance', body: 'Jeju looks compact until the route crosses the island too many times.' },
        ],
      },
    },
  },
  daejeon: {
    sungsimdang: {
      stay: {
        question: 'Should you sleep near Sungsimdang?',
        summary: 'Sungsimdang can support a Daejeon overnight when the city is being used as a central reset, but the bakery itself should not be the only reason to choose the hotel area.',
        cards: [
          { title: 'Stay central when Daejeon is a route break', body: 'A central stay makes the bakery, station, restaurants, and next-day transport easier to combine.' },
          { title: 'Use Yuseong when recovery matters more', body: 'If hot springs and slower rest are the point, Yuseong can be the better sleep zone than the bakery core.' },
          { title: 'Do not overbuild the stay around one queue', body: 'Sungsimdang is a strong food anchor, but accommodation should still follow the next route move.' },
        ],
      },
      food: {
        question: 'How should you plan food around Sungsimdang?',
        summary: 'Sungsimdang is best treated as Daejeon’s food identity anchor, then supported by a simple meal plan nearby or in Yuseong depending on the day.',
        cards: [
          { title: 'Use the bakery as the anchor, not the whole meal', body: 'Plan bread, snacks, or gifts here, then decide whether the real meal happens nearby or later.' },
          { title: 'Visit earlier when possible', body: 'Crowds can turn the stop into a schedule problem, especially if the route has a train or drive after it.' },
          { title: 'Carryable food helps the next leg', body: 'Bakery items work well for travelers continuing toward another city instead of staying long in Daejeon.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Sungsimdang?',
        summary: 'Sungsimdang works best with Daejeon Station, central streets, local markets, or a Yuseong recovery layer rather than a scattered city tour.',
        cards: [
          { title: 'Short version: bakery and station logic', body: 'Use this when Daejeon is a transfer or practical stop on a longer route.' },
          { title: 'Half-day version: bakery, central walk, and market', body: 'This gives the city more texture without turning Daejeon into a forced sightseeing day.' },
          { title: 'Recovery version: Sungsimdang plus Yuseong', body: 'Pair food identity with hot-spring rest when Daejeon is meant to reset the traveler.' },
        ],
      },
      transport: {
        question: 'How do you fit Sungsimdang into Daejeon movement?',
        summary: 'Sungsimdang is easiest when planned around Daejeon Station, central walking, or a short taxi/subway hop before the next route leg.',
        cards: [
          { title: 'Use station timing carefully', body: 'The bakery is useful for rail travelers, but lines can threaten tight departures.' },
          { title: 'Keep luggage friction low', body: 'If carrying bags, decide whether this is a quick stop, a hotel-adjacent stop, or a post-check-in visit.' },
          { title: 'Link it to the next city', body: 'Daejeon’s value is central transport, so the bakery stop should support the next movement rather than delay it.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Sungsimdang?',
        summary: 'Sungsimdang is worth the attention, but the visit is better when treated as a practical food anchor inside Daejeon route logic.',
        cards: [
          { title: 'Expect crowd pressure', body: 'Build a buffer instead of treating it as a five-minute errand.' },
          { title: 'Choose what travels well', body: 'Some items make more sense for train or car travel than others.' },
          { title: 'Use it to explain Daejeon', body: 'The bakery gives Daejeon identity in a route system that might otherwise look too practical.' },
        ],
      },
    },
  },
  chungju: {
    suanbo: {
      stay: {
        question: 'Should you sleep in Suanbo?',
        summary: 'Suanbo is the strongest Chungju stay choice when hot-spring recovery and next-day inland movement matter more than city-center convenience.',
        cards: [
          { title: 'Stay here for recovery', body: 'Suanbo makes sense when the route needs a real rest chapter before mountain or inland travel continues.' },
          { title: 'Use Chungju center for practical errands', body: 'If food, transit, or city services matter more, central Chungju can be easier.' },
          { title: 'Do not choose it for nightlife', body: 'Suanbo is a recovery district, not a late-night city base.' },
        ],
      },
      food: {
        question: 'How should you eat around Suanbo?',
        summary: 'Food around Suanbo should stay simple and restorative. The main purpose is supporting rest, bathing, and the next day’s route.',
        cards: [
          { title: 'Keep dinner close to the stay', body: 'After hot springs or driving, low-friction food is better than chasing a distant restaurant.' },
          { title: 'Use local meals as recovery', body: 'The food plan should help the stop feel calm, not turn it into another task.' },
          { title: 'Stock up before a long next leg', body: 'If continuing toward Mungyeong or deeper inland, simple snacks and breakfast planning help.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Suanbo?',
        summary: 'Suanbo pairs with hot springs, mountain-edge scenery, Chungju Lake logic, and the next movement toward Mungyeong Saejae.',
        cards: [
          { title: 'Short version: bath and rest', body: 'Use this when Suanbo is a pure recovery stop.' },
          { title: 'Half-day version: Suanbo and Chungju nature', body: 'Add lake or mountain context when the traveler has enough time before resting.' },
          { title: 'Route version: Suanbo before Mungyeong', body: 'This is the strongest use when the next day crosses into pass-country logic.' },
        ],
      },
      transport: {
        question: 'How do you fit Suanbo into the inland route?',
        summary: 'Suanbo works best by car or planned local transfer. It should be treated as a deliberate recovery detour, not a random hotel choice.',
        cards: [
          { title: 'Use car-first timing', body: 'The stay becomes easier when arrival, bath time, dinner, and departure are all controlled.' },
          { title: 'Plan the next morning', body: 'Suanbo pays off when the next leg starts fresher, especially toward Mungyeong or mountain roads.' },
          { title: 'Avoid late uncertain arrivals', body: 'The district is quieter, so a too-late arrival can reduce the value of staying there.' },
        ],
      },
      tips: {
        question: 'What should you know before choosing Suanbo?',
        summary: 'Suanbo is about route recovery. It is excellent when the trip needs rest, but weak if the traveler expects dense city entertainment.',
        cards: [
          { title: 'Make rest the point', body: 'The district works when you stop asking it to be a sightseeing checklist.' },
          { title: 'Check bath or hotel expectations', body: 'The stay experience matters more here than in a normal city hotel zone.' },
          { title: 'Use it before a harder leg', body: 'Suanbo becomes more valuable when the next day actually benefits from recovery.' },
        ],
      },
    },
    lake: {
      stay: {
        question: 'Should you sleep near Chungju Lake?',
        summary: 'Chungju Lake can shape an overnight when the inland route needs scenery, recovery, and a calmer handoff before Mungyeong or deeper central Korea.',
        cards: [
          { title: 'Stay nearby for a slower inland reset', body: 'Lake-side pacing makes Chungju feel like more than a transfer between Seoul and the southeast.' },
          { title: 'Use Suanbo when hot springs matter more', body: 'If recovery is the main purpose, Suanbo may be the stronger stay choice than the lake edge.' },
          { title: 'Use central Chungju for logistics', body: 'City-side lodging is easier when food, errands, or transit are more important than scenery.' },
        ],
      },
      food: {
        question: 'How should you eat around Chungju Lake?',
        summary: 'Food around Chungju Lake should support a scenic and recovery-oriented stop. Keep meals practical unless the lake stay is the main chapter.',
        cards: [
          { title: 'Use simple meals around the lake', body: 'The scenery is the anchor, so food should not overcomplicate the stop.' },
          { title: 'Move central for more choice', body: 'Chungju city gives better flexibility when the group needs reliable restaurants.' },
          { title: 'Plan snacks for the next inland leg', body: 'If the route continues toward Mungyeong, practical food planning helps the next day.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Chungju Lake?',
        summary: 'Chungju Lake pairs with Suanbo, riverside views, light drives, and the inland route handoff toward Mungyeong Saejae.',
        cards: [
          { title: 'Short version: lake viewpoint and pause', body: 'Use this when Chungju is a scenic reset inside a longer driving day.' },
          { title: 'Half-day version: lake and Suanbo', body: 'This gives the stop both scenery and recovery logic.' },
          { title: 'Route version: lake before pass country', body: 'The lake chapter prepares the route for the more dramatic Mungyeong crossing.' },
        ],
      },
      transport: {
        question: 'How do you fit Chungju Lake into the route?',
        summary: 'Chungju Lake is easiest by car or deliberate local transfer. It works best when grouped with the inland road sequence.',
        cards: [
          { title: 'Use car-first routing', body: 'The lake becomes more valuable when viewpoints and recovery stops are linked by road.' },
          { title: 'Avoid scattered lake stops', body: 'Choose a clear viewpoint or stay zone instead of chasing the whole shoreline.' },
          { title: 'Protect the next morning', body: 'Chungju is strongest when it makes the next inland leg easier.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Chungju Lake?',
        summary: 'Chungju Lake is a mood and pacing stop. It succeeds when the route needs calm, not when travelers expect dense urban sightseeing.',
        cards: [
          { title: 'Use it to slow the route', body: 'The lake gives the inland line breathing room after Seoul-side movement.' },
          { title: 'Watch weather and visibility', body: 'Lake scenery changes quickly with haze, rain, and season.' },
          { title: 'Pair with recovery', body: 'The lake feels more useful when connected to Suanbo, rest, or a softer overnight.' },
        ],
      },
    },
  },
  gangneung: {
    coffee: {
      stay: {
        question: 'Should you sleep near Gangneung Coffee Street?',
        summary: 'Gangneung Coffee Street can support a coastal stay when beach walks, cafes, and a slower East Sea morning matter.',
        cards: [
          { title: 'Stay nearby for coast and coffee pacing', body: 'This works when the trip wants the morning to begin with the sea instead of city logistics.' },
          { title: 'Use central Gangneung for food and transit', body: 'If trains, markets, and local meals matter more, the city core can be more practical.' },
          { title: 'Use the coast as a mood base', body: 'The value is atmosphere, not only hotel efficiency.' },
        ],
      },
      food: {
        question: 'How should you eat around Gangneung Coffee Street?',
        summary: 'Coffee Street is best for cafes, desserts, beach breaks, and a soft meal rhythm, while stronger local food may sit closer to markets or central Gangneung.',
        cards: [
          { title: 'Let coffee be the anchor', body: 'This area earns its place when cafe time is treated as part of the travel experience.' },
          { title: 'Move central for a fuller meal', body: 'For market food or local specialties, do not force everything onto the beach strip.' },
          { title: 'Use cafes as weather buffers', body: 'Wind, rain, or cold can still make the coast usable if cafe stops are planned.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Gangneung Coffee Street?',
        summary: 'Coffee Street pairs naturally with Anmok Beach, coastal walks, nearby beaches, markets, and a slower East Sea day.',
        cards: [
          { title: 'Short version: coffee and beach walk', body: 'Use this when Gangneung is a light coastal reset.' },
          { title: 'Half-day version: beach, cafe, and market', body: 'This balances ocean atmosphere with local food texture.' },
          { title: 'Route version: Gangneung into the east coast', body: 'Coffee Street can become the soft opening before Donghae, Samcheok, or north-coast movement.' },
        ],
      },
      transport: {
        question: 'How do you get to Gangneung Coffee Street smoothly?',
        summary: 'Coffee Street is a coast-side stop, so train arrivals usually need a taxi, bus, or planned local transfer from central Gangneung.',
        cards: [
          { title: 'Plan the station-to-coast move', body: 'Do not assume the beach is immediately next to the train arrival.' },
          { title: 'Group coast-side stops together', body: 'The day works better when beaches and cafes are clustered instead of mixed with too many inland hops.' },
          { title: 'Use taxis when time matters', body: 'Short local transfers can preserve energy for the coast.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Gangneung Coffee Street?',
        summary: 'Coffee Street is a mood stop. It works best when the itinerary allows sea air, weather flexibility, and unhurried cafe time.',
        cards: [
          { title: 'Do not over-schedule cafe time', body: 'Pick a good window and let the stop breathe.' },
          { title: 'Watch coastal weather', body: 'Wind and cold can change how long the beach remains comfortable.' },
          { title: 'Pair it with one local food layer', body: 'Coffee plus market or seafood gives Gangneung more range.' },
        ],
      },
    },
  },
  sokcho: {
    seoraksan: {
      stay: {
        question: 'Should you sleep near Seoraksan?',
        summary: 'Seoraksan justifies a nearby stay when hiking, early entry, autumn foliage, or mountain-first pacing matters more than Sokcho city nightlife.',
        cards: [
          { title: 'Stay near the park for early mountain time', body: 'This reduces morning friction and helps the mountain feel like the main chapter.' },
          { title: 'Use Sokcho city for food and harbor nights', body: 'If markets, seafood, and the sea are the evening focus, city-side lodging may fit better.' },
          { title: 'Choose based on the next morning', body: 'The best stay zone depends on whether tomorrow starts with trails, beach, or onward travel.' },
        ],
      },
      food: {
        question: 'How should you plan food around Seoraksan?',
        summary: 'Food around Seoraksan should support hiking energy and recovery. Stronger seafood and market meals usually belong back in Sokcho.',
        cards: [
          { title: 'Eat simply before the mountain', body: 'A clean breakfast or snack plan matters more than a complicated food hunt.' },
          { title: 'Use Sokcho for the reward meal', body: 'After mountain time, seafood, markets, or harbor food make the day feel complete.' },
          { title: 'Carry water and snacks', body: 'Mountain pacing needs practical food support, especially in crowded or seasonal windows.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Seoraksan?',
        summary: 'Seoraksan pairs with Sokcho markets, beaches, harbor food, or a slower mountain-focused day depending on energy.',
        cards: [
          { title: 'Short version: cable car or light trail', body: 'Use this when the mountain is scenic context rather than a full hike.' },
          { title: 'Half-day version: Seoraksan and Sokcho market', body: 'This balances mountain atmosphere with city food reward.' },
          { title: 'Full-day version: trail-first planning', body: 'If hiking is the main purpose, do not overload the day with extra sightseeing.' },
        ],
      },
      transport: {
        question: 'How do you get to Seoraksan without draining the day?',
        summary: 'Seoraksan needs deliberate access planning from Sokcho, especially in peak foliage or holiday periods.',
        cards: [
          { title: 'Start early in peak seasons', body: 'Crowds and traffic can change the whole day if arrival is too late.' },
          { title: 'Choose city or park base first', body: 'Transport feels simpler once the sleeping area and first stop are aligned.' },
          { title: 'Do not force too many transfers', body: 'Mountain days are better when movement is simple and energy is preserved.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Seoraksan?',
        summary: 'Seoraksan is weather, season, and energy dependent. It is one of the places where timing matters more than adding extra stops.',
        cards: [
          { title: 'Check weather and visibility', body: 'A mountain day changes sharply with clouds, rain, wind, or heat.' },
          { title: 'Respect crowd seasons', body: 'Autumn foliage can be beautiful but logistically heavy.' },
          { title: 'Match route to ability', body: 'A light scenic visit and a serious hike are different days.' },
        ],
      },
    },
  },
  jeonju: {
    hanok: {
      stay: {
        question: 'Should you sleep near Jeonju Hanok Village?',
        summary: 'Jeonju Hanok Village is one of the clearest places in Korea where staying nearby can change the trip. The value is the evening walk, slower breakfast, and old-city atmosphere after day visitors leave.',
        cards: [
          { title: 'Stay nearby for the evening layer', body: 'The village feels different after the day-trip crowd thins and the streets become slower.' },
          { title: 'Use central Jeonju for practical comfort', body: 'If luggage, parking, or hotel standards matter more than hanok atmosphere, a central stay can be easier.' },
          { title: 'Choose hanok stays deliberately', body: 'A hanok stay can be memorable, but travelers should expect atmosphere over hotel-style convenience.' },
        ],
      },
      food: {
        question: 'How should you eat around Jeonju Hanok Village?',
        summary: 'Food is not a side note in Jeonju. Around Hanok Village, the best plan separates snacks, bibimbap or proper meals, makgeolli-style evenings, and cafe breaks instead of trying to eat everything at once.',
        cards: [
          { title: 'Use snacks while walking', body: 'Street snacks support the village walk, but they should not replace the main Jeonju food experience.' },
          { title: 'Plan one proper meal', body: 'Bibimbap, local set meals, or a stronger Jeonju dinner gives the city more depth than grazing only.' },
          { title: 'Save evening appetite', body: 'Jeonju becomes more interesting when dinner or drinks are part of the overnight rhythm.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Jeonju Hanok Village?',
        summary: 'Hanok Village works best with Gyeonggijeon, Jeondong Cathedral, local lanes, markets, and a slower old-city loop rather than a scattered checklist.',
        cards: [
          { title: 'Two-hour version: village, shrine, and cathedral', body: 'This gives first-time visitors the core old-city shape without stretching the day.' },
          { title: 'Half-day version: village, market, and food', body: 'This is the strongest use when Jeonju is a route stop rather than a quick photo detour.' },
          { title: 'Overnight version: sunset walk and breakfast', body: 'Sleeping nearby lets the area feel less like a day-trip crowd zone.' },
        ],
      },
      transport: {
        question: 'How do you move through Jeonju Hanok Village smoothly?',
        summary: 'The village is walk-first, but arrival and luggage planning matter. Keep cars and bags out of the core whenever possible.',
        cards: [
          { title: 'Arrive, park, then walk', body: 'The old-city core is easier when movement is pedestrian, not car-dependent.' },
          { title: 'Plan station-to-village transfer', body: 'Rail travelers should decide taxi or bus timing before arrival so the first hour stays smooth.' },
          { title: 'Do not overpack nearby stops', body: 'Jeonju works best when walking and eating are allowed to set the pace.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Jeonju Hanok Village?',
        summary: 'Hanok Village is popular and can feel crowded, but it still works well when timed around food, evening atmosphere, and slower walking.',
        cards: [
          { title: 'Avoid judging it only at peak crowd time', body: 'The village can feel commercial at midday but softer in the morning or evening.' },
          { title: 'Do not eat everything too early', body: 'Jeonju is a food city. Leave room for a proper meal, not only snacks.' },
          { title: 'Use it as an overnight city when possible', body: 'Jeonju becomes more convincing when the route gives it a night instead of a rushed stop.' },
        ],
      },
    },
  },
  andong: {
    hahoe: {
      stay: {
        question: 'Should you sleep near Hahoe Folk Village?',
        summary: 'Hahoe is worth shaping a stay around when Andong is meant to be a cultural anchor, not a quick museum-style stop. Many travelers still sleep in Andong city for food and logistics.',
        cards: [
          { title: 'Stay near Hahoe for immersion', body: 'This works when the village atmosphere and slower rural rhythm are the reason for the Andong stop.' },
          { title: 'Use Andong city for practical evenings', body: 'City-side stays make food, transport, and next-day movement easier.' },
          { title: 'Choose based on cultural weight', body: 'If Hahoe is the main story, stay closer; if it is one chapter, sleep in the city.' },
        ],
      },
      food: {
        question: 'How should you plan food around Hahoe?',
        summary: 'Hahoe food planning should connect to Andong identity: jjimdak, local meals, and slower regional eating rather than quick convenience only.',
        cards: [
          { title: 'Use Andong city for the main meal', body: 'The city is usually stronger for a fuller food experience after the village visit.' },
          { title: 'Keep village food simple', body: 'If eating near Hahoe, choose it for convenience and atmosphere rather than variety.' },
          { title: 'Make food part of the culture stop', body: 'Andong works best when food, ritual, old houses, and route meaning support each other.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Hahoe Folk Village?',
        summary: 'Hahoe pairs with Buyongdae views, mask culture, Confucian heritage, and Andong city food. It should not be rushed like a generic old-house stop.',
        cards: [
          { title: 'Two-hour version: village walk', body: 'Use this when the route needs a focused cultural stop and must continue onward.' },
          { title: 'Half-day version: Hahoe and Buyongdae', body: 'This gives the village landscape context and makes the stop feel larger.' },
          { title: 'Cultural version: Hahoe plus Andong heritage', body: 'Use this when Andong is carrying the route’s deeper cultural weight.' },
        ],
      },
      transport: {
        question: 'How do you get to Hahoe without making Andong feel awkward?',
        summary: 'Hahoe sits outside the city core, so transport must be planned as a deliberate out-and-back or car-based cultural chapter.',
        cards: [
          { title: 'Use car or planned transfer when possible', body: 'This keeps the village from consuming the day through uncertainty.' },
          { title: 'Give the out-and-back enough time', body: 'The stop loses meaning if the schedule only allows a rushed pass through.' },
          { title: 'Return to the city for evening logic', body: 'Food and lodging may work better after the village chapter ends.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Hahoe?',
        summary: 'Hahoe is most valuable when approached with context and patience. It is a living cultural landscape, not only a photo set.',
        cards: [
          { title: 'Slow down inside the village', body: 'The point is the relationship between houses, river, landscape, and tradition.' },
          { title: 'Add the viewpoint if time allows', body: 'Buyongdae helps explain the setting better than the village alone.' },
          { title: 'Respect the lived-in quality', body: 'Treat the area as cultural heritage, not a theme park.' },
        ],
      },
    },
  },
  yeosu: {
    nightsea: {
      stay: {
        question: 'Should you sleep near Yeosu Night Sea?',
        summary: 'Yeosu is one of the places where staying overnight matters. The night sea, harbor lights, seafood, and next-day island/coast movement are the point.',
        cards: [
          { title: 'Stay near the water for the payoff', body: 'Yeosu works best when the evening view is not rushed before leaving town.' },
          { title: 'Use central harbor areas for food and movement', body: 'A harbor-side base helps connect seafood, walks, boats, and night views.' },
          { title: 'Skip the overnight only on very tight routes', body: 'Yeosu loses a lot if treated as a daytime pass-through.' },
        ],
      },
      food: {
        question: 'How should you eat around Yeosu Night Sea?',
        summary: 'Yeosu food should lean into seafood, harbor meals, casual night eating, and a slower dinner window that leads naturally into the view.',
        cards: [
          { title: 'Make dinner the start of the night', body: 'Seafood or harbor food works best before a walk or night view rather than as a separate errand.' },
          { title: 'Keep the view close after eating', body: 'The night sea is stronger when dinner, walking, and lodging sit in one easy loop.' },
          { title: 'Use breakfast lightly before moving on', body: 'If the next day continues along the south coast, do not overload the morning.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Yeosu Night Sea?',
        summary: 'Yeosu night sea pairs with Odongdo, cable car views, harbor walks, seafood streets, and the south-coast continuation toward Suncheon or Namhae.',
        cards: [
          { title: 'Two-hour version: dinner and harbor walk', body: 'Use this when Yeosu is the evening payoff after a travel day.' },
          { title: 'Half-day version: Odongdo, cable car, and night sea', body: 'This gives Yeosu enough shape without forcing every island or viewpoint.' },
          { title: 'Route version: Yeosu into Namhae', body: 'The city becomes a hinge when the trip continues east along the south coast.' },
        ],
      },
      transport: {
        question: 'How do you move through Yeosu at night?',
        summary: 'Yeosu night plans should minimize transfers. Choose a stay and dinner area that lets the harbor or coast be walked rather than chased by taxi.',
        cards: [
          { title: 'Keep lodging near the evening loop', body: 'The night sea works better when the return is simple.' },
          { title: 'Use taxis for hill or cable-car gaps', body: 'Short transfers can save energy, especially after dinner.' },
          { title: 'Plan the next coastal leg', body: 'If continuing to Namhae or Suncheon, do not let the night plan break the morning route.' },
        ],
      },
      tips: {
        question: 'What should you know before planning Yeosu Night Sea?',
        summary: 'Yeosu’s emotional value is in the evening. It is worth protecting the night window instead of overfilling the day.',
        cards: [
          { title: 'Do not arrive too tired', body: 'The view matters less if the traveler has no energy left for a walk.' },
          { title: 'Watch wind and rain', body: 'Coastal weather can change whether the night walk feels romantic or rough.' },
          { title: 'Treat it as a finale or hinge', body: 'Yeosu works as either a south-coast payoff or the launch toward Namhae and Busan.' },
        ],
      },
    },
    odongdo: {
      stay: {
        question: 'Should you sleep near Odongdo?',
        summary: 'Odongdo is a good stay influence when the Yeosu plan is harbor-side, walkable, and night-view focused.',
        cards: [
          { title: 'Stay nearby for a gentle morning', body: 'A nearby base makes Odongdo easier before crowds or heat build.' },
          { title: 'Use the harbor for broader convenience', body: 'Harbor-side lodging usually balances Odongdo, food, and night views better than an isolated stay.' },
          { title: 'Do not choose lodging only for one walk', body: 'The stay should also support dinner, views, and the next route leg.' },
        ],
      },
      food: {
        question: 'Where should you eat around Odongdo?',
        summary: 'Odongdo itself is more walking and scenery than food. Plan meals in Yeosu harbor areas before or after the visit.',
        cards: [
          { title: 'Eat before the walk if energy is low', body: 'A simple meal first can make the island walk more relaxed.' },
          { title: 'Use harbor seafood after Odongdo', body: 'The walk pairs naturally with seafood, night views, or casual harbor food.' },
          { title: 'Keep snacks practical', body: 'Do not make the island carry the whole food plan.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Odongdo?',
        summary: 'Odongdo works with harbor walks, cable car views, night sea, and a slower Yeosu coastal half-day.',
        cards: [
          { title: 'Short version: Odongdo walk', body: 'Use this when the day needs a light nature stop close to the harbor.' },
          { title: 'Half-day version: Odongdo and cable car', body: 'This creates a clean view-focused Yeosu plan.' },
          { title: 'Evening version: Odongdo into night sea', body: 'Let the walk lead toward dinner and harbor lights.' },
        ],
      },
      transport: {
        question: 'How do you fit Odongdo into Yeosu movement?',
        summary: 'Odongdo is easiest when paired with harbor-side lodging, taxi hops, or a walkable evening loop.',
        cards: [
          { title: 'Keep the route compact', body: 'Odongdo should not be paired with too many far-apart Yeosu stops in one window.' },
          { title: 'Use taxi when connecting from station or hotels', body: 'A short ride can protect energy for the island walk.' },
          { title: 'Plan the return before dark', body: 'If continuing to dinner or cable car, know the next step before entering the island path.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Odongdo?',
        summary: 'Odongdo is a light but valuable Yeosu stop. Its value comes from pacing, weather, and how it connects to the harbor night.',
        cards: [
          { title: 'Use it as a breathing space', body: 'The stop works best between heavier travel and the evening view.' },
          { title: 'Watch weather and footwear', body: 'Wind, rain, and walking comfort affect the experience quickly.' },
          { title: 'Pair it with the night sea', body: 'Odongdo becomes stronger when it is part of a full Yeosu coastal rhythm.' },
        ],
      },
    },
  },
  daegu: {
    seomun: {
      stay: {
        question: 'Should you sleep near Seomun Market?',
        summary: 'Seomun Market can influence a Daegu stay when food, night market energy, and central access matter, but the best hotel choice may still depend on station or downtown movement.',
        cards: [
          { title: 'Stay central for food and movement', body: 'A central Daegu base can connect Seomun, Dongseongno, station access, and late meals.' },
          { title: 'Use Seomun as an evening anchor', body: 'The market is strongest when it supports dinner or night-market browsing.' },
          { title: 'Do not overfocus lodging on one market', body: 'Choose the sleep zone by the next morning’s route as well as the night food plan.' },
        ],
      },
      food: {
        question: 'How should you eat at Seomun Market?',
        summary: 'Seomun is one of Daegu’s clearest food anchors. Treat it as a grazing and night-market plan rather than a single sit-down meal only.',
        cards: [
          { title: 'Arrive hungry enough to browse', body: 'The market works when you can sample and compare instead of rushing one item.' },
          { title: 'Use night market energy', body: 'Evening gives the stop more atmosphere and makes Daegu feel less like a transfer city.' },
          { title: 'Balance snacks with a real meal', body: 'If the group needs structure, decide whether Seomun is dinner or a food walk after dinner.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Seomun Market?',
        summary: 'Seomun pairs with Dongseongno, modern Daegu shopping streets, station logic, and a food-focused evening route.',
        cards: [
          { title: 'Short version: market food walk', body: 'Use this when Daegu is a practical stop with a strong food layer.' },
          { title: 'Half-day version: Seomun and downtown', body: 'This gives Daegu a city-center rhythm beyond the market itself.' },
          { title: 'Night version: market then Dongseongno', body: 'Pairing food and downtown energy makes the stop feel more complete.' },
        ],
      },
      transport: {
        question: 'How do you move through Seomun Market efficiently?',
        summary: 'Seomun is central enough to work by subway, taxi, or walking from nearby downtown areas. The key is avoiding luggage and peak crowd friction.',
        cards: [
          { title: 'Drop bags before the market', body: 'Markets are easier when hands are free and the group can browse.' },
          { title: 'Use central transit links', body: 'Subway or short taxi hops keep the stop from becoming a parking problem.' },
          { title: 'Connect it to the next morning', body: 'Daegu often works as a route reset, so the hotel and market plan should support onward movement.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Seomun Market?',
        summary: 'Seomun is best when you want Daegu to feel active, local, and food-driven. It is less useful as a silent sightseeing stop.',
        cards: [
          { title: 'Go with appetite and patience', body: 'The market rewards browsing more than rushing.' },
          { title: 'Expect crowd and sensory density', body: 'That energy is the point, but it can be tiring after a long travel day.' },
          { title: 'Use it to give Daegu identity', body: 'Seomun helps Daegu read as a food and city stop, not only a transfer.' },
        ],
      },
    },
  },
  pohang: {
    homigot: {
      stay: {
        question: 'Should you sleep near Homigot?',
        summary: 'Homigot shapes a stay only when sunrise, East Sea driving, and a slower coastal morning are the reason for stopping in Pohang.',
        cards: [
          { title: 'Stay nearby for sunrise', body: 'A nearby stay makes the early start realistic and turns Homigot into the day’s main opening.' },
          { title: 'Use central Pohang for food and services', body: 'If seafood, market access, and city convenience matter more, sleep closer to the city core.' },
          { title: 'Skip the overnight for a quick photo stop', body: 'Homigot is less demanding when it is one scenic point inside a longer coastal drive.' },
        ],
      },
      food: {
        question: 'How should you eat around Homigot?',
        summary: 'Food near Homigot should support coastal timing. Stronger seafood and market meals usually fit better back toward Pohang city.',
        cards: [
          { title: 'Keep sunrise food practical', body: 'Coffee, snacks, or a simple breakfast often matter more than a complicated pre-dawn meal.' },
          { title: 'Use Pohang for the seafood payoff', body: 'After the coastal stop, city markets and seafood areas give the meal more identity.' },
          { title: 'Do not overdrive for one restaurant', body: 'Let the food plan follow the coast route instead of breaking it.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Homigot?',
        summary: 'Homigot pairs with sunrise views, coastal roads, Pohang seafood, and the Route 1 or east-coast handoff toward Gyeongju or Yeongdeok.',
        cards: [
          { title: 'Short version: sunrise and sculpture', body: 'Use this when Homigot is the symbolic East Sea stop.' },
          { title: 'Half-day version: Homigot and Pohang food', body: 'This balances scenic coast with a practical city meal.' },
          { title: 'Route version: coastal handoff', body: 'Homigot works well when the day continues along the East Sea corridor.' },
        ],
      },
      transport: {
        question: 'How do you fit Homigot into the route?',
        summary: 'Homigot is car-first for most travelers. It should be grouped with coastal movement rather than treated like a central-city attraction.',
        cards: [
          { title: 'Use car timing deliberately', body: 'The value is sunrise or coastline, both of which need control over arrival time.' },
          { title: 'Avoid backtracking from central Pohang', body: 'Plan the stop as part of a coast loop or onward route.' },
          { title: 'Protect the next leg', body: 'Do not let a sunrise stop create a tired, overpacked driving day.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Homigot?',
        summary: 'Homigot is timing-sensitive. It feels meaningful when sunrise, weather, and coastal routing line up.',
        cards: [
          { title: 'Check sunrise and weather', body: 'Clouds or rain can change the whole value of an early visit.' },
          { title: 'Dress for wind', body: 'East Sea stops can feel colder or rougher than expected.' },
          { title: 'Use it as a symbol, not a full day', body: 'Homigot is strongest as a precise coastal moment inside a larger route.' },
        ],
      },
    },
  },
  ulsan: {
    daewangam: {
      stay: {
        question: 'Should you sleep near Daewangam Park?',
        summary: 'Daewangam can influence a stay when Ulsan is being used as a coastal recovery stop between Gyeongju, Pohang, and Busan.',
        cards: [
          { title: 'Stay coast-side for recovery', body: 'The park, sea air, and slower walking make more sense when the night is calm.' },
          { title: 'Use central Ulsan for business or transit', body: 'If practical movement matters more than scenery, the city core can be easier.' },
          { title: 'Skip nearby lodging for a quick route stop', body: 'Daewangam can work as a strong pause without requiring an overnight.' },
        ],
      },
      food: {
        question: 'How should you eat around Daewangam?',
        summary: 'Food should support the coastal pause: simple seafood, cafes, or a later meal in Ulsan depending on where the route sleeps.',
        cards: [
          { title: 'Use seafood after the walk', body: 'The coast makes seafood feel natural after park time.' },
          { title: 'Keep cafe time flexible', body: 'A cafe stop can help if wind or weather shortens the walk.' },
          { title: 'Move central for broader dinner choice', body: 'If staying in Ulsan city, save the main meal for the hotel area.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Daewangam Park?',
        summary: 'Daewangam pairs with coastal walking, lighthouse views, beaches, and a gentle handoff toward Busan or Gyeongju.',
        cards: [
          { title: 'Short version: park loop and sea view', body: 'Use this when Ulsan is a scenic route pause.' },
          { title: 'Half-day version: coast and cafe', body: 'This gives Ulsan a softer identity beyond industry and transit.' },
          { title: 'Route version: Gyeongju to Busan buffer', body: 'Daewangam can keep the southeast coast from feeling like a pure transfer.' },
        ],
      },
      transport: {
        question: 'How do you fit Daewangam into southeast movement?',
        summary: 'Daewangam is easiest by car or planned taxi transfer. It should be treated as a coast-side stop, not a station-adjacent city walk.',
        cards: [
          { title: 'Group it with coastal movement', body: 'The stop works best when the route is already moving along the southeast coast.' },
          { title: 'Use taxi if arriving by rail', body: 'A short transfer can keep the park from becoming logistically awkward.' },
          { title: 'Avoid tight onward timing', body: 'Coastal walks are better when they are not squeezed between departures.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Daewangam?',
        summary: 'Daewangam is a scenery and recovery stop. It works best when weather, walking energy, and the southeast route all support it.',
        cards: [
          { title: 'Watch wind and rain', body: 'The coast is the point, so weather changes the experience quickly.' },
          { title: 'Do not undersell Ulsan', body: 'The park helps Ulsan read as coastal, not only industrial.' },
          { title: 'Use it to slow the route', body: 'It is most useful when the traveler needs a breathing point before Busan.' },
        ],
      },
    },
  },
  tongyeong: {
    dongpirang: {
      stay: {
        question: 'Should you sleep near Dongpirang?',
        summary: 'Dongpirang supports a Tongyeong stay when harbor walks, mural lanes, seafood, ferries, and Yi Sun-sin history should all stay close.',
        cards: [
          { title: 'Stay central for compact Tongyeong', body: 'A central stay lets Dongpirang, harbor food, ferry streets, and command-history layers connect on foot.' },
          { title: 'Use waterfront lodging for views', body: 'If the night should be scenic, harbor-facing stays can be stronger than mural-lane proximity.' },
          { title: 'Do not treat it as only a photo stop', body: 'Dongpirang works best as one layer in a broader Tongyeong overnight.' },
        ],
      },
      food: {
        question: 'How should you eat around Dongpirang?',
        summary: 'Dongpirang food planning should lean into Tongyeong harbor seafood, market snacks, and cafe pauses after walking.',
        cards: [
          { title: 'Use harbor seafood as the main meal', body: 'The mural village pairs naturally with seafood streets and port atmosphere.' },
          { title: 'Use cafes for the hill walk', body: 'A cafe break makes the slopes and views feel less rushed.' },
          { title: 'Keep snacks local and light', body: 'Let the main meal carry Tongyeong’s seafood identity.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Dongpirang?',
        summary: 'Dongpirang pairs with Tongyeong harbor, ferry terminals, seafood markets, Yi Sun-sin memory, and nearby island routes.',
        cards: [
          { title: 'Short version: mural village and harbor', body: 'Use this when Tongyeong is a compact stop.' },
          { title: 'Half-day version: Dongpirang, food, and command history', body: 'This gives the city both present-day texture and historical weight.' },
          { title: 'Longer version: ferry or island layer', body: 'Tongyeong gets much stronger when Hallyeohaesang movement appears.' },
        ],
      },
      transport: {
        question: 'How do you move through Dongpirang and central Tongyeong?',
        summary: 'Central Tongyeong is compact but hilly. Plan walking direction, parking or taxi drop-off, and the harbor return before starting.',
        cards: [
          { title: 'Walk downhill when possible', body: 'The village is easier when the route respects slopes.' },
          { title: 'Keep harbor and food close', body: 'A compact loop prevents the stop from becoming fragmented.' },
          { title: 'Plan ferry timing separately', body: 'Island plans should not be improvised after a slow mural walk.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Dongpirang?',
        summary: 'Dongpirang is colorful but should not swallow Tongyeong’s deeper naval and island identity.',
        cards: [
          { title: 'Use it as the present-tense layer', body: 'The murals and cafes make Tongyeong feel alive after the history layer.' },
          { title: 'Respect local residents', body: 'The area is not just a photo backdrop.' },
          { title: 'Pair it with harbor history', body: 'Tongyeong becomes much stronger when Dongpirang is not isolated from Yi Sun-sin and port culture.' },
        ],
      },
    },
  },
  namhae: {
    german: {
      stay: {
        question: 'Should you sleep near Namhae German Village?',
        summary: 'German Village can support a Namhae stay when the trip wants island-road atmosphere, pensions, sunset, and a slower south-coast night.',
        cards: [
          { title: 'Stay nearby for island mood', body: 'The village and surrounding roads work best when the night is part of the scenery.' },
          { title: 'Use another Namhae base for route efficiency', body: 'If Boriam, beaches, or onward Tongyeong movement dominate, another stay zone may be easier.' },
          { title: 'Choose lodging for views and driving logic', body: 'In Namhae, the accommodation location should support the next road segment.' },
        ],
      },
      food: {
        question: 'How should you eat around German Village?',
        summary: 'Food around German Village should match the relaxed island-road rhythm: cafes, casual meals, German-themed stops, and seafood elsewhere in Namhae.',
        cards: [
          { title: 'Use cafes and light meals here', body: 'The village is strongest as an atmosphere and view stop.' },
          { title: 'Move for seafood identity', body: 'Namhae food feels broader when seafood or local meals join the plan.' },
          { title: 'Do not force every meal into the village', body: 'The route should use the whole island, not only one scenic cluster.' },
        ],
      },
      attractions: {
        question: 'What should you combine with German Village?',
        summary: 'German Village pairs with coastal drives, Boriam, beaches, Darangee-style terraces, and the Yeosu-to-Tongyeong south-coast handoff.',
        cards: [
          { title: 'Short version: village and viewpoint', body: 'Use this when Namhae is a scenic island-road pause.' },
          { title: 'Half-day version: village and coastal drive', body: 'This lets the island setting matter more than the buildings alone.' },
          { title: 'Route version: Yeosu to Tongyeong bridge', body: 'German Village can soften the route before the denser Tongyeong port chapter.' },
        ],
      },
      transport: {
        question: 'How do you fit German Village into a Namhae route?',
        summary: 'German Village is car-first and should be placed inside a coherent island loop rather than reached as an isolated detour.',
        cards: [
          { title: 'Use car routing deliberately', body: 'Namhae’s value is in the road sequence, not a single pinpoint.' },
          { title: 'Avoid excessive backtracking', body: 'Choose a clockwise or counterclockwise island flow and stick to it.' },
          { title: 'Protect the Tongyeong handoff', body: 'If continuing east, do not let the village stop consume the whole day.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting German Village?',
        summary: 'German Village is best as part of Namhae’s scenic island mood. It disappoints when expected to carry the whole destination alone.',
        cards: [
          { title: 'Use it with the landscape', body: 'Views and road context are as important as the village itself.' },
          { title: 'Expect a themed stop', body: 'Its value is atmosphere and story, not deep urban density.' },
          { title: 'Pair with one stronger nature layer', body: 'Boriam, beaches, or terraces make Namhae feel complete.' },
        ],
      },
    },
    boriam: {
      stay: {
        question: 'Should you sleep near Boriam?',
        summary: 'Boriam can influence a stay when Namhae is a spiritual, scenic, and slow-road chapter rather than a quick island pass.',
        cards: [
          { title: 'Stay nearby when sunrise or quiet matters', body: 'The temple and views are strongest when the day is not rushed.' },
          { title: 'Use a broader Namhae base for comfort', body: 'Many travelers will prefer lodging that balances temple access with food and road movement.' },
          { title: 'Do not choose it only for convenience', body: 'The reason to stay nearby is atmosphere, not hotel density.' },
        ],
      },
      food: {
        question: 'How should you eat around Boriam?',
        summary: 'Food around Boriam should be simple and timed around the temple visit. The stronger meal often happens elsewhere on Namhae’s coast.',
        cards: [
          { title: 'Keep food light before the temple', body: 'The walk and atmosphere benefit from a simple schedule.' },
          { title: 'Use seafood after the viewpoint', body: 'A coastal meal afterward gives the scenic stop a good landing.' },
          { title: 'Plan snacks for road gaps', body: 'Namhae drives can stretch between proper meal zones.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Boriam?',
        summary: 'Boriam pairs with Geumsan views, coastal drives, German Village, beaches, and a slower south-coast road day.',
        cards: [
          { title: 'Short version: temple and viewpoint', body: 'Use this when Boriam is the main scenic-spiritual stop.' },
          { title: 'Half-day version: Boriam and coast drive', body: 'This lets the mountain and sea relationship carry the day.' },
          { title: 'Route version: Boriam before German Village', body: 'The pairing balances quiet temple atmosphere with themed island scenery.' },
        ],
      },
      transport: {
        question: 'How do you reach Boriam without exhausting the day?',
        summary: 'Boriam needs car-first or carefully planned local movement. The route should respect slopes, parking, and weather.',
        cards: [
          { title: 'Start with enough time', body: 'The stop loses value if squeezed between long drives.' },
          { title: 'Check parking and walking expectations', body: 'The final access can shape traveler comfort.' },
          { title: 'Group it with nearby island stops', body: 'Avoid making Boriam a long isolated out-and-back.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Boriam?',
        summary: 'Boriam is weather and energy sensitive. It is one of Namhae’s strongest stops when the view and quiet mood have room.',
        cards: [
          { title: 'Check visibility', body: 'Views are central to the experience.' },
          { title: 'Respect the temple setting', body: 'Treat it as a cultural and spiritual place, not only a lookout.' },
          { title: 'Keep the day slower', body: 'Boriam works best when the route is not overloaded.' },
        ],
      },
    },
  },
  suncheon: {
    bay: {
      stay: {
        question: 'Should you sleep near Suncheon Bay?',
        summary: 'Suncheon Bay can justify an overnight when wetlands, sunset, ecology, and a slower south-coast transition matter.',
        cards: [
          { title: 'Stay for sunset or early nature time', body: 'The bay is stronger when timing is protected instead of squeezed.' },
          { title: 'Use Suncheon city for food and transit', body: 'City-side stays may be easier if the bay is only one chapter.' },
          { title: 'Choose based on the next route', body: 'Suncheon often functions as the hinge toward Yeosu or Boseong.' },
        ],
      },
      food: {
        question: 'How should you eat around Suncheon Bay?',
        summary: 'Food should support the wetland timing. Eat in Suncheon city for variety, then protect the bay window for walking and views.',
        cards: [
          { title: 'Do not let dinner steal sunset', body: 'If sunset matters, schedule the meal around it.' },
          { title: 'Use city meals for reliability', body: 'Suncheon city is usually better for a proper meal than the wetland edge.' },
          { title: 'Keep snacks simple for the walk', body: 'Nature stops work better when food logistics stay light.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Suncheon Bay?',
        summary: 'Suncheon Bay pairs with the national garden, ecological walks, local food, and the route handoff toward Yeosu or Boseong.',
        cards: [
          { title: 'Short version: bay walk', body: 'Use this when ecology is the main stop before moving onward.' },
          { title: 'Half-day version: garden and bay', body: 'This is the clearest Suncheon pairing for first-time visitors.' },
          { title: 'Route version: Suncheon to Yeosu', body: 'The bay can become the ecological hinge before the night-sea payoff.' },
        ],
      },
      transport: {
        question: 'How do you fit Suncheon Bay into the route?',
        summary: 'Suncheon Bay needs timing and local transfer planning. It should be grouped with the garden or used as the south-coast hinge.',
        cards: [
          { title: 'Plan sunset before transport', body: 'The best time window should drive the schedule.' },
          { title: 'Use local transfers cleanly', body: 'Taxi or bus planning prevents the bay from feeling remote.' },
          { title: 'Protect the next city handoff', body: 'Suncheon often leads to Yeosu, so avoid ending the day stranded or tired.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Suncheon Bay?',
        summary: 'Suncheon Bay rewards patience, weather awareness, and a slower ecological mindset.',
        cards: [
          { title: 'Weather changes the value', body: 'Wind, rain, heat, and visibility affect wetland walking.' },
          { title: 'Give nature enough silence', body: 'The bay is not a rapid checklist attraction.' },
          { title: 'Use it as the ecological chapter', body: 'It gives the south route a different identity before coastal nightlife or tea fields.' },
        ],
      },
    },
  },
  boseong: {
    tea: {
      stay: {
        question: 'Should you sleep near Boseong tea fields?',
        summary: 'Boseong tea fields can shape a stay when the route needs green scenery, rural calm, and a slower Jeolla pause.',
        cards: [
          { title: 'Stay nearby for morning fields', body: 'Early light can make the tea fields feel calmer and more atmospheric.' },
          { title: 'Use Suncheon or Yeosu for broader services', body: 'If the route needs more food and lodging choice, nearby larger cities may be easier bases.' },
          { title: 'Choose Boseong for quiet, not nightlife', body: 'The stay value is rural scenery and rest.' },
        ],
      },
      food: {
        question: 'How should you eat around Boseong tea fields?',
        summary: 'Food around Boseong should support tea, local snacks, and a light rural stop. Larger meals may work better before or after the field visit.',
        cards: [
          { title: 'Use tea as the signature', body: 'Tea, desserts, and green-tea products are part of the reason to stop.' },
          { title: 'Keep meals simple', body: 'Do not force a dense restaurant plan into a rural scenic chapter.' },
          { title: 'Plan food around the next city', body: 'Suncheon, Yeosu, or other route stops may carry the fuller meal.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Boseong tea fields?',
        summary: 'Boseong tea fields pair with green-tea views, rural roads, cafes, and the Jeolla south-coast movement toward Suncheon or Yeosu.',
        cards: [
          { title: 'Short version: tea field walk', body: 'Use this when Boseong is a scenic pause in a longer drive.' },
          { title: 'Half-day version: fields, cafe, and rural road', body: 'This gives the stop enough calm to feel distinct.' },
          { title: 'Route version: Boseong to Suncheon', body: 'The tea fields can soften the route before wetland or coast chapters.' },
        ],
      },
      transport: {
        question: 'How do you fit Boseong tea fields into the route?',
        summary: 'Boseong is easiest by car or deliberate local transfer. It should be placed as a scenic rural chapter, not a rushed side quest.',
        cards: [
          { title: 'Use car-first routing', body: 'The fields make the most sense inside a Jeolla road sequence.' },
          { title: 'Avoid excessive detour logic', body: 'If the route is too tight, the stop can feel costly.' },
          { title: 'Pair with Suncheon or Yeosu movement', body: 'Those cities can carry the heavier lodging and food layers.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Boseong tea fields?',
        summary: 'Boseong is a visual and atmospheric stop. It works best with good light, weather, and an unhurried route.',
        cards: [
          { title: 'Watch weather and season', body: 'Green fields, rain, heat, and visibility all change the experience.' },
          { title: 'Do not rush the walk', body: 'The value is in texture and pacing, not only the viewpoint.' },
          { title: 'Use it as contrast', body: 'Boseong gives the south route a calm rural break between larger city chapters.' },
        ],
      },
    },
  },
  mungyeong: {
    saejae: {
      stay: {
        question: 'Should you sleep near Mungyeong Saejae?',
        summary: 'Mungyeong Saejae can justify an overnight when the route should feel like a real inland crossing rather than a fast southbound transfer.',
        cards: [
          { title: 'Stay nearby for the pass-country mood', body: 'Sleeping close lets the old road and gate landscape define the stop.' },
          { title: 'Use Mungyeong town for practical comfort', body: 'Town-side stays can be easier for food and services while still supporting Saejae.' },
          { title: 'Skip the overnight if it is only a photo stop', body: 'Saejae needs time to feel like a route chapter.' },
        ],
      },
      food: {
        question: 'How should you eat around Mungyeong Saejae?',
        summary: 'Food should support the mountain-pass rhythm: simple local meals, omija references, and recovery after walking.',
        cards: [
          { title: 'Eat after the walk when possible', body: 'A meal feels better when it lands as recovery from the pass route.' },
          { title: 'Use local products as identity', body: 'Omija and regional food cues help Mungyeong feel specific.' },
          { title: 'Keep the meal close to the route', body: 'Do not let food logistics pull the day away from the old-road chapter.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Mungyeong Saejae?',
        summary: 'Mungyeong Saejae pairs with old-road gates, pass-country walking, filming-set heritage, local food, and the onward route toward Andong or Sangju.',
        cards: [
          { title: 'Short version: first gate and old-road feel', body: 'Use this when the stop needs to prove the inland route identity quickly.' },
          { title: 'Half-day version: gates and pass walk', body: 'This is the strongest way to make Mungyeong feel meaningful.' },
          { title: 'Route version: Chungju to Mungyeong to Andong', body: 'Saejae becomes the threshold between recovery and cultural depth.' },
        ],
      },
      transport: {
        question: 'How do you fit Mungyeong Saejae into the inland route?',
        summary: 'Saejae works best with car-first or carefully planned bus movement. It should be treated as the route’s threshold, not a casual detour.',
        cards: [
          { title: 'Arrive with walking time protected', body: 'The stop loses meaning if there is no time to experience the pass.' },
          { title: 'Group it with inland movement', body: 'Chungju, Mungyeong, Sangju, and Andong make more sense when sequenced deliberately.' },
          { title: 'Avoid late rushed arrival', body: 'The old road needs daylight and energy.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Mungyeong Saejae?',
        summary: 'Mungyeong Saejae is about crossing, gates, and old-road atmosphere. It works best when the traveler slows down enough to feel the geography.',
        cards: [
          { title: 'Wear walking-friendly shoes', body: 'The value is in movement through the pass, not just standing near a gate.' },
          { title: 'Use it as route proof', body: 'This stop explains why the inland route is different from a direct transfer.' },
          { title: 'Do not overload the day', body: 'Saejae needs enough quiet space to register.' },
        ],
      },
    },
  },
  wonju: {
    museumsan: {
      stay: {
        question: 'Should you sleep near Museum SAN?',
        summary: 'Museum SAN can influence a Wonju stay when art, architecture, mountain setting, and a calm Gangwon opening matter more than city-center convenience.',
        cards: [
          { title: 'Stay nearby for a quiet art-focused reset', body: 'This works when Museum SAN is the reason to slow down before deeper Gangwon movement.' },
          { title: 'Use Wonju center for transit and food', body: 'The city core is easier when the next leg or station access matters.' },
          { title: 'Skip nearby lodging for a quick art stop', body: 'If the museum is only one stop, stay where the route needs you next.' },
        ],
      },
      food: {
        question: 'How should you eat around Museum SAN?',
        summary: 'Food should support the museum’s quiet pace. Plan cafe time or a simple meal, then use Wonju center for broader restaurant choice.',
        cards: [
          { title: 'Use cafe time as part of the visit', body: 'Museum SAN works best when the architecture, grounds, and pauses are not rushed.' },
          { title: 'Move central for dinner', body: 'Wonju city gives more flexibility after the museum closes.' },
          { title: 'Avoid heavy meal timing before the visit', body: 'The museum benefits from a lighter, more focused schedule.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Museum SAN?',
        summary: 'Museum SAN pairs with Oak Valley, mountain scenery, Wonju city food, and a calm Gangwon route opening.',
        cards: [
          { title: 'Short version: museum and grounds', body: 'Use this when the stop is about art and architecture.' },
          { title: 'Half-day version: museum and mountain resort rhythm', body: 'This gives the area enough time to feel like a retreat.' },
          { title: 'Route version: Seoul to Wonju reset', body: 'Museum SAN can make the first Gangwon stop feel intentional.' },
        ],
      },
      transport: {
        question: 'How do you get to Museum SAN smoothly?',
        summary: 'Museum SAN is not a casual walk from central Wonju. Plan car, taxi, or resort-based movement before committing.',
        cards: [
          { title: 'Use car or taxi planning', body: 'The museum’s setting is part of its appeal, but it creates transfer friction.' },
          { title: 'Do not squeeze it between tight departures', body: 'A rushed visit misses the point.' },
          { title: 'Connect it to the next Gangwon leg', body: 'Wonju works best when it prepares the route toward Jecheon, Yeongwol, or Gangneung.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Museum SAN?',
        summary: 'Museum SAN rewards quiet time, weather awareness, and a slower pace. It should not be treated like a quick indoor fallback only.',
        cards: [
          { title: 'Give the grounds time', body: 'The outdoor and architectural experience matters as much as the exhibits.' },
          { title: 'Check opening hours carefully', body: 'The museum stop needs more schedule discipline than a street district.' },
          { title: 'Use it for contrast', body: 'It gives the route a calm art-and-mountain layer before louder city chapters.' },
        ],
      },
    },
  },
  jecheon: {
    cheongpung: {
      stay: {
        question: 'Should you sleep near Cheongpung Lake?',
        summary: 'Cheongpung Lake can shape a Jecheon stay when the route wants water scenery, cable-car views, and a slower inland-nature pause.',
        cards: [
          { title: 'Stay nearby for lake scenery', body: 'This works when the view and quiet pace are the main reason for stopping.' },
          { title: 'Use Jecheon center for logistics', body: 'The city center is easier for food, rail, and onward movement.' },
          { title: 'Choose based on tomorrow’s route', body: 'A lake stay is strongest when the next day continues through nature or slow inland roads.' },
        ],
      },
      food: {
        question: 'How should you eat around Cheongpung Lake?',
        summary: 'Food around Cheongpung should be practical and scenery-friendly. Use central Jecheon when meal choice matters more.',
        cards: [
          { title: 'Keep meals close to the lake plan', body: 'Do not let food require unnecessary backtracking.' },
          { title: 'Use cafes and simple stops for recovery', body: 'The lake chapter works best when it remains calm.' },
          { title: 'Move central for a stronger dinner', body: 'Jecheon center can carry the fuller food layer after the scenic day.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Cheongpung Lake?',
        summary: 'Cheongpung Lake pairs with cable-car views, lake drives, light walks, and the Wonju-Jecheon-Yeongwol inland sequence.',
        cards: [
          { title: 'Short version: lake viewpoint', body: 'Use this when Jecheon is a scenic pause.' },
          { title: 'Half-day version: lake and cable car', body: 'This is the clearest way to make Cheongpung feel memorable.' },
          { title: 'Route version: inland nature bridge', body: 'The lake helps connect Wonju, Jecheon, and Yeongwol into one calmer branch.' },
        ],
      },
      transport: {
        question: 'How do you fit Cheongpung Lake into the route?',
        summary: 'Cheongpung Lake is easiest with car-first movement or a planned local transfer. It should be grouped with lake-side stops.',
        cards: [
          { title: 'Use car routing for the lake edge', body: 'The scenery makes more sense when movement is flexible.' },
          { title: 'Avoid city-lake-city repetition', body: 'Pick a clear sequence so the day does not become transfers.' },
          { title: 'Protect daylight', body: 'Lake views and cable-car timing need enough light.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Cheongpung Lake?',
        summary: 'Cheongpung is a scenery-first stop. Weather, visibility, and pacing decide whether it feels worth the detour.',
        cards: [
          { title: 'Check visibility', body: 'Haze or rain changes the lake-view payoff.' },
          { title: 'Do not rush the cable-car window', body: 'The main value is the view, so timing matters.' },
          { title: 'Use it as a calm branch', body: 'Cheongpung works best when the route wants inland nature, not city density.' },
        ],
      },
    },
  },
  yeongwol: {
    jangneung: {
      stay: {
        question: 'Should you sleep near Jangneung in Yeongwol?',
        summary: 'Jangneung can influence a Yeongwol stay when the route wants Danjong history, quiet reflection, and a slower inland branch ending.',
        cards: [
          { title: 'Stay in Yeongwol for the story', body: 'The town becomes stronger when Jangneung, river scenery, and history have time to settle.' },
          { title: 'Use a practical town base', body: 'Food and lodging are easier when the stay supports several Yeongwol stops, not only the tomb.' },
          { title: 'Skip overnight if the route is only passing through', body: 'Jangneung is meaningful, but it needs context to justify a full stay.' },
        ],
      },
      food: {
        question: 'How should you eat around Jangneung?',
        summary: 'Food around Jangneung should be quiet and practical, supporting a history-focused visit rather than becoming the whole point.',
        cards: [
          { title: 'Use town meals after the visit', body: 'A simple local meal gives the stop a calmer landing.' },
          { title: 'Do not rush from food to history', body: 'Jangneung needs a more respectful pace.' },
          { title: 'Plan snacks for rural movement', body: 'Yeongwol routes can include gaps between major stops.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Jangneung?',
        summary: 'Jangneung pairs with Danjong story sites, river scenery, observatory views, and the emotional end of a compact inland branch.',
        cards: [
          { title: 'Short version: Jangneung and context', body: 'Use this when the stop needs one clear historical anchor.' },
          { title: 'Half-day version: history and river views', body: 'This lets Yeongwol feel like a place, not a single tomb stop.' },
          { title: 'Route version: Jecheon to Yeongwol close', body: 'Jangneung gives the branch a more reflective ending.' },
        ],
      },
      transport: {
        question: 'How do you fit Jangneung into Yeongwol movement?',
        summary: 'Jangneung is easiest as part of a planned Yeongwol town-and-river route, usually by car or careful local transfer.',
        cards: [
          { title: 'Group history stops together', body: 'The Danjong story is stronger when not fragmented.' },
          { title: 'Use car movement for rural flexibility', body: 'Yeongwol rewards controlled timing between viewpoints and town stops.' },
          { title: 'Avoid treating it as a roadside errand', body: 'The stop needs a bit of quiet to land properly.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Jangneung?',
        summary: 'Jangneung is a respect-first historical stop. It works best when the traveler knows why Yeongwol matters before arriving.',
        cards: [
          { title: 'Read the Danjong context', body: 'The site is much stronger when the story is understood.' },
          { title: 'Keep the mood quieter', body: 'This is not a loud checklist attraction.' },
          { title: 'Pair it with landscape', body: 'Yeongwol’s river and mountain setting helps the history feel less abstract.' },
        ],
      },
    },
  },
  incheon: {
    wolmido: {
      stay: {
        question: 'Should you sleep near Wolmido in Incheon?',
        summary: 'Wolmido can shape an Incheon stay when the route needs a soft West Sea opening with harbor walks, open-port streets, Chinatown, and ferry mood.',
        cards: [
          { title: 'Stay near the harbor for atmosphere', body: 'Wolmido works best when the first night feels maritime rather than like a Seoul overflow stay.' },
          { title: 'Use Jung-gu for route coherence', body: 'Chinatown, open-port streets, and Wolmido can sit in one compact Incheon chapter.' },
          { title: 'Choose airport lodging only for transit', body: 'If the route story matters, airport convenience should not replace the port-city opening.' },
        ],
      },
      food: {
        question: 'How should you eat around Wolmido?',
        summary: 'Food around Wolmido should connect seafood, Chinatown meals, harbor snacks, and a relaxed first-night rhythm before the route moves south.',
        cards: [
          { title: 'Use Chinatown for the first meal', body: 'It gives Incheon an immediate open-port identity instead of generic arrival food.' },
          { title: 'Keep seafood close to the water', body: 'Harbor meals help the West Sea route announce itself early.' },
          { title: 'Do not overplan the first night', body: 'A simple dinner and waterfront walk usually work better than a packed checklist.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Wolmido?',
        summary: 'Wolmido pairs with Chinatown, open-port streets, Jayu Park, harbor views, and the route handoff toward Suwon.',
        cards: [
          { title: 'Short version: Wolmido and Chinatown', body: 'Use this when Incheon is a light route opener.' },
          { title: 'Half-day version: open port, park, and harbor', body: 'This gives Incheon enough historical and maritime texture.' },
          { title: 'Route version: port before fortress', body: 'Wolmido makes the move to Suwon feel like a designed contrast.' },
        ],
      },
      transport: {
        question: 'How do you fit Wolmido into Route 6?',
        summary: 'Wolmido is easiest as a compact Jung-gu loop before the route turns inland toward Suwon and then west again toward Seosan.',
        cards: [
          { title: 'Keep the Incheon loop tight', body: 'Open-port streets, food, and waterfront should not require repeated transfers.' },
          { title: 'Plan the Suwon handoff early', body: 'The next leg changes the mood from harbor to fortress city.' },
          { title: 'Use taxis or local rail pragmatically', body: 'The goal is a smooth opening chapter, not transit gymnastics.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Wolmido?',
        summary: 'Wolmido is strongest when treated as the first West Sea signal. It should support open-port context, water, food, and relaxed pacing.',
        cards: [
          { title: 'Read it as a route opener', body: 'The value is how it starts the west-coast story.' },
          { title: 'Go when the waterfront has life', body: 'Evening light and food timing make the stop more memorable.' },
          { title: 'Pair it with history nearby', body: 'Chinatown and open-port streets keep Wolmido from feeling isolated.' },
        ],
      },
    },
  },
  suwon: {
    hwaseong: {
      stay: {
        question: 'Should you sleep near Hwaseong Fortress?',
        summary: 'Hwaseong can shape a Suwon overnight when fortress walking, markets, evening food, and a reliable Route 6 city base are important.',
        cards: [
          { title: 'Stay near the wall for evening walks', body: 'The fortress feels different when it is not squeezed into a day-trip window.' },
          { title: 'Use market access for practical comfort', body: 'Paldalmun-side food makes Suwon easier as an overnight stop.' },
          { title: 'Skip the night for a quick heritage pass', body: 'If the route is moving fast, keep Suwon as a focused fortress stop.' },
        ],
      },
      food: {
        question: 'How should you eat around Hwaseong?',
        summary: 'Food around Hwaseong should use market streets, simple late meals, and walkable dinner pacing so the fortress becomes a lived-in stop.',
        cards: [
          { title: 'Eat around Paldalmun', body: 'The market layer makes Suwon feel practical as well as historic.' },
          { title: 'Pair dinner with a wall walk', body: 'That sequence gives the overnight its best rhythm.' },
          { title: 'Keep food close to the heritage core', body: 'Long detours weaken the compact fortress-city experience.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Hwaseong?',
        summary: 'Hwaseong pairs with fortress gates, palace context, Paldalmun market, and the westbound handoff toward Seosan.',
        cards: [
          { title: 'Short version: wall and gates', body: 'Use this when Suwon is the route hinge before the coast.' },
          { title: 'Half-day version: fortress, palace, and market', body: 'This gives the city enough structure to justify a stop.' },
          { title: 'Route version: inland heritage before West Sea', body: 'Suwon gives Route 6 a royal-planning chapter before Naepo and beaches.' },
        ],
      },
      transport: {
        question: 'How do you fit Hwaseong into Route 6?',
        summary: 'Hwaseong should be planned as a walkable core stop, with lodging and departure chosen around the next westbound leg.',
        cards: [
          { title: 'Arrive once, then walk', body: 'The fortress area works better without repeated car or taxi hops.' },
          { title: 'Protect the westbound exit', body: 'The next move toward Seosan can take more energy than the map suggests.' },
          { title: 'Use Suwon as the reliable service stop', body: 'This is where Route 6 can stock up before smaller coastal chapters.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Hwaseong?',
        summary: 'Hwaseong rewards walking time and context. It is more than a photo gate if the route lets the city breathe.',
        cards: [
          { title: 'Wear walking-friendly shoes', body: 'The fortress is a movement experience, not only a viewpoint.' },
          { title: 'Use evening light when possible', body: 'The wall and market combination is strongest later in the day.' },
          { title: 'Connect it to Route 6 logic', body: 'Suwon explains why the route pauses inland before the coast.' },
        ],
      },
    },
  },
  seosan: {
    haemi: {
      stay: {
        question: 'Should you sleep near Haemi in Seosan?',
        summary: 'Haemi can shape a Seosan stop when Route 6 needs Catholic memory, fortress texture, Taean access, and quieter West Sea pacing.',
        cards: [
          { title: 'Stay in Seosan for a slower Naepo chapter', body: 'The overnight works when Haemi, food, and Taean-side choices need room.' },
          { title: 'Use Haemi as the story anchor', body: 'It gives Seosan more depth than a simple transfer town.' },
          { title: 'Move on if the coast is the priority', body: 'Beach-focused travelers may base closer to Taean or Boryeong.' },
        ],
      },
      food: {
        question: 'How should you eat around Haemi?',
        summary: 'Food around Haemi should stay local and practical, using Seosan seafood, market meals, garlic flavors, and a calm stop rhythm.',
        cards: [
          { title: 'Use food to make Seosan specific', body: 'A local meal helps the stop feel grounded before the beach route continues.' },
          { title: 'Keep the meal near the next move', body: 'Haemi often sits inside a broader driving day.' },
          { title: 'Do not turn it into a food chase', body: 'The memory and route position should remain the main reason.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Haemi?',
        summary: 'Haemi pairs with Haemieupseong Fortress, Catholic pilgrimage memory, Naepo context, Taean branching, and the Boryeong handoff.',
        cards: [
          { title: 'Short version: Haemi fortress core', body: 'Use this when Seosan is a history pause.' },
          { title: 'Half-day version: Haemi and Taean gateway', body: 'This explains why Seosan matters on a West Sea route.' },
          { title: 'Route version: moral memory before beach energy', body: 'Haemi makes Boryeong feel like a tonal shift, not a random next stop.' },
        ],
      },
      transport: {
        question: 'How do you fit Haemi into Route 6?',
        summary: 'Haemi works best by car or planned bus movement, grouped with Seosan town, Taean access, or the southbound coast line.',
        cards: [
          { title: 'Choose the branch before arriving', body: 'Decide whether the day bends toward Taean or continues toward Boryeong.' },
          { title: 'Keep Haemi as a compact stop', body: 'The site is strongest when the route around it is clear.' },
          { title: 'Avoid late-day overextension', body: 'West-coast driving can make small detours feel larger.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Haemi?',
        summary: 'Haemi needs respectful framing because its value is historical and memorial, not only scenic.',
        cards: [
          { title: 'Understand the memory layer', body: 'The stop has deeper weight than a casual fortress walk.' },
          { title: 'Use it to slow the route', body: 'Haemi gives Route 6 a quieter chapter before festival and beach energy.' },
          { title: 'Pair it with one local meal', body: 'That keeps Seosan usable without overbuilding the stop.' },
        ],
      },
    },
  },
  boryeong: {
    daecheon: {
      stay: {
        question: 'Should you sleep near Daecheon Beach?',
        summary: 'Daecheon can shape a Boryeong stay when Route 6 needs beach energy, festival identity, seafood, and a lighter pause before Gunsan.',
        cards: [
          { title: 'Stay near the beach in summer', body: 'This is when Boryeong has the strongest reason to hold a night.' },
          { title: 'Use Daecheon for a soft reset', body: 'The beach can make the next modern-history chapter easier to absorb.' },
          { title: 'Skip the overnight outside your season', body: 'If beach time is not the point, keep Boryeong as a short coastal pause.' },
        ],
      },
      food: {
        question: 'How should you eat around Daecheon Beach?',
        summary: 'Food around Daecheon should be casual, coastal, and timing-led: seafood, beach meals, festival snacks, and sunset pacing.',
        cards: [
          { title: 'Plan dinner near the beach', body: 'The meal works best when it stays tied to the water.' },
          { title: 'Keep festival days flexible', body: 'Crowds and events can change the food rhythm quickly.' },
          { title: 'Use seafood as the simple payoff', body: 'A clear coastal meal is usually enough here.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Daecheon?',
        summary: 'Daecheon pairs with the beach, Mud Festival zone, seafood, sunset walks, and the southbound move toward Gunsan.',
        cards: [
          { title: 'Short version: beach and meal', body: 'Use this when Boryeong is a quick coastal reset.' },
          { title: 'Festival version: mud zone and beach stay', body: 'This is the strongest global-search hook for Boryeong.' },
          { title: 'Route version: playful coast before port memory', body: 'Daecheon gives Route 6 a lighter chapter before Gunsan.' },
        ],
      },
      transport: {
        question: 'How do you fit Daecheon into Route 6?',
        summary: 'Daecheon should be planned around beach timing, festival crowds, and the onward line to Gunsan.',
        cards: [
          { title: 'Check season and event timing', body: 'Boryeong changes dramatically around festival periods.' },
          { title: 'Keep luggage and parking simple', body: 'Beach stops become annoying when logistics sprawl.' },
          { title: 'Leave enough energy for Gunsan', body: 'The next chapter asks for museums and old-street walking.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Daecheon?',
        summary: 'Daecheon is best when treated as a seasonal beach and festival chapter, not as a generic attraction list.',
        cards: [
          { title: 'Let the beach be the point', body: 'Overloading Boryeong can weaken the easy coastal mood.' },
          { title: 'Prepare for crowds in peak season', body: 'Festival timing can change transport, food, and lodging pressure.' },
          { title: 'Use it as contrast', body: 'The route needs this lighter chapter before Gunsan gets serious.' },
        ],
      },
    },
  },
  gunsan: {
    modernhistory: {
      stay: {
        question: 'Should you sleep near Gunsan modern-history streets?',
        summary: 'Gunsan is worth an overnight when modern port memory, old streets, bakeries, seafood, and museums should carry the middle of Route 6.',
        cards: [
          { title: 'Stay close to the old port district', body: 'The city works best when museums, streets, food, and cafes are easy to connect.' },
          { title: 'Use Gunsan as the serious middle chapter', body: 'It gives Route 6 historical weight after the beach pause.' },
          { title: 'Skip the night only on a fast west-coast drive', body: 'A rushed stop can flatten what makes Gunsan useful.' },
        ],
      },
      food: {
        question: 'How should you eat around Gunsan old streets?',
        summary: 'Food around Gunsan should use bakeries, seafood, old-town cafes, and simple harbor meals to soften a history-heavy visit.',
        cards: [
          { title: 'Use bakeries as a city texture', body: 'They make the modern-history walk feel lived in rather than museum-only.' },
          { title: 'Plan one harbor or seafood meal', body: 'The port identity should be visible in the food layer.' },
          { title: 'Keep cafes near the old streets', body: 'Short pauses help the history chapter stay walkable.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Gunsan modern history?',
        summary: 'Gunsan modern history pairs with the museum district, old Japanese-style streets, bakeries, harbor food, and the Mokpo handoff.',
        cards: [
          { title: 'Short version: museum and old streets', body: 'Use this when Gunsan is the route history anchor.' },
          { title: 'Half-day version: museum, bakery, harbor meal', body: 'This gives the city enough everyday texture.' },
          { title: 'Route version: port memory before southwest arrival', body: 'Gunsan prepares Mokpo to feel like a finale.' },
        ],
      },
      transport: {
        question: 'How do you fit Gunsan into Route 6?',
        summary: 'Gunsan should be handled as a walkable old-port core with a clear onward plan toward Mokpo or another southwest stop.',
        cards: [
          { title: 'Cluster the old-town stops', body: 'The history district works best as one connected walk.' },
          { title: 'Protect museum hours', body: 'The chapter loses force if the key institutions are closed.' },
          { title: 'Plan the long next leg', body: 'Mokpo or other southwest movement needs realistic timing.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Gunsan modern history?',
        summary: 'Gunsan needs careful tone: old streets are attractive, but the colonial-era and port-memory context should stay visible.',
        cards: [
          { title: 'Keep the context clear', body: 'The stop is not only aesthetic streets and bakeries.' },
          { title: 'Use food to balance the weight', body: 'Meals and cafes make the chapter approachable without erasing history.' },
          { title: 'Let Gunsan set up Mokpo', body: 'Together they make Route 6 feel like a complete port-history line.' },
        ],
      },
    },
  },
  gongju: {
    gongsanseong: {
      stay: {
        question: 'Should you sleep near Gongsanseong Fortress?',
        summary: 'Gongsanseong can shape a Gongju overnight when Baekje history, river walking, and a quieter heritage stop matter more than fast city-to-city movement.',
        cards: [
          { title: 'Stay central for Baekje context', body: 'A central Gongju stay keeps the fortress, river, museum logic, and food close enough to feel connected.' },
          { title: 'Use Gongju as a calm heritage pause', body: 'The city works when the route needs a quieter historical chapter between bigger urban stops.' },
          { title: 'Skip the overnight for a quick fortress walk', body: 'If the fortress is only a short stop, lodging should follow the next route city.' },
        ],
      },
      food: {
        question: 'How should you eat around Gongsanseong?',
        summary: 'Food around Gongsanseong should support a relaxed heritage walk. Use central Gongju for simple local meals before or after the fortress.',
        cards: [
          { title: 'Eat after the fortress walk', body: 'A meal lands better once the river and wall route have given the stop its shape.' },
          { title: 'Keep food close to the old core', body: 'The city is compact enough that food should not pull the route away from the heritage area.' },
          { title: 'Use cafes as a soft pause', body: 'A slower coffee stop can help Gongju feel like a real chapter, not a pass-through.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Gongsanseong?',
        summary: 'Gongsanseong pairs with the Geumgang River, Baekje royal tomb context, Gongju National Museum, and a slower old-city walk.',
        cards: [
          { title: 'Short version: fortress and river view', body: 'Use this when Gongju is a heritage pause inside a longer drive.' },
          { title: 'Half-day version: fortress and museum context', body: 'This gives the Baekje story enough weight to matter.' },
          { title: 'Route version: Gongju before Jeolla movement', body: 'Gongju can prepare the route for deeper western and southern history.' },
        ],
      },
      transport: {
        question: 'How do you fit Gongsanseong into the route?',
        summary: 'Gongsanseong is easiest as a walkable central stop after parking or taxi arrival. It should be planned as a compact heritage loop.',
        cards: [
          { title: 'Park or arrive once, then walk', body: 'The fortress and river work better without repeated vehicle moves.' },
          { title: 'Protect daylight', body: 'The wall and river views need enough light to land properly.' },
          { title: 'Keep the next leg realistic', body: 'Gongju is calm, so do not make it a rushed add-on before a long drive.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Gongsanseong?',
        summary: 'Gongsanseong rewards context and a slower pace. It is more meaningful when visitors understand Gongju as a Baekje capital layer.',
        cards: [
          { title: 'Read it as Baekje history', body: 'The fortress is stronger when it is not just another wall walk.' },
          { title: 'Wear walking-friendly shoes', body: 'The route includes slopes, walls, and uneven sections.' },
          { title: 'Pair with the river', body: 'The Geumgang setting helps the stop feel specific to Gongju.' },
        ],
      },
    },
  },
  damyang: {
    juknokwon: {
      stay: {
        question: 'Should you sleep near Juknokwon?',
        summary: 'Juknokwon can shape a Damyang stay when bamboo forest calm, slow food, and a softer Jeolla pause are the reason for stopping.',
        cards: [
          { title: 'Stay nearby for a quieter morning', body: 'Bamboo paths feel better before the day becomes busy or hot.' },
          { title: 'Use Gwangju for broader logistics', body: 'If the route needs more hotels, transit, or nightlife, Gwangju can be the better base.' },
          { title: 'Choose Damyang for atmosphere', body: 'The overnight value is calm, food, and green scenery rather than dense sightseeing.' },
        ],
      },
      food: {
        question: 'How should you eat around Juknokwon?',
        summary: 'Damyang food should connect to bamboo, tteokgalbi, noodles, cafes, and a slower Jeolla meal rhythm.',
        cards: [
          { title: 'Plan one proper local meal', body: 'Damyang is stronger when food is part of the stop, not an afterthought.' },
          { title: 'Use cafes after the bamboo walk', body: 'A cafe pause helps the forest visit become a calm half-day rather than a quick path.' },
          { title: 'Do not overfill the food list', body: 'One good meal and one slow pause usually beat chasing every specialty.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Juknokwon?',
        summary: 'Juknokwon pairs with Meta Provence, Gwanbangjerim, local food streets, and a slow green Jeolla route.',
        cards: [
          { title: 'Short version: bamboo walk', body: 'Use this when Damyang is a green reset between larger cities.' },
          { title: 'Half-day version: bamboo, food, and riverside trees', body: 'This gives the town enough texture to justify the stop.' },
          { title: 'Route version: Gwangju to Damyang pause', body: 'Damyang softens the route before deeper Jeolla or mountain movement.' },
        ],
      },
      transport: {
        question: 'How do you fit Juknokwon into the route?',
        summary: 'Juknokwon works best by car or deliberate local transfer from Gwangju or nearby Jeolla stops.',
        cards: [
          { title: 'Use car-first routing when possible', body: 'Damyang is easier when food, forest, and riverside stops can be linked flexibly.' },
          { title: 'Avoid making it a rushed detour', body: 'The stop is about calm, so tight timing weakens it.' },
          { title: 'Pair it with Gwangju or Boseong logic', body: 'Damyang can be a green pause in a broader Jeolla route.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Juknokwon?',
        summary: 'Juknokwon is atmosphere-led. Weather, heat, and crowd timing decide whether it feels peaceful or merely busy.',
        cards: [
          { title: 'Go earlier in warm seasons', body: 'Morning helps with heat, light, and crowd pressure.' },
          { title: 'Let the stop stay simple', body: 'Bamboo, food, and a cafe are enough.' },
          { title: 'Use it as contrast', body: 'Damyang gives the route a green and quiet texture between heavier city chapters.' },
        ],
      },
    },
  },
  taean: {
    mallipo: {
      stay: {
        question: 'Should you sleep near Mallipo Beach?',
        summary: 'Mallipo can shape a Taean stay when west-coast sunsets, beach pacing, and a slower peninsula drive are the point.',
        cards: [
          { title: 'Stay nearby for sunset and morning beach time', body: 'The coast feels more worthwhile when the visit is not squeezed into one quick stop.' },
          { title: 'Use Taean town for practical needs', body: 'Town-side lodging can be easier if food, errands, or onward driving matter more.' },
          { title: 'Choose the beach for mood, not transit', body: 'Mallipo is a stay choice for atmosphere rather than central convenience.' },
        ],
      },
      food: {
        question: 'How should you eat around Mallipo?',
        summary: 'Food around Mallipo should support beach timing: seafood, simple coastal meals, and sunset-friendly pacing.',
        cards: [
          { title: 'Plan dinner around sunset', body: 'The meal works better when it leads into or follows the west-coast light.' },
          { title: 'Keep lunch simple on beach days', body: 'A heavy schedule can make the coast feel like logistics instead of rest.' },
          { title: 'Use seafood when the group wants a payoff', body: 'Coastal meals help Taean feel distinct from inland stopovers.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Mallipo Beach?',
        summary: 'Mallipo pairs with Taean coastal drives, beaches, sunset viewpoints, and a slower west-coast road-trip rhythm.',
        cards: [
          { title: 'Short version: beach and sunset', body: 'Use this when Taean is a scenic coastal pause.' },
          { title: 'Half-day version: beach, cafe, and coast road', body: 'This gives the peninsula enough time to feel different from a city stop.' },
          { title: 'Route version: west-coast reset', body: 'Mallipo can make the route breathe before returning inland or south.' },
        ],
      },
      transport: {
        question: 'How do you fit Mallipo into a Taean route?',
        summary: 'Mallipo is car-first for most travelers. It works best inside a coastal loop rather than as a public-transport-heavy side trip.',
        cards: [
          { title: 'Use car routing deliberately', body: 'The beach and nearby coast stops need flexible timing.' },
          { title: 'Avoid overloading the peninsula', body: 'Too many beach hops can blur together and create fatigue.' },
          { title: 'Plan the return after dark', body: 'Sunset stops need a realistic driving plan afterward.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Mallipo?',
        summary: 'Mallipo is weather and sunset dependent. It is strongest when the route gives the west coast enough room.',
        cards: [
          { title: 'Check tide, wind, and weather', body: 'Beach comfort changes quickly on the west coast.' },
          { title: 'Do not rush the sunset', body: 'The main value is timing, not a long checklist.' },
          { title: 'Use it as a rest chapter', body: 'Mallipo works when the trip needs a soft coastal pause.' },
        ],
      },
    },
  },
  jirisan: {
    trail: {
      stay: {
        question: 'Should you sleep near Jirisan trail access?',
        summary: 'Jirisan should shape lodging when mountain access, early starts, valley rest, and a serious nature chapter are central to the route.',
        cards: [
          { title: 'Stay near the trail for early movement', body: 'Mountain days are much easier when the first transfer is short.' },
          { title: 'Use a valley or town base for recovery', body: 'If the trip is not a hard hike, comfort and food access can matter more than trail proximity.' },
          { title: 'Do not choose lodging casually', body: 'Jirisan is large, so the wrong base can add major route friction.' },
        ],
      },
      food: {
        question: 'How should you eat around Jirisan?',
        summary: 'Food around Jirisan should support energy and recovery: simple breakfasts, post-hike meals, local mountain food, and practical snacks.',
        cards: [
          { title: 'Plan breakfast before the mountain', body: 'A serious nature day needs a reliable start.' },
          { title: 'Use local meals as recovery', body: 'Post-hike food is part of the value of staying near the mountain.' },
          { title: 'Carry snacks and water', body: 'Do not depend on perfect food access during trail windows.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Jirisan?',
        summary: 'Jirisan pairs with trail access, valley scenery, temples, local villages, and a slower mountain-road chapter.',
        cards: [
          { title: 'Short version: valley and viewpoint', body: 'Use this when the route needs mountain atmosphere without a full hike.' },
          { title: 'Half-day version: trail, temple, and meal', body: 'This gives the mountain enough texture while staying realistic.' },
          { title: 'Full-day version: hike-first planning', body: 'If hiking is the point, protect the day from extra sightseeing.' },
        ],
      },
      transport: {
        question: 'How do you fit Jirisan into the route?',
        summary: 'Jirisan requires deliberate base selection. Car-first movement is usually easiest, and trailhead choice should come before hotel choice.',
        cards: [
          { title: 'Pick the access side first', body: 'Different Jirisan areas are not interchangeable.' },
          { title: 'Protect daylight and energy', body: 'Mountain movement punishes overpacked schedules.' },
          { title: 'Plan the exit route', body: 'Know whether the next move is Namwon, Hadong, Gurye, Sancheong, or another south route.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Jirisan?',
        summary: 'Jirisan is not a casual single-point attraction. Weather, trail choice, lodging base, and traveler ability all matter.',
        cards: [
          { title: 'Match the route to ability', body: 'A valley walk and a summit hike are completely different days.' },
          { title: 'Check mountain weather', body: 'Conditions can change quickly and affect safety and enjoyment.' },
          { title: 'Give the mountain respect', body: 'Jirisan works best when the itinerary slows down around it.' },
        ],
      },
    },
  },
  mokpo: {
    gatbawi: {
      stay: {
        question: 'Should you sleep near Mokpo Gatbawi?',
        summary: 'Gatbawi can support a Mokpo stay when the route wants harbor scenery, evening walks, and a southwest-coast launch point.',
        cards: [
          { title: 'Stay in Mokpo for the harbor chapter', body: 'The city works best when evening food, water views, and the next coastal leg are connected.' },
          { title: 'Use a central or waterfront base', body: 'Lodging should support both Gatbawi and Mokpo food/port movement.' },
          { title: 'Skip nearby lodging for a quick stop', body: 'If Gatbawi is only a viewpoint, choose the hotel by the next route segment.' },
        ],
      },
      food: {
        question: 'How should you eat around Gatbawi?',
        summary: 'Mokpo food should lean into seafood, harbor meals, and southwest market texture before or after the Gatbawi walk.',
        cards: [
          { title: 'Use seafood as the anchor', body: 'Mokpo needs a real meal layer to feel like more than a viewpoint stop.' },
          { title: 'Pair food with evening water views', body: 'Dinner and a walk make the city feel coherent.' },
          { title: 'Keep breakfast practical before departure', body: 'Mokpo often launches longer south-coast routes, so the morning should stay simple.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Gatbawi?',
        summary: 'Gatbawi pairs with Mokpo harbor, museums, seafood, Yudalsan, and the route handoff toward Haenam, Wando, or the south coast.',
        cards: [
          { title: 'Short version: Gatbawi walk and food', body: 'Use this when Mokpo is an arrival or departure city.' },
          { title: 'Half-day version: harbor, Yudalsan, and seafood', body: 'This gives Mokpo more city identity.' },
          { title: 'Route version: southwest launch', body: 'Gatbawi can mark the start of the Haenam/Wando/Boseong line.' },
        ],
      },
      transport: {
        question: 'How do you fit Gatbawi into Mokpo movement?',
        summary: 'Gatbawi is easiest when combined with a waterfront or central Mokpo loop. The route should also account for ferries, trains, or southbound driving.',
        cards: [
          { title: 'Keep the harbor loop compact', body: 'Food, views, and lodging should not require too many transfers.' },
          { title: 'Plan onward movement early', body: 'Mokpo often sits at the start of a bigger south-coast route.' },
          { title: 'Use taxis for short city hops', body: 'This can preserve energy before longer regional travel.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Gatbawi?',
        summary: 'Gatbawi is strongest as part of Mokpo’s harbor identity, not as an isolated rock formation stop.',
        cards: [
          { title: 'Go when the light is good', body: 'Waterfront stops depend heavily on atmosphere.' },
          { title: 'Pair with Mokpo food', body: 'The city needs its seafood and port layer to feel complete.' },
          { title: 'Use it as a route marker', body: 'Gatbawi helps signal the move into Korea’s southwest coast.' },
        ],
      },
    },
  },
  haenam: {
    ttangkkeut: {
      stay: {
        question: 'Should you sleep near Ttangkkeut Village?',
        summary: 'Ttangkkeut can shape a Haenam stay when the route wants land-end symbolism, slow coast, and a clear southwest turning point.',
        cards: [
          { title: 'Stay nearby for the land-end feeling', body: 'The stop becomes more meaningful when it is not rushed as a quick signboard photo.' },
          { title: 'Use Haenam or Wando for broader logistics', body: 'Depending on the next leg, another base may make food and movement easier.' },
          { title: 'Choose the stay by the next coast segment', body: 'Ttangkkeut matters most when it supports the route toward Wando, Mokpo, or the south coast.' },
        ],
      },
      food: {
        question: 'How should you eat around Ttangkkeut?',
        summary: 'Food around Ttangkkeut should stay simple and coastal. The main value is the route marker, with fuller meals often better in Haenam, Wando, or Mokpo.',
        cards: [
          { title: 'Keep the meal close to the coast', body: 'Simple seafood or local meals fit the mood better than a complicated detour.' },
          { title: 'Use nearby towns for more choice', body: 'If the group needs variety, plan the main meal outside the land-end stop.' },
          { title: 'Carry snacks for long drives', body: 'Southwest coastal movement can stretch between reliable stops.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Ttangkkeut?',
        summary: 'Ttangkkeut pairs with land-end viewpoints, coastal drives, Duryunsan, Wando handoff, and the symbolic start or end of a southwest route.',
        cards: [
          { title: 'Short version: land-end viewpoint', body: 'Use this when the stop is symbolic and precise.' },
          { title: 'Half-day version: Ttangkkeut and coastal road', body: 'This gives Haenam enough landscape context.' },
          { title: 'Route version: Mokpo to Wando hinge', body: 'Ttangkkeut can make the southwest route feel authored rather than random.' },
        ],
      },
      transport: {
        question: 'How do you fit Ttangkkeut into the route?',
        summary: 'Ttangkkeut is car-first and remote. It should be planned as a deliberate endpoint or hinge, not a casual side trip.',
        cards: [
          { title: 'Respect the distance', body: 'The land-end feeling comes with real travel time.' },
          { title: 'Link it to Wando or Mokpo', body: 'The stop works better when connected to a clear coast sequence.' },
          { title: 'Avoid late exhausted arrivals', body: 'A symbolic stop loses power when the traveler only wants to leave.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Ttangkkeut?',
        summary: 'Ttangkkeut is about meaning and geography. It works when the route gives the land-end idea enough attention.',
        cards: [
          { title: 'Use it as a route statement', body: 'This is the place that says the southwest edge matters.' },
          { title: 'Check weather and visibility', body: 'Coastal views and ferry-like atmosphere change quickly.' },
          { title: 'Do not overpack the day', body: 'The distance itself is part of the chapter.' },
        ],
      },
    },
  },
  wando: {
    cheongsando: {
      stay: {
        question: 'Should you sleep near Wando or Cheongsando access?',
        summary: 'Wando is worth a stay when Route 7 needs island tempo, ferry rhythm, seafood, and a clear Dadohae chapter after Haenam.',
        cards: [
          { title: 'Stay for ferry flexibility', body: 'Island days work better when the first boat or return window is not stressful.' },
          { title: 'Use Wando town for practical services', body: 'Hotels, food, and port access make the island plan easier to control.' },
          { title: 'Skip the overnight if ferries are not central', body: 'If Cheongsando is not part of the day, Wando can stay a shorter seafood stop.' },
        ],
      },
      food: {
        question: 'How should you eat around Wando?',
        summary: 'Wando food should lead with seafood, seaweed, abalone, harbor meals, and simple island-day pacing.',
        cards: [
          { title: 'Anchor one meal in seafood', body: 'The food layer should make the Dadohae setting obvious.' },
          { title: 'Keep ferry days simple', body: 'Meals should support boat timing instead of fighting it.' },
          { title: 'Use seaweed and abalone as local cues', body: 'They make Wando feel specific rather than just another port.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Cheongsando access?',
        summary: 'Cheongsando pairs with Wando harbor, island ferry timing, seafood, Wando Arboretum, and the Boseong handoff.',
        cards: [
          { title: 'Short version: harbor meal and sea view', body: 'Use this when Wando is a compact coastal pause.' },
          { title: 'Island version: Cheongsando day', body: 'This is the strongest reason to slow Route 7 here.' },
          { title: 'Route version: land end to island country', body: 'Wando proves the south coast is becoming maritime, not just scenic.' },
        ],
      },
      transport: {
        question: 'How do you fit Wando into Route 7?',
        summary: 'Wando needs ferry-aware planning. The route should decide early whether the city is a port stop, an island day, or a full overnight.',
        cards: [
          { title: 'Check ferry windows first', body: 'Boat timing should shape the day before hotels or meals do.' },
          { title: 'Keep the next handoff realistic', body: 'Boseong or Suncheon movement can feel long after an island day.' },
          { title: 'Use car-first movement on the mainland', body: 'The town, port, arboretum, and onward route are easier with flexible timing.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Wando?',
        summary: 'Wando works when the route respects island logistics. Weather, ferry timing, and food pacing decide whether it feels smooth.',
        cards: [
          { title: 'Treat ferries as the spine', body: 'Do not add Cheongsando casually without checking the day structure.' },
          { title: 'Let seafood do real work', body: 'Food is part of Wando’s route identity.' },
          { title: 'Use it as a maritime turn', body: 'This is where Route 7 stops feeling like a mainland road.' },
        ],
      },
    },
  },
  geoje: {
    powcamp: {
      stay: {
        question: 'Should you sleep near Geoje POW Camp or the island coast?',
        summary: 'Geoje is worth a final island stay when Route 7 needs Korean War memory, shipbuilding scale, Windy Hill scenery, and a slower approach to Busan.',
        cards: [
          { title: 'Stay for the final island chapter', body: 'Geoje gives the Busan arrival more shape than a direct transfer.' },
          { title: 'Choose the base by purpose', body: 'Stay central for POW Camp and services, or coast-side for Windy Hill and island scenery.' },
          { title: 'Skip the night only if Busan must land fast', body: 'Rushing Geoje can flatten one of Route 7’s strongest contrasts.' },
        ],
      },
      food: {
        question: 'How should you eat around Geoje?',
        summary: 'Geoje food should support island movement: seafood, harbor meals, market food, and simple stops between history and coastline.',
        cards: [
          { title: 'Use seafood as the island anchor', body: 'A coastal meal keeps Geoje tied to Route 7’s maritime logic.' },
          { title: 'Plan food around long island drives', body: 'Distances can feel larger than they look.' },
          { title: 'Keep dinner near the stay base', body: 'After scenery and history, simple logistics matter.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Geoje POW Camp?',
        summary: 'Geoje POW Camp pairs with Windy Hill, Oedo access, shipbuilding context, beaches, harbor food, and the bridge handoff to Busan.',
        cards: [
          { title: 'Short version: POW Camp and meal', body: 'Use this when Geoje is a history stop before Busan.' },
          { title: 'Scenery version: Windy Hill and coast road', body: 'This gives the island its visual payoff.' },
          { title: 'Route version: modern island before metropolis', body: 'Geoje prepares Busan by showing maritime Korea at a different scale.' },
        ],
      },
      transport: {
        question: 'How do you fit Geoje into Route 7?',
        summary: 'Geoje is car-first for most travelers. The day should be built around one history anchor, one coast anchor, and a realistic Busan handoff.',
        cards: [
          { title: 'Do not underestimate island distance', body: 'Windy Hill, Oedo access, and central Geoje are not one tiny cluster.' },
          { title: 'Pick one scenic priority', body: 'Trying to chase every coast stop can blur the island.' },
          { title: 'Plan the bridge line to Busan', body: 'The final handoff should feel deliberate, not exhausted.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Geoje?',
        summary: 'Geoje needs balance. It is scenic, but its Korean War memory and shipbuilding context make the stop more serious than a beach detour.',
        cards: [
          { title: 'Hold history and scenery together', body: 'POW Camp memory gives Geoje weight beside Windy Hill views.' },
          { title: 'Check boat and weather conditions', body: 'Oedo and coastal plans depend on visibility and operations.' },
          { title: 'Use it to slow the Busan arrival', body: 'Geoje makes the final metropolis feel earned.' },
        ],
      },
    },
  },
  gwangju: {
    may18: {
      stay: {
        question: 'Should you sleep near Gwangju’s May 18 memory sites?',
        summary: 'Gwangju deserves an overnight when the route needs modern democratic history, civic memory, culture, food, and a serious Honam chapter.',
        cards: [
          { title: 'Stay for modern-history context', body: 'A night gives the city enough time to be more than a solemn checkpoint.' },
          { title: 'Use central Gwangju for balance', body: 'Culture, food, and May 18 memory are easier to connect from a central base.' },
          { title: 'Skip the overnight only on a very tight route', body: 'Reducing Gwangju to a transfer weakens Route 5 and Route 8.' },
        ],
      },
      food: {
        question: 'How should you eat around Gwangju’s modern-history chapter?',
        summary: 'Food in Gwangju should support reflection and city life: markets, local meals, cafes, and a slower evening after civic-memory sites.',
        cards: [
          { title: 'Use food as a recovery layer', body: 'A respectful history day needs a softer city rhythm afterward.' },
          { title: 'Keep meals central', body: 'The city works best when culture, food, and memory stay connected.' },
          { title: 'Do not make food erase the context', body: 'Gwangju’s gravity should remain visible even when the page becomes practical.' },
        ],
      },
      attractions: {
        question: 'What should you combine with May 18 sites?',
        summary: 'May 18 memory pairs with the Asia Culture Center, Yangnim-dong, markets, Mudeungsan, and the handoff toward Suncheon or Mokpo.',
        cards: [
          { title: 'Short version: memory and culture core', body: 'Use this when Gwangju is a focused civic-history stop.' },
          { title: 'Fuller version: May 18, ACC, food, and neighborhood walk', body: 'This lets the city feel alive without flattening the memory.' },
          { title: 'Route version: Honam seriousness before coast', body: 'Gwangju gives the southbound route moral and modern weight.' },
        ],
      },
      transport: {
        question: 'How do you fit Gwangju into the route?',
        summary: 'Gwangju should be planned as a major city chapter, with enough time for civic-memory sites and a clean onward move to Suncheon or Mokpo.',
        cards: [
          { title: 'Give the city enough time', body: 'A serious site plus food and culture needs more than a rushed stop.' },
          { title: 'Choose the next direction clearly', body: 'The route can turn toward Suncheon ecology or Mokpo harbor.' },
          { title: 'Use city transport pragmatically', body: 'Taxis and transit can keep the day from becoming fragmented.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Gwangju May 18 sites?',
        summary: 'Gwangju requires respectful travel framing. The city should be written as modern civic history plus living culture, not tragedy tourism.',
        cards: [
          { title: 'Lead with respect', body: 'May 18 memory is central to modern Korean democracy.' },
          { title: 'Pair memory with present culture', body: 'ACC, food, and neighborhoods show the city continuing forward.' },
          { title: 'Avoid rushing the chapter', body: 'The route is better when Gwangju has room to land.' },
        ],
      },
    },
  },
  namwon: {
    gwanghallu: {
      stay: {
        question: 'Should you sleep near Gwanghalluwon in Namwon?',
        summary: 'Namwon is worth a stay when the route needs Chunhyang story, garden atmosphere, local food, and a Jirisan-edge pause between Jeonju and Suncheon.',
        cards: [
          { title: 'Stay for the story-city mood', body: 'Gwanghalluwon works better when evening and morning give it time.' },
          { title: 'Use Namwon as a softer inland hinge', body: 'It changes the route from Jeonju food culture toward mountain-edge storytelling.' },
          { title: 'Skip the night if Suncheon is the priority', body: 'Fast ecology-focused routes may keep Namwon as a compact stop.' },
        ],
      },
      food: {
        question: 'How should you eat around Gwanghalluwon?',
        summary: 'Food around Namwon should be local, calm, and practical, supporting the garden and Chunhyang story without overloading the day.',
        cards: [
          { title: 'Plan one local meal after the garden', body: 'The stop lands better when food follows the story walk.' },
          { title: 'Keep the evening slow', body: 'Namwon’s value is atmosphere more than density.' },
          { title: 'Use food before mountain or wetland movement', body: 'The next leg needs energy and clear timing.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Gwanghalluwon?',
        summary: 'Gwanghalluwon pairs with Chunhyang theme sites, Namwon old-town walking, Jirisan-edge scenery, and the Suncheon handoff.',
        cards: [
          { title: 'Short version: garden and Chunhyang context', body: 'Use this when Namwon is a literary-story pause.' },
          { title: 'Half-day version: garden, town meal, Jirisan edge', body: 'This gives the city enough route texture.' },
          { title: 'Route version: Jeonju to mountain story', body: 'Namwon makes the middle of Jeolla feel authored.' },
        ],
      },
      transport: {
        question: 'How do you fit Namwon into Route 5?',
        summary: 'Namwon should be used as a measured stop between Jeonju, Imsil, Jirisan-edge scenery, and Suncheon.',
        cards: [
          { title: 'Keep the garden walk protected', body: 'Gwanghalluwon needs calm time, not a leftover hour.' },
          { title: 'Decide between Jirisan and Suncheon next', body: 'The next direction changes the day’s pacing.' },
          { title: 'Use Namwon for route rhythm', body: 'It prevents the Jeolla route from jumping too abruptly.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Gwanghalluwon?',
        summary: 'Gwanghalluwon is strongest when the traveler understands Namwon as a story city and not only a pretty garden.',
        cards: [
          { title: 'Read the Chunhyang layer', body: 'The garden has more meaning when the story is visible.' },
          { title: 'Let the pace stay gentle', body: 'Namwon rewards quiet more than checklist speed.' },
          { title: 'Use it between food and nature chapters', body: 'It bridges Jeonju, Imsil, Jirisan, and Suncheon well.' },
        ],
      },
    },
  },
  imsil: {
    cheese: {
      stay: {
        question: 'Should you sleep near Imsil Cheese Theme Park?',
        summary: 'Imsil is usually a short route stop, but it can justify a pause when cheese, Okjeongho scenery, and rural Jeolla pacing fill the Jeonju-to-Namwon gap.',
        cards: [
          { title: 'Use Imsil as a half-day bridge', body: 'It is strongest when it solves the middle of the route rather than becoming the whole trip.' },
          { title: 'Stay only for a rural slow day', body: 'An overnight works when Okjeongho or countryside pacing matters.' },
          { title: 'Base elsewhere for broader services', body: 'Jeonju or Namwon will usually handle lodging more easily.' },
        ],
      },
      food: {
        question: 'How should you eat around Imsil Cheese Theme Park?',
        summary: 'Food in Imsil should lean into cheese, local dairy identity, simple rural meals, and snacks that make the branch memorable.',
        cards: [
          { title: 'Let cheese be the hook', body: 'The stop works because the food-production story is specific and easy to understand.' },
          { title: 'Keep the meal playful but grounded', body: 'Imsil should feel like local production, not only novelty.' },
          { title: 'Use snacks for route movement', body: 'A lighter stop can bridge Jeonju and Namwon cleanly.' },
        ],
      },
      attractions: {
        question: 'What should you combine with Imsil Cheese Theme Park?',
        summary: 'Imsil Cheese Theme Park pairs with local dairy history, Okjeongho lake scenery, rural roads, and the Namwon handoff.',
        cards: [
          { title: 'Short version: cheese stop and snack', body: 'Use this when Imsil fills a transfer gap.' },
          { title: 'Half-day version: cheese and lake scenery', body: 'This gives the branch enough visual contrast.' },
          { title: 'Route version: modern local food before story city', body: 'Imsil makes Namwon feel like the next chapter, not an abrupt detour.' },
        ],
      },
      transport: {
        question: 'How do you fit Imsil into the route?',
        summary: 'Imsil works best by car or planned local transfer between Jeonju, Okjeongho, and Namwon.',
        cards: [
          { title: 'Use it to break up the middle', body: 'The stop is most useful when it improves route rhythm.' },
          { title: 'Do not overbuild the day', body: 'Cheese, lake, and one meal are enough.' },
          { title: 'Keep Namwon or Jeonju as the anchor', body: 'Imsil usually supports the route rather than replacing a city stay.' },
        ],
      },
      tips: {
        question: 'What should you know before visiting Imsil Cheese Theme Park?',
        summary: 'Imsil should be framed as modern local production and rural Jeolla texture, not just a quirky theme-park detour.',
        cards: [
          { title: 'Treat the cheese story seriously enough', body: 'It gives the route a present-day local-production layer.' },
          { title: 'Pair with scenery if time allows', body: 'Okjeongho helps the stop feel less one-note.' },
          { title: 'Use it selectively', body: 'The stop is best for travelers who enjoy food identity and slower branches.' },
        ],
      },
    },
  },
};

export function getHotspotCategoryPage(category: string): HotspotCategoryPage | null {
  return HOTSPOT_CATEGORY_PAGES.find((page) => page.key === category) ?? null;
}

function normalizeHotspotSlug(hotspotSlug: string) {
  if (hotspotSlug === 'gyeongbok') return 'gyeongbokgung';
  if (['haeundae-beach', 'haeundae-beach-busan'].includes(hotspotSlug)) return 'haeundae';
  if (['gwangalli-beach', 'gwanganri', 'gwanganli'].includes(hotspotSlug)) return 'gwangalli';
  if (['seomyeon-street', 'seomyeon-food-street'].includes(hotspotSlug)) return 'seomyeon';
  if (['bulguksa-temple'].includes(hotspotSlug)) return 'bulguksa';
  if (['bomun-lake', 'bomun-lake-resort', 'bomun-resort'].includes(hotspotSlug)) return 'bomun';
  if (['aewol-coast', 'aewol-cafe-street'].includes(hotspotSlug)) return 'aewol';
  if (['seongsan-ilchulbong', 'seongsan-sunrise-peak', 'seongsan-sunrise'].includes(hotspotSlug)) return 'seongsan';
  if (['seogwipo-city', 'seogwipo-market'].includes(hotspotSlug)) return 'seogwipo';
  if (['sungsimdang-bakery', 'sung-simdang', 'sung-simdang-bakery'].includes(hotspotSlug)) return 'sungsimdang';
  if (['suanbo-hot-springs', 'suanbo-onsen', 'suanbo-hot-spring'].includes(hotspotSlug)) return 'suanbo';
  if (['gangneung-coffee-street', 'anmok-coffee-street', 'anmok-beach-coffee-street'].includes(hotspotSlug)) return 'coffee';
  if (['seoraksan-national-park', 'seoraksan-mountain', 'mount-seorak'].includes(hotspotSlug)) return 'seoraksan';
  if (['jeonju-hanok-village', 'hanok-village'].includes(hotspotSlug)) return 'hanok';
  if (['hahoe-village', 'andong-hahoe-village', 'hahoe-folk-village'].includes(hotspotSlug)) return 'hahoe';
  if (['yeosu-night-sea', 'night-sea', 'yeosu-night-view'].includes(hotspotSlug)) return 'nightsea';
  if (['odongdo-island', 'odongdo-park'].includes(hotspotSlug)) return 'odongdo';
  if (['seomun-market', 'daegu-seomun-market', 'seomun-night-market'].includes(hotspotSlug)) return 'seomun';
  if (['homigot-sunrise-square', 'homigot-sunrise', 'homigot-hand'].includes(hotspotSlug)) return 'homigot';
  if (['daewangam-park', 'ulsan-daewangam-park'].includes(hotspotSlug)) return 'daewangam';
  if (['dongpirang-village', 'dongpirang-mural-village'].includes(hotspotSlug)) return 'dongpirang';
  if (['namhae-german-village', 'german-village'].includes(hotspotSlug)) return 'german';
  if (['boriam-temple', 'namhae-boriam'].includes(hotspotSlug)) return 'boriam';
  if (['suncheon-bay', 'suncheonman-bay', 'suncheon-bay-wetland'].includes(hotspotSlug)) return 'bay';
  if (['boseong-tea-fields', 'boseong-green-tea-field', 'green-tea-field'].includes(hotspotSlug)) return 'tea';
  if (['chungju-lake', 'chungjuho-lake', 'chungjuho'].includes(hotspotSlug)) return 'lake';
  if (['mungyeong-saejae', 'mungyeongsaejae', 'saejae-pass', 'mungyeong-saejae-pass'].includes(hotspotSlug)) return 'saejae';
  if (['museum-san', 'museumsan', 'wonju-museum-san'].includes(hotspotSlug)) return 'museumsan';
  if (['cheongpung-lake', 'cheongpung-ho', 'cheongpungho'].includes(hotspotSlug)) return 'cheongpung';
  if (['jangneung', 'yeongwol-jangneung', 'jangneung-royal-tomb'].includes(hotspotSlug)) return 'jangneung';
  if (['gongsanseong-fortress', 'gongju-gongsanseong'].includes(hotspotSlug)) return 'gongsanseong';
  if (['juknokwon-bamboo-forest', 'damyang-juknokwon'].includes(hotspotSlug)) return 'juknokwon';
  if (['mallipo-beach', 'taean-mallipo'].includes(hotspotSlug)) return 'mallipo';
  if (['jirisan-national-park', 'jiri-mountain', 'jirisan-trail', 'jirisan'].includes(hotspotSlug)) return 'trail';
  if (['gatbawi-rock', 'mokpo-gatbawi'].includes(hotspotSlug)) return 'gatbawi';
  if (['ttangkkeut-village', 'haenam-ttangkkeut', 'land-end'].includes(hotspotSlug)) return 'ttangkkeut';
  if (['wolmido-island', 'incheon-wolmido', 'wolmi-do'].includes(hotspotSlug)) return 'wolmido';
  if (['hwaseong-fortress', 'suwon-hwaseong', 'suwon-hwaseong-fortress'].includes(hotspotSlug)) return 'hwaseong';
  if (['haemieupseong', 'haemieupseong-fortress', 'haemi-fortress', 'seosan-haemi'].includes(hotspotSlug)) return 'haemi';
  if (['daecheon-beach', 'boryeong-daecheon', 'boryeong-mud-festival'].includes(hotspotSlug)) return 'daecheon';
  if (['gunsan-modern-history', 'modern-history-museum', 'gunsan-modern-history-museum'].includes(hotspotSlug)) return 'modernhistory';
  if (['cheongsando', 'cheongsando-island', 'wando-cheongsando'].includes(hotspotSlug)) return 'cheongsando';
  if (['geoje-pow-camp', 'pow-camp', 'pow-camp-history', 'geoje-pow-camp-history'].includes(hotspotSlug)) return 'powcamp';
  if (['may-18', 'may-18-national-cemetery', 'gwangju-may18', 'gwangju-may-18'].includes(hotspotSlug)) return 'may18';
  if (['gwanghallu', 'gwanghalluwon', 'namwon-gwanghallu', 'gwanghallu-garden'].includes(hotspotSlug)) return 'gwanghallu';
  if (['imsil-cheese-theme-park', 'imsil-cheese', 'cheese-theme-park'].includes(hotspotSlug)) return 'cheese';
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

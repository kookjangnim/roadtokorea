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

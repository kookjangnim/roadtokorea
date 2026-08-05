export type CitySeoKeywordCluster = {
  label: string;
  terms: string[];
};

export type CitySeoQuestion = {
  question: string;
  answer: string;
};

export type CitySeoKeywordProfile = {
  city: string;
  primaryIntent: string;
  metaKeywords: string[];
  clusters: CitySeoKeywordCluster[];
  questions: CitySeoQuestion[];
};

export const citySeoKeywordProfiles: Record<string, CitySeoKeywordProfile> = {
  chungju: {
    city: 'Chungju',
    primaryIntent: 'Chungju Korea inland route stop between Seoul and Mungyeong',
    metaKeywords: [
      'Chungju Korea',
      'Chungju travel guide',
      'Seoul to Chungju',
      'Chungju Lake',
      'Suanbo hot springs',
      'Korea inland road trip',
      'Seoul to Busan inland route',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Seoul to Chungju', 'Seoul to Busan inland route', 'Korea inland road trip'],
      },
      {
        label: 'Discovery intent',
        terms: ['things to do in Chungju', 'Chungju Lake', 'Suanbo hot springs'],
      },
      {
        label: 'Stay intent',
        terms: ['where to stay in Chungju', 'Chungju overnight stop', 'Chungju route break'],
      },
    ],
    questions: [
      {
        question: 'Is Chungju worth stopping at between Seoul and Busan?',
        answer:
          'Yes, especially on an inland route. Chungju gives the trip lake scenery, Suanbo hot-spring recovery, and a calmer reset before Mungyeong pass country.',
      },
      {
        question: 'What makes Chungju different from a simple transfer city?',
        answer:
          'Chungju works because it combines practical route timing with lake, river, hot-spring, and mountain-edge identity.',
      },
    ],
  },
  yeoju: {
    city: 'Yeoju',
    primaryIntent: 'Yeoju Korea junction city between Seoul, Chungju, and Wonju',
    metaKeywords: [
      'Yeoju Korea',
      'Yeoju travel guide',
      'Seoul to Yeoju',
      'Yeoju King Sejong',
      'Yeongneung Royal Tomb',
      'Silleuksa Temple',
      'Yeoju Premium Outlet',
      'Namhan River Korea',
      'Yeoju junction city',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Seoul to Yeoju', 'Yeoju to Chungju', 'Yeoju to Wonju', 'Korea junction city'],
      },
      {
        label: 'Heritage intent',
        terms: ['Yeoju King Sejong', 'Yeongneung Royal Tomb', 'Silleuksa Temple'],
      },
      {
        label: 'Modern intent',
        terms: ['Yeoju Premium Outlet', 'Yeoju ceramics', 'Namhan River travel'],
      },
    ],
    questions: [
      {
        question: 'Why does Yeoju matter on a Seoul route?',
        answer:
          'Yeoju is the first strong split after Seoul: one line can continue toward Chungju, while another can bend toward Wonju.',
      },
      {
        question: 'Is Yeoju only a day trip from Seoul?',
        answer:
          'No. It can be a day trip, but on this route system it matters more as a royal, river, outlet, and junction city.',
      },
    ],
  },
  wonju: {
    city: 'Wonju',
    primaryIntent: 'Wonju Korea eastbound route hinge between Seoul and Gangneung',
    metaKeywords: [
      'Wonju Korea',
      'Wonju travel guide',
      'Seoul to Wonju',
      'Wonju to Gangneung',
      'Wonju Korean War',
      'Buldak factory Wonju',
      'Samyang Wonju',
      'Gangwon road trip',
      'Korea east coast route',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Seoul to Wonju', 'Wonju to Gangneung', 'Gangwon road trip'],
      },
      {
        label: 'History intent',
        terms: ['Wonju Korean War', 'Wonju military history', 'Korean War battlefield Gangwon'],
      },
      {
        label: 'Modern intent',
        terms: ['Buldak factory Wonju', 'Samyang Wonju', 'Korean food production'],
      },
    ],
    questions: [
      {
        question: 'Why stop in Wonju before the east coast?',
        answer:
          'Wonju is the inland hinge where the Seoul-to-Gangneung journey becomes a Gangwon route rather than a simple transfer.',
      },
      {
        question: 'How should Wonju be written for English-speaking travelers?',
        answer:
          'The strongest angle is past and present together: Korean War memory, transport logic, mountain access, and modern food-production identity.',
      },
    ],
  },
  yeongwol: {
    city: 'Yeongwol',
    primaryIntent: 'Yeongwol Korea Donggang camping rafting and Danjong history travel',
    metaKeywords: [
      'Yeongwol Korea',
      'Yeongwol travel guide',
      'Danjong Yeongwol',
      'Cheongnyeongpo',
      'Jangneung Royal Tomb',
      'Yeongwol Donggang camping',
      'Donggang rafting',
      'Yeongwol Seobu Market',
      'Yeongwol film tourism',
      'Wang-gwa Saneun Namja filming',
      'Donggang River',
      'Byeolmaro Observatory',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Jecheon Yeongwol Jeongseon route', 'Gangwon inland route', 'Yeongwol road trip'],
      },
      {
        label: 'History intent',
        terms: ['Danjong Yeongwol', 'Cheongnyeongpo', 'Jangneung Royal Tomb'],
      },
      {
        label: 'River stay intent',
        terms: ['Yeongwol Donggang camping', 'Donggang rafting', 'Yeongwol one night trip'],
      },
      {
        label: 'Trend intent',
        terms: ['Yeongwol film tourism', 'Wang-gwa Saneun Namja', 'Byeolmaro Observatory'],
      },
    ],
    questions: [
      {
        question: 'Why is Yeongwol emotionally important?',
        answer:
          'Yeongwol carries the story of King Danjong, Cheongnyeongpo exile, Jangneung Royal Tomb, and a landscape that makes the history feel visible.',
      },
      {
        question: 'Can Yeongwol connect history with modern travel trends?',
        answer:
          'Yes. The 2026 film Wang-gwa Saneun Namja brought more than 16 million admissions and renewed attention to Cheongnyeongpo and Jangneung, but the real Danjong heritage remains the reason to visit.',
      },
      {
        question: 'Is Yeongwol worth an overnight stay?',
        answer:
          'Yes for Donggang camping or rafting. For sightseeing alone, drivers can keep the day selective with Cheongnyeongpo, Jangneung, and Seobu Market.',
      },
    ],
  },
  jeongseon: {
    city: 'Jeongseon',
    primaryIntent: 'Jeongseon Korea Arirang Market Kangwon Land and Gangwon inland branch travel',
    metaKeywords: ['Jeongseon Korea', 'Jeongseon travel guide', 'Jeongseon Arirang Market', 'Jeongseon 5-day Market', 'Kangwon Land Casino', 'Korea casino Koreans allowed', 'Jeongseon Railbike', 'Hwaam Cave', 'Jeongseon Arirang', 'Yeongwol to Jeongseon', 'Jeongseon to Taebaek'],
    clusters: [
      { label: 'Route intent', terms: ['Yeongwol to Jeongseon', 'Jeongseon to Taebaek', 'Gangwon inland branch route'] },
      { label: 'Culture intent', terms: ['Jeongseon Arirang Market', 'Jeongseon 5-day Market', 'Jeongseon Arirang'] },
      { label: 'Casino intent', terms: ['Kangwon Land Casino', 'Korea casino Koreans allowed', 'High1 Resort Jeongseon'] },
      { label: 'Scenery intent', terms: ['Jeongseon Railbike', 'Hwaam Cave', 'Gangwon mountain valley travel'] },
    ],
    questions: [
      { question: 'Why stop in Jeongseon on Branch 2A?', answer: 'Jeongseon adds Arirang culture, five-day market energy, railbike valleys, and deeper Gangwon interior texture between Yeongwol and Taebaek.' },
      { question: 'What is Jeongseon known for?', answer: 'Jeongseon is known for Jeongseon Arirang, Arirang Market, the five-day market, railbike routes, Hwaam Cave, Kangwon Land Casino, and mountain valley travel.' },
      { question: 'Why does Kangwon Land matter in Jeongseon?', answer: 'Kangwon Land is Korea’s only casino open to Korean citizens, and it also explains Jeongseon’s closed-mine-area transition into resort and tourism economy.' },
    ],
  },
  taebaek: {
    city: 'Taebaek',
    primaryIntent: 'Honest Taebaek guide for Taebaeksan and Korean coal history',
    metaKeywords: ['Taebaek Korea', 'honest Taebaek travel guide', 'Taebaeksan winter sunrise', 'Taebaek Coal Museum', 'Korea coal mining history', 'Hwangji Pond expectations', 'Geomnyongso', 'Taebaek day trip', 'Jeongseon to Taebaek road'],
    clusters: [
      { label: 'Route intent', terms: ['Jeongseon to Taebaek', 'Taebaek to Samcheok', 'Gangwon inland to coast route'] },
      { label: 'History intent', terms: ['Taebaek Coal Museum', 'Korea coal mining history', 'Taebaek mining city'] },
      { label: 'Food intent', terms: ['Taebaek Hanwoo', 'Taebaek local food', 'Hanwoo after Taebaeksan'] },
      { label: 'Mountain intent', terms: ['Taebaeksan winter sunrise', 'Hwangji Pond', 'Geomnyongso expectations'] },
    ],
    questions: [
      { question: 'Is Taebaek worth visiting?', answer: 'Yes when Taebaeksan or Korean coal history is the purpose. If neither interests you, skipping Taebaek is a valid travel decision.' },
      { question: 'Are Hwangji Pond and Geomnyongso major scenic sights?', answer: 'Their geographic meaning is stronger than their visual scale. Treat them as short source-landscape stops, not dramatic natural spectacles.' },
      { question: 'Should I stay overnight in Taebaek?', answer: 'Usually not for general sightseeing. A day trip from Jeongseon works better unless an early Taebaeksan hike, festival, or industrial-history itinerary requires a night.' },
    ],
  },
  gapyeong: {
    city: 'Gapyeong',
    primaryIntent: 'Gapyeong Korea river and island gateway between Seoul and Chuncheon',
    metaKeywords: ['Gapyeong Korea', 'Gapyeong travel guide', 'Seoul to Gapyeong', 'Nami Island', 'Jarasum Island', 'Gapyeong Rail Park', 'Bukhangang River', 'Gapyeong to Chuncheon'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Gapyeong', 'Gapyeong to Chuncheon', 'Route 3 Korea'] },
      { label: 'Island intent', terms: ['Nami Island', 'Jarasum Island', 'Jarasum Jazz Festival'] },
      { label: 'Leisure intent', terms: ['Gapyeong Rail Park', 'Bukhangang River', 'Gapyeong camping'] },
    ],
    questions: [
      { question: 'Why does Gapyeong matter before Chuncheon?', answer: 'Gapyeong softens the Seoul departure with river, island, rail-bike, camping, and weekend-leisure energy before Chuncheon becomes the first full city anchor.' },
      { question: 'Is Gapyeong only for Nami Island?', answer: 'No. Nami Island is the best-known hook, but Jarasum, Bukhangang views, rail bikes, camping, and pensions make Gapyeong a broader route opening.' },
    ],
  },
  chuncheon: {
    city: 'Chuncheon',
    primaryIntent: 'Chuncheon Korea lake city anchor between Seoul, Gapyeong, Yanggu, and Sokcho',
    metaKeywords: [
      'Chuncheon Korea',
      'Chuncheon travel guide',
      'Seoul to Chuncheon',
      'Chuncheon dakgalbi',
      'Chuncheon makguksu',
      'Soyanggang Skywalk',
      'Samaksan Mountain Lake Cable Car',
      'Uiamho Lake',
      'Chuncheon to Sokcho route',
      'Gangwon lake city',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Seoul to Chuncheon', 'Chuncheon to Yanggu', 'Chuncheon to Sokcho route'],
      },
      {
        label: 'Food intent',
        terms: ['Chuncheon dakgalbi', 'Chuncheon makguksu', 'Myeongdong Dakgalbi Street'],
      },
      {
        label: 'Lake intent',
        terms: ['Soyanggang Skywalk', 'Samaksan Mountain Lake Cable Car', 'Uiamho Lake'],
      },
    ],
    questions: [
      {
        question: 'Why is Chuncheon important on Route 3?',
        answer:
          'Chuncheon is the first real city anchor after Seoul and Gapyeong, giving the route food identity, lake scenery, transit practicality, and an easy overnight before Yanggu and Inje.',
      },
      {
        question: 'Is Chuncheon only a dakgalbi stop?',
        answer:
          'No. Dakgalbi and makguksu are essential, but Soyanggang Skywalk, Uiamho, Samaksan Mountain Lake Cable Car, riverside views, and city-core stays make Chuncheon much broader.',
      },
    ],
  },
  yanggu: {
    city: 'Yanggu',
    primaryIntent: 'Yanggu Korea Punch Bowl DMZ and Korean War route chapter before Inje',
    metaKeywords: ['Yanggu Korea', 'Yanggu travel guide', 'Yanggu Punch Bowl', 'Punch Bowl Korea', 'Yanggu DMZ', 'Yanggu Korean War', 'Chuncheon to Yanggu', 'Yanggu to Inje'],
    clusters: [
      { label: 'Route intent', terms: ['Chuncheon to Yanggu', 'Yanggu to Inje', 'Route 3 Korea'] },
      { label: 'History intent', terms: ['Yanggu Korean War', 'Punch Bowl Korea', 'Yanggu War Memorial'] },
      { label: 'DMZ intent', terms: ['Yanggu DMZ', 'DMZ ecology Korea', 'Yanggu highland basin'] },
    ],
    questions: [
      { question: 'Why include Yanggu on the way to Sokcho?', answer: 'Yanggu gives Route 3 its northern gravity through Punch Bowl, Korean War memory, DMZ-adjacent terrain, and a quieter tone before Inje.' },
      { question: 'Is Yanggu a normal sightseeing stop?', answer: 'Not really. Its value is deeper and quieter: borderland geography, highland basin views, war memory, and the route transition toward Seoraksan.' },
    ],
  },
  inje: {
    city: 'Inje',
    primaryIntent: 'Inje Korea Seoraksan pass decision before Sokcho',
    metaKeywords: [
      'Inje Korea',
      'Inje travel guide',
      'Seoul to Inje',
      'Inje to Sokcho',
      'Naerincheon rafting',
      'Jinburyeong Pass',
      'Hangyeryeong Pass',
      'Misiryeong Pass',
      'Seoraksan road trip',
      'Korea mountain road trip',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Seoul to Inje', 'Inje to Sokcho', 'Seoraksan road trip'],
      },
      {
        label: 'Pass intent',
        terms: ['Jinburyeong Pass', 'Hangyeryeong Pass', 'Misiryeong Pass'],
      },
      {
        label: 'Outdoor intent',
        terms: ['Naerincheon rafting', 'Inje leports', 'Inje river sports'],
      },
    ],
    questions: [
      {
        question: 'Why is Inje a key stop before Sokcho?',
        answer:
          'Inje is where Route 3 chooses its Seoraksan crossing: Jinburyeong, Hangyeryeong, or Misiryeong.',
      },
      {
        question: 'Is Inje only a mountain-pass town?',
        answer:
          'No. Naerincheon rafting, river sports, valleys, camping, and leports give Inje a strong present-day outdoor identity.',
      },
    ],
  },
  sokcho: {
    city: 'Sokcho',
    primaryIntent: 'Sokcho Korea two night itinerary with Seoraksan and Cheongchoho',
    metaKeywords: ['Sokcho Korea', 'Sokcho travel guide', 'Sokcho two night itinerary', 'Seoraksan National Park', 'Gwongeumseong cable car', 'Cheongchoho Lake', 'Dongmyeong Port', 'Sokcho Tourist Fishery Market', 'Abai Village gaetbae', 'Sokcho Beach', 'Inje to Sokcho'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Sokcho', 'Inje to Sokcho', 'Route 3 Korea'] },
      { label: 'Mountain intent', terms: ['Seoraksan National Park', 'Gwongeumseong cable car', 'Seoraksan full day'] },
      { label: 'City intent', terms: ['Cheongchoho Lake', 'Dongmyeong Port food', 'Sokcho two night itinerary'] },
      { label: 'First visit intent', terms: ['Sokcho Tourist Fishery Market', 'Abai Village gaetbae', 'Sokcho Beach'] },
    ],
    questions: [
      { question: 'How many days does Sokcho need?', answer: 'Two nights are the most practical first visit: keep Cheongchoho, the market, gaetbae, and Dongmyeong Port on the compact city day, then reserve a separate day for Seoraksan.' },
      { question: 'Where is the most practical place to stay in Sokcho?', answer: 'Cheongchoho and the town center balance food, evening walks, lodging, and short city drives. A sea-view room is optional because inland-facing rooms may offer Seoraksan views.' },
      { question: 'Is Sokcho Beach essential?', answer: 'It is clean and convenient, but repeat East Sea travelers can lower its priority and spend more time at Cheongchoho, Dongmyeong Port, or Seoraksan.' },
    ],
  },
  goseong: {
    city: 'Goseong',
    primaryIntent: 'Goseong Korea DMZ and northern East Sea stop before Sokcho',
    metaKeywords: [
      'Goseong Korea',
      'Goseong Gangwon-do',
      'Goseong travel guide',
      'Goseong DMZ Museum',
      'Unification Observatory Goseong',
      'Hwajinpo Lake',
      'Songjiho Beach',
      'Goseong to Sokcho',
      'Jinburyeong Pass',
      'East Sea road trip',
      'Seoraksan coast',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Goseong to Sokcho', 'Jinburyeong Pass', 'East Sea road trip'],
      },
      {
        label: 'History intent',
        terms: ['Goseong DMZ Museum', 'Unification Observatory Goseong', 'DMZ travel Korea'],
      },
      {
        label: 'Coast intent',
        terms: ['Hwajinpo Lake', 'Songjiho Beach', 'Goseong beaches', 'Seoraksan coast'],
      },
    ],
    questions: [
      {
        question: 'Why include Goseong before Sokcho?',
        answer:
          'Goseong lets the Jinburyeong route touch the northern East Sea, DMZ memory, Hwajinpo, and Songjiho before Sokcho becomes the final arrival.',
      },
      {
        question: 'Is Goseong mainly for DMZ travel or beach travel?',
        answer:
          'It is both. The strongest Goseong story balances the DMZ Museum and Unification Observatory area with lagoons, beaches, seafood, and quiet coastal stays.',
      },
    ],
  },
  mungyeong: {
    city: 'Mungyeong',
    primaryIntent: 'Mungyeong Korea historic pass city on the inland Seoul to Busan route',
    metaKeywords: [
      'Mungyeong Korea',
      'Mungyeong travel guide',
      'Mungyeongsaejae',
      'Mungyeong Saejae Pass',
      'Great Yeongnam Road',
      'Mungyeong old road',
      'Mungyeong omija',
      'Korea historic road trip',
      'Seoul to Busan inland route',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Seoul to Busan inland route', 'Mungyeong Saejae Pass', 'Korea historic road trip'],
      },
      {
        label: 'Heritage intent',
        terms: ['Mungyeongsaejae', 'Great Yeongnam Road', 'Mungyeong old road'],
      },
      {
        label: 'Local intent',
        terms: ['Mungyeong omija', 'Mungyeong pottery', 'Mungyeong coal heritage'],
      },
    ],
    questions: [
      {
        question: 'Why is Mungyeong important on an inland route?',
        answer:
          'Mungyeong turns the route into a real crossing through pass country, old roads, gates, and the memory of movement between Seoul and the southeast.',
      },
      {
        question: 'What should travelers look for in Mungyeong?',
        answer:
          'The strongest mix is Mungyeongsaejae, old-road history, omija, pottery, and a stay that lets the pass chapter breathe.',
      },
    ],
  },
  andong: {
    city: 'Andong',
    primaryIntent: 'Andong Korea cultural anchor on the inland Seoul to Busan route',
    metaKeywords: [
      'Andong Korea',
      'Andong travel guide',
      'Hahoe Folk Village',
      'Andong jjimdak',
      'Andong seowon',
      'Confucian culture Korea',
      'Andong mask dance',
      'Seoul to Andong',
      'Korea cultural road trip',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Seoul to Andong', 'Korea cultural road trip', 'Seoul to Busan inland route'],
      },
      {
        label: 'Heritage intent',
        terms: ['Hahoe Folk Village', 'Andong seowon', 'Confucian culture Korea'],
      },
      {
        label: 'Food intent',
        terms: ['Andong jjimdak', 'Andong market', 'Andong local food'],
      },
    ],
    questions: [
      {
        question: 'Why is Andong more than a heritage stop?',
        answer:
          'Andong is a living cultural city where Hahoe, seowon academies, food, markets, river life, and festivals still shape the trip.',
      },
      {
        question: 'How does Andong support the inland route?',
        answer:
          'After Chungju and Mungyeong, Andong gives the route cultural weight before the southeast handoff toward Busan.',
      },
    ],
  },
  yeongdeok: {
    city: 'Yeongdeok',
    primaryIntent: 'Yeongdeok Korea East Sea seafood and coastal road trip stop before Pohang',
    metaKeywords: ['Yeongdeok Korea', 'Yeongdeok travel guide', 'Yeongdeok snow crab', 'Yeongdeok Blue Road', 'East Sea road trip', 'Yeongdeok to Pohang', 'Korea coastal route'],
    clusters: [
      { label: 'Route intent', terms: ['East Sea road trip', 'Yeongdeok to Pohang', 'Korea coastal route'] },
      { label: 'Food intent', terms: ['Yeongdeok snow crab', 'Yeongdeok crab market', 'Korea seafood town'] },
      { label: 'Coast intent', terms: ['Yeongdeok Blue Road', 'Yeongdeok beaches', 'East Sea port town'] },
    ],
    questions: [
      { question: 'Why stop in Yeongdeok on the East Sea route?', answer: 'Yeongdeok gives the route a smaller port, crab, and open-coast chapter before larger southeastern cities take over.' },
      { question: 'Is Yeongdeok mainly a seafood stop?', answer: 'Seafood is central, but Yeongdeok also works as a coastal walking, harbor, and quiet overnight chapter.' },
    ],
  },
  pohang: {
    city: 'Pohang',
    primaryIntent: 'Pohang Korea port city and sunrise stop before Gyeongju and Busan',
    metaKeywords: ['Pohang Korea', 'Pohang travel guide', 'Homigot sunrise', 'Pohang beaches', 'Pohang seafood', 'Pohang to Gyeongju', 'Korea southeast coast'],
    clusters: [
      { label: 'Route intent', terms: ['Pohang to Gyeongju', 'Korea southeast coast', 'Yeongdeok to Pohang'] },
      { label: 'Coast intent', terms: ['Homigot sunrise', 'Pohang beaches', 'Pohang harbor'] },
      { label: 'Food intent', terms: ['Pohang seafood', 'Pohang market', 'Pohang coastal cafes'] },
    ],
    questions: [
      { question: 'Why does Pohang matter before Gyeongju?', answer: 'Pohang gives the route a large coastal service city, sunrise identity, seafood, and a clean handoff toward Gyeongju.' },
      { question: 'Is Pohang only an industrial city?', answer: 'No. Industry is part of the story, but beaches, seafood, markets, and Homigot sunrise make it a travel city too.' },
    ],
  },
  sangju: {
    city: 'Sangju',
    primaryIntent: 'Sangju Korea Nakdong corridor recovery stop after Mungyeong',
    metaKeywords: ['Sangju Korea', 'Sangju travel guide', 'Sangju cycling', 'Nakdong River route', 'Mungyeong to Sangju', 'Sangju to Gumi', 'Korea inland road trip'],
    clusters: [
      { label: 'Route intent', terms: ['Mungyeong to Sangju', 'Sangju to Gumi', 'Korea inland road trip'] },
      { label: 'Recovery intent', terms: ['Sangju cycling', 'Nakdong River route', 'Sangju overnight stop'] },
      { label: 'Local intent', terms: ['Sangju agriculture', 'Sangju local food', 'Sangju town stay'] },
    ],
    questions: [
      { question: 'Why include Sangju after Mungyeong?', answer: 'Sangju lets the inland route relax into the Nakdong corridor after the pass-country chapter.' },
      { question: 'Who should stay in Sangju?', answer: 'Cyclists, drivers, and slow travelers who want a calmer reset before Gumi or Daegu can use Sangju well.' },
    ],
  },
  jecheon: {
    city: 'Jecheon',
    primaryIntent: 'Jecheon Korea lake and mountain threshold between Wonju and Yeongwol',
    metaKeywords: ['Jecheon Korea', 'Jecheon travel guide', 'Uirimji Reservoir', 'Cheongpungho Lake', 'Wonju to Jecheon', 'Jecheon to Yeongwol', 'Korea inland branch route'],
    clusters: [
      { label: 'Route intent', terms: ['Wonju to Jecheon', 'Jecheon to Yeongwol', 'Korea inland branch route'] },
      { label: 'Lake intent', terms: ['Uirimji Reservoir', 'Cheongpungho Lake', 'Jecheon lake travel'] },
      { label: 'Mountain intent', terms: ['Jecheon mountains', 'Jecheon cable car', 'Jecheon herbal market'] },
    ],
    questions: [
      { question: 'Why is Jecheon useful between Wonju and Yeongwol?', answer: 'Jecheon gives Branch 2A a lake-and-mountain threshold before Yeongwol turns the branch into a history story.' },
      { question: 'What should travelers look for in Jecheon?', answer: 'Uirimji, Cheongpungho, mountain views, herbal identity, and a quieter stay pattern make Jecheon work.' },
    ],
  },
  cheonan: {
    city: 'Cheonan',
    primaryIntent: 'Cheonan Korea first practical route break south of Seoul',
    metaKeywords: ['Cheonan Korea', 'Cheonan travel guide', 'Seoul to Cheonan', 'Cheonan walnut snack', 'Cheonan station', 'Cheonan independence history', 'Korea route stop'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Cheonan', 'Cheonan station', 'Korea route stop'] },
      { label: 'Food intent', terms: ['Cheonan walnut snack', 'Cheonan food', 'Cheonan station food'] },
      { label: 'History intent', terms: ['Cheonan independence history', 'Cheonan heritage', 'Independence Hall Korea'] },
    ],
    questions: [
      { question: 'Why stop in Cheonan after Seoul?', answer: 'Cheonan is the first easy control point south of Seoul, with station access, food, and a low-friction reset.' },
      { question: 'Is Cheonan worth more than a transfer?', answer: 'Yes, when the route needs a humane first break with snacks, transit, lodging, and independence-memory context.' },
    ],
  },
  daejeon: {
    city: 'Daejeon',
    primaryIntent: 'Daejeon Korea Sungsimdang bakery Yuseong recovery central transport and Honam route split',
    metaKeywords: ['Daejeon Korea', 'Daejeon travel guide', 'Seoul to Daejeon', 'Daejeon station', 'Yuseong hot springs', 'Sungsimdang', 'Sungsimdang Daejeon', 'Sung Sim Dang bakery', 'Daejeon bakery pilgrimage', 'Daejeon science city', 'Korea central route', 'Route 8 Korea', 'Seoul to Haenam route'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Daejeon', 'Daejeon station', 'Korea central route', 'Route 8 Korea'] },
      { label: 'Recovery intent', terms: ['Yuseong hot springs', 'Daejeon overnight stop', 'Daejeon hotels'] },
      { label: 'City intent', terms: ['Sungsimdang', 'Sungsimdang Daejeon', 'Daejeon bakery pilgrimage', 'Daejeon science city', 'Daejeon market'] },
      { label: 'Honam intent', terms: ['Seoul to Haenam route', 'Daejeon to Jeonju', 'Honam inland route'] },
    ],
    questions: [
      { question: 'Why is Daejeon a strong route city?', answer: 'Daejeon combines central transport, station efficiency, Yuseong recovery, Sungsimdang bakery culture, and enough city services to support several route versions.' },
      { question: 'Why does Sungsimdang matter for Daejeon travel?', answer: 'Sungsimdang gives Daejeon a nationally recognizable food anchor, turning the city from a practical transfer into a stop travelers can intentionally plan around.' },
      { question: 'Where should Daejeon fit in Route 8?', answer: 'Use it as the clean central split before Route 8 turns toward Jeonju, Gwangju, Mokpo, and Haenam.' },
    ],
  },
  daegu: {
    city: 'Daegu',
    primaryIntent: 'Daegu Korea urban reset on the Seoul to Busan inland route',
    metaKeywords: ['Daegu Korea', 'Daegu travel guide', 'Seomun Market', 'Daegu medicine street', 'Daegu food alleys', 'Daegu to Busan', 'Korea inland city route'],
    clusters: [
      { label: 'Route intent', terms: ['Daegu to Busan', 'Korea inland city route', 'Seoul to Busan inland route'] },
      { label: 'Market intent', terms: ['Seomun Market', 'Daegu food alleys', 'Daegu night market'] },
      { label: 'Heritage intent', terms: ['Daegu medicine street', 'Daegu textile history', 'Daegu old streets'] },
    ],
    questions: [
      { question: 'Why is Daegu important before Busan?', answer: 'Daegu is the strongest urban reset outside Seoul and Busan, giving the route markets, hotels, food, and city density.' },
      { question: 'What makes Daegu different from a simple transfer?', answer: 'Seomun Market, medicine streets, food alleys, and basin-city identity give Daegu a distinct travel role.' },
    ],
  },
  gumi: {
    city: 'Gumi',
    primaryIntent: 'Gumi Korea industrial corridor and riverside reset before Daegu',
    metaKeywords: ['Gumi Korea', 'Gumi travel guide', 'Sangju to Gumi', 'Gumi to Daegu', 'Gumi industrial city', 'Gumi riverside', 'Korea corridor route'],
    clusters: [
      { label: 'Route intent', terms: ['Sangju to Gumi', 'Gumi to Daegu', 'Korea corridor route'] },
      { label: 'City intent', terms: ['Gumi industrial city', 'Gumi business travel', 'Gumi hotels'] },
      { label: 'Recovery intent', terms: ['Gumi riverside', 'Gumi food', 'Gumi overnight stop'] },
    ],
    questions: [
      { question: 'Why use Gumi on Route 1?', answer: 'Gumi is a practical corridor reset that keeps timing flexible before Daegu or the lower southeast.' },
      { question: 'Is Gumi a romantic travel stop?', answer: 'Not exactly, and that is the point: it explains modern Korea through industry, services, river calm, and route usefulness.' },
    ],
  },
  changnyeong: {
    city: 'Changnyeong',
    primaryIntent: 'Changnyeong Korea wetland recovery stop before Busan',
    metaKeywords: ['Changnyeong Korea', 'Changnyeong travel guide', 'Upo Wetland', 'Changnyeong hot springs', 'Daegu to Changnyeong', 'Changnyeong to Busan', 'Korea wetland travel'],
    clusters: [
      { label: 'Route intent', terms: ['Daegu to Changnyeong', 'Changnyeong to Busan', 'Route 1 recovery stop'] },
      { label: 'Nature intent', terms: ['Upo Wetland', 'Korea wetland travel', 'Changnyeong nature'] },
      { label: 'Recovery intent', terms: ['Changnyeong hot springs', 'Changnyeong overnight stop', 'Changnyeong local food'] },
    ],
    questions: [
      { question: 'Why stop in Changnyeong before Busan?', answer: 'Changnyeong gives the route a quieter nature-and-recovery chapter before the final urban arrival.' },
      { question: 'What is Changnyeong known for?', answer: 'Upo Wetland, lower-river calm, hot-spring recovery, small-town pacing, and a softer route mood.' },
    ],
  },
  miryang: {
    city: 'Miryang',
    primaryIntent: 'Miryang Korea river pavilion and quiet southern route hinge before Busan',
    metaKeywords: ['Miryang Korea', 'Miryang travel guide', 'Yeongnamru Pavilion', 'Miryang River', 'Miryang to Busan', 'Korea southern route', 'quiet Korea city'],
    clusters: [
      { label: 'Route intent', terms: ['Miryang to Busan', 'Korea southern route', 'quiet Korea city'] },
      { label: 'Heritage intent', terms: ['Yeongnamru Pavilion', 'Miryang River', 'Miryang heritage'] },
      { label: 'Stay intent', terms: ['Miryang overnight stop', 'Miryang local food', 'Miryang town stay'] },
    ],
    questions: [
      { question: 'Why use Miryang before Busan?', answer: 'Miryang gives the route a quieter river-and-pavilion pause before the final urban finish.' },
      { question: 'Is Miryang a major destination?', answer: 'It is better as a composed hinge: Yeongnamru, river views, food, and a low-pressure southern route stop.' },
    ],
  },
  gangneung: {
    city: 'Gangneung',
    primaryIntent: 'Gangneung travel guide by a former Chodang resident',
    metaKeywords: ['Gangneung Korea', 'Gangneung travel guide', 'Seoul to Gangneung road trip', 'Chodang Gangneung', 'Ojukheon', 'Gangneung Central Market', 'Gyeongpo Beach crowds', 'Korea east coast route'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Gangneung road trip', 'Gangneung without a car', 'Korea east coast route'] },
      { label: 'Local intent', terms: ['Chodang Gangneung', 'Gangneung Central Market', 'where to stay in Gangneung'] },
      { label: 'History intent', terms: ['Ojukheon', 'Heo Gyun memorial park', 'Daegwallyeong Old Road'] },
    ],
    questions: [
      { question: 'Is a beachfront hotel worth it in Gangneung?', answer: 'Only when the view and resort atmosphere are the point. Central Gangneung is usually better value for food, heritage stops, and onward travel.' },
      { question: 'Should I visit Gyeongpo Beach?', answer: 'Gyeongpo Beach suits travelers who enjoy a busy resort atmosphere. Keep Gyeongpodae Pavilion and Gyeongpo Lake on the cultural plan, but choose a quieter beach in peak summer if crowds weaken the trip.' },
      { question: 'Why choose Gangneung over another east-coast town?', answer: 'Gangneung combines rail and road access, a working city center, strong food choices, major historical sites, and an easy handoff to the coast south or north.' },
    ],
  },
  samcheok: {
    city: 'Samcheok',
    primaryIntent: 'Samcheok Korea scenic National Route 7 coast stop after Donghae',
    metaKeywords: ['Samcheok Korea', 'Samcheok travel guide', 'Donghae to Samcheok', 'Gangneung to Samcheok', 'Samcheok beaches', 'Samcheok caves', 'Korea east coast road trip', 'National Route 7 Korea'],
    clusters: [
      { label: 'Route intent', terms: ['Donghae to Samcheok', 'Gangneung to Samcheok', 'National Route 7 Korea'] },
      { label: 'Scenery intent', terms: ['Samcheok beaches', 'Samcheok caves', 'Samcheok cliffs'] },
      { label: 'Local intent', terms: ['Samcheok seafood', 'Samcheok port', 'Samcheok overnight stop'] },
    ],
    questions: [
      { question: 'Why continue to Samcheok after Gangneung?', answer: 'Samcheok keeps the coast open with cliffs, caves, beaches, ports, and a slower road-trip rhythm.' },
      { question: 'Is Samcheok a major city anchor?', answer: 'It works better as a scenic continuation city than a large urban anchor.' },
    ],
  },
  pyeongchang: {
    city: 'Pyeongchang',
    primaryIntent: 'Pyeongchang travel guide by a former Jinbu resident',
    metaKeywords: ['Pyeongchang Korea', 'Pyeongchang travel guide', 'Jinbu travel', 'Woljeongsa fir forest', 'National Museum of the Annals of the Joseon Dynasty', 'Odaesan Korea', 'Alpensia Resort', 'Yongpyong Resort', 'Pyeongchang without skiing'],
    clusters: [
      { label: 'Jinbu and history', terms: ['Jinbu travel', 'Woljeongsa fir forest', 'Joseon annals museum', 'Odaesan archive'] },
      { label: 'Resort intent', terms: ['Pyeongchang winter trip', 'Alpensia Resort', 'Yongpyong Resort'] },
      { label: 'Route intent', terms: ['Pyeongchang without a car', 'where to stay in Pyeongchang', 'Pyeongchang to Gangneung'] },
    ],
    questions: [
      { question: 'Is Pyeongchang essential on the way to Gangneung?', answer: 'No. It earns a stop when the trip has a clear theme such as winter sport, Woljeongsa, the royal-annals museum, meditation, or highland summer.' },
      { question: 'Can I explore Pyeongchang without a car?', answer: 'KTX helps with arrival, but the county is wide and its main areas are dispersed. A car is the practical choice for combining Jinbu, Odaesan, resorts, Bongpyeong, and inland areas.' },
      { question: 'What can I do in Pyeongchang without skiing?', answer: 'Pair the National Museum of the Annals of the Joseon Dynasty with Woljeongsa and its fir forest, or build a quieter stay around meditation, autumn foliage, markets, and highland summer weather.' },
    ],
  },
  daegwallyeong: {
    city: 'Daegwallyeong',
    primaryIntent: 'Daegwallyeong Korea highland pass before Gangneung on Route 2',
    metaKeywords: ['Daegwallyeong Korea', 'Daegwallyeong travel guide', 'Daegwallyeong sheep ranch', 'Alpensia Resort', 'Yongpyong Resort', 'Pyeongchang to Gangneung', 'Korea highland pass', 'Gangneung mountain route'],
    clusters: [
      { label: 'Route intent', terms: ['Pyeongchang to Gangneung', 'Gangneung mountain route', 'Korea highland pass'] },
      { label: 'Ski intent', terms: ['Alpensia Resort', 'Yongpyong Resort', 'Daegwallyeong ski resort'] },
      { label: 'Landscape intent', terms: ['Daegwallyeong sheep ranch', 'Daegwallyeong highlands', 'Gangwon winter travel'] },
    ],
    questions: [
      { question: 'Why does Daegwallyeong matter before Gangneung?', answer: 'Daegwallyeong is the final highland pass before the sea, giving Route 2 a mountain threshold before Gangneung arrives.' },
      { question: 'Is Daegwallyeong part of Pyeongchang or its own route stop?', answer: 'Administratively it belongs to the Pyeongchang highland area, but as a route stop it works as the pass and resort threshold before Gangneung.' },
    ],
  },
  uljin: {
    city: 'Uljin',
    primaryIntent: 'Uljin Korea open East Sea coast and quiet maritime route stop',
    metaKeywords: ['Uljin Korea', 'Uljin travel guide', 'Uljin beaches', 'Uljin seafood', 'Uljin hot springs', 'Uljin to Yeongdeok', 'Korea East Sea route'],
    clusters: [
      { label: 'Route intent', terms: ['Uljin to Yeongdeok', 'Korea East Sea route', 'east coast Korea road trip'] },
      { label: 'Coast intent', terms: ['Uljin beaches', 'Uljin seafood', 'Uljin harbor'] },
      { label: 'Recovery intent', terms: ['Uljin hot springs', 'Uljin forest road', 'Uljin quiet stay'] },
    ],
    questions: [
      { question: 'Why include Uljin on the east coast route?', answer: 'Uljin preserves the open, spacious feeling of the East Sea before the route compresses into larger city nodes.' },
      { question: 'What kind of stop is Uljin?', answer: 'It is a quiet maritime recovery stop with beaches, seafood, hot springs, forest edges, and modest stays.' },
    ],
  },
  gyeongju: {
    city: 'Gyeongju',
    primaryIntent: 'Gyeongju Korea Silla heritage handoff before Busan',
    metaKeywords: ['Gyeongju Korea', 'Gyeongju travel guide', 'Gyeongju Silla heritage', 'Bomun Lake', 'Gyeongju to Busan', 'Korea heritage route', 'Gyeongju royal tombs'],
    clusters: [
      { label: 'Route intent', terms: ['Gyeongju to Busan', 'Korea heritage route', 'Seoul to Busan route'] },
      { label: 'Heritage intent', terms: ['Gyeongju Silla heritage', 'Gyeongju royal tombs', 'Gyeongju temples'] },
      { label: 'Stay intent', terms: ['Bomun Lake', 'Gyeongju hotels', 'Gyeongju night walk'] },
    ],
    questions: [
      { question: 'Why is Gyeongju important before Busan?', answer: 'Gyeongju gives the route a final cultural chapter through Silla heritage, temples, royal tombs, and strong overnight logic.' },
      { question: 'Is Gyeongju only an ancient-history city?', answer: 'No. Bomun Lake, cafes, night walks, markets, hotels, and food streets make it a living stay city too.' },
    ],
  },
  yangyang: {
    city: 'Yangyang',
    primaryIntent: 'Yangyang Korea road trip from Inje over Hangyeryeong to Osaek, Surfyy Beach, Hajodae, Naksansa, and Sokcho',
    metaKeywords: ['Yangyang Korea itinerary', 'Yangyang travel guide', 'Inje to Yangyang Hangyeryeong', 'Hangyeryeong scenic drive', 'Osaek Seoraksan', 'Yangyang Surfyy Beach', 'Surfyy Beach to Naksansa', 'Naksansa Temple', 'Hajodae beachfront stay', 'Jukdo Ingu Beach', 'Yangyang matsutake', 'Yangyang to Sokcho', 'Gangneung to Yangyang', 'Yangyang road trip', 'where to stay in Yangyang'],
    clusters: [
      { label: 'Route intent', terms: ['Inje to Yangyang Hangyeryeong', 'Gangneung to Yangyang', 'Yangyang to Sokcho', 'Yangyang road trip'] },
      { label: 'Mountain intent', terms: ['Hangyeryeong scenic drive', 'Osaek Seoraksan', 'Osaek Jujeongol', 'southern Seoraksan'] },
      { label: 'Coast intent', terms: ['Yangyang Surfyy Beach', 'Surfyy Beach to Naksansa', 'Hajodae Beach', 'Jukdo Ingu Beach'] },
      { label: 'Heritage and stay intent', terms: ['Naksansa Temple', 'Uisangdae Pavilion', 'Hajodae beachfront stay', 'where to stay in Yangyang'] },
      { label: 'Food intent', terms: ['Yangyang matsutake', 'Yangyang local food', 'Yangyang seasonal food'] },
    ],
    questions: [
      { question: 'What is the most scenic drive into Yangyang?', answer: 'From about fifty mainly summer work visits, the editor recommends entering from Inje over Hangyeryeong and descending into Osaek. Seoraksan makes the approach spectacular, but live road conditions and legal stopping places must be checked.' },
      { question: 'What is a good one-day Yangyang itinerary?', answer: 'The editor\'s selective coast order is Surfyy Beach first and Naksan or Naksansa second. It moves from contemporary beach culture into temple and cliff history instead of repeating similar beaches all day.' },
      { question: 'Where should I stay in Yangyang?', answer: 'The editor stayed near Hajodae and would choose a beachfront property there again. Choose Jukdo or Ingu for a surf-led evening, Naksan for temple and Sokcho access, or Osaek for a mountain-led plan.' },
      { question: 'Is Yangyang only for surfers?', answer: 'No. The western Hangyeryeong and Osaek side, Naksansa, Hajodae, beach stays, and the northbound Sokcho handoff make Yangyang a mountain-to-sea driving region as well as a surf destination.' },
      { question: 'What food is distinctive in Yangyang?', answer: 'Matsutake is the clearest local distinction in official county tourism. Availability, price, and menus are seasonal, while many everyday Gangwon dishes overlap with neighboring counties.' },
      { question: 'What is the most natural next city after Yangyang?', answer: 'In the editor\'s repeated experience, Sokcho is the closest and most natural continuation. Southbound road trips can reverse the same coast sequence toward Gangneung.' },
    ],
  },
  donghae: {
    city: 'Donghae',
    primaryIntent: 'Donghae Korea road trip from Gangneung through Mangsang, Eodal, and Chuam to Samcheok',
    metaKeywords: ['Donghae Korea itinerary', 'Donghae travel guide', 'Gangneung to Donghae', 'Mangsang Beach', 'Eodal Harbor', 'Eodal sea urchin sujebi', 'Chuam Beach', 'Chuam Chotdaebawi Rock', 'Donghae to Samcheok', 'Donghae industrial port city', 'Donghae one day route', 'where to stay in Donghae', 'Korea east coast road trip'],
    clusters: [
      { label: 'Route intent', terms: ['Gangneung to Donghae', 'Mangsang to Eodal to Chuam', 'Donghae to Samcheok', 'Korea east coast road trip'] },
      { label: 'Firsthand coast intent', terms: ['Mangsang Beach', 'Eodal Harbor', 'Chuam Beach', 'Chuam Chotdaebawi Rock'] },
      { label: 'Food intent', terms: ['Eodal sea urchin sujebi', 'Eodal Harbor restaurants', 'Donghae seafood'] },
      { label: 'City character intent', terms: ['Donghae small city', 'Donghae industrial port city', 'Donghae versus Sokcho'] },
      { label: 'Stay intent', terms: ['where to stay in Donghae', 'Mangsang accommodation', 'Chuam accommodation', 'central Donghae hotels'] },
    ],
    questions: [
      { question: 'What is the most natural Donghae driving order from Gangneung?', answer: 'From more than fifty mainly work visits, the editor uses Mangsang Beach first, Eodal Harbor for the meal stop, and Chuam Beach last before continuing to Samcheok. It is a selective southbound sequence, not a packed attraction checklist.' },
      { question: 'Is Donghae worth a full day?', answer: 'The editor did not find enough personally essential sights to insist on a full day. Donghae works best as an honest coast segment: one northern beach, an Eodal meal, Chuam, and the onward drive to Samcheok.' },
      { question: 'What should I eat in Donghae?', answer: 'The editor\'s strongest specific memory is sea-urchin sujebi near Eodal Harbor, where anglers also used the parking-and-breakwater edge. Search current restaurants around the Eodal seafood area and confirm the menu, price, and availability rather than relying on a permanent shop guarantee.' },
      { question: 'How does Donghae feel compared with Sokcho?', answer: 'In the editor\'s repeated experience, Donghae feels smaller, more industrial, and more like a practical working coast city, while Sokcho presents a stronger tourism and resort atmosphere. This is a personal route impression, not an official ranking.' },
      { question: 'Where should I stay in Donghae?', answer: 'The editor has not stayed overnight in Donghae and does not claim a firsthand hotel recommendation. Consider Mangsang for a beach-first morning, central Donghae for logistics, or Chuam for the shortest next move to Samcheok, then verify the property directly.' },
      { question: 'What is the natural next city after Donghae?', answer: 'Samcheok. The Mangsang-to-Eodal-to-Chuam order already moves south, and Chuam sits at the practical handoff into the next coastal city.' },
    ],
  },
  gongju: {
    city: 'Gongju',
    primaryIntent: 'Gongju Korea Baekje heritage stop before Jeonju',
    metaKeywords: ['Gongju Korea', 'Gongju travel guide', 'Gongsanseong Fortress', 'Baekje Historic Areas', 'Magoksa Temple', 'Gongju to Jeonju', 'Seoul to Gongju', 'Route 5 Korea'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Gongju', 'Gongju to Jeonju', 'Route 5 Korea'] },
      { label: 'Heritage intent', terms: ['Gongsanseong Fortress', 'Baekje Historic Areas', 'Gongju royal tombs'] },
      { label: 'Temple intent', terms: ['Magoksa Temple', 'Geumgang River Gongju', 'Gongju day trip'] },
    ],
    questions: [
      { question: 'Why stop in Gongju before Jeonju?', answer: 'Gongju gives Route 5 Baekje heritage depth through Gongsanseong, royal memory, Magoksa, and the Geumgang river before Jeonju opens the Jeolla food chapter.' },
      { question: 'Is Gongju worth visiting from Seoul?', answer: 'Yes. It works as a quieter heritage stop where Baekje history makes the southbound route feel meaningful before the better-known Jeonju overnight.' },
    ],
  },
  jeonju: {
    city: 'Jeonju',
    primaryIntent: 'Jeonju Korea Hanok Village bibimbap and Honam route anchor',
    metaKeywords: ['Jeonju Korea', 'Jeonju travel guide', 'Jeonju Hanok Village', 'Jeonju bibimbap', 'Jeonju makgeolli', 'Jeonju to Namwon', 'Seoul to Jeonju', 'Jeolla food trip', 'Route 8 Korea', 'Jeonju to Gwangju'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Jeonju', 'Jeonju to Namwon', 'Jeonju to Gwangju', 'Route 8 Korea'] },
      { label: 'Food intent', terms: ['Jeonju bibimbap', 'Jeonju makgeolli', 'Jeonju street food'] },
      { label: 'Stay intent', terms: ['Jeonju Hanok Village', 'Jeonju hanok stay', 'Jeonju night market'] },
    ],
    questions: [
      { question: 'Why is Jeonju important on Route 5?', answer: 'Jeonju is the strongest inland overnight on Route 5 because Hanok Village, bibimbap, makgeolli, markets, and stay options make the Jeolla story easy to understand.' },
      { question: 'Why is Jeonju important on Route 8?', answer: 'Jeonju gives Route 8 its first emotional Honam chapter before Gwangju adds modern democratic history and Mokpo turns the route toward the harbor.' },
      { question: 'Can Jeonju be more than a day trip?', answer: 'Yes. Jeonju works best as an overnight because evening food streets, hanok stays, makgeolli alleys, and slower old-city walks are part of the appeal.' },
    ],
  },
  namwon: {
    city: 'Namwon',
    primaryIntent: 'Namwon Korea Chunhyang Gwanghalluwon and Jirisan route stop',
    metaKeywords: ['Namwon Korea', 'Namwon travel guide', 'Gwanghalluwon Garden', 'Chunhyang story', 'Jirisan Namwon', 'Jeonju to Namwon', 'Namwon to Suncheon', 'Korea romance city'],
    clusters: [
      { label: 'Route intent', terms: ['Jeonju to Namwon', 'Namwon to Suncheon', 'Route 5 Korea'] },
      { label: 'Story intent', terms: ['Chunhyang story', 'Gwanghalluwon Garden', 'Namwon romance city'] },
      { label: 'Mountain intent', terms: ['Jirisan Namwon', 'Namwon food', 'Namwon festival'] },
    ],
    questions: [
      { question: 'Why include Namwon between Jeonju and Suncheon?', answer: 'Namwon adds Chunhyang, Gwanghalluwon, and Jirisan edge context so the route gains story and landscape before the ecological Suncheon chapter.' },
      { question: 'What is Namwon known for?', answer: 'Namwon is known for the Chunhyang story, Gwanghalluwon Garden, Jirisan access, local food, and a quieter romance-city identity.' },
    ],
  },
  gwangju: {
    city: 'Gwangju',
    primaryIntent: 'Gwangju Korea May 18 Democratic Uprising modern Korean history route anchor',
    metaKeywords: ['Gwangju Korea', 'Gwangju travel guide', 'May 18 Gwangju', 'May 18 Democratic Uprising', 'modern Korean history', 'Asia Culture Center', 'Mudeungsan National Park', 'Yangnim-dong Penguin Village', 'Jeonju to Gwangju', 'Gwangju to Suncheon', 'Gwangju to Mokpo', 'Honam travel', 'Route 8 Korea'],
    clusters: [
      { label: 'Route intent', terms: ['Jeonju to Gwangju', 'Gwangju to Suncheon', 'Gwangju to Mokpo', 'Honam travel', 'Route 8 Korea'] },
      { label: 'Modern history intent', terms: ['May 18 Gwangju', 'May 18 Democratic Uprising', 'May 18 National Cemetery', 'Gwangju democracy', 'modern Korean history'] },
      { label: 'Culture intent', terms: ['Asia Culture Center', 'Yangnim-dong Penguin Village', 'Mudeungsan National Park'] },
    ],
    questions: [
      { question: 'Why should Gwangju be on Route 5?', answer: 'Gwangju is essential because it gives Route 5 a defining modern Korean history chapter through May 18 memory before the route continues to Suncheon and Yeosu.' },
      { question: 'Why should Gwangju be on Route 8?', answer: 'Gwangju is Route 8\'s civic-history center, giving the Seoul-to-Haenam descent moral weight before Mokpo and Haenam.' },
      { question: 'What is Gwangju known for?', answer: 'Gwangju is known for the May 18 Democratic Uprising, May 18 National Cemetery, Asia Culture Center, Mudeungsan National Park, Yangnim-dong, food, markets, and contemporary art.' },
    ],
  },
  imsil: {
    city: 'Imsil',
    primaryIntent: 'Imsil Korea cheese theme park Okjeongho stop between Jeonju and Namwon',
    metaKeywords: ['Imsil Korea', 'Imsil travel guide', 'Imsil Cheese Theme Park', 'Imsil cheese', 'Okjeongho Lake', 'Jeonju to Imsil', 'Imsil to Namwon', 'Korea cheese', 'Jeolla food trip'],
    clusters: [
      { label: 'Route intent', terms: ['Jeonju to Imsil', 'Imsil to Namwon', 'Route 5 Korea'] },
      { label: 'Food intent', terms: ['Imsil Cheese Theme Park', 'Imsil cheese', 'Korea cheese'] },
      { label: 'Nature intent', terms: ['Okjeongho Lake', 'Imsil rural travel', 'Jeolla food trip'] },
    ],
    questions: [
      { question: 'Why include Imsil between Jeonju and Namwon?', answer: 'Imsil closes the gap with Korea cheese identity, the Cheese Theme Park, rural Jeolla scenery, and Okjeongho before Namwon adds Chunhyang and Jirisan.' },
      { question: 'What is Imsil known for?', answer: 'Imsil is known for Imsil cheese, Imsil Cheese Theme Park, dairy production, Okjeongho Lake, and rural Jeolla food travel.' },
    ],
  },
  suncheon: {
    city: 'Suncheon',
    primaryIntent: 'Suncheon one or two day itinerary for National Garden, wetland, and Naganeupseong before Yeosu',
    metaKeywords: ['Suncheon Korea', 'Suncheon travel guide', 'Suncheon one day itinerary', 'Suncheon two day itinerary', 'Suncheon Bay Wetland', 'Suncheon Bay National Garden', 'Suncheon garden vs wetland', 'Suncheon SkyCube', 'Suncheon birdwatching', 'Naganeupseong Walled Town', 'where to stay in Suncheon', 'Suncheon to Yeosu'],
    clusters: [
      { label: 'Route intent', terms: ['Suncheon one day itinerary', 'Suncheon two day itinerary', 'Suncheon to Yeosu'] },
      { label: 'Ecology intent', terms: ['Suncheon Bay Wetland', 'Suncheon birdwatching', 'Suncheon hooded cranes'] },
      { label: 'Garden intent', terms: ['Suncheon Bay National Garden', 'Suncheon garden vs wetland', 'Suncheon SkyCube'] },
      { label: 'Heritage and stay intent', terms: ['Naganeupseong Walled Town', 'where to stay in Suncheon', 'Suncheon without a car'] },
    ],
    questions: [
      { question: 'How many days does Suncheon need?', answer: 'Give one full day to the National Garden and Suncheon Bay Wetland. Add a second day only when Naganeupseong or one Jogyesan temple branch is a real priority.' },
      { question: 'Are Suncheon Bay National Garden and Suncheon Bay Wetland the same place?', answer: 'No. The garden is a designed and accessible introduction to the city\'s ecology; the wetland is the tidal-flat, reed, and wildlife habitat. Official linked transport may help, but current operations must be checked.' },
      { question: 'Do I need a car in Suncheon?', answer: 'Not necessarily for a station, National Garden, wetland, and Yeosu plan if local transport is checked. A car, tour, or carefully planned bus day is much more useful for Naganeupseong, Seonamsa, or Songgwangsa.' },
      { question: 'Should I stay in Suncheon or Yeosu?', answer: 'Stay in Suncheon for a full ecology day, sunset, bird habitat, or a heritage second day. Continue to Yeosu when the real priority is harbor evenings and Suncheon only has room for one selective stop.' },
      { question: 'Will I see hooded cranes at Suncheon Bay?', answer: 'Do not treat a sighting as guaranteed. UNESCO identifies the reserve as an important wintering and stopover site, but season, weather, bird movement, and access conditions determine what visitors see.' },
    ],
  },
  yeosu: {
    city: 'Yeosu',
    primaryIntent: 'Yeosu Korea Odongdo Hyangiram night sea south coast finale',
    metaKeywords: ['Yeosu Korea', 'Yeosu travel guide', 'Yeosu night sea', 'Odongdo Island', 'Hyangiram Hermitage', 'Suncheon to Yeosu', 'Seoul to Yeosu route', 'Korea south coast trip'],
    clusters: [
      { label: 'Route intent', terms: ['Suncheon to Yeosu', 'Seoul to Yeosu route', 'Korea south coast trip'] },
      { label: 'Coast intent', terms: ['Yeosu night sea', 'Odongdo Island', 'Dolsan Bridge'] },
      { label: 'Culture intent', terms: ['Hyangiram Hermitage', 'Yeosu seafood', 'Yeosu Expo'] },
    ],
    questions: [
      { question: 'Why end Route 5 in Yeosu?', answer: 'Yeosu gives the route an emotional coastal finish with Odongdo, Hyangiram, seafood, Expo memory, harbor walks, and the famous night-sea atmosphere.' },
      { question: 'Should Yeosu be a final night?', answer: 'Yes. Yeosu works best as a final overnight because its night views, seafood, islands, and harbor mood are the payoff after Gongju, Jeonju, Gwangju, Suncheon, and the optional Imsil-Namwon variant.' },
    ],
  },
  incheon: {
    city: 'Incheon',
    primaryIntent: 'Incheon Korea open port Chinatown Wolmido West Sea route',
    metaKeywords: ['Incheon Korea', 'Incheon travel guide', 'Incheon Chinatown', 'Wolmido Island', 'Incheon open port', 'Seoul to Incheon', 'Incheon to Suwon', 'West Sea Korea'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Incheon', 'Incheon to Suwon', 'West Sea Korea'] },
      { label: 'Port intent', terms: ['Incheon open port', 'Incheon Chinatown', 'Wolmido Island'] },
      { label: 'Coast intent', terms: ['Incheon ferries', 'Incheon seafood', 'Incheon islands'] },
    ],
    questions: [
      { question: 'Why start Route 6 in Incheon?', answer: 'Incheon gives Route 6 open-port history, Chinatown, Wolmido, ferries, seafood, and West Sea identity before Suwon and the coast.' },
      { question: 'Is Incheon only an airport city?', answer: 'No. Incheon has open-port streets, Chinatown, Wolmido, island ferries, seafood markets, and modern city scale.' },
    ],
  },
  suwon: {
    city: 'Suwon',
    primaryIntent: 'Suwon Korea Hwaseong Fortress UNESCO King Jeongjo route stop',
    metaKeywords: ['Suwon Korea', 'Suwon travel guide', 'Suwon Hwaseong Fortress', 'King Jeongjo', 'UNESCO Suwon', 'Suwon to Seosan', 'Incheon to Suwon', 'Korea fortress city'],
    clusters: [
      { label: 'Route intent', terms: ['Incheon to Suwon', 'Suwon to Seosan', 'Route 6 Korea'] },
      { label: 'Heritage intent', terms: ['Suwon Hwaseong Fortress', 'King Jeongjo', 'UNESCO Suwon'] },
      { label: 'Stay intent', terms: ['Paldalmun Market', 'Suwon food street', 'Suwon night walk'] },
    ],
    questions: [
      { question: 'Why include Suwon on a west coast route?', answer: 'Suwon gives Route 6 a UNESCO fortress and King Jeongjo planning chapter before the route turns toward the West Sea coast.' },
      { question: 'What is Suwon known for?', answer: 'Suwon is known for Hwaseong Fortress, King Jeongjo, city-wall walks, markets, food streets, and easy access from Seoul.' },
    ],
  },
  seosan: {
    city: 'Seosan',
    primaryIntent: 'Seosan Korea Haemi Taean Naepo west coast gateway',
    metaKeywords: ['Seosan Korea', 'Seosan travel guide', 'Haemi Martyrdom Holy Ground', 'Haemieupseong Fortress', 'Taean coast', 'Seosan to Boryeong', 'Suwon to Seosan', 'Naepo Korea'],
    clusters: [
      { label: 'Route intent', terms: ['Suwon to Seosan', 'Seosan to Boryeong', 'Route 6 Korea'] },
      { label: 'Heritage intent', terms: ['Haemi Martyrdom Holy Ground', 'Haemieupseong Fortress', 'Naepo Korea'] },
      { label: 'Coast intent', terms: ['Taean coast', 'Seosan seafood', 'West Sea tidal flats'] },
    ],
    questions: [
      { question: 'Why include Seosan on Route 6?', answer: 'Seosan adds Haemi, Naepo, Catholic martyr memory, tidal-flat food, and Taean coast access before Boryeong.' },
      { question: 'Is Seosan a Taean gateway?', answer: 'Yes. Seosan works as a practical inland-coast hinge before Taean beaches, Anmyeondo, and the Boryeong side of Route 6.' },
    ],
  },
  boryeong: {
    city: 'Boryeong',
    primaryIntent: 'Boryeong Korea Daecheon Beach Mud Festival west coast stop',
    metaKeywords: ['Boryeong Korea', 'Boryeong travel guide', 'Boryeong Mud Festival', 'Daecheon Beach', 'Boryeong mud', 'Boryeong to Gunsan', 'Seosan to Boryeong', 'Korea beach festival'],
    clusters: [
      { label: 'Route intent', terms: ['Seosan to Boryeong', 'Boryeong to Gunsan', 'Route 6 Korea'] },
      { label: 'Festival intent', terms: ['Boryeong Mud Festival', 'Boryeong mud', 'Korea beach festival'] },
      { label: 'Coast intent', terms: ['Daecheon Beach', 'Boryeong seafood', 'West Sea sunset'] },
    ],
    questions: [
      { question: 'Why stop in Boryeong on Route 6?', answer: 'Boryeong gives the west coast a globally legible beach and festival chapter through Daecheon Beach and the Boryeong Mud Festival.' },
      { question: 'Is Boryeong only for the Mud Festival?', answer: 'No. The festival is the hook, but Daecheon Beach, seafood, sunsets, and coastal stays make Boryeong useful beyond festival dates.' },
    ],
  },
  gunsan: {
    city: 'Gunsan',
    primaryIntent: 'Gunsan Korea modern history port old streets west coast route',
    metaKeywords: ['Gunsan Korea', 'Gunsan travel guide', 'Gunsan Modern History Museum', 'Gunsan old streets', 'Gunsan port', 'Gunsan to Mokpo', 'Boryeong to Gunsan', 'Korea modern history city'],
    clusters: [
      { label: 'Route intent', terms: ['Boryeong to Gunsan', 'Gunsan to Mokpo', 'Route 6 Korea'] },
      { label: 'History intent', terms: ['Gunsan Modern History Museum', 'Gunsan old streets', 'Korea modern history city'] },
      { label: 'Food intent', terms: ['Gunsan bakery', 'Gunsan seafood', 'Gunsan port'] },
    ],
    questions: [
      { question: 'Why include Gunsan before Mokpo?', answer: 'Gunsan gives Route 6 a serious modern port-history chapter through museums, colonial-era streets, bakeries, seafood, and harbor memory.' },
      { question: 'What is Gunsan known for?', answer: 'Gunsan is known for modern history streets, the Modern History Museum, old port architecture, bakeries, seafood, and West Sea harbor atmosphere.' },
    ],
  },
  mokpo: {
    city: 'Mokpo',
    primaryIntent: 'Mokpo Korea Yudalsan Gatbawi southwest harbor Dadohae route hinge',
    metaKeywords: ['Mokpo Korea', 'Mokpo travel guide', 'Yudalsan Mountain', 'Mokpo Gatbawi', 'Mokpo seafood', 'Gunsan to Mokpo', 'Gwangju to Mokpo', 'Mokpo to Haenam', 'Seoul to Mokpo route', 'Korea southwest coast', 'Route 8 Korea'],
    clusters: [
      { label: 'Route intent', terms: ['Gunsan to Mokpo', 'Gwangju to Mokpo', 'Mokpo to Haenam', 'Seoul to Mokpo route', 'Route 8 Korea'] },
      { label: 'Harbor intent', terms: ['Mokpo seafood', 'Mokpo ferries', 'Mokpo harbor'] },
      { label: 'Scenery intent', terms: ['Yudalsan Mountain', 'Mokpo Gatbawi', 'Dadohae sunset'] },
    ],
    questions: [
      { question: 'Why end Route 6 in Mokpo?', answer: 'Mokpo gives the West Sea route a real southwest harbor finale through Yudalsan, Gatbawi, seafood, ferries, modern history, and island views.' },
      { question: 'Why include Mokpo before Haenam on Route 8?', answer: 'Mokpo turns the Honam inland descent toward harbor memory, seafood, ferries, and Dadohae mood before Haenam becomes the land-end finale.' },
      { question: 'What is Mokpo known for?', answer: 'Mokpo is known for Yudalsan Mountain, Gatbawi Rock, seafood, ferries, modern port history, harbor views, and Dadohae access.' },
    ],
  },
  haenam: {
    city: 'Haenam',
    primaryIntent: 'Haenam Korea Ttangkkeut Duryunsan Daeheungsa Honam land end route',
    metaKeywords: ['Haenam Korea', 'Haenam travel guide', 'Ttangkkeut Village', 'Duryunsan Mountain', 'Daeheungsa Temple', 'Mokpo to Haenam', 'Haenam to Wando', 'Korea land end', 'Seoul to Haenam route', 'Route 8 Korea'],
    clusters: [
      { label: 'Route intent', terms: ['Mokpo to Haenam', 'Haenam to Wando', 'Route 7 Korea', 'Route 8 Korea', 'Seoul to Haenam route'] },
      { label: 'Land-end intent', terms: ['Ttangkkeut Village', 'Korea land end', 'Haenam south coast'] },
      { label: 'Heritage intent', terms: ['Duryunsan Mountain', 'Daeheungsa Temple', 'Haenam temple'] },
    ],
    questions: [
      { question: 'Why include Haenam after Mokpo?', answer: 'Haenam gives Route 7 a symbolic land-end chapter through Ttangkkeut, Duryunsan, Daeheungsa, rural roads, seafood, and the Wando handoff.' },
      { question: 'Why end Route 8 in Haenam?', answer: 'Haenam gives the Seoul-to-Honam route a symbolic land-end finale through Ttangkkeut, Duryunsan, Daeheungsa, and the continuation toward Wando.' },
      { question: 'What is Haenam known for?', answer: 'Haenam is known for Ttangkkeut land-end travel, Duryunsan Mountain, Daeheungsa Temple, seafood, and its southern peninsula scenery.' },
    ],
  },
  wando: {
    city: 'Wando',
    primaryIntent: 'Wando Korea Cheongsando Dadohae seafood island south coast route',
    metaKeywords: ['Wando Korea', 'Wando travel guide', 'Cheongsando', 'Dadohae', 'Wando seafood', 'Wando Arboretum', 'Haenam to Wando', 'Wando to Boseong', 'Korea island travel'],
    clusters: [
      { label: 'Route intent', terms: ['Haenam to Wando', 'Wando to Boseong', 'Route 7 Korea'] },
      { label: 'Island intent', terms: ['Cheongsando', 'Dadohae', 'Wando ferries', 'Korea island travel'] },
      { label: 'Food intent', terms: ['Wando seafood', 'Wando seaweed', 'south coast seafood'] },
    ],
    questions: [
      { question: 'Why stop in Wando on Route 7?', answer: 'Wando turns the route into Dadohae island travel through Cheongsando, seafood, seaweed culture, ferries, Wando Arboretum, and marine identity.' },
      { question: 'Is Wando good for island travel?', answer: 'Yes. Wando works as a ferry and seafood gateway for Cheongsando and the wider southern island coast.' },
    ],
  },
  boseong: {
    city: 'Boseong',
    primaryIntent: 'Boseong Korea green tea fields Daehan Dawon south coast stop',
    metaKeywords: ['Boseong Korea', 'Boseong travel guide', 'Boseong green tea fields', 'Daehan Dawon', 'Wando to Boseong', 'Boseong to Suncheon', 'Korea tea fields', 'Route 7 Korea'],
    clusters: [
      { label: 'Route intent', terms: ['Wando to Boseong', 'Boseong to Suncheon', 'Route 7 Korea'] },
      { label: 'Tea intent', terms: ['Boseong green tea fields', 'Daehan Dawon', 'Korea tea fields'] },
      { label: 'Landscape intent', terms: ['Boseong scenery', 'rural Jeolla', 'south coast landscape'] },
    ],
    questions: [
      { question: 'Why include Boseong between Wando and Suncheon?', answer: 'Boseong gives Route 7 a calm green-tea landscape between island travel and Suncheon ecology.' },
      { question: 'What is Boseong known for?', answer: 'Boseong is known for green tea fields, Daehan Dawon, tea food and cafes, rural scenery, and a slow south-coast travel pace.' },
    ],
  },
  namhae: {
    city: 'Namhae',
    primaryIntent: 'Namhae Korea German Village Boriam Hallyeohaesang island road south coast',
    metaKeywords: ['Namhae Korea', 'Namhae travel guide', 'Namhae German Village', 'Boriam', 'Hallyeohaesang', 'Namhae island road', 'Yeosu to Namhae', 'Namhae to Tongyeong', 'Korea south coast road trip'],
    clusters: [
      { label: 'Route intent', terms: ['Yeosu to Namhae', 'Namhae to Tongyeong', 'Route 7 Korea'] },
      { label: 'Island intent', terms: ['Namhae island road', 'Hallyeohaesang', 'Darangee Village', 'Namhae beaches'] },
      { label: 'Heritage intent', terms: ['Namhae German Village', 'Boriam', 'south coast temple view'] },
    ],
    questions: [
      { question: 'Why stop in Namhae after Yeosu?', answer: 'Namhae gives Route 7 an island-road chapter toward Hallyeohaesang through German Village, Boriam, terraces, beaches, seafood, and small coastal stays.' },
      { question: 'What is Namhae known for?', answer: 'Namhae is known for German Village, Boriam coastal views, Darangee terraces, beaches, seafood, and scenic island drives.' },
    ],
  },
  tongyeong: {
    city: 'Tongyeong',
    primaryIntent: 'Tongyeong Korea Yi Sun-sin Samdo Sugun Tongjeyeong Hallyeohaesang port city',
    metaKeywords: ['Tongyeong Korea', 'Tongyeong travel guide', 'Yi Sun-sin Tongyeong', 'Samdo Sugun Tongjeyeong', 'Tongyeong naval history', 'Dongpirang Village', 'Hallyeohaesang', 'Tongyeong seafood', 'Namhae to Tongyeong', 'Tongyeong to Geoje'],
    clusters: [
      { label: 'Route intent', terms: ['Namhae to Tongyeong', 'Tongyeong to Geoje', 'Route 7 Korea'] },
      { label: 'History intent', terms: ['Yi Sun-sin Tongyeong', 'Samdo Sugun Tongjeyeong', 'Tongyeong naval history'] },
      { label: 'City intent', terms: ['Dongpirang Village', 'Tongyeong seafood', 'Tongyeong ferries'] },
    ],
    questions: [
      { question: 'Why include Tongyeong before Geoje?', answer: 'Tongyeong gives Route 7 a historically valuable naval chapter through Yi Sun-sin memory, Samdo Sugun Tongjeyeong, Hallyeohaesang islands, Dongpirang, ferries, seafood, and art culture.' },
      { question: 'What is Tongyeong known for?', answer: 'Tongyeong is known for Yi Sun-sin naval history, Samdo Sugun Tongjeyeong, Dongpirang mural village, seafood, ferries, Hallyeohaesang views, and compact harbor walks.' },
    ],
  },
  geoje: {
    city: 'Geoje',
    primaryIntent: 'Geoje Korea POW Camp shipbuilding Windy Hill Oedo Hallyeohaesang Busan handoff',
    metaKeywords: ['Geoje Korea', 'Geoje travel guide', 'Geoje POW Camp', 'Geoje shipbuilding', 'Windy Hill Geoje', 'Oedo Botania', 'Hallyeohaesang', 'Tongyeong to Geoje', 'Geoje to Busan'],
    clusters: [
      { label: 'Route intent', terms: ['Tongyeong to Geoje', 'Geoje to Busan', 'Route 7 Korea'] },
      { label: 'History intent', terms: ['Geoje POW Camp', 'Korean War Geoje', 'Geoje history'] },
      { label: 'Island intent', terms: ['Windy Hill Geoje', 'Oedo Botania', 'Hallyeohaesang', 'Geoje beaches'] },
    ],
    questions: [
      { question: 'Why stop in Geoje before Busan?', answer: 'Geoje gives Route 7 a modern island handoff through shipbuilding, POW Camp history, Windy Hill, Oedo Botania, beaches, and bridge access.' },
      { question: 'Is Geoje only a scenic island?', answer: 'No. Geoje is scenic, but shipbuilding and Korean War POW history make it one of the route\'s strongest past-present cities.' },
    ],
  },
  ulsan: {
    city: 'Ulsan',
    primaryIntent: 'Ulsan Korea one or two day itinerary with Bangucheon UNESCO petroglyphs, Taehwagang, Jangsaengpo, and Daewangam before Busan',
    metaKeywords: ['Ulsan Korea itinerary', 'Ulsan travel guide', 'Bangucheon Petroglyphs UNESCO', 'Bangudae petroglyphs', 'KTX Ulsan Station to downtown', 'Taehwagang Station car rental', 'Ulsan to Gijang', 'Daewangam Park', 'Taehwagang National Garden', 'Jangsaengpo Whale Museum', 'Eonyang bulgogi', 'Ulsan industrial tourism', 'where to stay in Ulsan', 'Ulsan to Busan', 'Gyeongju to Ulsan', 'Ulsan one day trip'],
    clusters: [
      { label: 'Route intent', terms: ['Gyeongju to Ulsan', 'Ulsan to Busan', 'Ulsan one night itinerary', 'Ulsan without a car'] },
      { label: 'Heritage intent', terms: ['Bangucheon Petroglyphs UNESCO', 'Bangudae petroglyphs', 'Cheonjeon-ri petroglyphs', 'Ulsan UNESCO site'] },
      { label: 'Transport intent', terms: ['KTX Ulsan Station to downtown', 'Taehwagang Station Ulsan', 'Taehwagang Station car rental', 'Ulsan to Gijang', 'Eonyang to Bangucheon', 'Ulsan four zones'] },
      { label: 'Coast intent', terms: ['Daewangam Park', 'Ulsan coast itinerary', 'Daewangam suspension bridge', 'Dong-gu Ulsan stay'] },
      { label: 'Modern intent', terms: ['Taehwagang National Garden', 'Jangsaengpo Whale Museum', 'Ulsan industrial city', 'Ulsan river restoration'] },
    ],
    questions: [
      { question: 'How many days do I need in Ulsan?', answer: 'Use one night and part of two days for a balanced central, Jangsaengpo, and Daewangam plan. Add a separate half day or full day if the western Bangucheon petroglyphs are a priority.' },
      { question: 'Is KTX Ulsan Station in downtown Ulsan?', answer: 'No. KTX Ulsan Station is in western Ulju-gun, useful for Eonyang and the Bangucheon branch but requiring a separate transfer to Samsan, Taehwagang, Jangsaengpo, or Dong-gu.' },
      { question: 'Is Ulsan only an industrial city?', answer: 'No. Automotive, shipbuilding, and petrochemicals are essential to its identity, but the 2025 UNESCO-listed petroglyphs, restored Taehwagang river, Jangsaengpo museums, and Daewangam coast create a much longer story.' },
      { question: 'Can I visit the Bangucheon petroglyphs and Daewangam in one short day?', answer: 'It is possible only with aggressive cross-city travel, but it is not the strongest plan. Treat Bangucheon as a western heritage branch and Daewangam as an eastern coast branch.' },
      { question: 'Where should I stay in Ulsan?', answer: 'Samsan and the Taehwagang Station corridor are the practical default. Choose Dong-gu for a coast-led stay or Eonyang and the KTX area only for the western heritage branch.' },
      { question: 'Do I need to eat whale meat in Ulsan?', answer: 'No. Jangsaengpo is valuable for museum and port history; whale cuisine is an optional personal and ethical choice, not a requirement for understanding the city.' },
      { question: 'Can Taehwagang Station work as a starting point for Busan\'s Gijang coast?', answer: 'Yes, when a car-share vehicle is reserved and the day is focused on northeastern Busan. The editor has personally taken rail to Taehwagang Station, collected a Socar, and approached Gijang from the north to avoid first driving through central Busan; confirm live traffic, vehicle availability, parking, and return rules before copying the tactic.' },
    ],
  },
};

export function getCitySeoKeywordProfile(citySlug: string): CitySeoKeywordProfile | null {
  return citySeoKeywordProfiles[citySlug.toLowerCase()] ?? null;
}

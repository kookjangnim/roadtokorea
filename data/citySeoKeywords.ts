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
    primaryIntent: 'Yeongwol Korea Danjong history and inland Gangwon film travel',
    metaKeywords: [
      'Yeongwol Korea',
      'Yeongwol travel guide',
      'Danjong Yeongwol',
      'Cheongnyeongpo',
      'Jangneung Royal Tomb',
      'Yeongwol film tourism',
      'Wang-gwa Saneun Namja filming',
      'Donggang River',
      'Byeolmaro Observatory',
    ],
    clusters: [
      {
        label: 'Route intent',
        terms: ['Wonju Jecheon Yeongwol route', 'Gangwon inland route', 'Yeongwol road trip'],
      },
      {
        label: 'History intent',
        terms: ['Danjong Yeongwol', 'Cheongnyeongpo', 'Jangneung Royal Tomb'],
      },
      {
        label: 'Trend intent',
        terms: ['Yeongwol film tourism', 'Wang-gwa Saneun Namja filming', 'Byeolmaro Observatory'],
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
          'Yes. Film-driven interest can bring new attention, but the page should treat it as a revival of real Danjong heritage rather than a disposable trend.',
      },
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
    primaryIntent: 'Daejeon Korea central transport and Yuseong recovery stop',
    metaKeywords: ['Daejeon Korea', 'Daejeon travel guide', 'Seoul to Daejeon', 'Daejeon station', 'Yuseong hot springs', 'Daejeon science city', 'Korea central route'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Daejeon', 'Daejeon station', 'Korea central route'] },
      { label: 'Recovery intent', terms: ['Yuseong hot springs', 'Daejeon overnight stop', 'Daejeon hotels'] },
      { label: 'City intent', terms: ['Daejeon science city', 'Daejeon market', 'Daejeon bakery'] },
    ],
    questions: [
      { question: 'Why is Daejeon a strong route city?', answer: 'Daejeon combines central transport, station efficiency, Yuseong recovery, and enough city services to support several route versions.' },
      { question: 'Where should Daejeon fit in Route 1?', answer: 'Use it as the clean central overnight when the route needs efficiency or a recovery-focused reset.' },
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
    primaryIntent: 'Gangneung Korea coast entry city after Wonju on Route 2',
    metaKeywords: ['Gangneung Korea', 'Gangneung travel guide', 'Seoul to Gangneung', 'Wonju to Gangneung', 'Gangneung coffee street', 'Gyeongpo Beach', 'Korea east coast route'],
    clusters: [
      { label: 'Route intent', terms: ['Seoul to Gangneung', 'Wonju to Gangneung', 'Korea east coast route'] },
      { label: 'Coast intent', terms: ['Gyeongpo Beach', 'Gangneung beaches', 'Gangneung seafood'] },
      { label: 'Culture intent', terms: ['Gangneung coffee street', 'Gangneung markets', 'Gangneung coastal city'] },
    ],
    questions: [
      { question: 'Why is Gangneung the Route 2 payoff?', answer: 'Gangneung is where the eastbound route finally reaches the sea with coffee, beaches, markets, seafood, and rail access.' },
      { question: 'Should Gangneung be treated as a waypoint?', answer: 'No. It is a full coast-entry city and should anchor the eastbound route after Wonju.' },
    ],
  },
  samcheok: {
    city: 'Samcheok',
    primaryIntent: 'Samcheok Korea scenic East Sea continuation after Gangneung',
    metaKeywords: ['Samcheok Korea', 'Samcheok travel guide', 'Gangneung to Samcheok', 'Samcheok beaches', 'Samcheok caves', 'Korea east coast road trip', 'Samcheok seafood'],
    clusters: [
      { label: 'Route intent', terms: ['Gangneung to Samcheok', 'Korea east coast road trip', 'East Sea continuation'] },
      { label: 'Scenery intent', terms: ['Samcheok beaches', 'Samcheok caves', 'Samcheok cliffs'] },
      { label: 'Local intent', terms: ['Samcheok seafood', 'Samcheok port', 'Samcheok overnight stop'] },
    ],
    questions: [
      { question: 'Why continue to Samcheok after Gangneung?', answer: 'Samcheok keeps the coast open with cliffs, caves, beaches, ports, and a slower road-trip rhythm.' },
      { question: 'Is Samcheok a major city anchor?', answer: 'It works better as a scenic continuation city than a large urban anchor.' },
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
};

export function getCitySeoKeywordProfile(citySlug: string): CitySeoKeywordProfile | null {
  return citySeoKeywordProfiles[citySlug.toLowerCase()] ?? null;
}

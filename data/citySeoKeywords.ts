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
};

export function getCitySeoKeywordProfile(citySlug: string): CitySeoKeywordProfile | null {
  return citySeoKeywordProfiles[citySlug.toLowerCase()] ?? null;
}

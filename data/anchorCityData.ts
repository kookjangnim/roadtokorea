export interface Hotspot {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt?: string;
  author?: string;
  sourceLink?: string;
  tags: string[];
}

export interface LocalCityData {
  slug: string;
  name: string;
  heroImage: string;
  headline: string;
  description: string;
  culturalInsight: string;
  hotspots: Hotspot[];
}

export const anchorCityData: Record<string, LocalCityData> = {
  daejeon: {
    slug: 'daejeon',
    name: 'Daejeon',
    heroImage: '/images/clipartkorea/daejeon/cm26002727.jpg',
    headline: 'The Clean Central Split',
    description: 'A practical central-city chapter where Sungsimdang bakery culture, hot-spring calm, research-district rhythm, and easy transport make the route easier to manage.',
    culturalInsight:
      'Daejeon matters because it is one of the easiest places to divide a long Korean route without forcing a dramatic detour. Its value is stability, clean timing, Sungsimdang as a food reason to stop, Yuseong recovery, and a science-city rhythm that lets the trip breathe.',
    hotspots: []
  },
  daegu: {
    slug: 'daegu',
    name: 'Daegu',
    heroImage: '/images/clipartkorea/daegu/tc00240077166.jpg',
    headline: 'The Southern Urban Reset',
    description: 'A market-rich southern city where food, medicine streets, and denser urban rhythm sharpen the route before the final southeast push.',
    culturalInsight:
      'Daegu is one of the strongest reset cities on Route 1. It gives the inland line a dose of southern energy, practical resupply, and evening life without losing the logic of continuing toward Busan.',
    hotspots: []
  },
  andong: {
    slug: 'andong',
    name: 'Andong',
    heroImage: '/images/clipartkorea/andong/cm27007157.jpg',
    headline: 'The Inland Cultural Anchor',
    description: 'A slow, weighty inland city where Confucian memory, river geography, and regional food make the route feel authored instead of accidental.',
    culturalInsight:
      'Andong matters because it adds cultural gravity to inland travel. The city does not just break a journey south; it deepens it, turning the route into a chapter about memory, ritual, food, and the logic of staying with purpose.',
    hotspots: []
  },
  gyeongju: {
    slug: 'gyeongju',
    name: 'Gyeongju',
    heroImage: '/images/clipartkorea/gyeongju/cm27013557.jpg',
    headline: 'The Museum Without Walls',
    description: 'Step back in time in the ancient capital of the Silla Kingdom, where royal tombs, millennia-old temples, and timeless relics seamlessly blend with modern Korean life.',
    culturalInsight: 'Gyeongju is a living testament to Korea\'s golden age. Here, history is not confined to museums but is breathed in the air, walked upon in the streets, and felt in the shadows of the monumental burial mounds that dot the landscape.',
    hotspots: [] // Detailed points are provided by the city support profile.
  },
  gwangju: {
    slug: 'gwangju',
    name: 'Gwangju',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gwangju%20Asia%20Culture%20Center.jpg',
    headline: 'The Modern History Anchor',
    description: 'A major Jeolla city where May 18 democratic memory, contemporary art, food, markets, and Mudeungsan give Route 5 its civic center.',
    culturalInsight:
      'Gwangju belongs on Route 5 because the Jeolla story needs Korea\'s modern democratic history at its center. May 18 memory comes first, then Asia Culture Center culture, Yangnim-dong craft streets, markets, food, and Mudeungsan make the city one of Korea\'s strongest past-present urban chapters.',
    hotspots: []
  },
  incheon: {
    slug: 'incheon',
    name: 'Incheon',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Incheon%20Chinatown.jpg',
    headline: 'The Open-Port Gateway',
    description: 'A West Sea port city where open-port history, Chinatown, Wolmido, ferries, airport scale, and island access make Route 6 begin differently from every inland route.',
    culturalInsight:
      'Incheon matters because it lets travelers see Korea through port contact, migration, modern trade, islands, and the West Sea. It is not only Seoul\'s airport city; it is the route\'s open-port beginning.',
    hotspots: []
  },
  suwon: {
    slug: 'suwon',
    name: 'Suwon',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Suwon%20Hwaseong%20Fortress.jpg',
    headline: 'The Fortress Planning City',
    description: 'A UNESCO fortress city where King Jeongjo, Hwaseong walls, markets, and walkable heritage give Route 6 a strong first inland hinge.',
    culturalInsight:
      'Suwon matters on Route 6 because the West Sea line needs a powerful Joseon-era planning chapter before it turns toward coastal Chungcheong. Hwaseong is history, city design, walking, food, and overnight practicality in one place.',
    hotspots: []
  },
  mokpo: {
    slug: 'mokpo',
    name: 'Mokpo',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mokpo%20Yudalsan.jpg',
    headline: 'The Southwest Harbor Finale',
    description: 'A port city of Yudalsan views, Gatbawi geology, seafood, ferries, modern history streets, and Dadohae sunset.',
    culturalInsight:
      'Mokpo matters because Route 6 needs a real finale, not only a last dot. The city gathers West Sea memory, southwest seafood, island departure, modern port history, and mountain-to-harbor views before the network can later expand along the south coast.',
    hotspots: []
  }
};

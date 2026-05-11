export type { Hotspot } from './tier2Cities';
import type { Hotspot } from './tier2Cities';

export interface TierCityData {
  slug: string;
  name: string;
  heroImage: string;
  headline: string;
  description: string;
  culturalInsight: string;
  hotspots: Hotspot[];
}

export const tier4Cities: Record<string, TierCityData> = {
  cheonan: {
    name: 'Cheonan',
    slug: 'cheonan',
    headline: 'The First Low-Stakes Break',
    heroImage: '/images/routes/route-1/cheonan/hero-generated-v1.png',
    description: 'An easy early route pause where the Seoul departure softens before the corridor asks for bigger decisions.',
    culturalInsight:
      'Cheonan matters because not every stop on Route 1 needs to carry heavy narrative weight. It is the kind of city that makes the first southbound block feel paced rather than endured.',
    hotspots: []
  },
  yeoju: {
    name: 'Yeoju',
    slug: 'yeoju',
    headline: 'The First Inland Split',
    heroImage: 'http://tong.visitkorea.or.kr/cms/resource/11/3072711_image2_1.jpg',
    description: 'A Namhan River city where Seoul loosens and the route can split toward Chungju or Wonju.',
    culturalInsight:
      'Yeoju matters because it is both historical and directional. King Sejong’s royal memory, Silleuksa, ceramics, riverside leisure, and modern outlet culture all sit at the point where the trip can bend south toward Chungju or east toward Wonju.',
    hotspots: []
  },
  gumi: {
    name: 'Gumi',
    slug: 'gumi',
    headline: 'The Mid-Corridor Breather',
    heroImage: '/images/routes/route-1/gumi/hero-generated-v1.png',
    description: 'A practical industrial-riverside city that helps the direct corridor stay flexible without turning into a major detour.',
    culturalInsight:
      'Gumi is useful when the route needs an honest middle pause instead of a destination city. Its value is service, timing, and the ability to keep the corridor calm.',
    hotspots: []
  },
  changnyeong: {
    name: 'Changnyeong',
    slug: 'changnyeong',
    headline: 'The Lower-River Calm',
    heroImage: '/images/routes/route-1/changnyeong/hero-generated-v1.png',
    description: 'A quieter Nakdong-side chapter where the route regains calm before the final approach to Busan.',
    culturalInsight:
      'Changnyeong matters when the late inland or cycling route needs to exhale. It gives the southern half of Route 1 a lower-pressure reset before the final city energy returns.',
    hotspots: []
  },
  uljin: {
    name: 'Uljin',
    slug: 'uljin',
    headline: 'The Long-Coast Continuity',
    heroImage: '/images/routes/route-1/uljin/hero-generated-v1.png',
    description: 'A quieter east-coast county that keeps the shoreline route broad, open, and less dependent on only larger port cities.',
    culturalInsight:
      'Uljin earns route space because it protects the continuity of the coast. It keeps the east-sea line feeling expansive rather than collapsing into just Gangneung and Pohang.',
    hotspots: []
  },
  samcheok: {
    name: 'Samcheok',
    slug: 'samcheok',
    headline: 'The Scenic Coastline Continuation',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/2025-11-12%2014.02.53%20samcheok.jpg',
    description: 'A smaller east-coast chapter where cliffs, port edges, and open road scenery keep the shoreline route from turning into a sprint between bigger names.',
    culturalInsight:
      'Samcheok matters because the east coast gets stronger when it unfolds in chapters. It gives the sea route one more scenic, lower-pressure stretch before Uljin takes over the longer quiet-coast logic.',
    hotspots: []
  },
  yangyang: {
    name: 'Yangyang',
    slug: 'yangyang',
    headline: 'The Surf-and-Temple Hinge',
    heroImage: 'https://tong.visitkorea.or.kr/cms/resource/50/3393450_image2_1.jpg',
    description: 'A compact East Sea stop where Surfyy Beach, Hajodae, Naksansa, and airport access make old coast and young beach culture meet.',
    culturalInsight:
      'Yangyang matters on Route 4 because it proves the east coast has present-tense culture, not only scenery. Surf schools, beach stays, Naksansa temple memory, and the Sokcho-to-Gangneung handoff all sit close together.',
    hotspots: []
  },
  donghae: {
    name: 'Donghae',
    slug: 'donghae',
    headline: 'The Port-and-Sunrise Connector',
    heroImage: 'https://tong.visitkorea.or.kr/cms/resource/56/3363856_image2_1.jpg',
    description: 'A smaller port city where Mukho Lighthouse, Nongoldam-gil, Chuam rocks, and Mureung Valley keep the coast grounded and local.',
    culturalInsight:
      'Donghae matters because Route 4 should not become a chain of beaches. Mukho port memory, lighthouse views, fishing-town storytelling, sunrise rocks, and mountain-valley water all make the stop feel lived-in.',
    hotspots: []
  },
  sangju: {
    name: 'Sangju',
    slug: 'sangju',
    headline: 'The River-Corridor Hinge',
    heroImage: '/images/routes/route-1/sangju/hero-generated-v1.png',
    description: 'A practical inland city where pass-country effort relaxes into the broader Nakdong southbound flow.',
    culturalInsight:
      'Sangju matters less as a stand-alone headline city and more as a route hinge. It is where the Seoul-to-Busan inland line stops feeling like a sequence of thresholds and begins to read clearly as a longer river-led corridor.',
    hotspots: []
  },
  yeongdeok: {
    name: 'Yeongdeok',
    slug: 'yeongdeok',
    headline: 'The Coastal Flavor Anchor',
    heroImage: '/images/routes/route-1/yeongdeok/hero-generated-v1.png',
    description: 'A smaller east-coast town where seafood identity, port texture, and shoreline air make the route feel regionally specific.',
    culturalInsight:
      'Yeongdeok is less about major-city concentration and more about clarity of flavor. It gives the east coast line a local face, especially when the route needs food, fishing-port character, and one smaller-town chapter before larger southeastern cities take over.',
    hotspots: []
  },
  miryang: {
    name: 'Miryang',
    slug: 'miryang',
    headline: 'The Quiet Southern Hinge',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yeongnamru%20Miryang%20Gyeongsangnamdo.JPG',
    description: 'A calmer late-route city where the inland line bends toward Busan without losing its softer river-side composure too early.',
    culturalInsight:
      'Miryang earns route space by keeping the final southern approach measured. It is less about adding one more city chapter and more about helping Busan arrive from a clearer, quieter position.',
    hotspots: []
  },
  pohang: {
    name: 'Pohang',
    slug: 'pohang',
    headline: 'The Late-Coast Hinge',
    heroImage: '/images/routes/route-1/pohang/hero-generated-v1.png',
    description: 'A sea-facing industrial city that works as the strongest hinge between the long east coast and the final Busan approach.',
    culturalInsight:
      'Pohang matters because it turns the last stretch of the coast into a controlled handoff instead of a rushed descent. It combines service infrastructure, shoreline mood, and late-route practicality better than smaller coastal stops can.',
    hotspots: []
  },
  ulsan: {
    name: 'Ulsan',
    slug: 'ulsan',
    headline: 'The Industrial Coast Metropolis',
    heroImage: 'https://tong.visitkorea.or.kr/cms/resource/44/3422844_image2_1.png',
    description: 'A metropolitan coast chapter where Daewangam cliffs, Taehwagang National Garden, whale memory, and industrial Korea sit before Busan.',
    culturalInsight:
      'Ulsan matters on Route 4 because it shows Korea in the present tense at scale. The city holds shipbuilding and automotive identity, restored river ecology, Daewangam coastal drama, and Jangsaengpo whale memory before the Busan finale.',
    hotspots: []
  },
  mungyeong: {
    name: 'Mungyeong',
    slug: 'mungyeong',
    headline: 'The Pass-Country Threshold',
    heroImage: '/images/routes/route-1/mungyeong/hero-generated-v1.png',
    description: 'A mountain-pass city where the route narrows, the terrain becomes meaningful, and crossing the peninsula starts to feel earned.',
    culturalInsight:
      'Mungyeong is less about urban density and more about transition. The city carries the logic of gates, passes, and crossings, so staying here makes sense when the route should feel shaped by geography rather than only by transfer time.',
    hotspots: []
  },
  wonju: {
    name: 'Wonju',
    slug: 'wonju',
    headline: 'Nature\'s Embrace',
    heroImage: '/images/destinations/Wonju_Hiker_on_mountain_overlooking_city_1b7177f12b.jpeg',
    description: 'A serene escape where majestic mountains and tranquil temples offer a profound sense of peace.',
    culturalInsight: 'Wonju is defined by its deep connection to nature, offering a spiritual retreat away from the bustling city life. The harmony between ancient traditions and untouched landscapes creates an atmosphere of profound stillness.',
    hotspots: [] // Dynamic hotspots will be loaded from destinations.ts
  },
  pyeongchang: {
    name: 'Pyeongchang',
    slug: 'pyeongchang',
    headline: 'The Olympic Highland Gateway',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpensia.jpg',
    description: 'A Gangwon highland county where the 2018 Winter Olympics, ski resorts, Jinbu access, and Odaesan turn Route 2 into a true mountain-to-sea crossing.',
    culturalInsight:
      'Pyeongchang matters because Route 2 should not jump from Wonju straight to Gangneung. The Olympic mountain cluster, Phoenix Snow Park, Alpensia, Yongpyong, Jinbu Station, Woljeongsa, and Odaesan give the road a highland chapter with both global memory and Korean depth.',
    hotspots: []
  },
  daegwallyeong: {
    name: 'Daegwallyeong',
    slug: 'daegwallyeong',
    headline: 'The Highland Pass Before The Sea',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpensia.jpg',
    description: 'A highland pass and resort district where ski venues, ranch scenery, wind, snow, and mountain roads prepare the final descent into Gangneung.',
    culturalInsight:
      'Daegwallyeong matters as the last mountain threshold on Route 2. It holds Alpensia, Yongpyong, Olympic venue memory, ranch landscapes, and the physical feeling of crossing from inland Gangwon toward the East Sea.',
    hotspots: []
  },
  gapyeong: {
    name: 'Gapyeong',
    slug: 'gapyeong',
    headline: 'The River-Lake Escape',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nami%20Island%2C%20Korea.jpg',
    description: 'The first leisure gateway where Seoul softens into Bukhangang river air, islands, camping, and lakeside movement.',
    culturalInsight:
      'Gapyeong matters on Route 3 because it lets the northern route begin gently. Before DMZ memory and Seoraksan passes arrive, the line first becomes river, lake, and weekend escape.',
    hotspots: []
  },
  chuncheon: {
    name: 'Chuncheon',
    slug: 'chuncheon',
    headline: 'The Northern Lakeside Anchor',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chuncheon%20Soyang%20Bridge.jpg',
    description: 'A lakeside city of dakgalbi, river islands, Soyang water, and enough urban rhythm to anchor the northern route.',
    culturalInsight:
      'Chuncheon gives Route 3 its first real city chapter. It keeps the line from becoming only scenery by adding food identity, lake culture, and a practical overnight before the route turns quieter toward Yanggu.',
    hotspots: []
  },
  yanggu: {
    name: 'Yanggu',
    slug: 'yanggu',
    headline: 'The Quiet Borderland Chapter',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath:Punchbowl%20Korea.jpg',
    description: 'A DMZ-adjacent mountain county where Punch Bowl geography and war memory give Route 3 its northern gravity.',
    culturalInsight:
      'Yanggu is the reason Route 3 feels different from a pretty road to Sokcho. It brings borderland silence, Korean War memory, and the feeling that northern geography is carrying history.',
    hotspots: []
  },
  inje: {
    name: 'Inje',
    slug: 'inje',
    headline: 'The Seorak Pass Decision',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath:Naerincheon%20River.jpg',
    description: 'A mountain and valley threshold where Route 3 chooses how it will cross toward Seoraksan and Sokcho.',
    culturalInsight:
      'Inje matters because it is not just another inland stop. It is the decision point before Jinburyeong, Hangyeryeong, or Misiryeong, where the final arrival into Sokcho changes shape.',
    hotspots: []
  },
  goseong: {
    name: 'Goseong',
    slug: 'goseong',
    headline: 'The Northern Coast Handoff',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath:Goseong%20coast%20Korea.jpg',
    description: 'A northern East Sea chapter that gives the Jinburyeong route a coastal prelude before Sokcho.',
    culturalInsight:
      'Goseong works best as the coast-side handoff after Jinburyeong. It lets Route 3 touch the far northern East Sea before finishing in Sokcho.',
    hotspots: []
  },
  sokcho: {
    name: 'Sokcho',
    slug: 'sokcho',
    headline: 'The Seorak Sea Arrival',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath:Sokcho%20Beach.jpg',
    description: 'A sea-facing city where Seoraksan views, harbor markets, seafood, and northern coastal memory finish Route 3.',
    culturalInsight:
      'Sokcho is strongest when it feels like release after the mountains. On Route 3, the city is not only a beach arrival; it is the payoff for lakes, borderland memory, Inje, and the Seoraksan pass choice.',
    hotspots: []
  },
  jecheon: {
    name: 'Jecheon',
    slug: 'jecheon',
    headline: 'The Inland Threshold',
    heroImage: '/images/placeholder.png',
    description: 'A mountain-edged inland city that helps Route 1 turn away from the default corridor and prepare for deeper country.',
    culturalInsight:
      'Jecheon belongs on the route as a threshold city. Its value is not only scenery, but the feeling that the trip is leaving the capital corridor and entering a more interior Korea shaped by lakes, mountain approaches, and slower movement.',
    hotspots: []
  },
  yeongwol: {
    name: 'Yeongwol',
    slug: 'yeongwol',
    headline: 'The Exile River Revival',
    heroImage: 'http://tong.visitkorea.or.kr/cms/resource/74/3375074_image2_1.JPG',
    description: 'A river-locked history city where King Danjong memory, film-driven travel, and Gangwon inland scenery converge.',
    culturalInsight:
      'Yeongwol matters because it shows how a local story can become current again. Cheongnyeongpo, Jangneung, Danjong Culture Festival, river geography, and the film revival around Wang-gwa Saneun Namja turn the city into a powerful short-branch destination after Wonju and Jecheon.',
    hotspots: []
  },
  jeongseon: {
    name: 'Jeongseon',
    slug: 'jeongseon',
    headline: 'The Arirang Mountain Market Chapter',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeongseon%20Arirang%20Market.jpg',
    description: 'A deep Gangwon county where Arirang, five-day markets, railbike valleys, mining-era revival, and Kangwon Land make the inland branch feel lived-in.',
    culturalInsight:
      'Jeongseon matters on Branch 2A because it gives the route a distinctly Gangwon interior voice. Arirang Market, Jeongseon Arirang, A-Train memory, railbike tracks, Hwaam Cave, mountain valleys, and Kangwon Land as Korea’s only casino open to Korean citizens make the stop cultural, scenic, practical, and economically layered at once.',
    hotspots: []
  },
  taebaek: {
    name: 'Taebaek',
    slug: 'taebaek',
    headline: 'The Coal Highland Threshold',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taebaeksan%20Mountain.jpg',
    description: 'A highland city of coal history, Taebaeksan, Hwangji Pond, Taebaek Hanwoo, river-source geography, and the final mountain push before Samcheok and the East Sea.',
    culturalInsight:
      'Taebaek matters because Branch 2A needs more than scenery before it reaches the coast. Coal mining decline, population pressure, the Taebaek Coal Museum, Hwangji Pond as the Nakdonggang source, Taebaeksan, highland weather, and Taebaek Hanwoo make it one of Korea\'s strongest past-present mountain cities.',
    hotspots: []
  },
  chungju: {
    name: 'Chungju',
    slug: 'chungju',
    headline: 'The Lakeside Retreat',
    heroImage: '/images/destinations/Chungju_Traveler_at_lake_fortress_wall_6374ceab8e.jpeg',
    description: 'Surrounded by calm waters and lush landscapes, Chungju is a hidden gem for relaxation and natural beauty.',
    culturalInsight: 'The tranquil waters of Chungju inspire a slower pace of life, reflecting the harmonious balance of Korea\'s inland beauty. From misty morning lakes to quiet forest trails, Chungju offers a perfect sanctuary for those seeking stillness.',
    hotspots: [] // Dynamic hotspots will be loaded from destinations.ts
  }
};

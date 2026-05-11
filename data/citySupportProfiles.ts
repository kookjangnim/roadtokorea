export type CitySupportPointKind =
  | 'recovery'
  | 'stay'
  | 'food'
  | 'mobility'
  | 'checkpoint';

export interface CitySupportPoint {
  id: string;
  name: string;
  kind: CitySupportPointKind;
  areaLabel?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  summary: string;
  note: string;
}

export interface CitySupportProfileSection {
  title: string;
  body: string;
}

export interface CitySupportProfileDecision {
  title: string;
  bestFor: string;
  why: string;
}

export interface CitySupportStayZone {
  title: string;
  areaLabel: string;
  bestFor: string;
  why: string;
}

export interface CitySupportProfileVisual {
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
  body: string;
  sourceLabel: string;
  sourceHref: string;
  licenseLabel: string;
}

export interface CitySupportOfficialReference {
  title: string;
  eyebrow: string;
  image: string;
  alt: string;
  body: string;
  sourceLabel: string;
  sourceHref: string;
  licenseLabel: string;
  usageNote: string;
}

export interface CitySupportVideoReference {
  title: string;
  eyebrow: string;
  youtubeId: string;
  href: string;
  body: string;
  channelLabel: string;
  whyWatch: string;
}

export interface CitySupportProfile {
  slug: string;
  city: string;
  mapTitle: string;
  mapIntro: string;
  mapCenter: {
    lat: number;
    lng: number;
  };
  supportSummary: string;
  roleSummary: string;
  staySummary: string;
  foodSummary: string;
  nextLegSummary: string;
  accommodationNote?: string;
  sections: CitySupportProfileSection[];
  decisions: CitySupportProfileDecision[];
  stayZones?: CitySupportStayZone[];
  visuals: CitySupportProfileVisual[];
  officialReferences?: CitySupportOfficialReference[];
  videoReferences?: CitySupportVideoReference[];
  points: CitySupportPoint[];
}

const citySupportProfiles: Record<string, CitySupportProfile> = {
  chungju: {
    slug: 'chungju',
    city: 'Chungju',
    mapTitle: 'Where Chungju becomes useful on the route',
    mapIntro:
      'This is not a sightseeing map. It is a support map for deciding where to recover, where to sleep, and where to stage the next push toward Mungyeong Saejae.',
    mapCenter: {
      lat: 36.92,
      lng: 127.95,
    },
    supportSummary:
      'Chungju works best as a recovery node. The city center keeps transit and practical lodging easy, while Suanbo gives the route a more deliberate hot-spring overnight before the pass-country chapter.',
    roleSummary:
      'On a Seoul-to-Busan inland line, Chungju is where the route stops feeling like a loose extension of the capital. It becomes a place to reset the body, simplify the overnight, and prepare for a more meaningful terrain shift.',
    staySummary:
      'If you want the easiest overnight, keep the terminal-side city grid. If you want the route logic to feel stronger, move south into the Suanbo hot-spring belt and treat it as a recovery-led stay.',
    foodSummary:
      'Food here is less about headline dining and more about function: warm soups, hearty evening meals, and a clean breakfast before an early departure or a harder cycling day.',
    nextLegSummary:
      'After Chungju, the route can commit. The next chapter points toward Mungyeong Saejae, inland climbing logic, and a trip that feels authored instead of simply transferred.',
    accommodationNote:
      'Strongest stay-planning angle: one practical city-core stay group and one recovery-led Suanbo stay group.',
    sections: [
      {
        title: 'Why Chungju earns a night',
        body:
          'Chungju makes sense when the route needs an actual reset instead of another coffee stop. It gives you enough city infrastructure to keep the overnight easy, but it also has a second layer in Suanbo where recovery becomes the whole point.',
      },
      {
        title: 'Why the map should stay local',
        body:
          'A Seoul-to-Chungju line tells you how to arrive, but not how to use the city. The real decision is whether you sleep in the practical city core, ride or drive down to Suanbo, or linger near Tangeumdae and the riverside cycling corridor before pushing south.',
      },
      {
        title: 'What changes after Chungju',
        body:
          'This is the last place on the inland rhythm where recovery can still feel comfortable and optional. Once you leave, the route starts reading more like a crossing: narrower decisions, more terrain awareness, and a stronger commitment to the southbound line.',
      },
      {
        title: 'Why Suanbo matters more than a spa detour',
        body:
          'Suanbo is useful because it turns recovery into route logic. The hot-spring district gives Chungju a reason to hold an overnight that actively improves the next chapter instead of merely slowing the trip down.',
      },
      {
        title: 'Why cyclists read Chungju differently',
        body:
          'For riders, Chungju is not just another inland city. Tangeumdae, the certification-center logic, and the move toward Suanbo make it one of the first places where recovery, route identity, and the next day?셲 legs all intersect.',
      },
      {
        title: 'How to keep the stop from feeling vague',
        body:
          'The city gets stronger when you choose a zone on purpose. Terminal-side Chungju is about convenience, Tangeumdae is about orientation, and Suanbo is about recovery. Once those are separated, the stop becomes easier to plan and easier to explain.',
      },
    ],
    decisions: [
      {
        title: 'Keep the city core',
        bestFor: 'Late arrivals, transit users, and travelers who want the least friction.',
        why:
          'The terminal-side grid keeps lodging and departures easy. It is the right call when the stop is practical first and restorative second.',
      },
      {
        title: 'Sleep in Suanbo',
        bestFor: 'Cyclists, inland drivers, and anyone building the route around recovery.',
        why:
          'Suanbo makes the overnight feel intentional. Hot-spring access, concentrated lodging, and warm-food timing all support the next day better than a purely functional city stay.',
      },
      {
        title: 'Touch Tangeumdae before leaving',
        bestFor: 'Travelers who want one grounded local read without turning Chungju into a full sightseeing chapter.',
        why:
          'Tangeumdae helps the stop feel rooted in place. It is a good short checkpoint when you want the city to register as more than a bed between transfers.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the terminal-side grid',
        areaLabel: 'City core',
        bestFor: 'Late arrivals, transit users, and low-friction overnights.',
        why:
          'This is the most practical sleep decision when you want a stable night and an easy departure instead of a fully recovery-led detour.',
      },
      {
        title: 'Move down to Suanbo',
        areaLabel: 'Suanbo',
        bestFor: 'Cyclists, inland drivers, and travelers who want the overnight itself to repair the route.',
        why:
          'Suanbo works because accommodation, baths, and recovery mood all line up with the next day?셲 terrain demands.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Recovery mood',
        title: 'Suanbo should feel warm before it feels efficient',
        image: '/images/routes/route-1/chungju/support-1-generated-v1.png',
        alt: 'Generated editorial recovery image for Suanbo in Chungju',
        body:
          'Suanbo is useful because it is an actual recovery town in the mountains, not just a hotel cluster. Even before you choose a bath or a room, the terrain itself signals a slower reset.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/chungju/support-1-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Route atmosphere',
        title: 'Riverside night gives the stop emotional weight',
        image: '/images/routes/route-1/chungju/support-2-generated-v1.png',
        alt: 'Generated editorial night-river image for Chungju',
        body:
          'Chungju reads better as part of a journey when the page shows its real inland texture. The value is not spectacle alone, but the feeling of entering a slower mountain-and-water chapter.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/chungju/support-2-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Landscape anchor',
        title: 'Lake-and-fortress imagery explains why this is not just a transit town',
        image: '/images/routes/route-1/chungju/support-3-generated-v1.png',
        alt: 'Generated editorial landscape image for Chungju Lake',
        body:
          'If the city needs one visual argument, it is this inland breadth. The stop works because it feels spatially different from Seoul before the route narrows again.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/chungju/support-3-generated-v1.png',
        licenseLabel: 'Internal',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official image',
        title: 'Suanbo footbath is the clearest recovery proof point',
        image: 'https://tong.visitkorea.or.kr/cms/resource/51/3343351_image2_1.jpg',
        alt: 'Official VisitKorea image of Suanbo footbath in Chungju',
        body:
          'This is the most direct official image for the recovery logic on this page. It shows why Suanbo is more than a generic inland overnight: the stop is built around warm-reset culture.',
        sourceLabel: 'VisitKorea tourism data page',
        sourceHref: 'https://data.visitkorea.or.kr/resource/3343355',
        licenseLabel: 'KTO Open API',
        usageNote:
          'Korea Tourism Organization says its tourism OpenAPI provides only information selected for free use without copyright restrictions.',
      },
      {
        eyebrow: 'Official image',
        title: 'Tangeumho gives Chungju a slower outdoor edge',
        image: 'https://tong.visitkorea.or.kr/cms/resource/00/3494900_image2_1.jpg',
        alt: 'Official VisitKorea image of Tangeumho Rainbow Road in Chungju',
        body:
          'This official lakeside image supports the second half of the Chungju story: not just baths and sleep, but a calmer waterside chapter that lets the city register before the route tightens again.',
        sourceLabel: 'VisitKorea tourism data page',
        sourceHref: 'https://data.visitkorea.or.kr/resource/2666753',
        licenseLabel: 'KTO Open API',
        usageNote:
          'Best treated as a directly credited tourism-data image rather than a decorative generic hero. Keep the source link visible.',
      },
    ],
    videoReferences: [
      {
        eyebrow: 'Local video reference',
        title: 'Tangeum Lake bike path gives the rider view of Chungju',
        youtubeId: '2wywFCzEubU',
        href: 'https://www.youtube.com/watch?v=2wywFCzEubU',
        body:
          'This video is useful because it shows how Chungju actually reads to riders: river edge, certification logic, and the feel of the transition before the Saejae side starts to matter.',
        channelLabel: '?숇꽕?몃뒗?뷪V',
        whyWatch:
          'Watch this when you want the city to feel real before deciding whether the stop should be practical only or part of the trip identity.',
      },
    ],
    points: [
      {
        id: 'chungju-terminal-stay',
        name: 'Terminal-side stay grid',
        kind: 'stay',
        areaLabel: 'City core',
        coordinates: {
          lat: 36.9822,
          lng: 127.9147,
        },
        summary:
          'The most practical lodging cluster if you are arriving late or want to keep bus and taxi access easy.',
        note:
          'Use this area when the stop is mainly about convenience, a stable bed, and a fast departure the next morning.',
      },
      {
        id: 'tangeumdae-checkpoint',
        name: 'Tangeumdae riverside checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Riverside edge',
        coordinates: {
          lat: 36.9893,
          lng: 127.9034,
        },
        summary:
          'A useful riverside orientation point for cyclists and anyone trying to read the city through its slower outdoor edge.',
        note:
          'This is where the route starts feeling less like traffic management and more like an inland travel chapter.',
      },
      {
        id: 'suanbo-hot-springs',
        name: 'Suanbo hot-spring belt',
        kind: 'recovery',
        areaLabel: 'Suanbo',
        coordinates: {
          lat: 36.8483,
          lng: 127.9911,
        },
        summary:
          'The recovery-heavy side of Chungju, with hot-spring hotels and baths that justify staying rather than only passing through.',
        note:
          'Best for riders, inland drivers, and anyone who wants the overnight to actively improve the next day.',
      },
      {
        id: 'suanbo-stay-strip',
        name: 'Suanbo hotel strip',
        kind: 'stay',
        areaLabel: 'Suanbo',
        coordinates: {
          lat: 36.8464,
          lng: 127.985,
        },
        summary:
          'A concentrated stay area where accommodation and bath culture sit close together.',
        note:
          'Treat this as the strongest overnight zone when the point is recovery, not urban exploration.',
      },
      {
        id: 'suanbo-meal-zone',
        name: 'Suanbo meal zone',
        kind: 'food',
        areaLabel: 'Suanbo main street',
        coordinates: {
          lat: 36.8472,
          lng: 127.9878,
        },
        summary:
          'A practical area for warm evening meals and a straightforward breakfast before heading toward the pass country.',
        note:
          'The value here is timing and function: eat well, rest well, and leave with better legs.',
      },
      {
        id: 'sangmo-checkout',
        name: 'Southbound departure line',
        kind: 'mobility',
        areaLabel: 'Toward Mungyeong side',
        coordinates: {
          lat: 36.9035,
          lng: 128.021,
        },
        summary:
          'A directional marker showing the route tightening toward the Mungyeong side rather than drifting back toward the wider city grid.',
        note:
          'Think of this as the handoff from easy reset territory into a more committed inland crossing.',
      },
      {
        id: 'tangeumdae-certification-center',
        name: 'Cycling certification-center zone',
        kind: 'checkpoint',
        areaLabel: 'Tangeumdae',
        coordinates: {
          lat: 36.98932,
          lng: 127.90343,
        },
        summary:
          'A small but meaningful rider landmark that reinforces Chungju?셲 role inside long inland cycling lines.',
        note:
          'Useful when the page should speak to how cyclists actually experience the stop, not just how drivers pass through it.',
      },
      {
        id: 'suanbo-footbath-entry',
        name: 'Suanbo entry footbath zone',
        kind: 'recovery',
        areaLabel: 'North entry to Suanbo',
        coordinates: {
          lat: 36.8501,
          lng: 127.9888,
        },
        summary:
          'A lighter recovery touchpoint near the entrance to the hot-spring area that helps the district read as a true recovery town.',
        note:
          'Even when you are not booking a long bath session, this area explains why Suanbo feels designed around warm reset culture.',
      },
    ],
  },
  yeoju: {
    slug: 'yeoju',
    city: 'Yeoju',
    mapTitle: 'Where Yeoju becomes the first real split after Seoul',
    mapIntro:
      'Yeoju is the first junction city in the route system. The map should make one thing obvious: this is where Route 1 can bend toward Chungju while Route 2 can open toward Wonju.',
    mapCenter: {
      lat: 37.298,
      lng: 127.637,
    },
    supportSummary:
      'Yeoju works best as a junction stop: close enough to Seoul to stay easy, but rich enough in royal memory, Namhan River scenery, ceramics, rice culture, and modern outlet leisure to feel like the first true regional chapter.',
    roleSummary:
      'On Route 1, Yeoju solves the Seoul-to-Chungju gap by giving the inland line a meaningful first pause. On Route 2, it becomes the same early split before the route continues toward Wonju and the eastbound corridor.',
    staySummary:
      'Yeoju is usually a half-day or easy overnight, not a forced long stay. Keep the river-temple side when the city should feel historical and scenic, or use the outlet side when the stop needs parking, services, and a modern leisure rhythm.',
    foodSummary:
      'Yeoju food logic should lean local and grounded: rice, riverside meals, simple market eating, and a slower stop that feels different from the Seoul departure without asking travelers to over-plan.',
    nextLegSummary:
      'After Yeoju, the traveler must choose a route identity. Southbound movement points toward Chungju and inland recovery; eastbound movement points toward Wonju, Gangwon, and eventually Gangneung.',
    accommodationNote:
      'Strongest stay-planning angle: one river-and-heritage stay group near Silleuksa, one practical outlet-side service group, and one light overnight pattern for travelers splitting the Seoul departure into two easier pieces.',
    sections: [
      {
        title: 'Why Yeoju is the first junction model',
        body:
          'Yeoju matters because it is not only a place to stop. It is the first place where the route can choose a personality: south toward Chungju and deeper inland travel, or east toward Wonju and the Gangwon-bound line.',
      },
      {
        title: 'Why the past is unusually close to the route',
        body:
          'King Sejong gives Yeoju immediate historical weight, but the story does not end at the royal tomb. Silleuksa, Pasaseong, the Namhan River, and river-linked agriculture make the city feel like a compact chapter of Korean history.',
      },
      {
        title: 'Why the present should stay visible',
        body:
          'Yeoju also has a current face: ceramics, rice branding, Gangcheonseom walks, and Yeoju Premium Outlets. That contrast is useful because it shows regional Korea as living, commercial, and leisurely, not only preserved.',
      },
      {
        title: 'How to use Yeoju without overloading it',
        body:
          'The strongest Yeoju page should not try to make the city carry a full destination burden. It should give travelers one clean historical read, one modern leisure read, and one route decision before they continue.',
      },
      {
        title: 'Why it fixes the Route 1 gap',
        body:
          'Seoul to Chungju can feel too wide if the route jumps straight into recovery logic. Yeoju creates a more humane first beat, then lets Chungju arrive as the stronger overnight and inland reset.',
      },
      {
        title: 'Why it also belongs to Route 2',
        body:
          'Yeoju should not be locked to one route. Its value grows because the same city can introduce Route 2 before Wonju, proving that junction cities need canonical pages and route-context appearances at the same time.',
      },
    ],
    decisions: [
      {
        title: 'Use the heritage-river side',
        bestFor: 'Travelers who want one meaningful cultural stop before committing to Chungju or Wonju.',
        why:
          'Silleuksa, King Sejong, the Namhan River, and nearby civic museums make this the clearest way to let Yeoju feel rooted rather than purely practical.',
      },
      {
        title: 'Use the outlet-service side',
        bestFor: 'Drivers, families, and travelers who need an easy Seoul-side pause with parking, food, and predictable services.',
        why:
          'Yeoju Premium Outlets gives the city a modern stopover function that is legible even to travelers who are not ready for a heavier history chapter.',
      },
      {
        title: 'Keep it as a split point',
        bestFor: 'Route planners deciding between Route 1 southbound depth and Route 2 eastbound opening.',
        why:
          'The page is strongest when it helps the user choose the next leg, not when it treats every visitor as if they should stay the same way.',
      },
    ],
    stayZones: [
      {
        title: 'Stay by Silleuksa and the river',
        areaLabel: 'Namhan River',
        bestFor: 'Slow travelers who want Yeoju to register as history, landscape, and river mood.',
        why:
          'This side makes the city feel specific: temple edge, river paths, ceramic culture, and a calmer evening before the route branches.',
      },
      {
        title: 'Stay or pause near the outlet corridor',
        areaLabel: 'Outlet side',
        bestFor: 'Drivers, family trips, and low-friction Seoul departures.',
        why:
          'The outlet side is practical rather than poetic, but that is exactly why it works as a modern junction stop with services and easy onward movement.',
      },
    ],
    visuals: [
      {
        eyebrow: 'River heritage',
        title: 'Silleuksa makes the Namhan River part of the route',
        image: 'http://tong.visitkorea.or.kr/cms/resource/11/3072711_image2_1.jpg',
        alt: 'Official tourism image of Silleuksa Temple in Yeoju',
        body:
          'Yeoju needs river imagery because the city is not only a road decision. Silleuksa gives the page a calm historical edge before the route splits toward Chungju or Wonju.',
        sourceLabel: 'Korea Tourism Organization data',
        sourceHref: 'https://data.visitkorea.or.kr/resource/128926',
        licenseLabel: 'KTO Open Data',
      },
      {
        eyebrow: 'Modern leisure',
        title: 'The outlet proves Yeoju has a present-tense stopover role',
        image: 'http://tong.visitkorea.or.kr/cms/resource/45/2532845_image2_1.jpg',
        alt: 'Official tourism image of Shinsegae Simon Yeoju Premium Outlets',
        body:
          'The modern side matters because many travelers will first understand Yeoju through easy parking, food, shopping, and family-scale leisure before they discover the deeper local story.',
        sourceLabel: 'Korea Tourism Organization data',
        sourceHref: 'https://data.visitkorea.or.kr/page/690557',
        licenseLabel: 'KTO Open Data',
      },
      {
        eyebrow: 'Route split',
        title: 'Yeoju should visually point in two directions',
        image: 'http://tong.visitkorea.or.kr/cms/resource/10/3072710_image2_1.jpg',
        alt: 'Official tourism image near Silleuksa Temple and the Yeoju riverside',
        body:
          'The third image slot should behave like a route cue: a quieter river scene that gives the traveler a pause before deciding south toward Chungju or east toward Wonju.',
        sourceLabel: 'Korea Tourism Organization data',
        sourceHref: 'https://data.visitkorea.or.kr/resource/128926',
        licenseLabel: 'KTO Open Data',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official source',
        title: 'King Sejong gives Yeoju its deepest historical anchor',
        image: 'http://tong.visitkorea.or.kr/cms/resource/09/3072709_image2_1.jpg',
        alt: 'Official tourism image of Yeoju river heritage near Silleuksa',
        body:
          'Yeoju City describes Yeongneung as the royal tomb of King Sejong and Queen Soheon. This is the historical proof point that keeps the page from becoming only a convenient highway stop.',
        sourceLabel: 'Yeoju City English tourism page',
        sourceHref: 'https://www.yeoju.go.kr/english/contents.do?key=1830',
        licenseLabel: 'Official reference',
        usageNote:
          'Use the source for historical verification; pair it with KTO-sourced imagery unless Yeoju City publishes directly reusable media.',
      },
      {
        eyebrow: 'Official source',
        title: 'Gangcheonseom adds the softer present-day river layer',
        image: 'http://tong.visitkorea.or.kr/cms/resource/03/3072703_image2_1.jpg',
        alt: 'Official tourism image of Yeoju river-side heritage scenery',
        body:
          'Gangcheonseom helps the page show Yeoju as a lived leisure landscape. It keeps the city from reading only as a royal-tomb or shopping stop.',
        sourceLabel: 'Yeoju City English tourism page',
        sourceHref: 'https://www.yeoju.go.kr/english/contents.do?key=1840',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as a content source for the riverside leisure layer and as a future image-request target if the page needs a dedicated island visual.',
      },
      {
        eyebrow: 'Official source',
        title: 'Ceramics give Yeoju a craft identity between past and present',
        image: 'http://tong.visitkorea.or.kr/cms/resource/02/3072702_image2_1.jpg',
        alt: 'Official tourism image of Yeoju cultural scenery near Silleuksa',
        body:
          'The Gyeonggi Museum of Contemporary Ceramic Art source supports Yeoju as a craft city, not just a junction. It should be one of the repeatable slots in the city template.',
        sourceLabel: 'Yeoju City English tourism page',
        sourceHref: 'https://www.yeoju.go.kr/english/contents.do?key=1843',
        licenseLabel: 'Official reference',
        usageNote:
          'Use to brief ceramic and craft content; replace the image with a dedicated ceramic visual when one is ingested.',
      },
      {
        eyebrow: 'Official source',
        title: 'Yeoju Premium Outlets explains the modern stopover function',
        image: 'http://tong.visitkorea.or.kr/cms/resource/44/2532844_image2_1.jpg',
        alt: 'Official tourism image of Yeoju Premium Outlets',
        body:
          'VisitKorea and KTO data identify Yeoju Premium Outlets as Korea’s first premium outlet, which makes it useful as a modern leisure and service anchor after leaving Seoul.',
        sourceLabel: 'Korea Tourism Organization data',
        sourceHref: 'https://data.visitkorea.or.kr/page/690557',
        licenseLabel: 'KTO Open Data',
        usageNote:
          'Use as the contemporary cue in the Yeoju page so the story does not become only historical.',
      },
    ],
    points: [
      {
        id: 'yeongneung-sejong',
        name: 'Royal Tomb of King Sejong',
        kind: 'checkpoint',
        areaLabel: 'Sejongdaewang-myeon',
        coordinates: {
          lat: 37.3048,
          lng: 127.6128,
        },
        summary:
          'The historical anchor that gives Yeoju immediate national weight before the route splits.',
        note:
          'Use this when the traveler needs one clear reason Yeoju is not just a convenient exit after Seoul.',
      },
      {
        id: 'silleuksa-river',
        name: 'Silleuksa and Namhan River side',
        kind: 'recovery',
        areaLabel: 'Silleuksa-gil',
        coordinates: {
          lat: 37.2972,
          lng: 127.6597,
        },
        summary:
          'A river-temple zone where Yeoju slows down and becomes visually memorable.',
        note:
          'Best for the heritage-river version of the page and for travelers who want one grounded stop before continuing.',
      },
      {
        id: 'yeoju-ceramic-world',
        name: 'Gyeonggi Museum of Contemporary Ceramic Art',
        kind: 'checkpoint',
        areaLabel: 'Ceramic World',
        coordinates: {
          lat: 37.296,
          lng: 127.653,
        },
        summary:
          'The craft anchor that connects old regional identity to a present-day museum and design context.',
        note:
          'Useful for making the past-and-present template feel tangible rather than abstract.',
      },
      {
        id: 'yeoju-premium-outlets',
        name: 'Yeoju Premium Outlets',
        kind: 'stay',
        areaLabel: 'Modern service node',
        coordinates: {
          lat: 37.2459,
          lng: 127.6123,
        },
        summary:
          'A contemporary service and leisure anchor that many drivers will understand immediately.',
        note:
          'Treat it as the modern counterweight to Sejong and Silleuksa, not as the whole city story.',
      },
      {
        id: 'yeoju-route-split',
        name: 'Chungju/Wonju split logic',
        kind: 'mobility',
        areaLabel: 'Route junction',
        coordinates: {
          lat: 37.298,
          lng: 127.637,
        },
        summary:
          'The route decision point where the site can explain why junction cities need canonical pages.',
        note:
          'From here, Route 1 should read south toward Chungju and Route 2 should read east toward Wonju.',
      },
    ],
  },
  wonju: {
    slug: 'wonju',
    city: 'Wonju',
    mapTitle: 'Where Wonju turns Route 2 into a real eastbound corridor',
    mapIntro:
      'Wonju is not only a mountain gateway. It is the inland hinge where war memory, former U.S. military presence, modern food production, and Gangwon-bound movement all meet before the coast opens.',
    mapCenter: {
      lat: 37.35,
      lng: 127.94,
    },
    supportSummary:
      'Wonju works best as a hinge city. It gives Route 2 enough city function to split the eastbound move cleanly, enough history to feel weighted, and enough modern industry to prove regional Korea is still producing culture, not only scenery.',
    roleSummary:
      'On Route 2, Wonju is where Seoul loosens its grip. The city gathers the route inland, gives travelers a practical reset, and prepares the next leg toward Gangneung, Daegwallyeong, and the east coast.',
    staySummary:
      'Stay near the station or city core when the goal is easy movement. Move toward Chiaksan or the quieter eastern edge when the stop should feel more restorative before the road or rail line turns toward Gangneung.',
    foodSummary:
      'Wonju food logic should mix local meals with a modern K-food signal. The Samyang Wonju plant makes the city unexpectedly connected to the global Buldak story, while the city core still handles simple meals, coffee, and resupply.',
    nextLegSummary:
      'After Wonju, Route 2 stops feeling like a Seoul-side extension. The next chapter points decisively into Gangwon terrain and then toward Gangneung, where the route changes from inland pressure to sea-facing release.',
    accommodationNote:
      'Strongest stay-planning angle: one station-side practical stay group, one city-core food-and-reset group, and one mountain-edge stay group for travelers who want the coast to open fresh the next day.',
    sections: [
      {
        title: 'Why Wonju has more weight than a gateway label',
        body:
          'Wonju sits on movement. During the Korean War, the area around the city became strategically important, and its later U.S. military presence kept that logistics-and-defense layer visible well into modern Korea. The city feels practical for a reason.',
      },
      {
        title: 'Why Buldak belongs in the Wonju story',
        body:
          'The Samyang Wonju plant gives the city a surprising present-day edge. Wonju is not frozen as a mountain town; it is also part of the industrial food network behind globally recognized Korean products like Buldak Bokkeummyeon.',
      },
      {
        title: 'How Wonju changes Route 2',
        body:
          'Without Wonju, Route 2 risks reading like a fast Seoul-to-Gangneung transfer. With Wonju, the line gains an inland chapter: a place to split timing, understand terrain, and let the coast arrive with more force the next day.',
      },
      {
        title: 'Why the city core matters',
        body:
          'Wonju should not be planned only as a scenic edge. The station, market, cafes, hospitals, universities, and industrial districts explain why the city works as a dependable hinge rather than a purely atmospheric pause.',
      },
      {
        title: 'Why the mountain edge still matters',
        body:
          'Chiaksan and the forested east side keep the stop connected to Gangwon. This is the side of Wonju that lets the traveler feel the route preparing for the harder terrain before Gangneung opens the sea.',
      },
      {
        title: 'How to keep the stop from feeling too functional',
        body:
          'Wonju gets stronger when the page holds both its practical and emotional layers: war memory, military logistics, global food production, mountain air, and a clean next-leg handoff toward the coast.',
      },
    ],
    decisions: [
      {
        title: 'Sleep near the station',
        bestFor: 'Rail users, late arrivals, and travelers who want the cleanest next-morning movement toward Gangneung. ?좉퉸 ?щ뒗 ?먮굦???꾨땲???숈꽑???뺣━?섎뒗 ?좏깮?대떎.',
        why:
          'The station-side stay keeps Route 2 simple. It is the right call when Wonju is mainly a timing hinge, not a full mountain escape.',
      },
      {
        title: 'Use the city core for food and reset',
        bestFor: 'Travelers who want the city to register as real life: meals, market texture, coffee, and practical services before the coast.',
        why:
          'The core shows Wonju as a working regional city. This is where the page can prove that provincial Korea is present tense, not only heritage scenery.',
      },
      {
        title: 'Lean toward Chiaksan',
        bestFor: 'Drivers and slower travelers who want the overnight to feel more like Gangwon before heading east.',
        why:
          'The mountain edge makes the next leg feel prepared. It gives the route a quieter physical transition before Gangneung turns the story coastal.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the station-side overnight',
        areaLabel: 'Wonju Station / Manjong side',
        bestFor: 'Rail users and low-friction Route 2 timing.',
        why:
          'This is the simplest sleep decision when the goal is to split Seoul-to-Gangneung without adding planning weight.',
      },
      {
        title: 'Use the central city grid',
        areaLabel: 'City core',
        bestFor: 'Food, coffee, market texture, and practical services.',
        why:
          'The city core gives Wonju its living present. It is useful when the stop should feel inhabited rather than only logistical.',
      },
      {
        title: 'Move toward the mountain edge',
        areaLabel: 'Chiaksan approach',
        bestFor: 'Drivers, hikers, and slower travelers who want an inland reset.',
        why:
          'This version turns Wonju into a real Gangwon threshold before the route crosses toward the coast.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Mountain hinge',
        title: 'Wonju should feel like the inland breath before the coast',
        image: '/images/destinations/Wonju_Hiker_on_mountain_overlooking_city_1b7177f12b.jpeg',
        alt: 'Hiker overlooking Wonju and surrounding mountains',
        body:
          'The mountain view is not just scenery. It explains why Route 2 needs a hinge before Gangneung: the trip is leaving capital-region rhythm and preparing for Gangwon terrain.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/destinations/Wonju_Hiker_on_mountain_overlooking_city_1b7177f12b.jpeg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Working city',
        title: 'The station and city grid keep Wonju practical',
        image: '/images/destinations/Wonju_Train_station_with_cherry_blossoms_918188e3e2.jpeg',
        alt: 'Wonju station area with cherry blossoms',
        body:
          'Wonju is strongest when it is allowed to be useful. Station-side imagery supports the city as a place where route timing, luggage, meals, and onward movement can all settle.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/destinations/Wonju_Train_station_with_cherry_blossoms_918188e3e2.jpeg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Everyday present',
        title: 'Cafe and street-level images keep the page out of museum mode',
        image: '/images/destinations/Wonju_Friends_relaxing_with_coffee_cafe_bcb924ac4f.jpeg',
        alt: 'Friends relaxing with coffee in Wonju',
        body:
          'The page needs present-day life as much as history. Wonju should feel like a city where people study, work, eat, manufacture, recover, and move onward.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/destinations/Wonju_Friends_relaxing_with_coffee_cafe_bcb924ac4f.jpeg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Spiritual edge',
        title: 'Temples and forest keep the Gangwon threshold visible',
        image: '/images/destinations/Wonju_Hiker_dwarfed_by_stone_pagodas_88c2c81acf.jpeg',
        alt: 'Hiker among stone pagodas in Wonju',
        body:
          'This visual layer balances the industrial and military story. Wonju is also a place where the city edge quickly softens into forest, stone, and mountain quiet.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/destinations/Wonju_Hiker_dwarfed_by_stone_pagodas_88c2c81acf.jpeg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Recovery mood',
        title: 'Water and reflection give the hinge a softer finish',
        image: '/images/destinations/Wonju_Woman_admiring_water_reflection_66e693eb77.jpeg',
        alt: 'Traveler admiring water reflection in Wonju',
        body:
          'Wonju should not read as only logistics. A softer recovery image makes the overnight feel emotionally useful before the route commits to the east coast.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/destinations/Wonju_Woman_admiring_water_reflection_66e693eb77.jpeg',
        licenseLabel: 'Internal',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official company source',
        title: 'Samyang confirms the Wonju plant as a ramen, snack, and sauce production site',
        image: '/images/destinations/Wonju_Friends_relaxing_with_coffee_cafe_bcb924ac4f.jpeg',
        alt: 'Present-day Wonju food and cafe context',
        body:
          'Samyang Foods lists its Wonju Plant as the company first plant, founded in 1989, producing ramen, snacks, and sauces. That source supports the modern K-food layer on this page.',
        sourceLabel: 'Samyang Foods Wonju Plant',
        sourceHref: 'https://www.samyangfoods.com/eng/information/factory/index.do',
        licenseLabel: 'Official reference',
        usageNote:
          'Use this as factual support for the modern food-production story. Do not imply the factory is a tourist attraction unless a public visitor program is confirmed.',
      },
      {
        eyebrow: 'Military history source',
        title: 'U.S. Army documented the return of Camps Eagle and Long in the Wonju area',
        image: '/images/destinations/Wonju_City_park_reflecting_mountain_b858d6d9ba.jpeg',
        alt: 'Wonju city park and mountain context',
        body:
          'The U.S. Army reported plans to close Camps Eagle and Long in the Wonju area and transfer activities to Camp Humphreys, supporting the page military-logistics layer.',
        sourceLabel: 'U.S. Army article',
        sourceHref: 'https://www.army.mil/article/28398/eighth_u_s_army_to_return_camps_eagle_long',
        licenseLabel: 'Official reference',
        usageNote:
          'Use this source for the former U.S. military presence around Wonju, then keep the travel copy focused on place context rather than base tourism.',
      },
      {
        eyebrow: 'Korean War source',
        title: 'U.S. Army University staff ride materials cover the Battles of Wonju',
        image: '/images/destinations/Wonju_Hiker_dipping_hand_in_stream_3a59155cab.jpeg',
        alt: 'Wonju mountain stream and terrain context',
        body:
          'Army University Press materials identify the Battles of Wonju and Chipyong-ni as a staff ride topic for studying combat in complex terrain, supporting the city historical-weight framing.',
        sourceLabel: 'Army University Press',
        sourceHref: 'https://www.armyupress.army.mil/Portals/7/educational-services/staff-rides/1_The_2d_Infantry_Division_at_the_Battles_of_Wonju_and_Chipyong-ni_Fact_Sheet.pdf',
        licenseLabel: 'Official reference',
        usageNote:
          'Use this for concise historical context. Avoid turning the route page into a battlefield guide unless a later dedicated history page is planned.',
      },
    ],
    points: [
      {
        id: 'wonju-station-hinge',
        name: 'Wonju Station hinge',
        kind: 'mobility',
        areaLabel: 'Station side',
        coordinates: {
          lat: 37.3422,
          lng: 127.9202,
        },
        summary:
          'The simplest rail-side anchor for using Wonju as a clean split before Gangneung.',
        note:
          'Best when the stop is about timing, luggage, easy sleep, and an uncomplicated next morning.',
      },
      {
        id: 'wonju-city-core',
        name: 'Central Wonju reset grid',
        kind: 'stay',
        areaLabel: 'City core',
        coordinates: {
          lat: 37.3496,
          lng: 127.9506,
        },
        summary:
          'The practical city center for meals, cafes, hotels, taxis, and the everyday present-tense side of Wonju.',
        note:
          'Use this zone when the city should feel lived-in rather than only scenic or strategic.',
      },
      {
        id: 'samyang-wonju-plant',
        name: 'Samyang Wonju Plant context',
        kind: 'checkpoint',
        areaLabel: 'Usan-dong',
        coordinates: {
          lat: 37.369,
          lng: 127.94,
        },
        summary:
          'A modern industry reference point for connecting Wonju to Korea global food culture.',
        note:
          'This is contextual proof, not a sightseeing recommendation. It helps explain how regional Korea produces things the world recognizes.',
      },
      {
        id: 'camp-long-context',
        name: 'Former Camp Long area context',
        kind: 'checkpoint',
        areaLabel: 'Taejang side',
        coordinates: {
          lat: 37.382,
          lng: 127.956,
        },
        summary:
          'A former U.S. military presence area that supports Wonju military-logistics history.',
        note:
          'Keep this as background context. The route meaning is movement and strategic position, not casual base tourism.',
      },
      {
        id: 'chiaksan-approach',
        name: 'Chiaksan approach',
        kind: 'recovery',
        areaLabel: 'Mountain edge',
        coordinates: {
          lat: 37.365,
          lng: 128.05,
        },
        summary:
          'The mountain-facing side of Wonju where the city starts feeling like Gangwon before the coast.',
        note:
          'Best for travelers who want the overnight to feel restorative instead of purely logistical.',
      },
      {
        id: 'gangneung-handoff-line',
        name: 'Gangneung handoff line',
        kind: 'mobility',
        areaLabel: 'Eastbound exit',
        coordinates: {
          lat: 37.46,
          lng: 128.23,
        },
        summary:
          'The directional handoff where Wonju stops being the destination and starts preparing the coast-opening leg.',
        note:
          'This keeps the page pointed toward Route 2 purpose: Gangneung should arrive fresher because Wonju carried the inland setup.',
      },
    ],
  },
  mungyeong: {
    slug: 'mungyeong',
    city: 'Mungyeong',
    mapTitle: 'Where Mungyeong changes the route from transfer into crossing',
    mapIntro:
      'Mungyeong is not a generic stop map. It is a threshold map for understanding where to stage the pass, where to sleep if the crossing should feel deliberate, and where the route starts acting like real pass country.',
    mapCenter: {
      lat: 36.62,
      lng: 128.19,
    },
    supportSummary:
      'Mungyeong is strongest as a chapter marker. Its value comes from gate logic, pass preparation, and the feeling that the route is moving through terrain with history instead of simply drifting south.',
    roleSummary:
      'On the inland line, Mungyeong is the city that turns geography into editorial meaning. This is where the route visibly crosses a threshold and begins to feel earned.',
    staySummary:
      'Use a stay here when you want to isolate the pass-country chapter, avoid overloading the next day, or give the crossing its own rhythm instead of flattening it into one long transfer.',
    foodSummary:
      'Food is functional here in the best sense: warm meals, simple reset dining, and enough fuel to make the pass feel prepared rather than improvised.',
    nextLegSummary:
      'After Mungyeong, the inland route descends into a more committed southbound logic. The next chapter should feel less like approach and more like continuation.',
    accommodationNote:
      'Strongest stay-planning angle: one town-core practical stay cluster and one pass-adjacent slower stay cluster near the Saejae approach.',
    sections: [
      {
        title: 'Why Mungyeong earns a stop',
        body:
          'Mungyeong matters when the route should feel shaped by the land. It is where the inland line stops being an abstract alternative and becomes an actual crossing with consequence.',
      },
      {
        title: 'Why pass-country should remain visible',
        body:
          'If the city is reduced to one sightseeing note, the route loses its strongest topographic chapter. Keeping the pass visible is what makes Mungyeong distinct from a routine inland pause.',
      },
      {
        title: 'How to use the overnight well',
        body:
          'A night here is most useful when it breaks the route into before-the-pass and after-the-pass logic. That separation helps both drivers and riders keep the terrain meaningful instead of exhausting.',
      },
      {
        title: 'Why the town core and the pass edge are different decisions',
        body:
          'Mungyeong becomes clearer when you stop treating it like one flat city. The town core is the practical sleep choice, while the Saejae edge is for travelers who want the crossing itself to dominate the stay.',
      },
      {
        title: 'Why this city can convert into lodging intent',
        body:
          'Unlike a generic middle stop, Mungyeong can justify a night because sleeping here changes how tomorrow feels. That makes accommodation content more natural than in a purely logistical pause.',
      },
      {
        title: 'Why riders and drivers both keep it',
        body:
          'Cyclists use Mungyeong to isolate the hardest chapter. Drivers use it to preserve terrain meaning instead of flattening the inland route into one long easy descent. The logic differs, but the overnight value is real for both.',
      },
    ],
    decisions: [
      {
        title: 'Stage the pass here',
        bestFor: 'Cyclists, inland self-drives, and travelers who want the crossing to feel intentional.',
        why:
          'Mungyeong is the right place to formalize the transition. It makes the route easier to read and gives the pass its own chapter.',
      },
      {
        title: 'Keep it brief but specific',
        bestFor: 'Travelers who do not want a long stay but still want the route to feel shaped by geography.',
        why:
          'Even a short checkpoint or meal stop works here if it preserves the sense of threshold instead of erasing it.',
      },
      {
        title: 'Sleep before the harder leg',
        bestFor: 'Anyone whose next day should begin sharper, lighter, and with clearer terrain logic.',
        why:
          'An overnight in pass country can reduce decision fatigue and keep the southbound line from becoming one blurred transfer.',
      },
    ],
    stayZones: [
      {
        title: 'Stay in town for control',
        areaLabel: 'Mungyeong town core',
        bestFor: 'Travelers who want the easiest dinner-sleep-depart sequence.',
        why:
          'The city core is the practical choice when the stop is about pacing and route management more than immersion in the pass itself.',
      },
      {
        title: 'Stay near the Saejae approach',
        areaLabel: 'Pass edge',
        bestFor: 'Cyclists and inland-route travelers who want the crossing chapter to define the night.',
        why:
          'Sleeping closer to the pass makes the route feel authored and keeps the next morning aligned with the terrain logic that brought you here.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Threshold image',
        title: 'The gate is the reason Mungyeong does not feel interchangeable',
        image: '/images/routes/route-1/mungyeong/support-1-generated-v1.png',
        alt: 'Generated editorial gateway image for Mungyeong Saejae',
        body:
          'Mungyeong becomes memorable when the route visibly passes through something. The gate image matters because it turns abstract inland travel into a concrete threshold.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/mungyeong/support-1-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Pass-country atmosphere',
        title: 'The open film-set edge makes the crossing feel spatial, not symbolic only',
        image: '/images/routes/route-1/mungyeong/support-2-generated-v1.png',
        alt: 'Generated editorial pass-country image for Mungyeong',
        body:
          'The city works best when the pass has visual breadth. This is what helps the overnight feel like a chapter in the land rather than a random place to stop the car.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/mungyeong/support-2-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Slow-route detail',
        title: 'Small civic details help the crossing feel inhabited',
        image: '/images/routes/route-1/mungyeong/support-3-generated-v1.png',
        alt: 'Generated editorial civic-detail image for Mungyeong',
        body:
          'Not every useful image has to be monumental. Smaller details keep Mungyeong from reading like a scenic backdrop and make it feel like a place where a route can actually pause.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/mungyeong/support-3-generated-v1.png',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'mungyeong-saejae-gate',
        name: 'Mungyeong Saejae gateway zone',
        kind: 'checkpoint',
        areaLabel: 'Pass entry',
        coordinates: { lat: 36.6712, lng: 128.0767 },
        summary:
          'The symbolic and geographic point where the route stops being background movement and becomes a crossing with shape.',
        note:
          'Use this when the page needs one clear image of why Mungyeong belongs on the inland line at all.',
      },
      {
        id: 'mungyeong-town-stay',
        name: 'Town stay grid',
        kind: 'stay',
        areaLabel: 'City core',
        coordinates: { lat: 36.5866, lng: 128.1868 },
        summary:
          'The easiest overnight base for a practical stay that keeps access, dinner, and the next morning simple.',
        note:
          'Best when the stop is more about pacing than about building a resort-style recovery chapter.',
      },
      {
        id: 'mungyeong-saejae-stay',
        name: 'Saejae-edge stay zone',
        kind: 'stay',
        areaLabel: 'Pass-adjacent',
        coordinates: { lat: 36.6736, lng: 128.0802 },
        summary:
          'A slower stay logic near the pass for travelers who want the threshold itself to define the overnight.',
        note:
          'This is stronger for authored inland travel than for purely practical late arrivals.',
      },
      {
        id: 'mungyeong-pass-meal',
        name: 'Pass-country meal zone',
        kind: 'food',
        areaLabel: 'Near pass approach',
        coordinates: { lat: 36.6592, lng: 128.1114 },
        summary:
          'A functional eating zone for warming up, fueling up, and resetting before or after the crossing.',
        note:
          'Treat this as route fuel, not as a city where destination dining has to carry the narrative.',
      },
      {
        id: 'mungyeong-reset-cafe',
        name: 'Before-the-pass reset zone',
        kind: 'recovery',
        areaLabel: 'Saejae lead-in',
        coordinates: { lat: 36.6669, lng: 128.0898 },
        summary:
          'A lighter reset point for reorganizing the route before or after the threshold instead of turning every stop into a full meal or full stay.',
        note:
          'Useful when the route needs a psychological break even more than a long physical recovery.',
      },
      {
        id: 'mungyeong-southbound-line',
        name: 'Southbound handoff line',
        kind: 'mobility',
        areaLabel: 'Toward Andong side',
        coordinates: { lat: 36.5608, lng: 128.2877 },
        summary:
          'A directional point that makes the route feel committed after the threshold has been crossed.',
        note:
          'Good for explaining how the route changes after Mungyeong instead of ending with the city itself.',
      },
    ],
  },
  andong: {
    slug: 'andong',
    city: 'Andong',
    mapTitle: 'Where Andong gives the inland route cultural gravity',
    mapIntro:
      'This is a support map for reading Andong as a meaningful inland stay. It should help decide where cultural depth, river mood, and overnight value actually concentrate.',
    mapCenter: {
      lat: 36.57,
      lng: 128.72,
    },
    supportSummary:
      'Andong is one of the clearest places where an inland route stops being a clever alternative and becomes a real travel chapter. It rewards the traveler who wants the route to gain historical and regional weight.',
    roleSummary:
      'Andong works as the inland cultural anchor. It gives the route memory, ritual, food identity, and the feeling that southbound movement has acquired meaning beyond logistics.',
    staySummary:
      'A stay here works best when the route should deepen, not merely pause. The city can justify an overnight because its value is cumulative rather than transactional.',
    foodSummary:
      'Food is part of the reason to keep Andong. Dinner here should not feel like routine route maintenance; it should make the inland line taste different from the corridors around it.',
    nextLegSummary:
      'After Andong, the route can either continue south with more confidence or bend toward the southeast with a stronger sense of having passed through inland Korea properly.',
    accommodationNote:
      'Strongest stay-planning angle: one city-core practical stay group and one slower heritage-leaning stay group tied to the Hahoe-side cultural logic.',
    sections: [
      {
        title: 'Why Andong is more than a stopover',
        body:
          'Many inland cities help with pacing. Andong does more than that. It gives the route a center of gravity and helps the whole Seoul-to-Busan sequence feel culturally authored.',
      },
      {
        title: 'Why the stay matters',
        body:
          'Andong becomes strongest when it is allowed to be a night rather than a glance. A little time here changes how the inland route is remembered afterward.',
      },
      {
        title: 'What Andong does to the route',
        body:
          'After Andong, the traveler is no longer just passing through interior Korea. The route has already acquired depth, so the southern continuation lands with more texture.',
      },
      {
        title: 'Why the city core and the heritage side are different stays',
        body:
          'Andong becomes easier to use when you separate the practical overnight from the slower cultural overnight. The city core helps with friction, while the Hahoe-facing side helps the route feel more authored.',
      },
      {
        title: 'Why this city supports accommodation links naturally',
        body:
          'Andong is not a forced overnight. It already carries enough dinner, culture, and emotional weight to justify stay intent, which makes lodging blocks feel earned instead of bolted on.',
      },
      {
        title: 'Why food matters here more than in a generic inland pause',
        body:
          'Some cities on the route are about recovery or tempo only. Andong is different because food helps explain why the stop belongs to the route at all, not just how to survive it.',
      },
    ],
    decisions: [
      {
        title: 'Keep Andong as the cultural overnight',
        bestFor: 'Travelers who want the inland route to feel distinct, thoughtful, and regionally grounded.',
        why:
          'Andong is the city most capable of turning an inland sequence into a memorable chapter rather than a slower alternative.',
      },
      {
        title: 'Use the river edge to slow down',
        bestFor: 'Travelers who need a quieter, less urban read of the city before continuing south.',
        why:
          'The river spaces help Andong feel spatially open and emotionally slower than its cultural reputation alone suggests.',
      },
      {
        title: 'Let dinner carry the stop',
        bestFor: 'Route travelers who want one meal on the inland line to feel identity-rich instead of purely functional.',
        why:
          'Andong is one of the better places on this corridor to connect food directly to why the stop matters.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the central stay grid',
        areaLabel: 'City core',
        bestFor: 'Travelers who want the easiest dinner-sleep-depart sequence without losing Andong?셲 cultural value.',
        why:
          'The city core is the most practical overnight and works well when the route needs one deep stop without adding too much lodging friction.',
      },
      {
        title: 'Lean toward the heritage side',
        areaLabel: 'Hahoe-facing cultural zone',
        bestFor: 'Travelers who want the stop itself to feel slower, more atmospheric, and more memory-rich.',
        why:
          'This choice works when Andong should feel like a chapter of the route, not just a place to sleep before moving southeast.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Cultural anchor',
        title: 'Andong should feel like the route has gained weight',
        image: '/images/routes/route-1/andong/support-1-generated-v1.png',
        alt: 'Editorial route image for Andong cultural anchor',
        body:
          'The point of Andong is not speed. It is the moment the inland route stops feeling improvised and begins to feel like a deliberate chapter in Korea.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/andong/support-1-generated-v1.png',
        licenseLabel: 'Project asset',
      },
      {
        eyebrow: 'Stay logic',
        title: 'The overnight matters because the city accumulates value slowly',
        image: '/images/routes/route-1/andong/support-2-generated-v1.png',
        alt: 'Editorial route image for Andong overnight mood',
        body:
          'Andong is strongest when you let the stay breathe. Its value does not land all at once like a viewpoint city; it builds through evening, dinner, and a slower next morning.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/andong/support-2-generated-v1.png',
        licenseLabel: 'Project asset',
      },
      {
        eyebrow: 'Food identity',
        title: 'Dinner should be part of the route logic here',
        image: '/images/routes/route-1/andong/support-3-generated-v1.png',
        alt: 'Editorial route image for Andong food identity',
        body:
          'Andong is one of the inland cities where a meal can justify the stop instead of merely servicing it. That is why the food layer deserves dedicated commercial space later.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/andong/support-3-generated-v1.png',
        licenseLabel: 'Project asset',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'UNESCO reference',
        title: 'Hahoe is part of Korea’s representative historic clan-village heritage',
        image: '/images/routes/route-1/andong/support-1-generated-v1.png',
        alt: 'Editorial image for Andong Hahoe cultural context',
        body:
          'UNESCO describes Hahoe and Yangdong as representative historic clan villages shaped by early Joseon aristocratic Confucian culture, river-facing landscapes, study halls, academies, and family residences.',
        sourceLabel: 'UNESCO World Heritage Centre',
        sourceHref: 'https://whc.unesco.org/en/list/1324/',
        licenseLabel: 'Official reference',
        usageNote:
          'Use this source to support the heritage weight of Andong, while keeping the page focused on route meaning rather than encyclopedic history.',
      },
      {
        eyebrow: 'UNESCO reference',
        title: 'Dosan and Byeongsan sit inside Korea’s seowon tradition',
        image: '/images/routes/route-1/andong/support-2-generated-v1.png',
        alt: 'Editorial image for Andong seowon and overnight mood',
        body:
          'UNESCO frames Korean seowon as Neo-Confucian academies where learning, veneration, and landscape interaction shaped the design. That supports Andong as more than a scenic stop.',
        sourceLabel: 'UNESCO Seowon listing',
        sourceHref: 'https://whc.unesco.org/en/list/1498/',
        licenseLabel: 'Official reference',
        usageNote:
          'Use this for the scholar-culture layer. Keep the copy concise so the travel page stays readable.',
      },
      {
        eyebrow: 'Food identity',
        title: 'Andong jjimdak keeps the city present-tense',
        image: '/images/routes/route-1/andong/support-3-generated-v1.png',
        alt: 'Editorial image for Andong food identity',
        body:
          'Andong’s food identity gives the page a modern entry point. Dinner is not filler here; it is one of the clearest ways the city’s regional character becomes immediate for travelers.',
        sourceLabel: 'Andong jjimdak background',
        sourceHref: 'https://en.wikipedia.org/wiki/Andong_jjimdak',
        licenseLabel: 'Reference',
        usageNote:
          'Replace with a stronger official food-tourism source later if one is selected. For now, keep the claim broad and non-technical.',
      },
    ],
    points: [
      {
        id: 'andong-hahoe-side',
        name: 'Hahoe side cultural zone',
        kind: 'checkpoint',
        areaLabel: 'Cultural anchor',
        coordinates: { lat: 36.5397, lng: 128.5185 },
        summary:
          'The strongest zone for understanding why Andong carries historical and symbolic value on the route.',
        note:
          'Use this area when the page should speak to cultural gravity rather than only urban convenience.',
      },
      {
        id: 'andong-city-stay',
        name: 'Central stay grid',
        kind: 'stay',
        areaLabel: 'City core',
        coordinates: { lat: 36.5684, lng: 128.7294 },
        summary:
          'A practical lodging zone that keeps dinner, transit, and the next morning easy without losing access to the city?셲 identity.',
        note:
          'Best when you want a real overnight with lower friction than a fully dispersed heritage stay.',
      },
      {
        id: 'andong-heritage-stay',
        name: 'Heritage-side stay zone',
        kind: 'stay',
        areaLabel: 'Hahoe-facing side',
        coordinates: { lat: 36.5446, lng: 128.5452 },
        summary:
          'A slower stay logic for travelers who want Andong to land as a cultural chapter, not just a convenient inland bed.',
        note:
          'This is best when the route can afford a little more softness and atmosphere in exchange for less frictionless logistics.',
      },
      {
        id: 'andong-river-edge',
        name: 'River slowdown edge',
        kind: 'recovery',
        areaLabel: 'Nakdong edge',
        coordinates: { lat: 36.5626, lng: 128.7414 },
        summary:
          'A calmer part of the city where the inland route can breathe and reset without becoming sleepy or empty.',
        note:
          'Useful for explaining the softer side of Andong beyond its cultural label.',
      },
      {
        id: 'andong-food-line',
        name: 'Dinner identity line',
        kind: 'food',
        areaLabel: 'Meal corridor',
        coordinates: { lat: 36.5658, lng: 128.7318 },
        summary:
          'The part of the stay where Andong stops being abstract and becomes memorable through dinner and regional flavor.',
        note:
          'Treat this as one of the better food-led justifications for keeping an inland stop.',
      },
      {
        id: 'andong-southbound-handoff',
        name: 'Southeast handoff line',
        kind: 'mobility',
        areaLabel: 'Toward Gyeongju or Daegu',
        coordinates: { lat: 36.4933, lng: 128.7912 },
        summary:
          'A directional point for the route?셲 next chapter once the inland cultural stop is complete.',
        note:
          'This helps the page end with continuation instead of closing in place.',
      },
    ],
  },
  yeongdeok: {
    slug: 'yeongdeok',
    city: 'Yeongdeok',
    mapTitle: 'Where Yeongdeok gives the coast route local flavor',
    mapIntro:
      'Yeongdeok should be read as a smaller coastal support town. The map matters because it shows where food, port mood, and a useful overnight gather before the route hands off toward Pohang.',
    mapCenter: {
      lat: 36.41,
      lng: 129.37,
    },
    supportSummary:
      'Yeongdeok is strongest when the coast route needs specificity. It adds seafood identity and smaller-port texture before bigger southeastern cities flatten the shoreline into a generic final approach.',
    roleSummary:
      'On the east coast line, Yeongdeok is the flavor anchor. It is the stop that makes the route taste and feel local instead of scenic-only.',
    staySummary:
      'A stay here works best when you want one smaller coastal chapter before Pohang or Busan take over the route with bigger-city logic.',
    foodSummary:
      'Food is central to why Yeongdeok matters. Seafood identity is not a side benefit here; it is one of the clearest reasons to keep the stop.',
    nextLegSummary:
      'After Yeongdeok, the coast starts bending toward a more controlled southeastern finish. The mood becomes less open-ended and more like a handoff.',
    accommodationNote:
      'Strongest stay-planning angle: one compact port-side stay group and one quieter coast-road stay group for travelers who want flavor without a big-city handoff yet.',
    sections: [
      {
        title: 'Why Yeongdeok earns time',
        body:
          'Yeongdeok matters when the coast should have a food-and-port chapter instead of only a sequence of viewpoints. It is where the route becomes more regionally specific.',
      },
      {
        title: 'Why a smaller town can still matter',
        body:
          'The value here is not size. It is clarity. Yeongdeok gives the coast a distinct identity before larger cities start dominating the route logic.',
      },
      {
        title: 'How to use the stop well',
        body:
          'Keep it for a seafood meal, a compact overnight, or one last lower-scale coastal pause before the route turns toward stronger infrastructure further south.',
      },
      {
        title: 'Why Yeongdeok can convert into stay intent',
        body:
          'Yeongdeok is a small town, but it is not a weak overnight. The point is that a compact port stay here changes how the rest of the coast feels before Pohang starts taking over with bigger-city logic.',
      },
      {
        title: 'Why the seafood line matters commercially',
        body:
          'This is one of the places where food is not just support. It is one of the route?셲 arguments for stopping, which means restaurant and stay intent can sit together naturally on the page.',
      },
      {
        title: 'Why the town should stay small in the editorial frame',
        body:
          'If Yeongdeok is written like a second-tier city guide, it loses its value. It works best as a smaller fishing-port chapter with sharper flavor and lower scale than the places south of it.',
      },
    ],
    decisions: [
      {
        title: 'Keep Yeongdeok for seafood identity',
        bestFor: 'Travelers who want the coast route to feel edible, local, and regionally grounded.',
        why:
          'This is one of the clearest places where food is part of the route logic rather than an incidental convenience.',
      },
      {
        title: 'Use it as the smaller-port overnight',
        bestFor: 'Coast travelers who want one lighter chapter before the route scales up again.',
        why:
          'Yeongdeok works well when the route should include one town that still feels intimate before larger hubs take over.',
      },
      {
        title: 'Stop briefly, but intentionally',
        bestFor: 'Travelers who cannot spare a full night but still want the coast to gain local flavor.',
        why:
          'A short meal-and-air stop can still preserve Yeongdeok?셲 value if the route acknowledges why the town matters.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the compact port-side stay',
        areaLabel: 'Port edge',
        bestFor: 'Travelers who want a low-friction night with direct access to the seafood identity of the stop.',
        why:
          'This is the cleanest sleep decision when Yeongdeok should remain small, edible, and close to the waterfront mood that justifies it.',
      },
      {
        title: 'Use the quieter coast-road stay',
        areaLabel: 'Coast road edge',
        bestFor: 'Travelers who want a softer shoreline night before the route firms up toward Pohang.',
        why:
          'This choice preserves the air and slower rhythm of the coast while still keeping the final southbound push manageable.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Flavor image',
        title: 'Yeongdeok earns space when the route should taste local',
        image: '/images/routes/route-1/yeongdeok/support-1-generated-v1.png',
        alt: 'Generated editorial flavor image for Yeongdeok',
        body:
          'This stop matters because the coast should sometimes become edible, not just scenic. Crab identity is one of the clearest reasons Yeongdeok belongs on the route at all.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/yeongdeok/support-1-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Smaller-town mood',
        title: 'The route gets lighter here before it gets heavier again',
        image: '/images/routes/route-1/yeongdeok/support-2-generated-v1.png',
        alt: 'Generated editorial small-town coastal image for Yeongdeok',
        body:
          'Yeongdeok is useful precisely because it does not feel like a large hinge city yet. It gives the coast one smaller-scale chapter before the south tightens up.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/yeongdeok/support-2-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Coast-road atmosphere',
        title: 'A quiet road can justify a night as much as a major landmark can',
        image: '/images/routes/route-1/yeongdeok/support-3-generated-v1.png',
        alt: 'Generated editorial coast-road image for Yeongdeok',
        body:
          'The editorial value of Yeongdeok is not spectacle. It is the sensation of remaining on the coast long enough for the route to gain one more local chapter before the final hinge.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/yeongdeok/support-3-generated-v1.png',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'yeongdeok-port-zone',
        name: 'Port flavor zone',
        kind: 'checkpoint',
        areaLabel: 'Fishing-port edge',
        coordinates: { lat: 36.4119, lng: 129.3762 },
        summary:
          'The best area for understanding why Yeongdeok belongs to the route through port atmosphere and local scale.',
        note:
          'This is where the town feels most clearly unlike a generic coastal pass-through.',
      },
      {
        id: 'yeongdeok-stay-strip',
        name: 'Compact stay strip',
        kind: 'stay',
        areaLabel: 'Near coast road',
        coordinates: { lat: 36.4047, lng: 129.3778 },
        summary:
          'A practical overnight area for a low-friction coast stay that does not overcomplicate the final southbound push.',
        note:
          'Best when the stop should stay simple but still hold one genuine coastal chapter.',
      },
      {
        id: 'yeongdeok-coast-stay',
        name: 'Quiet coast-road stay zone',
        kind: 'stay',
        areaLabel: 'Coast road',
        coordinates: { lat: 36.4304, lng: 129.4032 },
        summary:
          'A softer overnight option for travelers who want sea air and one more low-scale coast chapter before larger cities take over.',
        note:
          'This works best when the point is atmosphere first and pure efficiency second.',
      },
      {
        id: 'yeongdeok-seafood-line',
        name: 'Seafood decision line',
        kind: 'food',
        areaLabel: 'Meal corridor',
        coordinates: { lat: 36.4132, lng: 129.3785 },
        summary:
          'The stretch where the town most clearly converts into dinner intent and regional flavor.',
        note:
          'This is the strongest commercial logic in Yeongdeok and should later connect naturally to food or stay blocks.',
      },
      {
        id: 'yeongdeok-pohang-handoff',
        name: 'Pohang handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound coast',
        coordinates: { lat: 36.3198, lng: 129.3911 },
        summary:
          'A directional point for the route?셲 move from flavor-heavy coast to late-route hinge city.',
        note:
          'Useful when closing the page with continuation instead of ending inside the town.',
      },
    ],
  },
  pohang: {
    slug: 'pohang',
    city: 'Pohang',
    mapTitle: 'Where Pohang turns the long coast into a controlled finish',
    mapIntro:
      'Pohang is a hinge map. It matters because the coast route needs one final city that can absorb fatigue, restore control, and hand the trip cleanly toward Busan.',
    mapCenter: {
      lat: 36.02,
      lng: 129.36,
    },
    supportSummary:
      'Pohang is the late-route hinge. It works because it is large enough to support the traveler, but still coastal enough that the route does not feel like it has ended too early.',
    roleSummary:
      'On the east coast line, Pohang is where wandering becomes arrival strategy. It gives the final stretch shape, control, and one last meaningful stop before Busan.',
    staySummary:
      'A stay here is practical in a high-value way. It can keep the final day shorter, calmer, and more precise instead of sending the traveler into Busan already spent.',
    foodSummary:
      'Food here works as both reset and reward. It is a stronger service-and-meal city than the smaller coastal towns just north of it.',
    nextLegSummary:
      'After Pohang, the route no longer needs another big identity shift. The logic is to finish well, not to keep opening new chapters.',
    accommodationNote:
      'Strongest stay-planning angle: one practical central-stay group and one sea-facing reset group for travelers who want Busan to start fresh the next day.',
    sections: [
      {
        title: 'Why Pohang matters late',
        body:
          'Pohang is not only another coastal city. It is the place where the long eastbound route can reorganize itself before the final Busan landing.',
      },
      {
        title: 'Why the hinge is valuable',
        body:
          'Without a hinge city, the coast can end too abruptly. Pohang smooths that transition and gives the route one last service-rich, sea-facing chapter.',
      },
      {
        title: 'How to use the overnight',
        body:
          'The best Pohang stay is one that protects the next day. That can mean better dinner, better sleep, easier departure, and less emotional drag entering Busan.',
      },
      {
        title: 'Why Pohang can hold stronger accommodation intent',
        body:
          'Unlike the smaller coastal towns before it, Pohang has enough scale to justify a more deliberate stay choice. That makes hotel linking feel practical rather than opportunistic.',
      },
      {
        title: 'Why the city should not erase the sea',
        body:
          'Pohang works best when it still feels sea-facing. If the page only sells city convenience, it loses the hinge quality that makes it meaningful before Busan.',
      },
      {
        title: 'Why this stop improves the final day',
        body:
          'A good Pohang overnight does not just rest the traveler. It shortens the emotional distance to Busan and helps the final arrival feel chosen rather than endured.',
      },
    ],
    decisions: [
      {
        title: 'Use Pohang as the final overnight',
        bestFor: 'Travelers who want to enter Busan with control instead of fatigue.',
        why:
          'Pohang lets the east coast route end with intention, not with a long sloppy final descent into the metro finish.',
      },
      {
        title: 'Keep it as a reset city',
        bestFor: 'Cyclists and drivers who need stronger services after many smaller coast chapters.',
        why:
          'The city has enough scale to actually restore options, not just preserve the mood.',
      },
      {
        title: 'Let the coast finish here emotionally',
        bestFor: 'Travelers who want Busan to feel like a new chapter instead of just the continuation of the same shoreline day.',
        why:
          'Pohang is a useful place to close one route chapter before opening the final destination chapter.',
      },
    ],
    stayZones: [
      {
        title: 'Use the practical central stay',
        areaLabel: 'Central stay zone',
        bestFor: 'Travelers who want the cleanest final-night logistics before Busan.',
        why:
          'This is the most useful option when the route needs a real reset with stronger services, easier dinner, and a cleaner departure.',
      },
      {
        title: 'Keep the sea-facing reset',
        areaLabel: 'Bay-side edge',
        bestFor: 'Travelers who still want the coast to be emotionally present even during the final reset.',
        why:
          'This preserves the route?셲 shoreline identity while still giving the stop more urban control than the smaller towns to the north.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Hinge image',
        title: 'Homigot is where the coast still feels open even as the route tightens',
        image: '/images/routes/route-1/pohang/support-1-generated-v1.png',
        alt: 'Generated editorial hinge image for Pohang',
        body:
          'Pohang works because it is not a pure inland service city. The sea is still visible, which helps the route close one coastal chapter before Busan begins another.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/pohang/support-1-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Late-route reset',
        title: 'A beach-facing city can still function like a practical handoff',
        image: '/images/routes/route-1/pohang/support-2-generated-v1.png',
        alt: 'Generated editorial late-route reset image for Pohang',
        body:
          'Pohang?셲 advantage is that it can restore control without killing the coastal mood. That combination is what makes it such a useful final overnight candidate.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/pohang/support-2-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Arrival strategy',
        title: 'The final southbound day should start cleaner than it ends',
        image: '/images/routes/route-1/pohang/support-3-generated-v1.png',
        alt: 'Generated editorial arrival-strategy image for Pohang',
        body:
          'Pohang becomes valuable when it protects the final approach. The point is not one more stop for its own sake, but a better launch into Busan.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/pohang/support-3-generated-v1.png',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'pohang-yeongil-zone',
        name: 'Yeongil Bay edge',
        kind: 'checkpoint',
        areaLabel: 'Sea-facing hinge',
        coordinates: { lat: 36.0542, lng: 129.3786 },
        summary:
          'A useful orientation point for understanding why Pohang still feels coastal even while functioning like a larger service city.',
        note:
          'Good for preserving sea-facing mood inside a city that also has practical late-route utility.',
      },
      {
        id: 'pohang-stay-grid',
        name: 'Practical stay grid',
        kind: 'stay',
        areaLabel: 'Central stay zone',
        coordinates: { lat: 36.0338, lng: 129.3655 },
        summary:
          'The best low-friction overnight area for a late-route stop with better city services than the smaller coast towns to the north.',
        note:
          'Use this when the next day matters and the point is to arrive in Busan cleaner.',
      },
      {
        id: 'pohang-bay-stay',
        name: 'Sea-facing stay edge',
        kind: 'stay',
        areaLabel: 'Bay-side reset',
        coordinates: { lat: 36.0487, lng: 129.3761 },
        summary:
          'A softer stay choice for travelers who want one last coastal night before the route turns decisively toward Busan.',
        note:
          'This is strongest when maintaining mood matters almost as much as pure convenience.',
      },
      {
        id: 'pohang-meal-zone',
        name: 'Late-route meal zone',
        kind: 'food',
        areaLabel: 'Dinner corridor',
        coordinates: { lat: 36.0313, lng: 129.3694 },
        summary:
          'A stronger dinner and resupply line for turning the last coast chapter into an actual reset, not just a stop for convenience.',
        note:
          'This is where commercial linking for stays and meals can later become especially useful.',
      },
      {
        id: 'pohang-busan-handoff',
        name: 'Busan finish handoff',
        kind: 'mobility',
        areaLabel: 'Final southern leg',
        coordinates: { lat: 35.9341, lng: 129.4074 },
        summary:
          'A directional point that frames Pohang as the end of the coast chapter and the beginning of the Busan finish.',
        note:
          'Useful for helping the page conclude with next-leg logic rather than a static city summary.',
      },
    ],
  },
  sangju: {
    slug: 'sangju',
    city: 'Sangju',
    mapTitle: 'Where Sangju turns the inland crossing into a river corridor',
    mapIntro:
      'Sangju is not a spectacle stop. It is a support map for understanding where the Saejae effort settles, where the Nakdong rhythm becomes obvious, and where a practical overnight can keep the southbound line clean.',
    mapCenter: {
      lat: 36.41,
      lng: 128.16,
    },
    supportSummary:
      'Sangju works as the route-convergence city. It is where mountain-pass logic relaxes, the Nakdong corridor becomes legible, and the next phase of the ride or drive can feel continuous instead of broken.',
    roleSummary:
      'On the inland route, Sangju is the hinge between threshold and corridor. It gives the trip continuity after Mungyeong and prepares it for the longer southbound flow toward Daegu and beyond.',
    staySummary:
      'A stay here is useful when you want to separate pass effort from corridor mileage. It is not the most romantic stop, but it is one of the clearest pacing stops on the inland line.',
    foodSummary:
      'Food in Sangju is practical in a high-value way: refuel, reset, and keep the route moving without asking the city to perform like a destination-first chapter.',
    nextLegSummary:
      'After Sangju, the route should feel more settled. The next chapter becomes less about crossing a threshold and more about carrying a rhythm south with confidence.',
    accommodationNote:
      'Strongest stay-planning angle: one low-friction city-core stay group and one riverside corridor stay group for travelers who want to wake up already aligned with the next southbound leg.',
    sections: [
      {
        title: 'Why Sangju earns a night',
        body:
          'Sangju earns a night when the route needs continuity more than drama. It helps the traveler absorb the pass-country effort and begin the Nakdong chapter with less fragmentation.',
      },
      {
        title: 'Why this stop matters after Mungyeong',
        body:
          'If Mungyeong is the threshold, Sangju is the first city that makes the route feel sustainably connected afterward. It keeps the trip from falling back into a loose collection of segments.',
      },
      {
        title: 'Why this city is useful for cyclists',
        body:
          'For riders, Sangju is where the route starts behaving like a corridor. That means a night here can help reset the body while also clarifying the mental map of the days ahead.',
      },
      {
        title: 'Why a practical city can still be valuable editorially',
        body:
          'Sangju does not need to compete with cultural anchors or port cities. Its value is structural: it helps the route flow better, which is exactly why it can still support stay intent.',
      },
      {
        title: 'Why accommodation links make sense here',
        body:
          'A city does not need romance to justify an overnight. Sangju can support stay links because a bed here improves the next leg and reduces the feeling of one overlong inland push.',
      },
      {
        title: 'Why the river logic should stay visible',
        body:
          'The city gets stronger when it is framed through the Nakdong corridor. That keeps it from feeling like a random refuel stop and turns it into a meaningful handoff in the journey.',
      },
    ],
    decisions: [
      {
        title: 'Use Sangju as the corridor reset',
        bestFor: 'Cyclists and inland-route travelers who want the post-pass chapter to feel organized.',
        why:
          'Sangju is one of the clearest places to let the route settle after Mungyeong and before the longer southbound continuation.',
      },
      {
        title: 'Keep the stop practical, not theatrical',
        bestFor: 'Travelers who value sleep, fuel, and route continuity more than a heavy sightseeing chapter here.',
        why:
          'The city becomes strongest when it is allowed to do what it is good at: stabilizing the route without overpromising destination drama.',
      },
      {
        title: 'Sleep before the longer river run',
        bestFor: 'Anyone who wants the Daegu-side continuation to begin sharper and with less leftover fatigue from the threshold chapter.',
        why:
          'A night here separates mountain effort from corridor mileage and keeps the next day more even.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the central stay grid',
        areaLabel: 'City core',
        bestFor: 'Travelers who want the easiest dinner-sleep-depart sequence with minimal route friction.',
        why:
          'This is the most efficient overnight when the point is to reset well and keep the next morning mechanically easy.',
      },
      {
        title: 'Lean toward the riverside corridor',
        areaLabel: 'Nakdong-side edge',
        bestFor: 'Cyclists and slow-route travelers who want the next leg to begin already aligned with the river logic.',
        why:
          'This choice keeps the corridor visible and makes the overnight feel like part of the route instead of outside it.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Corridor image',
        title: 'The river is what makes Sangju legible',
        image: '/images/routes/route-1/sangju/support-1-generated-v1.png',
        alt: 'Generated editorial corridor image for Sangju',
        body:
          'Sangju gets stronger when the route is read through the Nakdong corridor. The visual argument is not urban spectacle, but the long continuity of the river chapter that starts to dominate here.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/sangju/support-1-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Route continuity',
        title: 'Sangju matters because the route stops feeling fragmented',
        image: '/images/routes/route-1/sangju/support-2-generated-v1.png',
        alt: 'Generated editorial route-continuity image for Sangju',
        body:
          'The city does not need a monumental image to justify itself. Its value is in the way the corridor begins to feel long, stable, and southbound from here.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/sangju/support-2-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Pacing logic',
        title: 'A useful city can be worth more than a dramatic one',
        image: '/images/routes/route-1/sangju/support-3-generated-v1.png',
        alt: 'Generated editorial pacing image for Sangju',
        body:
          'Sangju earns its space because it helps tomorrow work better. That kind of practical value is exactly what makes it commercially and editorially useful on a route-first site.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/sangju/support-3-generated-v1.png',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'sangju-corridor-checkpoint',
        name: 'Nakdong corridor checkpoint',
        kind: 'checkpoint',
        areaLabel: 'River logic entry',
        coordinates: { lat: 36.4109, lng: 128.1591 },
        summary:
          'The point where the city starts reading as part of a longer corridor instead of a post-pass leftover stop.',
        note:
          'Use this area to explain why the route?셲 identity changes after Mungyeong and settles into a clearer southern line.',
      },
      {
        id: 'sangju-city-stay',
        name: 'Central stay grid',
        kind: 'stay',
        areaLabel: 'City core',
        coordinates: { lat: 36.4151, lng: 128.1608 },
        summary:
          'A practical overnight area for riders and inland travelers who want a low-drama but high-value reset before continuing south.',
        note:
          'This is strongest when the stop is about pacing and route continuity rather than destination atmosphere.',
      },
      {
        id: 'sangju-riverside-stay',
        name: 'Riverside corridor stay zone',
        kind: 'stay',
        areaLabel: 'Nakdong-side edge',
        coordinates: { lat: 36.4283, lng: 128.1679 },
        summary:
          'A softer stay choice for travelers who want the river logic to stay visible through the night and into the next departure.',
        note:
          'Useful when the route should feel like one long connected line rather than a series of city blocks.',
      },
      {
        id: 'sangju-refuel-zone',
        name: 'Corridor refuel line',
        kind: 'food',
        areaLabel: 'Meal corridor',
        coordinates: { lat: 36.4134, lng: 128.1642 },
        summary:
          'A practical eating zone for turning Sangju into a clean reset instead of a stop that drains more energy than it restores.',
        note:
          'This is where future stay-and-meal linking can naturally support route users without feeling forced.',
      },
      {
        id: 'sangju-river-reset',
        name: 'River-edge reset point',
        kind: 'recovery',
        areaLabel: 'Nakdong edge',
        coordinates: { lat: 36.4337, lng: 128.1703 },
        summary:
          'A lighter recovery point for riders and slower travelers who need the route to calm down after the threshold chapter.',
        note:
          'Useful for psychological reset even when the stop is not a full sightseeing pause.',
      },
      {
        id: 'sangju-daegu-handoff',
        name: 'Daegu handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound corridor',
        coordinates: { lat: 36.3152, lng: 128.2334 },
        summary:
          'A directional point that frames Sangju as the settled beginning of the longer southern run rather than the end of the pass story.',
        note:
          'This helps the page conclude with continuation and gives the next city more logic before arrival.',
      },
    ],
  },
  jecheon: {
    slug: 'jecheon',
    city: 'Jecheon',
    mapTitle: 'Where Jecheon tells you the inland route has really started',
    mapIntro:
      'Jecheon is not the main inland destination. It is the first city that proves the route has chosen a different Korea. The map should help decide where to pause, where to sleep, and where the mountain-and-lake mood becomes clear enough to matter.',
    mapCenter: {
      lat: 37.13,
      lng: 128.19,
    },
    supportSummary:
      'Jecheon works as the inland threshold. It is where the default corridor starts falling away and the route begins to feel more mountain-edged, slower, and deliberately interior.',
    roleSummary:
      'On the inland line, Jecheon is the first clean declaration that the trip is no longer following the easiest national corridor. It helps the route commit to a different atmosphere early.',
    staySummary:
      'A stay here is useful when the route should begin inland softly rather than lurch into a deeper southern push too fast. It is a threshold overnight more than a destination climax.',
    foodSummary:
      'Food here is about settling into the inland mood and refueling without noise. Jecheon should feel calmer, more lake-and-hill oriented, and less like an urban interruption.',
    nextLegSummary:
      'After Jecheon, the route can turn more decisively toward Chungju and the later pass-country chapter. The purpose of the stop is to make that shift feel natural rather than abrupt.',
    accommodationNote:
      'Strongest stay-planning angle: one city-core practical stay group and one lake-facing slower stay group that sells the inland threshold feeling.',
    sections: [
      {
        title: 'Why Jecheon matters early',
        body:
          'Jecheon is valuable because it lets the inland route announce itself early. It is the first place where the trip can feel consciously interior instead of merely slower than the highway default.',
      },
      {
        title: 'Why this is a threshold city and not a climax city',
        body:
          'The page should not oversell Jecheon as if it has to carry the whole route. Its real job is to introduce a new atmosphere and make the next cities feel coherent afterward.',
      },
      {
        title: 'Why a night here can improve the inland sequence',
        body:
          'When the route is trying to avoid becoming one long transfer, Jecheon is a useful place to flatten the emotional curve, sleep early, and begin the rest of the inland line with more intention.',
      },
      {
        title: 'Why lake-and-reservoir logic matters',
        body:
          'The route gets more believable when Jecheon is read through water and mountain edges rather than just through road geography. Uirimji and the broader lake atmosphere give the inland line its first real spatial contrast.',
      },
      {
        title: 'Why accommodation links can work here',
        body:
          'Jecheon supports stay intent because the threshold feeling is strongest when you let the first inland night register. A practical bed or a slower lake-facing stay can both make that choice feel worthwhile.',
      },
      {
        title: 'Why Jecheon should remain gentle in tone',
        body:
          'This city works best when the editorial voice stays calm. It is not a dramatic hinge like Mungyeong or a recovery node like Chungju. It is the city that quietly tells the traveler they have turned inland for real.',
      },
    ],
    decisions: [
      {
        title: 'Use Jecheon to begin inland softly',
        bestFor: 'Travelers who want the route to feel intentionally interior from the beginning instead of abruptly different later.',
        why:
          'Jecheon helps the route commit early and gives the rest of the inland sequence more continuity.',
      },
      {
        title: 'Keep the stay practical, but atmospheric',
        bestFor: 'Travelers who want one light early overnight without asking the first stop to carry the entire trip.',
        why:
          'The value of Jecheon is in its threshold atmosphere, so a practical stay still works if it preserves that shift in mood.',
      },
      {
        title: 'Lean toward the lake-facing read',
        bestFor: 'Travelers who want the first inland chapter to feel more scenic and spatial before the denser route logic develops further south.',
        why:
          'A quieter, water-oriented overnight helps the inland route register emotionally before it becomes more demanding.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the practical city-core stay',
        areaLabel: 'Jecheon center',
        bestFor: 'Travelers who want the simplest first-night inland logistics.',
        why:
          'The city core is best when the goal is to pivot inland cleanly without overcomplicating the first evening.',
      },
      {
        title: 'Use the lake-facing slower stay',
        areaLabel: 'Uirimji / lake edge',
        bestFor: 'Travelers who want the first inland night to feel visibly different from the Seoul departure rhythm.',
        why:
          'A slower stay near the water makes the threshold feel real and strengthens the route?셲 early editorial identity.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Threshold image',
        title: 'Uirimji gives the inland route its first real calm',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Uirimji_Reservoir_%284%29_%2833526672911%29.jpg',
        alt: 'Uirimji reservoir in Jecheon',
        body:
          'Jecheon works because the inland route stops feeling improvised and begins to feel spatial. Uirimji is one of the clearest images for that first quiet shift.',
        sourceLabel: 'Uirimji Reservoir (4) by Kyle Magnuson via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Uirimji_Reservoir_(4)_(33526672911).jpg',
        licenseLabel: 'Creative Commons',
      },
      {
        eyebrow: 'Lake atmosphere',
        title: 'The water-and-hill edge explains why this stop is different from the corridor',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Uirimji_Reservoir_%288%29_%2832812997394%29.jpg',
        alt: 'Uirimji reservoir landscape in Jecheon',
        body:
          'The point of Jecheon is not only transport. The city gives the route a slower physical mood before the more purposeful southbound sequence takes over.',
        sourceLabel: 'Uirimji Reservoir (8) by Kyle Magnuson via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Uirimji_Reservoir_(8)_(32812997394).jpg',
        licenseLabel: 'Creative Commons',
      },
      {
        eyebrow: 'Inland calm',
        title: 'A gentle first inland night can be more valuable than a louder stop',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Uirimji_Reservoir_%286%29_%2833526671581%29.jpg',
        alt: 'Uirimji reservoir in Jecheon',
        body:
          'Jecheon earns its place when it helps the traveler settle into the route rather than rush through it. That quietness is part of the value, not a weakness.',
        sourceLabel: 'Uirimji Reservoir (6) by Kyle Magnuson via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Uirimji_Reservoir_(6)_(33526671581).jpg',
        licenseLabel: 'Creative Commons',
      },
    ],
    points: [
      {
        id: 'jecheon-center-stay',
        name: 'Central stay grid',
        kind: 'stay',
        areaLabel: 'Jecheon center',
        coordinates: { lat: 37.1326, lng: 128.1905 },
        summary:
          'The easiest overnight area when the route needs a clean first inland pause with low friction and simple onward movement.',
        note:
          'Best for practical first nights when the point is to begin the inland route clearly, not dramatically.',
      },
      {
        id: 'jecheon-uirimji-edge',
        name: 'Uirimji edge',
        kind: 'checkpoint',
        areaLabel: 'Lake threshold',
        coordinates: { lat: 37.1561, lng: 128.2121 },
        summary:
          'The strongest zone for understanding why Jecheon belongs to the inland line through water, calm, and mountain-edge atmosphere.',
        note:
          'Use this as the main visual and emotional argument for why the route should turn inward here at all.',
      },
      {
        id: 'jecheon-lake-stay',
        name: 'Lake-facing slower stay zone',
        kind: 'stay',
        areaLabel: 'Uirimji side',
        coordinates: { lat: 37.1544, lng: 128.2134 },
        summary:
          'A slower overnight option for travelers who want the first inland chapter to register through quiet, water, and less urban energy.',
        note:
          'This works best when the route should begin with softness before it becomes more directional further south.',
      },
      {
        id: 'jecheon-refuel-line',
        name: 'Threshold refuel line',
        kind: 'food',
        areaLabel: 'Meal corridor',
        coordinates: { lat: 37.1338, lng: 128.1941 },
        summary:
          'A practical dinner and breakfast line for turning the first inland stop into a controlled reset instead of a vague pause.',
        note:
          'This is where future stay-and-meal linking can support route users without forcing destination-style dining expectations.',
      },
      {
        id: 'jecheon-mountain-reset',
        name: 'Mountain-edge reset point',
        kind: 'recovery',
        areaLabel: 'Interior edge',
        coordinates: { lat: 37.1468, lng: 128.2035 },
        summary:
          'A lighter reset point for travelers who need the route to calm down and feel internalized before continuing deeper inland.',
        note:
          'Useful when the stop is more about emotional pacing than about one big attraction or one hard ride chapter.',
      },
      {
        id: 'jecheon-chungju-handoff',
        name: 'Chungju handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound inland line',
        coordinates: { lat: 37.0739, lng: 128.1412 },
        summary:
          'A directional point that frames Jecheon as the soft opening of the inland route before the stronger recovery logic of Chungju begins.',
        note:
          'This helps the page close with continuation and keeps the city?셲 role anchored in the route rather than in itself alone.',
      },
    ],
  },
  cheonan: {
    slug: 'cheonan',
    city: 'Cheonan',
    mapTitle: 'Where Cheonan helps the route settle early',
    mapIntro:
      'Cheonan is not a major destination map here. It is a first-break map for understanding where to pause, snack, or split the early corridor without overcomplicating the route.',
    mapCenter: { lat: 36.8157, lng: 127.1138 },
    supportSummary:
      'Cheonan works best as the route?셲 first control point. The station-and-terminal grid makes the first night easy, while a softer outer-corridor option keeps the opening chapter from feeling rushed or mechanical.',
    roleSummary:
      'On Route 1, Cheonan is the best early-break city. It earns space because it turns a hurried Seoul departure into an organized route with cleaner pacing and lower first-day friction.',
    staySummary:
      'Most travelers do not need a long Cheonan stay, but the city becomes highly useful when you want late-start forgiveness, an uncomplicated first night, or a clean relaunch toward the central corridor the next morning.',
    foodSummary:
      'This is practical first-day eating at its best: walnut-cookie pickups, quick Korean comfort meals, and dependable breakfast-before-departure logic rather than destination dining theatrics.',
    nextLegSummary:
      'After Cheonan the route usually stops improvising. The next move into Daejeon or the deeper direct corridor feels cleaner because the opening block has already been settled properly.',
    accommodationNote:
      'Strongest stay-planning angle: station-side low-friction stays for late Seoul departures and simple first-night resets.',
    sections: [
      {
        title: 'Why Cheonan deserves a short stop',
        body:
          'Cheonan is useful because it gives the route a first exhale. If Seoul was crowded or the departure was rushed, this is one of the easiest places to reset before the corridor starts demanding stronger choices.',
      },
      {
        title: 'Why this is not a heavy editorial city',
        body:
          'The strength of Cheonan is that it does not pretend to be the whole trip. It is an easy early support node that helps the route feel paced instead of pushed.',
      },
      {
        title: 'How it hands off to the next chapter',
        body:
          'Once Cheonan has done its job, the route can either stay very practical toward Daejeon or continue without the feeling that the first southbound block was simply endured.',
      },
    ],
    decisions: [
      {
        title: 'Break the first day here',
        bestFor: 'Late Seoul departures, families, nervous first-time route users, and anyone who wants the trip to settle fast.',
        why:
          'Cheonan is the easiest place to convert a shaky departure day into a clean overnight without losing momentum.',
      },
      {
        title: 'Use it as a meal-and-reset checkpoint',
        bestFor: 'Travelers who do not need a sleep stop but do need one real pause before Daejeon logic begins.',
        why:
          'It gives Route 1 a structured first exhale without asking for a major detour or extra planning energy.',
      },
    ],
    stayZones: [
      {
        title: 'Hold the station-and-terminal grid',
        areaLabel: 'Cheonan Station / terminal side',
        bestFor: 'Late arrivals, short overnights, and the best first-night insurance policy on the route.',
        why:
          'This side keeps dinner, check-in, and the next morning departure tightly organized when the first day has already run long.',
      },
      {
        title: 'Use the slower outer corridor',
        areaLabel: 'Asan / Onyang side pocket',
        bestFor: 'Travelers who want one calmer overnight before rejoining the corridor.',
        why:
          'This is the softer version of the stop when you want less station-core energy but still need an easy handoff back into Route 1.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Early reset',
        title: 'Cheonan is where Route 1 becomes manageable',
        image: '/images/routes/route-1/cheonan/hero-generated-v1.png',
        alt: 'Editorial route image for Cheonan early reset',
        body:
          'This city earns time by turning the rushed Seoul exit into a calmer, more legible route opening.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/cheonan/hero-generated-v1.png',
        licenseLabel: 'Project editorial asset',
      },
    ],
    points: [
      {
        id: 'cheonan-station-grid',
        name: 'Station-side stay grid',
        kind: 'stay',
        areaLabel: 'Station core',
        coordinates: { lat: 36.8108, lng: 127.1464 },
        summary: 'The easiest area for a quick stay, meal, or first-night reset.',
        note: 'Use this zone when low friction matters more than editorial depth.',
      },
      {
        id: 'cheonan-cookie-line',
        name: 'Walnut-cookie snack line',
        kind: 'food',
        areaLabel: 'Central streets',
        coordinates: { lat: 36.8173, lng: 127.1545 },
        summary: 'A practical first snack corridor that makes the route feel local right away.',
        note: 'This is the kind of stop that lightens the route without slowing it down much.',
      },
      {
        id: 'cheonan-purpose-stop',
        name: 'Independence Hall side checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Eastern edge',
        coordinates: { lat: 36.7818, lng: 127.2299 },
        summary: 'A short purpose stop when the first break should feel meaningful without becoming a major detour.',
        note: 'Useful for travelers who want the opening pause to carry a little more weight than a meal-only stop.',
      },
      {
        id: 'cheonan-asan-soft-overnight',
        name: 'Asan-side softer overnight pocket',
        kind: 'recovery',
        areaLabel: 'Asan / Onyang side',
        coordinates: { lat: 36.7896, lng: 127.0037 },
        summary: 'A calmer side-pocket for travelers who want to stay early without sleeping directly in the station grid.',
        note: 'This is the better choice when the first night should feel quieter before the route sharpens again.',
      },
      {
        id: 'cheonan-supplies-belt',
        name: 'Terminal meal and supply belt',
        kind: 'food',
        areaLabel: 'Terminal side',
        coordinates: { lat: 36.8196, lng: 127.1567 },
        summary: 'The easiest place to solve dinner, supplies, coffee, and a fast next-morning restart in one compact zone.',
        note: 'Use this when the route needs efficient first-day logistics more than atmosphere.',
      },
      {
        id: 'cheonan-daejeon-handoff',
        name: 'Daejeon handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound corridor',
        coordinates: { lat: 36.735, lng: 127.2148 },
        summary: 'The line where the easy first break turns into the more central Route 1 split.',
        note: 'This keeps Cheonan anchored as an opening move, not an isolated destination.',
      },
    ],
  },
  daejeon: {
    slug: 'daejeon',
    city: 'Daejeon',
    mapTitle: 'Where Daejeon makes Route 1 easy to divide',
    mapIntro:
      'Daejeon is a support map for central overnights, hot-spring-adjacent stays, and practical onward movement. It matters because the route can split here cleanly without becoming dramatic.',
    mapCenter: { lat: 36.3504, lng: 127.3845 },
    supportSummary:
      'Daejeon works as the corridor?셲 cleanest choose-your-version overnight. Station-core efficiency and Yuseong-side recovery both serve Route 1 well, which makes the city one of the easiest places to use with real intention.',
    roleSummary:
      'This is the central corridor decision city. Daejeon rebalances Route 1 before the stronger southern chapters begin and lets the user choose between pure logistics and a warmer body-reset version of the same stop.',
    staySummary:
      'Station-core stays are for sleep-fast, eat-fast, leave-cleanly timing. Yuseong-side stays are for travelers who want the overnight to restore energy instead of merely storing it until morning.',
    foodSummary:
      'Food matters here in a concrete, route-support way: reliable dinners after late arrivals, easy breakfasts before departure, and uncomplicated meal zones that keep the split monetizable without becoming theatrical.',
    nextLegSummary:
      'After Daejeon, Route 1 usually stops improvising. The next major move commits more clearly toward Daegu or the deeper south, which is why the quality of the split matters so much here.',
    accommodationNote:
      'Strongest stay-planning angle: station-core business stays for clean departures and Yuseong-side recovery stays for slower or fatigue-led overnights.',
    sections: [
      {
        title: 'Why Daejeon stays useful',
        body:
          'Daejeon helps because it is one of the few places on Route 1 where you can pause without changing the identity of the trip. The city absorbs timing problems well and sends the route onward cleanly.',
      },
      {
        title: 'Why Yuseong matters',
        body:
          'Yuseong turns a practical stop into a slightly more restorative one. It gives the city a reason to hold a real overnight instead of just a station meal and departure.',
      },
      {
        title: 'How to keep it from feeling generic',
        body:
          'The key is to decide whether Daejeon is a pure split or a recovery split. Once that is clear, the city becomes easier to use and easier to monetize through stay logic.',
      },
    ],
    decisions: [
      {
        title: 'Keep the split tight at Daejeon Station',
        bestFor: 'Rail users, one-night corridor travelers, and anyone trying to preserve next-day speed.',
        why:
          'This is the strongest sleep-eat-leave-cleanly play in the middle of Route 1 when momentum matters more than atmosphere.',
      },
      {
        title: 'Turn the overnight into recovery in Yuseong',
        bestFor: 'Drivers, cyclists, longer itineraries, and travelers arriving worn down rather than simply late.',
        why:
          'Yuseong upgrades Daejeon from a transit stop into a body-reset stop without breaking corridor efficiency.',
      },
    ],
    stayZones: [
      {
        title: 'Hold the station-and-Jungang-ro grid',
        areaLabel: 'Daejeon Station / Jungang-ro',
        bestFor: 'Arrival control, short walks, fast dinners, and early departures.',
        why:
          'This is the pure logistics zone when the route needs one clean central overnight and nothing wasted around it.',
      },
      {
        title: 'Move west to the Yuseong hot-spring belt',
        areaLabel: 'Yuseong',
        bestFor: 'Recovery-led central overnights with better next-day energy.',
        why:
          'This side gives Daejeon its warmer version through baths, broader hotel choice, and a more restorative evening without abandoning route efficiency.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Central split',
        title: 'Daejeon is the route?셲 cleanest divide-and-continue city',
        image: '/images/routes/route-1/daejeon/hero-generated-v1.png',
        alt: 'Editorial route image for Daejeon central corridor split',
        body:
          'The city earns its place when the user can immediately tell whether this is a tight station night or a more restorative Yuseong night.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/daejeon/hero-generated-v1.png',
        licenseLabel: 'Project editorial asset',
      },
    ],
    points: [
      {
        id: 'daejeon-station-grid',
        name: 'Station-side stay grid',
        kind: 'stay',
        areaLabel: 'Station core',
        coordinates: { lat: 36.3322, lng: 127.4341 },
        summary: 'The simplest central stay area for preserving route momentum.',
        note: 'Best for rail timing, fast check-in, and clean next-day movement.',
      },
      {
        id: 'daejeon-yuseong-reset',
        name: 'Yuseong recovery belt',
        kind: 'recovery',
        areaLabel: 'Yuseong',
        coordinates: { lat: 36.3622, lng: 127.3565 },
        summary: 'The side of Daejeon that makes the split feel restorative rather than purely functional.',
        note: 'Useful for hot-spring-adjacent stays and a calmer evening before continuing south.',
      },
      {
        id: 'daejeon-meal-corridor',
        name: 'Central meal corridor',
        kind: 'food',
        areaLabel: 'Central streets',
        coordinates: { lat: 36.3492, lng: 127.3848 },
        summary: 'A practical dinner-and-breakfast zone for keeping the city easy to use.',
        note: 'The point is dependable timing and low friction, not destination-style dining.',
      },
      {
        id: 'daejeon-expo-orientation',
        name: 'Expo-bridge orientation edge',
        kind: 'checkpoint',
        areaLabel: 'Riverside axis',
        coordinates: { lat: 36.3744, lng: 127.3861 },
        summary: 'A short orientation point that gives Daejeon one clear spatial memory beyond stations and road logic.',
        note: 'Useful when the city should feel intentionally chosen rather than treated as a pure transit calculation.',
      },
      {
        id: 'daejeon-yuseong-launch',
        name: 'Yuseong launch pocket',
        kind: 'mobility',
        areaLabel: 'West-side departure pocket',
        coordinates: { lat: 36.3559, lng: 127.3417 },
        summary: 'A strong onward staging area for drivers who want to sleep in Yuseong and still launch south cleanly the next morning.',
        note: 'This is where the recovery version of Daejeon proves it does not have to sacrifice practical route control.',
      },
      {
        id: 'daejeon-daegu-handoff',
        name: 'Southbound handoff line',
        kind: 'mobility',
        areaLabel: 'Toward Daegu',
        coordinates: { lat: 36.245, lng: 127.3996 },
        summary: 'The line where the central split gives way to stronger southern route identity.',
        note: 'This keeps Daejeon framed as a stabilizer rather than the climax of the route.',
      },
    ],
  },
  daegu: {
    slug: 'daegu',
    city: 'Daegu',
    mapTitle: 'Where Daegu resets Route 1 with real southern energy',
    mapIntro:
      'Daegu is a route-support map for food, sleep, resupply, and urban reset. It matters because it gives the inland or direct line a sharper pulse before Busan.',
    mapCenter: { lat: 35.8714, lng: 128.6014 },
    supportSummary:
      'Daegu works as the strongest urban reset on Route 1 outside Seoul and Busan. Market streets, medicine-quarter texture, and practical hotel stock make it easy to keep for one night.',
    roleSummary:
      'This is the southern energy shift. Daegu adds heat, food, and resupply to the route right before the final southeast chapters.',
    staySummary:
      'Dongseongno-side stays favor walkability and evening life. Station-side stays make onward movement easier when Busan is coming soon after.',
    foodSummary:
      'Daegu is one of the clearest places on Route 1 where dinner itself becomes part of the route logic. Market food, late meals, and denser city texture make the stop feel earned.',
    nextLegSummary:
      'After Daegu, the route either sharpens toward Gyeongju and Busan or calms back down along the river line. Either way, the stop usually changes the trip for the better.',
    accommodationNote:
      'Strongest stay-planning angle: central walkable stays plus station-side practical hotels.',
    sections: [
      {
        title: 'Why Daegu earns a proper night',
        body:
          'Daegu is not just another stop with a station. It is the moment when Route 1 can pick up southern city energy, better food, and a real sense of urban reset before the finish.',
      },
      {
        title: 'Why this city monetizes naturally',
        body:
          'Daegu makes accommodation and food linking feel natural because the city is actually used that way. People stay here to eat well, walk a denser core, and re-enter the route with more energy.',
      },
      {
        title: 'How it hands off to the final chapter',
        body:
          'After Daegu the route has enough momentum that Busan no longer feels distant. The next move is about sharpening the finish, not rebuilding the trip.',
      },
    ],
    decisions: [
      {
        title: 'Stay central and walk',
        bestFor: 'Food-led evenings, first-time visitors, and anyone who wants the route to feel more alive.',
        why:
          'The core gives Daegu its market and street-energy logic. It is the strongest version of the stop if the city should change the mood.',
      },
      {
        title: 'Keep it near the station',
        bestFor: 'Fast handoffs into Gyeongju or Busan the next day.',
        why:
          'This version keeps the reset clean while protecting timing for the final route chapter.',
      },
    ],
    stayZones: [
      {
        title: 'Sleep around the central grid',
        areaLabel: 'Dongseongno / Jung-gu',
        bestFor: 'Walkable food-led overnights.',
        why:
          'This zone gives the route the most urban texture and the strongest evening payoff.',
      },
      {
        title: 'Hold a station-side stay',
        areaLabel: 'Dongdaegu side',
        bestFor: 'Rail users and tighter last-day schedules.',
        why:
          'This area is the more practical version of Daegu when onward transport matters more than nightlife.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Southern reset',
        title: 'Daegu should feel denser than the inland chapters before it',
        image: '/images/routes/route-1/daegu/support-1-generated-v1.png',
        alt: 'Editorial route image for Daegu southern reset',
        body:
          'This stop works because the route suddenly picks up city heat, markets, and food again before the final descent.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/daegu/support-1-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Food logic',
        title: 'Dinner matters more here than in most other Route 1 cities',
        image: '/images/routes/route-1/daegu/support-2-generated-v1.png',
        alt: 'Editorial route image for Daegu food-led urban evening',
        body:
          'Daegu is where the route can stop being purely geographic and become urban again.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/daegu/support-2-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Final momentum',
        title: 'A strong reset here makes Busan land better',
        image: '/images/routes/route-1/daegu/support-3-generated-v1.png',
        alt: 'Editorial route image for Daegu station-side handoff',
        body:
          'Used well, Daegu strengthens the end of Route 1 instead of delaying it.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/daegu/support-3-generated-v1.png',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'daegu-central-stay',
        name: 'Central stay grid',
        kind: 'stay',
        areaLabel: 'Dongseongno',
        coordinates: { lat: 35.8691, lng: 128.5933 },
        summary: 'The best area for a route night built around food, walking, and city energy.',
        note: 'This is the strongest zone if Daegu should feel like a proper chapter and not just a platform.',
      },
      {
        id: 'daegu-market-food',
        name: 'Market food corridor',
        kind: 'food',
        areaLabel: 'Seomun side',
        coordinates: { lat: 35.8686, lng: 128.5807 },
        summary: 'A route-relevant food zone where the stop starts feeling southern and substantial.',
        note: 'Useful for dinner, snacks, and the sense that the route is no longer only functional.',
      },
      {
        id: 'daegu-station-grid',
        name: 'Dongdaegu station grid',
        kind: 'mobility',
        areaLabel: 'Station side',
        coordinates: { lat: 35.8776, lng: 128.6286 },
        summary: 'The fastest onward-movement zone if the next handoff matters more than a long city evening.',
        note: 'Best for keeping the route practical while still using Daegu as a reset.',
      },
      {
        id: 'daegu-gyeongju-handoff',
        name: 'Gyeongju / Busan handoff line',
        kind: 'checkpoint',
        areaLabel: 'Southeast exit',
        coordinates: { lat: 35.8168, lng: 128.6762 },
        summary: 'The point where the city reset turns into the final Route 1 push.',
        note: 'After this line the route stops rebuilding itself and starts cashing out.',
      },
    ],
  },
  gumi: {
    slug: 'gumi',
    city: 'Gumi',
    mapTitle: 'Where Gumi keeps the direct corridor flexible',
    mapIntro:
      'Gumi is a middle-corridor support map. It matters when the route needs a stable break, a practical sleep, or a calm pause before Daegu without becoming a destination detour.',
    mapCenter: { lat: 36.1195, lng: 128.3446 },
    supportSummary:
      'Gumi works as a purposeful middle-corridor reset. It gives the direct line service, timing flexibility, and just enough riverside calm to keep the route from flattening out before Daegu arrives.',
    roleSummary:
      'This is the corridor decompression node. Gumi protects energy, clears mental clutter, and keeps Daegu from arriving too early or too tired.',
    staySummary:
      'The best use is a practical one-night stay when you want a quieter, cheaper, lighter overnight before the route thickens into a stronger southern chapter.',
    foodSummary:
      'Food matters here in a steadying way: warm dinner, unfussy breakfast, and reliable refuel before the route stops coasting and starts gathering southern momentum.',
    nextLegSummary:
      'After Gumi the route usually intensifies toward Daegu. The stop works best when it turns that next chapter into something sharper and more earned rather than half-spent.',
    accommodationNote:
      'Strongest stay-planning angle: quiet corridor hotels that preserve energy before Daegu becomes the bigger southern chapter.',
    sections: [
      {
        title: 'Why Gumi can still be valuable',
        body:
          'Not every route city needs to carry the whole narrative. Gumi earns its place by solving timing and fatigue in the middle of the direct corridor.',
      },
      {
        title: 'Why the stop should stay honest',
        body:
          'The city works when it is framed as useful rather than romanticized. It is a serviceable, flexible middle corridor city, and that alone has value.',
      },
      {
        title: 'How it strengthens Daegu after it',
        body:
          'A cleaner, calmer middle stop often makes the southern city chapter land with more energy. That is the best reason to keep Gumi at all.',
      },
    ],
    decisions: [
      {
        title: 'Keep Gumi as the pre-Daegu breather',
        bestFor: 'Travelers who want Daegu to feel sharper, more walkable, and more earned the next day.',
        why:
          'A quieter overnight here turns Daegu into a real chapter instead of one more stop reached half-spent.',
      },
      {
        title: 'Use Gumi instead of forcing Daegu late',
        bestFor: 'Drivers, cyclists, and budget-conscious users arriving tired in the corridor.',
        why:
          'Gumi works when the smarter move is to end the day early, sleep cleanly, and enter Daegu with actual energy.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the central business grid',
        areaLabel: 'Central Gumi',
        bestFor: 'Sleep-fast, leave-strong one-night stays.',
        why:
          'This is the right zone when the point is to solve dinner, lodging, and the next morning restart within one tight radius.',
      },
      {
        title: 'Touch the river-side edge',
        areaLabel: 'Nakdong side',
        bestFor: 'Travelers who want one softer landing before rejoining the corridor.',
        why:
          'A brief riverside reset keeps the middle stop from feeling purely industrial while still preserving the route?셲 calm-before-Daegu function.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Middle corridor',
        title: 'Gumi works best when the route chooses calm on purpose',
        image: '/images/routes/route-1/gumi/hero-generated-v1.png',
        alt: 'Editorial route image for Gumi middle-corridor reset',
        body:
          'Not every useful stop has to perform loudly. Gumi improves Route 1 by lowering the route?셲 noise before Daegu raises it again.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/gumi/hero-generated-v1.png',
        licenseLabel: 'Project editorial asset',
      },
    ],
    points: [
      {
        id: 'gumi-central-stay',
        name: 'Central stay grid',
        kind: 'stay',
        areaLabel: 'Gumi core',
        coordinates: { lat: 36.1194, lng: 128.3449 },
        summary: 'A clean practical stay area for one-night corridor pacing.',
        note: 'Best used when the city is there to keep the trip easy rather than ornate.',
      },
      {
        id: 'gumi-meal-line',
        name: 'Middle-corridor meal line',
        kind: 'food',
        areaLabel: 'Central streets',
        coordinates: { lat: 36.1174, lng: 128.3386 },
        summary: 'A dependable dinner and breakfast area for keeping the stop simple.',
        note: 'The point is to refuel and continue with less friction.',
      },
      {
        id: 'gumi-station-arrival-grid',
        name: 'Station-side arrival grid',
        kind: 'mobility',
        areaLabel: 'Arrival side',
        coordinates: { lat: 36.1281, lng: 128.3313 },
        summary: 'A clean first pin for late arrivals who need a fast hotel-and-meal decision without burning more time.',
        note: 'This is where Gumi proves useful as a practical stop rather than a romanticized one.',
      },
      {
        id: 'gumi-river-edge',
        name: 'Nakdong-side edge',
        kind: 'checkpoint',
        areaLabel: 'River side',
        coordinates: { lat: 36.1212, lng: 128.3644 },
        summary: 'A light river-facing checkpoint that gives the stop some spatial identity.',
        note: 'Useful when you want the break to feel more grounded than a highway-only pause.',
      },
      {
        id: 'gumi-daegu-handoff',
        name: 'Daegu handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound direct line',
        coordinates: { lat: 36.0093, lng: 128.3964 },
        summary: 'The corridor line where the middle breather starts turning into the southern reset chapter.',
        note: 'This is why Gumi works best as a prelude and not as the endpoint of the route story.',
      },
      {
        id: 'gumi-resupply-pocket',
        name: 'Light resupply pocket',
        kind: 'checkpoint',
        areaLabel: 'Convenience belt',
        coordinates: { lat: 36.116, lng: 128.3414 },
        summary: 'A small reset zone for snacks, pharmacy needs, and morning-launch basics before the denser southbound leg.',
        note: 'Useful when the right move is simply to simplify the corridor and leave stronger the next day.',
      },
    ],
  },
  changnyeong: {
    slug: 'changnyeong',
    city: 'Changnyeong',
    mapTitle: 'Where the lower-river line calms before Busan',
    mapIntro:
      'Changnyeong is a late-route support map. It matters when the lower Nakdong chapter needs one more calm overnight, a practical meal, or a reset before the final push.',
    mapCenter: { lat: 35.5438, lng: 128.4923 },
    supportSummary:
      'Changnyeong works as a late lower-river recovery node. It is quieter than Daegu and more useful when the route needs one more body-and-route reset before Busan.',
    roleSummary:
      'This is the place where Route 1 sheds final fatigue and stops searching for one more big city. Its job is to keep the finish composed rather than overworked.',
    staySummary:
      'Most stays here should be simple, quiet, and recovery-led rather than urban and ambitious. The city is valuable when it keeps the finish cleaner and less forced.',
    foodSummary:
      'Use Changnyeong for restorative meals that support rest and continuation: simple dinners, easy breakfasts, and warmer low-friction fuel before the last push.',
    nextLegSummary:
      'After Changnyeong, the route should feel resolved enough to let Busan arrive as arrival rather than rescue. This stop is strongest when it converts recovery into finish momentum.',
    accommodationNote:
      'Strongest stay-planning angle: calm practical stays for riders and slower lower-river users who want Busan to begin from a rested position.',
    sections: [
      {
        title: 'Why keep a quieter southern city',
        body:
          'Changnyeong matters because not every late route user wants another major city before Busan. Sometimes the best final stop is the one that lets the journey breathe.',
      },
      {
        title: 'Why this stop is especially useful for riders',
        body:
          'Cycling and slower inland users benefit from a place that offers recovery without reintroducing big-city friction. Changnyeong can do that better than a louder stop.',
      },
      {
        title: 'How it prepares the finish',
        body:
          'This is the kind of stop that helps the final arrival land cleanly. It preserves legs, clears the route, and avoids overstaging the end.',
      },
    ],
    decisions: [
      {
        title: 'Keep Changnyeong for recovery, not excitement',
        bestFor: 'Cyclists, slower self-drives, and travelers who want to reach Busan with composure instead of drag.',
        why:
          'This stop earns its place when the finish needs quieter sleep, easier legs, and less final-day friction.',
      },
      {
        title: 'Use Changnyeong instead of one more major-city night',
        bestFor: 'Users who already got their city energy earlier and now want the route to taper intelligently.',
        why:
          'It gives the lower river one final restorative chapter before the metropolitan finish takes over.',
      },
    ],
    stayZones: [
      {
        title: 'Hold a quiet town-core stay',
        areaLabel: 'Town core',
        bestFor: 'Late-route recovery stays with the easiest dinner-sleep-breakfast sequence.',
        why:
          'This is the cleanest place to shut the day down early and protect the Busan finish with the least mental friction.',
      },
      {
        title: 'Lean into the lower-river edge',
        areaLabel: 'Nakdong side',
        bestFor: 'Riders and slower late-route users who want a body-reset version of the finish setup.',
        why:
          'This side emphasizes spaciousness and quiet, which is exactly what makes Changnyeong useful before the metropolitan finish.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Late calm',
        title: 'Changnyeong is where the lower river chooses recovery over one last performance',
        image: '/images/routes/route-1/changnyeong/hero-generated-v1.png',
        alt: 'Editorial route image for Changnyeong lower-river recovery',
        body:
          'This stop matters because the route can get stronger by quieting down. It is a late-stage reset, not a missed climax.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/changnyeong/hero-generated-v1.png',
        licenseLabel: 'Project editorial asset',
      },
    ],
    points: [
      {
        id: 'changnyeong-central-stay',
        name: 'Quiet central stay grid',
        kind: 'stay',
        areaLabel: 'Town core',
        coordinates: { lat: 35.5418, lng: 128.4957 },
        summary: 'A low-friction overnight area when the late route should stay calm.',
        note: 'Best for preserving legs and avoiding one more complicated city night.',
      },
      {
        id: 'changnyeong-meal-line',
        name: 'Late-route meal line',
        kind: 'food',
        areaLabel: 'Central streets',
        coordinates: { lat: 35.5429, lng: 128.4974 },
        summary: 'A practical dinner-and-breakfast corridor that suits a simple final reset.',
        note: 'The point is to support the finish, not to turn the stop into an event.',
      },
      {
        id: 'changnyeong-river-reset',
        name: 'Lower-river reset edge',
        kind: 'recovery',
        areaLabel: 'Nakdong side',
        coordinates: { lat: 35.5348, lng: 128.4683 },
        summary: 'A calmer edge that explains why this city is useful in the late route chapter.',
        note: 'This is where the route can regain quiet before Busan becomes imminent.',
      },
      {
        id: 'changnyeong-busan-handoff',
        name: 'Busan handoff line',
        kind: 'mobility',
        areaLabel: 'Final southbound line',
        coordinates: { lat: 35.4592, lng: 128.5467 },
        summary: 'The line where the late calm turns into the final metropolitan finish.',
        note: 'After this point, Route 1 should feel like it is arriving rather than searching.',
      },
      {
        id: 'changnyeong-bath-reset',
        name: 'Wellness-adjacent reset pocket',
        kind: 'recovery',
        areaLabel: 'Recovery side pocket',
        coordinates: { lat: 35.5499, lng: 128.5006 },
        summary: 'A stronger proof point for users who need more than a meal and a bed before the final push.',
        note: 'This helps explain why Changnyeong can function as a body-reset stop rather than only a quiet town on the map.',
      },
      {
        id: 'changnyeong-morning-launch',
        name: 'Morning departure pocket',
        kind: 'mobility',
        areaLabel: 'Southbound launch side',
        coordinates: { lat: 35.5284, lng: 128.5112 },
        summary: 'A simple launch area for an unfussy early start when the final approach to Busan should feel spacious and controlled.',
        note: 'Useful when the right move is to turn a restful night directly into cleaner finish momentum.',
      },
    ],
  },
  miryang: {
    slug: 'miryang',
    city: 'Miryang',
    mapTitle: 'Where the southern route bends toward Busan without rushing',
    mapIntro:
      'Miryang is a quiet-hinge map for the late Route 1 line. It matters when the route should keep its river calm and practical control before the Busan finish begins.',
    mapCenter: { lat: 35.5038, lng: 128.7464 },
    supportSummary:
      'Miryang works as the quiet southern hinge. It lets the route stay low-pressure and composed before Busan instead of forcing one more loud city beat.',
    roleSummary:
      'This is the final quiet hinge. Miryang helps the route turn toward Busan with control, softer pacing, and one last practical chapter that does not try to overshadow the arrival.',
    staySummary:
      'The strongest stays here are simple central overnights and calmer river-adjacent resets that keep the final approach organized.',
    foodSummary:
      'Food in Miryang should support a reset-first southern handoff: practical dinners, easy breakfasts, and one quieter local meal before the metropolitan finish.',
    nextLegSummary:
      'After Miryang, the route should feel ready to arrive. The point is not more exploration but a cleaner final transition into Busan.',
    accommodationNote:
      'Strongest stay-planning angle: one practical central stay group and one quieter river-facing stay read for travelers who want Busan to start from a calmer position.',
    sections: [
      {
        title: 'Why Miryang matters late',
        body:
          'Miryang earns time when the route needs one last low-pressure chapter before Busan. It keeps the finish from becoming abrupt or overworked.',
      },
      {
        title: 'Why this stop is different from Changnyeong',
        body:
          'Changnyeong is about lower-river recovery. Miryang is about turning that calmer logic toward a real metropolitan finish without losing composure.',
      },
      {
        title: 'How to use the overnight well',
        body:
          'Use Miryang when the route should sleep simply, eat easily, and enter Busan with better timing and less leftover fatigue.',
      },
    ],
    decisions: [
      {
        title: 'Keep Miryang for a quieter final hinge',
        bestFor: 'Travelers who want one last practical southern overnight before Busan.',
        why:
          'The city is strongest when it protects the final arrival from becoming one more long push.',
      },
      {
        title: 'Use it instead of one more louder city beat',
        bestFor: 'Users who already had enough city energy and now want a more controlled handoff into Busan.',
        why:
          'Miryang preserves the softer route tone and keeps the finish from becoming overstaged.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the central stay grid',
        areaLabel: 'Miryang center',
        bestFor: 'Travelers who want the simplest late-route dinner-sleep-depart sequence.',
        why:
          'This is the most reliable overnight shape when the only job left is to finish well.',
      },
      {
        title: 'Lean toward the river-facing calmer edge',
        areaLabel: 'River side',
        bestFor: 'Travelers who want one quieter southern night before the Busan chapter begins.',
        why:
          'This choice preserves the route?셲 calmer lower-river character right until the metropolitan handoff.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Quiet hinge',
        title: 'Miryang helps the route arrive without rushing into arrival too soon',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yeongnamru%20Miryang%20Gyeongsangnamdo.JPG',
        alt: 'Yeongnamru view in Miryang',
        body:
          'The city matters because not every final route chapter should be loud. Sometimes the stronger finish is the calmer one.',
        sourceLabel: 'Yeongnamru Miryang Gyeongsangnamdo via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Yeongnamru_Miryang_Gyeongsangnamdo.JPG',
        licenseLabel: 'Wikimedia Commons',
      },
    ],
    points: [
      {
        id: 'miryang-central-stay',
        name: 'Central stay grid',
        kind: 'stay',
        areaLabel: 'Town core',
        coordinates: { lat: 35.4939, lng: 128.7469 },
        summary: 'A practical overnight area for protecting the final approach into Busan.',
        note: 'Best when the route needs a simple last-night sequence without extra complexity.',
      },
      {
        id: 'miryang-meal-line',
        name: 'Southern reset meal line',
        kind: 'food',
        areaLabel: 'Central streets',
        coordinates: { lat: 35.4948, lng: 128.7507 },
        summary: 'A practical dinner-and-breakfast corridor for turning Miryang into a clean hinge rather than a vague pass-through.',
        note: 'Use this for low-friction meals that support a better final day.',
      },
      {
        id: 'miryang-river-reset',
        name: 'River-facing reset edge',
        kind: 'recovery',
        areaLabel: 'Riverside side',
        coordinates: { lat: 35.5008, lng: 128.7581 },
        summary: 'A calmer edge that preserves the softer route tone right before Busan begins to pull harder.',
        note: 'This is where Miryang explains itself as a quieter final hinge rather than one more city stop.',
      },
      {
        id: 'miryang-yeongnamnu-checkpoint',
        name: 'Yeongnamnu checkpoint',
        kind: 'checkpoint',
        areaLabel: 'River-facing landmark edge',
        coordinates: { lat: 35.4965, lng: 128.7595 },
        summary: 'A useful orientation point for giving Miryang one grounded local image without making the page destination-first.',
        note: 'Good for helping the city feel rooted instead of purely logistical.',
      },
      {
        id: 'miryang-busan-handoff',
        name: 'Busan handoff line',
        kind: 'mobility',
        areaLabel: 'Final southeast line',
        coordinates: { lat: 35.3884, lng: 128.8461 },
        summary: 'The line where the quiet southern hinge becomes the final metropolitan approach.',
        note: 'This keeps the page pointed toward arrival and preserves the role of the city inside the route.',
      },
    ],
  },
  gangneung: {
    slug: 'gangneung',
    city: 'Gangneung',
    mapTitle: 'Where the east coast line truly begins to commit',
    mapIntro:
      'Gangneung is a coast-support map for deciding where to stay, where to take in the shoreline mood, and where the east coast route stops being a detour and starts being its own journey.',
    mapCenter: { lat: 37.7519, lng: 128.8761 },
    supportSummary:
      'Gangneung is the point of no return for the east-coast Route 1 line. Once you keep it, the trip stops being a direct Seoul-to-Busan transfer and becomes a deliberately coastal sequence with its own rhythm, mornings, and sleep logic.',
    roleSummary:
      'This is the coast-entry anchor. Gangneung is where the east-sea line stops looking optional and starts reading like a distinct route product built around shoreline timing, coffee, and sea-facing resets.',
    staySummary:
      'Beach-side stays favor atmosphere, sunrise, and a slower coastal morning. Central stays work better when the route needs cleaner onward timing without giving up the first real sense of coastal commitment.',
    foodSummary:
      'Gangneung should be used for coffee, breakfast, and the first unmistakable change in daily rhythm. It is less about efficiency than about proving that the route has pivoted to the sea for real.',
    nextLegSummary:
      'After Gangneung, the coast route can no longer act like a practical add-on. It has to keep delivering shoreline continuity, spacing, and atmosphere all the way south.',
    accommodationNote:
      'Strongest stay-planning angle: beach-front stays and cafe-street adjacent hotels.',
    sections: [
      {
        title: 'Why Gangneung changes the whole route',
        body:
          'Gangneung matters because it is not just another stop on the east side. It is the city where the east-coast version of Route 1 starts reading like a distinct product.',
      },
      {
        title: 'Why the morning matters here',
        body:
          'A coastal stay is not only about arrival. The morning light, breakfast rhythm, and sea-facing start are what justify keeping Gangneung overnight at all.',
      },
      {
        title: 'How it sets up the long coast',
        body:
          'Once this city lands properly, later places like Uljin, Yeongdeok, and Pohang feel like continuation rather than random pins on a map.',
      },
    ],
    decisions: [
      {
        title: 'Stay by the beach and let the coast take over',
        bestFor: 'Travelers who want the east-coast route to feel visibly committed from the first overnight.',
        why:
          'This is the version of Gangneung that makes the route unmistakably maritime at night and again at first light.',
      },
      {
        title: 'Stay central and keep the coast efficient',
        bestFor: 'Travelers who want coastal mood without letting the next shoreline day become sloppy.',
        why:
          'A more central stay keeps Gangneung useful while protecting the longer coast chapter that begins after it.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the beach-facing stay',
        areaLabel: 'Anmok / shoreline',
        bestFor: 'Atmosphere-first coastal overnights.',
        why:
          'This is the strongest zone when the route should pivot fully into sea-facing logic.',
      },
      {
        title: 'Use the central city grid',
        areaLabel: 'Central Gangneung',
        bestFor: 'Faster onward movement and simpler route pacing.',
        why:
          'This version makes the coast easier to use without requiring a fully resort-like stay.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Coast-entry',
        title: 'Gangneung is where the east coast line stops looking optional',
        image: '/images/routes/route-1/gangneung/support-1-generated-v1.png',
        alt: 'Editorial route image for Gangneung coast entry',
        body:
          'This city gives the east-coast Route 1 line its first convincing shoreline identity.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/gangneung/support-1-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Morning logic',
        title: 'The overnight only works if the next morning belongs to the sea',
        image: '/images/routes/route-1/gangneung/support-2-generated-v1.png',
        alt: 'Editorial route image for Gangneung coastal overnight mood',
        body:
          'Gangneung earns time because the route changes most clearly at breakfast and first light, not only at arrival.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/gangneung/support-2-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Route commitment',
        title: 'After this city the coastline has to keep delivering',
        image: '/images/routes/route-1/gangneung/support-3-generated-v1.png',
        alt: 'Editorial route image for Gangneung shoreline commitment',
        body:
          'Used well, Gangneung makes every later east-coast stop feel more coherent.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/gangneung/support-3-generated-v1.png',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'gangneung-beach-stay',
        name: 'Beach-facing stay strip',
        kind: 'stay',
        areaLabel: 'Anmok side',
        coordinates: { lat: 37.7725, lng: 128.9472 },
        summary: 'The strongest overnight zone if the point is to make the route feel fully coastal.',
        note: 'Use this when the sea-facing morning matters as much as the previous evening.',
      },
      {
        id: 'gangneung-coffee-line',
        name: 'Coffee street line',
        kind: 'food',
        areaLabel: 'Anmok',
        coordinates: { lat: 37.7721, lng: 128.9479 },
        summary: 'A key breakfast and reset zone for letting the route pivot into coastal rhythm.',
        note: 'This is where the east-coast chapter starts feeling culturally specific, not just scenic.',
      },
      {
        id: 'gangneung-central-grid',
        name: 'Central city grid',
        kind: 'mobility',
        areaLabel: 'City core',
        coordinates: { lat: 37.7512, lng: 128.8765 },
        summary: 'A more practical base when the coast route needs a cleaner onward handoff.',
        note: 'Useful for keeping the stop legible without overcommitting to resort timing.',
      },
      {
        id: 'gangneung-uljin-handoff',
        name: 'Southbound coast handoff',
        kind: 'checkpoint',
        areaLabel: 'Route 7 south',
        coordinates: { lat: 37.6942, lng: 129.0324 },
        summary: 'The line where the first coastal anchor starts handing the route to its longer shoreline chapters.',
        note: 'After this point, the route should stay convincingly maritime.',
      },
      {
        id: 'gangneung-breakfast-launch',
        name: 'Breakfast launch strip',
        kind: 'food',
        areaLabel: 'Beach-to-core transition',
        coordinates: { lat: 37.7676, lng: 128.9142 },
        summary: 'A practical morning zone for coffee, bakery stops, and the first clean launch into the long coast day.',
        note: 'This is where Gangneung proves its overnight value by making the next chapter feel started, not merely resumed.',
      },
      {
        id: 'gangneung-sea-reset',
        name: 'Sea-facing reset edge',
        kind: 'recovery',
        areaLabel: 'Shoreline edge',
        coordinates: { lat: 37.7713, lng: 128.9488 },
        summary: 'A short sea-facing reset point that explains why Gangneung belongs as an actual overnight anchor instead of only a scenic stop.',
        note: 'Useful when the route should feel changed by air, pace, and morning light rather than by distance alone.',
      },
    ],
  },
  samcheok: {
    slug: 'samcheok',
    city: 'Samcheok',
    mapTitle: 'Where the east coast keeps unfolding instead of rushing south',
    mapIntro:
      'Samcheok is a continuity map for the east coast. It matters when the route should stay scenic, open-road, and visibly shoreline-led between Gangneung and Uljin.',
    mapCenter: { lat: 37.4499, lng: 129.1652 },
    supportSummary:
      'Samcheok works as the scenic continuation node. It keeps the east coast from collapsing into only a few major names and gives the shoreline one more believable chapter of cliffs, ports, and open road.',
    roleSummary:
      'This is the coastline continuation city. Samcheok makes the east-coast route feel unfolded rather than summarized, especially for users who want the sea to read as a sequence instead of a jump cut.',
    staySummary:
      'The best Samcheok stays are simple shoreline overnights and scenic coast-road pauses that let the route remain spacious before Uljin takes over the longer quiet-coast logic.',
    foodSummary:
      'Food here should support coastal pacing rather than destination theatrics: seafood meals, easy breakfasts, and enough local flavor to keep the stop grounded.',
    nextLegSummary:
      'After Samcheok, the route should keep breathing into Uljin rather than feeling like it already needs a bigger city handoff.',
    accommodationNote:
      'Strongest stay-planning angle: one low-friction shoreline stay group and one more scenic coast-road stay read for travelers who want the east coast to unfold in chapters.',
    sections: [
      {
        title: 'Why Samcheok matters after Gangneung',
        body:
          'Samcheok keeps Gangneung from becoming the only convincing coast chapter. It gives the east side another stretch where the route feels scenic, spacious, and intentionally sea-led.',
      },
      {
        title: 'Why a smaller scenic city can still earn a night',
        body:
          'The route gets stronger when the coast has one more lower-pressure chapter before the long quiet shoreline of Uljin takes over.',
      },
      {
        title: 'How to use the stop well',
        body:
          'Use Samcheok for one scenic overnight, one sea-facing reset, or one slower meal-and-viewpoint chapter that keeps Route 7 from feeling rushed.',
      },
    ],
    decisions: [
      {
        title: 'Keep Samcheok for coastline spacing',
        bestFor: 'Drivers and riders who want the east coast to feel sequential rather than compressed.',
        why:
          'The city earns time when the route should unfold in chapters instead of jumping only between larger coastal anchors.',
      },
      {
        title: 'Use it as the scenic overnight before Uljin',
        bestFor: 'Travelers who want one softer coast stay before the longer quiet-coast section begins.',
        why:
          'Samcheok is strongest when it protects the route?셲 openness before the next chapter turns calmer and less dramatic.',
      },
    ],
    stayZones: [
      {
        title: 'Hold a shoreline stay',
        areaLabel: 'Sea-facing strip',
        bestFor: 'Simple coast overnights that keep the route visually maritime.',
        why:
          'This is the cleanest choice when the point is to sleep near the sea and keep the coast feeling continuous.',
      },
      {
        title: 'Lean into the scenic coast road',
        areaLabel: 'Cliff-and-road edge',
        bestFor: 'Travelers who want a slower scenic version of the overnight.',
        why:
          'This version makes the stop feel like part of the coastline itself rather than a generic room near the route.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Scenic continuation',
        title: 'Samcheok keeps the coast from turning into a shortcut',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2025-11-12%2014.02.53%20samcheok.jpg',
        alt: 'Samcheok coastal scene',
        body:
          'The city belongs when the east coast should keep unfolding instead of racing from one major label to the next.',
        sourceLabel: '2025-11-12 14.02.53 samcheok via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:2025-11-12_14.02.53_samcheok.jpg',
        licenseLabel: 'Wikimedia Commons',
      },
    ],
    points: [
      {
        id: 'samcheok-shoreline-stay',
        name: 'Shoreline stay strip',
        kind: 'stay',
        areaLabel: 'Sea-facing edge',
        coordinates: { lat: 37.4464, lng: 129.1637 },
        summary: 'A simple coast-facing overnight area for keeping the sea as the center of the chapter.',
        note: 'Best when the route should remain scenic and open rather than hurry into the next county.',
      },
      {
        id: 'samcheok-port-checkpoint',
        name: 'Port-and-cliff checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Scenic harbor edge',
        coordinates: { lat: 37.4469, lng: 129.1921 },
        summary: 'A useful orientation point for why Samcheok belongs as a visual continuation city.',
        note: 'This is where the east coast still feels varied and chaptered instead of generic.',
      },
      {
        id: 'samcheok-meal-line',
        name: 'Coast meal line',
        kind: 'food',
        areaLabel: 'Harbor-side streets',
        coordinates: { lat: 37.4452, lng: 129.1658 },
        summary: 'A practical seafood and breakfast corridor for turning the stop into a real route pause.',
        note: 'Use this for timing, local flavor, and a cleaner handoff south.',
      },
      {
        id: 'samcheok-scenic-reset',
        name: 'Open-coast reset edge',
        kind: 'recovery',
        areaLabel: 'Cliff-road side',
        coordinates: { lat: 37.4613, lng: 129.1854 },
        summary: 'A lighter scenic reset point that explains why one more coast chapter can still matter.',
        note: 'Useful when the point is emotional pacing rather than only distance covered.',
      },
      {
        id: 'samcheok-uljin-handoff',
        name: 'Uljin handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound Route 7',
        coordinates: { lat: 37.3014, lng: 129.2907 },
        summary: 'The line where Samcheok?셲 scenic chapter begins handing the route to Uljin?셲 longer quiet-coast logic.',
        note: 'This keeps the page pointed toward continuation rather than ending inside the city.',
      },
    ],
  },
  uljin: {
    slug: 'uljin',
    city: 'Uljin',
    mapTitle: 'Where the long east coast stays open instead of collapsing',
    mapIntro:
      'Uljin is a continuity map for the east coast. It matters when the route should keep breathing between bigger shoreline anchors instead of jumping only between headline cities.',
    mapCenter: { lat: 36.9931, lng: 129.4005 },
    supportSummary:
      'Uljin works because it preserves openness. It gives the east coast route room, continuity, and a quieter maritime chapter before the stronger flavor and city nodes return further south.',
    roleSummary:
      'This is the long-coast continuity node. Uljin prevents the shoreline route from feeling compressed, over-edited, or too dependent on only the most famous coastal anchors.',
    staySummary:
      'The best stays are sea-facing, simple, and low-friction. Uljin is valuable when the overnight protects the coast?셲 spaciousness instead of trying to become a resort performance.',
    foodSummary:
      'Food here belongs to the coast rhythm rather than a major destination claim. Fresh seafood, practical breakfasts, and calm timing matter more than spectacle.',
    nextLegSummary:
      'After Uljin, the route can sharpen again toward Yeongdeok and Pohang without losing the feeling of having traveled a long, believable coast instead of a sequence of named highlights.',
    accommodationNote:
      'Strongest stay-planning angle: simple shoreline stays and quiet coast-core overnights for slower east-coast users.',
    sections: [
      {
        title: 'Why Uljin belongs on the map',
        body:
          'Uljin matters because long routes need continuity, not just highlights. It keeps the east coast from becoming a list of only bigger, louder stops.',
      },
      {
        title: 'Why a quieter coast chapter helps',
        body:
          'The route gets stronger when one section of the shore is allowed to stay open and less programmed. Uljin is where that can happen.',
      },
      {
        title: 'How it hands off to stronger southern flavor',
        body:
          'After Uljin, places like Yeongdeok and Pohang can feel more distinct because the open coast chapter has already done the spacing work.',
      },
    ],
    decisions: [
      {
        title: 'Keep it if the coast should breathe',
        bestFor: 'Slower drivers and riders who want the east-sea line to feel spacious, calm, and convincingly traveled.',
        why:
          'Uljin helps the route feel inhabited and continuous rather than compressed into only the loudest stops.',
      },
      {
        title: 'Use it as a quiet reset between anchors',
        bestFor: 'Travelers who want one simpler shoreline night before Yeongdeok and Pohang start concentrating the coast again.',
        why:
          'Its value is not concentration. Its value is spacing, recovery, and keeping the maritime line believable.',
      },
    ],
    stayZones: [
      {
        title: 'Hold a simple shoreline stay',
        areaLabel: 'Sea-facing strip',
        bestFor: 'One-night coast continuity stays with the least itinerary friction.',
        why:
          'This is the cleanest way to let Uljin do its job without forcing too much itinerary weight or destination pressure onto it.',
      },
      {
        title: 'Use the coast-core support grid',
        areaLabel: 'Uljin core',
        bestFor: 'Practical stops with easier meals, resupply, and onward-movement logic.',
        why:
          'This version keeps the route usable while still preserving the long-coast chapter and its lower-pressure rhythm.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Open shoreline',
        title: 'Uljin keeps the coast broad and believable',
        image: '/images/routes/route-1/uljin/hero-generated-v1.png',
        alt: 'Editorial route image for Uljin coast continuity',
        body:
          'This is not the loudest east-coast stop, but it may be one of the most important for route shape because it keeps the shoreline from collapsing into only famous names.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/uljin/hero-generated-v1.png',
        licenseLabel: 'Project editorial asset',
      },
    ],
    points: [
      {
        id: 'uljin-shoreline-stay',
        name: 'Shoreline stay strip',
        kind: 'stay',
        areaLabel: 'Sea-facing edge',
        coordinates: { lat: 36.9905, lng: 129.4121 },
        summary: 'A simple coast-facing overnight zone for letting the route breathe.',
        note: 'Best for drivers and riders who want one quieter maritime night.',
      },
      {
        id: 'uljin-coast-meal',
        name: 'Coastal meal line',
        kind: 'food',
        areaLabel: 'Harbor-side streets',
        coordinates: { lat: 36.9916, lng: 129.4083 },
        summary: 'A practical seafood and breakfast corridor that supports the coast chapter well.',
        note: 'Use this zone for timing and freshness rather than destination dining drama.',
      },
      {
        id: 'uljin-coast-core',
        name: 'Coast-core support grid',
        kind: 'mobility',
        areaLabel: 'Town support core',
        coordinates: { lat: 36.9924, lng: 129.4042 },
        summary: 'A simple support pocket for resupply, check-in, coffee, and keeping the long coast chapter easy to use.',
        note: 'Useful when the route should stay open and calm without becoming under-supported.',
      },
      {
        id: 'uljin-open-coast',
        name: 'Open coast checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Long coast line',
        coordinates: { lat: 37.0181, lng: 129.4284 },
        summary: 'A visual and spatial argument for why Uljin belongs in the route at all.',
        note: 'This is where the east coast feels open enough to justify the detour.',
      },
      {
        id: 'uljin-yeongdeok-handoff',
        name: 'Yeongdeok handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound coast',
        coordinates: { lat: 36.8561, lng: 129.4208 },
        summary: 'The line where the open coast begins sharpening into the stronger flavor chapter further south.',
        note: 'This keeps Uljin framed as continuity, not climax.',
      },
      {
        id: 'uljin-morning-launch',
        name: 'Shoreline morning launch',
        kind: 'recovery',
        areaLabel: 'Sea-facing departure edge',
        coordinates: { lat: 36.9984, lng: 129.4158 },
        summary: 'A quieter launch point for early starts when the value of the stop is waking into the coast rather than only sleeping beside it.',
        note: 'This is where Uljin proves it can improve the next day through pace and space, not only through distance covered.',
      },
    ],
  },
  gyeongju: {
    slug: 'gyeongju',
    city: 'Gyeongju',
    mapTitle: 'Where history becomes the last major route chapter before Busan',
    mapIntro:
      'Gyeongju is a support map for choosing between heritage-heavy stays, lake-side resort calm, and the final handoff into Busan. It matters because this city can turn the end of Route 1 into a real chapter.',
    mapCenter: { lat: 35.8562, lng: 129.2247 },
    supportSummary:
      'Gyeongju works as the strongest heritage handoff before Busan. It gives the route historical gravity, high-quality overnight logic, and a final sense of authored travel before the finish.',
    roleSummary:
      'This is the historic handoff. Gyeongju turns the last major Route 1 city into memory, atmosphere, and cultural weight instead of pure transfer.',
    staySummary:
      'The heritage core is strongest when the city itself should be the point. Bomun-side stays work better when the route needs more rest, resort feel, or easier car logic.',
    foodSummary:
      'Food here helps the route slow into evening rather than merely refuel. The city is one of the clearest places on Route 1 to make dinner part of the stay logic.',
    nextLegSummary:
      'After Gyeongju the route no longer needs another big identity shift. Busan becomes an arrival, not an unresolved search.',
    accommodationNote:
      'Strongest stay-planning angle: heritage-core boutique stays and Bomun-lake resort hotels.',
    sections: [
      {
        title: 'Why Gyeongju changes the endgame',
        body:
          'Gyeongju matters because it lets the route finish with meaning instead of momentum alone. It is one of the last places on Route 1 where staying over can still deepen the trip materially.',
      },
      {
        title: 'Why there are two different good stays',
        body:
          'The city has two useful personalities. The heritage side is stronger for walkable atmosphere and memory, while Bomun is stronger for rest, car access, and a cleaner overnight rhythm.',
      },
      {
        title: 'How it hands off to Busan',
        body:
          'A good Gyeongju night makes Busan feel like a final coastal arrival rather than just the next item in the sequence. That is why the stop matters so much.',
      },
    ],
    decisions: [
      {
        title: 'Stay near the heritage core',
        bestFor: 'Walkable history, first-time Gyeongju nights, and travelers who want atmosphere first.',
        why:
          'This is the version that turns the city into a proper route chapter rather than a hotel base.',
      },
      {
        title: 'Sleep around Bomun',
        bestFor: 'Drivers, families, and travelers who want the stop to feel easier and more restorative.',
        why:
          'Bomun works when the route needs comfort and clean next-day movement without losing the Gyeongju chapter.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the heritage-side stay',
        areaLabel: 'Historic core',
        bestFor: 'Atmosphere-led nights.',
        why:
          'This is the strongest area when Gyeongju itself should be the memory that lingers.',
      },
      {
        title: 'Use the Bomun stay belt',
        areaLabel: 'Bomun Lake',
        bestFor: 'Resort calm and easier vehicle logistics.',
        why:
          'This side of the city turns the stop into a rest chapter without erasing its cultural weight.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Historic handoff',
        title: 'Gyeongju gives the final route chapter real weight',
        image: '/images/routes/route-1/gyeongju/support-1-generated-v1.png',
        alt: 'Editorial route image for Gyeongju historic handoff',
        body:
          'Used well, this city makes the end of Route 1 feel authored instead of simply completed.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/gyeongju/support-1-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Stay logic',
        title: 'The difference between heritage core and Bomun matters here',
        image: '/images/routes/route-1/gyeongju/support-2-generated-v1.png',
        alt: 'Editorial route image for Gyeongju stay logic',
        body:
          'Gyeongju is stronger when the user understands which style of overnight they are actually choosing.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/gyeongju/support-2-generated-v1.png',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Busan setup',
        title: 'A strong Gyeongju stop makes Busan arrive cleanly',
        image: '/images/routes/route-1/gyeongju/support-3-generated-v1.png',
        alt: 'Editorial route image for Gyeongju Busan setup',
        body:
          'This is the last major place on Route 1 where one overnight can still reshape the finish.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/gyeongju/support-3-generated-v1.png',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'gyeongju-heritage-stay',
        name: 'Heritage-core stay zone',
        kind: 'stay',
        areaLabel: 'Historic center',
        coordinates: { lat: 35.8383, lng: 129.2114 },
        summary: 'The strongest zone for a walkable, atmosphere-led Gyeongju night.',
        note: 'Best if the city itself should become the route memory before Busan.',
      },
      {
        id: 'gyeongju-bomun-stay',
        name: 'Bomun stay belt',
        kind: 'stay',
        areaLabel: 'Bomun Lake',
        coordinates: { lat: 35.8437, lng: 129.2864 },
        summary: 'A cleaner hotel-and-resort belt for easier overnight logistics.',
        note: 'Useful when the route needs more comfort and less inner-city friction.',
      },
      {
        id: 'gyeongju-evening-food',
        name: 'Evening meal corridor',
        kind: 'food',
        areaLabel: 'Historic center',
        coordinates: { lat: 35.8407, lng: 129.2119 },
        summary: 'A dinner zone where the city shifts the route from movement into stay.',
        note: 'This is where Gyeongju starts feeling like a real late-route chapter rather than a waypoint.',
      },
      {
        id: 'gyeongju-busan-handoff',
        name: 'Busan handoff line',
        kind: 'mobility',
        areaLabel: 'Southeast exit',
        coordinates: { lat: 35.7862, lng: 129.2876 },
        summary: 'The line where the historic chapter resolves into the final coastal arrival.',
        note: 'After this point, the route should feel finished enough to let Busan land on its own terms.',
      },
    ],
  },
};

export function getCitySupportProfile(citySlug: string): CitySupportProfile | null {
  return citySupportProfiles[citySlug.toLowerCase()] ?? null;
}


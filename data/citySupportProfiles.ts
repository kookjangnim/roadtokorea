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
          'For riders, Chungju is not just another inland city. Tangeumdae, the certification-center logic, and the move toward Suanbo make it one of the first places where recovery, route identity, and the next day\'s legs all intersect.',
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
          'Suanbo works because accommodation, baths, and recovery mood all line up with the next day\'s terrain demands.',
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
        channelLabel: 'YouTube reference',
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
          'A small but meaningful rider landmark that reinforces Chungju\'s role inside long inland cycling lines.',
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
        bestFor: 'Rail users, late arrivals, and travelers who want the cleanest next-morning movement toward Gangneung.',
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
  yeongwol: {
    slug: 'yeongwol',
    city: 'Yeongwol',
    mapTitle: 'Where Yeongwol turns the inland branch into a story',
    mapIntro:
      'Yeongwol is the emotional payoff of the short inland branch. Wonju gives the line a hinge, Jecheon gives it lake-and-mountain transition, and Yeongwol gives it Danjong, rivers, film attention, and preservation tension.',
    mapCenter: {
      lat: 37.1838,
      lng: 128.4617,
    },
    supportSummary:
      'Yeongwol works best as an emotional history stop. Cheongnyeongpo, Jangneung, Danjong Culture Festival, Donggang and Seogang scenery, Byeolmaro Observatory, and the 2026 Wang-gwa Saneun Namja film trend make it feel current without erasing the older sorrow.',
    roleSummary:
      'On the Wonju-Jecheon-Yeongwol short branch, Yeongwol is where the route stops being only scenic inland movement and becomes a story about exile, memory, river geography, and how pop culture can send people back into a real historical place.',
    staySummary:
      'Stay near the Yeongwol town core when the goal is Cheongnyeongpo, Jangneung, food, and easy movement. Push toward the river and observatory side when the overnight should feel more landscape-led and reflective.',
    foodSummary:
      'Food should support the heritage walk rather than dominate the page. Keep it local, practical, and slow enough for travelers who may be moving between Danjong sites, riverside views, and evening observatory plans.',
    nextLegSummary:
      'After Yeongwol, the branch can either loop back toward Jecheon or become a deeper Gangwon inland journey. The important thing is that Yeongwol should feel like the emotional high point, not just the final dot on a side route.',
    accommodationNote:
      'Strongest stay-planning angle: one town-core history stay group, one riverside landscape group, and one observatory-night group for travelers who want the branch to end under a darker sky.',
    sections: [
      {
        title: 'Why Yeongwol is more than a scenic detour',
        body:
          'Yeongwol carries the final chapter of King Danjong. Cheongnyeongpo was his exile place, Jangneung holds the royal tomb, and the surrounding river geography makes the history feel physically enclosed rather than abstract.',
      },
      {
        title: 'Why the film trend belongs here',
        body:
          'Wang-gwa Saneun Namja matters because it did not invent Yeongwol; it reactivated a story already embedded in the county. The trend gives modern travelers a reason to revisit Danjong sites, but the page should keep the real heritage in front.',
      },
      {
        title: 'How to write the crowding issue honestly',
        body:
          'A film boom can help a local city, but it can also pressure fragile heritage sites. Yeongwol content should mention respectful pacing, official guides, and preservation awareness so the trend does not turn into careless consumption.',
      },
      {
        title: 'Why Jecheon should sit before Yeongwol',
        body:
          'Jecheon gives the branch a natural lake-and-mountain threshold before the route lands in Yeongwol. That order makes the short route feel staged: hinge, terrain, memory.',
      },
      {
        title: 'Why rivers are part of the story',
        body:
          'Donggang, Seogang, Cheongnyeongpo, Seondol, and the Korean Peninsula-shaped terrain all make Yeongwol feel shaped by water and rock. The landscape is not background; it explains why the history lands so strongly.',
      },
      {
        title: 'Why the night sky should stay in the page',
        body:
          'Byeolmaro Observatory gives Yeongwol a present-day travel reason beyond Danjong. It lets the city shift from daytime heritage to nightscape, which is useful for a short branch that should justify an overnight.',
      },
    ],
    decisions: [
      {
        title: 'Follow the Danjong sites',
        bestFor: 'Travelers coming because of history, the film trend, or a desire to understand why Yeongwol feels emotionally heavy.',
        why:
          'Cheongnyeongpo and Jangneung are the core. They make the branch meaningful in a way scenery alone cannot.',
      },
      {
        title: 'Use Yeongwol as the branch climax',
        bestFor: 'Trips that want Wonju and Jecheon to build toward one stronger endpoint.',
        why:
          'The city gives the short branch a narrative finish: hinge in Wonju, mountain-lake transition in Jecheon, exile memory in Yeongwol.',
      },
      {
        title: 'Stay for the observatory night',
        bestFor: 'Slow travelers who want the day to move from heritage to river landscape and then to night-sky atmosphere.',
        why:
          'Byeolmaro makes Yeongwol more than a day-trip stop and gives the route a softer ending after the heavier Danjong story.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the town-core history stay',
        areaLabel: 'Yeongwol town / Jangneung side',
        bestFor: 'Danjong sites, practical food, and low-friction movement.',
        why:
          'This is the cleanest base when the page is built around Cheongnyeongpo, Jangneung, and the film-revival route.',
      },
      {
        title: 'Move toward river scenery',
        areaLabel: 'Donggang / Seogang side',
        bestFor: 'Travelers who want the branch to feel like landscape as much as history.',
        why:
          'The river side makes the exile geography easier to feel and gives the route a slower visual register.',
      },
      {
        title: 'Plan around the observatory',
        areaLabel: 'Byeolmaro side',
        bestFor: 'Overnight travelers, photographers, and anyone using Yeongwol as a reflective branch ending.',
        why:
          'The observatory gives the stop a reason to stay after the history sites close and turns the branch into a full day-to-night chapter.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Exile landscape',
        title: 'Cheongnyeongpo should feel beautiful and trapped at the same time',
        image: 'https://tong.visitkorea.or.kr/cms/resource/74/3375074_image2_1.JPG',
        alt: 'Official tourism image of Cheongnyeongpo in Yeongwol',
        body:
          'Cheongnyeongpo is the strongest visual argument for Yeongwol. Three sides of river and the enclosed terrain make Danjong history easier to understand without overexplaining it.',
        sourceLabel: 'Korea Tourism Organization data',
        sourceHref: 'https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=01e9d584-7dbd-4ff9-89e8-0066b9d81062',
        licenseLabel: 'KTO reference',
      },
      {
        eyebrow: 'Royal memory',
        title: 'Jangneung keeps the film trend anchored in actual history',
        image: 'https://tong.visitkorea.or.kr/cms/resource/78/3375078_image2_1.JPG',
        alt: 'Official tourism image associated with Yeongwol Danjong heritage',
        body:
          'The page needs the royal-tomb layer because film attention should point back to the real historical site rather than float as a pop-culture reference alone.',
        sourceLabel: 'Yeongwol County tourism reference',
        sourceHref: 'https://www.yw.go.kr/tour/index.do',
        licenseLabel: 'Official reference',
      },
      {
        eyebrow: 'Modern revival',
        title: 'The film wave is a current lens, not the whole city',
        image: 'https://tong.visitkorea.or.kr/cms/resource/74/3375074_image2_1.JPG',
        alt: 'Cheongnyeongpo landscape connected to the 2026 film-driven Yeongwol travel trend',
        body:
          'Wang-gwa Saneun Namja belongs on the page because it sent travelers back into an older story. The visual treatment should stay respectful, emphasizing place and memory over fandom alone.',
        sourceLabel: 'Hankyung trend report',
        sourceHref: 'https://www.hankyung.com/article/2026030867587',
        licenseLabel: 'Trend reference',
      },
      {
        eyebrow: 'River geography',
        title: 'Yeongwol needs water and stone to explain its mood',
        image: 'https://tong.visitkorea.or.kr/cms/resource/74/3375074_image2_1.JPG',
        alt: 'Yeongwol river landscape around Cheongnyeongpo',
        body:
          'The rivers are not decoration here. They give the exile story its physical grammar and help the short branch feel more remote than the map distance suggests.',
        sourceLabel: 'Yeongwol County English tourism',
        sourceHref: 'https://www.yw.go.kr/eng/selectBbsNttView.do?bbsNo=103&integrDeptCode=&key=1003&nttNo=817&pageIndex=2&searchCnd=all&searchCtgry=&searchKrwd=',
        licenseLabel: 'Official reference',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official county source',
        title: 'Cheongnyeongpo is the core exile site',
        image: 'https://tong.visitkorea.or.kr/cms/resource/74/3375074_image2_1.JPG',
        alt: 'Cheongnyeongpo in Yeongwol',
        body:
          'Yeongwol County describes Cheongnyeongpo as the place where King Danjong stayed after being deposed and exiled, surrounded on three sides by deep river and reachable by ferry.',
        sourceLabel: 'Yeongwol County English cultural properties',
        sourceHref: 'https://www.yw.go.kr/eng/selectBbsNttView.do?bbsNo=103&integrDeptCode=&key=1003&nttNo=817&pageIndex=2&searchCnd=all&searchCtgry=&searchKrwd=',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as the primary historical source for Cheongnyeongpo and Danjong exile geography.',
      },
      {
        eyebrow: 'Official festival source',
        title: 'Danjong Culture Festival keeps the memory public',
        image: 'https://tong.visitkorea.or.kr/cms/resource/78/3375078_image2_1.JPG',
        alt: 'Yeongwol Danjong heritage reference image',
        body:
          'Yeongwol County describes Danjong Culture Festival as a local cultural festival that sublimates the spirit of Danjong and loyal subjects, with 2026 events at Jangneung, Gwanpungheon, Donggang riverside, and Cheongnyeongpo.',
        sourceLabel: 'Yeongwol County Danjong Culture Festival',
        sourceHref: 'https://www.yw.go.kr/tour/contents.do?key=575',
        licenseLabel: 'Official reference',
        usageNote:
          'Use to connect Danjong history to present-day festival and community memory.',
      },
      {
        eyebrow: 'Official tourism source',
        title: 'Byeolmaro gives Yeongwol a night chapter',
        image: 'https://tong.visitkorea.or.kr/cms/resource/74/3375074_image2_1.JPG',
        alt: 'Yeongwol landscape reference for observatory travel',
        body:
          'Yeongwol County tourism describes Byeolmaro Observatory as located on Bongnaesan, where Donggang and Seogang meet, giving the city a present-day nightscape reason to stay.',
        sourceLabel: 'Yeongwol County tourism index',
        sourceHref: 'https://www.yw.go.kr/tour/index.do',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as the modern stay-extension layer alongside Danjong heritage.',
      },
      {
        eyebrow: 'Trend source',
        title: 'The film trend has already changed visitor behavior',
        image: 'https://tong.visitkorea.or.kr/cms/resource/74/3375074_image2_1.JPG',
        alt: 'Cheongnyeongpo landscape used as context for film-driven visitor growth',
        body:
          'Korean business press reported that Cheongnyeongpo and Jangneung visitor counts surged in March 2026 as Wang-gwa Saneun Namja became a major box-office event.',
        sourceLabel: 'Hankyung visitor trend report',
        sourceHref: 'https://www.hankyung.com/article/2026030867587',
        licenseLabel: 'News reference',
        usageNote:
          'Use as a time-sensitive trend source. Recheck before publishing refreshed copy because film and visitor-count figures change quickly.',
      },
    ],
    points: [
      {
        id: 'yeongwol-cheongnyeongpo',
        name: 'Cheongnyeongpo',
        kind: 'checkpoint',
        areaLabel: 'Danjong exile site',
        coordinates: { lat: 37.1726, lng: 128.4449 },
        summary:
          'The exile landscape that gives Yeongwol its emotional core and explains why the film trend lands here.',
        note:
          'Treat this as a respect-first heritage site, especially during high-traffic film-tourism periods.',
      },
      {
        id: 'yeongwol-jangneung',
        name: 'Jangneung Royal Tomb',
        kind: 'checkpoint',
        areaLabel: 'Royal memory',
        coordinates: { lat: 37.1834, lng: 128.4624 },
        summary:
          'The tomb site that keeps Danjong memory grounded in actual place rather than only screen emotion.',
        note:
          'Best paired with Cheongnyeongpo when the page needs one clear historical itinerary.',
      },
      {
        id: 'yeongwol-town-stay',
        name: 'Yeongwol town stay grid',
        kind: 'stay',
        areaLabel: 'Town core',
        coordinates: { lat: 37.1838, lng: 128.4617 },
        summary:
          'The easiest base for food, transit, Cheongnyeongpo, Jangneung, and practical movement around the county.',
        note:
          'Use this when the branch needs a stable overnight rather than a remote scenic stay.',
      },
      {
        id: 'yeongwol-byeolmaro',
        name: 'Byeolmaro Observatory',
        kind: 'recovery',
        areaLabel: 'Night-sky chapter',
        coordinates: { lat: 37.1976, lng: 128.4822 },
        summary:
          'The nightscape anchor that lets Yeongwol move beyond daytime heritage into an overnight-worthy stop.',
        note:
          'Weather and access matter here, so position it as a stay enhancer rather than a guaranteed payoff.',
      },
      {
        id: 'yeongwol-route-branch',
        name: 'Wonju-Jecheon-Yeongwol branch handoff',
        kind: 'mobility',
        areaLabel: 'Short branch logic',
        coordinates: { lat: 37.1623, lng: 128.3067 },
        summary:
          'The route concept that makes Yeongwol the emotional end of a compact inland branch instead of a disconnected side trip.',
        note:
          'This is the planning layer: Wonju as hinge, Jecheon as terrain threshold, Yeongwol as history and film revival.',
      },
    ],
  },
  gapyeong: {
    slug: 'gapyeong',
    city: 'Gapyeong',
    mapTitle: 'Where Route 3 first softens after Seoul',
    mapIntro:
      'Gapyeong is the first gentle release from Seoul on Route 3. It should feel like river, island, rail, camping, and weekend-leisure air before Chuncheon gives the route a fuller city chapter.',
    mapCenter: { lat: 37.8315, lng: 127.5107 },
    supportSummary:
      'Gapyeong works as the soft opening of Route 3. Jarasum, Nami Island access, Bukhangang River scenery, Gapyeong Rail Park, camping, pensions, and easy Seoul access make it a light but useful first chapter before Chuncheon.',
    roleSummary:
      'On Route 3, Gapyeong should not carry the whole route. It loosens the Seoul departure and hands the journey to Chuncheon, where the northern line gets food, lake-city rhythm, and stronger overnight logic.',
    staySummary:
      'Stay in Gapyeong when the first day should be slow, romantic, family-friendly, or river-led. Skip the overnight when Chuncheon needs to be the first serious city anchor.',
    foodSummary:
      'Food is secondary here. Keep the page focused on river cafes, pension meals, simple station food, camping supplies, and enough comfort before Chuncheon or Yanggu.',
    nextLegSummary:
      'After Gapyeong, Chuncheon should feel like the route becomes a real city chapter. Gapyeong opens the scenery; Chuncheon adds dinner, transit, and staying power.',
    accommodationNote:
      'Strongest stay-planning angle: river pensions for slow travelers, Jarasum or camping-side stays for leisure, and station-side practicality for travelers continuing to Chuncheon.',
    sections: [
      { title: 'Why Gapyeong is the soft opening', body: 'Gapyeong is useful because it changes the mood quickly after Seoul. River, island, and rail-bike movement make the route feel like a trip before it becomes a deeper Gangwon story.' },
      { title: 'Why Jarasum matters', body: 'Jarasum gives Gapyeong more than Nami Island recognition. Camping, eco-park use, and jazz-festival identity make the county feel active and seasonal.' },
      { title: 'How to keep it from competing with Chuncheon', body: 'Gapyeong should stay light. If the traveler wants dinner, lake-city comfort, and a full overnight, Chuncheon should take that role.' },
    ],
    decisions: [
      { title: 'Use Gapyeong as a first breath', bestFor: 'Travelers leaving Seoul who want the route to begin gently.', why: 'It provides river views, islands, and low-friction leisure before the route asks for deeper choices.' },
      { title: 'Stay only when the leisure mood matters', bestFor: 'Couples, families, camping trips, and slow starts.', why: 'Gapyeong lodging makes sense when the night itself is part of the river escape.' },
      { title: 'Move on to Chuncheon for city weight', bestFor: 'Travelers who want food, station convenience, and stronger city rhythm.', why: 'Chuncheon carries the first serious overnight better.' },
    ],
    stayZones: [
      { title: 'Stay near Jarasum', areaLabel: 'Island and camping', bestFor: 'Camping, festival, river walks, and soft first-day leisure.', why: 'This makes Gapyeong feel like a river-island stop rather than only a transfer.' },
      { title: 'Stay near Nami Island access', areaLabel: 'Island gateway', bestFor: 'Families, couples, first-time visitors, and Nami-focused trips.', why: 'It captures the best-known international search intent without letting it swallow the route.' },
      { title: 'Stay near Gapyeong Station', areaLabel: 'Transit base', bestFor: 'Travelers continuing to Chuncheon or using public transport.', why: 'This keeps the stop light and practical.' },
    ],
    visuals: [
      { eyebrow: 'River opening', title: 'Bukhangang makes the Seoul departure visible', image: '/images/clipartkorea/gapyeong/tc00240064479-jaraseom-namiseom-aerial.jpg', alt: 'Aerial view of Jarasum, the Bukhangang River, and Gapyeong', body: 'The aerial view makes Gapyeong feel like water, islands, and a gentle escape from Seoul rather than a generic inland stop.', sourceLabel: 'ClipartKorea tc00240064479', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240064479', licenseLabel: 'Licensed JPG (WEB)' },
      { eyebrow: 'Island leisure', title: 'Nami Island access keeps the river in motion', image: '/images/clipartkorea/gapyeong/tc00240001915-namiseom-ferry.jpg', alt: 'Ferry crossing the Bukhangang River near Nami Island in autumn', body: 'The ferry makes Gapyeong\'s best-known island access feel like part of the wider Bukhangang landscape rather than a detached attraction.', sourceLabel: 'ClipartKorea tc00240001915', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240001915', licenseLabel: 'Licensed JPG (WEB)' },
      { eyebrow: 'Route handoff', title: 'The Gyeongchun Line carries the route toward Chuncheon', image: '/images/clipartkorea/gapyeong/cm27004158-gyeongchun-train.jpg', alt: 'Gyeongchun Line train crossing a river bridge in Gapyeong', body: 'Rail movement gives the page a practical handoff: Gapyeong opens the scenery, then Chuncheon adds city rhythm, dinner, and overnight depth.', sourceLabel: 'ClipartKorea cm27004158', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=cm27004158', licenseLabel: 'Licensed JPG (WEB)' },
      { eyebrow: 'Colorful stay cue', title: 'Petit France adds a village-scale detour', image: '/images/clipartkorea/gapyeong/tc00240110390-petit-france.jpg', alt: 'Petit France village in Gapyeong', body: 'The compact hillside village gives Gapyeong a human-scale attraction alongside the river and island landscape, useful for couples and family itineraries.', sourceLabel: 'ClipartKorea tc00240110390', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240110390', licenseLabel: 'Licensed JPG (WEB)' },
      { eyebrow: 'Mountain option', title: 'Unaksan keeps Gapyeong from feeling one-note', image: '/images/clipartkorea/gapyeong/cm270021119-unaksan-autumn.jpg', alt: 'Autumn mountain scenery at Unaksan near Gapyeong', body: 'Unaksan widens the visual story beyond islands and leisure: travelers can add a mountain day when the route needs a stronger seasonal outdoors option.', sourceLabel: 'ClipartKorea cm270021119', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=cm270021119', licenseLabel: 'Licensed JPG (WEB)' },
    ],
    officialReferences: [
      { eyebrow: 'Official tourism source', title: 'Jarasum is a camping and festival island', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nami%20Island%2C%20Korea.jpg', alt: 'Jarasum reference image', body: 'VisitKorea frames Jarasum as a multi-island leisure area with camping and Jarasum International Jazz Festival identity.', sourceLabel: 'VisitKorea Jara Island', sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=85091', licenseLabel: 'Official reference', usageNote: 'Use for Gapyeong seasonal and leisure identity.' },
      { eyebrow: 'Official tourism source', title: 'Gapyeong Rail Park turns the old rail line into leisure', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nami%20Island%2C%20Korea.jpg', alt: 'Gapyeong Rail Park reference', body: 'VisitKorea describes a rail-bike route through Gapyeongcheon, Bukhangang Bridge, and tree tunnel scenery.', sourceLabel: 'VisitKorea Gapyeong Rail Park', sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=69675', licenseLabel: 'Official reference', usageNote: 'Use for rail and river movement identity.' },
      { eyebrow: 'County source', title: 'Jarasum Jazz gives Gapyeong a cultural season', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nami%20Island%2C%20Korea.jpg', alt: 'Jarasum Jazz Festival reference', body: 'Gapyeong County describes Jarasum International Jazz Festival as a mid-October event with performances, workshops, and festival programming.', sourceLabel: 'Gapyeong County English site', sourceHref: 'https://www.gp.go.kr/eng/contents.do?key=909', licenseLabel: 'Official reference', usageNote: 'Use for seasonal cultural positioning.' },
    ],
    points: [
      { id: 'gapyeong-jarasum', name: 'Jarasum Island', kind: 'recovery', areaLabel: 'River island', coordinates: { lat: 37.8198, lng: 127.5267 }, summary: 'The camping, festival, and river-island anchor that gives Gapyeong seasonal depth.', note: 'Use this when Gapyeong should be more than Nami access.' },
      { id: 'gapyeong-nami-access', name: 'Nami Island access', kind: 'checkpoint', areaLabel: 'Island gateway', coordinates: { lat: 37.791, lng: 127.525 }, summary: 'The internationally recognizable hook that brings many travelers into Gapyeong searches.', note: 'Keep it useful but do not let it replace Route 3 logic.' },
      { id: 'gapyeong-rail-park', name: 'Gapyeong Rail Park', kind: 'mobility', areaLabel: 'Rail leisure', coordinates: { lat: 37.8296, lng: 127.5156 }, summary: 'A light movement activity that turns old rail and river scenery into a route-friendly stop.', note: 'Good for families, couples, and soft starts from Seoul.' },
    ],
  },
  chuncheon: {
    slug: 'chuncheon',
    city: 'Chuncheon',
    mapTitle: 'Where Chuncheon gives Route 3 its first real city rhythm',
    mapIntro:
      'Chuncheon should not be treated as a light day trip once it enters Route 3. It is the first city after Seoul and Gapyeong where lake scenery, food identity, transit practicality, and overnight pacing can all hold the journey before Yanggu, Inje, and Sokcho.',
    mapCenter: {
      lat: 37.8813,
      lng: 127.7298,
    },
    supportSummary:
      'Chuncheon works best as Route 3\'s first full city anchor. Soyanggang, Uiamho, Samaksan, dakgalbi, makguksu, Myeongdong Dakgalbi Street, and a manageable city core give English-speaking travelers a clear reason to stop before the route turns quieter toward Yanggu and more mountainous toward Inje.',
    roleSummary:
      'On Route 3, Chuncheon changes the trip from Seoul-side leisure into a real Gangwon journey. Gapyeong softens the departure, but Chuncheon gives the route food, lake culture, public-transport logic, and a credible first overnight.',
    staySummary:
      'Stay in Chuncheon when the traveler wants the northern route to begin without exhaustion. A city-core night makes dinner easy, a lake-side stay makes the trip feel scenic, and a Samaksan or Uiamho-facing plan gives the next morning a stronger sense of place.',
    foodSummary:
      'Chuncheon food should be treated as route infrastructure, not decoration. Dakgalbi, makguksu, and the Myeongdong food street give the stop a reason to happen at dinner time, which naturally supports overnight intent.',
    nextLegSummary:
      'After Chuncheon, the route should become quieter and more northern. Yanggu adds borderland and Korean War memory, Inje becomes the Seoraksan pass decision, and Sokcho arrives better when Chuncheon has already carried the city-and-food chapter.',
    accommodationNote:
      'Strongest stay-planning angle: one Myeongdong or station-side city stay for food and transit, one Uiamho or Soyanggang lake-view stay for slower travelers, and one west/south Chuncheon stay for drivers who want an easy morning exit.',
    sections: [
      {
        title: 'Why Chuncheon cannot be skipped lightly',
        body:
          'Chuncheon is the first Route 3 city that can stand on its own. It has enough food, water, urban rhythm, and transport logic to make the traveler feel they have entered Gangwon rather than only passed through a scenic corridor.',
      },
      {
        title: 'Why food belongs at the center',
        body:
          'Dakgalbi and makguksu are not throwaway food keywords here. They are the reason Chuncheon naturally fits dinner, which makes the overnight decision feel practical instead of forced.',
      },
      {
        title: 'Why lake city is the right visual identity',
        body:
          'Soyanggang, Uiamho, and lake-facing leisure keep Chuncheon distinct from a generic city stop. Water is what makes the route soften before it becomes borderland and mountain road.',
      },
      {
        title: 'Why Samaksan changes the scale',
        body:
          'Samaksan Mountain Lake Cable Car lets the page show Chuncheon from above: city, lake, and mountain in one visual argument. That is stronger for English-speaking travelers than only naming restaurants.',
      },
      {
        title: 'How to connect Chuncheon to Yanggu',
        body:
          'The next leg should feel like a tonal change. Chuncheon is social and lakeside; Yanggu becomes quiet, historical, and border-adjacent. That contrast makes Route 3 feel authored.',
      },
      {
        title: 'Why Sokcho is better when Chuncheon is included',
        body:
          'If Sokcho carries every coastal and mountain desire alone, Route 3 becomes too thin. Chuncheon gives the opening act enough weight so the final sea arrival can feel earned.',
      },
    ],
    decisions: [
      {
        title: 'Use Chuncheon as the first overnight',
        bestFor: 'Travelers leaving Seoul late, first-time Gangwon travelers, and people who want Route 3 to begin with food and comfort.',
        why:
          'This keeps the first day humane. Dinner, an easy hotel, lake air, and a clean next morning make the route feel composed.',
      },
      {
        title: 'Use Chuncheon as the food anchor',
        bestFor: 'Travelers who care about dakgalbi, makguksu, markets, and city texture more than only mountain views.',
        why:
          'Route 3 needs one strong food city before the northern landscape gets quieter. Chuncheon does that job better than any other early stop.',
      },
      {
        title: 'Use Chuncheon as the public-transit anchor',
        bestFor: 'Travelers who do not drive but still want a meaningful northern route before Sokcho.',
        why:
          'Chuncheon is the easiest Route 3 city to understand by train or bus from Seoul, so it keeps the route usable beyond self-driving itineraries.',
      },
    ],
    stayZones: [
      {
        title: 'Stay near Myeongdong and the station',
        areaLabel: 'Food and transit core',
        bestFor: 'Dakgalbi dinner, simple transit, first-night comfort, and travelers arriving from Seoul without a car.',
        why:
          'This is the cleanest practical base because the city stop becomes food, sleep, and an easy morning restart.',
      },
      {
        title: 'Stay near Soyanggang or Uiamho',
        areaLabel: 'Lake-side Chuncheon',
        bestFor: 'Slow travelers, couples, photo-led trips, and anyone who wants Chuncheon to feel like a water city.',
        why:
          'The lake-side stay makes the city visually memorable instead of only functional.',
      },
      {
        title: 'Stay near Samaksan or the west side',
        areaLabel: 'Mountain-lake exit',
        bestFor: 'Drivers who want Samaksan, cable-car views, or a quieter start before continuing north and east.',
        why:
          'This stay pattern makes the next leg feel like it begins from lake and mountain rather than from traffic.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Lake city',
        title: 'Soyanggang makes Chuncheon feel like arrival, not transfer',
        image: '/images/clipartkorea/chuncheon/tc00240003686-soyang-river-uiam-lake.jpg',
        alt: 'Soyang River and Uiam Lake bridge landscape in Chuncheon',
        body:
          'The river image matters because Chuncheon needs to read as water, city, and pause. Soyanggang gives Route 3 its first visual stop after the Seoul-side departure.',
        sourceLabel: 'ClipartKorea tc00240003686',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240003686',
        licenseLabel: 'Licensed JPG (WEB)',
      },
      {
        eyebrow: 'Food anchor',
        title: 'Dakgalbi makes the overnight feel natural',
        image: 'https://tong.visitkorea.or.kr/cms/resource/43/3578143_image2_1.jpg',
        alt: 'Official tourism image for Chuncheon Myeongdong Dakgalbi Street',
        body:
          'Food is the conversion point. When travelers understand Chuncheon as dakgalbi and makguksu territory, staying the night feels like a reward rather than a delay.',
        sourceLabel: 'VisitKorea Chuncheon Myeongdong Dakgalbi Street',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=108005',
        licenseLabel: 'Official reference',
      },
      {
        eyebrow: 'Lake and mountain',
        title: 'Samaksan gives Chuncheon the route-scale view',
        image: '/images/clipartkorea/chuncheon/cm270031335-soyanggang-dam.jpg',
        alt: 'Soyanggang Dam and lake landscape in Chuncheon',
        body:
          'The cable car lets the city become a landscape argument: lake below, mountains around, and the route preparing to leave the easy city chapter.',
        sourceLabel: 'ClipartKorea cm270031335',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=cm270031335',
        licenseLabel: 'Licensed JPG (WEB)',
      },
      {
        eyebrow: 'Sunrise water',
        title: 'Soyanggang at first light makes the overnight tangible',
        image: '/images/clipartkorea/chuncheon/tc00240008606-soyanggang-maiden-sunrise.jpg',
        alt: 'Sunrise over Soyanggang in Chuncheon',
        body:
          'A quieter sunrise frame gives the city a reason to be experienced before breakfast, not only visited for one meal and left.',
        sourceLabel: 'ClipartKorea tc00240008606',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240008606',
        licenseLabel: 'Licensed JPG (WEB)',
      },
      {
        eyebrow: 'City base',
        title: 'The Chuncheon skyline keeps the route practical',
        image: '/images/clipartkorea/chuncheon/tc00240031018-chuncheon-cityscape.jpg',
        alt: 'Chuncheon cityscape framed by surrounding mountains',
        body:
          'The city view balances the lake imagery with a clear overnight base: restaurants, stations, and a real urban reset before Yanggu.',
        sourceLabel: 'ClipartKorea tc00240031018',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240031018',
        licenseLabel: 'Licensed JPG (WEB)',
      },
      {
        eyebrow: 'Lakeside pace',
        title: 'Uiamho cycling turns scenery into an activity',
        image: '/images/clipartkorea/chuncheon/tc00240029873-uiamho-cycling.jpg',
        alt: 'Cycling along Uiamho Lake in Chuncheon',
        body:
          'The cycling scene gives travelers a low-friction way to use Chuncheon: move along the water, then return to the food-and-transit core.',
        sourceLabel: 'ClipartKorea tc00240029873',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240029873',
        licenseLabel: 'Licensed JPG (WEB)',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official tourism source',
        title: 'Soyanggang Skywalk anchors Chuncheon as a water city',
        image: 'https://tong.visitkorea.or.kr/cms/resource/92/2392892_image2_1.jpg',
        alt: 'Soyanggang Skywalk reference image',
        body:
          'VisitKorea describes Soyanggang Skywalk as extending over the river, with a long transparent glass-floor section, an observatory, and panoramic sunset views.',
        sourceLabel: 'VisitKorea Soyanggang Skywalk',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=68510',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as the core water-city and lake-arrival source for Chuncheon.',
      },
      {
        eyebrow: 'Official tourism source',
        title: 'Myeongdong Dakgalbi Street gives Chuncheon food gravity',
        image: 'https://tong.visitkorea.or.kr/cms/resource/43/3578143_image2_1.jpg',
        alt: 'Chuncheon dakgalbi street reference image',
        body:
          'VisitKorea frames the alley as Chuncheon\'s main dakgalbi street and explains the dish\'s history, popularity, and pairing with Chuncheon buckwheat noodles.',
        sourceLabel: 'VisitKorea Chuncheon Myeongdong Dakgalbi Street',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=108005',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as the main source for Chuncheon dakgalbi, makguksu, and dinner-led overnight intent.',
      },
      {
        eyebrow: 'Official tourism source',
        title: 'Samaksan cable car proves the lake-and-mountain scale',
        image: 'https://tong.visitkorea.or.kr/cms/resource/00/3578100_image2_1.jpg',
        alt: 'Samaksan Mountain Lake Cable Car reference image',
        body:
          'VisitKorea describes the Samaksan Mountain Lake Cable Car as crossing Uiamho Lake toward Samaksan Mountain, with crystal cabins and views over Chuncheon.',
        sourceLabel: 'VisitKorea Chuncheon Samaksan Mountain Lake Cable Car',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=112537',
        licenseLabel: 'Official reference',
        usageNote:
          'Use to support Chuncheon as more than a food stop: a city where lake, mountain, and route view meet.',
      },
    ],
    points: [
      {
        id: 'chuncheon-myeongdong',
        name: 'Chuncheon Myeongdong Dakgalbi Street',
        kind: 'food',
        areaLabel: 'Food core',
        coordinates: { lat: 37.8797, lng: 127.7287 },
        summary:
          'The strongest dinner anchor for turning Chuncheon from a pass-through city into a natural overnight.',
        note:
          'Use this when the page needs immediate traveler intent: eat, walk, sleep, and restart cleanly.',
      },
      {
        id: 'soyanggang-skywalk',
        name: 'Soyanggang Skywalk',
        kind: 'checkpoint',
        areaLabel: 'River view',
        coordinates: { lat: 37.8942, lng: 127.7244 },
        summary:
          'The easy visual proof that Chuncheon is a river-and-lake city, not just a food stop.',
        note:
          'Best for first-time visitors who need one simple image of why Chuncheon belongs on Route 3.',
      },
      {
        id: 'samaksan-cable-car',
        name: 'Samaksan Mountain Lake Cable Car',
        kind: 'recovery',
        areaLabel: 'Lake and mountain',
        coordinates: { lat: 37.8614, lng: 127.6896 },
        summary:
          'The elevated view that puts Uiamho, the city, and surrounding mountains into one route-scale frame.',
        note:
          'Use when the page needs to make Chuncheon feel scenic enough for a stay, not only dinner.',
      },
      {
        id: 'chuncheon-station-core',
        name: 'Chuncheon station and city core',
        kind: 'stay',
        areaLabel: 'Transit base',
        coordinates: { lat: 37.8853, lng: 127.7177 },
        summary:
          'The practical base for train arrivals, hotel access, food, and a low-friction next morning.',
        note:
          'Use this for non-driving travelers and Seoul-to-Chuncheon public transport versions of Route 3.',
      },
      {
        id: 'chuncheon-yanggu-handoff',
        name: 'Chuncheon to Yanggu handoff',
        kind: 'mobility',
        areaLabel: 'Northern route turn',
        coordinates: { lat: 38.0032, lng: 127.8658 },
        summary:
          'The moment Route 3 leaves lake-city comfort and turns toward quieter borderland country.',
        note:
          'This is the planning point that keeps Chuncheon connected to the deeper Route 3 story.',
      },
    ],
  },
  yanggu: {
    slug: 'yanggu',
    city: 'Yanggu',
    mapTitle: 'Where Route 3 turns quiet, northern, and serious',
    mapIntro:
      'Yanggu is the tonal turn on Route 3. After Chuncheon gives the journey food and lake-city comfort, Yanggu brings Punch Bowl terrain, Korean War memory, DMZ-adjacent ecology, and the silence that makes Inje and Sokcho feel earned.',
    mapCenter: { lat: 38.1101, lng: 127.9895 },
    supportSummary:
      'Yanggu works best as the hidden differentiator on Route 3. Punch Bowl, Korean War memory, DMZ geography, highland basin scenery, and quiet local travel keep the route from becoming only a pretty way to reach Sokcho.',
    roleSummary:
      'On Route 3, Yanggu is where the route leaves the easy lake-city mood and begins to carry northern memory. It prepares the traveler emotionally and geographically before Inje chooses the Seoraksan pass.',
    staySummary:
      'Stay in Yanggu only when the route should slow into borderland silence. Otherwise, use it as a meaningful day chapter between Chuncheon and Inje.',
    foodSummary:
      'Food should be local and modest: simple meals, market stops, mountain-town cafes, and enough fuel before the road turns toward Inje.',
    nextLegSummary:
      'After Yanggu, Inje becomes more meaningful because the route has already entered serious northern terrain. The transition should feel like memory turning into mountain threshold.',
    accommodationNote:
      'Strongest stay-planning angle: quiet town stays for thoughtful travelers, Punch Bowl-area planning for landscape memory, and practical onward pacing toward Inje.',
    sections: [
      { title: 'Why Yanggu changes the mood', body: 'Yanggu gives Route 3 silence and gravity. Without it, the line risks becoming a pleasant but thinner path from lake country to Sokcho.' },
      { title: 'Why Punch Bowl matters', body: 'Punch Bowl is both landscape and memory: a highland basin, Korean War battlefield context, DMZ-adjacent ecology, and a visual reason the route feels northern.' },
      { title: 'How to keep the tone respectful', body: 'The page should explain war memory and DMZ geography without turning into a military article. The travel value is quiet attention, not spectacle.' },
    ],
    decisions: [
      { title: 'Keep Yanggu for northern gravity', bestFor: 'Travelers who want Route 3 to feel different from the faster eastbound routes.', why: 'It adds Punch Bowl, Korean War memory, and DMZ-adjacent landscape before Inje.' },
      { title: 'Use it as a day chapter', bestFor: 'Travelers staying in Chuncheon or Inje but wanting a meaningful stop between them.', why: 'Yanggu does not always need a night, but it deserves a clear chapter.' },
      { title: 'Stay when quiet is the point', bestFor: 'Slow travelers, history-minded visitors, and drivers who want the route to breathe.', why: 'A night here changes the emotional weight of the next leg.' },
    ],
    stayZones: [
      { title: 'Stay in Yanggu town', areaLabel: 'Practical base', bestFor: 'Simple food, lodging, and a quiet restart toward Inje.', why: 'This is the least complicated way to keep Yanggu in the route.' },
      { title: 'Stay near Punch Bowl access', areaLabel: 'Highland memory', bestFor: 'Travelers prioritizing Punch Bowl, DMZ ecology, and landscape reading.', why: 'This makes the stop more specific and less like a generic town night.' },
      { title: 'Use Yanggu as a pause', areaLabel: 'Day chapter', bestFor: 'Chuncheon-to-Inje pacing without committing to an overnight.', why: 'This keeps the route efficient while preserving its northern story.' },
    ],
    visuals: [
      { eyebrow: 'Borderland terrain', title: 'Punch Bowl gives Yanggu its shape', image: '/images/clipartkorea/yanggu/tc00240007625-yanggu-basin.jpg', alt: 'Punch Bowl highland basin in Yanggu', body: 'The basin image is central because Yanggu is a landscape argument as much as a stop.', sourceLabel: 'ClipartKorea tc00240007625', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240007625', licenseLabel: 'Licensed JPG (WEB)' },
      { eyebrow: 'Korean War memory', title: 'Yanggu should stay quiet and serious', image: '/images/clipartkorea/yanggu/tc00240118626-punchbowl-village.jpg', alt: 'Punch Bowl village and highland fields in Yanggu', body: 'The village-and-basin view gives the page a grounded way to discuss war memory without turning the route into a military checklist.', sourceLabel: 'ClipartKorea tc00240118626', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240118626', licenseLabel: 'Licensed JPG (WEB)' },
      { eyebrow: 'Lake crossing', title: 'Paroho keeps the northern water story visible', image: '/images/clipartkorea/yanggu/cm28002652-paroho-bridge.jpg', alt: 'Bridge crossing Paroho Lake near Yanggu', body: 'The bridge over Paroho adds a present-day travel cue: water, forest, and the long northern road still belong in the same chapter.', sourceLabel: 'ClipartKorea cm28002652', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=cm28002652', licenseLabel: 'Licensed JPG (WEB)' },
      { eyebrow: 'Route turn', title: 'Dutaeyeon prepares the road for Inje', image: '/images/clipartkorea/yanggu/tc00240036469-dutaeyeon-autumn.jpg', alt: 'Autumn gorge and stream at Dutaeyeon near Yanggu', body: 'Dutaeyeon adds the route-scale handoff: Chuncheon comfort is behind the traveler and the quieter mountain threshold is ahead.', sourceLabel: 'ClipartKorea tc00240036469', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240036469', licenseLabel: 'Licensed JPG (WEB)' },
      { eyebrow: 'Highland season', title: 'Siberian aster makes the quiet outdoors tangible', image: '/images/clipartkorea/yanggu/tc00240030297-siberian-aster.jpg', alt: 'Siberian aster flowers on a Yanggu mountain ridge', body: 'A close seasonal frame gives Yanggu a softer present-tense detail alongside the basin, bridge, and war-memory landscape.', sourceLabel: 'ClipartKorea tc00240030297', sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240030297', licenseLabel: 'Licensed JPG (WEB)' },
    ],
    officialReferences: [
      { eyebrow: 'Official tourism source', title: 'Punch Bowl is Yanggu’s core landscape and memory source', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Punchbowl%20Korea.jpg', alt: 'Yanggu Punch Bowl reference', body: 'VisitKorea describes Punch Bowl as a highland basin inside the Civilian Access Control Line and a former Korean War battlefield near Daeamsan.', sourceLabel: 'VisitKorea Yanggu Punch Bowl Village', sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=81341', licenseLabel: 'Official reference', usageNote: 'Use as the core source for Yanggu terrain, Korean War memory, and DMZ-adjacent ecology.' },
      { eyebrow: 'County tourism source', title: 'Yanggu tourism keeps the local route context grounded', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Punchbowl%20Korea.jpg', alt: 'Yanggu county tourism reference', body: 'Yanggu county tourism references support the local museum, ecological, and travel-planning layer around the county.', sourceLabel: 'Yanggu Tourism', sourceHref: 'https://www.ygtour.kr/Home/index', licenseLabel: 'Official reference', usageNote: 'Use for future official local image and detail replacement.' },
      { eyebrow: 'Route source', title: 'Yanggu connects the lake city and Seorak threshold', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Punchbowl%20Korea.jpg', alt: 'Yanggu route handoff reference', body: 'The route source role is editorial: Yanggu makes the move from Chuncheon to Inje feel like a northern crossing, not a shortcut.', sourceLabel: 'Route editorial source', sourceHref: '/route-3', licenseLabel: 'Internal', usageNote: 'Use for route logic, not external factual claims.' },
    ],
    points: [
      { id: 'yanggu-town-core', name: 'Yanggu town core', kind: 'stay', areaLabel: 'Practical base', coordinates: { lat: 38.1101, lng: 127.9895 }, summary: 'The simplest lodging and food base before the road turns toward Inje.', note: 'Use for practical pacing rather than spectacle.' },
      { id: 'yanggu-punch-bowl', name: 'Punch Bowl area', kind: 'checkpoint', areaLabel: 'Highland basin', coordinates: { lat: 38.2884, lng: 128.131 }, summary: 'The landscape and memory anchor that gives Yanggu its Route 3 weight.', note: 'Access and security context should be checked before publication.' },
      { id: 'yanggu-inje-handoff', name: 'Yanggu to Inje handoff', kind: 'mobility', areaLabel: 'Northern route', coordinates: { lat: 38.164, lng: 128.072 }, summary: 'The transition from borderland memory into Seoraksan pass planning.', note: 'This is the route reason Yanggu stays in the line.' },
    ],
  },
  inje: {
    slug: 'inje',
    city: 'Inje',
    mapTitle: 'Where Inje decides how Route 3 sees Seoraksan',
    mapIntro:
      'Inje is the Route 3 hinge that should never be flattened into a generic mountain stop. This is where the traveler chooses Jinburyeong, Hangyeryeong, or Misiryeong before Sokcho and the East Sea arrive.',
    mapCenter: {
      lat: 38.0695,
      lng: 128.1707,
    },
    supportSummary:
      'Inje works best as a Seorak decision city. Naerincheon rafting and valley travel give it a current outdoor identity, while the surrounding mountain roads make it the place where Route 3 chooses its final view logic: Jinburyeong, Hangyeryeong, or Misiryeong.',
    roleSummary:
      'On Route 3, Inje is the structural decision point. Yanggu brings borderland memory, but Inje turns that northern story into an actual mountain crossing before Sokcho releases the route into sea air.',
    staySummary:
      'Stay in or near Inje when the pass should be chosen calmly rather than improvised late in the day. A practical town stay works for weather checks, while a valley-side stay makes the route feel more outdoors-led.',
    foodSummary:
      'Food here should be practical and restorative: a warm meal, coffee, rafting-base food, or simple dinner before the pass matters more than destination dining. The point is to leave steady for the chosen Seorak approach.',
    nextLegSummary:
      'After Inje, the route splits into personality: Jinburyeong gives the northern Goseong handoff, Hangyeryeong gives the most dramatic Seoraksan mood, and Misiryeong gives the cleanest practical pass-to-Sokcho move.',
    accommodationNote:
      'Strongest stay-planning angle: one town-core weather-and-food stay group, one Naerincheon outdoor stay group, and one pre-pass rest pattern for travelers choosing the final Seorak approach the next morning.',
    sections: [
      {
        title: 'Why Inje is the Route 3 hinge',
        body:
          'Inje is the last inland place where Route 3 can still choose its mountain logic. After this point, the road stops being only a northern journey and becomes a specific Seoraksan crossing.',
      },
      {
        title: 'Why the three passes should stay separate',
        body:
          'Jinburyeong, Hangyeryeong, and Misiryeong are not interchangeable. Jinburyeong pulls the route north through Goseong, Hangyeryeong gives a stronger classic Seorak-view drama, and Misiryeong keeps the cleanest handoff into Sokcho.',
      },
      {
        title: 'Why Naerincheon matters now',
        body:
          'Inje is not only a pass prelude. Naerincheon rafting, river sports, camping, valleys, and mountain travel give the county a present-day outdoor identity that makes the stop feel active, seasonal, and useful.',
      },
      {
        title: 'How to use Inje without overcomplicating the route',
        body:
          'Travelers do not need every pass. The page should help them choose one: northern atmosphere, dramatic mountain view, or practical directness. That makes Inje a decision tool as much as a destination.',
      },
      {
        title: 'Why weather belongs in the story',
        body:
          'Pass roads are emotional when conditions are good and stressful when conditions are not. Inje should be written with weather, timing, and road-readiness in mind, especially for winter or heavy rain.',
      },
      {
        title: 'Why Sokcho lands better after Inje',
        body:
          'Sokcho becomes more meaningful when the traveler has actually chosen how to cross the mountains. Inje gives the sea arrival tension, relief, and a sense of earned geography.',
      },
    ],
    decisions: [
      {
        title: 'Choose Jinburyeong for the northern handoff',
        bestFor: 'Travelers who want Route 3 to keep its borderland and northern-coast identity through Goseong before Sokcho.',
        why:
          'This variant feels quieter and more expansive. It lets the coast arrive from the north rather than dropping straight into Sokcho.',
      },
      {
        title: 'Choose Hangyeryeong for the view-led crossing',
        bestFor: 'Drivers who want the strongest classic Seoraksan mountain drama and are willing to respect road and weather conditions.',
        why:
          'Hangyeryeong should be treated as the scenic event. It is not the easiest choice, but it gives the route the most explicit mountain-view payoff.',
      },
      {
        title: 'Choose Misiryeong for the clean handoff',
        bestFor: 'Travelers who want Inje, Seorak, and Sokcho to stay connected without turning the final leg into a long pass study.',
        why:
          'Misiryeong is the practical balance: still mountain-aware, still tied to Seorak, but easier to explain as the main pass-to-coast move.',
      },
    ],
    stayZones: [
      {
        title: 'Stay in the town core',
        areaLabel: 'Inje town',
        bestFor: 'Weather checks, food, fuel, and an easy next-morning pass decision.',
        why:
          'The town core is the practical base when the route should stay flexible until the pass choice is clear.',
      },
      {
        title: 'Stay by Naerincheon',
        areaLabel: 'Naerincheon side',
        bestFor: 'Outdoor travelers, summer trips, rafting plans, and a more active Inje chapter.',
        why:
          'This makes Inje feel present tense: water, valley, sport, and mountain air before the road turns toward Seorak.',
      },
      {
        title: 'Stay before the pass',
        areaLabel: 'Seorak approach',
        bestFor: 'Drivers who want to begin the final crossing early and with less decision fatigue.',
        why:
          'A pre-pass stay turns the final leg into a deliberate morning choice instead of a tired late-day gamble.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Outdoor present',
        title: 'Naerincheon makes Inje active before it becomes scenic',
        image: 'https://tong.visitkorea.or.kr/cms/resource/56/3358956_image2_1.jpg',
        alt: 'Official tourism image for Naerincheon rafting in Inje',
        body:
          'The river image matters because Inje is not only a mountain-road node. Naerincheon gives it a current outdoor identity before Route 3 asks the traveler to choose a pass.',
        sourceLabel: 'VisitKorea Naerincheon Stream Rafting',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=587&vcontsId=89980',
        licenseLabel: 'Official reference',
      },
      {
        eyebrow: 'Pass decision',
        title: 'Inje should show the choice before Sokcho',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Misiryeong%20East.jpg',
        alt: 'Misiryeong ridge road view between Inje and the Sokcho coast',
        body:
          'This pass image makes the route choice visible: Inje is where the inland valley starts turning into a mountain crossing toward the Sokcho coast.',
        sourceLabel: 'Wikimedia Commons Misiryeong',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Misiryeong_East.jpg',
        licenseLabel: 'CC BY 3.0 reference',
      },
      {
        eyebrow: 'Seorak approach',
        title: 'The coast should feel earned after the ridge',
        image: 'https://tong.visitkorea.or.kr/cms/resource/56/3358956_image2_1.jpg',
        alt: 'Inje mountain-valley context before Seoraksan pass roads',
        body:
          'Even before the page gets dedicated pass photography, the visual logic should point forward: valley, road, ridge, and then Sokcho. That is the emotional grammar of Route 3.',
        sourceLabel: 'VisitKorea Naerincheon Stream Rafting',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=587&vcontsId=89980',
        licenseLabel: 'Official reference',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official tourism source',
        title: 'Naerincheon is one of Korea’s major rafting rivers',
        image: 'https://tong.visitkorea.or.kr/cms/resource/56/3358956_image2_1.jpg',
        alt: 'Naerincheon rafting in Inje',
        body:
          'VisitKorea describes Naerincheon Stream as one of Korea’s top rafting spots, with rapids, narrow water, pointed rocks, and a course that gives Inje a strong present-day outdoor identity.',
        sourceLabel: 'VisitKorea Naerincheon Stream Rafting',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=587&vcontsId=89980',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as the core present-day source for Inje outdoor/leports identity.',
      },
      {
        eyebrow: 'County tourism source',
        title: 'Inje County frames Naerincheon as all-year leports infrastructure',
        image: 'https://tong.visitkorea.or.kr/cms/resource/56/3358956_image2_1.jpg',
        alt: 'Inje outdoor leisure reference image',
        body:
          'Inje County’s English tourism page lists Naerincheon rafting, Speedium, zip track, river bugging, and other leports, supporting the city as an active travel base rather than a passive pass town.',
        sourceLabel: 'Inje County Tourism Leports',
        sourceHref: 'https://tour.inje.go.kr/en/tour/tour_leports',
        licenseLabel: 'Official reference',
        usageNote:
          'Use to support the broader outdoor-sports layer beyond rafting alone.',
      },
      {
        eyebrow: 'Recent season source',
        title: 'Rafting season keeps Inje current',
        image: 'https://tong.visitkorea.or.kr/cms/resource/56/3358956_image2_1.jpg',
        alt: 'Naerincheon rafting seasonal context',
        body:
          'Korean news reported in June 2025 that Naerincheon rafting had entered the summer season, with local safety preparation and continued demand for rafting and water sports.',
        sourceLabel: 'Yonhap News, June 17 2025',
        sourceHref: 'https://www.yna.co.kr/view/AKR20250617102700062',
        licenseLabel: 'News reference',
        usageNote:
          'Use only for timely seasonal context; recheck before publication because current-year operating details change.',
      },
    ],
    points: [
      {
        id: 'inje-town-core',
        name: 'Inje town core',
        kind: 'stay',
        areaLabel: 'Town base',
        coordinates: { lat: 38.0695, lng: 128.1707 },
        summary:
          'The practical base for food, fuel, weather checks, and deciding which pass to take toward Sokcho.',
        note:
          'Use this when Route 3 needs flexibility more than scenery at the overnight point.',
      },
      {
        id: 'naerincheon-rafting',
        name: 'Naerincheon rafting zone',
        kind: 'recovery',
        areaLabel: 'River sports',
        coordinates: { lat: 38.0424, lng: 128.2188 },
        summary:
          'The outdoor identity point that makes Inje feel active and present tense before the route turns toward Seorak.',
        note:
          'Best for summer route versions and travelers who want the stop to be more than a road decision.',
      },
      {
        id: 'jinburyeong-choice',
        name: 'Jinburyeong choice',
        kind: 'mobility',
        areaLabel: 'Northern pass',
        coordinates: { lat: 38.268, lng: 128.398 },
        summary:
          'The northern variant that keeps the route moving through Goseong before Sokcho.',
        note:
          'Use this when the traveler wants the quiet northern coast-side handoff.',
      },
      {
        id: 'hangyeryeong-choice',
        name: 'Hangyeryeong choice',
        kind: 'mobility',
        areaLabel: 'View-led pass',
        coordinates: { lat: 38.082, lng: 128.376 },
        summary:
          'The most dramatic Seoraksan-view choice, best treated as a scenic crossing rather than a shortcut.',
        note:
          'Weather and road comfort matter. This is the emotional pass, not the default for everyone.',
      },
      {
        id: 'misiryeong-choice',
        name: 'Misiryeong choice',
        kind: 'mobility',
        areaLabel: 'Direct Seorak handoff',
        coordinates: { lat: 38.2106, lng: 128.459 },
        summary:
          'The cleanest practical route from Inje toward Sokcho while keeping the Seorak threshold visible.',
        note:
          'Use this as the default when the traveler wants balance between scenery and simplicity.',
      },
    ],
  },
  goseong: {
    slug: 'goseong',
    city: 'Goseong',
    mapTitle: 'Where Goseong turns Route 3 into the northern East Sea',
    mapIntro:
      'Goseong should read as more than the last quiet place before Sokcho. It is where Jinburyeong releases the route into the far northern coast, with DMZ memory, Hwajinpo lagoon, Songjiho beach, fishing villages, and Seoraksan still close behind the traveler.',
    mapCenter: {
      lat: 38.3806,
      lng: 128.4676,
    },
    supportSummary:
      'Goseong works best as Route 3\'s border-and-sea chapter. The DMZ Museum and Unification Observatory area carry modern historical weight, while Hwajinpo, Songjiho, Gajin, beach roads, seafood, and coastal stays make the city feel present, soft, and useful before Sokcho.',
    roleSummary:
      'On Route 3, Goseong belongs most clearly to the Jinburyeong variant. Inje chooses the northern pass, Goseong proves why that choice mattered, and Sokcho then arrives as the final city rather than the only coastal payoff.',
    staySummary:
      'Stay in Goseong when the trip should slow down before Sokcho or when the traveler wants the East Sea to arrive through a quieter northern coast. Beach, lagoon, and village stays can make the route feel less rushed and more local.',
    foodSummary:
      'Food should stay coastal and practical: seafood near ports, simple beach-road meals, coffee after the DMZ or Hwajinpo chapter, and an early dinner before the route moves into Sokcho.',
    nextLegSummary:
      'After Goseong, Sokcho should feel like a bigger urban release. Keep the final leg short, coastal, and easy so the traveler understands Goseong as the northern prelude, not a detour that competes with Sokcho.',
    accommodationNote:
      'Strongest stay-planning angle: one Hwajinpo or northern-history stay pattern, one Songjiho or beach leisure stay pattern, and one south Goseong handoff pattern for travelers who want Sokcho next morning without losing the quiet coast.',
    sections: [
      {
        title: 'Why Goseong belongs after Jinburyeong',
        body:
          'If Route 3 chooses Jinburyeong, it should not immediately collapse into Sokcho. Goseong is the reason that northern choice exists: the route gets a borderland coast, not just another mountain descent.',
      },
      {
        title: 'Why the DMZ layer changes the mood',
        body:
          'The DMZ Museum and Unification Observatory area give Goseong a modern-history weight that ordinary beach towns do not have. The page should treat this carefully: memory, division, ecology, and future hope all belong in the same frame.',
      },
      {
        title: 'Why Hwajinpo is not just scenery',
        body:
          'Hwajinpo holds lagoon ecology and modern political memory together. That makes it useful for the site\'s core thesis: small Korean cities often carry deeper stories than travelers expect from the map alone.',
      },
      {
        title: 'Why Songjiho makes the present softer',
        body:
          'Songjiho and nearby beaches move the page out of only security-history mode. They show the present-day Goseong of summer water, camping, families, shallow beach play, and a calmer coastal rhythm before Sokcho.',
      },
      {
        title: 'How to avoid overcomplicating the route',
        body:
          'Goseong should appear as the named coastal chapter for the Jinburyeong variant. Hangyeryeong and Misiryeong can skip it, but Jinburyeong needs it so the route logic stays clear.',
      },
      {
        title: 'Why Sokcho works better after Goseong',
        body:
          'Sokcho feels richer when it is not forced to carry every coastal idea alone. Goseong handles the northern coast, DMZ memory, lagoons, and quiet beach texture, letting Sokcho become the lively final arrival.',
      },
    ],
    decisions: [
      {
        title: 'Keep Goseong on the Jinburyeong variant',
        bestFor: 'Travelers who want Route 3 to preserve its northern identity before Sokcho.',
        why:
          'This makes the pass choice legible. Jinburyeong leads to Goseong, and Goseong gives the final coast a borderland atmosphere.',
      },
      {
        title: 'Use Hwajinpo for the past-and-present story',
        bestFor: 'Travelers who want ecology, modern history, and coastal scenery in one compact chapter.',
        why:
          'Hwajinpo can carry lagoon nature and political memory without turning the page into a purely military-history article.',
      },
      {
        title: 'Use Songjiho when the trip needs ease',
        bestFor: 'Families, summer road trips, beach stays, and travelers who want a softer day before Sokcho.',
        why:
          'Songjiho gives Goseong a living present: water, beach, nearby lake, and simple coastal recovery.',
      },
    ],
    stayZones: [
      {
        title: 'Stay near Hwajinpo',
        areaLabel: 'Northern history and lagoon',
        bestFor: 'Travelers who want DMZ memory, lagoon scenery, and a slower northern-coast mood.',
        why:
          'This stay zone makes Goseong feel distinct from Sokcho because the night is tied to ecology and modern history.',
      },
      {
        title: 'Stay near Songjiho',
        areaLabel: 'Beach and lagoon leisure',
        bestFor: 'Families, beach days, camping-style pacing, and easy coastal recovery.',
        why:
          'Songjiho is the softer present-day answer to the heavy DMZ layer: shallow water, beach rhythm, and relaxed travel.',
      },
      {
        title: 'Stay in south Goseong',
        areaLabel: 'Sokcho handoff',
        bestFor: 'Travelers who want a quiet coast night but still need Sokcho close the next morning.',
        why:
          'This keeps the route simple. The traveler gets Goseong\'s quiet coast without losing the practical finish into Sokcho.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Border memory',
        title: 'The DMZ layer gives Goseong its gravity',
        image: 'https://tong.visitkorea.or.kr/cms/resource/87/763487_image2_1.jpg',
        alt: 'Official tourism image for Goseong DMZ Museum',
        body:
          'This visual should make Goseong feel like the northern coast with memory attached. It is the piece that prevents the page from becoming only beaches and seafood.',
        sourceLabel: 'VisitKorea Goseong DMZ Museum',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=71062',
        licenseLabel: 'Official reference',
      },
      {
        eyebrow: 'Coastal present',
        title: 'Songjiho turns the route back toward leisure',
        image: 'https://tong.visitkorea.or.kr/cms/resource/21/2714121_image2_1.jpg',
        alt: 'Official tourism image for Songjiho Beach in Goseong',
        body:
          'After the border-memory layer, Songjiho gives Goseong air, water, and present-day ease. The contrast is the point: the same city can hold both heaviness and rest.',
        sourceLabel: 'VisitKorea Songjiho Beach',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=188462',
        licenseLabel: 'Official reference',
      },
      {
        eyebrow: 'Lagoon and route',
        title: 'Hwajinpo explains why the coast should slow down',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hwajinpo%20Lake.jpg',
        alt: 'Hwajinpo Lake lagoon landscape in Goseong',
        body:
          'The lagoon view gives Goseong a different visual rhythm from the DMZ museum and beach slots, making the northern coast feel ecological and slow.',
        sourceLabel: 'Wikimedia Commons Hwajinpo Lake',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Hwajinpo_Lake.jpg',
        licenseLabel: 'CC BY-SA 4.0 reference',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official tourism source',
        title: 'Goseong DMZ Museum anchors the border-memory chapter',
        image: 'https://tong.visitkorea.or.kr/cms/resource/87/763487_image2_1.jpg',
        alt: 'Goseong DMZ Museum reference image',
        body:
          'VisitKorea describes the DMZ Museum as being near the civilian control line on the northern East Sea, with exhibitions about the historical significance and meaning of the DMZ, its aftermath, and ecosystem.',
        sourceLabel: 'VisitKorea Goseong DMZ Museum',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=71062',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as the main support source for Goseong\'s modern-border history and DMZ-memory layer.',
      },
      {
        eyebrow: 'Official tourism source',
        title: 'Hwajinpo combines lagoon ecology and modern history',
        image: 'https://tong.visitkorea.or.kr/cms/resource/21/2714121_image2_1.jpg',
        alt: 'Hwajinpo lagoon reference image',
        body:
          'VisitKorea frames Hwajinpo as Korea\'s largest lagoon, with ecological value created by ocean-formed sand spits and a mixed fresh-salt water environment.',
        sourceLabel: 'VisitKorea Hwajinpo Beach National Geopark',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=107566',
        licenseLabel: 'Official reference',
        usageNote:
          'Use to support the ecology side of Goseong and avoid reducing the city to security tourism alone.',
      },
      {
        eyebrow: 'Official tourism source',
        title: 'Songjiho proves the softer modern coast',
        image: 'https://tong.visitkorea.or.kr/cms/resource/21/2714121_image2_1.jpg',
        alt: 'Songjiho Beach reference image',
        body:
          'VisitKorea describes Songjiho Beach as a two-kilometer beach near Songjiho Lake and Seoraksan, with clear shallow water and Jukdo Island just offshore.',
        sourceLabel: 'VisitKorea Songjiho Beach',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=188462',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as the main present-day leisure source for Goseong beach, lagoon, and family-travel context.',
      },
    ],
    points: [
      {
        id: 'goseong-dmz-museum',
        name: 'Goseong DMZ Museum',
        kind: 'checkpoint',
        areaLabel: 'DMZ memory',
        coordinates: { lat: 38.5835, lng: 128.3649 },
        summary:
          'The clearest source-backed anchor for Goseong as a border-memory city rather than only a beach stop.',
        note:
          'Use this as the history checkpoint when the Jinburyeong variant needs emotional and geopolitical weight.',
      },
      {
        id: 'hwajinpo-lagoon',
        name: 'Hwajinpo lagoon and history area',
        kind: 'checkpoint',
        areaLabel: 'Lagoon and modern history',
        coordinates: { lat: 38.4732, lng: 128.4381 },
        summary:
          'The place where ecology, villa-era modern history, and the northern coast can sit in one compact story.',
        note:
          'Best used as the bridge between the heavy DMZ layer and the softer beach layer.',
      },
      {
        id: 'songjiho-beach',
        name: 'Songjiho Beach',
        kind: 'recovery',
        areaLabel: 'Beach and lake',
        coordinates: { lat: 38.3378, lng: 128.5231 },
        summary:
          'The present-day leisure anchor that gives Goseong family travel, beach rest, and summer pacing.',
        note:
          'Use this when the page needs to show that Goseong is also a living coastal stay, not only memory.',
      },
      {
        id: 'gajin-coast',
        name: 'Gajin coastal village',
        kind: 'food',
        areaLabel: 'Village coast',
        coordinates: { lat: 38.3732, lng: 128.5082 },
        summary:
          'A smaller beach and port-side texture point for seafood, cafes, and a more local road-trip feel.',
        note:
          'Useful for street-level copy and lodging intent when the route needs human scale.',
      },
      {
        id: 'goseong-sokcho-handoff',
        name: 'Goseong to Sokcho coastal handoff',
        kind: 'mobility',
        areaLabel: 'Final coast leg',
        coordinates: { lat: 38.2484, lng: 128.563 },
        summary:
          'The short final move that lets Sokcho arrive after the route has already touched the northern East Sea.',
        note:
          'Keep this leg simple so Goseong supports Sokcho rather than competing with it.',
      },
    ],
  },
  sokcho: {
    slug: 'sokcho',
    city: 'Sokcho',
    mapTitle: 'Where Route 3 finally releases into Seoraksan and the East Sea',
    mapIntro:
      'Sokcho is the payoff of Route 3. The city should feel like the release after Gapyeong, Chuncheon, Yanggu, Inje, and the Seoraksan pass choice: mountain, sea, market, harbor, Abai Village memory, and enough hotels to land well.',
    mapCenter: { lat: 38.2045, lng: 128.5918 },
    supportSummary:
      'Sokcho works best as the final mountain-to-sea arrival. Seoraksan National Park access, Sokcho Tourist and Fishery Market, Abai Village, Sokcho Beach, harbor seafood, cafes, and seaside hotels let the route resolve with both drama and comfort.',
    roleSummary:
      'On Route 3, Sokcho should not be treated as a generic coastal endpoint. It is where the Seoraksan pass choice becomes emotional, where the East Sea opens, and where local market and Abai Village memory make the arrival human.',
    staySummary:
      'Stay in Sokcho when the route needs a real finish. Choose beach and hotel zones for ease, market/harbor zones for food and local texture, or Seoraksan-side access when the next morning belongs to the mountain.',
    foodSummary:
      'Food should be central: Sokcho Tourist and Fishery Market, seafood, squid, Abai sundae, harbor meals, and casual coastal snacks make the final city feel earned after mountain roads.',
    nextLegSummary:
      'After Sokcho, the route can either rest, loop north through Goseong, or continue along the East Sea. But the first job is to let the traveler arrive properly.',
    accommodationNote:
      'Strongest stay-planning angle: one beach/hotel stay group, one market-and-harbor food stay group, and one Seoraksan access stay pattern for travelers prioritizing the mountain next morning.',
    sections: [
      { title: 'Why Sokcho is the payoff', body: 'Sokcho works because the route has earned it. After lakes, borderland memory, and Seorak pass choices, the East Sea arrival feels like release rather than a simple destination.' },
      { title: 'Why Seoraksan and the city must stay together', body: 'Sokcho should not become only a mountain base or only a beach town. The best page keeps Seoraksan, the harbor, market food, and coastal hotels in one story.' },
      { title: 'Why Abai Village matters', body: 'Abai Village gives the city postwar human memory and northern-displacement context. It adds emotional texture to the market-and-sea arrival.' },
    ],
    decisions: [
      { title: 'Stay near the beach', bestFor: 'Travelers who want an easy final night, hotels, cafes, and sea air.', why: 'This makes the route finish feel restful after the mountain crossing.' },
      { title: 'Stay near market and harbor', bestFor: 'Food-focused travelers and people who want Sokcho to feel local.', why: 'Market, seafood, Abai sundae, and harbor streets make the city more human.' },
      { title: 'Stay toward Seoraksan access', bestFor: 'Travelers planning an early mountain morning.', why: 'This keeps Sokcho tied to the pass-and-peak logic that made Route 3 distinct.' },
    ],
    stayZones: [
      { title: 'Stay by Sokcho Beach', areaLabel: 'Sea arrival', bestFor: 'Hotels, cafes, easy walks, and a soft final night.', why: 'The beach zone lets the route exhale.' },
      { title: 'Stay near the market and harbor', areaLabel: 'Food core', bestFor: 'Seafood, Abai sundae, local streets, and evening energy.', why: 'This is where Sokcho feels like a living city rather than only scenery.' },
      { title: 'Stay toward Seoraksan', areaLabel: 'Mountain access', bestFor: 'Early hikes, cable-car plans, and travelers prioritizing Seorak.', why: 'This keeps the final city connected to the pass choice.' },
    ],
    visuals: [
      { eyebrow: 'Final release', title: 'Sokcho turns the pass into sea air', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sokcho%20Beach.jpg', alt: 'Sokcho Beach and East Sea reference', body: 'The sea image matters because Route 3 should end with relief after the mountain logic.', sourceLabel: 'VisitKorea Seorak Special Tourist Zone', sourceHref: 'https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=74222', licenseLabel: 'Official reference' },
      { eyebrow: 'Food arrival', title: 'The market makes Sokcho human', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20market%20in%20Sokcho.jpg', alt: 'Sokcho Tourist and Fishery Market seafood stalls', body: 'The market visual converts the endpoint into a lived arrival: seafood, dinner decisions, and local evening movement after the mountain crossing.', sourceLabel: 'Wikimedia Commons Sokcho Fish Market', sourceHref: 'https://commons.wikimedia.org/wiki/File:Fish_market_in_Sokcho.jpg', licenseLabel: 'CC BY-SA 4.0 reference' },
      { eyebrow: 'Postwar memory', title: 'Abai Village adds memory to the coast', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Abai%20village%20-%205433869814.jpg', alt: 'Abai Village in Sokcho near the harbor channel', body: 'Abai Village keeps Sokcho from becoming generic: the final city holds migration memory, harbor life, and food culture as well as beach stays.', sourceLabel: 'Wikimedia Commons Abai Village', sourceHref: 'https://commons.wikimedia.org/wiki/File:Abai_village_-_5433869814.jpg', licenseLabel: 'CC BY 2.0 reference' },
    ],
    officialReferences: [
      { eyebrow: 'Official tourism source', title: 'Seorak Special Tourist Zone ties Sokcho to mountain and sea', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sokcho%20Beach.jpg', alt: 'Sokcho and Seoraksan reference', body: 'VisitKorea frames the Seorak Special Tourist Zone around Seoraksan, Sokcho, beaches, and nearby coastal attractions, supporting Sokcho as a mountain-to-sea arrival.', sourceLabel: 'VisitKorea Seorak Special Tourist Zone', sourceHref: 'https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=74222', licenseLabel: 'Official reference', usageNote: 'Use as the core source for Seoraksan and East Sea arrival logic.' },
      { eyebrow: 'Market source', title: 'Sokcho market supports the food-arrival layer', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20market%20in%20Sokcho.jpg', alt: 'Sokcho market seafood reference', body: 'The central market source supports Sokcho as seafood, snack, and local evening city rather than only a scenic endpoint.', sourceLabel: 'VisitKorea Sokcho Tourism and Fisheries Market', sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174444', licenseLabel: 'Official reference', usageNote: 'Use for market, food, and street-level arrival.' },
      { eyebrow: 'Memory source', title: 'Abai Village keeps postwar memory visible', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Abai%20village%20-%205433869814.jpg', alt: 'Abai Village reference in Sokcho', body: 'Abai Village is associated with displaced people from Hamgyong Province after the Korean War and gives Sokcho a human memory layer beyond tourism.', sourceLabel: 'Abai Village reference', sourceHref: 'https://en.wikipedia.org/wiki/Abai_Village', licenseLabel: 'Reference', usageNote: 'Use with respectful postwar-memory framing.' },
    ],
    points: [
      { id: 'sokcho-beach', name: 'Sokcho Beach', kind: 'stay', areaLabel: 'Sea arrival', coordinates: { lat: 38.1894, lng: 128.6031 }, summary: 'The simplest final-night zone for travelers who want the sea to be visible and easy.', note: 'Use this for comfort-led endings.' },
      { id: 'sokcho-market', name: 'Sokcho Tourist and Fishery Market', kind: 'food', areaLabel: 'Market core', coordinates: { lat: 38.2042, lng: 128.5907 }, summary: 'The food and street-level anchor that makes Sokcho feel local.', note: 'This is the strongest conversion point for dinner and evening intent.' },
      { id: 'abai-village', name: 'Abai Village', kind: 'checkpoint', areaLabel: 'Postwar memory', coordinates: { lat: 38.2012, lng: 128.5958 }, summary: 'The memory layer that connects Sokcho to displacement, harbor life, and Abai sundae.', note: 'Handle with respect; this is not just a food stop.' },
      { id: 'seoraksan-access', name: 'Seoraksan access side', kind: 'mobility', areaLabel: 'Mountain morning', coordinates: { lat: 38.17, lng: 128.485 }, summary: 'The mountain-side planning zone for travelers who want Seorak early the next day.', note: 'Use when Sokcho should remain tied to the pass and mountain story.' },
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
      'Mungyeong is strongest as a chapter marker. Its value comes from gate logic, pass preparation, old-road memory, craft culture, omija identity, and the feeling that the route is moving through terrain with history instead of simply drifting south.',
    roleSummary:
      'On the inland line, Mungyeong is the city that turns geography into editorial meaning. This is where the route visibly crosses a threshold and begins to feel earned.',
    staySummary:
      'Use a stay here when you want to isolate the pass-country chapter, avoid overloading the next day, or give the crossing its own rhythm instead of flattening it into one long transfer.',
    foodSummary:
      'Food is functional here in the best sense, but Mungyeong also has a distinct local flavor through omija. Warm meals, omija products, simple reset dining, and enough fuel make the pass feel prepared rather than improvised.',
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
        title: 'Why the present belongs beside the old road',
        body:
          'Mungyeong is not only old gates and mountain paths. Omija products, chasabal pottery, filming sets, and coal-museum memory keep the city active in the present, turning old movement into craft, food, tourism, and industrial remembrance.',
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
        title: 'Craft, omija, and mining memory keep the crossing present tense',
        image: '/images/routes/route-1/mungyeong/support-3-generated-v1.png',
        alt: 'Generated editorial civic-detail image for Mungyeong',
        body:
          'Not every useful image has to be monumental. Smaller details keep Mungyeong from reading like a scenic backdrop and make room for chasabal pottery, omija, old tunnels, and the working memory behind the route.',
        sourceLabel: 'Generated route editorial image',
        sourceHref: '/images/routes/route-1/mungyeong/support-3-generated-v1.png',
        licenseLabel: 'Internal',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official tourism source',
        title: 'Mungyeongsaejae is the proof that this is pass country',
        image: '/images/routes/route-1/mungyeong/support-1-generated-v1.png',
        alt: 'Generated editorial gateway image for Mungyeong Saejae',
        body:
          'VisitKorea describes Mungyeongsaejae Pass as crossing Joryeongsan Mountain, with three gates designated together as Historic Site No. 147. This is the source that anchors the threshold story.',
        sourceLabel: 'VisitKorea Mungyeongsaejae Provincial Park',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=111158',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as the core historical and route-logic source for gates, pass terrain, and old-road positioning.',
      },
      {
        eyebrow: 'Official city source',
        title: 'Mungyeong City frames Saejae as cultural assets and natural heritage',
        image: '/images/routes/route-1/mungyeong/support-2-generated-v1.png',
        alt: 'Generated editorial pass-country image for Mungyeong',
        body:
          'Mungyeong City lists Mungyeong Gwanmun, the Mungyeongsaejae old road, Yeongnamdaero, temples, mountain peaks, and Baekdudaegan Range as part of the Saejae landscape.',
        sourceLabel: 'Mungyeong City Culture & Tourism',
        sourceHref: 'https://www.gbmg.go.kr/eng/contents.do?mId=0100000000',
        licenseLabel: 'Official reference',
        usageNote:
          'Use to keep the pass story locally grounded rather than relying only on broad travel summaries.',
      },
      {
        eyebrow: 'Present-day craft source',
        title: 'Chasabal keeps Mungyeong in the present',
        image: '/images/routes/route-1/mungyeong/support-3-generated-v1.png',
        alt: 'Generated editorial civic-detail image for Mungyeong',
        body:
          'VisitKorea describes the Mungyeong Chasabal Festival as honoring traditional Korean pottery and ancestral craftsmanship, with exhibitions, hands-on programs, and tea-bowl culture.',
        sourceLabel: 'VisitKorea Mungyeong Chasabal Festival',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=228&vcontsId=104962',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as the craft/present-day layer so the page does not become only mountain-pass history.',
      },
      {
        eyebrow: 'Present-day food source',
        title: 'Omija gives the pass a local flavor',
        image: '/images/routes/route-1/mungyeong/support-3-generated-v1.png',
        alt: 'Generated editorial local-detail image for Mungyeong',
        body:
          'VisitKorea describes the Omija Theme Tunnel as a former coal-transport tunnel reborn for tourism, with omija products and pottery available inside the space.',
        sourceLabel: 'VisitKorea Mungyeong Omija Theme Tunnel',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=193535',
        licenseLabel: 'Official reference',
        usageNote:
          'Use as a bridge source for modern tourism, omija specialty products, pottery, and coal-route memory.',
      },
      {
        eyebrow: 'Industrial memory source',
        title: 'Coal history gives Mungyeong a second modern layer',
        image: '/images/routes/route-1/mungyeong/support-3-generated-v1.png',
        alt: 'Generated editorial civic-detail image for Mungyeong',
        body:
          'VisitKorea describes the Mungyeong Coal Museum as showing coal history and the lives of miners in what was once one of Korea’s productive coalfields.',
        sourceLabel: 'VisitKorea Mungyeong Coal Museum',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=91079',
        licenseLabel: 'Official reference',
        usageNote:
          'Use when expanding the present/industrial-memory layer or requesting more authentic imagery later.',
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
        name: 'Pass-country meal and omija zone',
        kind: 'food',
        areaLabel: 'Near pass approach',
        coordinates: { lat: 36.6592, lng: 128.1114 },
        summary:
          'A functional eating zone for warming up, fueling up, tasting local omija, and resetting before or after the crossing.',
        note:
          'Treat this as route fuel with local identity, not as a city where destination dining has to carry the whole narrative.',
      },
      {
        id: 'mungyeong-omija-theme-tunnel',
        name: 'Omija Theme Tunnel',
        kind: 'checkpoint',
        areaLabel: 'Gomosanseong side',
        coordinates: { lat: 36.6388, lng: 128.1705 },
        summary:
          'A former coal-transport tunnel turned tourism space where omija, pottery, and tunnel memory sit together.',
        note:
          'This is useful for the page because it connects modern local products to industrial route memory in one place.',
      },
      {
        id: 'mungyeong-coal-museum',
        name: 'Mungyeong Coal Museum',
        kind: 'checkpoint',
        areaLabel: 'Gaeun side',
        coordinates: { lat: 36.6545, lng: 128.0648 },
        summary:
          'An industrial-memory anchor that keeps Mungyeong from being only gates and scenery.',
        note:
          'Use this when the story needs to show how the region changed from old roads to resource extraction to tourism.',
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
        bestFor: 'Travelers who want the easiest dinner-sleep-depart sequence without losing Andong\'s cultural value.',
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
          'A practical lodging zone that keeps dinner, transit, and the next morning easy without losing access to the city\'s identity.',
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
          'A directional point for the route\'s next chapter once the inland cultural stop is complete.',
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
          'This is one of the places where food is not just support. It is one of the route\'s arguments for stopping, which means restaurant and stay intent can sit together naturally on the page.',
      },
      {
        title: 'Why the town should stay small in the editorial frame',
        body:
          'If Yeongdeok is written like a generic secondary city guide, it loses its value. It works best as a smaller fishing-port chapter with sharper flavor and lower scale than the places south of it.',
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
          'A short meal-and-air stop can still preserve Yeongdeok\'s value if the route acknowledges why the town matters.',
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
          'A directional point for the route\'s move from flavor-heavy coast to late-route hinge city.',
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
          'This preserves the route\'s shoreline identity while still giving the stop more urban control than the smaller towns to the north.',
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
          'Pohang\'s advantage is that it can restore control without killing the coastal mood. That combination is what makes it such a useful final overnight candidate.',
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
          'Use this area to explain why the route\'s identity changes after Mungyeong and settles into a clearer southern line.',
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
  jeongseon: {
    slug: 'jeongseon',
    city: 'Jeongseon',
    mapTitle: 'Where Arirang, railbike valleys, and Kangwon Land deepen Branch 2A',
    mapIntro:
      'Jeongseon is a support map for turning the inland branch from Yeongwol history into deeper Gangwon mountain culture, railbike valleys, and Kangwon Land before Taebaek.',
    mapCenter: { lat: 37.3806, lng: 128.6609 },
    supportSummary:
      'Jeongseon works as Branch 2A’s Arirang, mountain-market, and Kangwon Land chapter. Arirang Market, the five-day market rhythm, Jeongseon Railbike, Hwaam Cave, casino-resort transition, and valley travel make it a living Gangwon interior stop before Taebaek.',
    roleSummary:
      'This is the cultural valley and casino-transition chapter. Jeongseon keeps the branch from becoming only scenic roads by giving it Arirang, Market life, Railbike reuse, Kangwon Land, and a deeper mountain-town rhythm.',
    staySummary:
      'Stay near Jeongseon town for market days, food, and easy movement; use the railbike or valley side when the stop should feel more landscape-led; use Sabuk/High1 when Kangwon Land and resort infrastructure should lead.',
    foodSummary:
      'Food should be written through market timing, local mountain produce, simple bowls, and snacks that make the stop feel lived-in rather than curated.',
    nextLegSummary:
      'After Jeongseon, Taebaek should feel like the coal-and-highland threshold before the branch drops toward Samcheok and Route 4.',
    accommodationNote:
      'Strongest stay-planning angle: town/market stay for culture, valley-side stay for railbike and scenery, Sabuk/High1 stay for Kangwon Land and closed-mine transition.',
    sections: [
      {
        title: 'Why Jeongseon belongs after Yeongwol',
        body:
          'Yeongwol gives the branch emotional history. Jeongseon changes the register into living mountain culture through Arirang, the market, railbike valleys, Kangwon Land, and deep Gangwon scenery.',
      },
      {
        title: 'Why the market matters',
        body:
          'Jeongseon Arirang Market is not just shopping. VisitKorea notes the market’s coal-era decline and revival through tourist train travel, which makes it a strong past-present story for the site.',
      },
      {
        title: 'Why Kangwon Land changes the present story',
        body:
          'Kangwon Land is not just a casino keyword. VisitKorea describes it as the only casino in Korea that allows Korean citizens, and Jeongseon County frames it as part of the closed-mine-area recovery project. That makes it central to the city’s modern identity.',
      },
      {
        title: 'How it hands off to Taebaek',
        body:
          'Jeongseon sets up Taebaek by keeping the route inside the mountains. The handoff should feel like Arirang and valley culture giving way to coal, highlands, and the final coast exit.',
      },
    ],
    decisions: [
      {
        title: 'Time the market day',
        bestFor: 'Travelers who want the clearest Jeongseon identity and local food texture.',
        why:
          'The five-day market makes the city feel active, specific, and tied to both older trade and current tourism.',
      },
      {
        title: 'Use Sabuk and Kangwon Land carefully',
        bestFor: 'Travelers who want to understand Korea’s casino exception, High1 resort infrastructure, and closed-mine redevelopment.',
        why:
          'Kangwon Land gives Jeongseon a modern economic story, but it should be written with context rather than glamour.',
      },
      {
        title: 'Use the railbike and valley side',
        bestFor: 'Families, slower drivers, and travelers who want scenery with a light activity.',
        why:
          'The railbike reuses old rail infrastructure and makes the valley story easy to experience without heavy planning.',
      },
    ],
    stayZones: [
      {
        title: 'Stay by the market core',
        areaLabel: 'Jeongseon town',
        bestFor: 'Market days, food, and town texture.',
        why:
          'This zone makes Jeongseon feel cultural first and keeps the branch grounded in local life.',
      },
      {
        title: 'Use Sabuk / High1',
        areaLabel: 'Sabuk / High1',
        bestFor: 'Kangwon Land, resort stays, and closed-mine-area transition context.',
        why:
          'This zone adds the modern economic layer that makes Jeongseon more than market and scenery.',
      },
      {
        title: 'Stay toward the valley route',
        areaLabel: 'Gujeol / Auraji side',
        bestFor: 'Railbike, river scenery, and quieter mountain pacing.',
        why:
          'This zone gives the stop a landscape-led rhythm before Taebaek.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Market culture',
        title: 'Arirang Market is the clearest Jeongseon entry point',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeongseon%20Arirang%20Market.jpg',
        alt: 'Jeongseon Arirang Market reference',
        body:
          'The market lets the page explain local food, performance, coal-era change, and current travel in one place.',
        sourceLabel: 'VISITKOREA Jeongseon Arirang Market',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=459&vcontsId=106009',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Valley movement',
        title: 'Railbike keeps the old line useful',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeongseon%20Rail%20Bike.jpg',
        alt: 'Jeongseon Railbike reference',
        body:
          'The railbike is an easy way to make the valley and railway memory visible to English-speaking travelers.',
        sourceLabel: 'VISITKOREA Jeongseon Railbike',
        sourceHref: 'https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=73329',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Casino transition',
        title: 'Kangwon Land makes Jeongseon’s modern economy visible',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeongseon%20Arirang%20Market.jpg',
        alt: 'Jeongseon modern transition reference for Kangwon Land',
        body:
          'Kangwon Land should be framed as casino, resort, and closed-mine-area recovery context, not as a shallow gambling hook.',
        sourceLabel: 'VISITKOREA Kangwon Land Casino',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=110606',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Branch handoff',
        title: 'Jeongseon sends the branch toward coal highlands',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeongseon%20Arirang%20Market.jpg',
        alt: 'Jeongseon mountain-market route reference',
        body:
          'After Jeongseon, Taebaek should feel like a natural deepening into highland industry and mountain geography.',
        sourceLabel: 'Route editorial reference',
        sourceHref: '/route-2/branch-a',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'jeongseon-market-core',
        name: 'Jeongseon Arirang Market',
        kind: 'food',
        areaLabel: 'Jeongseon town',
        coordinates: { lat: 37.3804, lng: 128.6618 },
        summary: 'The strongest cultural and food anchor for reading Jeongseon as a living mountain town.',
        note: 'Best when the itinerary can hit a five-day market date.',
      },
      {
        id: 'jeongseon-railbike',
        name: 'Jeongseon Railbike side',
        kind: 'checkpoint',
        areaLabel: 'Gujeol / Auraji',
        coordinates: { lat: 37.472, lng: 128.743 },
        summary: 'A valley activity that makes old rail infrastructure and scenery visible.',
        note: 'Use this for a lighter modern travel hook before Taebaek.',
      },
      {
        id: 'jeongseon-kangwon-land',
        name: 'Kangwon Land / High1',
        kind: 'stay',
        areaLabel: 'Sabuk / High1',
        coordinates: { lat: 37.209, lng: 128.822 },
        summary: 'The casino-resort zone that makes Jeongseon’s closed-mine transition visible.',
        note: 'Use this with context: Korea’s only casino open to Korean citizens and a redevelopment story, not just nightlife.',
      },
      {
        id: 'jeongseon-taebaek-handoff',
        name: 'Taebaek handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound mountain road',
        coordinates: { lat: 37.285, lng: 128.82 },
        summary: 'The line where Jeongseon’s Arirang and valley story begins handing off to Taebaek’s coal highlands.',
        note: 'This keeps Branch 2A moving forward rather than ending at the market.',
      },
    ],
  },
  taebaek: {
    slug: 'taebaek',
    city: 'Taebaek',
    mapTitle: 'Where coal history, Hanwoo, and highland geography prepare the coast exit',
    mapIntro:
      'Taebaek is a support map for the final inland chapter of Branch 2A: coal memory, Taebaek Hanwoo, Taebaeksan, Hwangji Pond, highland weather, and the push toward Samcheok.',
    mapCenter: { lat: 37.1641, lng: 128.9856 },
    supportSummary:
      'Taebaek works as Branch 2A’s Coal, Hanwoo, and highland threshold. The Taebaek Coal Museum, Hwangji Pond, Taebaeksan, mining memory, Taebaek Hanwoo, and highland city texture make the final inland stop meaningful before Samcheok.',
    roleSummary:
      'This is the coal-highland chapter. Taebaek gives the branch industrial history, mountain air, river-source geography, Hanwoo pride, and a clear Samcheok handoff.',
    staySummary:
      'Stay near the city core for Hwangji Pond and logistics; stay closer to Taebaeksan when hiking, snow, coal museum context, or mountain mood should lead.',
    foodSummary:
      'Food should support highland pacing and local pride. Taebaek Hanwoo is the strongest meal hook, with warm bowls, simple town food, market stops, and practical breakfasts before the Samcheok exit.',
    nextLegSummary:
      'After Taebaek, Samcheok should feel like the East Sea release and the branch’s connection into Route 4.',
    accommodationNote:
      'Strongest stay-planning angle: city-core logistics versus Taebaeksan and coal-heritage access.',
    sections: [
      {
        title: 'Why Taebaek is the final inland threshold',
        body:
          'Taebaek gives Branch 2A a strong last inland chapter before the coast. Coal history, post-coal pressure, Hanwoo, highland weather, and river-source geography make the transition to Samcheok feel earned.',
      },
      {
        title: 'Why coal history matters',
        body:
          'The coal story is not decorative. VisitKorea frames Taebaek Coal Museum around Korea’s coal industry and modernization, which fits the site’s past-present city strategy.',
      },
      {
        title: 'Why Taebaek Hanwoo matters',
        body:
          'Taebaek should not be written only as decline after coal. Hanwoo gives the city a current food identity and a reason for travelers to stop, eat well, and understand local pride in the present tense.',
      },
      {
        title: 'How it hands off to Samcheok',
        body:
          'Taebaek should not end the branch emotionally. It should point downhill and east, making Samcheok feel like the coast release after a deep mountain crossing.',
      },
    ],
    decisions: [
      {
        title: 'Lead with coal heritage',
        bestFor: 'Travelers who want modern Korean industrial history and a less obvious regional story.',
        why:
          'Coal makes Taebaek different from scenic mountain towns and gives the page historical weight.',
      },
      {
        title: 'Eat Taebaek Hanwoo',
        bestFor: 'Travelers who want the city to feel alive in the present instead of only historical.',
        why:
          'Hanwoo turns the stop into a meal chapter and gives the page an honest local-pride hook.',
      },
      {
        title: 'Lead with Taebaeksan and Hwangji',
        bestFor: 'Hikers, winter travelers, and users who want highland geography before the sea.',
        why:
          'Taebaeksan and Hwangji Pond make the city feel spatially important as well as historically important.',
      },
    ],
    stayZones: [
      {
        title: 'Stay near Hwangji and the city core',
        areaLabel: 'Central Taebaek',
        bestFor: 'Logistics, river-source walks, and simple meals.',
        why:
          'This zone keeps the branch usable before the Samcheok move.',
      },
      {
        title: 'Use a Hanwoo meal as the city-core anchor',
        areaLabel: 'Central Taebaek',
        bestFor: 'Dinner stops, local food pride, and a warmer reading of a difficult post-coal city.',
        why:
          'A Taebaek Hanwoo meal can make the stop feel current and memorable before the coast exit.',
      },
      {
        title: 'Stay toward Taebaeksan',
        areaLabel: 'Taebaeksan side',
        bestFor: 'Mountain access, coal museum context, and highland atmosphere.',
        why:
          'This side makes Taebaek feel like a mountain threshold rather than only a city stop.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Coal memory',
        title: 'The coal museum makes modern Korea visible from the mountains',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taebaek%20Coal%20Museum.jpg',
        alt: 'Taebaek Coal Museum reference',
        body:
          'Taebaek is strongest when the page connects coal labor, modernization, and the city’s current travel identity.',
        sourceLabel: 'VISITKOREA Taebaek Coal Museum',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=62811',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'River source',
        title: 'Hwangji Pond gives the city geographic weight',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taebaeksan%20Mountain.jpg',
        alt: 'Taebaek highland reference',
        body:
          'Hwangji Pond helps explain Taebaek as more than a mining city: it is a highland source point before the route turns to sea.',
        sourceLabel: 'VISITKOREA Hwangji Pond',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=351&vcontsId=80903',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Food pride',
        title: 'Taebaek Hanwoo keeps the city in the present tense',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taebaeksan%20Mountain.jpg',
        alt: 'Taebaek highland reference for Hanwoo food identity',
        body:
          'The Hanwoo angle matters because it gives travelers something current, warm, and local to do in a city often described only through coal decline.',
        sourceLabel: 'VISITKOREA Taebaek Eutteum Hanu',
        sourceHref: 'https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=188477',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Coast handoff',
        title: 'After Taebaek, Samcheok becomes the release',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taebaeksan%20Mountain.jpg',
        alt: 'Taebaek highland-to-coast route reference',
        body:
          'The route should feel like it has crossed a deep inland mountain story before it reaches Route 4.',
        sourceLabel: 'Route editorial reference',
        sourceHref: '/route-2/branch-a',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'taebaek-coal-museum',
        name: 'Taebaek Coal Museum',
        kind: 'checkpoint',
        areaLabel: 'Taebaeksan side',
        coordinates: { lat: 37.095, lng: 128.923 },
        summary: 'The clearest site for coal history and modernization memory.',
        note: 'Use this to make Taebaek’s past concrete rather than abstract.',
      },
      {
        id: 'taebaek-hwangji',
        name: 'Hwangji Pond',
        kind: 'recovery',
        areaLabel: 'City core',
        coordinates: { lat: 37.1705, lng: 128.9891 },
        summary: 'The Nakdonggang source point and easiest city-core geography cue.',
        note: 'This gives the highland city a river-source story before the coast.',
      },
      {
        id: 'taebaek-hanwoo-meal',
        name: 'Taebaek Hanwoo meal anchor',
        kind: 'food',
        areaLabel: 'Central Taebaek',
        coordinates: { lat: 37.166, lng: 128.989 },
        summary: 'The food-pride layer that keeps Taebaek current and warm rather than only post-coal.',
        note: 'Use this as a dinner hook before the Samcheok handoff.',
      },
      {
        id: 'taebaek-samcheok-handoff',
        name: 'Samcheok handoff line',
        kind: 'mobility',
        areaLabel: 'Eastbound exit',
        coordinates: { lat: 37.235, lng: 129.09 },
        summary: 'The final inland-to-coast move where Branch 2A releases into Route 4.',
        note: 'After this point, Samcheok and National Route 7 take over.',
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
          'A slower stay near the water makes the threshold feel real and strengthens the route\'s early editorial identity.',
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
          'This helps the page close with continuation and keeps the city\'s role anchored in the route rather than in itself alone.',
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
      'Cheonan works best as the route\'s first control point. The station-and-terminal grid makes the first night easy, while a softer outer-corridor option keeps the opening chapter from feeling rushed or mechanical.',
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
    mapTitle: 'Where Daejeon makes Route 1 and Route 8 easy to divide',
    mapIntro:
      'Daejeon is a support map for central overnights, Sungsimdang food stops, hot-spring-adjacent stays, and practical onward movement. It matters because Route 1 and Route 8 can split here cleanly without becoming dramatic.',
    mapCenter: { lat: 36.3504, lng: 127.3845 },
    supportSummary:
      'Daejeon works as the corridor\'s cleanest choose-your-version overnight. Station-core efficiency, Sungsimdang bakery culture, science-city identity, and Yuseong-side recovery serve Route 1 and Route 8 well, which makes the city one of the easiest places to use with real intention.',
    roleSummary:
      'This is the central corridor decision city. Daejeon rebalances Route 1 before the stronger southern chapters begin, and it gives Route 8 a reliable first stabilizer before the Honam story starts to deepen.',
    staySummary:
      'Station-core stays are for sleep-fast, eat-fast, leave-cleanly timing. Yuseong-side stays are for travelers who want the overnight to restore energy instead of merely storing it until morning.',
    foodSummary:
      'Food matters here in a concrete, route-support way: Sungsimdang gives Daejeon a nationally recognizable bakery anchor, while central meal streets cover reliable dinners after late arrivals and easy breakfasts before departure.',
    nextLegSummary:
      'After Daejeon, Route 1 usually commits more clearly toward Daegu, while Route 8 turns toward Jeonju and Gwangju. That is why the quality of the split matters so much here.',
    accommodationNote:
      'Strongest stay-planning angle: station-core business stays for clean departures and Yuseong-side recovery stays for slower or fatigue-led overnights.',
    sections: [
      {
        title: 'Why Daejeon stays useful',
        body:
          'Daejeon helps because it is one of the few places on Route 1 and Route 8 where you can pause without changing the identity of the trip. The city absorbs timing problems well and sends the route onward cleanly.',
      },
      {
        title: 'Why Sungsimdang changes the stop',
        body:
          'Sungsimdang gives Daejeon a strong present-day travel hook. For English-speaking visitors, it turns the city from a central transfer into a food-driven stop that can sit beside Yuseong recovery and science-city identity.',
      },
      {
        title: 'Why Yuseong matters',
        body:
          'Yuseong turns a practical stop into a slightly more restorative one. It gives the city a reason to hold a real overnight instead of just a station meal and departure.',
      },
      {
        title: 'How to keep it from feeling generic',
        body:
          'The key is to decide whether Daejeon is a pure split, a Sungsimdang food stop, or a Yuseong recovery split. Once that is clear, the city becomes easier to use and easier to monetize through stay logic.',
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
        title: 'Make it a Sungsimdang stop',
        bestFor: 'Food-driven travelers, first-time Korea visitors, and users who need a memorable reason to choose Daejeon.',
        why:
          'This gives the city a clear emotional handle: arrive, eat something distinctly Daejeon, then continue toward Jeonju, Daegu, or the deeper south.',
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
        title: 'Daejeon is the route\'s cleanest divide-and-continue city',
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
        name: 'Sungsimdang and central meal corridor',
        kind: 'food',
        areaLabel: 'Central streets',
        coordinates: { lat: 36.3492, lng: 127.3848 },
        summary: 'The food anchor that turns Daejeon from a useful transfer into an intentional stop.',
        note: 'Use Sungsimdang as the memory point, then let nearby meal streets keep the stop practical for late arrivals and early departures.',
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
          'A brief riverside reset keeps the middle stop from feeling purely industrial while still preserving the route\'s calm-before-Daegu function.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Middle corridor',
        title: 'Gumi works best when the route chooses calm on purpose',
        image: '/images/routes/route-1/gumi/hero-generated-v1.png',
        alt: 'Editorial route image for Gumi middle-corridor reset',
        body:
          'Not every useful stop has to perform loudly. Gumi improves Route 1 by lowering the route\'s noise before Daegu raises it again.',
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
          'This choice preserves the route\'s calmer lower-river character right until the metropolitan handoff.',
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
    mapTitle: 'Where Route 2 finishes and Route 4 can begin',
    mapIntro:
      'Gangneung is a junction support map for deciding whether Route 2 ends at the sea or Route 4 continues south along National Route 7.',
    mapCenter: { lat: 37.7519, lng: 128.8761 },
    supportSummary:
      'Gangneung works as Route 2\'s mountain-to-sea payoff and Route 4\'s major east-coast junction. It completes the Yeoju-Wonju-Pyeongchang-Daegwallyeong crossing while keeping the coast open toward Donghae and Samcheok.',
    roleSummary:
      'This is the junction city. Gangneung can be the end of Route 2 or the point where the traveler chooses the longer National Route 7 line.',
    staySummary:
      'Beach-side stays favor atmosphere, sunrise, and a slower coastal morning. Central stays work better when the route needs cleaner onward timing without giving up the first real sense of coastal commitment.',
    foodSummary:
      'Gangneung should be used for coffee, breakfast, and the first unmistakable change in daily rhythm. It is less about efficiency than about proving that the route has pivoted to the sea for real.',
    nextLegSummary:
      'After Gangneung, Route 2 is complete. Continuing south should be framed as Route 4, where Donghae and Samcheok take over the coastline story.',
    accommodationNote:
      'Strongest stay-planning angle: beach-front stays and cafe-street adjacent hotels.',
    sections: [
      {
        title: 'Why Gangneung completes Route 2',
        body:
          'Gangneung matters because it lets the Seoul-to-east route resolve clearly. After Yeoju, Wonju, Pyeongchang, and Daegwallyeong, the sea finally arrives with enough city life to hold the finish.',
      },
      {
        title: 'Why the morning matters here',
        body:
          'A coastal stay is not only about arrival. The morning light, breakfast rhythm, and sea-facing start are what justify keeping Gangneung overnight at all.',
      },
      {
        title: 'How it becomes Route 4',
        body:
          'Once this city lands properly, the traveler can either stop or continue south. That continuation belongs to Route 4, where Donghae, Samcheok, Uljin, Yeongdeok, and Pohang become a separate coastal sequence.',
      },
    ],
    decisions: [
      {
        title: 'Finish Route 2 at the beach',
        bestFor: 'Travelers who want the mountain-to-sea route to feel complete in Gangneung.',
        why:
          'This is the version of Gangneung that makes Route 2 feel fully resolved at night and again at first light.',
      },
      {
        title: 'Stay central before Route 4',
        bestFor: 'Travelers who want coastal mood while preserving a clean southbound continuation.',
        why:
          'A more central stay keeps Gangneung useful while protecting the Route 4 handoff toward Donghae and Samcheok.',
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
        title: 'Gangneung is where Route 2 reaches the sea',
        image: '/images/routes/route-1/gangneung/support-1-generated-v1.png',
        alt: 'Editorial route image for Gangneung coast entry',
        body:
          'This city gives Route 2 its full mountain-to-sea payoff.',
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
        title: 'After this city, Route 4 takes over the coastline',
        image: '/images/routes/route-1/gangneung/support-3-generated-v1.png',
        alt: 'Editorial route image for Gangneung shoreline commitment',
        body:
          'Used well, Gangneung makes Donghae, Samcheok, and the longer National Route 7 sequence feel intentional.',
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
        name: 'Route 4 southbound handoff',
        kind: 'checkpoint',
        areaLabel: 'Route 7 south',
        coordinates: { lat: 37.6942, lng: 129.0324 },
        summary: 'The line where Gangneung stops being Route 2 and starts handing the coast to Route 4.',
        note: 'After this point, Donghae and Samcheok should carry the shoreline story.',
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
  pyeongchang: {
    slug: 'pyeongchang',
    city: 'Pyeongchang',
    mapTitle: 'Where Route 2 becomes Olympic highland before the sea',
    mapIntro:
      'Pyeongchang is a support map for the gap between Wonju and Gangneung: Olympic venues, Jinbu access, Odaesan, Woljeongsa, ski resorts, and highland recovery.',
    mapCenter: { lat: 37.3705, lng: 128.3902 },
    supportSummary:
      'Pyeongchang works as Route 2\'s Olympic highland gateway. It turns the eastbound line into a real mountain-to-sea route through 2018 Winter Olympics memory, Odaesan, Woljeongsa, ski resorts, and Jinbu access.',
    roleSummary:
      'This is the chapter that prevents Route 2 from jumping blankly between Wonju and Gangneung.',
    staySummary:
      'Stay near Jinbu or Odaesan for temple and national-park access; stay around the resort cluster when skiing, Olympic memory, or winter logistics matter more.',
    foodSummary:
      'Food should be framed through mountain warmth, resort practicality, temple-side pacing, and simple meals that support winter or hiking days.',
    nextLegSummary:
      'After Pyeongchang, Daegwallyeong should feel like the final highland pass before Gangneung and the East Sea.',
    accommodationNote:
      'Strongest stay-planning angle: Odaesan/Jinbu for temple and park access, resort cluster for ski and Olympic highland stays.',
    sections: [
      {
        title: 'Why Pyeongchang fills the Route 2 gap',
        body:
          'Without Pyeongchang, Route 2 moves too abruptly from Wonju to Gangneung. The county gives the route a highland chapter with global recognition and local mountain depth.',
      },
      {
        title: 'Why the Olympics are only the opening hook',
        body:
          'The 2018 Winter Olympics make Pyeongchang searchable, but Odaesan, Woljeongsa, Jinbu, and the ski-resort geography make it usable as a travel stop.',
      },
      {
        title: 'How it hands off to Daegwallyeong',
        body:
          'Pyeongchang sets up the mountain mood; Daegwallyeong turns that mood into a pass before Gangneung arrives as the coast.',
      },
    ],
    decisions: [
      {
        title: 'Use the Olympic resort cluster',
        bestFor: 'Ski trips, winter stays, Olympic venue interest, and travelers who want easy resort logistics.',
        why:
          'Alpensia, Yongpyong, and nearby winter infrastructure make the highland chapter legible to international travelers.',
      },
      {
        title: 'Use Odaesan and Woljeongsa',
        bestFor: 'Temple walks, fir forest, national-park depth, and a quieter non-ski version of Pyeongchang.',
        why:
          'This side gives the city older Korean depth and stops it from reading only as a 2018 Olympics footnote.',
      },
    ],
    stayZones: [
      {
        title: 'Stay around Jinbu and Odaesan',
        areaLabel: 'Jinbu / Odaesan',
        bestFor: 'Temple, national park, and calmer mountain access.',
        why:
          'This zone gives Route 2 the historical and natural layer between Wonju and Gangneung.',
      },
      {
        title: 'Stay in the resort cluster',
        areaLabel: 'Alpensia / Yongpyong',
        bestFor: 'Skiing, Olympic venues, and winter logistics.',
        why:
          'This zone makes the global Pyeongchang memory tangible as a stay decision.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Olympic highland',
        title: 'Alpensia makes the 2018 Winter Olympics visible on Route 2',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpensia.jpg',
        alt: 'Alpensia Resort in Pyeongchang',
        body:
          'Use the resort cluster as the immediate visual hook, then let the page widen into Odaesan and Woljeongsa.',
        sourceLabel: 'Alpensia Resort reference',
        sourceHref: 'https://www.alpensia.com/en/info/introduction.do',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Mountain depth',
        title: 'Odaesan keeps Pyeongchang older than the Games',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Korea-Pyeongchang-Woljeongsa-01.jpg',
        alt: 'Woljeongsa Temple in Pyeongchang on Odaesan Mountain',
        body:
          'Odaesan and Woljeongsa are the reason the city can carry more than ski and Olympic keywords.',
        sourceLabel: 'Wikimedia Commons Woljeongsa',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Korea-Pyeongchang-Woljeongsa-01.jpg',
        licenseLabel: 'CC BY 2.0 reference',
      },
      {
        eyebrow: 'Route handoff',
        title: 'Jinbu and the highlands prepare the final pass',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpensia.jpg',
        alt: 'Pyeongchang highland route reference',
        body:
          'The practical route story is simple: Wonju sets up the eastbound move, Pyeongchang gives it altitude, and Daegwallyeong prepares the coast.',
        sourceLabel: 'Route editorial reference',
        sourceHref: '/route-2',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'pyeongchang-olympic-cluster',
        name: 'Olympic resort cluster',
        kind: 'stay',
        areaLabel: 'Alpensia / Yongpyong',
        coordinates: { lat: 37.661, lng: 128.68 },
        summary: 'The strongest stay zone for ski, Olympic venue, and winter-resort logic.',
        note: 'Use this when Route 2 should show global winter-sports memory.',
      },
      {
        id: 'pyeongchang-odaesan',
        name: 'Odaesan and Woljeongsa side',
        kind: 'checkpoint',
        areaLabel: 'Jinbu / Odaesan',
        coordinates: { lat: 37.731, lng: 128.592 },
        summary: 'The national-park and temple side that gives Pyeongchang deeper Korean context.',
        note: 'This is the counterweight to the Olympic resort image.',
      },
      {
        id: 'pyeongchang-jinbu',
        name: 'Jinbu access point',
        kind: 'mobility',
        areaLabel: 'Jinbu',
        coordinates: { lat: 37.636, lng: 128.556 },
        summary: 'The access logic that makes Pyeongchang usable between Wonju and Gangneung.',
        note: 'Useful for keeping the route practical as well as scenic.',
      },
    ],
  },
  daegwallyeong: {
    slug: 'daegwallyeong',
    city: 'Daegwallyeong',
    mapTitle: 'Where the highland pass prepares Gangneung',
    mapIntro:
      'Daegwallyeong is a Route 2 support map for the final mountain threshold: resorts, ranches, wind, snow, and the descent toward Gangneung.',
    mapCenter: { lat: 37.6771, lng: 128.7051 },
    supportSummary:
      'Daegwallyeong works as Route 2\'s final highland pass before Gangneung. It carries Alpensia, Yongpyong, Olympic venue memory, ranch scenery, and the physical feeling of crossing from mountains to sea.',
    roleSummary:
      'This is the last mountain beat before Gangneung becomes the Route 2 payoff and Route 4 junction.',
    staySummary:
      'Stay here when the mountain chapter should become a night: winter sports, ranch scenery, resort comfort, or a slower descent into Gangneung.',
    foodSummary:
      'Food is best framed as mountain warmth and resort practicality: simple meals, hot bowls, and low-friction stops before the coast.',
    nextLegSummary:
      'After Daegwallyeong, Gangneung should arrive as a proper finish rather than just the next city.',
    accommodationNote:
      'Strongest stay-planning angle: resort stay for ski/logistics, pass-side pause for scenery and mountain atmosphere.',
    sections: [
      {
        title: 'Why Daegwallyeong is the pass',
        body:
          'Daegwallyeong is the physical threshold that makes the route feel crossed. The road should feel like it has earned the coast before Gangneung appears.',
      },
      {
        title: 'Why it is more than a resort label',
        body:
          'Alpensia and Yongpyong are useful hooks, but the highland wind, ranch landscape, and pass geography are what make the route story work.',
      },
      {
        title: 'How it hands off to Gangneung',
        body:
          'This stop is strongest when it makes Gangneung feel like release: mountain behind, sea ahead, and Route 2 complete.',
      },
    ],
    decisions: [
      {
        title: 'Keep the resort version',
        bestFor: 'Skiers, families, winter trips, and travelers who want easy lodging before Gangneung.',
        why:
          'Resort infrastructure makes the highland stay simple and internationally legible.',
      },
      {
        title: 'Use the pass-and-ranch version',
        bestFor: 'Scenery, road-trip pacing, and travelers who care about the mountain-to-sea transition.',
        why:
          'This version explains the route better because it turns geography into a felt crossing.',
      },
    ],
    stayZones: [
      {
        title: 'Stay in the resort belt',
        areaLabel: 'Alpensia / Yongpyong',
        bestFor: 'Ski, winter, and low-friction lodging.',
        why:
          'This keeps the highland stop practical and easy to plan.',
      },
      {
        title: 'Pause on the pass side',
        areaLabel: 'Daegwallyeong highlands',
        bestFor: 'Ranch scenery, wind, snow, and mountain atmosphere.',
        why:
          'This gives the stop a sense of crossing before the coast.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Final pass',
        title: 'Daegwallyeong makes Gangneung feel earned',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpensia.jpg',
        alt: 'Alpensia highland resort reference for Daegwallyeong',
        body:
          'The pass is the missing emotional beat before the sea. It should read as threshold, not filler.',
        sourceLabel: 'Alpensia Resort reference',
        sourceHref: 'https://www.alpensia.com/en/info/introduction.do',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Resort logic',
        title: 'Alpensia and Yongpyong make the stop practical',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpensia.jpg',
        alt: 'Daegwallyeong resort reference',
        body:
          'The resort cluster gives travelers a simple reason to sleep in the mountains instead of racing down to Gangneung.',
        sourceLabel: 'Alpensia Resort reference',
        sourceHref: 'https://www.alpensia.com/en/info/introduction.do',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Coast setup',
        title: 'After this point, Route 2 resolves into Gangneung',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpensia.jpg',
        alt: 'Highland-to-coast route reference',
        body:
          'Daegwallyeong should make the traveler feel the final change of terrain before the East Sea arrives.',
        sourceLabel: 'Route editorial reference',
        sourceHref: '/route-2',
        licenseLabel: 'Internal',
      },
    ],
    points: [
      {
        id: 'daegwallyeong-resort-belt',
        name: 'Resort belt',
        kind: 'stay',
        areaLabel: 'Alpensia / Yongpyong',
        coordinates: { lat: 37.661, lng: 128.68 },
        summary: 'The practical ski and lodging cluster before Gangneung.',
        note: 'Use this for winter trips and easy highland stays.',
      },
      {
        id: 'daegwallyeong-pass',
        name: 'Highland pass checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Daegwallyeong',
        coordinates: { lat: 37.6771, lng: 128.7051 },
        summary: 'The final mountain threshold before Route 2 reaches the sea.',
        note: 'This is the route identity point, not just a map label.',
      },
      {
        id: 'daegwallyeong-gangneung-descent',
        name: 'Gangneung descent',
        kind: 'mobility',
        areaLabel: 'Eastbound descent',
        coordinates: { lat: 37.704, lng: 128.82 },
        summary: 'The line where highland travel turns into coastal arrival.',
        note: 'After this, Gangneung should land as the Route 2 finish.',
      },
    ],
  },
  samcheok: {
    slug: 'samcheok',
    city: 'Samcheok',
    mapTitle: 'Where the east coast keeps unfolding instead of rushing south',
    mapIntro:
      'Samcheok is a continuity map for Route 4. It matters when the National Route 7 line should stay scenic, open-road, and visibly shoreline-led after Donghae and before Uljin.',
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
        title: 'Why Samcheok matters after Donghae',
        body:
          'Samcheok keeps the Gangneung-Donghae section from being the whole coast story. It gives Route 4 another stretch where the road feels scenic, spacious, and intentionally sea-led.',
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
          'Samcheok is strongest when it protects the route\'s openness before the next chapter turns calmer and less dramatic.',
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
        summary: 'The line where Samcheok\'s scenic chapter begins handing the route to Uljin\'s longer quiet-coast logic.',
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
      'The best stays are sea-facing, simple, and low-friction. Uljin is valuable when the overnight protects the coast\'s spaciousness instead of trying to become a resort performance.',
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
  yangyang: {
    slug: 'yangyang',
    city: 'Yangyang',
    mapTitle: 'Where surf culture and Naksansa heritage share the coast',
    mapIntro:
      'Yangyang is a Route 4 support map for choosing between surf-led stays, temple-and-cliff context, and the clean handoff from Sokcho toward Gangneung.',
    mapCenter: { lat: 38.0754, lng: 128.619 },
    supportSummary:
      'Yangyang works as the surf-and-temple hinge of Route 4. Surfyy Beach gives it modern search demand, while Naksansa, Uisangdae, and Hajodae keep older East Sea memory visible.',
    roleSummary:
      'This is where the northern coast shifts from Seoraksan/Sokcho energy into a younger beach-culture chapter before Gangneung.',
    staySummary:
      'Stay near Hajodae or Jukdo for beach and surf rhythm; stay closer to Naksan when the temple and sunrise side should lead.',
    foodSummary:
      'Food should be written as beach-town practical rather than prestige dining: seafood, cafes, simple late meals, and easy breakfast before the next coast leg.',
    nextLegSummary:
      'After Yangyang, Route 4 should arrive in Gangneung feeling broader: surf, temple, cliff, and then a full-service coffee-and-beach city.',
    accommodationNote:
      'Strongest stay-planning angle: surf-side pensions and beach hotels, with Naksan as the heritage/sunrise alternative.',
    sections: [
      {
        title: 'Why Yangyang is not just a surf stop',
        body:
          'Surfyy Beach is the modern hook, but Naksansa and Uisangdae make the place older and more meaningful. The page should let those identities sit together instead of choosing only one.',
      },
      {
        title: 'How it fits between Sokcho and Gangneung',
        body:
          'Yangyang keeps Route 4 from jumping straight from Sokcho to Gangneung. It gives the line a compact middle beat where coast culture changes temperature.',
      },
      {
        title: 'Where the stay decision sits',
        body:
          'A surf-side stay makes the city feel young and social. A Naksan-side stay makes the stop quieter, more sunrise-led, and more connected to temple memory.',
      },
    ],
    decisions: [
      {
        title: 'Stay near the surf beaches',
        bestFor: 'Surf lessons, casual beach nights, and younger Route 4 energy.',
        why:
          'Hajodae, Surfyy, and Jukdo give Yangyang the modern identity English-speaking travelers are likely to search first.',
      },
      {
        title: 'Use Naksan for heritage and sunrise',
        bestFor: 'Travelers who want temple context, quieter mornings, and a stronger past-present story.',
        why:
          'Naksansa gives the stop historical gravity and keeps the page from reading like a disposable beach trend.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the surf-side stay',
        areaLabel: 'Hajodae / Jukdo coast',
        bestFor: 'Beach-first travelers and surf lessons.',
        why:
          'This zone makes Yangyang feel contemporary and helps the route explain why the city is trending now.',
      },
      {
        title: 'Use the Naksan side',
        areaLabel: 'Naksan / Naksansa',
        bestFor: 'Sunrise, temple walks, and quieter coast pacing.',
        why:
          'This side brings the older East Sea story into the overnight instead of leaving it as a quick detour.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Modern coast',
        title: 'Surfyy Beach gives Yangyang its present-tense search hook',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Naksansa%2C%20naksan%20temple%20uisangdae%2C%20%EB%82%99%EC%82%B0%EC%82%AC%20%EC%9D%98%EC%83%81%EB%8C%80.jpg',
        alt: 'Yangyang Surfyy Beach reference',
        body:
          'Yangyang should lean into surf culture because it is real travel intent, but the page must keep it tied to the route instead of writing a generic beach guide.',
        sourceLabel: 'VISITKOREA Surfyy Beach',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=34381',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Older coast',
        title: 'Naksansa keeps the stop from feeling shallow',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Naksansa%2C%20naksan%20temple%20uisangdae%2C%20%EB%82%99%EC%82%B0%EC%82%AC%20%EC%9D%98%EC%83%81%EB%8C%80.jpg',
        alt: 'Naksansa Uisangdae pavilion on the Yangyang coast',
        body:
          'The temple and cliff-view story gives Yangyang a past-present line that fits the site strategy: local places deserve more than a waypoint label.',
        sourceLabel: 'Wikimedia Commons / VISITKOREA Naksansa reference',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=111119',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Route handoff',
        title: 'Hajodae makes the Sokcho-to-Gangneung link visible',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Naksansa%2C%20naksan%20temple%20uisangdae%2C%20%EB%82%99%EC%82%B0%EC%82%AC%20%EC%9D%98%EC%83%81%EB%8C%80.jpg',
        alt: 'Hajodae Beach reference for Yangyang route handoff',
        body:
          'Hajodae is useful because it reads as scenery, stay logic, and route continuity at once.',
        sourceLabel: 'VISITKOREA Hajodae Beach',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=111020',
        licenseLabel: 'External reference',
      },
    ],
    points: [
      {
        id: 'yangyang-surf-side',
        name: 'Surf-side stay zone',
        kind: 'stay',
        areaLabel: 'Hajodae / Jukdo',
        coordinates: { lat: 38.018, lng: 128.718 },
        summary: 'The strongest zone for surf, beach cafes, and the modern Yangyang identity.',
        note: 'Use this when the route needs current travel demand and a younger coast mood.',
      },
      {
        id: 'yangyang-naksansa',
        name: 'Naksansa heritage side',
        kind: 'checkpoint',
        areaLabel: 'Naksan coast',
        coordinates: { lat: 38.124, lng: 128.627 },
        summary: 'The temple-and-cliff side that gives Yangyang historical and scenic weight.',
        note: 'This keeps the city from becoming only a surf keyword.',
      },
      {
        id: 'yangyang-gangneung-handoff',
        name: 'Gangneung handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound Route 7',
        coordinates: { lat: 37.965, lng: 128.76 },
        summary: 'The southbound edge where Yangyang gives the coast to Gangneung.',
        note: 'This is where the route should shift from surf-and-temple to full coast-city services.',
      },
    ],
  },
  donghae: {
    slug: 'donghae',
    city: 'Donghae',
    mapTitle: 'Where Mukho port memory, sunrise rocks, and valley recovery meet',
    mapIntro:
      'Donghae is a Route 4 support map for deciding whether the stop should focus on Mukho, Chuam, Mureung Valley, or a practical overnight between Gangneung and Samcheok.',
    mapCenter: { lat: 37.5247, lng: 129.1143 },
    supportSummary:
      'Donghae works as the port-and-sunrise connector. Mukho Lighthouse and Nongoldam-gil hold working-coast memory, while Chuam and Mureunggyegok Valley give the stop scenery and recovery.',
    roleSummary:
      'This is the place that keeps the coast grounded after Gangneung and before Samcheok.',
    staySummary:
      'Stay around Mukho for port texture and lighthouse walks; stay closer to Chuam or central Donghae when the route needs simpler movement.',
    foodSummary:
      'Write Donghae through seafood, port meals, simple market texture, and the practicality of eating well without turning the stop into a luxury food chapter.',
    nextLegSummary:
      'After Donghae, Route 4 can continue into Samcheok cliffs and caves with a stronger sense of working-coast continuity.',
    accommodationNote:
      'Strongest stay-planning angle: Mukho for atmosphere, central Donghae for logistics, Chuam for sunrise-first pacing.',
    sections: [
      {
        title: 'Why Mukho matters',
        body:
          'Mukho keeps Donghae rooted in port work, lighthouse safety, steep village lanes, and fishing-town memory. That is the difference between a real city stop and a generic sea view.',
      },
      {
        title: 'Why Chuam changes the mood',
        body:
          'Chuam gives the page a fast visual win through sunrise rocks and the ocean bridge, but it should be treated as one part of Donghae rather than the whole city.',
      },
      {
        title: 'Why Mureung is useful',
        body:
          'Mureunggyegok Valley adds a mountain-water recovery option. That matters on a long coast route because not every useful stop has to be on the beach.',
      },
    ],
    decisions: [
      {
        title: 'Base around Mukho',
        bestFor: 'Port texture, lighthouse walks, cafes, and a stronger local story.',
        why:
          'Mukho turns Donghae from a map label into a working coastal place with memory.',
      },
      {
        title: 'Use Chuam as the visual checkpoint',
        bestFor: 'Sunrise, short stops, and travelers who need one immediate scenic proof point.',
        why:
          'Chuam Chotdaebawi is legible quickly and helps the route stay visually memorable.',
      },
    ],
    stayZones: [
      {
        title: 'Keep Mukho atmospheric',
        areaLabel: 'Mukho / Nongoldam-gil',
        bestFor: 'Travelers who want port and hill-village texture.',
        why:
          'This is the strongest zone when Donghae should feel like a lived coastal city.',
      },
      {
        title: 'Use Chuam for sunrise',
        areaLabel: 'Chuam',
        bestFor: 'Early mornings and scenic short stops.',
        why:
          'This zone makes the visual case quickly before the route continues south.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Port memory',
        title: 'Mukho Lighthouse makes the working coast visible',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chuam%20Chotdaebawi%20Rock.jpg',
        alt: 'Mukho Lighthouse reference in Donghae',
        body:
          'The lighthouse and port story give Donghae a practical maritime identity that should anchor the page.',
        sourceLabel: 'VISITKOREA Mukho Lighthouse',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=91465',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Sunrise proof',
        title: 'Chuam gives the stop its immediate visual hook',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chuam%20Chotdaebawi%20Rock.jpg',
        alt: 'Chuam Chotdaebawi Rock reference in Donghae',
        body:
          'Chuam is useful because users understand it fast: rocks, sunrise, coast, and a clear reason to pause.',
        sourceLabel: 'VISITKOREA Chuam Chotdaebawi Rock',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=94231',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Recovery option',
        title: 'Mureunggyegok keeps Donghae from being only a port',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chuam%20Chotdaebawi%20Rock.jpg',
        alt: 'Mureunggyegok Valley reference in Donghae',
        body:
          'The valley lets Donghae support a different kind of pause: cool water, walking, and mountain-edge reset before Samcheok.',
        sourceLabel: 'VISITKOREA Mureunggyegok Valley',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=95394',
        licenseLabel: 'External reference',
      },
    ],
    points: [
      {
        id: 'donghae-mukho',
        name: 'Mukho Lighthouse and port side',
        kind: 'checkpoint',
        areaLabel: 'Mukho',
        coordinates: { lat: 37.55, lng: 129.116 },
        summary: 'The strongest place to read Donghae through lighthouse, port, and hill-village memory.',
        note: 'Use this for the past-present working coast story.',
      },
      {
        id: 'donghae-chuam',
        name: 'Chuam sunrise checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Chuam',
        coordinates: { lat: 37.477, lng: 129.158 },
        summary: 'The quick scenic proof point for sunrise rocks and ocean-edge walking.',
        note: 'Best for travelers who need Donghae to justify itself in one image.',
      },
      {
        id: 'donghae-mureung',
        name: 'Mureung Valley recovery',
        kind: 'recovery',
        areaLabel: 'Mureunggyegok',
        coordinates: { lat: 37.462, lng: 129.021 },
        summary: 'The mountain-water reset that gives Donghae a non-beach recovery option.',
        note: 'Useful on longer Route 4 pacing days before Samcheok.',
      },
    ],
  },
  incheon: {
    slug: 'incheon',
    city: 'Incheon',
    mapTitle: 'Where Incheon opens Route 6',
    mapIntro: 'Incheon starts the West Sea corridor with open-port memory, Chinatown, Wolmido, ferries, and modern port-city scale.',
    mapCenter: { lat: 37.4563, lng: 126.7052 },
    supportSummary: 'Incheon opens Route 6 through open-port memory, Chinatown, Wolmido, ferries, seafood, islands, and modern airport-city scale before Suwon.',
    roleSummary: 'Its role is to make the west-coast route feel maritime from the first chapter, not like another Seoul-adjacent inland departure.',
    staySummary: 'Use Incheon as a first night when the traveler wants open-port streets, harbor walking, island ferry mood, or a softer start after Seoul.',
    foodSummary: 'Chinatown, seafood, market food, and harbor meals make Incheon a useful food opening before Suwon and Seosan.',
    nextLegSummary: 'After Incheon, Suwon adds Hwaseong, Jeongjo, UNESCO fortress planning, and a more walkable heritage overnight.',
    sections: [
      { title: 'Open-port before the coast', body: 'Incheon gives Route 6 its first West Sea identity through open-port streets, Chinatown, Wolmido, ferries, and port contact.' },
      { title: 'Not only airport access', body: 'The city should be framed as a real travel chapter with harbor streets, seafood, islands, and modern urban scale.' },
      { title: 'Why Suwon follows', body: 'After Incheon establishes maritime modernity, Suwon adds planned fortress heritage before the route drops toward Chungcheong coast.' },
    ],
    decisions: [
      { title: 'Start with open-port streets', bestFor: 'Travelers who want Route 6 to feel different immediately.', why: 'Chinatown and Wolmido make the westward turn visible.' },
      { title: 'Keep it light', bestFor: 'Travelers who need to save energy for Suwon or Seosan.', why: 'Incheon can be a short opening chapter instead of a heavy overnight.' },
    ],
    visuals: [
      { eyebrow: 'Open port', title: 'Chinatown makes Incheon a real first chapter', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Incheon%20Chinatown.jpg', alt: 'Incheon Chinatown reference', body: 'Lead with open-port and Chinatown texture so Incheon is not reduced to airport access.', sourceLabel: 'VISITKOREA Incheon reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'West Sea edge', title: 'Wolmido gives the route sea air early', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wolmido%20Incheon.jpg', alt: 'Wolmido Incheon reference', body: 'The harbor and ferry mood makes Route 6 feel maritime from the start.', sourceLabel: 'VISITKOREA Wolmido reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'incheon-open-port', name: 'Open-port and Chinatown core', kind: 'checkpoint', areaLabel: 'Jung-gu', coordinates: { lat: 37.475, lng: 126.618 }, summary: 'The historic opening chapter of Route 6.', note: 'Use this before talking about the airport.' },
      { id: 'incheon-wolmido', name: 'Wolmido harbor edge', kind: 'recovery', areaLabel: 'Wolmido', coordinates: { lat: 37.473, lng: 126.599 }, summary: 'The first West Sea walking and ferry mood.', note: 'Good for a soft start.' },
      { id: 'incheon-suwon-handoff', name: 'Suwon handoff line', kind: 'mobility', areaLabel: 'Southbound line', coordinates: { lat: 37.36, lng: 126.86 }, summary: 'The transition from open port to fortress city.', note: 'This creates Route 6 contrast.' },
    ],
  },
  suwon: {
    slug: 'suwon',
    city: 'Suwon',
    mapTitle: 'Where Suwon gives Route 6 fortress weight',
    mapIntro: 'Suwon is the UNESCO and Jeongjo chapter before Route 6 widens toward Seosan and the West Sea coast.',
    mapCenter: { lat: 37.2636, lng: 127.0286 },
    supportSummary: 'Suwon anchors Route 6 with Hwaseong, Jeongjo, UNESCO fortress planning, markets, food, and walkable city-wall stays before Seosan.',
    roleSummary: 'Its role is to give the west-coast route a powerful inland heritage hinge before the line turns toward Haemi, Taean, and Boryeong.',
    staySummary: 'Use Suwon as a first overnight when the traveler wants fortress walks, market food, and reliable city services.',
    foodSummary: 'Markets, food streets, and late meals make Suwon a practical heritage stay rather than only a day trip.',
    nextLegSummary: 'After Suwon, Seosan shifts Route 6 into Haemi, Naepo, Taean access, and West Sea local food.',
    sections: [
      { title: 'Hwaseong gives the route structure', body: 'Suwon makes Route 6 feel designed through fortress walls, Jeongjo memory, gates, markets, and walkable heritage.' },
      { title: 'A useful overnight', body: 'The city is easy to sleep in, eat in, and leave from, which matters before the route reaches more coastal and rural chapters.' },
      { title: 'Why Seosan follows', body: 'Suwon hands the route from royal planning to Haemi, Naepo, and Taean-side coast logic.' },
    ],
    decisions: [
      { title: 'Walk the fortress', bestFor: 'Heritage travelers and photographers.', why: 'Hwaseong gives the city its strongest route identity.' },
      { title: 'Stay near markets', bestFor: 'Food and practical overnight planning.', why: 'Market access makes the stop easy and lived-in.' },
    ],
    visuals: [
      { eyebrow: 'UNESCO fortress', title: 'Hwaseong is the Route 6 heritage hinge', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Suwon%20Hwaseong%20Fortress.jpg', alt: 'Suwon Hwaseong Fortress reference', body: 'Use the fortress to explain why Route 6 pauses inland before the coast.', sourceLabel: 'UNESCO Hwaseong Fortress', sourceHref: 'https://whc.unesco.org/en/list/817/', licenseLabel: 'External reference' },
      { eyebrow: 'Market stay', title: 'Paldalmun keeps Suwon present tense', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Suwon%20Paldalmun%20Market.jpg', alt: 'Suwon market reference', body: 'The market layer makes the stop feel usable, not only historic.', sourceLabel: 'VISITKOREA Suwon reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'suwon-hwaseong', name: 'Hwaseong fortress wall', kind: 'checkpoint', areaLabel: 'Hwaseong core', coordinates: { lat: 37.287, lng: 127.011 }, summary: 'The UNESCO heritage anchor.', note: 'This is the visual proof of Suwon.' },
      { id: 'suwon-market', name: 'Paldalmun market zone', kind: 'food', areaLabel: 'Paldalmun', coordinates: { lat: 37.277, lng: 127.016 }, summary: 'The food and evening stay layer.', note: 'Use it to make Suwon practical.' },
      { id: 'suwon-seosan-handoff', name: 'Seosan handoff line', kind: 'mobility', areaLabel: 'Westbound line', coordinates: { lat: 36.98, lng: 126.75 }, summary: 'The move from fortress city to Naepo coast gateway.', note: 'This is where Route 6 widens west.' },
    ],
  },
  seosan: {
    slug: 'seosan',
    city: 'Seosan',
    mapTitle: 'Where Seosan turns Route 6 toward Naepo and Taean',
    mapIntro: 'Seosan is the Haemi, Naepo, and Taean gateway before Boryeong, adding moral memory and coast access.',
    mapCenter: { lat: 36.7849, lng: 126.45 },
    supportSummary: 'Seosan gives Route 6 Haemi, Taean, Naepo, tidal-flat food, and a quieter West Sea gateway before Boryeong.',
    roleSummary: 'Its role is to make the route more than beaches by adding pilgrimage memory, local food, and Taean-side branching potential.',
    staySummary: 'Use Seosan as a short story stop or practical overnight when the route needs Taean access or slower local texture.',
    foodSummary: 'Seafood, garlic, markets, and tidal-flat flavors make Seosan a food stop with local specificity.',
    nextLegSummary: 'After Seosan, Boryeong turns the route into a visible beach and mud-festival chapter.',
    sections: [
      { title: 'Haemi gives the stop memory', body: 'Haemi and Naepo context make Seosan more than a practical coast gateway.' },
      { title: 'Taean is the branch promise', body: 'Seosan is where future Route 6 can branch toward Taean, Anmyeondo, beaches, and deeper West Sea scenery.' },
      { title: 'Why Boryeong follows', body: 'After Seosan adds quiet gravity, Boryeong can shift the route into beach and festival energy.' },
    ],
    decisions: [
      { title: 'Use Haemi for depth', bestFor: 'Travelers interested in pilgrimage and local history.', why: 'It gives the route a moral-memory layer.' },
      { title: 'Branch toward Taean', bestFor: 'Drivers and beach-focused travelers.', why: 'Taean access can become a future Route 6 subroute.' },
    ],
    visuals: [
      { eyebrow: 'Haemi memory', title: 'Seosan gives Route 6 a quieter historic hinge', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Haemieupseong%20Fortress.jpg', alt: 'Haemieupseong reference in Seosan', body: 'Haemi keeps the stop specific before the route becomes beach-led in Boryeong.', sourceLabel: 'VISITKOREA Seosan reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'Taean gateway', title: 'Taean access widens the west-coast network', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taean%20Kkotji%20Beach.jpg', alt: 'Taean coast reference near Seosan', body: 'This is the future branch logic for Route 6 as the west coast gets denser.', sourceLabel: 'VISITKOREA Taean reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'seosan-haemi', name: 'Haemi heritage core', kind: 'checkpoint', areaLabel: 'Haemi', coordinates: { lat: 36.713, lng: 126.544 }, summary: 'The Haemi and Naepo memory anchor.', note: 'Use this to give Seosan depth.' },
      { id: 'seosan-taean-gateway', name: 'Taean gateway line', kind: 'mobility', areaLabel: 'West coast branch', coordinates: { lat: 36.75, lng: 126.3 }, summary: 'The future branch toward Taean coast.', note: 'This prepares later expansion.' },
      { id: 'seosan-boryeong-handoff', name: 'Boryeong handoff line', kind: 'mobility', areaLabel: 'Southbound coast', coordinates: { lat: 36.55, lng: 126.52 }, summary: 'The move from Haemi/Naepo to beach and mud festival.', note: 'This changes the route mood.' },
    ],
  },
  boryeong: {
    slug: 'boryeong',
    city: 'Boryeong',
    mapTitle: 'Where Boryeong makes Route 6 playful',
    mapIntro: 'Boryeong is the Daecheon Beach and Mud Festival chapter before Gunsan returns the line to modern port memory.',
    mapCenter: { lat: 36.3334, lng: 126.6128 },
    supportSummary: 'Boryeong gives Route 6 Mud Festival, Daecheon Beach, Gunsan handoff, seafood, sunsets, and a globally searchable West Sea beach identity.',
    roleSummary: 'Its role is to make the west coast fun and internationally legible without losing the route\'s history-led structure.',
    staySummary: 'Use Boryeong as a summer overnight or light coast pause before the heavier Gunsan chapter.',
    foodSummary: 'Seafood, beach meals, festival snacks, and casual evening food make the stop easy to enjoy.',
    nextLegSummary: 'After Boryeong, Gunsan shifts the route from beach and festival into modern-history port streets.',
    sections: [
      { title: 'Mud Festival is the hook', body: 'Boryeong gives Route 6 one of Korea\'s most recognizable international festival identities.' },
      { title: 'Daecheon works beyond festival dates', body: 'The beach, seafood, sunset, and stays make Boryeong useful even when the festival is not active.' },
      { title: 'Why Gunsan follows', body: 'The route needs the tonal shift from playful coast to modern port memory.' },
    ],
    decisions: [
      { title: 'Stay in summer', bestFor: 'Beach and festival travelers.', why: 'This is when Boryeong has the strongest energy.' },
      { title: 'Use it as a light reset', bestFor: 'Travelers moving toward Gunsan.', why: 'A beach pause makes the next history chapter easier to absorb.' },
    ],
    visuals: [
      { eyebrow: 'Festival coast', title: 'Mud Festival gives Boryeong global recognition', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boryeong%20Mud%20Festival.jpg', alt: 'Boryeong Mud Festival reference', body: 'Use the festival as the hook, but keep beach and seafood context around it.', sourceLabel: 'VISITKOREA Boryeong reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'Daecheon Beach', title: 'The beach makes the stop work all season', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Daecheon%20Beach.jpg', alt: 'Daecheon Beach reference in Boryeong', body: 'Daecheon keeps Boryeong usable even outside festival dates.', sourceLabel: 'VISITKOREA Daecheon Beach', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'boryeong-daecheon', name: 'Daecheon Beach stay zone', kind: 'stay', areaLabel: 'Daecheon', coordinates: { lat: 36.305, lng: 126.514 }, summary: 'The beach and lodging anchor.', note: 'Use it for summer stays.' },
      { id: 'boryeong-mud', name: 'Mud Festival zone', kind: 'checkpoint', areaLabel: 'Daecheon festival area', coordinates: { lat: 36.303, lng: 126.514 }, summary: 'The global search hook.', note: 'Seasonal but powerful.' },
      { id: 'boryeong-gunsan-handoff', name: 'Gunsan handoff line', kind: 'mobility', areaLabel: 'Southbound coast', coordinates: { lat: 36.14, lng: 126.66 }, summary: 'The move from beach festival to modern port memory.', note: 'This tonal shift matters.' },
    ],
  },
  gunsan: {
    slug: 'gunsan',
    city: 'Gunsan',
    mapTitle: 'Where Gunsan gives Route 6 modern port memory',
    mapIntro: 'Gunsan is the old port, museum, bakery, seafood, and modern-history chapter before Mokpo.',
    mapCenter: { lat: 35.9677, lng: 126.7366 },
    supportSummary: 'Gunsan gives Route 6 Modern History, port memory, Mokpo handoff, old streets, bakeries, seafood, and a serious middle overnight.',
    roleSummary: 'Its role is to deepen the west coast after Boryeong, showing ports, colonial-era street texture, and modern Korean urban memory.',
    staySummary: 'Use Gunsan as a strong overnight when the traveler wants museums, old-town walks, bakeries, and harbor meals.',
    foodSummary: 'Bakeries, seafood, old-town cafes, and local meals make Gunsan a satisfying city stay.',
    nextLegSummary: 'After Gunsan, Mokpo becomes the southwest harbor finale with Yudalsan, Gatbawi, seafood, and ferries.',
    sections: [
      { title: 'Modern history is the reason', body: 'Gunsan makes the West Sea route serious through port memory, museums, old streets, and colonial-era context.' },
      { title: 'Old streets are still lived in', body: 'Bakeries, cafes, seafood, and walking routes make the modern-history layer usable for travelers.' },
      { title: 'Why Mokpo follows', body: 'Gunsan prepares the final harbor chapter so Mokpo feels like a culmination, not a disconnected endpoint.' },
    ],
    decisions: [
      { title: 'Stay for museums and streets', bestFor: 'Modern-history travelers.', why: 'Gunsan has the strongest middle-route history density.' },
      { title: 'Use food to soften the chapter', bestFor: 'Travelers who need a lighter city stay.', why: 'Bakeries and seafood make the history walk easier to enjoy.' },
    ],
    visuals: [
      { eyebrow: 'Modern history', title: 'Gunsan carries the West Sea port memory', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gunsan%20Modern%20History%20Museum.jpg', alt: 'Gunsan Modern History Museum reference', body: 'Use Gunsan to explain port memory and modern-history texture before Mokpo.', sourceLabel: 'VISITKOREA Gunsan reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'Old-town food', title: 'Bakeries and streets make the stop approachable', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gunsan%20old%20streets.jpg', alt: 'Gunsan old streets reference', body: 'The food and street layer keeps the page from becoming only a museum note.', sourceLabel: 'VISITKOREA Gunsan old streets', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'gunsan-modern-history', name: 'Modern History Museum core', kind: 'checkpoint', areaLabel: 'Old port district', coordinates: { lat: 35.987, lng: 126.712 }, summary: 'The modern-history anchor.', note: 'Use with careful context.' },
      { id: 'gunsan-old-town-food', name: 'Old-town bakery and food streets', kind: 'food', areaLabel: 'Central Gunsan', coordinates: { lat: 35.982, lng: 126.716 }, summary: 'The approachable stay layer.', note: 'Good for evening pacing.' },
      { id: 'gunsan-mokpo-handoff', name: 'Mokpo handoff line', kind: 'mobility', areaLabel: 'Southwest line', coordinates: { lat: 35.45, lng: 126.62 }, summary: 'The move from modern port memory to southwest harbor finale.', note: 'This completes Route 6.' },
    ],
  },
  mokpo: {
    slug: 'mokpo',
    city: 'Mokpo',
    mapTitle: 'Where Mokpo finishes Route 6',
    mapIntro: 'Mokpo is the southwest harbor finale, joining Yudalsan, Gatbawi, seafood, ferries, modern history, and future Route 7 logic.',
    mapCenter: { lat: 34.8118, lng: 126.3922 },
    supportSummary: 'Mokpo finishes Route 6 with Yudalsan, Gatbawi, harbor, seafood, ferries, modern port memory, and also works as the Route 8 harbor hinge before Haenam.',
    roleSummary: 'Its role is to make the West Sea route feel complete and set up the next expansion along Korea\'s south coast.',
    staySummary: 'Give Mokpo the final night because mountain views, harbor food, ferries, and sunset are the reward after the long west-coast line.',
    foodSummary: 'Seafood, harbor meals, market food, and evening drinks make Mokpo feel like a proper finale.',
    nextLegSummary: 'After Mokpo, Route 8 finishes toward Haenam while Route 7 can expand east along the south coast toward Wando, Boseong, Suncheon, Yeosu, Namhae, Tongyeong, and Busan.',
    sections: [
      { title: 'The southwest harbor payoff', body: 'Mokpo gives Route 6 a real arrival through harbor views, island ferries, seafood, and mountain-to-sea geography.' },
      { title: 'Modern history stays visible', body: 'The city keeps the modern port-memory thread alive after Gunsan while adding its own southwest identity.' },
      { title: 'Why it points to Route 7 and Route 8', body: 'Mokpo is the natural handoff into the south-coast network and the harbor hinge before Route 8 reaches Haenam.' },
    ],
    decisions: [
      { title: 'End with a harbor night', bestFor: 'Most Route 6 travelers.', why: 'Mokpo is strongest after the drive when the harbor and food become the reward.' },
      { title: 'Use it as Route 7 launchpad', bestFor: 'Travelers continuing along the south coast.', why: 'The city is the logical west-to-south coast hinge.' },
    ],
    visuals: [
      { eyebrow: 'Southwest finale', title: 'Yudalsan gives Mokpo its arrival view', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mokpo%20Yudalsan.jpg', alt: 'Yudalsan Mountain reference in Mokpo', body: 'Use mountain and harbor views to make Mokpo feel like the Route 6 payoff.', sourceLabel: 'VISITKOREA Mokpo reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'Harbor geology', title: 'Gatbawi and ferries add local texture', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mokpo%20Gatbawi.jpg', alt: 'Mokpo Gatbawi reference', body: 'Gatbawi, seafood, and ferries keep the finale specific to Mokpo.', sourceLabel: 'VISITKOREA Gatbawi reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'mokpo-yudalsan', name: 'Yudalsan harbor view', kind: 'checkpoint', areaLabel: 'Yudalsan', coordinates: { lat: 34.79, lng: 126.379 }, summary: 'The mountain-to-harbor arrival view.', note: 'Use this as the finale image.' },
      { id: 'mokpo-gatbawi', name: 'Gatbawi coastal stop', kind: 'recovery', areaLabel: 'Gatbawi coast', coordinates: { lat: 34.793, lng: 126.434 }, summary: 'The local geology and coast walk layer.', note: 'Good for a softer final day.' },
      { id: 'mokpo-harbor-food', name: 'Harbor seafood and ferry zone', kind: 'food', areaLabel: 'Mokpo harbor', coordinates: { lat: 34.782, lng: 126.386 }, summary: 'The final meal and island-departure mood.', note: 'This completes Route 6 and points to Route 7.' },
    ],
  },
  haenam: {
    slug: 'haenam',
    city: 'Haenam',
    mapTitle: 'Where Haenam opens Route 7',
    mapIntro: 'Haenam is the land-end threshold after Mokpo, joining Ttangkkeut, Duryunsan, Daeheungsa, seafood, and the Wando handoff.',
    mapCenter: { lat: 34.5733, lng: 126.599 },
    supportSummary: 'Haenam opens Route 7 with Ttangkkeut land-end meaning, Duryunsan views, Daeheungsa history, rural roads, seafood, and also completes Route 8 as the Honam land-end finale.',
    roleSummary: 'Its role is to make the south coast feel symbolic before Route 7 becomes island travel, while giving Route 8 a clear endpoint from Seoul.',
    staySummary: 'Use Haenam as a slow first chapter after Mokpo when Ttangkkeut, Duryunsan, and temple views should carry the day.',
    foodSummary: 'Seafood, simple local meals, and market stops support the rural south-coast opening.',
    nextLegSummary: 'After Haenam, Wando turns Route 7 from land-end threshold into island and seafood travel; for Route 8, Haenam is the finale.',
    sections: [
      { title: 'Ttangkkeut gives the route a beginning', body: 'Haenam makes Route 7 feel authored by turning the first chapter into Korea\'s southern land-end story.' },
      { title: 'Duryunsan and Daeheungsa add depth', body: 'Mountain views and temple memory keep Haenam from being only a geographic marker.' },
      { title: 'Why Wando follows', body: 'The route naturally shifts from peninsula edge to island roads, seafood, and ferry mood.' },
    ],
    decisions: [
      { title: 'Lead with the land-end story', bestFor: 'Travelers who want Route 7 to feel meaningful immediately.', why: 'Ttangkkeut gives the south-coast road a symbolic start.' },
      { title: 'Pair mountain and temple', bestFor: 'Travelers who want older Korean texture.', why: 'Duryunsan and Daeheungsa give the page historic and scenic weight.' },
    ],
    visuals: [
      { eyebrow: 'Land-end threshold', title: 'Ttangkkeut makes Haenam the Route 7 opening', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ttangkkeut%20Village.jpg', alt: 'Ttangkkeut Village reference in Haenam', body: 'Use the land-end idea to explain why Haenam belongs after Mokpo.', sourceLabel: 'Haenam Ttangkkeut reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ttangkkeut%20Village.jpg', licenseLabel: 'External reference' },
      { eyebrow: 'Mountain temple', title: 'Duryunsan and Daeheungsa add the older layer', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Daeheungsa%20Temple.jpg', alt: 'Daeheungsa Temple reference in Haenam', body: 'Temple and mountain imagery keeps the opening chapter grounded.', sourceLabel: 'Daeheungsa reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Daeheungsa%20Temple.jpg', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'haenam-ttangkkeut', name: 'Ttangkkeut land-end stop', kind: 'checkpoint', areaLabel: 'Ttangkkeut', coordinates: { lat: 34.3006, lng: 126.525 }, summary: 'The symbolic land-end beginning.', note: 'Use this as the route opener.' },
      { id: 'haenam-duryunsan', name: 'Duryunsan mountain view', kind: 'checkpoint', areaLabel: 'Duryunsan', coordinates: { lat: 34.478, lng: 126.619 }, summary: 'The mountain layer before the island coast.', note: 'Good for scenic proof.' },
      { id: 'haenam-wando-handoff', name: 'Wando handoff road', kind: 'mobility', areaLabel: 'South coast line', coordinates: { lat: 34.43, lng: 126.68 }, summary: 'The move from land end to island seafood.', note: 'This begins the island rhythm.' },
    ],
  },
  wando: {
    slug: 'wando',
    city: 'Wando',
    mapTitle: 'Where Wando turns Route 7 into island travel',
    mapIntro: 'Wando is the Dadohae island and seafood gateway after Haenam, with Cheongsando, ferries, Wando Arboretum, seaweed, and the Boseong handoff.',
    mapCenter: { lat: 34.311, lng: 126.755 },
    supportSummary: 'Wando gives Route 7 Dadohae, Cheongsando, seafood, seaweed, Wando Arboretum, ferry mood, island stays, and a clear handoff to Boseong.',
    roleSummary: 'Its role is to prove that Route 7 is a Dadohae maritime route, not just a mainland road.',
    staySummary: 'Give Wando time when the traveler wants ferry rhythm, seafood, island air, and a slower day after Haenam.',
    foodSummary: 'Seafood, seaweed, abalone, harbor meals, and simple island food should lead the food layer.',
    nextLegSummary: 'After Wando, Boseong slows the route into green tea fields before Suncheon ecology.',
    sections: [
      { title: 'The route becomes Dadohae here', body: 'Wando shifts the traveler from peninsula edge into Dadohae islands, ferries, seafood, and marine identity.' },
      { title: 'Cheongsando is the search hook', body: 'Cheongsando gives the page a globally understandable slow-island travel cue.' },
      { title: 'Why Boseong follows', body: 'Boseong changes the rhythm from sea and ferries to green hills, tea fields, and quiet landscape.' },
    ],
    decisions: [
      { title: 'Use Wando for island tempo', bestFor: 'Travelers who want Route 7 to feel coastal.', why: 'Ferries, seafood, and Cheongsando make the sea visible.' },
      { title: 'Keep the arboretum layer', bestFor: 'Travelers who want greenery after seafood stops.', why: 'Wando Arboretum adds a non-harbor reason to stay.' },
    ],
    visuals: [
      { eyebrow: 'Island gateway', title: 'Wando makes Route 7 maritime', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wando%20Korea.jpg', alt: 'Wando island reference', body: 'Use Wando to show the route entering island and seafood country.', sourceLabel: 'Wando reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wando%20Korea.jpg', licenseLabel: 'External reference' },
      { eyebrow: 'Slow island', title: 'Cheongsando and seafood give Wando its present tense', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cheongsando.jpg', alt: 'Cheongsando reference near Wando', body: 'Cheongsando, seaweed, seafood, and ferries make the city useful for English-speaking travelers.', sourceLabel: 'Cheongsando reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cheongsando.jpg', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'wando-cheongsando', name: 'Cheongsando gateway', kind: 'checkpoint', areaLabel: 'Island ferry', coordinates: { lat: 34.174, lng: 126.859 }, summary: 'The slow-island proof point.', note: 'Use as the main island hook.' },
      { id: 'wando-arboretum', name: 'Wando Arboretum layer', kind: 'recovery', areaLabel: 'Wando greenery', coordinates: { lat: 34.37, lng: 126.65 }, summary: 'The green recovery layer.', note: 'Good contrast after harbor food.' },
      { id: 'wando-boseong-handoff', name: 'Boseong handoff line', kind: 'mobility', areaLabel: 'Northeast line', coordinates: { lat: 34.57, lng: 126.92 }, summary: 'The shift from islands to tea fields.', note: 'This prepares the slow landscape reset.' },
    ],
  },
  boseong: {
    slug: 'boseong',
    city: 'Boseong',
    mapTitle: 'Where Boseong slows Route 7 into green tea fields',
    mapIntro: 'Boseong is the tea-field pause between Wando and Suncheon, built around green tea, Daehan Dawon, rural roads, and quiet Jeolla scenery.',
    mapCenter: { lat: 34.7715, lng: 127.0801 },
    supportSummary: 'Boseong gives Route 7 green tea, Daehan Dawon, rural landscape, tea food, cafes, scenic roads, and a clean Suncheon handoff.',
    roleSummary: 'Its role is to give the south coast a calm, globally legible landscape chapter.',
    staySummary: 'Use Boseong as a half-day or gentle overnight when the route needs a visual reset before Suncheon.',
    foodSummary: 'Green-tea desserts, local meals, cafes, and simple rural food should support the tea-field story.',
    nextLegSummary: 'After Boseong, Suncheon turns the route into wetland ecology and garden scale.',
    sections: [
      { title: 'The tea fields are the visual hook', body: 'Daehan Dawon makes Boseong instantly understandable to travelers who do not yet know the south coast.' },
      { title: 'It should not be only a photo stop', body: 'Tea food, cafes, rural roads, and slower pacing make the city useful inside a real itinerary.' },
      { title: 'Why Suncheon follows', body: 'Suncheon continues the landscape intelligence through wetlands and national-garden scale.' },
    ],
    decisions: [
      { title: 'Stop for the iconic landscape', bestFor: 'First-time south-coast travelers.', why: 'The tea fields give Route 7 a memorable visual anchor.' },
      { title: 'Keep it slow', bestFor: 'Travelers who need recovery between island and city chapters.', why: 'Boseong works best as a reset before Suncheon and Yeosu.' },
    ],
    visuals: [
      { eyebrow: 'Green tea', title: 'Daehan Dawon makes Boseong visible', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boseong%20Green%20Tea%20Fields.jpg', alt: 'Boseong green tea fields reference', body: 'Use tea-field imagery as the primary proof of place.', sourceLabel: 'Boseong green tea reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boseong%20Green%20Tea%20Fields.jpg', licenseLabel: 'External reference' },
      { eyebrow: 'Rural pause', title: 'Tea food and rural roads keep the stop useful', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boseong%20tea.jpg', alt: 'Boseong tea reference', body: 'The present-tense layer should include tea, cafes, rural roads, and local meals.', sourceLabel: 'Boseong tea reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boseong%20tea.jpg', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'boseong-daehan-dawon', name: 'Daehan Dawon tea fields', kind: 'checkpoint', areaLabel: 'Tea fields', coordinates: { lat: 34.719, lng: 127.080 }, summary: 'The route\'s green-tea visual proof.', note: 'Use as hero or present image.' },
      { id: 'boseong-tea-food', name: 'Green tea food and cafe zone', kind: 'food', areaLabel: 'Boseong town', coordinates: { lat: 34.771, lng: 127.080 }, summary: 'The edible present-tense layer.', note: 'Keeps the stop from being only a photo.' },
      { id: 'boseong-suncheon-handoff', name: 'Suncheon handoff line', kind: 'mobility', areaLabel: 'Eastbound line', coordinates: { lat: 34.86, lng: 127.28 }, summary: 'The move from tea fields to wetlands.', note: 'This prepares the ecology chapter.' },
    ],
  },
  namhae: {
    slug: 'namhae',
    city: 'Namhae',
    mapTitle: 'Where Namhae gives Route 7 its island-road chapter',
    mapIntro: 'Namhae follows Yeosu with German Village, Boriam, terraces, beaches, seafood, pensions, and the Tongyeong handoff.',
    mapCenter: { lat: 34.837, lng: 127.892 },
    supportSummary: 'Namhae gives Route 7 German Village, Boriam, Hallyeohaesang-facing island roads, Darangee terraces, beaches, seafood, small stays, and the Tongyeong handoff.',
    roleSummary: 'Its role is to make the south coast intimate and road-trip friendly as the route enters the Hallyeohaesang side before the denser Tongyeong port chapter.',
    staySummary: 'Use Namhae for a scenic overnight when travelers want coastal drives, pensions, beaches, and slower island pacing.',
    foodSummary: 'Seafood, market meals, cafe stops, and simple island food should support the drive.',
    nextLegSummary: 'After Namhae, Tongyeong brings Yi Sun-sin memory, Hallyeohaesang islands, seafood, ferries, and art streets.',
    sections: [
      { title: 'The Hallyeohaesang approach is the product', body: 'Namhae works because the movement itself feels good: bridges, curves, beaches, villages, sea views, and the slow approach into the Hallyeohaesang island world.' },
      { title: 'German Village and Boriam create contrast', body: 'The page can hold a contemporary village hook beside an older temple-view layer.' },
      { title: 'Why Tongyeong follows', body: 'Tongyeong adds port density, island ferries, and naval memory after Namhae\'s softer roads.' },
    ],
    decisions: [
      { title: 'Stay for the drive', bestFor: 'Road-trip travelers.', why: 'Namhae is strongest when the route itself is part of the experience.' },
      { title: 'Use Boriam for depth', bestFor: 'Travelers who want more than views.', why: 'Temple and mountain-sea context keep the city from becoming only scenic.' },
    ],
    visuals: [
      { eyebrow: 'Island road', title: 'German Village gives Namhae a strong hook', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Namhae%20German%20Village.jpg', alt: 'Namhae German Village reference', body: 'Use German Village as an easy entry point into Namhae\'s road-trip identity.', sourceLabel: 'Namhae German Village reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Namhae%20German%20Village.jpg', licenseLabel: 'External reference' },
      { eyebrow: 'Coastal view', title: 'Boriam and terraces add the older layer', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boriam%20Namhae.jpg', alt: 'Boriam Namhae reference', body: 'Boriam, terraces, beaches, and seafood give the page depth beyond one village.', sourceLabel: 'Boriam reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Boriam%20Namhae.jpg', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'namhae-german-village', name: 'Namhae German Village', kind: 'checkpoint', areaLabel: 'German Village', coordinates: { lat: 34.798, lng: 128.039 }, summary: 'The contemporary village hook.', note: 'Use as first visual proof.' },
      { id: 'namhae-boriam', name: 'Boriam coastal view', kind: 'checkpoint', areaLabel: 'Geumsan', coordinates: { lat: 34.753, lng: 127.990 }, summary: 'The temple and view layer.', note: 'Good for past-present balance.' },
      { id: 'namhae-tongyeong-handoff', name: 'Tongyeong handoff road', kind: 'mobility', areaLabel: 'Eastbound coast', coordinates: { lat: 34.84, lng: 128.15 }, summary: 'The move from island road to port city.', note: 'This sets up the dense harbor chapter.' },
    ],
  },
  tongyeong: {
    slug: 'tongyeong',
    city: 'Tongyeong',
    mapTitle: 'Where Tongyeong anchors Yi Sun-sin naval history',
    mapIntro: 'Tongyeong brings Yi Sun-sin memory, Samdo Sugun Tongjeyeong, Dongpirang, Hallyeohaesang, seafood, ferries, art streets, and the Geoje handoff.',
    mapCenter: { lat: 34.8544, lng: 128.4332 },
    supportSummary: 'Tongyeong gives Route 7 Yi Sun-sin memory, Samdo Sugun Tongjeyeong history, Dongpirang, Hallyeohaesang, seafood, ferries, harbor walks, art culture, and a strong Geoje handoff.',
    roleSummary: 'Its role is to make the south coast historically serious through naval history, then layer in living port culture, islands, food, and art.',
    staySummary: 'Give Tongyeong a night when travelers want a compact small city with real Yi Sun-sin history and harbor atmosphere before Geoje.',
    foodSummary: 'Seafood, market meals, harbor snacks, cafes, and ferry-day food should lead the food layer.',
    nextLegSummary: 'After Tongyeong, Geoje adds shipbuilding, POW history, Windy Hill, Oedo, bridges, and the final Busan approach.',
    sections: [
      { title: 'Yi Sun-sin history leads', body: 'Tongyeong should first read as a historically valuable naval city through Yi Sun-sin memory and Samdo Sugun Tongjeyeong, then open into daily ferry and seafood culture.' },
      { title: 'Dongpirang gives the present-tense hook', body: 'Murals, cafes, harbor views, and walking streets make the city approachable for international travelers.' },
      { title: 'Why Geoje follows', body: 'Geoje shifts the story into modern island scale, shipbuilding, POW history, and Busan-facing infrastructure.' },
    ],
    decisions: [
      { title: 'Stay for naval history', bestFor: 'Travelers who want the south coast to feel historically meaningful.', why: 'Yi Sun-sin and Samdo Sugun Tongjeyeong make Tongyeong one of Route 7\'s strongest heritage anchors.' },
      { title: 'Use ferries and Hallyeohaesang', bestFor: 'Travelers who want islands.', why: 'The sea around Tongyeong is a core part of the route, not background.' },
    ],
    visuals: [
      { eyebrow: 'Naval history', title: 'Tongyeong is the Yi Sun-sin chapter', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tongyeong%20Harbor.jpg', alt: 'Tongyeong harbor reference', body: 'Harbor imagery should carry Yi Sun-sin memory, command history, ferries, seafood, and small-city energy.', sourceLabel: 'Tongyeong harbor reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tongyeong%20Harbor.jpg', licenseLabel: 'External reference' },
      { eyebrow: 'Living streets', title: 'Dongpirang keeps Tongyeong present-tense', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dongpirang%20Village.jpg', alt: 'Dongpirang Village reference', body: 'Dongpirang, art streets, and cafes make the city usable beyond naval history.', sourceLabel: 'Dongpirang reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dongpirang%20Village.jpg', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'tongyeong-yi-sun-sin', name: 'Yi Sun-sin and Tongjeyeong core', kind: 'checkpoint', areaLabel: 'Central Tongyeong', coordinates: { lat: 34.843, lng: 128.423 }, summary: 'The Yi Sun-sin and Samdo Sugun Tongjeyeong history anchor.', note: 'Use as Tongyeong\'s primary proof, not a side note.' },
      { id: 'tongyeong-dongpirang', name: 'Dongpirang mural village', kind: 'checkpoint', areaLabel: 'Dongpirang', coordinates: { lat: 34.844, lng: 128.425 }, summary: 'The present-tense walking hook.', note: 'Good for street imagery.' },
      { id: 'tongyeong-geoje-handoff', name: 'Geoje handoff line', kind: 'mobility', areaLabel: 'Island bridge line', coordinates: { lat: 34.87, lng: 128.53 }, summary: 'The move from port city to modern island.', note: 'This prepares the Busan approach.' },
    ],
  },
  geoje: {
    slug: 'geoje',
    city: 'Geoje',
    mapTitle: 'Where Geoje prepares the Busan finale',
    mapIntro: 'Geoje links POW history, shipbuilding, Windy Hill, Oedo, beaches, bridge access, and the final Busan handoff.',
    mapCenter: { lat: 34.8806, lng: 128.6217 },
    supportSummary: 'Geoje gives Route 7 Hallyeohaesang island scenery, POW Camp history, shipbuilding, Windy Hill, Oedo Botania, beaches, bridge infrastructure, seafood, and the Busan handoff.',
    roleSummary: 'Its role is to show modern maritime Korea on the Hallyeohaesang side before the route reaches the final metropolis.',
    staySummary: 'Use Geoje as the final island overnight when travelers want scenery plus history and industry before Busan.',
    foodSummary: 'Seafood, harbor meals, market food, and casual island dining should support the final approach.',
    nextLegSummary: 'After Geoje, Busan becomes the metropolitan harbor finale of the entire south-coast route.',
    sections: [
      { title: 'The island is not only scenic', body: 'Geoje pairs Windy Hill and Oedo with POW history, shipbuilding, bridges, and modern maritime scale.' },
      { title: 'POW history gives gravity', body: 'The Korean War layer makes Geoje one of the route\'s strongest past-present stops.' },
      { title: 'Why Busan follows', body: 'Busan feels stronger when it arrives after Geoje has already shown island infrastructure and industrial coast scale.' },
    ],
    decisions: [
      { title: 'Use Geoje for the final island night', bestFor: 'Travelers who want a slower approach to Busan.', why: 'The city gives the finale more shape than a direct jump.' },
      { title: 'Balance scenery with history', bestFor: 'Travelers who care about Korea beyond views.', why: 'POW Camp memory and shipbuilding make Geoje serious.' },
    ],
    visuals: [
      { eyebrow: 'Island scenery', title: 'Windy Hill gives Geoje an immediate visual hook', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Windy%20Hill%20Geoje.jpg', alt: 'Windy Hill Geoje reference', body: 'Use Windy Hill or Oedo to make the scenic island layer clear.', sourceLabel: 'Windy Hill reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Windy%20Hill%20Geoje.jpg', licenseLabel: 'External reference' },
      { eyebrow: 'Modern history', title: 'POW Camp and shipbuilding add gravity', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Geoje%20POW%20Camp.jpg', alt: 'Geoje POW Camp reference', body: 'The page should hold Korean War memory and modern maritime industry beside the views.', sourceLabel: 'Geoje POW Camp reference', sourceHref: 'https://commons.wikimedia.org/wiki/Special:FilePath/Geoje%20POW%20Camp.jpg', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'geoje-pow-camp', name: 'Geoje POW Camp history', kind: 'checkpoint', areaLabel: 'Gohyeon area', coordinates: { lat: 34.879, lng: 128.626 }, summary: 'The Korean War memory anchor.', note: 'Use for history depth.' },
      { id: 'geoje-windy-hill', name: 'Windy Hill scenic stop', kind: 'checkpoint', areaLabel: 'Nambu coast', coordinates: { lat: 34.742, lng: 128.663 }, summary: 'The scenic island hook.', note: 'Good for hero or present image.' },
      { id: 'geoje-busan-handoff', name: 'Busan handoff bridge line', kind: 'mobility', areaLabel: 'Northeast line', coordinates: { lat: 35.03, lng: 128.82 }, summary: 'The final move into Busan.', note: 'This completes Route 7.' },
    ],
  },
  ulsan: {
    slug: 'ulsan',
    city: 'Ulsan',
    mapTitle: 'Where industrial Korea, whale memory, river recovery, and coast meet',
    mapIntro:
      'Ulsan is a Route 4 support map for deciding how to use the final major city before Busan: Daewangam coast, Taehwagang recovery, Jangsaengpo memory, or metropolitan logistics.',
    mapCenter: { lat: 35.5384, lng: 129.3114 },
    supportSummary:
      'Ulsan works as the industrial coast metropolis before Busan. Daewangam gives the sea drama, Taehwagang gives river recovery, and Jangsaengpo gives whale memory beside modern city scale.',
    roleSummary:
      'This is Route 4 in the present tense: production, port scale, ecology recovery, coast walks, and a clean metropolitan handoff into Busan.',
    staySummary:
      'Stay near the city core for logistics, near Taehwagang for river walks, or toward Dong-gu when Daewangam and the coast should lead.',
    foodSummary:
      'Food should support the metropolitan chapter: market meals, seafood, Korean barbecue, and easy city dining before the Busan finish.',
    nextLegSummary:
      'After Ulsan, Busan should feel like a finale rather than the first real city after a long coast.',
    accommodationNote:
      'Strongest stay-planning angle: river/city-core convenience versus Daewangam-side coast mood.',
    sections: [
      {
        title: 'Why Ulsan belongs before Busan',
        body:
          'Ulsan gives Route 4 a modern Korea chapter at real scale. Without it, the final section jumps too quickly from heritage into Busan without showing the industrial coast that shaped the southeast.',
      },
      {
        title: 'Why Daewangam leads visually',
        body:
          'Daewangam is the easiest visual argument for the city: cliffs, pine paths, lighthouse memory, and open East Sea views.',
      },
      {
        title: 'Why Taehwagang changes the story',
        body:
          'Taehwagang National Garden lets the page talk about recovery and ecological repair, giving Ulsan more depth than a pure industry label.',
      },
    ],
    decisions: [
      {
        title: 'Lead with Daewangam',
        bestFor: 'Coast-first travelers and users who need immediate visual appeal.',
        why:
          'Daewangam makes Ulsan feel like a travel stop before the industrial story asks for more attention.',
      },
      {
        title: 'Use Taehwagang for the overnight',
        bestFor: 'Travelers who want city comfort, river walks, and a calmer evening.',
        why:
          'The river garden gives Ulsan a recovery identity and keeps the stay from feeling purely logistical.',
      },
    ],
    stayZones: [
      {
        title: 'Stay around Taehwagang or the city core',
        areaLabel: 'Central Ulsan',
        bestFor: 'Hotels, food, transport, and river walks.',
        why:
          'This zone makes Ulsan easy to use as the last full service reset before Busan.',
      },
      {
        title: 'Move toward Daewangam',
        areaLabel: 'Dong-gu coast',
        bestFor: 'Coastal walks and East Sea atmosphere.',
        why:
          'This side lets the route keep its coast-first identity even inside a major industrial city.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Coastal drama',
        title: 'Daewangam gives Ulsan its East Sea face',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Daewangam%20Park.jpg',
        alt: 'Daewangam Park reference in Ulsan',
        body:
          'Lead with Daewangam because it lets English-speaking travelers understand Ulsan as coast before they process the industrial layer.',
        sourceLabel: 'VISITKOREA Daewangam Park',
        sourceHref: 'https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=71963',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'River recovery',
        title: 'Taehwagang shows the city in recovery mode',
        image: 'https://tong.visitkorea.or.kr/cms/resource/44/3422844_image2_1.png',
        alt: 'Taehwagang National Garden bamboo path in Ulsan',
        body:
          'The garden makes Ulsan feel current and layered: a city of industry, but also a city rebuilding river life into public space.',
        sourceLabel: 'VISITKOREA Taehwagang National Garden',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=80718',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Whale memory',
        title: 'Jangsaengpo keeps the older sea story visible',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Daewangam%20Park.jpg',
        alt: 'Jangsaengpo Whale Culture Village reference in Ulsan',
        body:
          'The whale district gives Ulsan a maritime memory line that balances the modern production story.',
        sourceLabel: 'VISITKOREA Jangsaengpo Whale Culture Village',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=68966',
        licenseLabel: 'External reference',
      },
    ],
    points: [
      {
        id: 'ulsan-daewangam',
        name: 'Daewangam coast checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Dong-gu',
        coordinates: { lat: 35.491, lng: 129.438 },
        summary: 'The coast-first visual anchor for Ulsan before Busan.',
        note: 'Use this to make Ulsan feel immediately travel-worthy.',
      },
      {
        id: 'ulsan-taehwagang',
        name: 'Taehwagang recovery zone',
        kind: 'recovery',
        areaLabel: 'Central Ulsan',
        coordinates: { lat: 35.548, lng: 129.297 },
        summary: 'The river-garden side where the city becomes easier to slow down in.',
        note: 'This supports the past-present story and gives the overnight a calmer shape.',
      },
      {
        id: 'ulsan-jangsaengpo',
        name: 'Jangsaengpo whale memory',
        kind: 'checkpoint',
        areaLabel: 'Nam-gu',
        coordinates: { lat: 35.505, lng: 129.38 },
        summary: 'The maritime-memory district that keeps Ulsan from reading only as industry.',
        note: 'Use it as the older sea story inside a modern industrial metropolis.',
      },
      {
        id: 'ulsan-busan-handoff',
        name: 'Busan handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound corridor',
        coordinates: { lat: 35.36, lng: 129.25 },
        summary: 'The final corridor where Route 4 releases into Busan.',
        note: 'After this, Busan should feel like a finale, not the first major stop.',
      },
    ],
  },
  gongju: {
    slug: 'gongju',
    city: 'Gongju',
    mapTitle: 'Where Gongju opens Route 5',
    mapIntro: 'Gongju is the Baekje threshold before Jeonju, so the map focuses on fortress memory, temple depth, and the southbound handoff.',
    mapCenter: { lat: 36.4465, lng: 127.119 },
    supportSummary: 'Gongju works as Route 5\'s Baekje gateway. Gongsanseong, Magoksa, and the Geumgang setting give the route historical weight before Jeonju adds food and hanok confidence.',
    roleSummary: 'Its role is to make the Seoul-to-Yeosu line feel authored from the start instead of waiting until Jeonju to become interesting.',
    staySummary: 'Use Gongju as a half-day heritage stop or a calm first overnight if the traveler leaves Seoul late.',
    foodSummary: 'Food should support the stop through local market meals, riverside cafes, and a practical dinner before the Jeonju leg.',
    nextLegSummary: 'After Gongju, Route 5 turns toward Jeonju, where Hanok Village, bibimbap, and makgeolli become the strongest inland overnight.',
    sections: [
      { title: 'Baekje before Jeolla', body: 'Gongju gives Route 5 an older historical opening through Baekje memory, Gongsanseong, royal tomb context, Magoksa, and the Geumgang river.' },
      { title: 'A quiet first reset', body: 'The city works best when travelers need a calmer first chapter after Seoul instead of jumping straight to the better-known Jeonju stop.' },
      { title: 'Why it leads to Jeonju', body: 'Gongju should tee up Jeonju by making the route feel historical first, then food-led and stay-led next.' },
    ],
    decisions: [
      { title: 'Stop for heritage', bestFor: 'Travelers interested in Baekje and old-capital context.', why: 'Gongsanseong and Magoksa make the stop more than a convenience break.' },
      { title: 'Continue to Jeonju', bestFor: 'Short itineraries that need one strong inland overnight.', why: 'Jeonju carries the clearest lodging and search-intent payoff.' },
    ],
    visuals: [
      { eyebrow: 'Baekje gateway', title: 'Gongsanseong gives Gongju its opening weight', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gongsanseong%20Fortress.jpg', alt: 'Gongsanseong Fortress in Gongju', body: 'Lead with fortress and river memory so Gongju reads as Route 5 history, not a filler stop.', sourceLabel: 'VISITKOREA Gongju reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'Temple depth', title: 'Magoksa adds the quieter second layer', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Magoksa%20Temple.jpg', alt: 'Magoksa Temple reference near Gongju', body: 'Magoksa lets the city carry temple and landscape depth before Jeonju takes over the food-and-stay role.', sourceLabel: 'UNESCO Sansa reference', sourceHref: 'https://whc.unesco.org/en/list/1562/', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'gongju-gongsanseong', name: 'Gongsanseong heritage core', kind: 'checkpoint', areaLabel: 'Gongju core', coordinates: { lat: 36.462, lng: 127.126 }, summary: 'The fortress anchor for Baekje memory.', note: 'Use it to open Route 5 with history.' },
      { id: 'gongju-magoksa', name: 'Magoksa temple layer', kind: 'recovery', areaLabel: 'Magoksa area', coordinates: { lat: 36.556, lng: 127.013 }, summary: 'A quieter temple and landscape chapter.', note: 'Best for slower travelers with a car.' },
      { id: 'gongju-jeonju-handoff', name: 'Jeonju handoff corridor', kind: 'mobility', areaLabel: 'Southbound line', coordinates: { lat: 36.14, lng: 127.13 }, summary: 'The move from Baekje gateway into Jeolla food culture.', note: 'This is the route logic that makes the next stop feel earned.' },
    ],
  },
  jeonju: {
    slug: 'jeonju',
    city: 'Jeonju',
    mapTitle: 'Where Jeonju anchors Route 5',
    mapIntro: 'Jeonju is the clearest inland overnight, so the map focuses on Hanok Village, food streets, and the Namwon handoff.',
    mapCenter: { lat: 35.8242, lng: 127.148 },
    supportSummary: 'Jeonju is Route 5\'s Hanok and food anchor. Hanok Village, bibimbap, makgeolli, markets, and guesthouse stays make it the easiest inland chapter for English-speaking travelers to trust.',
    roleSummary: 'Its role is to convert Route 5 from an interesting line into a high-confidence itinerary.',
    staySummary: 'Give Jeonju the inland night when the route needs comfort, food, evening walking, and simple lodging.',
    foodSummary: 'Bibimbap, makgeolli, market snacks, and local dining are the reason Jeonju should not be treated as a short transfer.',
    nextLegSummary: 'After Jeonju, the main Route 5 line goes to Gwangju, while the inland variant can move through Imsil and Namwon before Suncheon.',
    sections: [
      { title: 'The inland confidence anchor', body: 'Jeonju gives Route 5 its most recognizable inland promise through Hanok Village, bibimbap, makgeolli, markets, and easy stays.' },
      { title: 'Past and present in one walk', body: 'The old-city texture matters, but the city works because travelers can eat, sleep, shop, and walk through it today.' },
      { title: 'Why Namwon comes next', body: 'Jeonju should not end the route story; it should hand the traveler to Namwon for romance, garden memory, and Jirisan edge.' },
    ],
    decisions: [
      { title: 'Stay inside the hanok core', bestFor: 'First-time visitors and food-focused travelers.', why: 'It keeps the strongest sights, meals, and evening walks close together.' },
      { title: 'Use Jeonju as a launchpad', bestFor: 'Travelers continuing to Namwon and Suncheon.', why: 'A rested departure makes the next two smaller chapters easier to enjoy.' },
    ],
    visuals: [
      { eyebrow: 'Hanok anchor', title: 'Hanok Village gives Jeonju immediate recognition', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeonju%20Hanok%20Village.jpg', alt: 'Jeonju Hanok Village reference', body: 'Use Hanok Village to make the city legible, then support it with food and evening texture.', sourceLabel: 'VISITKOREA Jeonju reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'Food city', title: 'Bibimbap and makgeolli make the stay work', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeonju%20Bibimbap.jpg', alt: 'Jeonju bibimbap reference', body: 'The food layer is not decoration; it is the reason Jeonju earns the inland overnight.', sourceLabel: 'VISITKOREA food reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'jeonju-hanok', name: 'Hanok Village stay core', kind: 'stay', areaLabel: 'Hanok Village', coordinates: { lat: 35.815, lng: 127.153 }, summary: 'The easiest lodging and walking anchor.', note: 'Use this for first-time travelers.' },
      { id: 'jeonju-food', name: 'Bibimbap and makgeolli food zone', kind: 'food', areaLabel: 'Central Jeonju', coordinates: { lat: 35.82, lng: 127.145 }, summary: 'The main reason the stop becomes an overnight.', note: 'Food should be presented as route logic.' },
      { id: 'jeonju-namwon-handoff', name: 'Namwon handoff line', kind: 'mobility', areaLabel: 'Southbound line', coordinates: { lat: 35.62, lng: 127.26 }, summary: 'The transition from Jeonju food culture to Namwon story and mountain edge.', note: 'This keeps the route moving in chapters.' },
    ],
  },
  namwon: {
    slug: 'namwon',
    city: 'Namwon',
    mapTitle: 'Where Namwon gives Route 5 story',
    mapIntro: 'Namwon is the Chunhyang and Jirisan handoff between Jeonju food culture and Suncheon ecology.',
    mapCenter: { lat: 35.4164, lng: 127.3906 },
    supportSummary: 'Namwon gives Route 5 a Chunhyang, Gwanghalluwon, and Jirisan chapter. It is smaller than Jeonju, but that intimacy is exactly why it earns a stop.',
    roleSummary: 'Its role is to make the route emotionally layered before the landscape shifts into Suncheon Bay and the south coast.',
    staySummary: 'Use Namwon as a half-day story stop or an overnight when the traveler wants garden atmosphere and Jirisan proximity.',
    foodSummary: 'Food should be presented through local meals that support the garden walk and mountain-edge pacing rather than as a single headline dish.',
    nextLegSummary: 'After Namwon, Suncheon turns the route toward wetlands, gardens, and a slower ecological gateway before Yeosu.',
    sections: [
      { title: 'Chunhyang gives the city a voice', body: 'Namwon matters because Gwanghalluwon and the Chunhyang story make the stop memorable without needing big-city scale.' },
      { title: 'Jirisan changes the mood', body: 'The nearby mountain edge gives Namwon a landscape role between Jeonju\'s urban food culture and Suncheon\'s bay ecology.' },
      { title: 'Why Suncheon follows', body: 'Namwon should hand off to Suncheon as a shift from story and garden into wetland, reeds, and planned ecological travel.' },
    ],
    decisions: [
      { title: 'Keep it as a story stop', bestFor: 'Travelers who want culture without adding a long detour.', why: 'Gwanghalluwon and Chunhyang give the city a clear reason to pause.' },
      { title: 'Slow down near Jirisan', bestFor: 'Travelers who want mountain-edge atmosphere.', why: 'It adds landscape depth before the route reaches Suncheon.' },
    ],
    visuals: [
      { eyebrow: 'Garden memory', title: 'Gwanghalluwon carries the Chunhyang chapter', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gwanghalluwon%20Garden.jpg', alt: 'Gwanghalluwon Garden reference in Namwon', body: 'Lead with Gwanghalluwon so Namwon feels specific and emotionally readable.', sourceLabel: 'VISITKOREA Namwon reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'Mountain edge', title: 'Jirisan gives Namwon its landscape pull', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jirisan%20National%20Park.jpg', alt: 'Jirisan National Park reference', body: 'The mountain edge prevents Namwon from reading only as a literary stop.', sourceLabel: 'Korea National Park Service reference', sourceHref: 'https://english.knps.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'namwon-gwanghalluwon', name: 'Gwanghalluwon story core', kind: 'checkpoint', areaLabel: 'Namwon core', coordinates: { lat: 35.401, lng: 127.382 }, summary: 'The Chunhyang and garden-memory anchor.', note: 'Use this as the first Namwon visual.' },
      { id: 'namwon-jirisan', name: 'Jirisan edge', kind: 'recovery', areaLabel: 'Mountain approach', coordinates: { lat: 35.36, lng: 127.58 }, summary: 'The mountain context that deepens the stop.', note: 'Best for slower Route 5 versions.' },
      { id: 'namwon-suncheon-handoff', name: 'Suncheon handoff line', kind: 'mobility', areaLabel: 'Southbound line', coordinates: { lat: 35.18, lng: 127.44 }, summary: 'The transition from story city to wetland gateway.', note: 'This is the route\'s shift into ecology.' },
    ],
  },
  gwangju: {
    slug: 'gwangju',
    city: 'Gwangju',
    mapTitle: 'Where Gwangju gives Route 5 modern-history weight',
    mapIntro: 'Gwangju is the Korean modern-history chapter between Jeonju and Suncheon, so the map centers May 18 civic memory first, then culture, food, and Mudeungsan.',
    mapCenter: { lat: 35.1595, lng: 126.8526 },
    supportSummary: 'Gwangju belongs on Route 5 because it carries a defining chapter of 대한민국현대사. May 18 democracy memory, Asia Culture Center, Mudeungsan, Yangnim-dong, food, and markets make the route feel historically complete before Suncheon.',
    roleSummary: 'Its role is to add the modern civic history that a Korea route needs, so Route 5 does not become only heritage, food, wetlands, and coastline.',
    staySummary: 'Use Gwangju as a strong overnight when the traveler should encounter modern Korean history, city culture, food, and civic memory in one chapter.',
    foodSummary: 'Gwangju food should support the city stay through markets, local restaurants, late meals, and Honam table culture before the Suncheon move.',
    nextLegSummary: 'After Gwangju, Suncheon turns the route from metropolitan culture into wetland, garden, and south-coast ecology.',
    sections: [
      { title: 'Modern Korean history belongs here', body: 'Gwangju fixes Route 5 by giving the Jeolla line a defining modern-history chapter rather than only older heritage, food, and nature stops.' },
      { title: 'May 18 gives the city gravity', body: 'May 18 memory makes Gwangju one of modern Korea\'s most important civic cities, and the page must handle it with sober, respectful travel framing.' },
      { title: 'Present culture comes after memory', body: 'Asia Culture Center, Yangnim-dong, food streets, and Mudeungsan should extend the city story after May 18, not replace it.' },
    ],
    decisions: [
      { title: 'Stay for modern history', bestFor: 'Travelers who want the route to include Korea\'s modern democratic memory.', why: 'Gwangju adds May 18 civic memory, culture, food, services, and urban depth before Suncheon.' },
      { title: 'Use Mudeungsan as the reset', bestFor: 'Travelers who want nature without leaving the city chapter.', why: 'The mountain keeps Gwangju tied to landscape as well as culture.' },
    ],
    visuals: [
      { eyebrow: 'Modern history', title: 'May 18 gives Gwangju its historical weight', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/May%2018%20National%20Cemetery.jpg', alt: 'May 18 National Cemetery reference in Gwangju', body: 'The page should lead with respect and clarity because this is one of the defining civic memories of modern Korea.', sourceLabel: 'VISITKOREA May 18 National Cemetery', sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=110989', licenseLabel: 'External reference' },
      { eyebrow: 'Culture after memory', title: 'Asia Culture Center makes the present visible', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Asia%20Culture%20Center%20Gwangju.jpg', alt: 'Asia Culture Center reference in Gwangju', body: 'The modern culture layer should show how Gwangju continues forward without flattening the May 18 memory.', sourceLabel: 'VISITKOREA Gwangju culture reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'gwangju-may18', name: 'May 18 modern-history core', kind: 'checkpoint', areaLabel: 'Gwangju civic memory', coordinates: { lat: 35.235, lng: 126.922 }, summary: 'The defining modern-history anchor for the city.', note: 'Use with sober, respectful framing before culture or food.' },
      { id: 'gwangju-acc', name: 'Asia Culture Center zone', kind: 'stay', areaLabel: 'Central Gwangju', coordinates: { lat: 35.146, lng: 126.919 }, summary: 'The culture and city-stay center.', note: 'Best for overnight logic and food access.' },
      { id: 'gwangju-mudeungsan', name: 'Mudeungsan access', kind: 'recovery', areaLabel: 'Mountain edge', coordinates: { lat: 35.133, lng: 126.988 }, summary: 'The mountain reset inside the metropolitan chapter.', note: 'This links Gwangju to landscape before Suncheon.' },
    ],
  },
  imsil: {
    slug: 'imsil',
    city: 'Imsil',
    mapTitle: 'Where Imsil closes the Jeonju-Namwon gap',
    mapIntro: 'Imsil is the lighter local-food chapter in the Route 5 inland variant, connecting Jeonju food culture to Namwon story country.',
    mapCenter: { lat: 35.6179, lng: 127.2891 },
    supportSummary: 'Imsil closes the Jeonju-to-Namwon gap with cheese, Cheese Theme Park, Okjeongho, and rural Jeolla pacing. It gives the inland variant a modern local-production story.',
    roleSummary: 'Its role is not to compete with Jeonju or Namwon, but to make the space between them feel intentional and locally specific.',
    staySummary: 'Use Imsil as a short daytime stop, family-friendly pause, or rural cafe/lake detour rather than a required overnight.',
    foodSummary: 'Cheese is the hook: Imsil cheese, cheese experiences, dairy products, and simple rural meals make the stop memorable.',
    nextLegSummary: 'After Imsil, Namwon should feel like the natural story handoff through Chunhyang, Gwanghalluwon, and Jirisan.',
    sections: [
      { title: 'The cheese-country chapter', body: 'Imsil gives Route 5 a playful but real modern food-production story through Imsil cheese and the Cheese Theme Park.' },
      { title: 'A small stop with a clear job', body: 'The city closes a pacing gap rather than trying to become a major destination, which is exactly why it works.' },
      { title: 'Why Namwon follows', body: 'After cheese and rural Jeolla texture, Namwon can carry the older Chunhyang and Jirisan story with more contrast.' },
    ],
    decisions: [
      { title: 'Pause for cheese', bestFor: 'Families, food-curious travelers, and lighter Route 5 days.', why: 'The Cheese Theme Park gives Imsil a clear, searchable hook.' },
      { title: 'Add Okjeongho', bestFor: 'Drivers and slower travelers.', why: 'Lake scenery adds calm before the Namwon story stop.' },
    ],
    visuals: [
      { eyebrow: 'Local food identity', title: 'Imsil makes the middle of the branch memorable', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Imsil%20Cheese%20Theme%20Park.jpg', alt: 'Imsil Cheese Theme Park reference', body: 'Use the cheese story to show modern local production, not just novelty.', sourceLabel: 'VISITKOREA Imsil Cheese Theme Park', sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=351&vcontsId=34120', licenseLabel: 'External reference' },
      { eyebrow: 'Lake pause', title: 'Okjeongho gives the stop rural calm', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Okjeongho%20Lake.jpg', alt: 'Okjeongho Lake reference near Imsil', body: 'The lake layer keeps Imsil from being only a theme-park stop.', sourceLabel: 'VISITKOREA Imsil reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'imsil-cheese-park', name: 'Imsil Cheese Theme Park', kind: 'food', areaLabel: 'Cheese Park', coordinates: { lat: 35.626, lng: 127.289 }, summary: 'The main modern local-food anchor.', note: 'Use this to close the Jeonju-Namwon gap.' },
      { id: 'imsil-okjeongho', name: 'Okjeongho lake pause', kind: 'recovery', areaLabel: 'Lake area', coordinates: { lat: 35.548, lng: 127.166 }, summary: 'The scenic rural reset.', note: 'Best for car travelers.' },
      { id: 'imsil-namwon-handoff', name: 'Namwon handoff line', kind: 'mobility', areaLabel: 'Southbound branch', coordinates: { lat: 35.52, lng: 127.34 }, summary: 'The move from cheese country to Chunhyang story.', note: 'This is the branch logic.' },
    ],
  },
  suncheon: {
    slug: 'suncheon',
    city: 'Suncheon',
    mapTitle: 'Where Suncheon turns Route 5 ecological',
    mapIntro: 'Suncheon is the wetland and garden hinge before Yeosu, so the map centers ecology, slower stays, and the final sea handoff.',
    mapCenter: { lat: 34.9506, lng: 127.4872 },
    supportSummary: 'Suncheon gives Route 5 its Bay, Wetland, and Garden chapter. Suncheon Bay Wetland and Suncheon Bay National Garden slow the route before Yeosu becomes the finale.',
    roleSummary: 'Its role is to make the south-coast approach feel ecological and calm, not just a final highway push.',
    staySummary: 'Use Suncheon as the calm pre-Yeosu overnight when the traveler wants reeds, gardens, and a lower-pressure evening.',
    foodSummary: 'Food should support bay-side pacing through local meals, markets, and simple seafood before the Yeosu finish.',
    nextLegSummary: 'After Suncheon, Yeosu turns the route into islands, seafood, Odongdo, Hyangiram, and night sea.',
    sections: [
      { title: 'Wetland before night sea', body: 'Suncheon Bay Wetland gives Route 5 a nature chapter that makes the Yeosu arrival feel earned instead of abrupt.' },
      { title: 'The garden makes ecology present tense', body: 'Suncheon Bay National Garden translates the city\'s landscape identity into a clear modern travel experience.' },
      { title: 'Why Yeosu follows', body: 'Suncheon prepares the traveler for Yeosu by shifting the route from inland story into open south-coast atmosphere.' },
    ],
    decisions: [
      { title: 'Stay for the wetland', bestFor: 'Nature, photography, and slower-route travelers.', why: 'The wetland is strongest when it is not rushed between transfers.' },
      { title: 'Use it as a pre-Yeosu reset', bestFor: 'Travelers who want Yeosu to feel like a finale.', why: 'A calm night before Yeosu makes the final coastal chapter land harder.' },
    ],
    visuals: [
      { eyebrow: 'Wetland hinge', title: 'Suncheon Bay slows Route 5 before the coast', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Suncheon%20Bay%20Wetland.jpg', alt: 'Suncheon Bay Wetland reference', body: 'Lead with reeds, bay, and light so Suncheon feels ecological, not generic.', sourceLabel: 'VISITKOREA Suncheon reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'Garden city', title: 'National Garden gives the present-day hook', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Suncheon%20Bay%20National%20Garden.jpg', alt: 'Suncheon Bay National Garden reference', body: 'The garden gives Suncheon a modern identity that pairs naturally with the older bay landscape.', sourceLabel: 'VISITKOREA Suncheon Garden reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'suncheon-bay', name: 'Suncheon Bay Wetland', kind: 'recovery', areaLabel: 'Bay area', coordinates: { lat: 34.885, lng: 127.509 }, summary: 'The reed and wetland anchor before Yeosu.', note: 'Use it as the primary ecological proof.' },
      { id: 'suncheon-garden', name: 'Suncheon Bay National Garden', kind: 'checkpoint', areaLabel: 'Garden area', coordinates: { lat: 34.93, lng: 127.509 }, summary: 'The planned-garden side of the city.', note: 'This is the modern present-tense identity.' },
      { id: 'suncheon-yeosu-handoff', name: 'Yeosu handoff line', kind: 'mobility', areaLabel: 'South coast line', coordinates: { lat: 34.84, lng: 127.57 }, summary: 'The final move from ecology to island-night-sea arrival.', note: 'This prepares the emotional finish.' },
    ],
  },
  yeosu: {
    slug: 'yeosu',
    city: 'Yeosu',
    mapTitle: 'Where Yeosu finishes Route 5',
    mapIntro: 'Yeosu is the south-coast finale, so the map focuses on islands, night sea, Hyangiram, seafood, and the final emotional payoff.',
    mapCenter: { lat: 34.7604, lng: 127.6622 },
    supportSummary: 'Yeosu finishes Route 5 with Odongdo, Hyangiram, night sea, seafood, harbor walks, and island views. It should feel like arrival, not just the last city name.',
    roleSummary: 'Its role is to turn the inland Jeolla sequence into a sea-facing finale with enough emotional weight to justify the whole route.',
    staySummary: 'Give Yeosu the final night whenever possible because the city is strongest after sunset and around the harbor.',
    foodSummary: 'Seafood, harbor meals, street snacks, and evening drinks should make Yeosu feel celebratory after Suncheon.',
    nextLegSummary: 'After Yeosu, the network can later expand west along the south coast or back toward Suncheon as a festival and theme-update loop.',
    sections: [
      { title: 'Odongdo and island arrival', body: 'Odongdo and the harbor make Yeosu immediately coastal, giving Route 5 a clear final image after the inland sequence.' },
      { title: 'Hyangiram adds older view culture', body: 'Hyangiram keeps the finale from becoming only nightlife by adding temple-view memory and island geography.' },
      { title: 'The night sea is the payoff', body: 'Yeosu night sea, seafood, and harbor walking make the final stay feel emotional and complete.' },
    ],
    decisions: [
      { title: 'End with a final night', bestFor: 'Most Route 5 travelers.', why: 'The night sea and harbor mood are central to Yeosu\'s payoff.' },
      { title: 'Add Hyangiram or islands', bestFor: 'Travelers with a car or extra day.', why: 'It adds older coastal depth beyond the city-center harbor.' },
    ],
    visuals: [
      { eyebrow: 'Night sea finale', title: 'Yeosu should feel like the route payoff', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Yeosu%20Night%20Sea.jpg', alt: 'Yeosu night sea reference', body: 'Use night sea and harbor images to make the finish unmistakable.', sourceLabel: 'VISITKOREA Yeosu reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
      { eyebrow: 'Island and temple', title: 'Hyangiram and Odongdo add depth', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hyangiram%20Hermitage.jpg', alt: 'Hyangiram Hermitage reference in Yeosu', body: 'The older island-temple layer makes Yeosu more than a nightlife ending.', sourceLabel: 'VISITKOREA Hyangiram reference', sourceHref: 'https://english.visitkorea.or.kr', licenseLabel: 'External reference' },
    ],
    points: [
      { id: 'yeosu-odongdo', name: 'Odongdo Island arrival', kind: 'checkpoint', areaLabel: 'Harbor edge', coordinates: { lat: 34.744, lng: 127.766 }, summary: 'The island-walk anchor for the final city.', note: 'Use it as the approachable daytime payoff.' },
      { id: 'yeosu-hyangiram', name: 'Hyangiram temple view', kind: 'checkpoint', areaLabel: 'Dolsan area', coordinates: { lat: 34.596, lng: 127.802 }, summary: 'The older coastal-view layer.', note: 'Best for travelers with more time or a car.' },
      { id: 'yeosu-night-sea', name: 'Night sea and seafood zone', kind: 'food', areaLabel: 'Central harbor', coordinates: { lat: 34.74, lng: 127.735 }, summary: 'The evening payoff that makes Yeosu a finale.', note: 'This should be the emotional close of Route 5.' },
    ],
  },
};

export function getCitySupportProfile(citySlug: string): CitySupportProfile | null {
  return citySupportProfiles[citySlug.toLowerCase()] ?? null;
}


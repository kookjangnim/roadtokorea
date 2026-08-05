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
        image: '/images/clipartkorea/chungju/cm270023269.jpg',
        alt: 'Licensed real recovery image for Suanbo in Chungju',
        body:
          'Suanbo is useful because it is an actual recovery town in the mountains, not just a hotel cluster. Even before you choose a bath or a room, the terrain itself signals a slower reset.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/chungju/cm270023269.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Route atmosphere',
        title: 'Riverside night gives the stop emotional weight',
        image: '/images/clipartkorea/chungju/tip2500021932.jpg',
        alt: 'Licensed real night-river image for Chungju',
        body:
          'Chungju reads better as part of a journey when the page shows its real inland texture. The value is not spectacle alone, but the feeling of entering a slower mountain-and-water chapter.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/chungju/tip2500021932.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Landscape anchor',
        title: 'Lake-and-fortress imagery explains why this is not just a transit town',
        image: '/images/clipartkorea/chungju/tip004t107658.jpg',
        alt: 'Licensed real landscape image for Chungju Lake',
        body:
          'If the city needs one visual argument, it is this inland breadth. The stop works because it feels spatially different from Seoul before the route narrows again.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/chungju/tip004t107658.jpg',
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
        image: '/images/clipartkorea/wonju/tc08110000069.jpg',
        alt: 'Hiker overlooking Wonju and surrounding mountains',
        body:
          'The mountain view is not just scenery. It explains why Route 2 needs a hinge before Gangneung: the trip is leaving capital-region rhythm and preparing for Gangwon terrain.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/clipartkorea/wonju/tc00240101280.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Working city',
        title: 'The station and city grid keep Wonju practical',
        image: '/images/clipartkorea/wonju/cm270031618.jpg',
        alt: 'Wonju station area with cherry blossoms',
        body:
          'Wonju is strongest when it is allowed to be useful. Station-side imagery supports the city as a place where route timing, luggage, meals, and onward movement can all settle.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/clipartkorea/wonju/tc00240005519.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Everyday present',
        title: 'Cafe and street-level images keep the page out of museum mode',
        image: '/images/clipartkorea/wonju/tc00240110506.jpg',
        alt: 'Friends relaxing with coffee in Wonju',
        body:
          'The page needs present-day life as much as history. Wonju should feel like a city where people study, work, eat, manufacture, recover, and move onward.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/clipartkorea/wonju/tc08110000069.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Spiritual edge',
        title: 'Temples and forest keep the Gangwon threshold visible',
        image: '/images/clipartkorea/wonju/tc00240101280.jpg',
        alt: 'Hiker among stone pagodas in Wonju',
        body:
          'This visual layer balances the industrial and military story. Wonju is also a place where the city edge quickly softens into forest, stone, and mountain quiet.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/clipartkorea/wonju/cm270031618.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Recovery mood',
        title: 'Water and reflection give the hinge a softer finish',
        image: '/images/clipartkorea/wonju/tc00240005519.jpg',
        alt: 'Traveler admiring water reflection in Wonju',
        body:
          'Wonju should not read as only logistics. A softer recovery image makes the overnight feel emotionally useful before the route commits to the east coast.',
        sourceLabel: 'Project destination image',
        sourceHref: '/images/clipartkorea/wonju/tc00240110506.jpg',
        licenseLabel: 'Internal',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official company source',
        title: 'Samyang confirms the Wonju plant as a ramen, snack, and sauce production site',
        image: '/images/clipartkorea/wonju/tc08110000069.jpg',
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
        image: '/images/clipartkorea/wonju/tc00240101280.jpg',
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
        image: '/images/clipartkorea/wonju/cm270031618.jpg',
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
      'Yeongwol works as a one-night river-and-history stop: camp or raft around the Donggang, cross by ferry into Cheongnyeongpo, and use the town core for Jangneung and Seobu Market.',
    mapCenter: {
      lat: 37.1838,
      lng: 128.4617,
    },
    supportSummary:
      'After about five recent camping and rafting visits, the clearest plan is not to collect every viewpoint. Give one night to the Donggang, make Cheongnyeongpo the historical priority, and add Jangneung and Seobu Market as a compact town-side group.',
    roleSummary:
      'On the Wonju-Jecheon-Yeongwol short branch, Yeongwol is where the route stops being only scenic inland movement and becomes a story about exile, memory, river geography, and how pop culture can send people back into a real historical place.',
    staySummary:
      'A riverside campground or valley stay is the stronger reason to spend the night when rafting and landscape are the purpose. Choose the town core only when easy meals and a compact Cheongnyeongpo-Jangneung itinerary matter more.',
    foodSummary:
      'The editor does not claim a must-eat Yeongwol dish from these visits. Use Seobu Market as a practical stop and treat named local specialties as options to verify, not as the reason for the trip.',
    nextLegSummary:
      'The most natural experienced sequence is Jecheon, Yeongwol, then Jeongseon. Do not force Yeongwol into a Taebaek-Samcheok coast shortcut simply because the places look close on a map.',
    accommodationNote:
      'Strongest stay-planning angle: one Donggang camping or rafting group and one town-core history group. Keep the observatory as an officially sourced optional night plan because it was not personally visited.',
    sections: [
      {
        title: 'Why the Donggang can justify one night',
        body:
          'Five recent visits centered on camping and rafting make the river the strongest first-hand reason to stay. The combination of water, mountains, and cliffs feels distinct even within Gangwon, especially in summer and autumn.',
      },
      {
        title: 'Why the film trend belongs here',
        body:
          'The 2026 film Wang-gwa Saneun Namja drew more than 16 million admissions and visibly renewed interest in Cheongnyeongpo and Jangneung. It belongs on the page, but as an entrance into Danjong history rather than a replacement for it.',
      },
      {
        title: 'Why Cheongnyeongpo comes before a full checklist',
        body:
          'The short ferry crossing can feel inconvenient, especially for some older travelers, yet it is also what makes the visit memorable and makes Danjong\'s isolation physically understandable. Jangneung is quieter and more modest; the two can be paired, but neither requires collecting every Danjong-related site.',
      },
      {
        title: 'Build the driving order from the outside in',
        body:
          'Gossi Cave sits farther from the town-side cluster, so see it first when it is part of the day. Then move toward Cheongnyeongpo, Jangneung, and Seobu Market. The roads felt better than expected, but a car remains much easier than public transport for dispersed sights.',
      },
      {
        title: 'Lower the priority of photo-checklist stops',
        body:
          'The Korean Peninsula-shaped terrain is a recognized scenic site, but travelers focused on rafting, camping, or Danjong history can lower its priority. That is an itinerary judgment, not a claim of first-hand disappointment: the editor did not personally visit it.',
      },
      {
        title: 'Why the night sky should stay in the page',
        body:
          'Byeolmaro Observatory remains a useful weather-dependent option, not an editor-tested recommendation. The page should direct travelers to confirm reservations, access, and visibility rather than promise it as the payoff of every overnight.',
      },
    ],
    decisions: [
      {
        title: 'Follow the Danjong sites',
        bestFor: 'History travelers, film viewers, families, and visitors who want one unusual access experience.',
        why:
          'Prioritize Cheongnyeongpo for the ferry and enclosed landscape; add the small, quiet Jangneung when time allows.',
      },
      {
        title: 'Stay for the Donggang',
        bestFor: 'Campers, rafters, and families who want the overnight itself to be part of the trip.',
        why:
          'Camping or rafting gives Yeongwol a stronger one-night purpose than simply extending a sightseeing checklist.',
      },
      {
        title: 'Keep a day trip selective',
        bestFor: 'Drivers linking Jecheon to Jeongseon without a river overnight.',
        why:
          'Start with distant Gossi Cave only if it matters, then choose Cheongnyeongpo, Jangneung, and Seobu Market rather than trying to prove that every named viewpoint was visited.',
      },
    ],
    stayZones: [
      {
        title: 'Camp beside the river',
        areaLabel: 'Donggang / valley side',
        bestFor: 'Rafting, camping, families, and a landscape-led one-night stop.',
        why:
          'This is the stay style supported most clearly by the editor\'s repeated visits and the strongest reason to give Yeongwol more than a day.',
      },
      {
        title: 'Keep the town-core history stay',
        areaLabel: 'Yeongwol town / Jangneung side',
        bestFor: 'Danjong sites, practical food, and low-friction movement.',
        why:
          'This is the cleanest base when the page is built around Cheongnyeongpo, Jangneung, and the film-revival route.',
      },
      {
        title: 'Treat the observatory as optional',
        areaLabel: 'Byeolmaro side',
        bestFor: 'Travelers who verify weather, reservations, and road access in advance.',
        why:
          'It can extend the evening, but this page does not present it as a first-hand recommendation.',
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
          'Wang-gwa Saneun Namja drew more than 16 million admissions and sent travelers back into an older story. The visual treatment should still emphasize place and memory over fandom alone.',
        sourceLabel: 'Hankyung trend report',
        sourceHref: 'https://www.hankyung.com/article/2026040602997',
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
          'Korean business press reported more than 16 million admissions and a resulting visitor surge at Cheongnyeongpo and Jangneung in spring 2026.',
        sourceLabel: 'Hankyung visitor trend report',
        sourceHref: 'https://www.hankyung.com/article/2026040602997',
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
          'The editor\'s top revisit: a short ferry ride into the enclosed exile landscape that makes Danjong\'s story tangible.',
        note:
          'The crossing is mildly inconvenient but special; confirm ferry operation and accessibility before visiting.',
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
          'Expect a smaller, quieter royal tomb rather than a monumental complex. Pairing it with Cheongnyeongpo is useful, not compulsory.',
      },
      {
        id: 'yeongwol-town-stay',
        name: 'Donggang camping and rafting base',
        kind: 'stay',
        areaLabel: 'River overnight',
        coordinates: { lat: 37.1838, lng: 128.4617 },
        summary:
          'The editor-tested reason to stay one night: camp beside the river and build the trip around rafting or a slower landscape morning.',
        note:
          'Check operator safety notices, river levels, weather, and campground rules; one calm past visit is not a guarantee during heavy rain.',
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
          'The practical sequence supported by the editor\'s drives: Jecheon, Yeongwol, then Jeongseon.',
        note:
          'A car makes the dispersed sights much easier; if Gossi Cave is included, place the outlying cave before the town-side cluster.',
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
    mapTitle: 'A compact city where Seoraksan, lagoons, harbor food, and the sea overlap',
    mapIntro:
      'After living here for a year and returning about one hundred times, the useful lesson is simple: Sokcho city is compact, but Seoraksan is not a side stop. Give the mountain its own day and use Cheongchoho as the practical base for the city day.',
    mapCenter: { lat: 38.2045, lng: 128.5918 },
    supportSummary:
      'Two nights are the honest recommendation: one day for Cheongchoho, the market, gaetbae or Abai Village, and Dongmyeong Port; one separate day for Seoraksan. Sokcho Beach is clean and convenient, but repeat East Sea travelers can lower its priority.',
    roleSummary:
      'On Route 3, the experienced approach is Inje to Sokcho. Crossing the mountains creates a psychological and visual release, then the city compresses mountain views, two lagoons, ports, food, and urban services into short drives.',
    staySummary:
      'Stay in the Cheongchoho or town-center area for the best balance of food, evening activity, parking, and movement. A costly sea-view room is not essential: many inland-facing rooms trade the sea for a Seoraksan view.',
    foodSummary:
      'Food is a valid reason to visit, especially around Cheongchoho and Dongmyeong Port. The market is worthwhile once, but famous dakgangjeong and squid sundae felt more like first-visit experiences than foods the editor would repeatedly queue for.',
    nextLegSummary:
      'Pair Goseong with Sokcho for a quieter northern-coast rest, or Yangyang with Sokcho for a busier beach trip. The route from Inje into Sokcho is the most natural inland arrival; do not underestimate holiday and foliage-season driving time.',
    accommodationNote:
      'Strongest stay-planning angle: Cheongchoho/town for a two-night all-round base, Dongmyeong Port for evening food, and Seorak-dong only when the next morning belongs entirely to the mountain.',
    sections: [
      {
        title: 'What one year of living here changes',
        body:
          'Tourist zones and daily life do not split cleanly in compact Sokcho. Cheongchoho paths, harbor restaurants, apartments, hotels, markets, and mountain views overlap, while high-rise construction has rapidly changed the skyline.',
      },
      {
        title: 'Give Seoraksan a separate day',
        body:
          'The editor has taken the cable car to Gwongeumseong once and found it approachable outside peak foliage periods. Ulsanbawi is the next return goal, not a completed review. Trail controls and cable-car operation vary with weather and safety conditions, so check both official notices before leaving.',
      },
      {
        title: 'Use Cheongchoho as the city base',
        body:
          'Cheongchoho works for walking, exercise, night views, meals, and lodging in one area. Yeongnangho is the quieter alternative, while Dongmyeong Port adds the stronger evening-food choice without forcing a remote resort stay.',
      },
      {
        title: 'Treat famous market food as a first taste',
        body:
          'The market itself is worth seeing, and first-time visitors may still enjoy queueing for dakgangjeong or trying squid and Abai sundae. The editor found the famous versions less distinctive than their reputation and would spend repeat-visit food money around Cheongchoho or Dongmyeong Port instead.',
      },
      {
        title: 'Choose the coast by mood',
        body:
          'Goseong plus Sokcho suits a quieter rest; Yangyang plus Sokcho suits travelers comfortable with busier beach energy. Sokcho Beach is clean and convenient but not irreplaceable on a coast full of alternatives.',
      },
    ],
    decisions: [
      {
        title: 'Build a two-night first visit',
        bestFor: 'Travelers combining food, lagoons, harbor, and one Seoraksan experience.',
        why:
          'One day can stay compact inside the city; the other protects the mountain from becoming a rushed half-day add-on.',
      },
      {
        title: 'Prioritize Cheongchoho and Dongmyeong Port',
        bestFor: 'Food-focused travelers, evening walkers, families, and visitors who value urban convenience.',
        why:
          'These areas best support the editor\'s repeated experience of Sokcho as a lived city rather than a beach checklist.',
      },
      {
        title: 'Lower Sokcho Beach priority',
        bestFor: 'Repeat East Sea travelers or anyone with limited time.',
        why:
          'The beach is tidy and accessible, but the coast offers many substitutes; Sokcho\'s compact mountain-lagoon-city combination is harder to replace.',
      },
    ],
    stayZones: [
      {
        title: 'Stay around Cheongchoho',
        areaLabel: 'Best all-round city base',
        bestFor: 'Two-night visits, late meals, walks, families, and short drives across the city.',
        why:
          'This is where the editor stayed most often and where daily life, food, lodging, and night scenery overlap.',
      },
      {
        title: 'Stay toward Dongmyeong Port',
        areaLabel: 'Harbor evening',
        bestFor: 'Seafood, restaurants, harbor atmosphere, and a livelier night.',
        why:
          'It offers more practical evening value than paying only for a beachfront view.',
      },
      {
        title: 'Stay toward Seorak-dong',
        areaLabel: 'Mountain-first morning',
        bestFor: 'Travelers who have already reserved a full day for Seoraksan.',
        why:
          'Choose it for access, not as the default Sokcho base; current trail, weather, parking, and cable-car conditions still need checking.',
      },
    ],
    visuals: [
      { eyebrow: 'Compact city base', title: 'Cheongchoho joins exercise paths, night views, food, and lodging', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sokcho%20Beach.jpg', alt: 'Sokcho city, lagoon, mountain, and East Sea context', body: 'The useful Sokcho image is not sea alone: it is the tight overlap of lagoon, urban skyline, Seoraksan, and daily movement.', sourceLabel: 'VisitKorea Cheongchoho Lake', sourceHref: 'https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?menuSn=351&vcontsId=107605', licenseLabel: 'Official reference' },
      { eyebrow: 'First-visit food', title: 'The market is worth seeing even when its famous snacks are not repeat essentials', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20market%20in%20Sokcho.jpg', alt: 'Sokcho Tourist and Fishery Market seafood stalls', body: 'Keep the market in the itinerary, but separate the atmosphere from claims that one dakgangjeong or sundae shop is uniquely essential.', sourceLabel: 'VisitKorea Sokcho Tourism and Fisheries Market', sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174444', licenseLabel: 'Official reference' },
      { eyebrow: 'Short local experience', title: 'Gaetbae is optional but distinctly Sokcho', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Abai%20village%20-%205433869814.jpg', alt: 'Abai Village and gaetbae channel in Sokcho', body: 'A bridge can complete the crossing, so the boat is not essential transport. Choose it for a brief local experience and keep the village\'s displacement history visible.', sourceLabel: 'Korea Tourism Organization gaetbae data', sourceHref: 'https://data.visitkorea.or.kr/linkedview/129468', licenseLabel: 'Official reference' },
    ],
    officialReferences: [
      { eyebrow: 'Official city source', title: 'Sokcho officially presents mountain, sea, lagoons, and ports together', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sokcho%20Beach.jpg', alt: 'Sokcho and Seoraksan reference', body: 'The city tourism portal groups Seoraksan, Cheongchoho, Yeongnangho, beaches, ports, gaetbae, and markets, supporting the editor\'s compact multi-landscape reading.', sourceLabel: 'Sokcho City tourism portal', sourceHref: 'https://sokcho.go.kr/ct/tour', licenseLabel: 'Official reference', usageNote: 'Use for current attraction listings and city-wide geography; recheck changing operations separately.' },
      { eyebrow: 'Market source', title: 'Sokcho market supports the food-arrival layer', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fish%20market%20in%20Sokcho.jpg', alt: 'Sokcho market seafood reference', body: 'The central market source supports Sokcho as seafood, snack, and local evening city rather than only a scenic endpoint.', sourceLabel: 'VisitKorea Sokcho Tourism and Fisheries Market', sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=174444', licenseLabel: 'Official reference', usageNote: 'Use for market, food, and street-level arrival.' },
      { eyebrow: 'Official lagoon source', title: 'Cheongchoho supports the practical night-and-walk base', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sokcho%20Beach.jpg', alt: 'Cheongchoho and Sokcho city context', body: 'VisitKorea describes the five-kilometer lagoon in the city center, its walking environment, mountain views, and illuminated night scenery.', sourceLabel: 'VisitKorea Cheongchoho Lake', sourceHref: 'https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?menuSn=351&vcontsId=107605', licenseLabel: 'Official reference', usageNote: 'Use to support Cheongchoho as the town base rather than only a scenic stop.' },
      { eyebrow: 'Official coastal source', title: 'Bada Hyanggi-ro is a walking trail, not a drive', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sokcho%20Beach.jpg', alt: 'Sokcho coastal trail context', body: 'Sokcho City describes the 890-meter Oeongchi coastal route as a four-section walking trail with seasonal access hours.', sourceLabel: 'Sokcho City Bada Hyanggi-ro', sourceHref: 'https://www.sokcho.go.kr/ct/tour/attraction/nature?contentSeq=70', licenseLabel: 'Official reference', usageNote: 'Keep the editor\'s coastal-drive memory separate from the pedestrian trail and verify current access hours.' },
    ],
    points: [
      { id: 'sokcho-cheongchoho', name: 'Cheongchoho city base', kind: 'stay', areaLabel: 'Everyday Sokcho', coordinates: { lat: 38.1998, lng: 128.5907 }, summary: 'The editor-tested all-round base for walks, night views, food, lodging, and short city drives.', note: 'Best default for a two-night visit; summer pricing and parking still need current checks.' },
      { id: 'sokcho-dongmyeong', name: 'Dongmyeong Port evening', kind: 'food', areaLabel: 'Harbor food', coordinates: { lat: 38.2119, lng: 128.6012 }, summary: 'The editor\'s preferred harbor for restaurants, nearby services, and evening atmosphere.', note: 'Do not promise an international ferry: passenger routes and port operations are time-sensitive.' },
      { id: 'sokcho-market', name: 'Sokcho Tourist and Fishery Market', kind: 'food', areaLabel: 'First-visit market', coordinates: { lat: 38.2042, lng: 128.5907 }, summary: 'Worth visiting once for atmosphere and choice, even if famous snacks do not guarantee a repeat purchase.', note: 'Parking is the main friction; avoid presenting one branded shop as the only correct choice.' },
      { id: 'seoraksan-access', name: 'Seoraksan full-day departure', kind: 'mobility', areaLabel: 'Separate mountain day', coordinates: { lat: 38.17, lng: 128.485 }, summary: 'A dedicated day for the mountain instead of squeezing it between the beach and market.', note: 'Gwongeumseong cable car is the editor-tested option; Ulsanbawi is a future goal. Check park and operator notices separately.' },
      { id: 'sokcho-beach', name: 'Sokcho Beach', kind: 'recovery', areaLabel: 'Optional sea stop', coordinates: { lat: 38.1894, lng: 128.6031 }, summary: 'A clean, convenient beach whose priority can drop for repeat East Sea travelers.', note: 'Changing beachfront attractions and operations require a current check; the beach itself has many regional alternatives.' },
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
        image: '/images/clipartkorea/mungyeong/cm280021904.jpg',
        alt: 'Licensed real gateway image for Mungyeong Saejae',
        body:
          'Mungyeong becomes memorable when the route visibly passes through something. The gate image matters because it turns abstract inland travel into a concrete threshold.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/mungyeong/cm280021904.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Pass-country atmosphere',
        title: 'The open film-set edge makes the crossing feel spatial, not symbolic only',
        image: '/images/clipartkorea/mungyeong/tc00240100625.jpg',
        alt: 'Licensed real pass-country image for Mungyeong',
        body:
          'The city works best when the pass has visual breadth. This is what helps the overnight feel like a chapter in the land rather than a random place to stop the car.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/mungyeong/tc00240100625.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Slow-route detail',
        title: 'Craft, omija, and mining memory keep the crossing present tense',
        image: '/images/clipartkorea/mungyeong/cm260021026.jpg',
        alt: 'Licensed real civic-detail image for Mungyeong',
        body:
          'Not every useful image has to be monumental. Smaller details keep Mungyeong from reading like a scenic backdrop and make room for chasabal pottery, omija, old tunnels, and the working memory behind the route.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/mungyeong/cm260021026.jpg',
        licenseLabel: 'Internal',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official tourism source',
        title: 'Mungyeongsaejae is the proof that this is pass country',
        image: '/images/clipartkorea/mungyeong/cm280021904.jpg',
        alt: 'Licensed real gateway image for Mungyeong Saejae',
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
        image: '/images/clipartkorea/mungyeong/tc00240100625.jpg',
        alt: 'Licensed real pass-country image for Mungyeong',
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
        image: '/images/clipartkorea/mungyeong/cm260021026.jpg',
        alt: 'Licensed real civic-detail image for Mungyeong',
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
        image: '/images/clipartkorea/mungyeong/cm260021026.jpg',
        alt: 'Licensed real local-detail image for Mungyeong',
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
        image: '/images/clipartkorea/mungyeong/cm260021026.jpg',
        alt: 'Licensed real civic-detail image for Mungyeong',
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
        image: '/images/clipartkorea/andong/cm26005208.jpg',
        alt: 'Editorial route image for Andong cultural anchor',
        body:
          'The point of Andong is not speed. It is the moment the inland route stops feeling improvised and begins to feel like a deliberate chapter in Korea.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/andong/cm26005208.jpg',
        licenseLabel: 'Project asset',
      },
      {
        eyebrow: 'Stay logic',
        title: 'The overnight matters because the city accumulates value slowly',
        image: '/images/clipartkorea/andong/tc00240004359.jpg',
        alt: 'Editorial route image for Andong overnight mood',
        body:
          'Andong is strongest when you let the stay breathe. Its value does not land all at once like a viewpoint city; it builds through evening, dinner, and a slower next morning.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/andong/tc00240004359.jpg',
        licenseLabel: 'Project asset',
      },
      {
        eyebrow: 'Food identity',
        title: 'Dinner should be part of the route logic here',
        image: '/images/clipartkorea/andong/tc00240004386.jpg',
        alt: 'Editorial route image for Andong food identity',
        body:
          'Andong is one of the inland cities where a meal can justify the stop instead of merely servicing it. That is why the food layer deserves dedicated commercial space later.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/andong/tc00240004386.jpg',
        licenseLabel: 'Project asset',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'UNESCO reference',
        title: 'Hahoe is part of Korea’s representative historic clan-village heritage',
        image: '/images/clipartkorea/andong/cm26005208.jpg',
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
        image: '/images/clipartkorea/andong/tc00240004359.jpg',
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
        image: '/images/clipartkorea/andong/tc00240004386.jpg',
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
        image: '/images/clipartkorea/yeongdeok/tc02820009613.jpg',
        alt: 'Licensed real flavor image for Yeongdeok',
        body:
          'This stop matters because the coast should sometimes become edible, not just scenic. Crab identity is one of the clearest reasons Yeongdeok belongs on the route at all.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/yeongdeok/tc02820009613.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Smaller-town mood',
        title: 'The route gets lighter here before it gets heavier again',
        image: '/images/clipartkorea/yeongdeok/tc02640002191.jpg',
        alt: 'Licensed real small-town coastal image for Yeongdeok',
        body:
          'Yeongdeok is useful precisely because it does not feel like a large hinge city yet. It gives the coast one smaller-scale chapter before the south tightens up.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/yeongdeok/tc02640002191.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Coast-road atmosphere',
        title: 'A quiet road can justify a night as much as a major landmark can',
        image: '/images/clipartkorea/yeongdeok/tc08070000556.jpg',
        alt: 'Licensed real coast-road image for Yeongdeok',
        body:
          'The editorial value of Yeongdeok is not spectacle. It is the sensation of remaining on the coast long enough for the route to gain one more local chapter before the final hinge.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/yeongdeok/tc08070000556.jpg',
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
        image: '/images/clipartkorea/pohang/tc00240033945.jpg',
        alt: 'Licensed real hinge image for Pohang',
        body:
          'Pohang works because it is not a pure inland service city. The sea is still visible, which helps the route close one coastal chapter before Busan begins another.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/pohang/tc00240033945.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Late-route reset',
        title: 'A beach-facing city can still function like a practical handoff',
        image: '/images/clipartkorea/pohang/tc02840000757.jpg',
        alt: 'Licensed real late-route reset image for Pohang',
        body:
          'Pohang\'s advantage is that it can restore control without killing the coastal mood. That combination is what makes it such a useful final overnight candidate.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/pohang/tc02840000757.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Arrival strategy',
        title: 'The final southbound day should start cleaner than it ends',
        image: '/images/clipartkorea/pohang/cm26014070.jpg',
        alt: 'Licensed real arrival-strategy image for Pohang',
        body:
          'Pohang becomes valuable when it protects the final approach. The point is not one more stop for its own sake, but a better launch into Busan.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/pohang/cm26014070.jpg',
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
        image: '/images/clipartkorea/sangju/tc03140003036.jpg',
        alt: 'Licensed real corridor image for Sangju',
        body:
          'Sangju gets stronger when the route is read through the Nakdong corridor. The visual argument is not urban spectacle, but the long continuity of the river chapter that starts to dominate here.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/sangju/tc03140003036.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Route continuity',
        title: 'Sangju matters because the route stops feeling fragmented',
        image: '/images/clipartkorea/sangju/tc00240057882.jpg',
        alt: 'Licensed real route-continuity image for Sangju',
        body:
          'The city does not need a monumental image to justify itself. Its value is in the way the corridor begins to feel long, stable, and southbound from here.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/sangju/tc00240057882.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Pacing logic',
        title: 'A useful city can be worth more than a dramatic one',
        image: '/images/clipartkorea/sangju/tc00240013868.jpg',
        alt: 'Licensed real pacing image for Sangju',
        body:
          'Sangju earns its space because it helps tomorrow work better. That kind of practical value is exactly what makes it commercially and editorially useful on a route-first site.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/sangju/tc00240013868.jpg',
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
    mapTitle: 'A highland city worth choosing for one clear reason',
    mapIntro:
      'Use this map to choose, not collect. Taebaeksan and coal history can justify the difficult approach; Hwangji Pond, Geomnyongso, Hanwoo, and the coast descent are supporting decisions rather than automatic must-sees.',
    mapCenter: { lat: 37.1641, lng: 128.9856 },
    supportSummary:
      'Taebaek is most convincing as a Taebaeksan or industrial-history trip. The city\'s post-coal contraction is visible, evenings are quiet, and labeled attractions can feel modest. That honesty is more useful than pretending every traveler needs the stop.',
    roleSummary:
      'This is a remote highland choice. It gives Branch 2A industrial weight, but the road to Samcheok is steep and winding rather than a simple coast handoff.',
    staySummary:
      'General sightseeing rarely needs a Taebaek night. Stay in Jeongseon and use Taebaek as a day trip unless a winter sunrise, early hike, festival, or serious coal-history itinerary requires local sleep.',
    foodSummary:
      'Hanwoo is the editor\'s preferred meal hook, but not proof that any price is justified. Compare menus, choose one researched meal, and treat it as an optional reward after the mountain. Mul-dakgalbi remains a local option, not a first-hand recommendation.',
    nextLegSummary:
      'Do not force Taebaek and Samcheok into the same itinerary. The descent through the mountains is possible but demanding; most coast-focused travelers will find Gangneung-Donghae-Samcheok more coherent.',
    accommodationNote:
      'Short-visit judgment: default to a day trip from Jeongseon. Book Taebaek only when the mountain start time or a focused event makes the night necessary.',
    sections: [
      {
        title: 'A difficult city to reach should have a clear purpose',
        body:
          'The editor\'s first reaction on repeated short visits was how difficult the approach felt. The city is compact, the post-coal slowdown is visible, and late-evening choices are thin. Taebaek works when the traveler has chosen Taebaeksan or industrial history—not when a map checklist demands every attraction.',
      },
      {
        title: 'Coal history is serious, not decorative',
        body:
          'Official city sources describe coal as a major engine of Korean development and the mine closures after industrial restructuring as a cause of sharp population loss and economic contraction. The editor has not personally reviewed the Coal Museum, Cheoram Coal Mine History Town, or Tongri sites, so these remain researched choices rather than first-person endorsements.',
      },
      {
        title: 'Taebaeksan is the strongest first-hand reason to go',
        body:
          'A winter sunrise from Taebaeksan is the editor\'s clearest Taebaek memory. Winter gives the mountain its strongest identity; autumn gives drivers the easier scenic approach. Outside a mountain-led trip, the city becomes much harder to recommend broadly.',
      },
      {
        title: 'Source geography needs realistic expectations',
        body:
          'Hwangji Pond is associated with the Nakdonggang source and Geomnyongso with the Hangang source. Their geographic meaning is substantial, but their physical scale can disappoint visitors expecting dramatic scenery. Keep Hwangji as a brief city-core stop and visit Geomnyongso only when the source story or surrounding trail matters.',
      },
      {
        title: 'The Samcheok descent is not the easy coast route',
        body:
          'After the comparatively easier road toward High1, the drive changes. The route becomes steeper and more winding toward Taebaek and again toward Tongri and Samcheok. Use this as an intentional mountain crossing, not as the default way to build a comfortable east-coast trip.',
      },
      {
        title: 'Keep the meal proportionate to the stop',
        body:
          'Taebaek Hanwoo can be worth one meal, especially after Taebaeksan, but the editor did not find a dramatic difference from good beef bought elsewhere. Research the restaurant and price first. One meal can complete the day; it should not be the only reason for a costly detour.',
      },
    ],
    decisions: [
      {
        title: 'Go for Taebaeksan',
        bestFor: 'Winter sunrise trips, autumn mountain scenery, hikers, and highland-weather travelers.',
        why:
          'This is the strongest first-hand reason to accept the long approach and compact city.',
      },
      {
        title: 'Go for coal history',
        bestFor: 'Travelers studying Korean modernization, mining labor, company housing, and post-coal regional change.',
        why:
          'The museum and Cheoram network can make Taebaek nationally meaningful, but this recommendation is based on official research rather than the editor\'s direct review.',
      },
      {
        title: 'Skip Taebaek without a theme',
        bestFor: 'Travelers who do not hike, do not care about industrial history, or want an easy coast itinerary.',
        why:
          'Hwangji Pond and Geomnyongso alone rarely justify the difficult approach, and skipping the city is a valid planning decision.',
      },
    ],
    stayZones: [
      {
        title: 'Use the city core only when a night is necessary',
        areaLabel: 'Central Taebaek',
        bestFor: 'Early mountain starts, festivals, and focused industrial-history visits.',
        why:
          'Hwangji and basic logistics stay close, but evening activity and late food should not be assumed.',
      },
      {
        title: 'Base in Jeongseon for the general trip',
        areaLabel: 'Jeongseon / High1 side',
        bestFor: 'Travelers combining the region without an early Taebaeksan requirement.',
        why:
          'Jeongseon offers the stronger overnight base; drive into Taebaek for the chosen purpose and return the same day.',
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
        title: 'Hwangji matters more on a map than in scale',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taebaeksan%20Mountain.jpg',
        alt: 'Taebaek highland reference',
        body:
          'Keep the Nakdonggang source story, but set expectations: this is a brief city-core pond, not a dramatic natural spectacle.',
        sourceLabel: 'VISITKOREA Hwangji Pond',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=351&vcontsId=80903',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Optional reward',
        title: 'One researched Hanwoo meal is enough',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taebaeksan%20Mountain.jpg',
        alt: 'Taebaek highland reference for Hanwoo food identity',
        body:
          'Hanwoo can complete a Taebaeksan day, but compare prices and do not assume that the local label guarantees a dramatic difference.',
        sourceLabel: 'VISITKOREA Taebaek Eutteum Hanu',
        sourceHref: 'https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=188477',
        licenseLabel: 'External reference',
      },
      {
        eyebrow: 'Difficult crossing',
        title: 'Samcheok is possible, not the easy default',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taebaeksan%20Mountain.jpg',
        alt: 'Taebaek highland-to-coast route reference',
        body:
          'The steep, winding descent belongs to travelers who chose a mountain crossing. A normal coast trip works better through Gangneung and Donghae.',
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
        note: 'Allow a short stop and arrive for geographic meaning rather than visual scale.',
      },
      {
        id: 'taebaek-hanwoo-meal',
        name: 'Taebaek Hanwoo meal anchor',
        kind: 'food',
        areaLabel: 'Central Taebaek',
        coordinates: { lat: 37.166, lng: 128.989 },
        summary: 'The food-pride layer that keeps Taebaek current and warm rather than only post-coal.',
        note: 'Compare prices and use this as an optional reward, not a mandatory reason to detour.',
      },
      {
        id: 'taebaek-samcheok-handoff',
        name: 'Steep Samcheok crossing',
        kind: 'mobility',
        areaLabel: 'Eastbound exit',
        coordinates: { lat: 37.235, lng: 129.09 },
        summary: 'A steep, winding inland-to-coast connection for an intentional mountain route.',
        note: 'Do not present this as the easiest way to reach Samcheok; the Gangneung-Donghae coast line is simpler.',
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
        image: '/images/clipartkorea/cheonan/tc00240110360.jpg',
        alt: 'Editorial route image for Cheonan early reset',
        body:
          'This city earns time by turning the rushed Seoul exit into a calmer, more legible route opening.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/cheonan/tc00240110360.jpg',
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
        image: '/images/clipartkorea/daejeon/cm26002727.jpg',
        alt: 'Editorial route image for Daejeon central corridor split',
        body:
          'The city earns its place when the user can immediately tell whether this is a tight station night or a more restorative Yuseong night.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/daejeon/cm26002727.jpg',
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
        image: '/images/clipartkorea/daegu/tc00240077172.jpg',
        alt: 'Editorial route image for Daegu southern reset',
        body:
          'This stop works because the route suddenly picks up city heat, markets, and food again before the final descent.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/daegu/tc00240077172.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Food logic',
        title: 'Dinner matters more here than in most other Route 1 cities',
        image: '/images/clipartkorea/daegu/cm280033716.jpg',
        alt: 'Editorial route image for Daegu food-led urban evening',
        body:
          'Daegu is where the route can stop being purely geographic and become urban again.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/daegu/cm280033716.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Final momentum',
        title: 'A strong reset here makes Busan land better',
        image: '/images/clipartkorea/daegu/cm26003055.jpg',
        alt: 'Editorial route image for Daegu station-side handoff',
        body:
          'Used well, Daegu strengthens the end of Route 1 instead of delaying it.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/daegu/cm26003055.jpg',
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
        image: '/images/clipartkorea/gumi/tc00240093236.jpg',
        alt: 'Editorial route image for Gumi middle-corridor reset',
        body:
          'Not every useful stop has to perform loudly. Gumi improves Route 1 by lowering the route\'s noise before Daegu raises it again.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/gumi/tc00240093236.jpg',
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
        image: '/images/clipartkorea/changnyeong/tc00240077354.jpg',
        alt: 'Editorial route image for Changnyeong lower-river recovery',
        body:
          'This stop matters because the route can get stronger by quieting down. It is a late-stage reset, not a missed climax.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/changnyeong/tc00240077354.jpg',
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
    mapTitle: 'A lived city between Daegwallyeong and the sea',
    mapIntro:
      'Use this map to separate the working city, Chodang and its literary history, the resort coast, and the road that continues south. Gangneung is easier to plan once those different versions stop being treated as one beach strip.',
    mapCenter: { lat: 37.7519, lng: 128.8761 },
    supportSummary:
      'Gangneung combines something smaller east-coast towns cannot match in one place: KTX and road access, a useful city center, major historical sites, a strong traditional market, distinctive local food, and several very different ways to reach the sea.',
    roleSummary:
      'This is the essential east-coast base. Route 2 can end here, while drivers can use Gangneung as the practical starting point for a longer shoreline journey toward Donghae, Samcheok, and Busan.',
    staySummary:
      'A beachfront hotel is not automatically the best choice. Central Gangneung and the station side usually offer better value for food, heritage stops, and onward travel. Pay for Gyeongpo or Anmok when the view and resort atmosphere are the purpose of the stay.',
    foodSummary:
      'Chodang sundubu is the clearest regional starting point, but Chodang Sundubu Village now feels more visitor-facing than residential. Central Market and the downtown grid give a broader food plan; compare beachfront menus and do not choose a restaurant only because someone approaches you near the parking area.',
    nextLegSummary:
      'After Gangneung, Route 2 is complete. Continuing south should be framed as Route 4, where Donghae and Samcheok take over the coastline story.',
    accommodationNote:
      'Former-resident judgment: keep the city center as the default value choice and treat a beachfront room as an optional experience, not a Gangneung requirement.',
    sections: [
      {
        title: 'Gangneung beyond beaches and coffee',
        body:
          'Ojukheon connects Gangneung to Shin Saimdang and Yi I. Chodang holds the literary memory of Heo Gyun and Heo Nanseolheon alongside sundubu restaurants, cafes, pine paths, and the nearby sea. Daegwallyeong Old Road adds the history of the difficult crossing once used by officials, merchants, and scholars traveling between Yeongdong and the capital.',
      },
      {
        title: 'What growing up in Chodang changes',
        body:
          'The editor spent the secondary-school years in Chodang-dong, within walking distance of the sea, and has returned more than one hundred times for work over the past five years. That experience makes the visitor-resident divide hard to miss: the coast can be crowded and polished while older residential streets, aging buildings, and the working city tell a quieter story.',
      },
      {
        title: 'Keep Gyeongpo Lake; decide on Gyeongpo Beach',
        body:
          'Gyeongpodae Pavilion and Gyeongpo Lake still earn time for history and walking. Gyeongpo Beach is a separate choice: it suits travelers who enjoy a busy resort atmosphere, but in peak summer a quieter beach can make the day feel less managed by traffic, parking, and crowds.',
      },
      {
        title: 'Build two nights around different versions of the city',
        body:
          'Use one day for Central Market, Wolhwa Street, Chodang, Ojukheon, and the city food scene. Use the other for the coast, cafes, and leisure. A day trip is more convincing when it focuses on food and one compact area instead of collecting distant landmarks.',
      },
      {
        title: 'Arrive early enough to use the city',
        body:
          'Gangneung is not a late-night city in the way Seoul is. An early train or morning road arrival protects the useful part of the day; a late-evening arrival can leave little beyond check-in because many central businesses wind down by late evening.',
      },
      {
        title: 'Treat winter as a route condition',
        body:
          'Winter sea views can be beautiful, but snow, wind, and the Daegwallyeong crossing make this a less forgiving first visit. The editor remembers being isolated by heavy snow before the modern expressway era. Today the practical lesson is to check forecasts and road or rail conditions rather than treating the coast as weather-proof.',
      },
    ],
    decisions: [
      {
        title: 'Use the city center as the default base',
        bestFor: 'Food-led trips, heritage visits, budget-aware travelers, and clean onward departures.',
        why:
          'The station and central grid keep the market, local meals, taxis, and cultural stops useful without paying a beach-view premium.',
      },
      {
        title: 'Pay for the coast on purpose',
        bestFor: 'Travelers whose main goal is a resort atmosphere, sea view, or cafe-focused stay.',
        why:
          'Gyeongpo and Anmok can justify the premium when the room and shoreline are the experience, but the location is not automatically better for food or a wider city itinerary.',
      },
      {
        title: 'Drive the route from Seoul',
        bestFor: 'Travelers who want the journey through Gangwon to matter as much as arrival.',
        why:
          'KTX is the simplest direct move, but a car unlocks intermediate stops and makes dispersed Gangneung sights easier to combine. In summer, use public parking and expect congestion around Gyeongpo.',
      },
    ],
    stayZones: [
      {
        title: 'Choose the coast deliberately',
        areaLabel: 'Gyeongpo / Anmok',
        bestFor: 'Sea-view stays, cafe time, and resort-led trips with room in the budget.',
        why:
          'The coast earns its higher price when the view is part of the trip. It is less compelling when the priorities are local food, heritage, and efficient movement.',
      },
      {
        title: 'Stay near the station or city center',
        areaLabel: 'Gangneung Station / central grid',
        bestFor: 'Better-value rooms, market food, cultural visits, and easier onward travel.',
        why:
          'Most major zones remain a manageable taxi ride away, while downtown meals and the next departure stay simpler.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Lived Gangneung',
        title: 'Chodang joins literature, food, pines, and the sea',
        image: '/images/clipartkorea/gangneung/tc00240033488.jpg',
        alt: 'Editorial travel image for lived Gangneung near Chodang and the coast',
        body:
          'For a former Chodang resident, this is not a themed food stop. It is the neighborhood where literary memory and everyday coastal life overlap.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/gangneung/tc00240033488.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Stay decision',
        title: 'A sea view is optional; a useful base is not',
        image: '/images/clipartkorea/gangneung/tip249t012173.jpg',
        alt: 'Editorial travel image comparing Gangneung coastal and central stays',
        body:
          'Central Gangneung usually wins on value, food, and movement. Choose the shoreline when the coast itself is worth the premium.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/gangneung/tip249t012173.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Local judgment',
        title: 'Keep the lake and history separate from the beach crowd',
        image: '/images/clipartkorea/gangneung/tip249t012057.jpg',
        alt: 'Editorial travel image for Gangneung lake, heritage, and beach choices',
        body:
          'Gyeongpodae Pavilion and Gyeongpo Lake can stay on the plan even when peak-season Gyeongpo Beach does not.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/gangneung/tip249t012057.jpg',
        licenseLabel: 'Internal',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official culture source',
        title: 'Chodang carries the literary memory of Heo Gyun and Heo Nanseolheon',
        image: '/images/clipartkorea/gangneung/tc00240033488.jpg',
        alt: 'Present-day Gangneung scenery used alongside an official Chodang literary reference',
        body:
          'VisitKorea locates the memorial park in Chodang-dong and identifies Heo Gyun as the author of The Story of Hong Gildong and Heo Nanseolheon as a leading Joseon-era poet.',
        sourceLabel: 'VisitKorea memorial park guide',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=219820',
        licenseLabel: 'Official reference',
        usageNote:
          'Use the source for current visitor conditions and literary context; keep the editor\'s neighborhood memories separately labeled as personal experience.',
      },
      {
        eyebrow: 'Official history source',
        title: 'Ojukheon supports Gangneung as a city of history and major figures',
        image: '/images/clipartkorea/gangneung/tip249t012173.jpg',
        alt: 'Present-day Gangneung scenery used alongside an official Ojukheon reference',
        body:
          'VisitKorea identifies Ojukheon as the birthplace of Yi I and documents the associated house, shrine, pavilion, memorial hall, and Gangneung Municipal Museum.',
        sourceLabel: 'VisitKorea Ojukheon guide',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=110823',
        licenseLabel: 'Official reference',
        usageNote:
          'Use this source to verify the historical anchor and check current hours before travel.',
      },
      {
        eyebrow: 'Official city source',
        title: 'Central Market proves the downtown food plan is still active',
        image: '/images/clipartkorea/gangneung/tip249t012057.jpg',
        alt: 'Present-day Gangneung scenery used alongside the official Central Market guide',
        body:
          'Gangneung City describes Central Market as a long-standing Yeongdong distribution center that grew further after the KTX opening and the 2018 Winter Olympics, with public parking and ongoing market modernization.',
        sourceLabel: 'Gangneung City Central Market guide',
        sourceHref: 'https://www.gn.go.kr/www/contents.do?key=568',
        licenseLabel: 'Official reference',
        usageNote:
          'Use the city source for market history and facilities; individual stalls, menus, and opening times still need same-day checks.',
      },
      {
        eyebrow: 'Official weather source',
        title: 'Heavy snow belongs in the route plan, not only in an old memory',
        image: '/images/clipartkorea/gangneung/tc00240033488.jpg',
        alt: 'Gangneung route scenery used alongside an official regional climate reference',
        body:
          'The Korea Meteorological Administration documents the distinctive climate and heavy-snow conditions of Gangwon locations. Forecasts and road or rail notices should decide whether a winter crossing is sensible.',
        sourceLabel: 'Korea Meteorological Administration regional climate data',
        sourceHref: 'https://www.weather.go.kr/w/climate/statistics/region.do?area=2',
        licenseLabel: 'Official reference',
        usageNote:
          'Use the climate source for regional context and a current forecast for the actual travel decision.',
      },
    ],
    points: [
      {
        id: 'gangneung-chodang',
        name: 'Chodang lived-history quarter',
        kind: 'stay',
        areaLabel: 'Chodang-dong',
        coordinates: { lat: 37.7917, lng: 128.9146 },
        summary: 'Sundubu, cafes, pine-lined streets, and the Heo Gyun and Heo Nanseolheon literary site sit within reach of the sea.',
        note: 'Use Chodang to connect food and history instead of treating sundubu as an isolated restaurant stop.',
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
        summary: 'The practical base for Gangneung Station, Central Market, Wolhwa Street, better-value rooms, and a wider food plan.',
        note: 'Former-resident default: stay central unless a sea-view room is one of the main reasons for the trip.',
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
        id: 'gangneung-gyeongpo-choice',
        name: 'Gyeongpo lake-and-beach choice',
        kind: 'checkpoint',
        areaLabel: 'Gyeongpo',
        coordinates: { lat: 37.7956, lng: 128.9066 },
        summary: 'The pavilion and lake carry cultural and walking value; the beach adds a much busier seasonal resort layer.',
        note: 'Do not discard Gyeongpodae and the lake merely because peak-season Gyeongpo Beach is crowded.',
      },
      {
        id: 'gangneung-daegwallyeong-old-road',
        name: 'Daegwallyeong Old Road',
        kind: 'recovery',
        areaLabel: 'Seongsan / mountain threshold',
        coordinates: { lat: 37.6869, lng: 128.7805 },
        summary: 'Forest, valley terrain, and the historic crossing explain the mountain barrier behind modern Gangneung access.',
        note: 'Use it when the route needs history and landscape, but check trail and weather conditions before treating it as a casual stop.',
      },
    ],
  },
  pyeongchang: {
    slug: 'pyeongchang',
    city: 'Pyeongchang',
    mapTitle: 'Two Pyeongchangs: the tourism corridor and the quiet inland county',
    mapIntro:
      'Do not plan Pyeongchang as one compact town. Bongpyeong, Jinbu, and Daegwallyeong form the developed expressway tourism corridor; Pyeongchang-eup, Bangnim, and Mitan lead into a quieter inland landscape with fewer visitor services.',
    mapCenter: { lat: 37.3705, lng: 128.3902 },
    supportSummary:
      'Pyeongchang holds two national memories: the global spectacle of the 2018 Winter Olympics and the older documentary history of the Odaesan royal archive. Jinbu, Woljeongsa, and the National Museum of the Annals of the Joseon Dynasty give the county a cultural center independent of its resorts.',
    roleSummary:
      'This is an optional highland chapter, not a compulsory stop on the fastest route to Gangneung. Stay only after choosing a theme: winter sport, royal records, temple and forest quiet, meditation, food, or summer altitude.',
    staySummary:
      'Separate Jinbu and Odaesan from the Daegwallyeong resort cluster. Jinbu supports the museum, Woljeongsa, the fir forest, market life, and mountain food. Alpensia and Yongpyong support skiing, winter atmosphere, and late-evening resort services.',
    foodSummary:
      'Mountain-vegetable set meals are the editor\'s strongest regional recommendation, especially in Jinbu. Buckwheat, trout, hwangtae, beef, and osam bulgogi all have local visibility, but fame does not guarantee preference. Vegetarian travelers should confirm broth, seasoning, and side-dish ingredients rather than assuming a sanchae meal is vegan.',
    nextLegSummary:
      'After Pyeongchang, Daegwallyeong should feel like the final highland pass before Gangneung and the East Sea.',
    accommodationNote:
      'Former-resident judgment: one night works when the theme is clear; use two nights for a ski-led trip. A discounted resort stay can be excellent value, but full resort pricing is easy to overpay when most of the day will be spent elsewhere.',
    sections: [
      {
        title: 'Pyeongchang is not one destination',
        body:
          'The editor grew up in Jinbu, and the county never felt like a single city. The expressway line through Bongpyeong, Jinbu, and Daegwallyeong received most of the tourism and transport investment. The inland line through Pyeongchang-eup, Bangnim, and Mitan is quieter, less convenient, and more useful to travelers seeking rivers, valleys, and rural distance.',
      },
      {
        title: 'A childhood in Jinbu before the Olympic image',
        body:
          'The clearest memories are playing under an Odaecheon bridge on hot summer days, eating steamed corn with friends, sharing chicken baeksuk beside a valley, and sliding down snowy hills on fertilizer sacks. Repeated recent visits show a better-connected county, but that seasonal mountain life still explains Pyeongchang more honestly than a list of venues.',
      },
      {
        title: 'Royal records returned to Odaesan',
        body:
          'The National Museum of the Annals of the Joseon Dynasty preserves and interprets the surviving Odaesan copies of the royal annals and uigwe near their historic archive landscape. The Annals belong to UNESCO\'s Memory of the World Register, a documentary-heritage program distinct from UNESCO World Heritage.',
      },
      {
        title: 'Build the quietest version around Woljeongsa',
        body:
          'Pair the royal-annals museum with Woljeongsa and its approximately one-kilometer fir forest. Continue only if time and walking ability support Seonjaegil or the archive-site landscape. This is Pyeongchang\'s strongest non-ski day and the editor\'s first recommendation for travelers seeking genuine quiet.',
      },
      {
        title: 'Do not combine every region in one day',
        body:
          'Distances are longer than the county name suggests. KTX solves arrival but not the gaps between Jinbu, Odaesan, Bongpyeong, the resort cluster, and the inland county. A car is the practical tool for a multi-zone trip; otherwise choose one area and protect it.',
      },
      {
        title: 'Weather changes the mountain crossing',
        body:
          'The editor has driven through Daegwallyeong fog dense enough to make the road feel almost erased. Treat snow, ice, fog, and congestion as route decisions. Check current forecasts and transport notices instead of relying on Pyeongchang\'s strong snow-removal reputation.',
      },
    ],
    decisions: [
      {
        title: 'Choose Jinbu, the museum, and Woljeongsa',
        bestFor: 'History, forest walking, meditation, autumn foliage, and travelers who do not ski.',
        why:
          'This combines royal documentary heritage, Buddhist history, the fir forest, and a lived mountain town in one coherent area.',
      },
      {
        title: 'Choose Alpensia or Yongpyong',
        bestFor: 'Skiing, winter atmosphere, family resort facilities, and travelers needing reliable late-evening services.',
        why:
          'Alpensia feels newer and more compact; Yongpyong is the larger, older all-round complex. Compare packages because resort spending can rise quickly.',
      },
      {
        title: 'Use the inland line only on purpose',
        bestFor: 'Drivers seeking uncrowded rivers, valleys, rural scenery, and a slower route toward Jeongseon.',
        why:
          'Pyeongchang-eup and the inland county are not the easiest first-visit tourism base, but their lower visitor pressure is the point for the right traveler.',
      },
    ],
    stayZones: [
      {
        title: 'Stay for records, forest, and meditation',
        areaLabel: 'Jinbu / Odaesan',
        bestFor: 'Museum visits, Woljeongsa, fir-forest walks, meditation, and mountain food.',
        why:
          'This is the quieter and historically deeper Pyeongchang. Arrive early because restaurants and everyday services thin out at night.',
      },
      {
        title: 'Stay for winter sport and self-contained services',
        areaLabel: 'Alpensia / Yongpyong',
        bestFor: 'Skiing, Olympic venues, family facilities, and later meals inside the resort.',
        why:
          'The cluster makes winter logistics easy and can feel exceptional on a good package, but it should not be confused with Jinbu or the inland county.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Two national memories',
        title: 'The royal annals make Pyeongchang older than the Games',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpensia.jpg',
        alt: 'Pyeongchang highland context for its Olympic and royal-record histories',
        body:
          'The 2018 Winter Olympics created a global image; the Odaesan archive story preserves a much older national memory.',
        sourceLabel: 'National Museum of the Annals of the Joseon Dynasty',
        sourceHref: 'https://www.gogung.go.kr/sillok/main/contents.do?menuNo=1300028',
        licenseLabel: 'Official reference',
      },
      {
        eyebrow: 'Editor’s first choice',
        title: 'For genuine quiet, walk the Woljeongsa fir forest',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Korea-Pyeongchang-Woljeongsa-01.jpg',
        alt: 'Woljeongsa Temple in Pyeongchang on Odaesan Mountain',
        body:
          'The museum, fir forest, and temple form Pyeongchang’s strongest non-ski day and a coherent reason to stay in Jinbu.',
        sourceLabel: 'Wikimedia Commons Woljeongsa',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Korea-Pyeongchang-Woljeongsa-01.jpg',
        licenseLabel: 'CC BY 2.0 reference',
      },
      {
        eyebrow: 'Childhood geography',
        title: 'Odaecheon and Jinbu make the county feel lived',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Alpensia.jpg',
        alt: 'Pyeongchang highland reference for Jinbu and Odaecheon life',
        body:
          'Summer river play, steamed corn, valley meals, and improvised winter sleds explain the place before resort branding begins.',
        sourceLabel: 'Former-resident editorial memory',
        sourceHref: '/editorial-policy#research-method',
        licenseLabel: 'Personal experience',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'National museum source',
        title: 'The surviving Odaesan annals returned to their archive landscape',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Korea-Pyeongchang-Woljeongsa-01.jpg',
        alt: 'Woljeongsa and Odaesan landscape near the national royal-annals museum',
        body:
          'The national museum explains that the surviving Odaesan copies were removed to Japan, largely lost in the 1923 Great Kanto Earthquake, and eventually returned to Odaesan. The museum now preserves and interprets 75 surviving volumes.',
        sourceLabel: 'National Museum of the Annals of the Joseon Dynasty',
        sourceHref: 'https://www.gogung.go.kr/sillok/main/contents.do?menuNo=1300028',
        licenseLabel: 'Official reference',
        usageNote:
          'Use the museum for current display and visitor information; preservation needs mean not every volume should be assumed to be on view at once.',
      },
      {
        eyebrow: 'Official documentary-heritage source',
        title: 'The Annals are UNESCO Memory of the World',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Korea-Pyeongchang-Woljeongsa-01.jpg',
        alt: 'Odaesan cultural landscape used with an official documentary-heritage reference',
        body:
          'The Annals of the Joseon Dynasty are recognized as documentary heritage through UNESCO’s Memory of the World program. This is distinct from designation as a UNESCO World Heritage site.',
        sourceLabel: 'Korea Heritage Service UNESCO records guide',
        sourceHref: 'https://www.heritage.go.kr/heri/html/HtmlPage.do?pageNo=5_1_2_0&pg=%2Funesco%2FMemHeritage%2FMemHeritage_02.jsp',
        licenseLabel: 'Official reference',
        usageNote:
          'Keep the English terminology precise: Memory of the World documentary heritage, not World Heritage.',
      },
      {
        eyebrow: 'Official temple and forest source',
        title: 'Woljeongsa and its fir forest anchor the quiet itinerary',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Korea-Pyeongchang-Woljeongsa-01.jpg',
        alt: 'Woljeongsa Temple and Odaesan forest in Pyeongchang',
        body:
          'VisitKorea describes the Silla-era temple, its cultural treasures, the approximately one-kilometer path lined by more than 1,700 fir trees, and current Templestay programs.',
        sourceLabel: 'VisitKorea Woljeongsa guide',
        sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=351&vcontsId=110826',
        licenseLabel: 'Official reference',
        usageNote:
          'Check current parking, access, program, and seasonal conditions before travel.',
      },
      {
        eyebrow: 'Official wellness source',
        title: 'Ombieu is a meditation village, not a temple stay',
        image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Korea-Pyeongchang-Woljeongsa-01.jpg',
        alt: 'Odaesan forest context for a Pyeongchang meditation stay',
        body:
          'Pyeongchang Tourism identifies Odaesan Nature Meditation Village Ombieu as a separate accommodation and wellness facility offering experiences such as yoga and meditation.',
        sourceLabel: 'Pyeongchang Tourism Ombieu guide',
        sourceHref: 'https://tour.pc.go.kr/Home/H20000/H20200/placeDetail?curationGroup=2&order_column=1&page=1&pageSize=12&place_no=716&place_type=12&search_column=2&search_keyword=%EB%AA%85%EC%83%81&viewType=gallery',
        licenseLabel: 'Official reference',
        usageNote:
          'Do not describe Ombieu as Woljeongsa Templestay; they are different experiences and require separate booking checks.',
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
        id: 'pyeongchang-annals-museum',
        name: 'Royal annals museum and Woljeongsa line',
        kind: 'checkpoint',
        areaLabel: 'Jinbu / Odaesan',
        coordinates: { lat: 37.7215, lng: 128.5883 },
        summary: 'A compact cultural route linking returned royal records, the fir forest, Woljeongsa, and the historic archive landscape.',
        note: 'This is the strongest non-ski reason to give Pyeongchang a full day.',
      },
      {
        id: 'pyeongchang-jinbu',
        name: 'Jinbu access point',
        kind: 'mobility',
        areaLabel: 'Jinbu',
        coordinates: { lat: 37.636, lng: 128.556 },
        summary: 'The editor’s former home base and the practical gateway for Odaesan, local meals, the market, and KTX arrival.',
        note: 'Do not treat Jinbu as only a station transfer; it is the lived center of the Odaesan side.',
      },
      {
        id: 'pyeongchang-inland-line',
        name: 'Quiet inland county line',
        kind: 'recovery',
        areaLabel: 'Pyeongchang-eup / Bangnim / Mitan',
        coordinates: { lat: 37.3705, lng: 128.3902 },
        summary: 'A less-developed route of rivers, valleys, rural roads, and lower visitor pressure away from the expressway tourism belt.',
        note: 'Use it only with a car and enough time; its lack of headline attractions is part of the appeal.',
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
        image: '/images/clipartkorea/uljin/tc08070000559.jpg',
        alt: 'Editorial route image for Uljin coast continuity',
        body:
          'This is not the loudest east-coast stop, but it may be one of the most important for route shape because it keeps the shoreline from collapsing into only famous names.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/uljin/tc08070000559.jpg',
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
        image: '/images/clipartkorea/gyeongju/tc00240010970.jpg',
        alt: 'Editorial route image for Gyeongju historic handoff',
        body:
          'Used well, this city makes the end of Route 1 feel authored instead of simply completed.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/gyeongju/tc00240010970.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Stay logic',
        title: 'The difference between heritage core and Bomun matters here',
        image: '/images/clipartkorea/gyeongju/tc02520000276.jpg',
        alt: 'Editorial route image for Gyeongju stay logic',
        body:
          'Gyeongju is stronger when the user understands which style of overnight they are actually choosing.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/gyeongju/tc02520000276.jpg',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Busan setup',
        title: 'A strong Gyeongju stop makes Busan arrive cleanly',
        image: '/images/clipartkorea/gyeongju/tc00240032704.jpg',
        alt: 'Editorial route image for Gyeongju Busan setup',
        body:
          'This is the last major place on Route 1 where one overnight can still reshape the finish.',
        sourceLabel: 'Licensed real travel photograph',
        sourceHref: '/images/clipartkorea/gyeongju/tc00240032704.jpg',
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
    mapTitle: 'From Hangyeryeong and Osaek to Surfyy Beach, Hajodae, and Naksan',
    mapIntro:
      'This map follows a route the editor knows from about fifty summer work visits: enter from Inje over Hangyeryeong for the strongest mountain arrival, descend through Osaek, choose a beach base, and use Naksan as the natural northbound step toward Sokcho.',
    mapCenter: { lat: 38.0754, lng: 128.619 },
    supportSummary:
      'Yangyang is a mountain-to-sea crossing before it is a surf brand. Hangyeryeong and Osaek create the western arrival; Surfyy Beach, Hajodae, Jukdo and Ingu, Naksan, and Naksansa create the eastern day; nearby Sokcho is the editor\'s most natural onward city.',
    roleSummary:
      'Its Route 4 role changes by direction. From Inje, Yangyang is the moment Seoraksan releases into the East Sea. From Gangneung it is a sequence of surf beaches before Naksan and Sokcho; from Sokcho it is the compact coast chapter before the road continues south.',
    staySummary:
      'The editor stayed near Hajodae and would choose a beachfront stay again. Use Hajodae for the proven all-round beach night, Jukdo or Ingu for a more surf-led evening, Naksan for a quieter temple-and-Sokcho plan, or Osaek only when the mountain side leads.',
    foodSummary:
      'Many everyday dishes overlap with the rest of Gangwon, so do not invent a long Yangyang-only food list. Matsutake is the clearest local distinction in official county tourism, but supply, price, and menu quality are seasonal and should be checked rather than promised.',
    nextLegSummary:
      'From the editor\'s repeated trips, Sokcho is the most natural next city because it is close and continues the northern coast without a forced detour. Southbound travelers can reverse the same logic toward Gangneung, while the mountain variant returns west through Osaek and Hangyeryeong toward Inje.',
    accommodationNote:
      'Strongest firsthand stay judgment: choose a lodging property near the beach around Hajodae again; use Jukdo/Ingu, Naksan, or Osaek only when a more specific route purpose outweighs that default.',
    sections: [
      {
        title: 'Firsthand boundary: repeated summer driving, not every-season expertise',
        body:
          'The editor visited Yangyang about fifty times, mainly for summer work, drove in from Gangneung, Sokcho, and Inje, and personally visited the main places discussed here. That repetition supports route, stay-zone, and pacing judgments. It does not justify claims about every winter road, surf lesson, trail day, restaurant, or current lodging property.',
      },
      {
        title: 'The strongest arrival is Inje to Hangyeryeong to Osaek',
        body:
          'The editor\'s clearest recommendation is the west-to-east drive from Inje over Hangyeryeong into Osaek. The official county description also treats the pass as the old Yeongseo-to-Yeongdong crossing and a major Seoraksan viewpoint. Let the driver concentrate on the mountain road and stop only where parking and access are legal.',
      },
      {
        title: 'Osaek deserves more than a drive-through label',
        body:
          'Osaek is the release point after the pass and the gateway to the southern Seoraksan side. Official sources identify Jujeongol, Osaek Mineral Spring, and trail access here, but mountain conditions, reservations, seasonal controls, and roadside parking rules must be checked on the actual travel day.',
      },
      {
        title: 'The editor\'s one-day coast order is Surfyy Beach to Naksan',
        body:
          'For a selective summer day, begin with Surfyy Beach and the Hajodae-side coast, then move north to Naksan Beach and Naksansa. This order lets the day shift from contemporary beach culture into temple, pavilion, and cliff-edge history instead of collecting a repetitive string of beaches.',
      },
      {
        title: 'Hajodae is the proven overnight choice',
        body:
          'The editor has stayed near Hajodae and would choose a beachfront property again. The reason is practical rather than fashionable: the sea remains the evening and morning anchor, while Surfyy, Jukdo, Naksan, and the north-south coast road remain easy to understand from a central beach base.',
      },
      {
        title: 'No personal red flag does not mean no seasonal friction',
        body:
          'Across those visits, the editor did not experience one standout problem with congestion, parking, overpricing, crowding, or disappointment worth turning into a warning. That is a personal record, not a guarantee. Summer weekends, beach events, weather, road controls, and accommodation prices still need a current check.',
      },
    ],
    decisions: [
      {
        title: 'Enter through Hangyeryeong when the drive is part of the trip',
        bestFor: 'Drivers coming from Inje who want the strongest landscape transition.',
        why:
          'This is the editor\'s top Yangyang recommendation after about fifty visits: Seoraksan dominates the descent into Osaek and makes the arrival itself memorable.',
      },
      {
        title: 'Use Surfyy Beach to Naksan for one day',
        bestFor: 'Travelers who want one modern coast stop and one historical coast stop.',
        why:
          'It is the editor\'s own compact order and creates more contrast than trying to visit every beach between Hajodae and Sokcho.',
      },
      {
        title: 'Sleep near Hajodae beach',
        bestFor: 'Summer road trips, beach mornings, and travelers who want a reliable coast-first base.',
        why:
          'The editor stayed in this area and would choose the beachfront again; that repeat choice is stronger evidence than a generic accommodation list.',
      },
      {
        title: 'Continue to Sokcho',
        bestFor: 'Northbound travelers and short Gangwon itineraries.',
        why:
          'The editor found Sokcho the closest and most natural next city. It extends the coast and Seoraksan story without adding a complicated transfer.',
      },
    ],
    stayZones: [
      {
        title: 'Repeat the Hajodae beachfront choice',
        areaLabel: 'Hajodae coast',
        bestFor: 'The most balanced beach night and an easy summer morning.',
        why:
          'This is the editor\'s firsthand default after staying nearby: keep the sea close and decide the next day between Surfyy, Naksan, Sokcho, or the south coast.',
      },
      {
        title: 'Choose Jukdo or Ingu for surf-first evenings',
        areaLabel: 'Jukdo / Ingu coast',
        bestFor: 'Surf access, cafes, and a more social beach atmosphere.',
        why:
          'Use this when surfing or the contemporary beach scene is the real purpose rather than treating it as the automatic Yangyang base.',
      },
      {
        title: 'Move north to Naksan for temple and Sokcho',
        areaLabel: 'Naksan / Naksansa',
        bestFor: 'Naksansa, sunrise, a quieter night, and a simple next move to Sokcho.',
        why:
          'This side brings the older East Sea story into the overnight and reduces backtracking for a northbound itinerary.',
      },
      {
        title: 'Use Osaek only for a mountain-led night',
        areaLabel: 'Osaek / southern Seoraksan',
        bestFor: 'Early trail access, valley walks, and travelers crossing from Inje.',
        why:
          'Osaek is a purposeful mountain base, not the best substitute for a beach stay. Confirm trail controls and parking before committing.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Firsthand mountain arrival',
        title: 'Hangyeryeong makes the descent into Yangyang part of the destination',
        image: '/images/clipartkorea/yangyang/tip249t003055_l.jpg',
        alt: 'Winding Hangyeryeong road through the green rocky peaks of Seoraksan',
        body:
          'This verified Hangyeryeong road photograph matches the editor\'s strongest recommendation: cross from Inje, let Seoraksan define the drive, and descend into Osaek before the coast.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tip249t003055',
        licenseLabel: 'Project licensed JPG (WEB)',
      },
      {
        eyebrow: 'Contemporary coast',
        title: 'Surfyy Beach opens the editor\'s one-day coast order',
        image: '/images/clipartkorea/yangyang/tc00240092126.jpg',
        alt: 'Surfboard and beach facilities on the Yangyang surf coast',
        body:
          'Use the surf scene as the morning\'s modern contrast, not as a claim that every visitor must take a lesson or that the editor personally evaluated one.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240092126',
        licenseLabel: 'Project licensed asset',
      },
      {
        eyebrow: 'Temple coast',
        title: 'Naksansa gives the afternoon historical weight',
        image: '/images/clipartkorea/yangyang/tc00240001341.jpg',
        alt: 'Hongryeonam hermitage at Naksansa above waves on the Yangyang coast',
        body:
          'The cliff-edge temple image explains why Surfyy-to-Naksan works as a day: the second half is not simply another beach but a shift into history, prayer, and East Sea views.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240001341',
        licenseLabel: 'Project licensed asset',
      },
      {
        eyebrow: 'Hajodae stay coast',
        title: 'Hajodae supports the beach lodging decision',
        image: '/images/clipartkorea/yangyang/cm28011380.jpg',
        alt: 'Rocky pine-covered coast and open East Sea at Hajodae in Yangyang',
        body:
          'The Hajodae coast holds together the editor\'s repeated stay choice, the surf-side morning, and the easy north-south route toward Naksan or Gangneung.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=cm28011380',
        licenseLabel: 'Project licensed asset',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official source',
        title: 'Yangyang County confirms Hangyeryeong as the old mountain crossing',
        image: '/images/clipartkorea/yangyang/tip249t003055_l.jpg',
        alt: 'Hangyeryeong road winding through Seoraksan toward Yangyang',
        body:
          'The county tourism page describes Osaekryeong, commonly called Hangyeryeong, as the historic Yeongseo-to-Yeongdong route and a place for major Seoraksan views. That official context supports the editor\'s firsthand recommendation without replacing it.',
        sourceLabel: 'Yangyang Tourism - Osaekryeong (Hangyeryeong)',
        sourceHref: 'https://tour.yangyang.go.kr/pub/yy10view.do?mode=v&seq=68',
        licenseLabel: 'Project licensed asset + official research',
        usageNote:
          'Use the official page for historical and place context. Check live navigation and road-control notices before driving the pass.',
      },
      {
        eyebrow: 'Official source',
        title: 'National-park guidance keeps Osaek planning honest',
        image: '/images/clipartkorea/yangyang/tip249t003055_l.jpg',
        alt: 'Seoraksan peaks and Hangyeryeong road above Osaek',
        body:
          'Korea National Park Service guidance warns that trail periods and controls can change and that parking on National Road 44 around the Hangyeryeong road is not allowed for the referenced trail access. Mountain access must be checked separately from the scenic drive.',
        sourceLabel: 'Korea National Park Service trail guidance',
        sourceHref: 'https://reservation.knps.or.kr/contents/T/serviceGuide.do?parkId=B03&prdDvcd=T&vrteId=TB031XXX03',
        licenseLabel: 'Official research reference',
        usageNote:
          'Do not convert the editor\'s good summer drive into a blanket safety or parking guarantee. Use current KNPS notices on the travel day.',
      },
      {
        eyebrow: 'Official source',
        title: 'Naksansa turns the coast from trend into history',
        image: '/images/clipartkorea/yangyang/tc00240001341.jpg',
        alt: 'Naksansa Hongryeonam hermitage above the East Sea in Yangyang',
        body:
          'Yangyang Tourism records Naksansa\'s Silla-era foundation tradition, Uisangdae, Hongryeonam, and its rebuilding after the 2005 wildfire. This is the historical counterweight in the editor\'s Surfyy-to-Naksan day.',
        sourceLabel: 'Yangyang Tourism - Naksansa',
        sourceHref: 'https://tour.yangyang.go.kr/pub/yy10view.do?mode=v&seq=114',
        licenseLabel: 'Project licensed asset + official research',
        usageNote:
          'Opening times and fees shown on tourism pages can change; verify them directly before publication or travel.',
      },
      {
        eyebrow: 'Official source',
        title: 'Matsutake is the clearest local food distinction',
        image: '/images/clipartkorea/yangyang/cm28011381.jpg',
        alt: 'Pine-covered rocky landscape on the Yangyang coast',
        body:
          'Yangyang County lists matsutake first among its representative foods and explains its seasonal dishes. The page should use that as a local identity cue while avoiding a promise of year-round supply, fixed prices, or a personally verified restaurant.',
        sourceLabel: 'Yangyang Tourism - local food',
        sourceHref: 'https://tour.yangyang.go.kr/pub/yyfood.do',
        licenseLabel: 'Official research reference',
        usageNote:
          'The landscape image is contextual, not a matsutake photograph. Keep food claims seasonal and verify menus directly.',
      },
    ],
    points: [
      {
        id: 'yangyang-hangyeryeong',
        name: 'Hangyeryeong mountain crossing',
        kind: 'mobility',
        areaLabel: 'Inje to Osaek',
        coordinates: { lat: 38.109, lng: 128.403 },
        summary: 'The editor\'s strongest Yangyang arrival and the dramatic Yeongseo-to-Yeongdong transition.',
        note: 'Check live road conditions and stop only where parking is legal and safe.',
      },
      {
        id: 'yangyang-osaek',
        name: 'Osaek and southern Seoraksan',
        kind: 'checkpoint',
        areaLabel: 'Osaek',
        coordinates: { lat: 38.076, lng: 128.45 },
        summary: 'The mountain-side arrival, valley, mineral-spring, and trail-planning zone.',
        note: 'Separate a scenic road stop from a real hike; current KNPS controls decide access.',
      },
      {
        id: 'yangyang-hajodae-surfyy',
        name: 'Surfyy Beach and Hajodae stay coast',
        kind: 'stay',
        areaLabel: 'Hajodae / Hyunbuk-myeon',
        coordinates: { lat: 38.027, lng: 128.718 },
        summary: 'The editor\'s proven beach-stay area and the first half of a one-day coast plan.',
        note: 'Choose a beachfront stay for the same practical coast-first reason the editor would repeat.',
      },
      {
        id: 'yangyang-naksansa',
        name: 'Naksan and Naksansa heritage side',
        kind: 'checkpoint',
        areaLabel: 'Naksan coast',
        coordinates: { lat: 38.124, lng: 128.627 },
        summary: 'The historical second half of the editor\'s Surfyy-to-Naksan day.',
        note: 'Use the temple and cliff coast to create contrast rather than adding another similar beach stop.',
      },
      {
        id: 'yangyang-sokcho-handoff',
        name: 'Sokcho handoff line',
        kind: 'mobility',
        areaLabel: 'Northbound coast',
        coordinates: { lat: 38.17, lng: 128.607 },
        summary: 'The closest and most natural next-city move in the editor\'s repeated experience.',
        note: 'Use Sokcho after Naksan when the itinerary continues north; reverse the same coast logic for Gangneung.',
      },
    ],
  },
  donghae: {
    slug: 'donghae',
    city: 'Donghae',
    mapTitle: 'From Mangsang through Eodal and Chuam to Samcheok',
    mapIntro:
      'This map follows the editor\'s real southbound order after more than fifty mainly work visits: enter from Gangneung, use Mangsang as the northern beach stop, pause at the small fishing coast around Eodal, finish at Chuam, and continue naturally to Samcheok.',
    mapCenter: { lat: 37.5247, lng: 129.1143 },
    supportSummary:
      'Donghae is not presented here as a spectacular resort city. In the editor\'s repeated summer and winter experience, it is a compact east-coast city with a stronger industrial and working-harbor tone than Sokcho, two tidy beaches at Mangsang and Chuam, and one unusually strong food memory: sea-urchin sujebi beside Eodal Harbor\'s everyday parking-and-fishing scene.',
    roleSummary:
      'Its clearest Route 4 role is a grounded transition between Gangneung and Samcheok: less polished as a tourism brand than Sokcho, but honest, compact, and easy to read from north to south.',
    staySummary:
      'The editor has not stayed overnight in Donghae, so this page does not pretend to rank hotels. Choose Mangsang only for a beach-first morning, central Donghae for logistics, or Chuam when the next move to Samcheok matters most, then verify the actual property independently.',
    foodSummary:
      'The standout firsthand food memory is sea-urchin sujebi at Eodal Harbor. Recommend checking restaurants around the Eodal seafood street for that dish rather than promising one permanent shop, fixed recipe, price, or year-round sea-urchin supply.',
    nextLegSummary:
      'Samcheok is the editor\'s natural next city. The sequence Mangsang to Eodal to Chuam already points south, so continuing across the short city boundary avoids backtracking and keeps the coast leg coherent.',
    accommodationNote:
      'No firsthand lodging claim: the editor repeatedly visited for work but did not sleep in Donghae. Any stay-zone guidance below is route planning, not a personal hotel review.',
    sections: [
      {
        title: 'Firsthand boundary: more than fifty visits, but only three reviewed stops',
        body:
          'The editor has visited Donghae more than fifty times, mainly for work in summer and winter, usually arriving by car from the Gangneung direction. The places personally reviewed here are Mangsang Beach, Eodal Harbor, and Chuam Beach. Mukho, Mureung Valley, caves, attractions, and hotels are not presented as firsthand evaluations.',
      },
      {
        title: 'The city feels small, practical, and industrial rather than resort-led',
        body:
          'The editor\'s strongest overall memory is the contrast with Sokcho. Donghae feels smaller and carries a more visible industrial and working-city color. That is a repeated personal impression, not a criticism or an official slogan, and it is more useful than forcing the city into the same romantic-resort language used elsewhere on the east coast.',
      },
      {
        title: 'Mangsang and Chuam are clean, easy beach stops rather than revelations',
        body:
          'The editor remembers both Mangsang and Chuam as tidy and pleasant, but not radically different from other good Gangwon beaches. That honest limit improves the itinerary: use Mangsang to open the southbound coast and Chuam to close the Donghae chapter, without spending the whole day collecting similar sand-and-sea views.',
      },
      {
        title: 'Eodal is ordinary in appearance and exceptional in one food memory',
        body:
          'Eodal felt like a small neighborhood fishing village rather than a staged attraction. Near the parking area, the editor repeatedly noticed people fishing close to the breakwater and rocky shore; that ordinary local-use scene is more accurate than a polished marina image. The memorable part was a bowl of sea-urchin sujebi, strong enough to become the page\'s main food recommendation. Treat both details as firsthand memory and search current Eodal-area menus rather than guaranteeing every restaurant.',
      },
      {
        title: 'The real southbound order is Mangsang to Eodal to Chuam',
        body:
          'Coming from Gangneung, begin at Mangsang, follow the coast through Eodal for a meal, then finish at Chuam before entering Samcheok. The editor did not identify enough must-see sights to justify a packed full-day checklist, so this is a selective driving sequence rather than a claim that Donghae requires a full day.',
      },
      {
        title: 'No personal red flag is not a universal guarantee',
        body:
          'Across those visits, the editor did not experience a standout problem with parking, traffic, crowding, overpricing, or disappointment. That record should not erase summer beach congestion, winter coastal weather, changing construction, or restaurant conditions; check live information for the travel date.',
      },
    ],
    decisions: [
      {
        title: 'Use Donghae selectively rather than filling a checklist',
        bestFor: 'Drivers who value an honest coast stop, one good meal, and minimal backtracking.',
        why:
          'After more than fifty visits, the editor still does not describe Donghae as a city of many indispensable attractions. The stronger recommendation is to keep only the places that earn their position in the route.',
      },
      {
        title: 'Drive Mangsang to Eodal to Chuam',
        bestFor: 'Southbound travelers arriving from Gangneung and continuing to Samcheok.',
        why:
          'This is the editor\'s actual geographic order. It starts at the northern beach, uses Eodal as the meal pause, and ends beside the Samcheok boundary without reversing direction.',
      },
      {
        title: 'Make Eodal the food stop',
        bestFor: 'Travelers who prefer a small fishing-village meal to another large attraction.',
        why:
          'Sea-urchin sujebi at Eodal is the strongest specific memory in the editor\'s Donghae record. Verify the current restaurant, menu, price, and availability before going.',
      },
      {
        title: 'Continue directly to Samcheok',
        bestFor: 'A southbound east-coast itinerary with no overnight requirement in Donghae.',
        why:
          'Chuam naturally hands the road to Samcheok. The editor found that continuation more convincing than diverting inland toward Taebaek or returning north to Gangneung.',
      },
    ],
    stayZones: [
      {
        title: 'Use Mangsang for a beach-first morning',
        areaLabel: 'Mangsang coast',
        bestFor: 'A northern beach base, camping, and travelers arriving late from Gangneung.',
        why:
          'This is a route-based option supported by official tourism facilities, not the editor\'s personal lodging review. Check the exact accommodation and seasonal operation independently.',
      },
      {
        title: 'Choose central Donghae only for logistics',
        areaLabel: 'Cheongok / central Donghae',
        bestFor: 'City services, a practical work stay, and balanced access north and south.',
        why:
          'The center may reduce route friction, but the editor did not stay there and does not attach a personal hotel recommendation to the area.',
      },
      {
        title: 'Use Chuam for the Samcheok handoff',
        areaLabel: 'Chuam / southern Donghae',
        bestFor: 'A sunrise-first stop and the shortest onward move into Samcheok.',
        why:
          'Choose this only when the next morning\'s southbound route matters more than evening city atmosphere. Verify lodging access and parking directly.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Compact working city',
        title: 'Donghae reads differently when the harbor and city share one frame',
        image: '/images/clipartkorea/donghae/tc00240021279.jpg',
        alt: 'Compact Donghae city blocks and working harbor seen from above',
        body:
          'The port, low-rise neighborhoods, and mountain edge support the editor\'s repeated impression of a small working city whose industrial color matters as much as its beaches.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240021279',
        licenseLabel: 'Project licensed asset',
      },
      {
        eyebrow: 'Northern beach',
        title: 'Mangsang opens the route without needing exaggerated claims',
        image: '/images/clipartkorea/donghae/tip2440005210.jpg',
        alt: 'Waves reaching the broad sandy shore at Mangsang Beach in Donghae',
        body:
          'This verified Mangsang photograph matches the editor\'s restrained judgment: a clean, useful beach at the northern end of the city, not a reason to invent an entire day of similar coast stops.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tip2440005210',
        licenseLabel: 'Project licensed asset',
      },
      {
        eyebrow: 'Southern checkpoint',
        title: 'Chuam closes Donghae before the road enters Samcheok',
        image: '/images/clipartkorea/donghae/tc00240042710.jpg',
        alt: 'Chuam Chotdaebawi sea stacks rising from the East Sea in Donghae',
        body:
          'Chuam supplies the strongest recognizable landscape on the editor\'s route and, more importantly, sits at the correct southern end for the onward drive to Samcheok.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240042710',
        licenseLabel: 'Project licensed asset',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official route check',
        title: 'Donghae City tourism supports the same north-to-south coast logic',
        image: '/images/clipartkorea/donghae/tip2440005210.jpg',
        alt: 'Mangsang Beach surf on the northern Donghae coast',
        body:
          'The city\'s official tourism material groups Mangsang, the Eodal restaurant area, and Chuam into its coastal and day-trip planning. The editor\'s shorter Mangsang-to-Eodal-to-Chuam order removes attractions not personally reviewed and keeps the direction of travel clear.',
        sourceLabel: 'Donghae City Tourism - themed and day routes',
        sourceHref: 'https://dh.go.kr/tour/index.do?menuCode=07020204',
        licenseLabel: 'Project licensed asset + official research',
        usageNote:
          'Use the official page to verify current attraction and course information; use the editor\'s sequence for the firsthand selective route.',
      },
      {
        eyebrow: 'Official beach context',
        title: 'Mangsang is the broad, facility-led northern beach',
        image: '/images/clipartkorea/donghae/tip2440005210.jpg',
        alt: 'Broad sand and active waves at Mangsang Beach in Donghae',
        body:
          'Donghae\'s official accessible-tourism page describes Mangsang through its wide sand, pine grove, shallow water, and nearby lodging and camping facilities. That context supports a northern beach or overnight role without turning the editor\'s untested lodging options into reviews.',
        sourceLabel: 'Donghae Open Tourism - Mangsang Beach',
        sourceHref: 'https://dh.go.kr/open/index.do',
        licenseLabel: 'Project licensed asset + official research',
        usageNote:
          'Beach operation, swimming zones, camping, weather, and accommodation services change; confirm them for the actual date.',
      },
      {
        eyebrow: 'Official city context',
        title: 'The official guide shows that Donghae extends beyond the editor\'s three stops',
        image: '/images/clipartkorea/donghae/tc00240021279.jpg',
        alt: 'Donghae harbor, city streets, and mountain backdrop',
        body:
          'Donghae City also lists Mukho, Nongoldam-gil, Dojebigol, Cheongok Cave, and Mureung Valley. They remain valid research options, but this page does not describe them as personally visited because the editor\'s evidence is limited to Mangsang, Eodal, and Chuam.',
        sourceLabel: 'Donghae City Tourism - official destination overview',
        sourceHref: 'https://www.dh.go.kr/tour/index.do',
        licenseLabel: 'Project licensed asset + official research',
        usageNote:
          'This reference widens planning choices while preserving a clear boundary between official research and firsthand experience.',
      },
    ],
    points: [
      {
        id: 'donghae-mangsang',
        name: 'Mangsang northern beach start',
        kind: 'checkpoint',
        areaLabel: 'Mangsang',
        coordinates: { lat: 37.594, lng: 129.09 },
        summary: 'The editor\'s clean northern beach stop and the correct start when arriving from Gangneung.',
        note: 'Use it selectively, then keep moving south rather than repeating similar beach stops.',
      },
      {
        id: 'donghae-eodal',
        name: 'Eodal fishing-village meal stop',
        kind: 'checkpoint',
        areaLabel: 'Eodal Harbor',
        coordinates: { lat: 37.566, lng: 129.118 },
        summary: 'A small ordinary-looking fishing coast with the editor\'s strongest Donghae food memory.',
        note: 'The editor remembers anglers using the parking-and-breakwater edge. Look for current sea-urchin sujebi menus without relying on an old restaurant name or guaranteed availability.',
      },
      {
        id: 'donghae-chuam',
        name: 'Chuam southern beach checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Chuam',
        coordinates: { lat: 37.477, lng: 129.158 },
        summary: 'The editor\'s tidy southern beach stop and the visual close of the Donghae sequence.',
        note: 'Finish here before continuing to Samcheok; verify coastal conditions and parking on busy dates.',
      },
      {
        id: 'donghae-samcheok-handoff',
        name: 'Samcheok handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound coast',
        coordinates: { lat: 37.46, lng: 129.165 },
        summary: 'The editor\'s most natural next-city move after Chuam.',
        note: 'Continue south into Samcheok rather than backtracking to Gangneung or diverting inland to Taebaek.',
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
    mapTitle: 'Four-zone Ulsan: rock art, restored river, whale history, and industrial coast',
    mapIntro:
      'Ulsan is not one compact stop. Use this source-researched map to choose among the western KTX and Bangucheon heritage branch, central Taehwagang and Samsan, southern Jangsaengpo, and eastern Daewangam before continuing to Busan.',
    mapCenter: { lat: 35.5384, lng: 129.3114 },
    supportSummary:
      'Ulsan earns a serious stop because four different Koreas meet across a wide metropolitan area: the UNESCO-listed Petroglyphs along the Bangucheon Stream, the recovered Taehwagang river corridor, Jangsaengpo whale-history sites, and Daewangam beside the shipbuilding coast.',
    roleSummary:
      'This is Route 4 in long historical perspective. Prehistoric coastal culture appears in the western rock art, modern production in automotive, shipbuilding, and petrochemical districts, and environmental repair in the national garden before the route reaches Busan.',
    staySummary:
      'For one practical night, use Samsan or the Taehwagang Station corridor for food and transport. Choose Dong-gu only when Daewangam and the eastern coast lead the trip, or Eonyang and the KTX station area only when the western heritage branch is the priority.',
    foodSummary:
      'Match food to the route: Eonyang bulgogi fits the KTX and petroglyph branch, central Ulsan keeps dinner flexible, and Bangeojin seafood fits the eastern coast. Whale cuisine is a personal ethical choice, not a required Ulsan experience.',
    nextLegSummary:
      'After Ulsan, continue south only after deciding which zone matters. For a Gijang-focused Busan day, the editor has personally used Taehwagang Station as a rail-to-Socar handoff to approach the northeast coast from the north instead of first driving through central Busan.',
    accommodationNote:
      'Strongest stay-planning angle: Samsan and Taehwagang Station for the default night, Dong-gu for a coast-led stay, and Eonyang or KTX Ulsan Station only for a western heritage plan.',
    sections: [
      {
        title: 'Research boundary: sourced city guidance with one firsthand transport tactic',
        body:
          'The heritage, museum, industrial, and ecological sections are built from UNESCO, Ulsan City, Ulsan tourism, and Nam-gu official sources. The specific Taehwagang Station-to-Gijang car-share tactic comes from the editor\'s own trip. Opening hours, transport intervals, car availability, road conditions, and museum operations still require a current check.',
      },
      {
        title: 'The four zones solve the transport problem',
        body:
          'KTX Ulsan Station sits west of the main urban core; it is not the downtown station. Bangucheon and Eonyang form the western branch, Taehwagang and Samsan the central base, Jangsaengpo the southern museum-and-port branch, and Daewangam the eastern coastal branch. Plan by zone before counting attractions.',
      },
      {
        title: 'Bangucheon became a world-heritage reason to stop',
        body:
          'The Petroglyphs along the Bangucheon Stream were inscribed on the UNESCO World Heritage List in 2025. The Daegok-ri and Cheonjeon-ri sites preserve images made across millennia, so this is not a minor roadside add-on. Give the western valley a protected half day or a full day and confirm access conditions in advance.',
      },
      {
        title: 'Taehwagang is evidence of environmental repair',
        body:
          'Ulsan City records a river-restoration campaign beginning in 2004 and the designation of Taehwagang as Korea\'s second national garden in 2019. The river corridor matters because it lets visitors read industrial growth and ecological repair in the same city rather than treating the garden as decorative scenery.',
      },
      {
        title: 'Jangsaengpo requires context, not nostalgia alone',
        body:
          'The Whale Museum and Whale Culture Village explain a port community shaped by whaling before Korea prohibited commercial whaling in 1986. Visit for maritime and labor history; do not turn whale meat into a compulsory food recommendation. The district is more useful when the ethical tension remains visible.',
      },
      {
        title: 'Daewangam and industry complete the eastern story',
        body:
          'Daewangam supplies pine paths, rocks, and open East Sea views, while the surrounding metropolitan coast shows the scale of shipbuilding and port infrastructure. Ulsan City identifies automotive, shipbuilding, and petrochemicals as core industries, so production is part of the destination story, not an inconvenient background to crop out.',
      },
    ],
    decisions: [
      {
        title: 'Build one balanced central overnight',
        bestFor: 'First-time visitors with roughly one night and part of two days.',
        why:
          'Base around Samsan, use Taehwagang for the recovery story, choose either Jangsaengpo or Daewangam for the first afternoon, and place the other on the following morning before Busan.',
      },
      {
        title: 'Give the west its own heritage branch',
        bestFor: 'Archaeology, UNESCO, and deep-history travelers arriving by KTX or car.',
        why:
          'Pair Eonyang and its bulgogi district with Bangucheon rather than crossing the entire metropolis for a quick coastal add-on. This respects both travel time and the heritage landscape.',
      },
      {
        title: 'Keep Ulsan to a coast-first half day',
        bestFor: 'Short itineraries whose main priority is reaching Busan.',
        why:
          'Choose Daewangam and one public industrial-harbor viewpoint, then continue south. It is better to omit the western branch honestly than to claim every major site fits comfortably.',
      },
      {
        title: 'Change from rail to car-share at Taehwagang Station',
        bestFor: 'Travelers continuing to Gijang\'s coast rather than central Busan.',
        why:
          'The editor has used this exact tactic: get off at Taehwagang Station, collect a pre-booked Socar, and approach Gijang from the north. It can avoid routing a rental car through Busan\'s denser center, but live traffic and vehicle availability decide whether it is actually the better choice that day.',
      },
    ],
    stayZones: [
      {
        title: 'Use Samsan and Taehwagang Station as the default',
        areaLabel: 'Central transport and dining corridor',
        bestFor: 'First visits, one-night plans, restaurants, and cross-city taxis or buses.',
        why:
          'It is the most practical compromise between the river, Jangsaengpo, Daewangam, and the southbound move. Do not confuse Taehwagang Station with the western KTX station.',
      },
      {
        title: 'Stay near the garden for a slower evening',
        areaLabel: 'Taehwagang and central river corridor',
        bestFor: 'Walking, cycling, river scenery, and travelers prioritizing ecological recovery.',
        why:
          'The river makes the overnight emotionally calmer, but check the exact hotel-to-station transfer rather than assuming the full garden is beside rail access.',
      },
      {
        title: 'Move east when Daewangam leads',
        areaLabel: 'Dong-gu and Daewangam coast',
        bestFor: 'Sunrise, coastal walks, shipbuilding-scale views, and a slower eastern morning.',
        why:
          'This saves backtracking when the coast is the main purpose, but it is less convenient for the KTX station and western heritage sites.',
      },
      {
        title: 'Use Eonyang or the KTX area for western heritage',
        areaLabel: 'Ulju-gun west',
        bestFor: 'Bangucheon, KTX arrivals, Eonyang bulgogi, and car-based heritage days.',
        why:
          'This is a branch base, not a substitute for downtown Ulsan. It makes sense only when the petroglyph landscape is central to the itinerary.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Eastern coast',
        title: 'Daewangam gives the industrial metropolis an open-sea edge',
        image: '/images/clipartkorea/ulsan/tc00240031101.jpg',
        alt: 'Daewangam coastal rocks and bridge in Ulsan',
        body:
          'Use the coast as the visual entrance, then explain that Dong-gu is one part of a much wider city rather than the whole itinerary.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240031101',
        licenseLabel: 'Project licensed asset',
      },
      {
        eyebrow: 'Central river',
        title: 'Taehwagang makes ecological recovery visible at city scale',
        image: '/images/clipartkorea/ulsan/tc00240097257.jpg',
        alt: 'Aerial view of the green Taehwagang river corridor through Ulsan',
        body:
          'This is the best visual proof that the garden belongs inside the industrial story: the green corridor and metropolitan fabric appear together.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240097257',
        licenseLabel: 'Project licensed asset',
      },
      {
        eyebrow: 'Jangsaengpo working coast',
        title: 'Jangsaengpo Harbor makes the maritime-industry story specific',
        image: '/images/clipartkorea/ulsan/tc00240100300_l.jpg',
        alt: 'Workboats, port facilities, and a refinery at Jangsaengpo Harbor in Ulsan',
        body:
          'This is verified as Jangsaengpo Harbor and shows workboats, port facilities, and the refinery landscape together. It supports the district\'s maritime and industrial context without being misrepresented as the Whale Museum.',
        sourceLabel: 'ClipartKorea licensed photo',
        sourceHref: 'https://www.clipartkorea.co.kr/search?menu=m&keyword=tc00240100300',
        licenseLabel: 'Project licensed asset',
      },
    ],
    officialReferences: [
      {
        eyebrow: 'Official source',
        title: 'UNESCO confirms the 2025 Bangucheon inscription',
        image: '/images/clipartkorea/ulsan/tc00240010809_l.jpg',
        alt: 'Rock face and stream at the Bangudae petroglyph site in Ulsan',
        body:
          'UNESCO\'s World Heritage Committee inscribed the Petroglyphs along the Bangucheon Stream in 2025. The licensed photograph is verified by its ClipartKorea metadata as the Ulsan Daegok-ri Bangudae petroglyph rock face and stream.',
        sourceLabel: 'UNESCO World Heritage Committee decision',
        sourceHref: 'https://whc.unesco.org/en/decisions/8954/',
        licenseLabel: 'Project licensed asset + official research',
        usageNote:
          'Use UNESCO for the inscription date and heritage status, and ClipartKorea content code tc00240010809 for the licensed image record.',
      },
      {
        eyebrow: 'Official source',
        title: 'Ulsan City documents the Taehwagang recovery timeline',
        image: '/images/clipartkorea/ulsan/tc00240097257.jpg',
        alt: 'Green Taehwagang river corridor and central Ulsan from above',
        body:
          'The official garden history records restoration work beginning in 2004 and national-garden designation in 2019, grounding the ecological-repair story in dates rather than slogans.',
        sourceLabel: 'Taehwagang National Garden official history',
        sourceHref: 'https://www.ulsan.go.kr/s/garden/contents.ulsan?mId=001001007000000000',
        licenseLabel: 'Official research reference',
        usageNote:
          'Use for the restoration chronology; verify festival schedules and garden operations separately before travel.',
      },
      {
        eyebrow: 'Official source',
        title: 'Jangsaengpo presents whaling as history to interpret',
        image: '/images/clipartkorea/ulsan/tc00240100300_l.jpg',
        alt: 'Jangsaengpo Harbor workboats and refinery landscape in Ulsan Nam-gu',
        body:
          'Nam-gu\'s official tourism page frames the Whale Museum and Whale Culture Village around the district\'s whaling-era history and the change that followed the 1986 prohibition. The licensed photograph shows the district\'s real working harbor rather than pretending to show a museum building.',
        sourceLabel: 'Ulsan Nam-gu whale tourism',
        sourceHref: 'https://www.ulsannamgu.go.kr/eng/contents/visiting/whale_tourism.do',
        licenseLabel: 'Project licensed asset + official research',
        usageNote:
          'ClipartKorea metadata identifies content code tc00240100300 as Jangsaengpo Harbor, Jangsaengpo-dong, Nam-gu, Ulsan. Keep the caption specific to the harbor.',
      },
      {
        eyebrow: 'Official source',
        title: 'Industry is part of Ulsan\'s public identity',
        image: '/images/clipartkorea/ulsan/cm27010493.jpg',
        alt: 'Illuminated industrial plant on the Ulsan coast at night',
        body:
          'Ulsan City identifies automobiles, shipbuilding, and petrochemicals as the industrial base that shaped the metropolitan economy. The page therefore keeps production visible instead of reducing Ulsan to coastal scenery.',
        sourceLabel: 'Ulsan City industrial overview',
        sourceHref: 'https://ulsan.go.kr/u/english/contents.ulsan?mId=001002001002000000',
        licenseLabel: 'Official research reference',
        usageNote:
          'Use public viewpoints and visitor facilities only; do not imply that operational industrial sites are general sightseeing grounds.',
      },
    ],
    points: [
      {
        id: 'ulsan-ktx-eonyang',
        name: 'KTX Ulsan and Eonyang western base',
        kind: 'mobility',
        areaLabel: 'Ulju-gun west',
        coordinates: { lat: 35.5513, lng: 129.1386 },
        summary: 'The rail arrival and food base for the western heritage branch, not downtown Ulsan.',
        note: 'Use for Bangucheon and Eonyang bulgogi; allow a separate transfer to the central city.',
      },
      {
        id: 'ulsan-bangucheon',
        name: 'Bangucheon petroglyph landscape',
        kind: 'checkpoint',
        areaLabel: 'Daegok-ri and Cheonjeon-ri valley',
        coordinates: { lat: 35.608, lng: 129.174 },
        summary: 'The UNESCO-listed deep-history anchor in western Ulsan.',
        note: 'Give it a protected half day or full day and verify current access before departure.',
      },
      {
        id: 'ulsan-taehwagang',
        name: 'Taehwagang National Garden corridor',
        kind: 'recovery',
        areaLabel: 'Central Ulsan',
        coordinates: { lat: 35.547, lng: 129.299 },
        summary: 'The central evidence for ecological recovery and a calmer metropolitan stay.',
        note: 'Pair the walk with the official restoration history rather than presenting it as scenery alone.',
      },
      {
        id: 'ulsan-taehwagang-station-gijang',
        name: 'Taehwagang Station car-share handoff',
        kind: 'mobility',
        areaLabel: 'Taehwagang Station to Gijang',
        coordinates: { lat: 35.5396, lng: 129.3536 },
        summary: 'A firsthand rail-to-car tactic for approaching Busan\'s northeastern coast from Ulsan.',
        note: 'Reserve the vehicle first and check return rules, parking, live traffic, and whether the route is genuinely faster that day.',
      },
      {
        id: 'ulsan-jangsaengpo',
        name: 'Jangsaengpo whale-history district',
        kind: 'checkpoint',
        areaLabel: 'Nam-gu',
        coordinates: { lat: 35.504, lng: 129.38 },
        summary: 'The museum-and-port district for reading the city\'s whaling-era history critically.',
        note: 'Keep museum interpretation separate from any personal decision about whale cuisine.',
      },
      {
        id: 'ulsan-daewangam',
        name: 'Daewangam and eastern coast',
        kind: 'checkpoint',
        areaLabel: 'Dong-gu',
        coordinates: { lat: 35.492, lng: 129.439 },
        summary: 'The coast-first visual anchor beside the shipbuilding side of metropolitan Ulsan.',
        note: 'Best for a half day, sunrise, or the final morning before Busan.',
      },
      {
        id: 'ulsan-busan-handoff',
        name: 'Busan handoff line',
        kind: 'mobility',
        areaLabel: 'Southbound corridor',
        coordinates: { lat: 35.31, lng: 129.235 },
        summary: 'The southbound transition after the selected Ulsan zone is complete.',
        note: 'Skip cross-city backtracking if the Busan arrival time is the real priority.',
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
    mapTitle: 'How to divide Suncheon into workable travel zones',
    mapIntro: 'The National Garden and Suncheon Bay Wetland form one southern ecology axis, the station and city center form the practical base, and Naganeupseong belongs to a separate heritage day. The map is designed to stop a first visit from becoming an unrealistic checklist.',
    mapCenter: { lat: 34.9506, lng: 127.4872 },
    supportSummary: 'The strongest first visit gives one unhurried day to the National Garden and Suncheon Bay Wetland, with current opening hours and SkyCube operations checked before departure. Add a second day only when Naganeupseong, Seonamsa, or Songgwangsa is a real priority.',
    roleSummary: 'Suncheon is Route 5\'s ecological hinge because the city links tidal-flat wetlands, rivers, rice fields, rural communities, and the forested Jogyesan area. That wider UNESCO biosphere context is more meaningful than treating the bay as a sunset photo stop.',
    staySummary: 'Stay one night when sunset, bird habitat, or a full garden-and-wetland day is the purpose. If Yeosu night sea matters more and only one Suncheon attraction fits, make a selective stop and continue instead of adding an automatic overnight.',
    foodSummary: 'Use dinner to support the stay rather than inventing one compulsory dish. Suncheon City presents seasonal Namdo table settings as a representative food identity; compare current menus, minimum-order rules, and location before choosing a restaurant.',
    nextLegSummary: 'Yeosu is the natural sea-facing next leg, but do not let that pairing rush the wetland. Rail travelers can use the station-area base for the handoff; drivers can leave the heritage branch for a separate day and then continue south.',
    accommodationNote: 'Choose the station and terminal area for rail, buses, dinner, and an easy Yeosu handoff; choose the National Garden and Ocheon edge for an ecology-first morning; choose a Naganeupseong stay only when the rural heritage experience itself is the reason for the night.',
    sections: [
      {
        title: 'Research boundary: this is not a first-person visit report',
        body: 'This page is built from UNESCO, Suncheon City, the official garden and wetland operator, and Korea Tourism Organization sources. It offers planning judgments without claiming that the editor personally tested the route, lodging, restaurants, or seasonal conditions.',
      },
      {
        title: 'The National Garden and the wetland are not the same stop',
        body: 'The National Garden is the designed, accessible introduction to Suncheon\'s ecology; the wetland is the tidal-flat and reed habitat where conservation, light, weather, and bird movement matter. Official linked transport can reduce the transfer, but operating days and last departures must be checked.',
      },
      {
        title: 'One full day belongs to the ecology axis',
        body: 'A first visit should protect enough time to walk rather than photograph two entrances and leave. Use the garden for orientation and the wetland for the quieter landscape finish, reversing the order only when current hours, weather, or sunset plans make that more sensible.',
      },
      {
        title: 'A second day should have one heritage theme',
        body: 'Naganeupseong is a preserved walled town with inhabited neighborhoods and thatched houses, while Seonamsa and Songgwangsa create a separate Jogyesan temple branch. Pick the town plus one compatible stop; do not promise all three alongside the garden and wetland in one relaxed day.',
      },
      {
        title: 'Wildlife is habitat, not a guaranteed performance',
        body: 'UNESCO identifies Suncheon as an important wintering and stopover site for the endangered hooded crane, but sightings depend on season and conditions. Keep distance, follow access controls, and value the tidal-flat system even when the signature birds are not visible.',
      },
      {
        title: 'The Yeosu pairing is a choice, not the whole identity',
        body: 'Suncheon and Yeosu work well together because rail and road connections are practical, yet their reasons for staying are different. Keep Suncheon when ecology or rural heritage deserves time; move to Yeosu when the trip\'s real priority is harbor evenings, islands, and coastal nightlife.',
      },
    ],
    decisions: [
      { title: 'Give the ecology axis one full day', bestFor: 'First-time visitors, walkers, gardeners, photographers, and wildlife-minded travelers.', why: 'The National Garden and wetland have different jobs; a full day preserves both instead of reducing them to entrance photos.' },
      { title: 'Add a heritage second day', bestFor: 'Drivers, families, and travelers who care about lived folk architecture or mountain temples.', why: 'Naganeupseong and the Jogyesan sites sit outside the compact station-garden-wetland line and deserve their own pacing.' },
      { title: 'Make a selective stop before Yeosu', bestFor: 'Short south-coast trips whose main overnight goal is Yeosu.', why: 'Choose either the garden or wetland according to season and interest, then continue. An overnight is not automatically better when Suncheon is only a checklist item.' },
    ],
    stayZones: [
      { title: 'Base near Suncheon Station or the terminal', areaLabel: 'Transit-first city base', bestFor: 'Rail travelers, evening food access, and an easy next move to Yeosu.', why: 'This is the most flexible base when the itinerary mixes the ecology axis with regional transport. It does not place you inside the wetland, but it avoids isolating the whole stay around one attraction.' },
      { title: 'Stay near the National Garden and Ocheon area', areaLabel: 'Ecology-first base', bestFor: 'Travelers protecting an early garden start, a full walking day, or a quieter evening.', why: 'Choose it for access to the ecology axis, then verify the exact hotel-to-entrance route and evening dining options. It is less useful for a temple or Naganeupseong day.' },
      { title: 'Sleep in or near Naganeupseong', areaLabel: 'Rural heritage base', bestFor: 'Travelers who want a traditional-village night rather than maximum route efficiency.', why: 'Official tourism information lists inns and visitor facilities inside the walled-town area. Confirm current availability and access directly; this is a deliberate heritage stay, not the default base for the garden or Yeosu.' },
    ],
    visuals: [
      { eyebrow: 'Conservation first', title: 'Hooded cranes make the habitat visible, not predictable', image: '/images/clipartkorea/suncheon/tc02820006621.jpg', alt: 'Hooded cranes gathering in the Suncheon wetland landscape', body: 'The strongest image explains why the wetland needs quiet access and seasonal judgment rather than promising a guaranteed wildlife show.', sourceLabel: 'Licensed real travel photograph', sourceHref: '/images/clipartkorea/suncheon/tc02820006621.jpg', licenseLabel: 'Internal' },
      { eyebrow: 'Lived heritage', title: 'Naganeupseong gives the second day a different purpose', image: '/images/clipartkorea/suncheon/tc00240036519.jpg', alt: 'Thatched house and stone wall inside Naganeupseong Walled Town', body: 'The village belongs in a heritage branch, not as another quick box after the wetland. Its wall, houses, residents, and programs require a different pace.', sourceLabel: 'Licensed real travel photograph', sourceHref: '/images/clipartkorea/suncheon/tc00240036519.jpg', licenseLabel: 'Internal' },
    ],
    officialReferences: [
      { eyebrow: 'UNESCO ecology source', title: 'The biosphere reserve is larger than the famous reed field', image: '/images/clipartkorea/suncheon/tc02820006621.jpg', alt: 'Hooded cranes in Suncheon\'s wetland ecosystem', body: 'UNESCO describes a connected reserve of Suncheon Bay tidal flats, river corridors, rice-growing communities, and forest ecosystems around Jogyesan and Mohusan. It also identifies the bay as an important wintering and stopover site for endangered hooded cranes.', sourceLabel: 'UNESCO Man and the Biosphere Programme', sourceHref: 'https://www.unesco.org/en/mab/suncheon?hub=66369', licenseLabel: 'Official reference', usageNote: 'Use for the ecological network, 2018 biosphere nomination, and wildlife-conservation context; do not use it to guarantee a sighting on a specific day.' },
      { eyebrow: 'Current operations source', title: 'Garden, wetland, and linked transport need a same-day check', image: '/images/clipartkorea/suncheon/tc02820004910.jpg', alt: 'Suncheon Bay National Garden and surrounding city', body: 'The official operator publishes separate seasonal hours for the National Garden and wetland, plus operating information for SkyCube and the reed train. Closures and last departures can shape the entire day.', sourceLabel: 'Suncheonman National Garden official visitor guide', sourceHref: 'https://scbay.suncheon.go.kr/garden/0016/0001', licenseLabel: 'Official reference', usageNote: 'Check this page immediately before travel for current hours, closure days, ticket conditions, and transport operations instead of copying a permanent timetable into the guide.' },
      { eyebrow: 'Official heritage source', title: 'Naganeupseong is a walled town, not a decorative folk set', image: '/images/clipartkorea/suncheon/tc00240036519.jpg', alt: 'Traditional thatched house inside Naganeupseong Walled Town', body: 'Korea Tourism Organization describes a preserved fortress town with three neighborhoods, thatched houses, a walkable wall, resident life, visitor programs, inns, and restaurants.', sourceLabel: 'VISITKOREA Naganeupseong Walled Town', sourceHref: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=80266', licenseLabel: 'Official reference', usageNote: 'Use for the heritage-day and rural-stay logic. Confirm current program schedules, hours, and lodging directly before travel.' },
      { eyebrow: 'Official itinerary source', title: 'Suncheon City itself separates ecology and heritage into longer routes', image: '/images/clipartkorea/suncheon/tc00240036561.jpg', alt: 'Suncheon Bay tidal-flat landscape at sunset', body: 'The city publishes full-day ecology, history, and temple routes as separate themes and expands to one- and two-night courses when they are combined. That supports a selective itinerary rather than a rushed master checklist.', sourceLabel: 'Suncheon City recommended travel courses', sourceHref: 'https://www.suncheon.go.kr/tour/guide/0011/0001/', licenseLabel: 'Official reference', usageNote: 'Use the official routes as scope evidence, not as a promise that every listed stop fits every traveler or current opening schedule.' },
    ],
    points: [
      { id: 'suncheon-station-base', name: 'Suncheon Station city base', kind: 'stay', areaLabel: 'Transit and dinner', coordinates: { lat: 34.9458, lng: 127.5019 }, summary: 'The flexible base for rail, city meals, the ecology axis, and the next move to Yeosu.', note: 'Choose practicality here; verify the local connection to the entrance you plan to use.' },
      { id: 'suncheon-garden', name: 'Suncheon Bay National Garden', kind: 'checkpoint', areaLabel: 'Designed ecology', coordinates: { lat: 34.93, lng: 127.509 }, summary: 'The accessible orientation point for understanding Suncheon\'s garden-city project.', note: 'Treat it as a substantial walk, not a quick prelude. Check seasonal hours and linked transport before departure.' },
      { id: 'suncheon-bay', name: 'Suncheon Bay Wetland', kind: 'recovery', areaLabel: 'Tidal flat and reeds', coordinates: { lat: 34.885, lng: 127.509 }, summary: 'The conservation landscape where tidal flats, reeds, sunset, and migratory habitat replace the designed garden experience.', note: 'Wildlife and visibility are conditional. Follow current access rules and protect more time than a photo stop.' },
      { id: 'suncheon-nagan', name: 'Naganeupseong Walled Town', kind: 'checkpoint', areaLabel: 'Separate heritage branch', coordinates: { lat: 34.9066, lng: 127.3426 }, summary: 'The lived walled-town anchor for a second day or deliberate rural overnight.', note: 'It is outside the compact ecology line; a car, tour, or carefully checked bus plan is more realistic than improvising the transfer.' },
      { id: 'suncheon-yeosu-handoff', name: 'Yeosu handoff line', kind: 'mobility', areaLabel: 'South coast line', coordinates: { lat: 34.84, lng: 127.57 }, summary: 'The move from ecological and rural Suncheon into Yeosu\'s harbor, islands, and night sea.', note: 'Continue the same day when Yeosu is the real overnight priority; stay in Suncheon when the wetland or heritage branch still needs time.' },
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

function withLicensedPhotoCredit<T extends CitySupportProfileVisual | CitySupportOfficialReference>(
  visual: T,
): T {
  const match = visual.image.match(/^\/images\/clipartkorea\/[^/]+\/([a-z0-9]+)(?:-[^/]*)?\.(?:jpe?g|png|webp)$/i);
  if (!match) return visual;

  const assetCode = match[1];
  return {
    ...visual,
    sourceLabel: `ClipartKorea ${assetCode}`,
    sourceHref: `https://www.clipartkorea.co.kr/search?menu=m&keyword=${assetCode}`,
    licenseLabel: 'Licensed JPG (WEB)',
  };
}

export function getCitySupportProfile(citySlug: string): CitySupportProfile | null {
  const profile = citySupportProfiles[citySlug.toLowerCase()];
  if (!profile) return null;

  return {
    ...profile,
    visuals: profile.visuals.map(withLicensedPhotoCredit),
    officialReferences: profile.officialReferences?.map(withLicensedPhotoCredit),
  };
}


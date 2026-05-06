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
          'For riders, Chungju is not just another inland city. Tangeumdae, the certification-center logic, and the move toward Suanbo make it one of the first places where recovery, route identity, and the next day’s legs all intersect.',
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
          'Suanbo works because accommodation, baths, and recovery mood all line up with the next day’s terrain demands.',
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
          'A small but meaningful rider landmark that reinforces Chungju’s role inside long inland cycling lines.',
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
        bestFor: 'Travelers who want the easiest dinner-sleep-depart sequence without losing Andong’s cultural value.',
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
          'A practical lodging zone that keeps dinner, transit, and the next morning easy without losing access to the city’s identity.',
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
          'A directional point for the route’s next chapter once the inland cultural stop is complete.',
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
          'This is one of the places where food is not just support. It is one of the route’s arguments for stopping, which means restaurant and stay intent can sit together naturally on the page.',
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
          'A short meal-and-air stop can still preserve Yeongdeok’s value if the route acknowledges why the town matters.',
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
          'A directional point for the route’s move from flavor-heavy coast to late-route hinge city.',
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
          'This preserves the route’s shoreline identity while still giving the stop more urban control than the smaller towns to the north.',
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
          'Pohang’s advantage is that it can restore control without killing the coastal mood. That combination is what makes it such a useful final overnight candidate.',
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
          'Use this area to explain why the route’s identity changes after Mungyeong and settles into a clearer southern line.',
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
          'A slower stay near the water makes the threshold feel real and strengthens the route’s early editorial identity.',
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
          'This helps the page close with continuation and keeps the city’s role anchored in the route rather than in itself alone.',
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
      'Cheonan works best as an easy first reset. The station-and-terminal grid makes the stop simple, while temple-side or museum-side pauses add just enough local grounding to keep the route from feeling mechanical.',
    roleSummary:
      'On Route 1, Cheonan is the low-stakes first break. It earns space because it softens the first southbound block before bigger route decisions arrive further down the corridor.',
    staySummary:
      'Most travelers do not need a long Cheonan stay, but the city becomes useful when you want an uncomplicated first night or a first meal that breaks the Seoul momentum cleanly.',
    foodSummary:
      'This is a snack-and-reset city more than a destination dining city. Walnut-cookie logic, practical meals, and quick turnaround timing matter more than a headline restaurant hunt.',
    nextLegSummary:
      'After Cheonan the route usually sharpens. The next chapter either stays practical toward Daejeon or starts to feel more purposefully southbound.',
    accommodationNote:
      'Strongest stay-planning angle: practical station-side stays for late arrivals and low-friction first overnights.',
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
        title: 'Keep it quick',
        bestFor: 'Travelers who only need a first coffee, snack, or low-stakes pause.',
        why:
          'Cheonan works well when the stop is short and functional. It lets the route breathe without trying to become a full chapter.',
      },
      {
        title: 'Sleep once and move on',
        bestFor: 'Late departures from Seoul or travelers who want the first night to be calm and cheap.',
        why:
          'A short overnight here can be cleaner than forcing the route deeper on a tired first day.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the station-side grid',
        areaLabel: 'Station core',
        bestFor: 'Late arrivals and short overnights.',
        why:
          'The station and terminal area keeps the stop simple and protects the next morning departure.',
      },
      {
        title: 'Touch the slower outer edge',
        areaLabel: 'Temple side',
        bestFor: 'Travelers who want one softer local note before returning to the corridor.',
        why:
          'A brief detour here gives the stop more texture without turning it into a separate destination.',
      },
    ],
    visuals: [
      {
        eyebrow: 'First break',
        title: 'Cheonan works best when the first pause stays simple',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Cheonan route support',
        body:
          'This city earns time by reducing pressure early. Its usefulness comes from rhythm, not spectacle.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Corridor calm',
        title: 'A low-drama first stop can strengthen the whole route',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Cheonan corridor stop',
        body:
          'Cheonan is where Route 1 can stop feeling like a rush out of Seoul and start feeling paced.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Practical overnight',
        title: 'The value is in staying easy, not staying long',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Cheonan overnight logic',
        body:
          'The city is strongest when it protects energy for the bigger chapters further south.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
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
        id: 'cheonan-temple-edge',
        name: 'Temple-side checkpoint',
        kind: 'checkpoint',
        areaLabel: 'Outer edge',
        coordinates: { lat: 36.8712, lng: 127.2158 },
        summary: 'A softer outer-city pause when the first stop should feel a little more grounded.',
        note: 'Useful if the route needs calm before dropping back into the direct corridor.',
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
      'Daejeon works as the cleanest central split on Route 1. Station access, Yuseong-side recovery, and straightforward food zones make it one of the easiest cities to use well.',
    roleSummary:
      'This is the central stabilizer. Daejeon gives the direct corridor structure and protects energy without forcing a big editorial detour.',
    staySummary:
      'Station-core stays keep the transfer efficient. Yuseong-side stays make more sense when the overnight should feel more restorative and less purely logistical.',
    foodSummary:
      'The city is strongest when used for uncomplicated dinner, breakfast, and central-city reset culture rather than destination dining theatrics.',
    nextLegSummary:
      'After Daejeon, the route usually becomes more committed. The next major handoff often points toward Daegu or a deeper inland chapter.',
    accommodationNote:
      'Strongest stay-planning angle: station-core business stays and Yuseong-side recovery stays.',
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
        title: 'Stay by the station',
        bestFor: 'Tight timing, rail travelers, and low-friction central splits.',
        why:
          'This is the cleanest choice when the overnight is there to preserve momentum rather than add a new chapter.',
      },
      {
        title: 'Sleep toward Yuseong',
        bestFor: 'Drivers, cyclists, and travelers who want recovery to matter more.',
        why:
          'Yuseong helps the route feel warmer and more restorative without giving up the practical benefits of a central city.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the station grid',
        areaLabel: 'Daejeon Station',
        bestFor: 'Fast handoffs and simple overnight timing.',
        why:
          'This area protects route momentum and keeps the split clean.',
      },
      {
        title: 'Move west to Yuseong',
        areaLabel: 'Yuseong',
        bestFor: 'Recovery-led central overnights.',
        why:
          'This zone gives the city a stronger overnight personality and improves the next-day start.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Central split',
        title: 'Daejeon earns trust by staying easy',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Daejeon central split',
        body:
          'The city is useful because it stabilizes the route rather than fighting for attention.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Recovery option',
        title: 'Yuseong gives the central corridor a softer overnight',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Yuseong-side route stay',
        body:
          'The stronger version of Daejeon is not just transit. It is transit plus easier recovery.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Route discipline',
        title: 'A good split city protects energy for the southbound chapters',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Daejeon route discipline',
        body:
          'Daejeon is where Route 1 can stay controlled before the stronger southern cities take over.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
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
      'Gumi works as a low-drama corridor breather. It gives the direct line service, timing flexibility, and just enough river-edge calm to keep the middle stretch from flattening out.',
    roleSummary:
      'This is the middle-corridor breather. Gumi is useful because it helps the route rest without changing what kind of route it is.',
    staySummary:
      'The best use is usually a practical central stay or a short break before continuing to Daegu.',
    foodSummary:
      'Food matters here in a functional way: easy dinner, easy breakfast, easy restart. The route does not need a spectacle city every time it stops.',
    nextLegSummary:
      'After Gumi the route usually intensifies toward Daegu. That is why the city works best as a calmer prelude rather than a climax.',
    accommodationNote:
      'Strongest stay-planning angle: straightforward corridor hotels for one-night practical stops.',
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
        title: 'Use it as a breather only',
        bestFor: 'Drivers who just need a clean middle break.',
        why:
          'Gumi is strong when it stops the direct corridor from becoming numb without demanding a full chapter.',
      },
      {
        title: 'Sleep and hand off to Daegu',
        bestFor: 'Travelers who want a cheaper, quieter split before the route gets denser.',
        why:
          'This works when Daegu is still the bigger southern chapter but the current day is already full enough.',
      },
    ],
    stayZones: [
      {
        title: 'Keep the central business grid',
        areaLabel: 'Central Gumi',
        bestFor: 'Low-friction one-night stays.',
        why:
          'The city core is useful when the point is simply to preserve energy and continue well.',
      },
      {
        title: 'Touch the river-side edge',
        areaLabel: 'Nakdong side',
        bestFor: 'Travelers who want one lighter atmospheric cue before heading south.',
        why:
          'A brief river-side pause keeps the stop from feeling purely industrial or anonymous.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Middle corridor',
        title: 'Gumi matters because the middle of the route still needs care',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Gumi route support',
        body:
          'A practical city can still improve Route 1 when it keeps the long direct line from going flat.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Breather city',
        title: 'The route sometimes needs calm more than drama',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Gumi corridor breather',
        body:
          'Gumi is strongest when it makes the direct line easier to sustain rather than trying to overpower it.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Southbound setup',
        title: 'Used well, this city sets up the stronger southern chapter after it',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Gumi handoff',
        body:
          'Think of Gumi as a stabilizer that helps Daegu and the final route chapters land better.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
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
      'Changnyeong works as a lower-river calm node. It is quieter than Daegu and more useful when the route needs one more restorative chapter before Busan.',
    roleSummary:
      'This is the late river chapter. Its role is to reduce pressure and hold the route together before the final finish.',
    staySummary:
      'Most stays here should be simple and calm rather than urban and ambitious. The city is valuable when it keeps the route unforced.',
    foodSummary:
      'Use Changnyeong for practical meals that support rest and continuation. The appeal is route steadiness, not destination dining.',
    nextLegSummary:
      'After Changnyeong, Busan is close enough that the route should feel like a finish rather than a search for another identity.',
    accommodationNote:
      'Strongest stay-planning angle: quiet practical stays for riders and lower-river route users.',
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
        title: 'Keep it calm',
        bestFor: 'Cyclists and slower inland travelers.',
        why:
          'Changnyeong works best when it is allowed to stay simple and restorative.',
      },
      {
        title: 'Skip if you still want city energy',
        bestFor: 'Travelers who would get more value from a final Daegu or Busan-heavy night.',
        why:
          'The city is not trying to replace a major urban chapter. Its value is in the opposite direction.',
      },
    ],
    stayZones: [
      {
        title: 'Hold a quiet central stay',
        areaLabel: 'Town core',
        bestFor: 'Simple one-night resets.',
        why:
          'A straightforward center stay keeps the late route light and manageable.',
      },
      {
        title: 'Lean into the lower-river edge',
        areaLabel: 'Nakdong side',
        bestFor: 'Riders and slower late-route users.',
        why:
          'This side of the route emphasizes the calm that makes Changnyeong valuable at all.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Late calm',
        title: 'The route does not need a climax at every stop',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Changnyeong late-route calm',
        body:
          'Changnyeong matters because it keeps the southern finish from becoming noisy or overworked.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'River logic',
        title: 'This is where the lower corridor exhales',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Changnyeong river reset',
        body:
          'If Daegu sharpened the route, Changnyeong can soften it again before Busan.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Finish discipline',
        title: 'A cleaner rest here can make the final arrival stronger',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Changnyeong finish logic',
        body:
          'This is a support city for preserving the finish, not competing with it.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
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
      'Gangneung is the point of no return for the east-coast Route 1 line. Once you keep it, the trip stops being a direct Seoul-to-Busan transfer and becomes a coastal sequence with its own rhythm.',
    roleSummary:
      'This is the coast-entry anchor. Gangneung is where the east sea line gains identity fast through beach, cafe, and shoreline timing.',
    staySummary:
      'Beach-side stays favor atmosphere and a slower coastal morning. Station-side or central stays work better when the route needs easier onward timing.',
    foodSummary:
      'Gangneung should be used for coffee, breakfast, and the first clear coastal change in daily rhythm. It is less about efficiency and more about resetting the route to the sea.',
    nextLegSummary:
      'After Gangneung, the coast route cannot pretend to be practical anymore. It must start delivering shoreline continuity all the way south.',
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
        title: 'Stay by the beach',
        bestFor: 'Travelers who want the east-coast route to feel visibly committed.',
        why:
          'This is the version of Gangneung that makes the route unmistakably coastal.',
      },
      {
        title: 'Stay central and move on',
        bestFor: 'Travelers who want the coastal mood without slowing the route too much.',
        why:
          'A more central stay keeps the city useful while protecting the longer coast-day ahead.',
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
      'Uljin works because it preserves openness. It gives the east coast route room, continuity, and a quieter chapter before the stronger flavor and city nodes return further south.',
    roleSummary:
      'This is the long-coast continuity node. Uljin prevents the shoreline route from feeling compressed or over-edited.',
    staySummary:
      'The best stays are sea-facing and simple. The city does not need to be overbuilt to be useful.',
    foodSummary:
      'Food here is part of the coast rhythm rather than a major destination claim. Freshness, timing, and shoreline calm matter more than spectacle.',
    nextLegSummary:
      'After Uljin, the route can sharpen again toward Yeongdeok and Pohang without losing the feeling of having traveled a real coast.',
    accommodationNote:
      'Strongest stay-planning angle: simple shoreline stays for slower east-coast users.',
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
        bestFor: 'Slower drivers and riders who want the east sea line to feel spacious.',
        why:
          'Uljin helps the route feel traveled rather than merely optimized.',
      },
      {
        title: 'Skip it if only anchor cities matter',
        bestFor: 'Travelers who only want the strongest named coastal hubs.',
        why:
          'Its value is continuity, not concentration.',
      },
    ],
    stayZones: [
      {
        title: 'Hold a simple shoreline stay',
        areaLabel: 'Sea-facing strip',
        bestFor: 'One-night coast continuity stays.',
        why:
          'This is the cleanest way to let Uljin do its job without forcing too much itinerary weight onto it.',
      },
      {
        title: 'Use the central support grid',
        areaLabel: 'Uljin core',
        bestFor: 'Practical stops with easier meal and onward-movement logic.',
        why:
          'This version keeps the route usable while still preserving the long-coast chapter.',
      },
    ],
    visuals: [
      {
        eyebrow: 'Open shoreline',
        title: 'Uljin keeps the coast broad and believable',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Uljin coast continuity',
        body:
          'This is not the loudest east-coast stop, but it may be one of the most important for route shape.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Quiet chapter',
        title: 'The route benefits from one stretch that is more open than performative',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Uljin quiet coast',
        body:
          'Uljin is where the east sea line can simply be long, calm, and maritime.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
      },
      {
        eyebrow: 'Southward spacing',
        title: 'A calmer chapter makes later coastal anchors land harder',
        image: '/images/placeholder.png',
        alt: 'Placeholder view for Uljin southbound handoff',
        body:
          'The route becomes clearer when the big names do not arrive all at once.',
        sourceLabel: 'RoadToKorea placeholder',
        sourceHref: '/',
        licenseLabel: 'Internal',
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

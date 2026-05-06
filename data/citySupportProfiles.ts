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
      'Best future affiliate fit: one practical city-core stay group and one recovery-led Suanbo stay group.',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Suanbo_Hills.JPG',
        alt: 'A real landscape view over Suanbo in Chungju',
        body:
          'Suanbo is useful because it is an actual recovery town in the mountains, not just a hotel cluster. Even before you choose a bath or a room, the terrain itself signals a slower reset.',
        sourceLabel: 'Suanbo from Park Hotel by Jpatokal via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Suanbo_Hills.JPG',
        licenseLabel: 'CC BY-SA 4.0',
      },
      {
        eyebrow: 'Route atmosphere',
        title: 'Riverside night gives the stop emotional weight',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Korea-Chungju-Mountain-01.jpg',
        alt: 'A real mountain landscape in Chungju',
        body:
          'Chungju reads better as part of a journey when the page shows its real inland texture. The value is not spectacle alone, but the feeling of entering a slower mountain-and-water chapter.',
        sourceLabel: 'Korea-Chungju-Mountain-01 by Jared Broad via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Korea-Chungju-Mountain-01.jpg',
        licenseLabel: 'CC BY 2.0',
      },
      {
        eyebrow: 'Landscape anchor',
        title: 'Lake-and-fortress imagery explains why this is not just a transit town',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Chungjuho_Lake.jpg',
        alt: 'A real photograph of Chungju Lake',
        body:
          'If the city needs one visual argument, it is this inland breadth. The stop works because it feels spatially different from Seoul before the route narrows again.',
        sourceLabel: 'Chungjuho Lake by Ashy Minivet via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Chungjuho_Lake.jpg',
        licenseLabel: 'CC0',
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
      'Best future affiliate fit: one town-core practical stay cluster and one pass-adjacent slower stay cluster near the Saejae approach.',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Mungyeong_Saejae_Second_Gate.JPG',
        alt: 'The second gate of Mungyeong Saejae',
        body:
          'Mungyeong becomes memorable when the route visibly passes through something. The gate image matters because it turns abstract inland travel into a concrete threshold.',
        sourceLabel: 'Mungyeong Saejae Second Gate by hyolee2 via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Mungyeong_Saejae_Second_Gate.JPG',
        licenseLabel: 'CC BY-SA 3.0',
      },
      {
        eyebrow: 'Pass-country atmosphere',
        title: 'The open film-set edge makes the crossing feel spatial, not symbolic only',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Mungyeong_Saejae_Open_Film_Set.jpg',
        alt: 'Mungyeong Saejae open film set landscape',
        body:
          'The city works best when the pass has visual breadth. This is what helps the overnight feel like a chapter in the land rather than a random place to stop the car.',
        sourceLabel: 'Mungyeong Saejae Open Film Set by Choi2451 via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Mungyeong_Saejae_Open_Film_Set.jpg',
        licenseLabel: 'CC BY-SA 4.0',
      },
      {
        eyebrow: 'Slow-route detail',
        title: 'Small civic details help the crossing feel inhabited',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Mungyeong_Saejae_Post_office.JPG',
        alt: 'Mungyeong Saejae post office building',
        body:
          'Not every useful image has to be monumental. Smaller details keep Mungyeong from reading like a scenic backdrop and make it feel like a place where a route can actually pause.',
        sourceLabel: 'Mungyeong Saejae Post office by hyolee2 via Wikimedia Commons',
        sourceHref: 'https://commons.wikimedia.org/wiki/File:Mungyeong_Saejae_Post_office.JPG',
        licenseLabel: 'CC BY-SA 3.0',
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
      'Best future affiliate fit: one city-core practical stay group and one slower heritage-leaning stay group tied to the Hahoe-side cultural logic.',
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
        image: '/images/cities/andong.jpg',
        alt: 'Editorial city image for Andong',
        body:
          'The point of Andong is not speed. It is the moment the inland route stops feeling improvised and begins to feel like a deliberate chapter in Korea.',
        sourceLabel: 'Local Andong city asset',
        sourceHref: '/images/cities/andong.jpg',
        licenseLabel: 'Project asset',
      },
      {
        eyebrow: 'Stay logic',
        title: 'The overnight matters because the city accumulates value slowly',
        image: '/images/cities/andong.jpg',
        alt: 'Editorial city image for Andong',
        body:
          'Andong is strongest when you let the stay breathe. Its value does not land all at once like a viewpoint city; it builds through evening, dinner, and a slower next morning.',
        sourceLabel: 'Local Andong city asset',
        sourceHref: '/images/cities/andong.jpg',
        licenseLabel: 'Project asset',
      },
      {
        eyebrow: 'Food identity',
        title: 'Dinner should be part of the route logic here',
        image: '/images/cities/andong.jpg',
        alt: 'Editorial city image for Andong',
        body:
          'Andong is one of the inland cities where a meal can justify the stop instead of merely servicing it. That is why the food layer deserves dedicated commercial space later.',
        sourceLabel: 'Local Andong city asset',
        sourceHref: '/images/cities/andong.jpg',
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
    visuals: [],
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
    visuals: [],
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
};

export function getCitySupportProfile(citySlug: string): CitySupportProfile | null {
  return citySupportProfiles[citySlug.toLowerCase()] ?? null;
}

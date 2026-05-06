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
  sections: CitySupportProfileSection[];
  decisions: CitySupportProfileDecision[];
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
};

export function getCitySupportProfile(citySlug: string): CitySupportProfile | null {
  return citySupportProfiles[citySlug.toLowerCase()] ?? null;
}

export type EditorialExperienceKind =
  | 'current-home'
  | 'family-connection'
  | 'former-home'
  | 'past-visit';

export interface EditorialExperienceNote {
  citySlug: string;
  kind: EditorialExperienceKind;
  eyebrow: string;
  title: string;
  quote: string;
  context: string;
  verification: string;
}

const editorialExperienceNotes: Record<string, EditorialExperienceNote> = {
  wonju: {
    citySlug: 'wonju',
    kind: 'current-home',
    eyebrow: 'Current home base',
    title: 'Wonju is the editor\'s everyday city, not a one-time destination.',
    quote:
      'Wonju is where I live now. I approach it as an everyday city and a working route junction, not only as a list of sights.',
    context:
      'That ongoing local relationship shapes how RoadToKorea reads Wonju\'s role between Seoul, Gangneung, Jecheon, and Yeongwol. The guide focuses on how the city functions inside a real journey as well as what a visitor can see.',
    verification:
      'Fast-changing transport, venue, price, and opening-hour details are still checked against current official or operator sources.',
  },
  chungju: {
    citySlug: 'chungju',
    kind: 'family-connection',
    eyebrow: 'Family connection',
    title: 'Chungju is connected to the editor through family life.',
    quote:
      'My in-laws live in Chungju. That family connection is why I read the city as a place people return to and use, not simply a stop to collect.',
    context:
      'The guide therefore pays close attention to practical overnight value, recovery, onward movement, and the difference between a city people live in and a destination reduced to a checklist.',
    verification:
      'The family connection supplies context, while current travel facts are checked separately before they are presented as guidance.',
  },
  gangneung: {
    citySlug: 'gangneung',
    kind: 'former-home',
    eyebrow: 'Former resident - repeated recent visits',
    title: 'Gangneung is a former home, not just a beach stop.',
    quote:
      'I spent my secondary-school years in Chodang-dong and have returned to Gangneung more than one hundred times for work over the past five years.',
    context:
      'Living within walking distance of the sea made Chodang feel like an everyday neighborhood of food, literature, pine paths, and summer heat rather than a sightseeing label. Repeated recent visits also make the contrast clear between busy visitor zones and the older, quieter city where people study, work, shop, and leave for opportunities elsewhere.',
    verification:
      'Personal memories guide the judgments on pace, neighborhoods, and trade-offs. Current transport, opening conditions, parking, and weather-sensitive advice are checked separately against official or operator sources.',
  },
  pyeongchang: {
    citySlug: 'pyeongchang',
    kind: 'former-home',
    eyebrow: 'Former Jinbu resident · repeated recent visits',
    title: 'Pyeongchang begins with a childhood in Jinbu, not with the Olympics.',
    quote:
      'I lived in Jinbu from age eight to fifteen, attended elementary school there, and have returned to Pyeongchang more than one hundred times in recent years.',
    context:
      'The strongest memories are ordinary mountain life: playing in the Odaecheon water on hot days, eating steamed corn with friends, sharing chicken baeksuk beside a valley, and using fertilizer sacks as sleds on snowy hills. They make Pyeongchang feel like several lived regions rather than one resort destination.',
    verification:
      'Childhood memories and repeated visits guide the page\'s judgments. Current museum displays, transport, festivals, resort services, weather, restaurant hours, and dietary ingredients require separate confirmation.',
  },
  taebaek: {
    citySlug: 'taebaek',
    kind: 'past-visit',
    eyebrow: 'Repeated short visits · limited first-hand scope',
    title: 'Taebaek is a specific-purpose trip, not a general sightseeing stop.',
    quote:
      'I have visited Taebaek about five times, usually for work and for only a few hours. My strongest reason to return is Taebaeksan, especially a winter sunrise.',
    context:
      'Those visits support practical judgments on the difficult approach, compact city, quiet evenings, highland weather, source sites, Hanwoo, and the winding descent toward the coast. They do not support pretending that every museum, mining neighborhood, or accommodation has been personally reviewed.',
    verification:
      'Coal history and unvisited attractions are described from official sources. Current roads, mountain access, weather, restaurant prices, museum exhibitions, and opening hours require fresh checks.',
  },
  yeongwol: {
    citySlug: 'yeongwol',
    kind: 'past-visit',
    eyebrow: 'Five recent visits · Donggang camping and rafting',
    title: 'Yeongwol became familiar from nights beside the Donggang, not from a sightseeing checklist.',
    quote:
      'I visited Yeongwol about five times within a year, mainly to camp and raft around the Donggang. Cheongnyeongpo is the place I would make sure to revisit.',
    context:
      'Those trips support first-hand judgments on a riverside overnight, driving between dispersed sights, the ferry crossing into Cheongnyeongpo, the modest scale of Jangneung, and why Gossi Cave should come first when building a day route. Places not personally visited, including Byeolmaro Observatory and the Korean Peninsula-shaped terrain, are not presented as first-hand reviews.',
    verification:
      'Current ferry operations, rafting safety, river levels, cave access, film attendance, opening hours, and weather-sensitive activities are checked separately against official or operator sources.',
  },
  sokcho: {
    citySlug: 'sokcho',
    kind: 'former-home',
    eyebrow: 'Former resident · about one hundred visits',
    title: 'Sokcho is a compact lived city between Seoraksan, lagoons, and the sea.',
    quote:
      'I lived in Sokcho for about a year when I was eighteen and have visited roughly one hundred times, mainly in summer for travel, work, food, and overnight stays around Cheongchoho.',
    context:
      'That experience shapes the page around short real-world distances, Cheongchoho as an everyday base, Dongmyeong Port for an evening meal, the fast-rising skyline, and the difference between seeing Seoraksan from the city and giving the mountain its own day. The editor has ridden the cable car to Gwongeumseong once; Ulsanbawi is a future return goal, not a completed first-hand hike.',
    verification:
      'Current trail controls, cable-car operation, weather, parking, restaurant hours, lodging prices, ferry or port services, and changing beachfront attractions require fresh official or operator checks.',
  },
  ulsan: {
    citySlug: 'ulsan',
    kind: 'past-visit',
    eyebrow: 'First-hand transport tactic - Taehwagang Station to Gijang',
    title: 'Taehwagang Station can work as a car-share handoff before Busan.',
    quote:
      'When I planned to tour the Gijang side of Busan, I got off at Taehwagang Station and rented a Socar there. It let me approach Gijang from the north without first driving into Busan\'s heavier urban traffic.',
    context:
      'That experience gives the station a second route role beyond an Ulsan arrival point. For a Gijang-focused day, rail to Taehwagang followed by a reserved car-share can be a practical alternative to taking a car through central Busan, especially when the itinerary is built around the northeastern coast rather than downtown Busan.',
    verification:
      'This is a personal route tactic, not a guarantee that it is always faster. Current car availability, pickup and return rules, parking, road conditions, congestion, and travel times must be checked with the operator and live navigation before departure.',
  },
  yangyang: {
    citySlug: 'yangyang',
    kind: 'past-visit',
    eyebrow: 'About fifty summer work visits - three road approaches',
    title: 'Yangyang is familiar as a mountain-to-sea driving region, not only a surf label.',
    quote:
      'I have visited Yangyang about fifty times, mainly for work in summer, and have driven in from Gangneung, Sokcho, and Inje. My strongest recommendation is the drive from Inje over Hangyeryeong into Osaek because Seoraksan is spectacular on that approach.',
    context:
      'Those repeated trips support firsthand judgments on the Hangyeryeong-to-Osaek arrival, a Surfyy Beach-to-Naksan day, Hajodae-area beach lodging, and Sokcho as the most natural next city. The editor has personally visited Naksansa, Naksan Beach, Hajodae, Jukdo and Ingu beaches, Surfyy Beach, Osaek, and the southern Seoraksan side.',
    verification:
      'The visits were mainly summer work trips, not a claim to have tested every season, surf lesson, trail, restaurant, or accommodation. Current mountain-road controls, trail access, surf operations, parking, lodging conditions, and seasonal matsutake supply require fresh official or operator checks.',
  },
  donghae: {
    citySlug: 'donghae',
    kind: 'past-visit',
    eyebrow: 'More than fifty work visits - summer and winter',
    title: 'Donghae is familiar as a small working coast city, not a resort checklist.',
    quote:
      'I have visited Donghae more than fifty times, mainly for work in summer and winter, usually driving in from Gangneung. My real route is Mangsang to Eodal to Chuam, then on to Samcheok. At Eodal, people often fished beside the parking and breakwater area, and the meal I still remember is sea-urchin sujebi.',
    context:
      'Those repeated visits support the page\'s judgments on Donghae\'s compact scale, its more industrial and working-city feel compared with Sokcho, the clean but not extraordinary character of Mangsang and Chuam, Eodal\'s everyday parking-edge fishing scene, and Samcheok as the natural next stop. The editor did not stay overnight and does not claim firsthand knowledge of Mukho, Mureung Valley, caves, hotels, or every attraction.',
    verification:
      'No standout problem with parking, congestion, crowding, overpricing, or disappointment was personally recorded, but that is not a guarantee. Current beach operation, coastal weather, road work, parking, restaurant menus, prices, sea-urchin availability, and accommodation conditions require fresh checks.',
  },
  gyeongju: {
    citySlug: 'gyeongju',
    kind: 'past-visit',
    eyebrow: 'Personal travel memory',
    title: 'Gyeongju first entered the editor\'s travel memory through a school trip.',
    quote:
      'I first visited Gyeongju on a school trip. That visit is part of my personal relationship with the city, while this guide\'s current planning details are researched separately.',
    context:
      'The memory explains why Gyeongju is treated as more than a transfer point, but the guide does not present an older school-trip experience as a current inspection of every attraction.',
    verification:
      'Opening conditions, transport choices, and present-day route advice require current sources rather than memory alone.',
  },
  jeju: {
    citySlug: 'jeju',
    kind: 'past-visit',
    eyebrow: 'Personal travel memory',
    title: 'Jeju is also part of the editor\'s school-trip travel history.',
    quote:
      'I visited Jeju on a school trip. I keep that experience as personal context, not as a claim that an older visit can answer every current travel question.',
    context:
      'The guide separates the personal memory of encountering the island from the practical work of checking present-day transport, stays, access, and seasonal conditions.',
    verification:
      'Current planning guidance is researched independently and should be confirmed again when conditions are likely to change.',
  },
};

export function getEditorialExperienceNote(citySlug: string): EditorialExperienceNote | null {
  return editorialExperienceNotes[citySlug.toLowerCase()] ?? null;
}

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


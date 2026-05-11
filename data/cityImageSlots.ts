import cityImageSlots from './cityImageSlots.json';

export type CityImageSlotName = 'hero' | 'history' | 'present' | 'route' | 'street';

export type CityImageSlotStatus = 'ready' | 'briefed' | 'missing';

export interface CityImageSlot {
  status: CityImageSlotStatus;
  asset: string;
  sourceHref: string;
  brief: string;
}

export interface CityImageSlotSet {
  city: string;
  slots: Record<CityImageSlotName, CityImageSlot>;
}

export const cityImageSlotRegistry = cityImageSlots as Record<string, CityImageSlotSet>;

export function getCityImageSlots(citySlug: string): CityImageSlotSet | null {
  return cityImageSlotRegistry[citySlug.toLowerCase()] ?? null;
}

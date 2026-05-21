import { primaryCityData, type LocalCityData as PrimaryLocalCityData } from './primaryCityData';
import { anchorCityData, type LocalCityData as AnchorLocalCityData } from './anchorCityData';
import { supportCityData, type LocalCityData as SupportLocalCityData } from './supportCityData';

export type LocalCityData = PrimaryLocalCityData | AnchorLocalCityData | SupportLocalCityData;
export type LocalCityRegistryEntry = LocalCityData;

export const localCityRegistry: Record<string, LocalCityRegistryEntry> = {
  ...primaryCityData,
  ...anchorCityData,
  ...supportCityData,
};

export function getLocalCityDataBySlug(citySlug: string): LocalCityRegistryEntry | null {
  return localCityRegistry[citySlug.toLowerCase()] ?? null;
}

export function hasLocalCityData(citySlug: string): boolean {
  return Boolean(getLocalCityDataBySlug(citySlug));
}

export function getAllLocalCityData(): LocalCityRegistryEntry[] {
  return Object.values(localCityRegistry);
}

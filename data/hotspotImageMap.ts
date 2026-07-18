import { getCityImageSlots } from './cityImageSlots';
import { getLocalCityDataBySlug } from './cityRegistry';

const verifiedPrimaryCityImages: Record<string, string[]> = {
  seoul: [
    'https://images.unsplash.com/photo-1693928105512-10516b969717?auto=format&fit=crop&w=1600&q=82',
    'https://images.unsplash.com/photo-1603545959774-96bef891432b?auto=format&fit=crop&w=1600&q=82',
    'https://images.unsplash.com/photo-1679212843220-b36bf01ff859?auto=format&fit=crop&w=1600&q=82',
  ],
  busan: [
    'https://images.unsplash.com/photo-1575869781339-47700b53a5ca?auto=format&fit=crop&w=1600&q=82',
    'https://images.unsplash.com/photo-1710007220247-dbe0602b8367?auto=format&fit=crop&w=1600&q=82',
    'https://images.unsplash.com/photo-1710166755940-3739664c7ca7?auto=format&fit=crop&w=1600&q=82',
  ],
  jeju: [
    'https://images.unsplash.com/photo-1740329289201-b35652ab3ca6?auto=format&fit=crop&w=1600&q=82',
    'https://images.unsplash.com/photo-1616798249081-30877e213b16?auto=format&fit=crop&w=1600&q=82',
    'https://images.unsplash.com/photo-1736080058481-503f619d1d38?auto=format&fit=crop&w=1600&q=82',
  ],
};

function stableIndex(value: string, length: number) {
  const hash = [...value].reduce((total, character) => total + character.charCodeAt(0), 0);
  return length ? hash % length : 0;
}

export function getHotspotImages(citySlug: string, hotspotSlug: string): string[] {
  const normalizedCity = citySlug.toLowerCase();
  const slots = getCityImageSlots(normalizedCity);
  const cityImages = slots
    ? Object.values(slots.slots).map((slot) => slot.asset).filter(Boolean)
    : verifiedPrimaryCityImages[normalizedCity] ?? [];

  if (cityImages.length) {
    const index = stableIndex(`${normalizedCity}-${hotspotSlug.toLowerCase()}`, cityImages.length);
    return [cityImages[index]];
  }

  const verifiedFallback = getLocalCityDataBySlug(normalizedCity)?.heroImage;
  return verifiedFallback ? [verifiedFallback] : [];
}

export function getHotspotHeroImage(citySlug: string, hotspotSlug: string): string | null {
  return getHotspotImages(citySlug, hotspotSlug)[0] ?? null;
}

export function getHotspotRandomImage(citySlug: string, hotspotSlug: string): string | null {
  return getHotspotHeroImage(citySlug, hotspotSlug);
}

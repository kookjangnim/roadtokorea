import tripCityIds from './tripCityIds.json';

type TripCityIdEntry = {
  cityId: string;
  tripSlug: string;
  sourceUrl: string;
  source: string;
};

type TripCityIdRegistry = {
  affiliateTemplate: {
    allianceId: string;
    sid: string;
    tripSub3: string;
  };
  cityIds: Record<string, TripCityIdEntry>;
};

const registry = tripCityIds as TripCityIdRegistry;

function normalizeTrackingPart(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function getTripHotelAffiliateUrl(citySlug: string, source = 'hotel_cta'): string | null {
  const entry = registry.cityIds[citySlug];
  if (!entry) return null;

  const params = new URLSearchParams({
    city: entry.cityId,
    Allianceid: registry.affiliateTemplate.allianceId,
    SID: registry.affiliateTemplate.sid,
    trip_sub1: `roadtokorea_${normalizeTrackingPart(citySlug)}_${normalizeTrackingPart(source)}`,
    trip_sub3: registry.affiliateTemplate.tripSub3,
  });

  return `https://kr.trip.com/hotels/list?${params.toString()}`;
}

export function getTripHotelSourceUrl(citySlug: string): string | null {
  return registry.cityIds[citySlug]?.sourceUrl || null;
}

export function hasTripHotelAffiliateUrl(citySlug: string): boolean {
  return Boolean(registry.cityIds[citySlug]);
}

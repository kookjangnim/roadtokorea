const HOTEL_URL_PATTERN = /https?:\/\/(?:[a-z]{2}\.)?trip\.com\/hotels\/([a-z0-9-]+)-hotels-list-([0-9]+)\/?/gi;

const SLUG_ALIASES = {
  'cheong-ju': 'cheongju',
  'goseong-gun-1': 'goseong',
  'gwangju-1': 'gwangju',
};

export function normalizeTripHotelSlug(tripSlug) {
  const normalized = String(tripSlug)
    .toLowerCase()
    .replace(/-hotels-list-[0-9]+\/?$/, '')
    .replace(/-(si|gun|gu)$/g, '');

  return SLUG_ALIASES[normalized] || normalized.replace(/-/g, '');
}

export function parseTripHotelUrl(url) {
  const match = String(url).match(/\/hotels\/([a-z0-9-]+)-hotels-list-([0-9]+)\/?/i);
  if (!match) return null;

  const [, tripSlug, cityId] = match;
  return {
    tripSlug,
    citySlug: normalizeTripHotelSlug(tripSlug),
    cityId,
  };
}

export function extractTripHotelUrls(html) {
  const seen = new Set();
  const urls = [];
  let match;

  HOTEL_URL_PATTERN.lastIndex = 0;
  while ((match = HOTEL_URL_PATTERN.exec(html)) !== null) {
    const url = match[0];
    if (seen.has(url)) continue;
    seen.add(url);
    urls.push(url);
  }

  return urls;
}

const DEFAULT_SITE_URL = 'https://roadtokorea.blog';
const DEFAULT_API_BASE = 'https://api.roadtokorea.blog/wp-json/wp/v2';
const DEFAULT_API_FALLBACK_BASE = 'https://roadtokorea.blog/wp-json/wp/v2';
const DEFAULT_ADSENSE_CLIENT = 'ca-pub-7626948893510966';

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '');
}

export function getSiteUrl(): string {
  return trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL);
}

export function getApiBase(): string {
  return trimTrailingSlash(process.env.NEXT_PUBLIC_API_BASE || DEFAULT_API_BASE);
}

export function getApiBases(): string[] {
  const primary = getApiBase();
  const fallback = trimTrailingSlash(
    process.env.NEXT_PUBLIC_API_FALLBACK_BASE || DEFAULT_API_FALLBACK_BASE,
  );

  return [...new Set([primary, fallback])];
}

export function getAdsenseClient(): string {
  return process.env.NEXT_PUBLIC_ADSENSE_CLIENT || DEFAULT_ADSENSE_CLIENT;
}

export function getApiOrigin(): string {
  try {
    return new URL(getApiBase()).origin;
  } catch {
    return new URL(DEFAULT_API_BASE).origin;
  }
}

export function normalizeWpMediaUrl(url: string): string {
  if (!url) return url;

  try {
    const parsed = new URL(url);
    if (parsed.pathname.startsWith('/wp-content/')) {
      return `${getApiOrigin()}${parsed.pathname}`;
    }
    return parsed.toString();
  } catch {
    return url.replace(
      /https?:\/\/[^/]+\/wp-content/gi,
      `${getApiOrigin()}/wp-content`
    );
  }
}

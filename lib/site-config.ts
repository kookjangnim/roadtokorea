const DEFAULT_SITE_URL = 'https://roadtokorea.blog';
const DEFAULT_API_BASE = 'https://api.roadtokorea.blog/wp-json/wp/v2';

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, '');
}

export function getSiteUrl(): string {
  return trimTrailingSlash(process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL);
}

export function getApiBase(): string {
  return trimTrailingSlash(process.env.NEXT_PUBLIC_API_BASE || DEFAULT_API_BASE);
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


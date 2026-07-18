import { getApiBases } from './site-config';

type WordPressFetchOptions = {
  revalidate: number;
  timeoutMs?: number;
};

const DEFAULT_TIMEOUT_MS = 7000;
const CIRCUIT_BREAKER_MS = 60_000;
const unavailableUntil = new Map<string, number>();
const warnedOrigins = new Set<string>();

function getSignal(timeoutMs: number): AbortSignal | undefined {
  if (typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal) {
    return AbortSignal.timeout(timeoutMs);
  }

  return undefined;
}

function isUnavailable(origin: string): boolean {
  return (unavailableUntil.get(origin) || 0) > Date.now();
}

function markUnavailable(origin: string, reason: unknown) {
  unavailableUntil.set(origin, Date.now() + CIRCUIT_BREAKER_MS);

  if (!warnedOrigins.has(origin)) {
    warnedOrigins.add(origin);
    const message = reason instanceof Error ? reason.message : String(reason);
    console.warn(`[WP API] ${origin} unavailable; trying the configured fallback. ${message}`);
  }
}

export async function fetchWordPressJson<T>(
  path: string,
  { revalidate, timeoutMs = DEFAULT_TIMEOUT_MS }: WordPressFetchOptions,
): Promise<T | null> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  for (const baseUrl of getApiBases()) {
    const origin = new URL(baseUrl).origin;
    if (isUnavailable(origin)) continue;

    try {
      const response = await fetch(`${baseUrl}${normalizedPath}`, {
        next: { revalidate },
        signal: getSignal(timeoutMs),
      });

      if (response.ok) {
        return await response.json() as T;
      }

      if (response.status >= 500 || response.status === 408 || response.status === 429) {
        markUnavailable(origin, `HTTP ${response.status}`);
        continue;
      }

      return null;
    } catch (error) {
      markUnavailable(origin, error);
    }
  }

  return null;
}

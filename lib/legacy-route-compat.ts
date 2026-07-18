export const LEGACY_CATEGORY_SLUGS = [
  'tier-1',
  'tier-2',
  'tier-3',
  'tier-4',
  'seoul-gyeonggi',
  'gangwon-east-coast',
  'chungcheong',
  'historic-gyeongbuk',
  'busan-south-coast',
  'jeolla-southwest',
  'jeju-island',
] as const;
export const LEGACY_ROUTE_INDEX_HREF = '/routes';

export type LegacyCategorySlug = (typeof LEGACY_CATEGORY_SLUGS)[number];

const legacyCategorySlugSet = new Set<string>(LEGACY_CATEGORY_SLUGS);

export function isLegacyCategorySlug(value: string): value is LegacyCategorySlug {
  return legacyCategorySlugSet.has(value);
}

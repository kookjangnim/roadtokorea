/**
 * WordPress REST API Client
 * WordPress Headless CMS에서 데이터를 가져오는 클라이언트
 */

export interface WPPost {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  link: string;
  date: string;
  modified: string;
  categories: WPCategory[] | number[];
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

const WP_API_BASE = 'https://api.roadtokorea.blog/wp-json/wp/v2';

/**
 * WordPress REST API 기본 설정
 */
const WP_CONFIG = {
  baseUrl: WP_API_BASE,
  timeout: 10000, // 10초
  retries: 3,
} as const;

/**
 * WordPress 포스트 목록 가져오기
 *
 * @param options - 가져오기 옵션
 * @returns 포스트 배열
 */
export async function fetchPosts(options: {
  perPage?: number;
  page?: number;
  categories?: number[];
  exclude?: number[];
  embed?: boolean;
} = {}): Promise<WPPost[]> {
  const {
    perPage = 10,
    page = 1,
    categories,
    exclude,
    embed = true,
  } = options;

  const params = new URLSearchParams({
    per_page: perPage.toString(),
    page: page.toString(),
    _embed: embed ? '1' : '0',
  });

  if (categories && categories.length > 0) {
    params.append('categories', categories.join(','));
  }

  if (exclude && exclude.length > 0) {
    params.append('exclude', exclude.join(','));
  }

  const url = `${WP_CONFIG.baseUrl}/posts?${params.toString()}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 300 }, // 5분 캐시 (ISR)
    });

    if (!response.ok) {
      throw new Error(`WordPress API 에러: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('[WP API] 포스트 가져오기 실패:', error);
    throw error;
  }
}

/**
 * Tier별 카테고리 ID 매핑
 */
const TIER_CATEGORY_IDS = {
  'tier-1': 1,
  'tier-2': 9,
  'tier-3': 10,
  'tier-4': 11,
} as const;

export type TierCategory = keyof typeof TIER_CATEGORY_IDS;

/**
 * Tier별 포스트 가져오기
 *
 * @param tier - 티어 ('tier-1', 'tier-2', 'tier-3', 'tier-4')
 * @param perPage - 가져올 포스트 수
 * @returns 포스트 배열
 */
export async function fetchPostsByTier(
  tier: TierCategory,
  perPage: number = 10
): Promise<WPPost[]> {
  const categoryId = TIER_CATEGORY_IDS[tier];

  return fetchPosts({
    perPage,
    page: 1,
    categories: [categoryId],
  });
}

/**
 * 최신 포스트 가져오기 (모든 티어)
 *
 * @param perPage - 가져올 포스트 수
 * @returns 포스트 배열
 */
export async function fetchLatestPosts(perPage: number = 4): Promise<WPPost[]> {
  return fetchPosts({
    perPage,
    page: 1,
  });
}

/**
 * 특정 포스트 가져오기 (슬러그 기반)
 *
 * @param slug - 포스트 슬러그
 * @returns 포스트 또는 null
 */
export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const url = `${WP_CONFIG.baseUrl}/posts?slug=${slug}&_embed=1`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return null;
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('[WP API] 포스트 가져오기 실패:', error);
    return null;
  }
}

/**
 * 카테고리 목록 가져오기
 *
 * @returns 카테고리 배열
 */
export async function fetchCategories(): Promise<WPCategory[]> {
  const url = `${WP_CONFIG.baseUrl}/categories`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // 1시간 캐시
    });

    if (!response.ok) {
      throw new Error(`WordPress API 에러: ${response.status}`);
    }

    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('[WP API] 카테고리 가져오기 실패:', error);
    throw error;
  }
}

/**
 * 카테고리 슬러그으로 ID 찾기
 *
 * @param slug - 카테고리 슬러그
 * @returns 카테고리 ID 또는 undefined
 */
export async function getCategoryIdBySlug(slug: string): Promise<number | undefined> {
  const categories = await fetchCategories();
  return categories.find(cat => cat.slug === slug)?.id;
}

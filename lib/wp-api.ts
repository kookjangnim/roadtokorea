
/**
 * WordPress REST API Client
 * WordPress Headless CMS?먯꽌 ?곗씠?곕? 媛?몄삤???대씪?댁뼵?? */


import { getApiBase } from './site-config';

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

const WP_API_BASE = getApiBase();

/**
 * WordPress REST API 湲곕낯 ?ㅼ젙
 */
const WP_CONFIG = {
  baseUrl: WP_API_BASE,
  timeout: 10000, // 10珥?  retries: 3,
} as const;

/**
 * WordPress ?ъ뒪??紐⑸줉 媛?몄삤湲? *
 * @param options - 媛?몄삤湲??듭뀡
 * @returns ?ъ뒪??諛곗뿴
 */
export async function fetchPosts(options: {
  perPage?: number;
  page?: number;
  categories?: number[];
  tags?: number[];
  search?: string;
  exclude?: number[];
  embed?: boolean;
} = {}): Promise<WPPost[]> {
  const {
    perPage = 10,
    page = 1,
    categories,
    tags,
    search,
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

  if (tags && tags.length > 0) {
    params.append('tags', tags.join(','));
  }

  if (search) {
    params.append('search', search);
  }

  if (exclude && exclude.length > 0) {
    params.append('exclude', exclude.join(','));
  }

  const url = `${WP_CONFIG.baseUrl}/posts?${params.toString()}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 }, // 1遺?罹먯떆 (ISR)
    });

    if (!response.ok) {
      throw new Error(`WordPress API ?먮윭: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('[WP API] ?ъ뒪??媛?몄삤湲??ㅽ뙣:', error);
    throw error;
  }
}


/**
 * 理쒖떊 ?ъ뒪??媛?몄삤湲?(紐⑤뱺 ?곗뼱)
 *
 * @param perPage - 媛?몄삱 ?ъ뒪???? * @returns ?ъ뒪??諛곗뿴
 */
export async function fetchLatestPosts(perPage: number = 4): Promise<WPPost[]> {
  return fetchPosts({
    perPage,
    page: 1,
  });
}

/**
 * ?뱀젙 ?ъ뒪??媛?몄삤湲?(?щ윭洹?湲곕컲)
 *
 * @param slug - ?ъ뒪???щ윭洹? * @returns ?ъ뒪???먮뒗 null
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
    console.error('[WP API] ?ъ뒪??媛?몄삤湲??ㅽ뙣:', error);
    return null;
  }
}

/**
 * 移댄뀒怨좊━ 紐⑸줉 媛?몄삤湲? *
 * @returns 移댄뀒怨좊━ 諛곗뿴
 */
export async function fetchCategories(): Promise<WPCategory[]> {
  const url = `${WP_CONFIG.baseUrl}/categories`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // 1?쒓컙 罹먯떆
    });

    if (!response.ok) {
      throw new Error(`WordPress API ?먮윭: ${response.status}`);
    }

    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('[WP API] 移댄뀒怨좊━ 媛?몄삤湲??ㅽ뙣:', error);
    throw error;
  }
}

/**
 * 移댄뀒怨좊━ ?щ윭洹몄쑝濡?ID 李얘린
 *
 * @param slug - 移댄뀒怨좊━ ?щ윭洹? * @returns 移댄뀒怨좊━ ID ?먮뒗 undefined
 */
export async function getCategoryIdBySlug(slug: string): Promise<number | undefined> {
  const categories = await fetchCategories();
  return categories.find(cat => cat.slug === slug)?.id;
}

/**
 * ?쒓렇 ?щ윭洹몄쑝濡?ID 李얘린
 *
 * @param slug - ?쒓렇 ?щ윭洹? * @returns ?쒓렇 ID ?먮뒗 undefined
 */
export async function getTagIdBySlug(slug: string): Promise<number | undefined> {
  const url = `${WP_CONFIG.baseUrl}/tags?slug=${slug}`;
  try {
    const response = await fetch(url, { next: { revalidate: 60 } });
    if (!response.ok) throw new Error(`WordPress API ?먮윭: ${response.status}`);
    const tags = await response.json();
    return tags.length > 0 ? tags[0].id : undefined;
  } catch (error) {
    console.error('[WP API] ?쒓렇 ID 媛?몄삤湲??ㅽ뙣:', error);
    return undefined;
  }
}

/**
 * ?꾩떆 ?쒓렇紐?湲곕컲 愿???ъ뒪??寃?? *
 * @param slug - ?꾩떆 ?щ윭洹?(?? 'seoul', 'busan')
 * @param perPage - 理쒕? ?몄텧 ?섎웾
 * @returns ?ъ뒪??諛곗뿴
 */
export async function fetchPostsByCityTag(slug: string, perPage: number = 4): Promise<WPPost[]> {
  const tagId = await getTagIdBySlug(slug.toLowerCase());
  
  if (!tagId) {
    // ?쒓렇媛 ?놁쑝硫?鍮?諛곗뿴??諛섑솚 (愿???녿뒗 理쒖떊 ?ъ뒪???몄텧 諛⑹?)
    return [];
  }

  return fetchPosts({
    perPage,
    tags: [tagId],
  });
}


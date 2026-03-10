// WordPress API 설정
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'https://api.roadtokorea.blog/wp-json/wp/v2';

// WordPress 포스트 타입
export interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  slug: string;
  featured_media?: number;
  categories: Array<{ id: number; name: string }>;
  meta?: {
    tier_level?: number;
    popularity_score?: number;
    featured?: boolean;
  };
}

// WordPress 미디어 타입
export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text?: string;
  media_type: string;
}

/**
 * 게시글 목록 가져오기
 * @param tier - 티어별 필터링 (선택사항)
 * @param search - 검색어 (선택사항)
 * @param page - 페이지 번호 (기본값: 1)
 * @param perPage - 페이지당 게시글 수 (기본값: 10)
 */
export async function fetchPosts(params?: {
  tier?: string;
  search?: string;
  page?: number;
  perPage?: number;
}): Promise<WordPressPost[]> {
  const queryParams = new URLSearchParams();

  if (params?.tier) {
    queryParams.append('categories', params.tier);
  }

  if (params?.search) {
    queryParams.append('search', params.search);
  }

  if (params?.page) {
    queryParams.append('page', params.page.toString());
  }

  if (params?.perPage) {
    queryParams.append('per_page', params.perPage.toString());
  }

  try {
    const response = await fetch(`${API_BASE}/posts?${queryParams.toString()}`, {
      next: { revalidate: 3600 }, // 1시간마다 재검증
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    // 오류 시 빈 배열 반환
    return [];
  }
}

/**
 * 특정 도시 게시글 가져오기
 * @param slug - 도시 슬러그
 */
export async function fetchCity(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${API_BASE}/posts?slug=${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching city:', error);
    return null;
  }
}

/**
 * 미디어 정보 가져오기
 * @param id - 미디어 ID
 */
export async function fetchMedia(id: number): Promise<WordPressMedia | null> {
  try {
    const response = await fetch(`${API_BASE}/media/${id}`, {
      next: { revalidate: 86400 }, // 24시간마다 재검증
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching media:', error);
    return null;
  }
}

/**
 * 티어별 도시 가져오기
 * @param tier - 티어 번호 (1, 2, 3, 4)
 */
export async function fetchCitiesByTier(tier: number): Promise<WordPressPost[]> {
  return fetchPosts({
    tier: `tier-${tier}`,
    perPage: 20,
  });
}

/**
 * 인기 게시글 가져오기
 */
export async function fetchPopularPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      `${API_BASE}/posts?orderby=meta_value&meta_key=popularity_score&per_page=6`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching popular posts:', error);
    return [];
  }
}

/**
 * 최신 게시글 가져오기
 */
export async function fetchLatestPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      `${API_BASE}/posts?orderby=date&order=desc&per_page=6`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }
}

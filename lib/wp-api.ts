/** WordPress REST API client for the headless travel content. */

import { fetchWordPressJson } from './wp-fetch';

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

  if (categories?.length) params.append('categories', categories.join(','));
  if (tags?.length) params.append('tags', tags.join(','));
  if (search) params.append('search', search);
  if (exclude?.length) params.append('exclude', exclude.join(','));

  return await fetchWordPressJson<WPPost[]>(`/posts?${params.toString()}`, {
    revalidate: 60,
  }) ?? [];
}

export async function fetchLatestPosts(perPage: number = 4): Promise<WPPost[]> {
  return fetchPosts({ perPage, page: 1 });
}

export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchWordPressJson<WPPost[]>(
    `/posts?slug=${encodeURIComponent(slug)}&_embed=1`,
    { revalidate: 300 },
  );

  return posts?.[0] ?? null;
}

export async function fetchCategories(): Promise<WPCategory[]> {
  return await fetchWordPressJson<WPCategory[]>('/categories?per_page=100', {
    revalidate: 3600,
  }) ?? [];
}

export async function getCategoryIdBySlug(slug: string): Promise<number | undefined> {
  const categories = await fetchCategories();
  return categories.find((category) => category.slug === slug)?.id;
}

export async function getTagIdBySlug(slug: string): Promise<number | undefined> {
  const tags = await fetchWordPressJson<Array<{ id: number }>>(
    `/tags?slug=${encodeURIComponent(slug)}`,
    { revalidate: 60 },
  );

  return tags?.[0]?.id;
}

export async function fetchPostsByCityTag(slug: string, perPage: number = 4): Promise<WPPost[]> {
  const tagId = await getTagIdBySlug(slug.toLowerCase());
  if (!tagId) return [];

  return fetchPosts({ perPage, tags: [tagId] });
}

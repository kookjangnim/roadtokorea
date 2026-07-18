import { fetchWordPressJson } from './wp-fetch';

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
    popularity_score?: number;
    featured?: boolean;
  };
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text?: string;
  media_type: string;
}

export async function fetchPosts(params?: {
  categoryId?: string;
  search?: string;
  page?: number;
  perPage?: number;
}): Promise<WordPressPost[]> {
  const queryParams = new URLSearchParams();

  if (params?.categoryId) {
    queryParams.append('categories', params.categoryId);
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

  return await fetchWordPressJson<WordPressPost[]>(
    `/posts?${queryParams.toString()}`,
    { revalidate: 60 },
  ) ?? [];
}

export async function fetchCity(slug: string): Promise<WordPressPost | null> {
  const posts = await fetchWordPressJson<WordPressPost[]>(
    `/posts?slug=${encodeURIComponent(slug)}`,
    { revalidate: 60 },
  );

  return posts?.[0] ?? null;
}

export async function fetchMedia(id: number): Promise<WordPressMedia | null> {
  return fetchWordPressJson<WordPressMedia>(`/media/${id}`, {
    revalidate: 86400,
  });
}

export async function fetchPopularPosts(): Promise<WordPressPost[]> {
  return await fetchWordPressJson<WordPressPost[]>(
    '/posts?orderby=meta_value&meta_key=popularity_score&per_page=6',
    { revalidate: 60 },
  ) ?? [];
}

export async function fetchLatestPosts(): Promise<WordPressPost[]> {
  return await fetchWordPressJson<WordPressPost[]>(
    '/posts?orderby=date&order=desc&per_page=6',
    { revalidate: 60 },
  ) ?? [];
}

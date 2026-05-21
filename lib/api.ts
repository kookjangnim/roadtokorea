import { getApiBase } from './site-config';

const API_BASE = getApiBase();

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

  try {
    const response = await fetch(`${API_BASE}/posts?${queryParams.toString()}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function fetchCity(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(`${API_BASE}/posts?slug=${slug}`, {
      next: { revalidate: 60 },
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

export async function fetchMedia(id: number): Promise<WordPressMedia | null> {
  try {
    const response = await fetch(`${API_BASE}/media/${id}`, {
      next: { revalidate: 86400 },
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

export async function fetchPopularPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      `${API_BASE}/posts?orderby=meta_value&meta_key=popularity_score&per_page=6`,
      {
        next: { revalidate: 60 },
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

export async function fetchLatestPosts(): Promise<WordPressPost[]> {
  try {
    const response = await fetch(
      `${API_BASE}/posts?orderby=date&order=desc&per_page=6`,
      {
        next: { revalidate: 60 },
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

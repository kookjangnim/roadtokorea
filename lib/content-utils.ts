import type { WPPost } from '@/lib/wp-api';

const HTML_ENTITY_MAP: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#039;': "'",
  '&#8217;': "'",
  '&#8216;': "'",
  '&#8220;': '"',
  '&#8221;': '"',
  '&nbsp;': ' ',
};

export function decodeHtmlEntities(value: string): string {
  return value.replace(/&[a-z#0-9]+;/gi, (entity) => HTML_ENTITY_MAP[entity] ?? ' ');
}

export function stripHtml(value: string): string {
  return decodeHtmlEntities(value.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

export function formatSlugLabel(slug: string): string {
  return slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}

export function getPostDisplayTitle(post: Pick<WPPost, 'title' | 'slug'>): string {
  const renderedTitle = stripHtml(post.title?.rendered || '');
  return renderedTitle || formatSlugLabel(post.slug);
}

export function getPostExcerpt(post: Pick<WPPost, 'excerpt' | 'content'>, maxLength: number = 180): string {
  const excerpt = stripHtml(post.excerpt?.rendered || '');
  if (excerpt) return excerpt.slice(0, maxLength);

  const firstParagraph = post.content?.rendered?.match(/<p[^>]*>(.*?)<\/p>/i);
  return firstParagraph ? stripHtml(firstParagraph[1]).slice(0, maxLength) : '';
}

export function getFirstImageFromHtml(html?: string): string | null {
  if (!html) return null;

  const match = html.match(/<img[^>]+src="([^">]+)"/i);
  return match?.[1] || null;
}

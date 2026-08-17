import type { CityGuideSourceRange } from '@/data/cityGuideTopics';

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findHeadingIndex(html: string, title: string): number {
  const pattern = new RegExp(
    `<h([2-4])[^>]*>\\s*${escapeRegExp(title)}\\s*</h\\1>`,
    'i',
  );
  return html.search(pattern);
}

export function extractCityGuideSections(
  html: string,
  ranges?: CityGuideSourceRange[],
): string {
  if (!ranges?.length) return html;

  return ranges
    .map((range) => {
      const start = findHeadingIndex(html, range.start);
      if (start < 0) return '';

      if (!range.end) return html.slice(start);
      const relativeEnd = findHeadingIndex(html.slice(start + 1), range.end);
      const end = relativeEnd < 0 ? html.length : start + 1 + relativeEnd;
      return html.slice(start, end);
    })
    .filter(Boolean)
    .join('\n');
}

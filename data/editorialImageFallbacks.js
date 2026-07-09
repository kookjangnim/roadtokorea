const LOCAL_EDITORIAL_IMAGES = {
  boseong: [
    '/images/editorial/boseong-real/boseong-local-photo-01-kakaotalk-20260514-173842538-01.jpg',
    '/images/editorial/boseong-real/boseong-local-photo-02-kakaotalk-20260514-173842538-02.jpg',
    '/images/editorial/boseong-real/boseong-local-photo-03-kakaotalk-20260514-173842538-03.jpg',
  ],
  busan: [
    '/images/editorial/busan-real/busan-local-photo-01-kakaotalk-20260513-173628599-01.jpg',
    '/images/editorial/busan-real/busan-local-photo-02-kakaotalk-20260513-173628599-02.jpg',
    '/images/editorial/busan-real/busan-local-photo-03-kakaotalk-20260513-173628599-03.jpg',
  ],
  chungju: [
    '/images/editorial/chungju-real/chungjuho-lake-real.jpg',
    '/images/editorial/chungju-real/chungju-mountain-real.jpg',
  ],
  damyang: [
    '/images/editorial/damyang-real/damyang-local-photo-01-kakaotalk-20260514-132212120.jpg',
    '/images/editorial/damyang-real/damyang-local-photo-02-kakaotalk-20260514-132214027.jpg',
    '/images/editorial/damyang-real/damyang-local-photo-03-kakaotalk-20260514-132215747.jpg',
  ],
  gongju: [
    '/images/editorial/gongju-real/gongju-local-photo-01-kakaotalk-20260514-113207314.jpg',
  ],
  jirisan: [
    '/images/editorial/jirisan-real/jirisan-local-photo-01-kakaotalk-20260514-180721030.jpg',
  ],
  seongsu: [
    '/images/editorial/seongsu-real/seongsu-local-photo-01-kakaotalk-20260513-193027586-01.jpg',
    '/images/editorial/seongsu-real/seongsu-local-photo-02-kakaotalk-20260513-193027586-02.jpg',
    '/images/editorial/seongsu-real/seongsu-local-photo-03-kakaotalk-20260513-193027586-03.jpg',
  ],
  seoul: [
    '/images/editorial/seoul-real/seoul-local-photo-01-kakaotalk-20260513-191524063.jpg',
  ],
  taean: [
    '/images/editorial/taean-real/taean-local-photo-01-kakaotalk-20260513-152008999-01.jpg',
    '/images/editorial/taean-real/taean-local-photo-02-kakaotalk-20260513-152008999-02.jpg',
    '/images/editorial/taean-real/taean-local-photo-03-kakaotalk-20260513-155056708.jpg',
  ],
  yeoncheon: [
    '/images/editorial/yeoncheon-real/yeoncheon-local-photo-01-kakaotalk-20260514-115221987.jpg',
    '/images/editorial/yeoncheon-real/yeoncheon-local-photo-02-kakaotalk-20260514-115534333-01.jpg',
    '/images/editorial/yeoncheon-real/yeoncheon-local-photo-03-kakaotalk-20260514-115534333-02.jpg',
  ],
};

const CITY_KEYWORDS = {
  boseong: ['boseong', '보성'],
  busan: ['busan', '부산', 'haeundae', '해운대', 'gwangalli', '광안리'],
  chungju: ['chungju', '충주'],
  damyang: ['damyang', '담양'],
  gongju: ['gongju', '공주'],
  jirisan: ['jirisan', '지리산'],
  seongsu: ['seongsu', '성수'],
  seoul: ['seoul', '서울', 'gangnam', '강남', 'hongdae', '홍대', 'itaewon', '이태원'],
  taean: ['taean', '태안'],
  yeoncheon: ['yeoncheon', '연천'],
};

const LOCAL_IMAGE_PATTERN = /^\/images\/.+\.(?:avif|gif|jpe?g|png|webp)$/i;
const DIRECT_REMOTE_IMAGE_PATTERN = /^https?:\/\/.+\.(?:avif|gif|jpe?g|png|webp)(?:[?#].*)?$/i;

function normalizeLookupText(value) {
  return String(value || '').toLowerCase();
}

export function getEditorialImageForCity(citySlug, index = 0) {
  const images = LOCAL_EDITORIAL_IMAGES[normalizeLookupText(citySlug)];
  if (!images?.length) return null;
  return images[index % images.length];
}

export function inferEditorialCitySlug(value) {
  const text = normalizeLookupText(value);
  if (!text) return null;

  for (const [citySlug, keywords] of Object.entries(CITY_KEYWORDS)) {
    if (keywords.some((keyword) => text.includes(keyword.toLowerCase()))) {
      return citySlug;
    }
  }

  return null;
}

export function getEditorialImageForPost(post, index = 0) {
  const wpTerms = post?._embedded?.['wp:term'] || [];
  const termText = wpTerms
    .flat()
    .map((term) => `${term?.slug || ''} ${term?.name || ''}`)
    .join(' ');
  const lookupText = [
    post?.slug,
    post?.title?.rendered,
    post?.excerpt?.rendered,
    termText,
  ].join(' ');

  const citySlug = inferEditorialCitySlug(lookupText);
  return citySlug ? getEditorialImageForCity(citySlug, index) : null;
}

export function isRenderableImageSource(src) {
  if (!src) return false;
  return LOCAL_IMAGE_PATTERN.test(src) || DIRECT_REMOTE_IMAGE_PATTERN.test(src);
}

export function getSafeEditorialImage(candidate, fallbackCitySlug, index = 0) {
  const localFallback = getEditorialImageForCity(fallbackCitySlug, index);
  if (localFallback) return localFallback;
  if (isRenderableImageSource(candidate)) return candidate;
  return '/images/placeholder.png';
}

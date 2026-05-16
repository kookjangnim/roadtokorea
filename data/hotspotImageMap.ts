/**
 * Hotspot Image Mapping System
 * Parses destination image filenames to create hotspot-specific image assignments
 */

import { readdirSync } from 'fs';
import { join } from 'path';

interface HotspotImage {
  city: string;
  hotspot: string;
  hotspotKo?: string;
  image: string;
  description: string;
}

type HotspotImageMap = Record<string, string[]>; // hotspotSlug -> imageUrls

const DESTINATIONS_DIR = join(process.cwd(), 'public', 'images', 'destinations');

/**
 * Parse image filename to extract city, hotspot, and description
 * Format: City_HotspotName_Description_hash.jpeg
 */
function parseImageFilename(filename: string): HotspotImage | null {
  if (!filename.endsWith('.jpeg') && !filename.endsWith('.png')) return null;

  const nameWithoutExt = filename.replace(/\.(jpeg|png)$/, '');
  const parts = nameWithoutExt.split('_');

  if (parts.length < 3) return null;

  const city = parts[0];
  const secondPart = parts[1];

  // Check if second part is a Korean hotspot name (contains Korean characters)
  const hasKorean = /[가-힣]/.test(secondPart);
  const hotspotKo = hasKorean ? secondPart : undefined;
  const hotspotEn = hasKorean ? parts[2] : secondPart;

  const description = hasKorean
    ? parts.slice(3).join(' ')
    : parts.slice(2).join(' ');

  return {
    city,
    hotspot: hotspotEn.toLowerCase().replace(/[^a-z0-9]/g, '-'),
    hotspotKo,
    image: `/images/destinations/${filename}`,
    description: description.replace(/_/g, ' '),
  };
}

/**
 * Convert Korean text to slug (basic implementation)
 */
function koreanToSlug(korean: string): string {
  const koreanToEnglishMap: Record<string, string> = {
    '광안리': 'gwangalli',
    '서면': 'seomyeon',
    '해운대': 'haeundae',
    '자갈치': 'jagalchi',
    '남포': 'nampo',
    '영도': 'yeongdo',
    '다대포': 'daedae',
    '몰운대': 'mungungwa',
    '송도': 'songdo',
    '동래': 'dongnae',
    '부평': 'bupyeong',
    '을지로': 'euljiro',
    '명동': 'myeongdong',
    '황금동': 'hwanggeum',
    '중앙동': 'jungang',
    '보문동': 'bomun',
    '한옥마을': 'bukchon',
    '인사동': 'insadong',
    '익선동': 'ikseon',
    '서촌': 'seochon',
    '북촌': 'bukchon',
    '가로수길': 'garosugil',
    '성수': 'seongsu',
    '연트럴파크': 'yeontral',
    '해리단길': 'heiri',
    '경리단길': 'kyungnidan',
    '이태원': 'itaewon',
    '용산': 'yongsan',
    '한남': 'hannam',
    '성북': 'seongbuk',
    '혜화': 'hyehwa',
    '종로': 'jongno',
    '광장': 'gwangjang',
    '노량진': 'noryangjin',
    '바래봉': 'baraebong',
    '우면': 'umeong',
    '양재': 'yangjae',
    '강남': 'gangnam',
    '코엑스': 'coex',
    '삼성': 'samsung',
    '선정릉': 'seonjeongneung',
    '청담': 'cheongdam',
    '압구정': 'apgujeong',
    '신사': 'sinsa',
    '롯데타워': 'lottetower',
    '잠실': 'jamsil',
    '석촌': 'seokchon',
    '올림픽': 'olympic',
    '몽촌': 'mongchon',
    '방이': 'bangi',
    '한강': 'hangang',
    '여의도': 'yeouido',
    '마포': 'mapo',
    '홍대': 'hongdae',
    '합정': 'hapjeong',
    '상수': 'sangsu',
    '덕수': 'deoksugung',
    '경복': 'gyeongbok',
    '창덕': 'changdeok',
    '창경': 'changgyeong',
  };

  return koreanToEnglishMap[korean] || korean.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

/**
 * Build hotspot image map from destination images
 */
export function buildHotspotImageMap(): HotspotImageMap {
  const map: HotspotImageMap = {};

  try {
    const files = readdirSync(DESTINATIONS_DIR);

    for (const file of files) {
      const parsed = parseImageFilename(file);
      if (!parsed) continue;

      const { city, hotspot, hotspotKo, image } = parsed;
      const key = `${city.toLowerCase()}-${hotspot}`;
      const altKey = hotspotKo ? `${city.toLowerCase()}-${koreanToSlug(hotspotKo)}` : null;

      if (!map[key]) map[key] = [];
      map[key].push(image);

      if (altKey && !map[altKey]) {
        map[altKey] = [image];
      }
    }
  } catch (error) {
    console.error('Failed to build hotspot image map:', error);
  }

  return map;
}

// Singleton instance
let hotspotImageMap: HotspotImageMap | null = null;

/**
 * Get images for a specific hotspot
 * @param citySlug - City slug (e.g., 'busan', 'seoul')
 * @param hotspotSlug - Hotspot slug (e.g., 'gwangalli', 'haeundae')
 * @returns Array of image URLs or empty array
 */
export function getHotspotImages(citySlug: string, hotspotSlug: string): string[] {
  if (!hotspotImageMap) {
    hotspotImageMap = buildHotspotImageMap();
  }

  const key = `${citySlug.toLowerCase()}-${hotspotSlug.toLowerCase()}`;
  return hotspotImageMap[key] || [];
}

/**
 * Get a single hero image for a hotspot
 * @param citySlug - City slug
 * @param hotspotSlug - Hotspot slug
 * @returns Image URL or null
 */
export function getHotspotHeroImage(citySlug: string, hotspotSlug: string): string | null {
  const images = getHotspotImages(citySlug, hotspotSlug);
  return images.length > 0 ? images[0] : null;
}

/**
 * Get random image for a hotspot
 */
export function getHotspotRandomImage(citySlug: string, hotspotSlug: string): string | null {
  const images = getHotspotImages(citySlug, hotspotSlug);
  if (images.length === 0) return null;
  return images[Math.floor(Math.random() * images.length)];
}

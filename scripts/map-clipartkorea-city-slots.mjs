import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMAGE_ROOT = path.join(ROOT, 'public', 'images', 'clipartkorea');
const SLOT_PATH = path.join(ROOT, 'data', 'cityImageSlots.json');
const QUEUE_PATH = path.join(ROOT, 'data', 'clipartkoreaRegionQueue.json');
const REGISTRY_PATH = path.join(ROOT, 'data', 'clipartkoreaImageRegistry.json');
const AUDIT_PATH = path.join(ROOT, 'data', 'clipartkoreaSlotMappingAudit.json');

const SLOT_NAMES = ['hero', 'history', 'present', 'route', 'street'];
const REGION_GROUPS = [
  ['route-1', [
    ['yeoju', '여주'], ['cheonan', '천안'], ['daejeon', '대전'], ['chungju', '충주'],
    ['mungyeong', '문경'], ['andong', '안동'], ['sangju', '상주'], ['gumi', '구미'],
    ['daegu', '대구'], ['changnyeong', '창녕'], ['miryang', '밀양'], ['gyeongju', '경주'],
    ['pohang', '포항'], ['yeongdeok', '영덕'], ['uljin', '울진'],
  ]],
  ['route-2', [
    ['wonju', '원주'], ['pyeongchang', '평창'], ['daegwallyeong', '대관령'], ['gangneung', '강릉'],
  ]],
  ['route-2-branch', [
    ['jecheon', '제천'], ['yeongwol', '영월'], ['jeongseon', '정선'], ['taebaek', '태백'],
  ]],
  ['route-3', [
    ['gapyeong', '가평'], ['chuncheon', '춘천'], ['yanggu', '양구'], ['inje', '인제'],
    ['goseong', '고성'], ['sokcho', '속초'],
  ]],
  ['route-4', [
    ['yangyang', '양양'], ['donghae', '동해'], ['samcheok', '삼척'], ['ulsan', '울산'],
  ]],
  ['route-5', [
    ['gongju', '공주'], ['jeonju', '전주'], ['gwangju', '광주'], ['imsil', '임실'],
    ['namwon', '남원'], ['suncheon', '순천'], ['yeosu', '여수'],
  ]],
  ['route-6', [
    ['incheon', '인천'], ['suwon', '수원'], ['seosan', '서산'], ['boryeong', '보령'],
    ['gunsan', '군산'], ['mokpo', '목포'],
  ]],
  ['route-7', [
    ['haenam', '해남'], ['wando', '완도'], ['boseong', '보성'], ['namhae', '남해'],
    ['tongyeong', '통영'], ['geoje', '거제'],
  ]],
];

const regions = REGION_GROUPS.flatMap(([route, entries]) =>
  entries.map(([slug, nameKo]) => ({ route, slug, nameKo })),
);

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function listCityImages(slug) {
  const cityDir = path.join(IMAGE_ROOT, slug);
  if (!fs.existsSync(cityDir)) return [];

  return fs.readdirSync(cityDir)
    .filter((fileName) => /\.jpe?g$/i.test(fileName))
    .map((fileName) => {
      const absolutePath = path.join(cityDir, fileName);
      return { fileName, stat: fs.statSync(absolutePath) };
    })
    .filter(({ stat }) => stat.isFile() && stat.size > 0)
    .sort((left, right) =>
      left.stat.mtimeMs - right.stat.mtimeMs || left.fileName.localeCompare(right.fileName),
    );
}

function pickEvenly(items, target = SLOT_NAMES.length) {
  if (items.length <= target) return items;

  const indexes = [];
  for (let index = 0; index < target; index += 1) {
    indexes.push(Math.round((index * (items.length - 1)) / (target - 1)));
  }

  return [...new Set(indexes)].map((index) => items[index]);
}

function contentCode(fileName) {
  return path.parse(fileName).name.replace(/-.+$/, '');
}

const slotRegistry = readJson(SLOT_PATH, {});
const previousRegistry = readJson(REGISTRY_PATH, []);
const previousByCode = new Map(
  Array.isArray(previousRegistry)
    ? previousRegistry.filter((item) => item?.contentCode).map((item) => [item.contentCode, item])
    : [],
);
const appliedAssetToSlot = new Map();
const auditCities = [];

for (const { slug } of regions) {
  const slotSet = slotRegistry[slug];
  if (!slotSet?.slots) throw new Error(`Missing city image slot data: ${slug}`);

  const images = listCityImages(slug);
  const selected = pickEvenly(images);
  const originalSlots = structuredClone(slotSet.slots);

  SLOT_NAMES.forEach((slotName, index) => {
    const image = selected[index];
    if (!image) return;

    const code = contentCode(image.fileName);
    const asset = `/images/clipartkorea/${slug}/${image.fileName}`;
    slotSet.slots[slotName] = {
      ...slotSet.slots[slotName],
      status: 'ready',
      asset,
      sourceHref: `https://www.clipartkorea.co.kr/search?menu=m&keyword=${encodeURIComponent(code)}`,
    };
    appliedAssetToSlot.set(asset, slotName);
  });

  // Preserve a city's existing distinct editorial references when fewer than five
  // licensed local photographs were available.
  const usedAssets = new Set();
  for (const slotName of SLOT_NAMES) {
    const slot = slotSet.slots[slotName];
    if (!usedAssets.has(slot.asset)) {
      usedAssets.add(slot.asset);
      continue;
    }

    const distinctFallback = SLOT_NAMES
      .map((name) => originalSlots[name])
      .find((candidate) => candidate.asset && !usedAssets.has(candidate.asset));
    if (distinctFallback) {
      slotSet.slots[slotName] = { ...slot, asset: distinctFallback.asset, sourceHref: distinctFallback.sourceHref };
      usedAssets.add(distinctFallback.asset);
    }
  }

  const assets = SLOT_NAMES.map((slotName) => slotSet.slots[slotName].asset);
  const duplicateSlots = SLOT_NAMES.filter((slotName, index) => assets.indexOf(assets[index]) !== index);
  auditCities.push({
    slug,
    availableLocal: images.length,
    mappedLocal: selected.length,
    uniqueSlotAssets: new Set(assets).size,
    duplicateSlots,
    selectedFiles: selected.map(({ fileName }) => fileName),
  });
}

const queue = {
  version: 2,
  targetPerRegion: 15,
  targetPerSpot: 3,
  maxSpotsPerRegion: 5,
  downloadType: 'JPG (WEB)',
  delayMs: 3000,
  workflow: 'single-search-tab-card-download-menu',
  regions: regions.map((region, index) => ({
    order: index + 1,
    ...region,
    status: 'done',
    localCount: listCityImages(region.slug).length,
  })),
};

const registry = regions.flatMap(({ slug, nameKo }) => {
  const postTitle = slotRegistry[slug]?.city ?? slug;
  return listCityImages(slug).map(({ fileName, stat }) => {
    const code = contentCode(fileName);
    const localPath = `/images/clipartkorea/${slug}/${fileName}`;
    const previous = previousByCode.get(code) ?? {};
    const placement = appliedAssetToSlot.get(localPath) ?? 'reserve';
    return {
      ...previous,
      postId: previous.postId ?? null,
      postSlug: slug,
      postTitle,
      citySlug: slug,
      contentCode: code,
      searchTerm: previous.searchTerm || nameKo,
      localPath,
      originalFileName: previous.originalFileName || `${code}_l.jpg`,
      placement,
      downloadedAt: previous.downloadedAt || stat.mtime.toISOString().slice(0, 10),
      licenseLabel: 'ClipartKorea membership',
      licenseNote: "Downloaded through the account's JPG (WEB) option for use on RoadToKorea.",
      wpMediaId: previous.wpMediaId ?? null,
      wpUrl: previous.wpUrl ?? null,
      status: placement === 'reserve' ? 'downloaded' : 'applied',
    };
  });
});

const audit = {
  generatedAt: new Date().toISOString(),
  summary: {
    regions: regions.length,
    localImages: registry.length,
    appliedSlots: [...appliedAssetToSlot.keys()].length,
    reserveImages: registry.filter((item) => item.status === 'downloaded').length,
    regionsWithFiveUniqueSlots: auditCities.filter((item) => item.uniqueSlotAssets === 5).length,
    duplicateSlotRegions: auditCities.filter((item) => item.duplicateSlots.length > 0).map((item) => item.slug),
  },
  cities: auditCities,
};

writeJson(SLOT_PATH, slotRegistry);
writeJson(QUEUE_PATH, queue);
writeJson(REGISTRY_PATH, registry);
writeJson(AUDIT_PATH, audit);

console.log(JSON.stringify(audit.summary, null, 2));

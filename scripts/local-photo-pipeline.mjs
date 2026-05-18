import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(projectRoot, '..');

const CITY_ALIASES = {
  bosung: 'boseong',
  seongsudong: 'seongsu',
};

const CITY_LABELS = {
  boseong: 'Boseong',
  busan: 'Busan',
  damyang: 'Damyang',
  gongju: 'Gongju',
  jirisan: 'Jirisan',
  seongsu: 'Seongsu',
  seoul: 'Seoul',
  taean: 'Taean',
  yeoncheon: 'Yeoncheon',
};

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function toPosix(value) {
  return value.replace(/\\/g, '/');
}

function trimExtension(fileName) {
  return fileName.replace(/\.[^.]+$/, '');
}

function toMetadataRecord(record) {
  return {
    id: record.id,
    citySlug: record.citySlug,
    cityLabel: record.cityLabel,
    sourcePath: record.sourcePath,
    targetFileName: record.targetFileName,
    localPath: record.localPath,
    alt: record.alt,
    credit: record.credit,
    rightsStatus: record.rightsStatus,
    reviewStatus: record.reviewStatus,
    width: record.width,
    height: record.height,
    byteSize: record.byteSize,
  };
}

export function normalizeCitySlug(value) {
  const normalized = slugifyFilePart(value);
  return CITY_ALIASES[normalized] || normalized;
}

export function slugifyFilePart(value) {
  return trimExtension(String(value))
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getExtension(fileName) {
  const extension = path.extname(fileName).toLowerCase();
  return extension === '.jpeg' ? '.jpg' : extension;
}

function getCityLabel(citySlug) {
  return CITY_LABELS[citySlug] || citySlug.replace(/(^|-)([a-z])/g, (_, prefix, letter) => `${prefix}${letter.toUpperCase()}`);
}

function getCityFolderFromPath(sourceRoot, absolutePath) {
  const relative = path.relative(sourceRoot, absolutePath);
  const parts = relative.split(path.sep);
  return parts.length > 1 ? parts[parts.length - 2] : parts[0];
}

export function parseImageDimensionsFromBuffer(buffer) {
  if (
    buffer.length >= 24
    && buffer[0] === 0x89
    && buffer.toString('ascii', 1, 4) === 'PNG'
    && buffer.toString('ascii', 12, 16) === 'IHDR'
  ) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }

      const marker = buffer[offset + 1];
      const segmentLength = buffer.readUInt16BE(offset + 2);
      const isStartOfFrame = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);

      if (isStartOfFrame) {
        return {
          width: buffer.readUInt16BE(offset + 7),
          height: buffer.readUInt16BE(offset + 5),
        };
      }

      offset += 2 + segmentLength;
    }
  }

  return null;
}

export function createLocalPhotoRecord(item) {
  const citySlug = normalizeCitySlug(item.cityFolder);
  const index = item.index + 1;
  const paddedIndex = String(index).padStart(2, '0');
  const fileStem = slugifyFilePart(item.fileName);
  const extension = getExtension(item.fileName);
  const targetFileName = `${citySlug}-local-photo-${paddedIndex}-${fileStem}${extension}`;
  const outputDir = path.join(item.publicRoot, 'images', 'editorial', `${citySlug}-real`);
  const targetPath = path.join(outputDir, targetFileName);
  const localPath = `/${toPosix(path.relative(item.publicRoot, targetPath))}`;

  return {
    id: `${citySlug}-local-photo-${paddedIndex}`,
    citySlug,
    cityLabel: getCityLabel(citySlug),
    sourcePath: toPosix(path.relative(item.sourceRoot, item.absolutePath)),
    targetFileName,
    targetPath,
    localPath,
    alt: `${getCityLabel(citySlug)} local travel photo ${index}`,
    credit: 'Local contributor photo',
    rightsStatus: 'needs-review',
    reviewStatus: 'imported',
    width: item.width ?? null,
    height: item.height ?? null,
    byteSize: item.byteSize,
  };
}

async function readImageDimensions(filePath) {
  const buffer = await fs.readFile(filePath);
  return parseImageDimensionsFromBuffer(buffer);
}

async function walkImages(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkImages(fullPath));
      continue;
    }

    if (entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      const stat = await fs.stat(fullPath);
      files.push({
        absolutePath: fullPath,
        fileName: entry.name,
        byteSize: stat.size,
      });
    }
  }

  return files.sort((a, b) => a.absolutePath.localeCompare(b.absolutePath));
}

export async function buildLocalPhotoRecords(options = {}) {
  const sourceRoot = path.resolve(options.sourceRoot || path.join(repoRoot, 'picture'));
  const publicRoot = path.resolve(options.publicRoot || path.join(projectRoot, 'public'));
  const images = await walkImages(sourceRoot);
  const countsByCity = new Map();

  return Promise.all(images.map(async (image) => {
    const cityFolder = getCityFolderFromPath(sourceRoot, image.absolutePath);
    const citySlug = normalizeCitySlug(cityFolder);
    const index = countsByCity.get(citySlug) || 0;
    countsByCity.set(citySlug, index + 1);
    const dimensions = await readImageDimensions(image.absolutePath);

    return createLocalPhotoRecord({
      ...image,
      ...dimensions,
      sourceRoot,
      publicRoot,
      cityFolder,
      index,
    });
  }));
}

async function copyRecords(records, { dryRun = false } = {}) {
  for (const record of records) {
    if (dryRun) continue;

    await fs.mkdir(path.dirname(record.targetPath), { recursive: true });
    await fs.copyFile(
      path.resolve(repoRoot, 'picture', record.sourcePath),
      record.targetPath
    );
  }
}

async function writeMetadata(records, { dryRun = false } = {}) {
  if (dryRun) return;

  const byCity = new Map();
  for (const record of records) {
    if (!byCity.has(record.citySlug)) byCity.set(record.citySlug, []);
    byCity.get(record.citySlug).push(record);
  }

  for (const [citySlug, cityRecords] of byCity) {
    const outputDir = path.dirname(cityRecords[0].targetPath);
    const metadataPath = path.join(outputDir, '_sources.json');
    const metadata = {
      citySlug,
      generatedAt: new Date().toISOString(),
      source: 'local-picture-folder',
      rightsNote: 'Imported from local picture folder. Confirm contributor permission before promotional or monetized use.',
      images: cityRecords.map(toMetadataRecord),
    };

    await fs.writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
  }
}

function printSummary(records, { dryRun = false } = {}) {
  const byCity = new Map();
  for (const record of records) {
    byCity.set(record.citySlug, (byCity.get(record.citySlug) || 0) + 1);
  }

  console.log(`${dryRun ? 'Planned' : 'Imported'} ${records.length} local photos.`);
  for (const [citySlug, count] of [...byCity.entries()].sort()) {
    console.log(`- ${citySlug}: ${count}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const records = await buildLocalPhotoRecords();

  await copyRecords(records, { dryRun });
  await writeMetadata(records, { dryRun });
  printSummary(records, { dryRun });
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}

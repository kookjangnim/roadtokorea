import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function printUsage() {
  console.log(
    [
      'Usage:',
      '  node scripts/ingest-editorial-images.mjs <manifest-path> [--force]',
      '',
      'Example:',
      '  node scripts/ingest-editorial-images.mjs data/editorial-image-sources/chungju.json --force',
    ].join('\n')
  );
}

function isHttpUrl(value) {
  return value.startsWith('http://') || value.startsWith('https://');
}

function resolvePath(inputPath) {
  return path.isAbsolute(inputPath) ? inputPath : path.resolve(projectRoot, inputPath);
}

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function createPublicPath(absolutePath) {
  const publicRoot = path.resolve(projectRoot, 'public');
  const relativePath = path.relative(publicRoot, absolutePath).replace(/\\/g, '/');
  return `/${relativePath}`;
}

async function downloadFile(url, destinationPath) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'roadtokorea-editorial-ingest/1.0',
      Accept: 'image/*,*/*;q=0.8',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  await fs.writeFile(destinationPath, Buffer.from(arrayBuffer));
}

async function main() {
  const [, , manifestArg, ...restArgs] = process.argv;
  if (!manifestArg) {
    printUsage();
    process.exit(1);
  }

  const force = restArgs.includes('--force');
  const manifestPath = resolvePath(manifestArg);
  const manifestRaw = await fs.readFile(manifestPath, 'utf8');
  const manifest = JSON.parse(manifestRaw);

  if (!manifest.citySlug || !Array.isArray(manifest.images) || manifest.images.length === 0) {
    throw new Error('Manifest must include citySlug and a non-empty images array.');
  }

  const outputDir = resolvePath(
    manifest.outputDir || `public/images/editorial/${manifest.citySlug}-real`
  );
  await ensureDir(outputDir);

  const downloadedImages = [];

  for (const image of manifest.images) {
    if (!image.url || !image.fileName || !isHttpUrl(image.url)) {
      throw new Error(`Each image requires a valid url and fileName. Problem with id: ${image.id}`);
    }

    const targetPath = path.join(outputDir, image.fileName);
    const exists = await fileExists(targetPath);

    if (!exists || force) {
      console.log(`Downloading ${image.url}`);
      await downloadFile(image.url, targetPath);
    } else {
      console.log(`Skipping existing file ${targetPath}`);
    }

    downloadedImages.push({
      id: image.id,
      title: image.title,
      alt: image.alt,
      sourceLabel: image.sourceLabel,
      sourceHref: image.sourceHref,
      licenseLabel: image.licenseLabel,
      credit: image.credit,
      tags: image.tags ?? [],
      localPath: createPublicPath(targetPath),
      downloadedAt: new Date().toISOString(),
    });
  }

  const metadataPath = path.join(outputDir, '_sources.json');
  const metadata = {
    citySlug: manifest.citySlug,
    generatedAt: new Date().toISOString(),
    images: downloadedImages,
  };

  await fs.writeFile(metadataPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
  console.log(`Saved metadata to ${metadataPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});

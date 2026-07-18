import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);

const REGION_SLUGS = {
  가평: 'gapyeong',
  강릉: 'gangneung',
  경주: 'gyeongju',
  고성: 'goseong',
  공주: 'gongju',
  광주: 'gwangju',
  구미: 'gumi',
  군산: 'gunsan',
  김해: 'gimhae',
  남원: 'namwon',
  담양: 'damyang',
  대구: 'daegu',
  대전: 'daejeon',
  목포: 'mokpo',
  부산: 'busan',
  보성: 'boseong',
  서울: 'seoul',
  서산: 'seosan',
  속초: 'sokcho',
  수원: 'suwon',
  순천: 'suncheon',
  안동: 'andong',
  양양: 'yangyang',
  여수: 'yeosu',
  연천: 'yeoncheon',
  울진: 'uljin',
  원주: 'wonju',
  인천: 'incheon',
  전주: 'jeonju',
  제주: 'jeju',
  제주도: 'jeju',
  진주: 'jinju',
  천안: 'cheonan',
  춘천: 'chuncheon',
  충주: 'chungju',
  태안: 'taean',
  통영: 'tongyeong',
  포항: 'pohang',
  하동: 'hadong',
  해운대: 'haeundae',
};

function printUsage() {
  console.log([
    'Usage:',
    '  node scripts/clipartkorea-organize-downloads.mjs --id tip249 --region 서울 --out F:\\stocks --watch',
    '',
    'This does not control ClipartKorea. Download manually in Chrome; this script only validates, renames, and moves files.',
    '',
    'Options:',
    '  --id tip249              ClipartKorea id folder',
    '  --region 서울             Region folder',
    '  --out F:\\stocks          External-drive stocks folder',
    '  --downloads <path>       Source download folder. Defaults to your Downloads folder',
    '  --watch                  Keep watching for new files',
    '  --limit 50               Stop after moving this many files',
    '  --poll 3000              Watch polling interval in ms',
    '  --min-age 2500           Only move files unchanged for this many ms',
    '  --dry-run                Print moves without moving files',
  ].join('\n'));
}

function parseArgs(argv = process.argv.slice(2)) {
  const options = {
    id: '',
    region: '',
    out: process.env.CLIPART_STOCKS_ROOT || '',
    downloads: path.join(os.homedir(), 'Downloads'),
    watch: false,
    limit: 50,
    poll: 3000,
    minAge: 2500,
    dryRun: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = () => argv[++index];

    if (arg === '--help' || arg === '-h') options.help = true;
    else if (arg === '--id') options.id = next();
    else if (arg === '--region') options.region = next();
    else if (arg === '--out') options.out = next();
    else if (arg === '--downloads') options.downloads = next();
    else if (arg === '--watch') options.watch = true;
    else if (arg === '--limit') options.limit = Number.parseInt(next(), 10);
    else if (arg === '--poll') options.poll = Number.parseInt(next(), 10);
    else if (arg === '--min-age') options.minAge = Number.parseInt(next(), 10);
    else if (arg === '--dry-run') options.dryRun = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function slugifyFolderPart(value) {
  const raw = String(value || '').trim();
  if (REGION_SLUGS[raw]) return REGION_SLUGS[raw];

  return raw
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'unknown';
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function detectFileType(buffer) {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return { extension: '.jpg', kind: 'jpeg' };
  }

  if (buffer.length >= 8 && buffer[0] === 0x89 && buffer.toString('ascii', 1, 4) === 'PNG') {
    return { extension: '.png', kind: 'png' };
  }

  if (buffer.length >= 12 && buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
    return { extension: '.webp', kind: 'webp' };
  }

  if (buffer.length >= 4 && buffer[0] === 0x50 && buffer[1] === 0x4b && buffer[2] === 0x03 && buffer[3] === 0x04) {
    return { extension: '.zip', kind: 'zip' };
  }

  return null;
}

async function stableFileInfo(filePath, minAge) {
  const first = await fs.stat(filePath);
  const age = Date.now() - first.mtimeMs;
  if (!first.isFile() || first.size === 0 || age < minAge) return null;
  if (filePath.endsWith('.crdownload') || filePath.endsWith('.tmp')) return null;

  await new Promise((resolve) => setTimeout(resolve, 250));
  const second = await fs.stat(filePath);
  if (first.size !== second.size || second.size === 0) return null;
  return second;
}

async function readJson(filePath, fallback) {
  if (!await pathExists(filePath)) return fallback;
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function writeJson(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function extractCode(fileName, id) {
  const escapedId = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = fileName.match(new RegExp(`(${escapedId}[a-z0-9_-]+)`, 'i'));
  return match?.[1] || '';
}

async function uniquePath(targetDir, baseName, extension) {
  let index = 1;
  let targetPath = path.join(targetDir, `${baseName}${extension}`);
  while (await pathExists(targetPath)) {
    index += 1;
    targetPath = path.join(targetDir, `${baseName}-${String(index).padStart(2, '0')}${extension}`);
  }
  return targetPath;
}

async function organizeOnce(options, seen) {
  const sourceDir = path.resolve(options.downloads);
  const outputRoot = path.resolve(options.out);
  const regionSlug = slugifyFolderPart(options.region);
  const targetDir = path.join(outputRoot, options.id, regionSlug);
  const rejectedDir = path.join(outputRoot, '_rejected');
  const logPath = path.join(outputRoot, 'clipartkorea-manual-download-log.json');
  const log = await readJson(logPath, { generatedAt: new Date().toISOString(), downloads: [] });

  await fs.mkdir(targetDir, { recursive: true });
  await fs.mkdir(rejectedDir, { recursive: true });

  const entries = await fs.readdir(sourceDir, { withFileTypes: true });
  let moved = 0;

  for (const entry of entries) {
    if (!entry.isFile()) continue;

    const sourcePath = path.join(sourceDir, entry.name);
    if (seen.has(sourcePath)) continue;

    const stat = await stableFileInfo(sourcePath, options.minAge).catch(() => null);
    if (!stat) continue;

    const buffer = await fs.readFile(sourcePath);
    const type = detectFileType(buffer);
    if (!type) continue;

    const code = extractCode(entry.name, options.id);
    const baseName = code || `${options.id}-${regionSlug}-${new Date(stat.mtimeMs).toISOString().replace(/[-:TZ.]/g, '').slice(0, 14)}`;
    const targetPath = await uniquePath(targetDir, baseName, type.extension);

    console.log(`${options.dryRun ? 'Would move' : 'Moving'} ${sourcePath} -> ${targetPath}`);
    if (!options.dryRun) {
      await fs.rename(sourcePath, targetPath);
      log.downloads.push({
        id: options.id,
        region: options.region,
        regionSlug,
        originalFileName: entry.name,
        fileName: path.basename(targetPath),
        relativePath: path.relative(outputRoot, targetPath).replace(/\\/g, '/'),
        byteSize: buffer.length,
        fileKind: type.kind,
        movedAt: new Date().toISOString(),
        source: 'manual-clipartkorea-download',
      });
      await writeJson(logPath, log);
    }

    seen.add(sourcePath);
    moved += 1;
    if (moved >= options.limit) break;
  }

  return moved;
}

async function main() {
  const options = parseArgs();
  if (options.help) {
    printUsage();
    return;
  }

  if (!options.id) throw new Error('--id is required.');
  if (!options.region) throw new Error('--region is required.');
  if (!options.out) throw new Error('--out is required.');

  const seen = new Set();
  let total = 0;

  do {
    total += await organizeOnce({ ...options, limit: options.limit - total }, seen);
    if (!options.watch || total >= options.limit) break;
    await new Promise((resolve) => setTimeout(resolve, options.poll));
  } while (true);

  console.log(`Done. Moved ${total} file(s).`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}


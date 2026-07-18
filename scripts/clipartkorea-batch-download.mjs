import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DEFAULT_IDS = ['tip249', 'tip250', 'cm26', 'cm27', 'cm28'];
const DEFAULT_DOWNLOAD_TYPE = 'JPG (WEB) 다운받기';
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.zip']);

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
    '  node scripts/clipartkorea-batch-download.mjs --regions 서울,해운대 --limit 500 [--out F:\\stocks]',
    '',
    'Options:',
    '  --ids tip249,tip250,cm26,cm27,cm28  ClipartKorea id prefixes to mix',
    '  --regions 서울,해운대,부산             Region terms to combine with each id',
    '  --limit 500                           Total new downloads before stopping',
    '  --out F:\\stocks                       External-drive stocks folder. If omitted, CLIPART_STOCKS_ROOT or an existing *:\\stocks is used.',
    '  --profile <path>                      Browser profile folder for ClipartKorea login',
    '  --cdp http://127.0.0.1:9222           Attach to a real Chrome session started with remote debugging',
    '  --downloads <path>                    Native Chrome download folder to watch',
    '  --per-query 25                        Max new downloads per id/region query per pass',
    '  --max-pages 5                         Max result pages per query',
    '  --min-delay 3000                       Minimum wait between downloads in ms',
    '  --max-delay 3000                       Maximum wait between downloads in ms',
    '  --page-delay 5000                      Wait after each search page loads in ms',
    '  --download-type "JPG (WEB) 다운받기"  Menu option to click',
    '  --setup-login                         Open the automation profile so you can log in once',
    '  --headless                            Run browser headlessly',
    '  --dry-run                             Print plan without opening browser',
    '',
    'Examples:',
    '  node scripts/clipartkorea-batch-download.mjs --regions 서울 --limit 1 --out D:\\stocks',
    '  node scripts/clipartkorea-batch-download.mjs --ids tip249,cm27 --regions 서울,해운대 --limit 500 --out F:\\stocks',
  ].join('\n'));
}

function splitCsv(value) {
  return String(value || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function slugifyFolderPart(value) {
  const raw = String(value || '').trim();
  if (REGION_SLUGS[raw]) return REGION_SLUGS[raw];

  return raw
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'unknown';
}

function parseArgs(argv = process.argv.slice(2)) {
  const options = {
    ids: DEFAULT_IDS,
    regions: [],
    limit: 500,
    out: process.env.CLIPART_STOCKS_ROOT || '',
    profile: path.join(process.env.LOCALAPPDATA || projectRoot, 'RoadToKorea', 'clipartkorea-profile'),
    cdp: '',
    downloads: path.join(os.homedir(), 'Downloads'),
    perQuery: 25,
    maxPages: 5,
    minDelay: 3000,
    maxDelay: 3000,
    pageDelay: 5000,
    downloadType: DEFAULT_DOWNLOAD_TYPE,
    setupLogin: false,
    headless: false,
    dryRun: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = () => argv[++index];

    if (arg === '--help' || arg === '-h') {
      options.help = true;
    } else if (arg === '--ids') {
      options.ids = splitCsv(next());
    } else if (arg === '--regions') {
      options.regions = splitCsv(next());
    } else if (arg === '--limit') {
      options.limit = Number.parseInt(next(), 10);
    } else if (arg === '--out') {
      options.out = next();
    } else if (arg === '--profile') {
      options.profile = next();
    } else if (arg === '--cdp') {
      options.cdp = next();
    } else if (arg === '--downloads') {
      options.downloads = next();
    } else if (arg === '--per-query') {
      options.perQuery = Number.parseInt(next(), 10);
    } else if (arg === '--max-pages') {
      options.maxPages = Number.parseInt(next(), 10);
    } else if (arg === '--min-delay') {
      options.minDelay = Number.parseInt(next(), 10);
    } else if (arg === '--max-delay') {
      options.maxDelay = Number.parseInt(next(), 10);
    } else if (arg === '--page-delay') {
      options.pageDelay = Number.parseInt(next(), 10);
    } else if (arg === '--download-type') {
      options.downloadType = next();
    } else if (arg === '--setup-login') {
      options.setupLogin = true;
    } else if (arg === '--headless') {
      options.headless = true;
    } else if (arg === '--dry-run') {
      options.dryRun = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function randomInt(min, max) {
  const floorMin = Math.floor(min);
  const floorMax = Math.max(floorMin, Math.floor(max));
  return floorMin + Math.floor(Math.random() * (floorMax - floorMin + 1));
}

async function humanPause(page, label, minMs, maxMs = minMs) {
  const delay = randomInt(minMs, maxMs);
  console.log(`${label}: waiting ${(delay / 1000).toFixed(1)}s`);
  await page.waitForTimeout(delay);
}

async function openBrowser(options) {
  if (options.cdp) {
    const browser = await chromium.connectOverCDP(options.cdp);
    const context = browser.contexts()[0] || await browser.newContext({ acceptDownloads: true });
    return { browser, context };
  }

  const context = await chromium.launchPersistentContext(options.profile, {
    acceptDownloads: true,
    headless: options.headless,
    viewport: { width: 1440, height: 1000 },
  });

  return { browser: context, context };
}

async function runLoginSetup(options) {
  const { browser, context } = await openBrowser({ ...options, headless: false });
  const page = context.pages()[0] || await context.newPage();
  await page.goto('https://www.clipartkorea.co.kr/', { waitUntil: 'domcontentloaded', timeout: 30000 });

  console.log('A browser window is open. Log in to ClipartKorea there, then press Enter here.');
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  await rl.question('');
  rl.close();

  if (!options.cdp) await browser.close();
  console.log(options.cdp ? 'Existing Chrome session is logged in.' : `Login profile saved: ${options.profile}`);
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function resolveOutputRoot(explicitOut) {
  if (explicitOut) return path.resolve(explicitOut);

  if (process.platform !== 'win32') {
    throw new Error('No output root configured. Pass --out <external-drive-stocks-path>.');
  }

  const candidates = [];
  for (let code = 68; code <= 90; code += 1) {
    const drive = `${String.fromCharCode(code)}:\\`;
    const stocksPath = path.join(drive, 'stocks');
    if (await pathExists(stocksPath)) candidates.push(stocksPath);
  }

  if (candidates.length === 1) return candidates[0];
  if (candidates.length > 1) {
    throw new Error(`Multiple stocks folders found. Choose one with --out:\n${candidates.join('\n')}`);
  }

  throw new Error('Could not find an existing external stocks folder. Create F:\\stocks or pass --out F:\\stocks.');
}

async function readJson(filePath, fallback) {
  if (!await pathExists(filePath)) return fallback;
  return JSON.parse(await fs.readFile(filePath, 'utf8'));
}

async function writeJson(filePath, value) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function createSearchUrl(id, region, page) {
  const keyword = encodeURIComponent(`${id} ${region}`);
  return `https://www.clipartkorea.co.kr/search?menu=m&hdn=tc0273&ska=2&sort=3&per=150&ad=on&nw=on&keyword=${keyword}&view=g&page=${page}`;
}

function getExtension(fileName) {
  const ext = path.extname(fileName || '').toLowerCase();
  return IMAGE_EXTENSIONS.has(ext) ? ext : '.jpg';
}

function detectFileType(buffer) {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return { extension: '.jpg', kind: 'jpeg' };
  }

  if (
    buffer.length >= 8
    && buffer[0] === 0x89
    && buffer.toString('ascii', 1, 4) === 'PNG'
  ) {
    return { extension: '.png', kind: 'png' };
  }

  if (buffer.length >= 12 && buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') {
    return { extension: '.webp', kind: 'webp' };
  }

  if (buffer.length >= 4 && buffer[0] === 0x50 && buffer[1] === 0x4b && buffer[2] === 0x03 && buffer[3] === 0x04) {
    return { extension: '.zip', kind: 'zip' };
  }

  const head = buffer.subarray(0, 256).toString('utf8').toLowerCase();
  if (head.includes('<!doctype html') || head.includes('<html')) {
    return { extension: '.html', kind: 'html' };
  }

  return { extension: '.bin', kind: 'unknown' };
}

async function inspectDownloadedFile(filePath) {
  const buffer = await fs.readFile(filePath);
  return {
    ...detectFileType(buffer),
    byteSize: buffer.length,
  };
}

function buildFileName(record, extension) {
  return `${record.code}${extension}`;
}

async function listNativeDownloadFiles(downloadsDir) {
  const entries = await fs.readdir(downloadsDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (!entry.isFile()) continue;

    const filePath = path.join(downloadsDir, entry.name);
    if (entry.name.endsWith('.crdownload') || entry.name.endsWith('.tmp')) continue;

    const stat = await fs.stat(filePath).catch(() => null);
    if (!stat || stat.size <= 0) continue;

    files.push({
      filePath,
      fileName: entry.name,
      mtimeMs: stat.mtimeMs,
      size: stat.size,
    });
  }

  return files;
}

async function waitForNativeDownload(downloadsDir, beforeFiles, startedAt, timeoutMs = 60000) {
  const before = new Set(beforeFiles.map((file) => `${file.filePath}:${file.size}:${Math.floor(file.mtimeMs)}`));
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    const currentFiles = await listNativeDownloadFiles(downloadsDir);
    const candidates = currentFiles
      .filter((file) => file.mtimeMs >= startedAt - 1000)
      .filter((file) => !before.has(`${file.filePath}:${file.size}:${Math.floor(file.mtimeMs)}`))
      .sort((a, b) => b.mtimeMs - a.mtimeMs);

    for (const candidate of candidates) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const stableStat = await fs.stat(candidate.filePath).catch(() => null);
      if (!stableStat || stableStat.size !== candidate.size) continue;

      const inspection = await inspectDownloadedFile(candidate.filePath).catch(() => null);
      if (inspection && IMAGE_EXTENSIONS.has(inspection.extension)) {
        return { ...candidate, inspection };
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error(`Timed out waiting for a native Chrome download in ${downloadsDir}`);
}

async function waitForResults(page) {
  await page.waitForLoadState('domcontentloaded', { timeout: 30000 });
  await page.waitForFunction(
    () => document.querySelectorAll('.cksch_unit').length > 0 || /로그인|captcha|CAPTCHA|보안|인증/.test(document.body.innerText),
    null,
    { timeout: 30000 }
  );
}

async function detectFriction(page) {
  const text = await page.locator('body').innerText({ timeout: 10000 }).catch(() => '');
  const checks = [
    '로그인이 필요',
    '로그인',
    'CAPTCHA',
    'captcha',
    '보안문자',
    '자동입력',
    '비정상',
    '다운로드 제한',
    '라이선스 구매',
    '권한',
  ];
  return checks.find((item) => text.includes(item)) || '';
}

async function collectResultRecords(page, id, region, regionSlug) {
  return page.$$eval('.cksch_unit', (units, args) => units.map((unit) => {
    const image = unit.querySelector('img');
    return {
      id: args.id,
      region: args.region,
      regionSlug: args.regionSlug,
      code: unit.dataset.code || '',
      group: unit.dataset.group || '',
      preview: unit.dataset.preview || '',
      thumb: image?.currentSrc || image?.src || '',
      alt: image?.alt || '',
    };
  }).filter((item) => item.code && item.group === 'krpho'), { id, region, regionSlug });
}

async function clickDownloadMenu(page, code, downloadType) {
  const unit = page.locator(`.cksch_unit[data-code="${code}"]`);
  await unit.scrollIntoViewIfNeeded();
  await page.waitForTimeout(randomInt(1500, 4000));
  await unit.hover();
  await page.waitForTimeout(randomInt(1200, 3500));
  const downloadIcon = unit.locator('.ic_dw');
  await downloadIcon.click({ timeout: 10000 });

  const option = unit.locator('.mg-layer__item').filter({ hasText: downloadType });
  await option.waitFor({ state: 'visible', timeout: 10000 });
  await page.waitForTimeout(randomInt(1200, 3500));

  await option.click({ timeout: 10000 });
}

async function downloadRecord(page, record, outputRoot, registry, options) {
  if (record.group !== 'krpho') {
    throw new Error(`Refusing non-photo ClipartKorea asset: ${record.code} (${record.group})`);
  }

  const targetDir = path.join(outputRoot, record.id, record.regionSlug);
  await fs.mkdir(targetDir, { recursive: true });

  const downloadsDir = path.resolve(options.downloads);
  const beforeFiles = await listNativeDownloadFiles(downloadsDir);
  const startedAt = Date.now();

  await clickDownloadMenu(page, record.code, options.downloadType);
  const nativeDownload = await waitForNativeDownload(downloadsDir, beforeFiles, startedAt);
  const inspection = nativeDownload.inspection;
  const fileName = buildFileName(record, inspection.extension || getExtension(nativeDownload.fileName));
  const targetPath = path.join(targetDir, fileName);

  if (await pathExists(targetPath)) {
    await fs.rm(nativeDownload.filePath, { force: true });
    return { status: 'skipped-existing-file', targetPath };
  }

  await fs.rename(nativeDownload.filePath, targetPath);
  const entry = {
    code: record.code,
    id: record.id,
    region: record.region,
    regionSlug: record.regionSlug,
    fileName,
    relativePath: path.relative(outputRoot, targetPath).replace(/\\/g, '/'),
    absolutePath: targetPath,
    alt: record.alt,
    preview: record.preview,
    thumb: record.thumb,
    downloadedAt: new Date().toISOString(),
    byteSize: inspection.byteSize,
    fileKind: inspection.kind,
    nativeFileName: nativeDownload.fileName,
    source: 'clipartkorea',
    downloadType: options.downloadType,
  };

  registry.downloads.push(entry);
  registry.codes[record.code] = entry;
  return { status: 'downloaded', targetPath };
}

async function runBatch(options) {
  if (options.setupLogin) {
    await runLoginSetup(options);
    return;
  }

  if (!options.ids.length) throw new Error('At least one id is required.');
  if (!options.regions.length) throw new Error('At least one region is required. Pass --regions 서울,해운대');
  if (!Number.isFinite(options.limit) || options.limit < 1) throw new Error('--limit must be a positive number.');
  if (!Number.isFinite(options.minDelay) || !Number.isFinite(options.maxDelay) || options.minDelay < 0 || options.maxDelay < options.minDelay) {
    throw new Error('--min-delay and --max-delay must be valid milliseconds, with max >= min.');
  }

  const outputRoot = await resolveOutputRoot(options.out);
  const queries = options.ids.flatMap((id) => options.regions.map((region) => ({
    id,
    region,
    regionSlug: slugifyFolderPart(region),
  })));

  console.log(`Output root: ${outputRoot}`);
  console.log(`Watching native downloads: ${path.resolve(options.downloads)}`);
  console.log(`Queries: ${queries.map((query) => `${query.id} ${query.region}`).join(', ')}`);
  console.log(`Limit: ${options.limit}`);

  if (options.dryRun) return;

  await fs.mkdir(outputRoot, { recursive: true });
  const registryPath = path.join(outputRoot, 'clipartkorea-download-log.json');
  const registry = await readJson(registryPath, { generatedAt: new Date().toISOString(), downloads: [], codes: {} });
  registry.downloads ||= [];
  registry.codes ||= {};

  const { browser, context } = await openBrowser(options);
  const page = context.pages()[0] || await context.newPage();
  let downloadedCount = 0;

  try {
    for (const query of queries) {
      let queryDownloads = 0;
      for (let pageNumber = 1; pageNumber <= options.maxPages; pageNumber += 1) {
        if (downloadedCount >= options.limit || queryDownloads >= options.perQuery) break;

        const searchUrl = createSearchUrl(query.id, query.region, pageNumber);
        console.log(`Searching: ${query.id} ${query.region} page ${pageNumber}`);
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await waitForResults(page);
        await humanPause(page, 'Page review', options.pageDelay, options.pageDelay + 10000);

        const friction = await detectFriction(page);
        const records = await collectResultRecords(page, query.id, query.region, query.regionSlug);
        if (!records.length) {
          if (friction) throw new Error(`ClipartKorea stopped at "${friction}". Login or account confirmation may be needed.`);
          console.log('No result cards found.');
          break;
        }

        for (const record of records) {
          if (downloadedCount >= options.limit || queryDownloads >= options.perQuery) break;
          if (registry.codes[record.code]) continue;

          await humanPause(page, 'Before download', options.minDelay, options.maxDelay);
          const result = await downloadRecord(page, record, outputRoot, registry, options);
          if (result.status === 'downloaded') {
            downloadedCount += 1;
            queryDownloads += 1;
            await writeJson(registryPath, registry);
            console.log(`[${downloadedCount}/${options.limit}] ${record.id}/${record.regionSlug}/${path.basename(result.targetPath)}`);
          }

          await humanPause(page, 'After download', options.minDelay, options.maxDelay);
        }
      }
    }
  } finally {
    await writeJson(registryPath, registry);
    if (!options.cdp) await browser.close();
  }

  console.log(`Done. Downloaded ${downloadedCount} new files.`);
  console.log(`Log: ${registryPath}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const options = parseArgs();
  if (options.help) {
    printUsage();
    process.exit(0);
  }

  runBatch(options).catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
}

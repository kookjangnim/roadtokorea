import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const DEFAULT_KEYWORDS = ['은하수', '별', '오로라', '제주도', '이탈리아'];
const DEFAULT_MIN_DELAY_MS = 1000;
const DEFAULT_MAX_DELAY_MS = 10000;
const DEFAULT_DOWNLOAD_TYPE = 'JPG (WEB) 다운받기';
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.zip']);
const ALLOWED_PHOTO_GROUPS = new Set(['krpho', 'photo']);

const REGION_SLUGS = {
  은하수: 'milky-way',
  별: 'stars',
  오로라: 'aurora',
  이탈리아: 'italy',
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
    '  node scripts/clipartkorea-batch-download.mjs --limit 500 [--out F:\\stocks]',
    '',
    'Options:',
    '  --keywords 은하수,별,오로라,제주도,이탈리아  Search keywords',
    '  --limit 500                           Total new downloads before stopping',
    '  --out F:\\stocks                       External-drive stocks folder. If omitted, CLIPART_STOCKS_ROOT or an existing *:\\stocks is used.',
    '  --profile <path>                      Browser profile folder for ClipartKorea login',
    '  --cdp http://127.0.0.1:9222           Attach to a real Chrome session started with remote debugging',
    '  --downloads <path>                    Native Chrome download folder to watch',
    '  --per-query 25                        Max new downloads per keyword per pass',
    '  --max-pages 5                         Max result pages per query',
    '  --min-delay 1000                       Minimum random wait between downloads in ms',
    '  --max-delay 10000                      Maximum random wait (capped at 10000 ms)',
    '  --page-delay 1500                      Minimum page review wait in ms',
    '  --download-type "JPG (WEB) 다운받기"  Menu option to click',
    '  --setup-login                         Open the automation profile so you can log in once',
    '  --headless                            Run browser headlessly',
    '  --dry-run                             Print plan without opening browser',
    '',
    'Examples:',
    '  node scripts/clipartkorea-batch-download.mjs --limit 5 --out D:\\stocks',
    '  node scripts/clipartkorea-batch-download.mjs --keywords 은하수,오로라 --limit 100 --out F:\\stocks',
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
    keywords: DEFAULT_KEYWORDS,
    limit: 500,
    out: process.env.CLIPART_STOCKS_ROOT || '',
    profile: path.join(process.env.LOCALAPPDATA || projectRoot, 'RoadToKorea', 'clipartkorea-profile'),
    cdp: '',
    downloads: path.join(os.homedir(), 'Downloads'),
    perQuery: 25,
    maxPages: 5,
    minDelay: DEFAULT_MIN_DELAY_MS,
    maxDelay: DEFAULT_MAX_DELAY_MS,
    pageDelay: 1500,
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
    } else if (arg === '--keywords') {
      options.keywords = splitCsv(next());
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
    channel: 'chrome',
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

function createSearchUrl(searchTerm, page) {
  const keyword = encodeURIComponent(searchTerm);
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

async function ensurePhotoFilters(page) {
  const targetNames = ['국내포토', '해외포토'];
  const result = await page.evaluate((names) => {
    const normalize = (value) => String(value || '').replace(/\s+/g, '');
    const labels = [...document.querySelectorAll('label')]
      .filter((label) => label.getClientRects().length > 0);
    const states = [];

    for (const name of names) {
      const label = labels.find((candidate) => normalize(candidate.textContent).includes(name));
      if (!label) {
        states.push({ name, found: false, checked: false });
        continue;
      }

      const input = label.control
        || label.querySelector('input[type="checkbox"]')
        || label.parentElement?.querySelector('input[type="checkbox"]');
      if (!input) {
        states.push({ name, found: true, checked: false });
        continue;
      }

      if (!input.checked) input.click();
      if (!input.checked) label.click();
      states.push({ name, found: true, checked: input.checked });
    }

    return states;
  }, targetNames);

  const missing = result.filter((item) => !item.found).map((item) => item.name);
  if (missing.length) {
    throw new Error(`Required photo filters were not found: ${missing.join(', ')}`);
  }

  await page.waitForTimeout(1500);
  const checked = await page.evaluate((names) => {
    const normalize = (value) => String(value || '').replace(/\s+/g, '');
    return names.every((name) => {
      const label = [...document.querySelectorAll('label')]
        .filter((candidate) => candidate.getClientRects().length > 0)
        .find((candidate) => normalize(candidate.textContent).includes(name));
      const input = label?.control
        || label?.querySelector('input[type="checkbox"]')
        || label?.parentElement?.querySelector('input[type="checkbox"]');
      return Boolean(input?.checked);
    });
  }, targetNames);

  if (!checked) {
    const diagnostics = await page.evaluate(() => ({
      url: location.href,
      labels: [...document.querySelectorAll('label')]
        .filter((label) => label.getClientRects().length > 0 && /포토/.test(label.textContent || ''))
        .map((label) => ({
          text: (label.textContent || '').trim(),
          html: (label.parentElement?.outerHTML || label.outerHTML).slice(0, 1200),
          control: label.control ? {
            type: label.control.type,
            name: label.control.name,
            value: label.control.value,
            checked: label.control.checked,
          } : null,
        })),
    }));
    throw new Error(`국내 포토와 해외 포토 필터가 모두 선택되지 않아 다운로드를 중단합니다. ${JSON.stringify(diagnostics)}`);
  }

  console.log('Photo filters confirmed: 국내 포토, 해외 포토');
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

async function collectResultRecords(page, keyword, keywordSlug) {
  return page.$$eval('.cksch_unit', (units, args) => units.map((unit) => {
    const image = unit.querySelector('img');
    return {
      keyword: args.keyword,
      keywordSlug: args.keywordSlug,
      code: unit.dataset.code || '',
      group: unit.dataset.group || '',
      preview: unit.dataset.preview || '',
      thumb: image?.currentSrc || image?.src || '',
      alt: image?.alt || '',
    };
  }).filter((item) => item.code && ['krpho', 'photo'].includes(item.group)), { keyword, keywordSlug });
}

async function clickDownloadMenu(page, code, downloadType) {
  const result = await page.evaluate(({ targetCode, targetType }) => {
    const unit = document.querySelector(`.cksch_unit[data-code="${CSS.escape(targetCode)}"]`);
    if (!unit) return { ok: false, reason: 'result card not found' };

    const option = [...unit.querySelectorAll('.mg-layer__item')]
      .find((item) => (item.textContent || '').includes(targetType));
    if (!option) return { ok: false, reason: 'download option not found' };

    const handler = option.getAttribute('onclick') || '';
    option.click();
    return { ok: true, handler };
  }, { targetCode: code, targetType: downloadType });

  if (!result.ok) {
    throw new Error(`DOM download failed for ${code}: ${result.reason}`);
  }

  console.log(`DOM download triggered: ${code}`);
}

async function downloadRecord(page, record, outputRoot, registry, options) {
  if (!ALLOWED_PHOTO_GROUPS.has(record.group)) {
    throw new Error(`Refusing non-photo ClipartKorea asset: ${record.code} (${record.group})`);
  }

  const targetDir = path.join(outputRoot, record.keywordSlug);
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
    group: record.group,
    keyword: record.keyword,
    keywordSlug: record.keywordSlug,
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

  if (!options.keywords.length) throw new Error('At least one search keyword is required.');
  if (!Number.isFinite(options.limit) || options.limit < 1) throw new Error('--limit must be a positive number.');
  if (!Number.isFinite(options.minDelay) || !Number.isFinite(options.maxDelay) || options.minDelay < 0 || options.maxDelay < options.minDelay) {
    throw new Error('--min-delay and --max-delay must be valid milliseconds, with max >= min.');
  }
  if (options.maxDelay > DEFAULT_MAX_DELAY_MS) {
    throw new Error(`--max-delay cannot exceed ${DEFAULT_MAX_DELAY_MS} ms.`);
  }

  const outputRoot = await resolveOutputRoot(options.out);
  const queries = options.keywords.map((keyword) => ({
    keyword,
    keywordSlug: slugifyFolderPart(keyword),
  }));

  console.log(`Output root: ${outputRoot}`);
  console.log(`Watching native downloads: ${path.resolve(options.downloads)}`);
  console.log(`Keywords: ${queries.map((query) => query.keyword).join(', ')}`);
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

        const searchUrl = createSearchUrl(query.keyword, pageNumber);
        console.log(`Searching: ${query.keyword} page ${pageNumber}`);
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await waitForResults(page);
        await ensurePhotoFilters(page);
        await humanPause(page, 'Page review', options.pageDelay, Math.min(10000, options.pageDelay + 2000));

        const friction = await detectFriction(page);
        const records = await collectResultRecords(page, query.keyword, query.keywordSlug);
        if (!records.length) {
          if (friction) throw new Error(`ClipartKorea stopped at "${friction}". Login or account confirmation may be needed.`);
          console.log('No result cards found.');
          break;
        }

        for (const record of records) {
          if (downloadedCount >= options.limit || queryDownloads >= options.perQuery) break;
          if (registry.codes[record.code]) continue;

          try {
            const result = await downloadRecord(page, record, outputRoot, registry, options);
            if (result.status === 'downloaded') {
              downloadedCount += 1;
              queryDownloads += 1;
              await writeJson(registryPath, registry);
              console.log(`[${downloadedCount}/${options.limit}] ${record.keywordSlug}/${path.basename(result.targetPath)}`);
            }
          } catch (error) {
            console.error(`Skipping ${record.code}: ${error instanceof Error ? error.message : error}`);
          }

          await humanPause(page, 'Next download', options.minDelay, options.maxDelay);
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

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();

const skipDirs = new Set([
  '.git',
  '.next',
  'node_modules',
  'public/images',
]);

const textExtensions = new Set([
  '.css',
  '.csv',
  '.html',
  '.js',
  '.json',
  '.jsx',
  '.md',
  '.mjs',
  '.scss',
  '.ts',
  '.tsx',
  '.txt',
]);

const mojibakePatterns = [
  { name: 'replacement-character', pattern: /\uFFFD/g },
  { name: 'cjk-replacement-marker', pattern: /\u5360/g },
  { name: 'question-before-hangul', pattern: /\?[\uAC00-\uD7A3]/g },
  { name: 'hangul-before-question', pattern: /[\uAC00-\uD7A3]\?/g },
  { name: 'latin1-utf8-mojibake', pattern: /[\u00C3\u00C2\u00D0\u00D1\u00D8\u00DE\u00DF]/g },
  { name: 'curly-quote-mojibake', pattern: /\u00E2[\u20AC\u2122\u0153\u201C\u201D\u2013\u2014\u00A2]/g },
  { name: 'emoji-mojibake', pattern: /\u00F0\u0178/g },
  { name: 'c1-control', pattern: /[\u0080-\u009F]/g },
];

function shouldSkip(relativePath) {
  const normalized = relativePath.replaceAll(path.sep, '/');
  if (normalized === 'scripts/audit-mojibake.mjs') return true;
  return [...skipDirs].some((skipDir) => normalized === skipDir || normalized.startsWith(`${skipDir}/`));
}

function isTextFile(filePath) {
  return textExtensions.has(path.extname(filePath).toLowerCase());
}

function walk(dirPath, files = []) {
  for (const entry of readdirSync(dirPath)) {
    const filePath = path.join(dirPath, entry);
    const relativePath = path.relative(projectRoot, filePath);
    if (shouldSkip(relativePath)) continue;

    const stat = statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath, files);
    } else if (stat.isFile() && isTextFile(filePath)) {
      files.push(filePath);
    }
  }
  return files;
}

function lineContext(content, index) {
  const before = content.slice(0, index);
  const line = before.split(/\r?\n/).length;
  const lineStart = content.lastIndexOf('\n', index) + 1;
  const lineEnd = content.indexOf('\n', index);
  const text = content.slice(lineStart, lineEnd === -1 ? content.length : lineEnd).trim();
  return { line, text };
}

const findings = [];

for (const filePath of walk(projectRoot)) {
  const relativePath = path.relative(projectRoot, filePath).replaceAll(path.sep, '/');
  const content = readFileSync(filePath, 'utf8');

  for (const { name, pattern } of mojibakePatterns) {
    pattern.lastIndex = 0;
    for (const match of content.matchAll(pattern)) {
      const { line, text } = lineContext(content, match.index ?? 0);
      findings.push({
        file: relativePath,
        line,
        pattern: name,
        text,
      });
    }
  }
}

if (findings.length === 0) {
  console.log('No mojibake-like text patterns found.');
  process.exit(0);
}

for (const finding of findings) {
  console.log(`${finding.file}:${finding.line} [${finding.pattern}] ${finding.text}`);
}

process.exitCode = 1;

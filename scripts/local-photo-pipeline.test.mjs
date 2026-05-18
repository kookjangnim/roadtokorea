import test from 'node:test';
import assert from 'node:assert/strict';

import {
  createLocalPhotoRecord,
  normalizeCitySlug,
  parseImageDimensionsFromBuffer,
  slugifyFilePart,
} from './local-photo-pipeline.mjs';

test('normalizes known local folder aliases to public city slugs', () => {
  assert.equal(normalizeCitySlug('bosung'), 'boseong');
  assert.equal(normalizeCitySlug('seongsudong'), 'seongsu');
  assert.equal(normalizeCitySlug('Busan'), 'busan');
});

test('slugifies file parts for stable SEO-friendly image names', () => {
  assert.equal(slugifyFilePart('KakaoTalk_20260513_221428079_01.jpg'), 'kakaotalk-20260513-221428079-01');
  assert.equal(slugifyFilePart('  Taean Beach Night  '), 'taean-beach-night');
});

test('creates a public local photo record from an inventory item', () => {
  const record = createLocalPhotoRecord({
    sourceRoot: 'D:/Project/roadtokorea/picture',
    publicRoot: 'D:/Project/roadtokorea/frontend/public',
    absolutePath: 'D:/Project/roadtokorea/picture/bosung/KakaoTalk_20260514_173842538_01.jpg',
    cityFolder: 'bosung',
    fileName: 'KakaoTalk_20260514_173842538_01.jpg',
    index: 0,
    width: 640,
    height: 800,
    byteSize: 164422,
  });

  assert.equal(record.citySlug, 'boseong');
  assert.equal(record.targetFileName, 'boseong-local-photo-01-kakaotalk-20260514-173842538-01.jpg');
  assert.equal(record.localPath, '/images/editorial/boseong-real/boseong-local-photo-01-kakaotalk-20260514-173842538-01.jpg');
  assert.equal(record.rightsStatus, 'needs-review');
  assert.equal(record.credit, 'Local contributor photo');
  assert.equal(record.alt, 'Boseong local travel photo 1');
});

test('parses PNG dimensions from image bytes', () => {
  const png = Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
    0x00, 0x00, 0x00, 0x0d,
    0x49, 0x48, 0x44, 0x52,
    0x00, 0x00, 0x02, 0x80,
    0x00, 0x00, 0x01, 0xe0,
  ]);

  assert.deepEqual(parseImageDimensionsFromBuffer(png), { width: 640, height: 480 });
});

test('parses JPEG dimensions from image bytes', () => {
  const jpeg = Buffer.from([
    0xff, 0xd8,
    0xff, 0xe0, 0x00, 0x04, 0x00, 0x00,
    0xff, 0xc0, 0x00, 0x11,
    0x08,
    0x03, 0x20,
    0x04, 0x00,
    0x03, 0x01, 0x11, 0x00,
  ]);

  assert.deepEqual(parseImageDimensionsFromBuffer(jpeg), { width: 1024, height: 800 });
});

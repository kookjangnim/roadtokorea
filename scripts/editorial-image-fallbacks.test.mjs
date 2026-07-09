import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getEditorialImageForCity,
  getEditorialImageForPost,
  getSafeEditorialImage,
} from '../data/editorialImageFallbacks.js';

test('uses local editorial assets before remote WordPress images', () => {
  const image = getEditorialImageForPost({
    slug: 'busan-haeundae-guide',
    title: { rendered: '부산 해운대 여행 가이드 - 한국으로 가는 길' },
    excerpt: { rendered: '' },
    content: { rendered: '' },
  });

  assert.equal(
    image,
    '/images/editorial/busan-real/busan-local-photo-01-kakaotalk-20260513-173628599-01.jpg'
  );
});

test('finds local assets from Korean city titles', () => {
  const image = getEditorialImageForPost({
    slug: 'seongsu-cafe-street',
    title: { rendered: '성수 여행 가이드 - 한국으로 가는 길' },
    excerpt: { rendered: '' },
    content: { rendered: '' },
  });

  assert.equal(
    image,
    '/images/editorial/seongsu-real/seongsu-local-photo-01-kakaotalk-20260513-193027586-01.jpg'
  );
});

test('keeps card images safe when a candidate URL is missing or remote', () => {
  assert.equal(
    getSafeEditorialImage('', 'boseong'),
    '/images/editorial/boseong-real/boseong-local-photo-01-kakaotalk-20260514-173842538-01.jpg'
  );
  assert.equal(getSafeEditorialImage('https://example.com/not-an-image-page', 'unknown'), '/images/placeholder.png');
});

test('city lookup exposes local real photo sets directly', () => {
  assert.equal(
    getEditorialImageForCity('damyang'),
    '/images/editorial/damyang-real/damyang-local-photo-01-kakaotalk-20260514-132212120.jpg'
  );
});

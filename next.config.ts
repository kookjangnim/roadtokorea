import type { NextConfig } from "next";

const uploadHost = process.env.NEXT_PUBLIC_WP_UPLOAD_HOST
  || process.env.WP_UPLOAD_HOST
  || (() => {
    try {
      return new URL(process.env.NEXT_PUBLIC_API_BASE || 'https://api.roadtokorea.blog/wp-json/wp/v2').hostname;
    } catch {
      return 'api.roadtokorea.blog';
    }
  })();

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/routes/seoul/busan',
        destination: '/route-1',
        permanent: true,
      },
      {
        source: '/routes/seoul/gangneung',
        destination: '/route-2',
        permanent: true,
      },
      {
        source: '/tier-1/gangneung',
        destination: '/cities/gangneung',
        permanent: true,
      },
      {
        source: '/tier-2/:city(daejeon|daegu|andong|gyeongju)',
        destination: '/route-1/:city',
        permanent: true,
      },
      {
        source: '/tier-2/gwangju',
        destination: '/route-5/gwangju',
        permanent: true,
      },
      {
        source: '/tier-2/:city(incheon|suwon|mokpo)',
        destination: '/route-6/:city',
        permanent: true,
      },
      {
        source: '/tier-4/:city(cheonan|chungju|gumi|changnyeong|uljin|sangju|yeongdeok|miryang|pohang|mungyeong)',
        destination: '/route-1/:city',
        permanent: true,
      },
      {
        source: '/tier-4/:city(wonju|pyeongchang|daegwallyeong)',
        destination: '/route-2/:city',
        permanent: true,
      },
      {
        source: '/tier-4/:city(yangyang|donghae|samcheok|ulsan)',
        destination: '/route-4/:city',
        permanent: true,
      },
      {
        source: '/tier-4/:city(gongju|jeonju|imsil|namwon|suncheon)',
        destination: '/route-5/:city',
        permanent: true,
      },
      {
        source: '/tier-4/:city(seosan|boryeong|gunsan)',
        destination: '/route-6/:city',
        permanent: true,
      },
      {
        source: '/tier-4/:city(haenam|wando|boseong|namhae|tongyeong|geoje)',
        destination: '/route-7/:city',
        permanent: true,
      },
      {
        source: '/tier-1/yeosu',
        destination: '/route-5/yeosu',
        permanent: true,
      },
      {
        source: '/regions/:legacyCategory',
        destination: '/routes',
        permanent: true,
      },
      {
        source: '/regions/:legacyCategory/cities',
        destination: '/routes',
        permanent: true,
      },
      {
        source: '/:legacyCategory(tier-1|tier-2|tier-3|tier-4)',
        destination: '/routes',
        permanent: true,
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: uploadHost,
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'commons.wikimedia.org',
        pathname: '/wiki/Special:FilePath/**',
      },
      {
        protocol: 'https',
        hostname: 'tong.visitkorea.or.kr',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'tong.visitkorea.or.kr',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

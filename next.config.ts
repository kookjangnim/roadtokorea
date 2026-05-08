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
        source: '/regions/:tier',
        destination: '/:tier/cities',
        permanent: true,
      },
      {
        source: '/regions/:tier/cities',
        destination: '/:tier/cities',
        permanent: true,
      },
      {
        source: '/:tier(tier-1|tier-2|tier-3|tier-4)',
        destination: '/:tier/cities',
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
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

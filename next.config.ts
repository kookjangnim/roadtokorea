import type { NextConfig } from "next";

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
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.roadtokorea.blog',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
};

export default nextConfig;

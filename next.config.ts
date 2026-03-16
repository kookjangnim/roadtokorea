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
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.roadtokorea.blog',
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
      }
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.marvelbros.com',
          },
        ],
        destination: 'https://marvelbros.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

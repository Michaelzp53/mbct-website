import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    // Existing local images are resized/compressed ahead of deployment.
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/solutions', destination: '/zh/services', permanent: true },
      { source: '/:lang(zh|en)/solutions', destination: '/:lang/services', permanent: true },
      {
        source: '/:lang/services',
        has: [{ type: 'query', key: 'category' }],
        destination: '/:lang/services',
        permanent: true,
      },
      {
        source: '/:lang/contact-us',
        destination: '/:lang/contact',
        permanent: true,
      },
      {
        source: '/:lang/get-plan',
        destination: '/:lang/contact?type=plan',
        permanent: true,
      },
      {
        source: '/:lang/insights',
        destination: '/:lang/knowledge',
        permanent: true,
      },
      {
        source: '/:lang/industry',
        destination: '/:lang/knowledge',
        permanent: true,
      },
      {
        source: '/:lang/case-studies',
        destination: '/:lang/cases',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

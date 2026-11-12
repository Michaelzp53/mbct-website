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
    const httpsUpgrade = {
      has: [{ type: 'header' as const, key: 'x-forwarded-proto', value: 'http' }],
      permanent: true,
    }
    return [
      { source: '/', ...httpsUpgrade, destination: 'https://www.marvelbros.com/' },
      { source: '/:path*', ...httpsUpgrade, destination: 'https://www.marvelbros.com/:path*' },
      { source: '/hangye', destination: '/zh/knowledge', permanent: true },
      { source: '/:lang(zh|en)/hangye', destination: '/:lang/knowledge', permanent: true },
      { source: '/gxjzd', destination: '/zh/lean', permanent: true },
      { source: '/:lang(zh|en)/gxjzd', destination: '/:lang/lean', permanent: true },
      { source: '/lean', destination: '/zh/lean', permanent: true },
      { source: '/:lang(zh|en)/knowledge/hotel-ramp-up-sequence-2026-05-23', destination: '/:lang/lean/article/new-hotel-ramp-up-sequence-2026-05-23', permanent: true },
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

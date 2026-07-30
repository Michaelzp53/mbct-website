import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: ['Googlebot', 'Bingbot', 'Baiduspider', 'GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'PerplexityBot'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.marvelbros.com/sitemap.xml',
    host: 'https://www.marvelbros.com',
  }
}

'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function ArticleEngagementTracker({ articleSlug }: { articleSlug: string }) {
  useEffect(() => {
    const sent = new Set<number>()
    const checkDepth = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return
      const depth = Math.round((window.scrollY / scrollable) * 100)
      ;([50, 90] as const).forEach((threshold) => {
        if (depth >= threshold && !sent.has(threshold)) {
          sent.add(threshold)
          trackEvent(threshold === 50 ? 'article_50_percent' : 'article_90_percent', {
            article_slug: articleSlug,
            scroll_depth: threshold,
          })
        }
      })
    }

    window.addEventListener('scroll', checkDepth, { passive: true })
    checkDepth()
    return () => window.removeEventListener('scroll', checkDepth)
  }, [articleSlug])

  return null
}

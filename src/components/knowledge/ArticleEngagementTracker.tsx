'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export default function ArticleEngagementTracker({ articleSlug, articleType = 'knowledge' }: { articleSlug: string; articleType?: 'knowledge' | 'lean' }) {
  useEffect(() => {
    const sent = new Set<number>()
    let activeSeconds = 0
    let lastTick = performance.now()
    const checkDepth = () => {
      const body = document.querySelector('[data-article-body]')
      if (!body || document.visibilityState !== 'visible' || activeSeconds < 30) return
      const rect = body.getBoundingClientRect()
      if (rect.height <= 0 || rect.top >= window.innerHeight || rect.bottom <= 0) return
      const depth = Math.min(100, Math.max(0, (window.innerHeight - rect.top) / rect.height * 100))
      for (const threshold of [50, 90]) {
        if (depth >= threshold && !sent.has(threshold)) {
          sent.add(threshold)
          trackEvent(threshold === 50 ? 'article_50_percent' : 'article_90_percent', {
            article_slug: articleSlug, article_type: articleType, scroll_depth: threshold,
            active_seconds: Math.floor(activeSeconds), measurement_version: 'body-v2',
          })
        }
      }
    }
    const timer = window.setInterval(() => {
      const now = performance.now()
      const elapsed = Math.min((now - lastTick) / 1000, 2)
      lastTick = now
      const body = document.querySelector('[data-article-body]')?.getBoundingClientRect()
      if (document.visibilityState === 'visible' && document.hasFocus() && body && body.top < window.innerHeight && body.bottom > 0) activeSeconds += elapsed
      checkDepth()
    }, 1000)
    window.addEventListener('scroll', checkDepth, { passive: true })
    return () => {
      window.clearInterval(timer)
      window.removeEventListener('scroll', checkDepth)
    }
  }, [articleSlug, articleType])
  return null
}

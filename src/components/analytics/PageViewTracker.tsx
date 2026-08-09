'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackEvent } from '@/lib/analytics'

/** Sends one GA4 page_view for each real App Router navigation. */
export default function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    trackEvent('page_view', {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname])

  return null
}

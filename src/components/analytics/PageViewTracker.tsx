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
    if (/^\/(zh|en)\/contact$/.test(pathname)) {
      trackEvent('contact_page_visit', { page_path: pathname })
    }
  }, [pathname])

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return
      const link = event.target.closest('a[href]')
      if (!link) return
      const href = link.getAttribute('href') || ''
      // Track intent only; never send the visitor's phone, email, or message.
      if (href.startsWith('tel:')) trackEvent('phone_click', { page_path: window.location.pathname })
      else if (href.startsWith('mailto:')) trackEvent('email_click', { page_path: window.location.pathname })
      else {
        const url = new URL(href, window.location.href)
        if (url.origin === window.location.origin && /^\/(zh|en)\/contact$/.test(url.pathname)) {
          trackEvent('contact_link_click', { page_path: window.location.pathname, contact_type: url.searchParams.get('type')?.slice(0, 80) || 'general' })
        }
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}

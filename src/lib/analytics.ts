export type AnalyticsEventName =
  | 'related_article_click'
  | 'topic_hub_click'
  | 'case_link_click'
  | 'article_to_service_click'
  | 'article_to_contact_click'
  | 'knowledge_search'
  | 'article_50_percent'
  | 'article_90_percent'
  | 'contact_form_submit_success'
  | 'page_view'

type AnalyticsParameters = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, parameters?: AnalyticsParameters) => void
  }
}

/** Records only an action a visitor actually takes. */
export function trackEvent(eventName: AnalyticsEventName, parameters: AnalyticsParameters = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters)
  }
}

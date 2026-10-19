// Markdown auto-links can absorb Chinese closing punctuation. Repair only
// internal destinations; keep the published text and external links unchanged.
export function normalizeInternalArticleHref(href?: string) {
  if (!href || !/^https:\/\/(?:www\.)?marvelbros\.com\//i.test(href)) return href
  return href
    .split(/(?:[）】]|%EF%BC%89|%E3%80%91)/iu)[0]
    .replace(/^https:\/\/marvelbros\.com\//i, 'https://www.marvelbros.com/')
}

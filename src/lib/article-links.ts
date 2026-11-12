// Repair only MarvelBros destinations. Published link text and external links stay unchanged.
const internalHost = /^(?:https?:\/\/)?(?:www\.)?marvelbros\.com/iu

export function normalizeInternalArticleHref(href?: string) {
  if (!href || !internalHost.test(href.trim())) return href
  let raw = href.trim().replace(/^http:\/\//iu, 'https://')
  if (!/^https?:\/\//iu.test(raw)) raw = `https://${raw}`
  raw = raw.replace(/^https:\/\/marvelbros\.com/iu, 'https://www.marvelbros.com')
  raw = raw.split(/(?:[；。，、）】]|\s|电话|邮箱|或通过|%EF%BC%9B|%E3%80%82|%EF%BC%8C|%E3%80%81|%EF%BC%89|%E3%80%91)/iu)[0]
  let parsed: URL
  try {
    parsed = new URL(raw)
  } catch {
    return href
  }
  if (parsed.hostname.toLowerCase() !== 'www.marvelbros.com') return href
  const lang = parsed.pathname.match(/^\/(zh|en)(?=\/|$)/u)?.[1]
  let path = parsed.pathname.replace(/\/+$/u, '') || '/'
  if (path === '/hangye' || path === '/zh/hangye' || path === '/en/hangye') path = `/${lang || 'zh'}/knowledge`
  else if (path === '/gxjzd' || path === '/zh/gxjzd' || path === '/en/gxjzd') path = `/${lang || 'zh'}/lean`
  else if (path === '/lean') path = '/zh/lean'
  return `https://www.marvelbros.com${path}${parsed.search}${parsed.hash}`
}

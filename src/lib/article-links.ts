// Repair only MarvelBros destinations. Published link text and external links stay unchanged.
const internalHost = /^(?:https?:\/\/)?(?:www\.)?marvelbros\.com/iu
const glue = /[；。，、）】：:\s]|电话|邮箱|或通过/u

export type ArticleHrefLang = 'zh' | 'en'

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

function cutGluedSuffix(url: string) {
  const match = url.match(/^(https?:\/\/(?:www\.)?marvelbros\.com)(.*)$/iu)
  if (!match) return url
  let suffix = match[2]
  if (suffix.startsWith('/') || suffix.startsWith('?') || suffix.startsWith('#')) {
    suffix = suffix.split(glue)[0]
  } else {
    suffix = ''
  }
  return match[1] + suffix
}

export function normalizeInternalArticleHref(href?: string, lang: ArticleHrefLang = 'zh') {
  if (!href || !internalHost.test(href.trim())) return href
  const decoded = safeDecode(href.trim())
  let raw = internalHost.test(decoded) ? decoded : href.trim()
  raw = raw.replace(/^http:\/\//iu, 'https://')
  if (!/^https?:\/\//iu.test(raw)) raw = `https://${raw}`
  raw = raw.replace(/^https:\/\/marvelbros\.com/iu, 'https://www.marvelbros.com')
  raw = cutGluedSuffix(raw)
  let parsed: URL
  try {
    parsed = new URL(raw)
  } catch {
    return href
  }
  if (parsed.hostname.toLowerCase() !== 'www.marvelbros.com') return href
  const explicitLang = parsed.pathname.match(/^\/(zh|en)(?=\/|$)/u)?.[1]
  let path = parsed.pathname.replace(/\/+$/u, '') || '/'
  if (path === '/') path = `/${lang}`
  else if (path === '/hangye') path = `/${lang}/knowledge`
  else if (path === '/zh/hangye' || path === '/en/hangye') path = `/${explicitLang}/knowledge`
  else if (path === '/gxjzd' || path === '/lean') path = `/${lang}/lean`
  else if (path === '/zh/gxjzd' || path === '/en/gxjzd') path = `/${explicitLang}/lean`
  return `https://www.marvelbros.com${path}${parsed.search}${parsed.hash}`
}

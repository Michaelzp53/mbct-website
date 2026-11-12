import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import { normalizeInternalArticleHref, type ArticleHrefLang } from '../src/lib/article-links.ts'

const token = /(?:(?:https?:\/\/)?(?:www\.)?marvelbros\.com|\/zh\/)[^\s"'<>)\]\\]*/gu

function walk(dir: string, out: string[] = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name)
    if (statSync(full).isDirectory()) {
      if (name !== 'node_modules') walk(full, out)
    } else if (/\.(ts|tsx|json|md)$/u.test(name) && !full.includes(`${path.sep}scripts${path.sep}`) && !full.endsWith(`${path.sep}article-links.ts`)) {
      out.push(full)
    }
  }
  return out
}

function candidates(found: string) {
  const list = [found]
  const match = found.match(/^((?:https?:\/\/)?(?:www\.)?marvelbros\.com)(.*)$/iu)
  if (match && /[^\u0000-\u007F]/u.test(match[2])) {
    list.push(`http://www.marvelbros.com${encodeURIComponent(match[2])}`)
  }
  return list
}

function problem(url: string, lang: ArticleHrefLang) {
  if (url.startsWith('http://')) return 'http'
  if (/[；。，、）】：\u3400-\u9fff]|电话|邮箱|或通过/u.test(url)) return 'chinese-or-punctuation'
  const absolute = url.startsWith('/') ? `https://www.marvelbros.com${url}` : url
  let parsed: URL
  try {
    parsed = new URL(absolute)
  } catch {
    return 'unparsed'
  }
  const pathname = parsed.pathname.replace(/\/+$/u, '') || '/'
  if (pathname === '/hangye' || pathname === '/gxjzd' || pathname === '/lean' || pathname.endsWith('/hangye') || pathname.endsWith('/gxjzd')) {
    return 'legacy-path'
  }
  if (lang === 'en' && (pathname === '/zh' || pathname.startsWith('/zh/'))) return 'english-page-links-zh'
  return ''
}

const failures: string[] = []
let checked = 0
for (const file of walk('src')) {
  const text = readFileSync(file, 'utf8')
  for (const match of text.matchAll(token)) {
    const clipped = match[0].split(/[；。，、）】：*]|电话|邮箱|或通过/u)[0]
      for (const href of candidates(clipped)) {
      for (const lang of ['zh', 'en'] as ArticleHrefLang[]) {
        checked += 1
        const normalized = normalizeInternalArticleHref(href, lang) || ''
        const reason = problem(normalized, lang)
        if (reason) failures.push(`${file} [${lang}] ${reason}: ${href} -> ${normalized}`)
      }
    }
  }
}

if (failures.length) {
  console.error(failures.slice(0, 40).join('\n'))
  console.error(`failed ${failures.length} of ${checked}`)
  process.exit(1)
}
console.log(`checked ${checked} rendered MarvelBros hrefs; none keep http, Chinese text, a legacy path, or a /zh path on an English page`)

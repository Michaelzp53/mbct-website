// eslint-disable-next-line @typescript-eslint/no-require-imports -- Standalone Node CommonJS verification script.
const assert = require('node:assert/strict')
const base = process.env.BASE_URL || 'http://127.0.0.1:3005'

const fetchWithTimeout = url => fetch(url, { signal: AbortSignal.timeout(10000) })

async function main() {
  for (const lang of ['zh', 'en']) {
    for (const section of ['knowledge', 'lean']) {
      const slug = section === 'knowledge' ? 'hotel-cost' : 'lean-cost'
      const path = `/${section}/category/${slug}`
      const response = await fetchWithTimeout(`${base}/${lang}${path}`)
      assert.equal(response.status, 200)
      const html = await response.text()
      assert.ok(html.includes(`<html lang="${lang === 'zh' ? 'zh-CN' : 'en-US'}"`))
      assert.ok(html.includes(`rel="canonical" href="https://www.marvelbros.com/${lang}${path}"`))
      for (const [language, locale] of [['zh-CN', 'zh'], ['en-US', 'en'], ['x-default', 'zh']]) {
        assert.ok(html.includes(`hrefLang="${language}" href="https://www.marvelbros.com/${locale}${path}"`))
      }
      assert.match(html, /name="description" content="[^"]+"/)
      assert.ok(html.includes(`property="og:url" content="https://www.marvelbros.com/${lang}${path}"`))
      assert.ok(html.includes('<h1'))
      const invalid = await fetchWithTimeout(`${base}/${lang}/${section}/category/nonexistent-category`)
      assert.equal(invalid.status, 404)
      assert.match(await invalid.text(), /name="robots" content="noindex"/)
    }
  }
  const legacy = await fetchWithTimeout(`${base}/zh/lean/category/cost?q=test`)
  assert.equal(legacy.status, 200)
  assert.ok((await legacy.text()).includes('rel="canonical" href="https://www.marvelbros.com/zh/lean/category/lean-cost"'))
  console.log('Category verification passed: localized metadata, 404/noindex, legacy canonical.')
}
main().catch(error => { console.error(error); process.exitCode = 1 })

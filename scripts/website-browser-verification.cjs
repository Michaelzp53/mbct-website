const assert = require('node:assert/strict')
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright')

async function run() {
  const base = process.env.BASE_URL || 'http://127.0.0.1:3000'
  const browser = await chromium.launch({
    ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
    headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  })
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    // No production mail or analytics requests are sent by this verification.
    await page.route('**/*', route => new URL(route.request().url()).origin === new URL(base).origin ? route.continue() : route.abort())
    let outcome = 'success', submissions = []
    await page.route('**/api/contact', async route => {
      submissions.push(route.request().postDataJSON())
      await new Promise(resolve => setTimeout(resolve, 100))
      await route.fulfill({ status: outcome === 'failure' ? 503 : 200, contentType: 'application/json',
        body: JSON.stringify(outcome === 'failure' ? { success: false } : { success: true, saved: true, delivered: false, receipt: 42 }) })
    })
    await page.goto(`${base}/zh/contact?type=diagnosis&article=hotel-diagnosis-five-blind-spots-2026-06-15`)
    await page.waitForFunction(() => window.dataLayer?.some(entry => entry[1] === 'contact_page_visit'))
    assert.equal(await page.locator('form').count(), 1)
    assert.equal(await page.locator('html').getAttribute('lang'), 'zh-CN')
    assert.equal(await page.locator('button[type="submit"]').isEnabled(), false)
    await page.getByLabel('您的称呼 *').fill('本地测试')
    await page.getByLabel('电话或微信 *').fill('test-wechat')
    await page.getByLabel('项目阶段 *').selectOption('在营改善')
    await page.getByLabel('目前最想解决的问题 *').fill('入住率提高，利润没有改善。')
    await page.locator('#contact-privacy').check()
    assert.equal(await page.locator('form').evaluate(form => form.checkValidity()), true)
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true)
    await page.screenshot({ path: process.env.SCREENSHOT_PATH || '/tmp/mbct-contact-mobile.png', fullPage: true })
    // Two synchronous submit attempts must produce only one network request.
    await page.locator('form').evaluate(form => { form.requestSubmit(); form.requestSubmit() })
    await page.getByRole('heading', { name: '您的问题已收到' }).waitFor()
    assert.equal(submissions.length, 1)
    assert.ok(submissions[0].message.includes('Article reference: hotel-diagnosis-five-blind-spots-2026-06-15'))
    assert.equal(await page.evaluate(() => window.dataLayer.filter(entry => entry[1] === 'contact_form_submit_success').length), 1)
    const successEvent = await page.evaluate(() => Array.from(window.dataLayer.find(entry => entry[1] === 'contact_form_submit_success')))
    assert.equal(successEvent[2].receipt_status, 'saved')
    outcome = 'failure'
    await page.reload()
    await page.getByLabel('您的称呼 *').fill('本地测试')
    await page.getByLabel('电话或微信 *').fill('test-wechat')
    await page.getByLabel('项目阶段 *').selectOption('在营改善')
    await page.getByLabel('目前最想解决的问题 *').fill('失败后保留这段问题')
    await page.locator('#contact-privacy').check()
    await page.getByRole('button', { name: '提交问题', exact: true }).click()
    await page.getByRole('alert').waitFor()
    assert.equal(await page.getByLabel('目前最想解决的问题 *').inputValue(), '失败后保留这段问题')
    assert.equal(await page.evaluate(() => window.dataLayer.filter(entry => entry[1] === 'contact_form_submit_success').length), 0)
    await page.evaluate(() => {
      for (const link of document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]')) link.addEventListener('click', e => e.preventDefault())
    })
    await page.locator('a[href^="tel:"]').first().click()
    await page.locator('a[href^="mailto:"]').last().click()
    assert.equal(await page.evaluate(() => window.dataLayer.filter(entry => entry[1] === 'phone_click').length), 1)
    assert.equal(await page.evaluate(() => window.dataLayer.filter(entry => entry[1] === 'email_click').length), 1)
    await page.goto(`${base}/en/contact?type=plan&article=test`)
    await page.getByLabel('Your name *').waitFor()
    assert.equal(await page.locator('html').getAttribute('lang'), 'en-US')
    assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://www.marvelbros.com/en/contact')
    await page.setViewportSize({ width: 1440, height: 1000 })
    await page.goto(`${base}/zh/knowledge`)
    await page.getByRole('heading', { name: '专业洞察：酒店经营问题与方法', exact: true }).waitFor()
    assert.equal(await page.locator('h1').count(), 1)
    await page.locator('input[type="search"]').fill('人工成本')
    await page.getByText('匹配文章（最多显示8篇）', { exact: true }).waitFor()
    await page.goto(`${base}/en`)
    assert.equal(await page.locator('html').getAttribute('lang'), 'en-US')
    await page.locator('a[href="/zh"]').first().click()
    await page.waitForURL('**/zh')
    assert.equal(await page.locator('html').getAttribute('lang'), 'zh-CN')
    assert.deepEqual(errors, [])
    console.log('PASS: mobile/desktop render, language navigation, form success/failure, article source, duplicate-submit guard, click events, search, no page errors. Mail and GA ingestion remain external checks.')
  } finally { await browser.close() }
}
run().catch(error => { console.error(error); process.exitCode = 1 })

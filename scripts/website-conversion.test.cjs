const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')

function load(file, mocks = {}, globals = {}) {
  const exports = {}
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText
  vm.runInNewContext(source, { exports, require: name => {
    if (!(name in mocks)) throw new Error(`Unexpected dependency: ${name}`)
    return mocks[name]
  }, ...globals })
  return exports
}

const valid = { name: 'Test', phone: 'test-wechat', service: 'Hotel enquiry', message: 'Question' }
async function contact({ env = {}, databaseFails = false, updateFails = false, mailFails = false, accepted = [] } = {}, payload = valid) {
  let emails = 0
  const api = load('src/app/api/contact/route.ts', {
    'next/server': { NextResponse: { json: (body, options) => ({ body, status: options?.status || 200 }) } },
    '@vercel/postgres': { sql: async strings => {
      const query = strings.join('')
      if (databaseFails || (updateFails && query.includes('UPDATE'))) throw new Error('Storage failure')
      return { rows: query.includes('RETURNING') ? [{ id: 42 }] : [] }
    } },
    nodemailer: { createTransport: () => ({ sendMail: async () => {
      emails++
      if (mailFails) throw new Error('Mail failure')
      return { accepted }
    }, close() {} }) },
  }, { process: { env }, console: { error() {} } })
  return { ...(await api.POST({ json: async () => payload })), emails }
}
const smtp = { SMTP_USER: 'test@example.invalid', SMTP_PASSWORD: 'local-test' }

test('No storage and no mail must not report success', async () => {
  const response = await contact()
  assert.equal(response.status, 503)
  assert.equal(response.body.success, false)
})
test('Saved enquiry survives missing mail configuration', async () => {
  const response = await contact({ env: { POSTGRES_URL: 'test' } })
  assert.equal(response.body.saved, true)
  assert.equal(response.body.delivered, false)
  assert.equal(response.body.receipt, 42)
})
test('Mail accepted by target is sufficient when storage fails', async () => {
  const response = await contact({ env: { ...smtp, POSTGRES_URL: 'test' }, databaseFails: true, accepted: ['info@marvelbros.com'] })
  assert.equal(response.body.delivered, true)
  assert.equal(response.body.saved, false)
})
test('Resolved mail promise without recipient acceptance is not delivery', async () => {
  assert.equal((await contact({ env: smtp, accepted: [] })).status, 503)
})
test('Saved enquiry survives SMTP failure', async () => {
  const response = await contact({ env: { ...smtp, POSTGRES_URL: 'test' }, mailFails: true })
  assert.equal(response.body.success, true)
  assert.equal(response.body.delivered, false)
})
test('Notification status update failure cannot invalidate received enquiry', async () => {
  const response = await contact({ env: { ...smtp, POSTGRES_URL: 'test' }, updateFails: true, accepted: ['info@marvelbros.com'] })
  assert.equal(response.body.success, true)
  assert.equal(response.body.delivered, true)
})
test('Malformed and oversized payloads are rejected before external writes', async () => {
  for (const payload of [null, [], { ...valid, name: 123 }, { ...valid, name: 'x'.repeat(101) }, { ...valid, message: '' }, { ...valid, email: 'bad-email' }]) {
    const response = await contact({ env: smtp }, payload)
    assert.equal(response.status, 400)
    assert.equal(response.emails, 0)
  }
})
test('Article subjects take precedence over incidental summary keywords', () => {
  const { getPrimaryTopic } = load('src/lib/knowledge-topics.ts')
  assert.equal(getPrimaryTopic({ title: '酒店AI不是PPT：工具上线之后', summary: 'AI搜索与信息平台' }), 'operations')
  assert.equal(getPrimaryTopic({ title: '酒店采购成本怎么管', summary: '业主与总经理讨论投资' }), 'cost')
  assert.equal(getPrimaryTopic({ title: '酒店AI搜索可见性', summary: '经营服务' }), 'ai-search')
  assert.equal(getPrimaryTopic({ title: '老酒店翻新应如何安排', summary: '投资回报' }), 'renovation')
  assert.equal(getPrimaryTopic({ title: '酒店与在地非遗合作，先从哪一个住客触点开始？', titleEn: 'Hotel collaboration with heritage practitioners' }), 'cultural-tourism')
  assert.equal(getPrimaryTopic({ title: '人工智能对酒店运营决策的影响机制研究' }), 'operations')
  assert.equal(getPrimaryTopic({ title: '酒店团队如何协作', titleEn: 'Hotel team collaboration' }), 'team')
})
test('Canonical and historical lean categories retain their intended section', () => {
  const { knowledgeCategories, leanCategories, normalizeLeanCategory, getLeanArticleCategory, isLeanCategory } = load('src/lib/knowledge-taxonomy.ts')
  assert.equal(knowledgeCategories.length, 10)
  assert.equal(leanCategories.length, 8)
  assert.equal(normalizeLeanCategory('hotel-cost'), 'lean-cost')
  assert.equal(normalizeLeanCategory('lean-cost'), 'lean-cost')
  assert.equal(normalizeLeanCategory('cost'), 'lean-cost')
  assert.equal(getLeanArticleCategory({ category: 'operations', titleZh: '酒店收益管理如何改善' }), 'lean-revenue')
  assert.equal(isLeanCategory('unknown'), false)
})
test('Reading depth requires visible body time and fires once per threshold', () => {
  let effect, tick, scroll, now = 0, focused = true
  const events = []
  const document = { visibilityState: 'visible', hasFocus: () => focused, querySelector: () => ({ getBoundingClientRect: () => ({ top: -500, bottom: 500, height: 1000 }) }) }
  const tracker = load('src/components/knowledge/ArticleEngagementTracker.tsx', {
    react: { useEffect: fn => { effect = fn } },
    '@/lib/analytics': { trackEvent: (...args) => events.push(args) },
  }, { document, performance: { now: () => now }, window: { innerHeight: 600, setInterval: fn => { tick = fn; return 1 }, clearInterval() {}, addEventListener: (_, fn) => { scroll = fn }, removeEventListener() {} } })
  tracker.default({ articleSlug: 'test', articleType: 'lean' })
  const cleanup = effect()
  scroll()
  assert.equal(events.length, 0)
  focused = false
  for (let i = 0; i < 40; i++) { now += 1000; tick() }
  assert.equal(events.length, 0)
  focused = true
  for (let i = 0; i < 30; i++) { now += 1000; tick() }
  assert.equal(events.length, 2)
  scroll()
  assert.equal(events.length, 2)
  assert.equal(events[0][1].measurement_version, 'body-v2')
  assert.equal(events[0][1].article_type, 'lean')
  cleanup()
})

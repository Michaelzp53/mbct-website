import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'
  const title = isZh
    ? '豆包开始收酒店订房佣金：AI推荐会不会改变客人找到好酒店的机会？'
    : 'When AI Recommends Hotels and Earns on the Booking, What Must Stay Independent?'
  const summary = isZh
    ? '豆包酒店订单开始作为独立渠道结算后，酒店、传统OTA与住客都要重新理解推荐、交易和履约之间的边界。'
    : 'As Doubao hotel bookings become a separately priced channel, hotels, OTAs and guests must reconsider the boundary between recommendation, transaction and fulfilment.'
  const content = isZh ? `
## 这不是一笔普通佣金

2026年8月，豆包酒店订单开始引发酒店业广泛讨论。公开报道显示，自8月10日起，经豆包入口跳转并在抖音来客成交的相关酒店订单，公开费率口径为11.4%的软件服务费加0.6%的支付手续费，综合约12%；此前同类订单被报道为并入抖音自然流量、按8%结算。

豆包方面的公开回应也很重要：目前没有酒店付费推广，商家不能通过付费影响推荐或排序，仅在订单成交后支付渠道服务费。也就是说，现阶段不能把这12%理解成“买推荐位”的价格。

但这件事仍然值得酒店业认真对待。因为一个对话式AI入口开始从成交中获得渠道收入，意味着它正在从“帮客人找信息”走向“参与交易分发”。推荐、跳转、支付、酒店接单和线下履约，开始被一条新的链路串起来。

这条链路会不会替代传统OTA？短期不会。传统OTA仍然掌握库存、比价、评价、退改、客服和售后等基础设施。真正发生变化的是，客人可能先问AI，再决定去哪个平台完成订单；酒店也必须开始管理“自己是怎样被描述、被比较和被交付的”。

## 对传统OTA的影响，不只是多了一个竞争者

传统OTA过去的核心优势，是把大量酒店库存集中起来，再用搜索、筛选、排序和评价帮助客人完成选择。AI入口的优势则是先理解自然语言中的复杂要求，例如“离地铁近、适合带孩子、晚上安静、早餐不要太简单”，再给出候选。

因此，AI并不会简单地把OTA搬走，而是可能把OTA从“客人主动搜索的目的地”变成“AI推荐后承接交易和履约的基础设施”。这会带来三重压力。

第一，OTA需要证明自己不只是一个收佣金的货架。库存深度、实时价格、真实评价、取消规则、售后处理和履约保障，必须变成AI能够准确调用、客人能够理解的结构化信息。

第二，OTA的流量价值会被重新拆分。过去平台可以把曝光、搜索、广告、会员和订单放在一个体系里计算；未来酒店会追问：这笔订单到底是平台新增的需求，还是客人本来就会订、只是换了一个入口？

第三，推荐与商业化之间的边界需要更清楚。豆包目前公开表示不能付费影响排序，这是一个明确边界。但酒店和住客仍然看不到完整排序逻辑，也无法仅凭一句声明判断所有推荐是否都最符合客人需求。行业真正需要的是可解释的推荐条件、清晰的商品规则和可追溯的订单来源。

## 酒店不该先研究“怎样排在前面”

目前没有可靠公开证据证明，酒店可以通过购买关键词、堆砌描述或所谓GEO服务，让豆包稳定把自己排在前面。相反，市场上已经出现把“AI推荐优化”包装成排名捷径的风险。

酒店更应该做四件基础工作。

第一，保证酒店信息真实、完整和持续更新。位置、房型、床型、早餐、停车、入住限制、适用人群和退改规则，不能只写一套宣传话术，而要让不同渠道看到同一份可履约事实。

第二，把产品按真实客人问题重新组织。客人不是只问“有没有房”，还会问是否方便带孩子、是否适合商务、夜间是否安静、到机场是否方便。酒店的产品信息越能回答这些问题，推荐就越可能建立在真实匹配上，而不是关键词堆积上。

第三，分开看曝光、订单和净贡献。一个渠道带来订单，不代表它带来增量；一个订单扣除渠道费后有收入，也不代表它没有挤掉更低成本的直订或会员订单。收益、市场和财务必须共同看订单来源、迁移关系、取消退款、净房费和履约成本。

第四，设置退出机制。任何新渠道都应先小范围测试，明确何时扩量、何时修正、何时暂停。不能因为AI入口看起来新，就把价格、库存和品牌承诺全部交出去。

## 酒店的平台布局应该怎么调整

酒店不需要在“全押OTA”和“完全自建平台”之间二选一。更合理的做法是把平台分成三类：发现渠道、交易渠道和关系渠道。

发现渠道负责让客人知道你是谁、适合谁；交易渠道负责把价格、库存、支付和退改完成；关系渠道负责让客人下次仍然记得你，并减少每一次成交都重新支付获客成本。

豆包更接近“发现入口加交易转接层”，传统OTA更强于交易与履约基础设施，酒店官网和会员体系则承担关系沉淀。酒店的布局重点不是哪一个平台永远第一，而是同一间酒店在三类渠道上的信息、价格与承诺不能互相打架。

## 客人怎样用豆包找到真正适合自己的酒店

豆包可以帮助客人把复杂要求说清楚、快速缩小范围，但推荐结果不是最终答案。下单前至少确认三件事：订单最终在哪个平台成立；房型、早餐、日期、套餐和不可取消条款是否与自己的要求一致；退改、到店权益和特殊需求由谁确认。

尤其是高金额、跨节假日、带儿童、特殊床型、无障碍或不可取消订单，不能只依赖对话答案。客人应把AI给出的候选与酒店官方信息、传统OTA页面和必要的人工确认进行交叉核对。

## 豆包推荐收费的真正弊端在哪里

第一，推荐与商业化之间可能存在长期的信任张力。即使当前不允许付费买排序，只要平台从成交中获益，客人就有理由要求推荐逻辑更透明。

第二，信息质量可能决定谁更容易被推荐。信息完整本身是好事，但如果酒店为了迎合机器而把关键词写得比实际服务更漂亮，客人最终会在入住现场发现承诺不一致。

第三，渠道责任可能被切碎。AI负责理解，平台负责跳转，酒店负责履约，客诉发生后却可能没有一个主体完整承担责任。酒店必须保存订单来源和规则版本，才能在问题出现时追溯。

## MBCT的结论：不要争夺一个无法验证的第一名

豆包收取约12%渠道服务费，是酒店分销进入“AI推荐加交易结算”阶段的信号。它对传统OTA的真正挑战，不是马上抢走全部订单，而是改变客人开始选择酒店的入口。

酒店应建立一张AI渠道准入表，至少记录四项：是否带来新增需求，扣除全部成本后是否有净贡献，推荐页面与真实商品是否一致，酒店是否能承担推荐后的履约责任。任何一项无法验证，都不应盲目扩量。

真正可持续的酒店平台布局，不是研究怎样骗过AI，而是让客人在任何入口看到的酒店信息，都准确、可比较、可兑现。推荐可以改变，承诺不能失真。

**来源边界：**本文关于豆包费率与公开回应的事实，依据2026年8月公开媒体报道及平台回应；具体适用类目、订单归属和费率以商家后台结算单为准。本文不对排序算法、未来费率、排名或单店经营结果作保证。

**关于迈创兄弟C&T：**迈创兄弟C&T（MarvelBros C&T）是一家独立酒店咨询品牌，关注酒店经营判断、渠道治理与方法落地。
` : `
## This Is More Than a Commission

In August 2026, Doubao hotel bookings became a major hotel-distribution discussion in China. Public reports say that from August 10, relevant hotel bookings that start in Doubao and complete through Douyin Life Service use a separately stated fee of 11.4% software service plus 0.6% payment processing, approximately 12% in total. Earlier reports described these bookings as Douyin organic traffic settled at 8%.

Doubao's public response matters: it says there is no paid hotel promotion and merchants cannot pay to influence recommendation or ranking; the fee is paid only after a booking is completed. The 12% should not be described as a price for buying a recommendation position.

The strategic signal is still significant. A conversational AI entry point is moving from helping a guest find information to participating in transaction distribution. Recommendation, handoff, payment, hotel acceptance and fulfilment now form a new chain.

## What This Means for OTAs

Doubao is unlikely to replace OTAs in the short term. OTAs still provide inventory depth, comparison, reviews, cancellation rules, support and recovery. The change is that a guest may ask an AI first and use an OTA to complete the booking. OTAs will need to make their inventory, prices, rules and service guarantees more legible to AI and to the guest.

Hotels will also ask a harder question: was this booking truly incremental, or did the guest simply arrive through a more expensive route? Channel cost cannot be judged by the headline rate alone.

## What Hotels Should Do

Hotels should not buy unverified ranking promises or manipulate keywords. There is no reliable public evidence that a hotel can pay to secure a stable Doubao ranking. Instead, keep property facts, room rules, breakfast, parking, restrictions and cancellation terms accurate and synchronised; organise products around real guest questions; measure incrementality, net contribution and fulfilment exceptions; and set a clear pause rule for every new channel.

Hotels should think in three layers: discovery, transaction and relationship. Doubao is closer to a discovery and transaction handoff layer; OTAs remain strong in transaction infrastructure; direct and loyalty channels retain the relationship. The goal is not for one platform to be permanently first, but for the same promise to remain true across all three layers.

## What Guests Should Check

AI can narrow a long list quickly, but a recommendation is not a fulfilment guarantee. Before paying, confirm where the booking is completed, whether room type, breakfast, dates, package restrictions and cancellation rules match the request, and who can confirm special benefits. High-value, holiday, family or non-refundable bookings deserve cross-checking with the hotel and a conventional booking page.

## The MBCT View

The durable response to an AI booking channel is not to chase an unverifiable first position. Test four things: incremental demand, net contribution after all costs, accuracy of the recommendation promise, and the hotel's ability to fulfil it. If any one remains unknown, do not scale the channel blindly.

**Source boundary:** The fee and public-response facts reflect public August 2026 reporting and platform statements. Exact category, attribution and fee remain subject to the merchant settlement record. This article does not guarantee ranking, future fees or operating results.

**About MarvelBros C&T:** MarvelBros C&T is an independent hospitality consulting brand focused on hotel operating judgment, channel governance and implementation.
`
  return <main className="min-h-screen bg-card"><article className="max-w-4xl mx-auto px-6 py-12"><Link href={`/${lang}/knowledge`} className="text-muted-foreground">{isZh ? '返回知识库' : 'Back to Knowledge'}</Link><header className="mt-10 mb-10"><p className="text-sm text-orange-600">{isZh ? '行业分析' : 'Industry Analysis'} · 2026-08-20</p><h1 className="mt-4 text-4xl font-bold tracking-tight">{title}</h1><p className="mt-5 text-xl text-muted-foreground">{summary}</p><p className="mt-4 text-sm text-muted-foreground">迈创兄弟C&T · {isZh ? '约 10 分钟阅读' : '10 min read'}</p></header><div className="prose prose-lg max-w-none whitespace-pre-wrap">{content}</div></article></main>
}

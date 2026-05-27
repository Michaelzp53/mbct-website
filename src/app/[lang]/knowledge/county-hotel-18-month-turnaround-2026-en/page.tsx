import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: 'From Loss to Profit: A County-Town Single Hotel\'s 18-Month Turnaround Story',
    summary: 'A county-town business hotel with 60 rooms, occupancy consistently below 45%. After MBCT intervention, 18 months to achieve occupancy from 45% to 68%, RevPAR doubled, cumulative profit restored.',
    author: 'MBCT',
    date: '2026-05-27',
    readTime: '18 min',
    tag: 'Case Study',
    content: `
## 1. The Predicament: Five Years of Running on Empty

Early 2024. A county town in Central China.

Lao Zhou had been running a business hotel in this county for five years. Sixty rooms—and in the early days after opening, things had hummed along nicely. But over time, the situation had steadily deteriorated. Occupancy had been stuck below 45% for ages, and during the off-season, it would dip below 30%. The numbers in his ledger looked grimmer by the month. He couldn't remember the last time he'd actually slept through the night without worry.

"The pricing was completely out of control." Lao Zhou sighed just talking about it. During the tourism peak season, he'd wanted to raise rates—but staff had taken it upon themselves to charge returning customers extra without authorization, which led to guests screenshotting their invoices and posting scathing reviews online. When the off-season came and he wanted to offer discounts, he held back for fear of upsetting regular clients who might feel they'd been overcharged. So nothing changed. Room rates were like a poorly seasoned soup—exactly the same in peak and off-peak, the same on weekdays and weekends, and sometimes even two adjacent rooms would be quoted fifty yuan apart.

The staffing situation was equally thorny. Labor costs at 38% of revenue was already considered on the high side for this county town, yet his team still couldn't hold onto people. Within six months, the front desk had cycled through three different supervisors. Service standards existed in name only. Guests complained about twenty-minute waits for check-in; when Lao Zhou reviewed the security footage, he found the front desk staff chatting with each other instead. "It's not that I didn't try to manage them—it's that even when I did, they still left." He said it with resignation.

What kept him up at night even more was the distribution channel structure. OTA bookings accounted for more than 80% of his business. Commission rates kept climbing, squeezing his margins thinner and thinner. Guests were "one-offs"—they checked in, they checked out, and that was it. No loyalty, no repeat visits. The hotel ranked poorly on platforms, yet it had no choice but to depend on them—a vicious cycle with no obvious exit.

In March 2024, Lao Zhou attended a regional hotel industry seminar. It was there, for the first time, that he heard the name MBCT. After the session ended, he didn't rush to leave. Instead, he approached one of MBCT's consultants and talked for twenty minutes.

"You're right—I have a small operation, limited capital. I can't afford a dramatic overhaul," Lao Zhou told him. "But I'm tired of just limping along like this. I need someone to tell me exactly what's wrong with my hotel."

---

## 2. Diagnosis: 72 Hours of Deep Investigation to Find the Real Problems

The MBCT team took on the project. On their first day on-site, the consultants didn't rush to present a solution. Instead, they spent a full 72 hours conducting a comprehensive "health check" of the hotel.

Over those three days, team members split up and worked in parallel: observing check-in procedures from the front desk, pulling historical data from various OTA platforms, conducting one-on-one interviews with frontline staff, reviewing two years of financial statements and booking records, and even staying overnight as a "mystery guest" to experience the full guest journey from reservation to checkout.

Three days later, a thick **Single-Property Business Health Report** was laid out on the table in front of Lao Zhou. No platitudes, no boilerplate—the report went straight to three core problems.

**Problem One: Revenue management was virtually non-existent.**

The team pulled the hotel's booking data from the past two years and uncovered something striking: the hotel had actually experienced several periods of high occupancy—typically when major local events were happening in the county. But rates during those periods barely budged, holding steady at normal pricing. This meant the hotel had completely missed its windows to maximize revenue, while in the off-season it had no effective promotion mechanism and simply waited passively for guests. RevPAR (Revenue Per Available Room) sat at just 61% of the local market average. The root cause wasn't a lack of demand—it was that the hotel had zero capability to "sell the right price at the right time."

**Problem Two: Team management was in disarray.**

Behind the 38% labor cost ratio was a poorly structured workforce and a complete absence of training systems. The front desk, housekeeping, and engineering departments had no clear coordination standards, and the guest complaint handling process was vague and inconsistent. The employee handbook had been written at opening and hadn't been updated in three years—it was completely out of step with actual operations. The real reason for high turnover wasn't low wages—it was "no way forward." No promotion paths, no skills training, and nobody even telling staff what the standards were.

**Problem Three: Channel structure was dangerously imbalanced.**

With OTAs accounting for over 80% of bookings, the hotel had almost no pricing power. The moment a platform adjusted its algorithm or commission structure, the hotel's lifeblood was in someone else's hands. More critically, the lack of a direct sales channel meant no direct line to guests—no way to build a membership program, no repeat-booking campaigns, no ownership of the guest relationship. The guest base was forever "rented," never truly owned.

On the last page of the report, there was a handwritten note from the lead consultant: "This hotel was never short on customers. What it lacked was the ability to keep them."

---

## 3. The Plan: 18 Months, Three Phases, No Unnecessary Disruption

Based on the diagnostic findings, MBCT tailored an 18-month rectification roadmap for the hotel, structured across three distinct phases.

**Months 1–3: The Bleeding-Stopping Phase**

Stopping the bleeding came first. MBCT consultants helped the hotel systematically develop and implement new dynamic pricing rules for rooms. These rules, built on occupancy data, established four pricing tiers—Early Bird, Standard, High-Demand, and Sold-Out—corresponding to different booking lead times and occupancy ranges. Front desk SOPs (Standard Operating Procedures) were updated simultaneously, covering the full guest journey from check-in and room introductions to complaint handling and check-out farewells, followed by on-site training to ensure every staff member could execute them correctly.

"For the first three months, we didn't make any major marketing moves—we focused on building solid fundamentals," an MBCT consultant recalled. "We made sure staff understood what the standards were, and we made sure the pricing system knew how to move."

**Months 4–9: The Stabilization Phase**

In the second phase, the hotel began building its own membership program. MBCT helped set up a simple points-based membership system, opening up direct booking channels through phone and WeChat, and launching a targeted outreach campaign inviting past guests to join. Members enjoyed perks like late check-out, complimentary room upgrades, and points redemption—benefits that gradually moved the needle on repeat bookings.

Labor costs were also optimized during this phase. Through role consolidation, skills training, and more precise scheduling, the hotel gradually brought its labor cost ratio down from 38% to 28%. Two employees did leave due to role adjustments, but the overwhelming majority of core staff stayed on. "The people who stayed did so because they could see the change—they felt like there was finally something worth working toward here." the consultant noted.

**Months 10–18: The Growth Phase**

The third phase focused on diversifying the guest base. MBCT helped the hotel negotiate weekday corporate rate agreements with two nearby scenic attractions, attracting self-drive tourists during mid-week stays. Simultaneously, the hotel signed travel agreements with several large local enterprises, launching monthly package services with preferential rates for business travelers with frequent trips. These two initiatives directly boosted Monday-through-Thursday occupancy, addressing the traditional weakness cycle that plagues business hotels.

Alongside this, MBCT consultants conducted monthly data reviews, tracking RevPAR trends, membership conversion rates, and channel contribution percentages—continuously refining pricing strategies and marketing investment direction.

---

## 4. The Results: From Loss to Profit—Not Luck, but Systems

After 18 months, the ledgers of this county-town hotel finally turned a corner.

**Core Performance Data Comparison:**

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Occupancy Rate | 45% | 68% | +23 percentage points |
| ADR (Average Daily Rate) | ¥188 | ¥246 | +31% |
| RevPAR | ¥85 | ¥167 | +96% |
| Labor Cost Ratio | 38% | 27% | -11 percentage points |
| OTA Booking Share | 80% | 52% | -28 percentage points |

By month 16, the hotel achieved its first single-month profit.

By month 18, cumulative P&L officially turned positive.

OTA dependency dropped from 80% to 52%. In tandem, the direct sales channel contributed 28% of bookings, with a member repeat-booking rate of 22%. For a county-town business hotel, that number represented a qualitative leap—it meant the hotel had finally begun building its own kind of "fixed asset": not the rooms, but the guests who kept coming back.

"The hardest part was never making the numbers look better. It was making this hotel into a system that could actually run on its own." The MBCT consultant wrote in the project debrief. "Lao Zhou can finally sleep through the night now, because he knows—even if he's not at the hotel, this system keeps turning."

---

## 5. MBCT's Perspective: For County-Town Single Hotels, the Answer Isn't in the Renovation

This story is a microcosm of countless county-town single hotels across the country.

They're not short on guests—China's county-level economy is full of momentum, and demand for business travel, family visits, and weekend getaways continues to grow. What they lack is an operational system that can capture that demand, retain guests, and convert them into repeat customers.

MBCT has always maintained: the core of a turnaround for county-town single hotels doesn't lie in cosmetic renovations. It lies in **rebuilding the management system.** Clear pricing logic, executable service standards, and a membership system that builds guest loyalty—these things may not sound glamorous, but they are precisely what allows a small hotel to truly stand on solid ground.

Diagnosis before strategy. Data before intuition.

This is the starting point of MBCT's methodology—and the first action taken on every project. We don't buy into the fairy tale of "one solution fits all stores." Every hotel faces a unique set of challenges. Only by genuinely immersing ourselves in day-to-day operations and understanding the data can we develop truly effective solutions.

---

**Author: MBCT (MarvelBros C&T)**

Specialized in digital empowerment — full-process solutions and consulting services for the hotel industry, committed to driving revenue growth through the dual-track improvement of efficiency and guest experience.

Website: www.marvelbros.com | Email: contactme@marvelbros.com / info@marvelbros.com
`,
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            href={`/${lang}/cases`}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{isZh ? '返回案例' : 'Back to Cases'}</span>
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Article */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          {/* Hero */}
          <div className="p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                {article.tag}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {article.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {article.content.trim().split('\n').map((para, i) => {
                if (para.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">{para.replace('## ', '')}</h2>
                }
                if (para.startsWith('**') && para.endsWith('**')) {
                  return <p key={i} className="font-semibold text-gray-900 dark:text-white">{para.replace(/\*\*/g, '')}</p>
                }
                if (para.startsWith('|')) {
                  return <p key={i} className="text-gray-700 dark:text-gray-300 font-mono text-sm overflow-x-auto">{para}</p>
                }
                if (para.startsWith('---')) {
                  return <hr key={i} className="my-8 border-gray-200 dark:border-gray-700" />
                }
                if (para.trim()) {
                  return <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{para}</p>
                }
                return null
              })}
            </div>

          </div>
        </article>

        {/* CTA */}
        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            {isZh ? '想了解您的酒店如何提升业绩？' : 'Want to improve your hotel performance?'}
          </h3>
          <p className="text-blue-700 dark:text-blue-300 mb-4">
            {isZh 
              ? 'MBCT提供免费经营诊断，分析您酒店的核心问题与提升空间。' 
              : 'MBCT offers free operational diagnosis to analyze your hotel core issues and improvement opportunities.'}
          </p>
          <Link 
            href={`/${lang}/contact`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            {isZh ? '联系我们' : 'Contact Us'}
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </main>
    </div>
  )
}

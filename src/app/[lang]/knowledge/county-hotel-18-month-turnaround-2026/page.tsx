import Link from 'next/link'
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark } from 'lucide-react'

export default async function ArticlePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const isZh = lang === 'zh'

  const article = {
    title: '从亏损到盈利：一家县城单体酒店的18个月翻牌实录',
    summary: '华中地区某县城商务酒店，60间客房，入住率长期低于45%。MBCT介入后，18个月实现入住率从45%到68%、RevPAR翻倍、累计回正。',
    author: 'MBCT',
    date: '2026-05-27',
    readTime: '18分钟',
    tag: '案例研究',
    content: `
## 一、困境：五年了，为什么越干越难？

2024年初，华中地区某县城。

老周在这座县城经营一家商务酒店已经五年了。60间客房，开业之初也曾热闹过一阵，可如今情况每况愈下。入住率长期在45%以下徘徊，到了淡季更是跌到不足三成。账本上的数字越来越难看，而他已经记不清上一次真正放心睡个好觉是什么时候了。

"定价乱了套。"老周提起这个就叹气。旅游旺季想提价，员工擅自加价接待回头客，结果被客人截图发到网上，差评铺天盖地。淡季想降价促销，又怕老客户觉得自己"挨宰"，索性不动。客房价格像一锅没调好的汤——淡旺季一个样，周中周末一个样，甚至相邻两间房的报价都能差出五十块。

人手问题同样棘手。酒店38%的人力成本占比，在这座县城里已经算不低，可员工还是留不住。半年内前厅部换了三任主管，服务标准形同虚设。有客人抱怨前台办理入住要等二十分钟，老周去查录像，发现前台员工正在跟同事聊天。"不是不想管，是管了也留不住人。"他无奈地说。

更让他焦虑的是渠道结构。OTA订单占比超过80%，佣金费率一涨再涨，利润空间被压缩得所剩无几。客人都是"一次性"的，住完就走，没有沉淀，没有复购。酒店在平台上排名靠后，又不得不依赖平台——一个越陷越深的死循环。

2024年3月，老周参加了一场区域酒店行业的交流会。会上，他第一次听到了MBCT这个名字。散场后，他没有急着离开，而是找到MBCT的顾问聊了二十分钟。

"你说得对，我规模小，资金有限，大动干戈的改造方案我承受不起。但我也不想再这么耗下去了。"老周说，"我需要有人告诉我，我的店到底哪里出了问题。"

---

## 二、诊断：72小时深度调研，找到了真正的问题

MBCT团队接受了这个项目。进场第一天，顾问没有急着给方案，而是花了整整72小时对酒店进行全方位"体检"。

这三天里，团队成员分头行动：蹲守前台观察入住流程，在各OTA平台抓取历史数据，与一线员工逐一访谈，翻阅过去两年的财务报表和订单记录，甚至以"暗访客人"的身份住了一晚，体验从预订到退房的完整触点。

三天后，一份厚厚的《单店经营健康报告》摆在了老周面前。报告没有套话，直指三个核心问题。

**第一，收益管理几乎为零。**

团队调取了酒店近两年的订单数据，发现一个令人意外的事实：酒店曾有过几次高入住率时段——通常是在县城有大型活动期间。但这些时段的价格几乎没有波动，与平时持平。这意味着酒店白白错过了提高收益的窗口期，而在淡季又因为缺乏有效的促销机制只能被动等客。RevPAR（每间可用客房收入）仅为同城平均水平的61%，问题的根源不在于客源不足，而在于酒店完全不具备"在对的时段卖对的价格"的能力。

**第二，团队管理处于失序状态。**

38%的人力成本背后，是人员结构的不合理与培训体系的缺失。前厅、客房、工程三个部门之间缺乏协作标准，投诉处理流程模糊不清。员工手册是开业时编的，三年没更新过，早已与实际操作脱节。高离职率的根本原因不是工资低，而是"干着没盼头"——没有晋升通道，没有技能培训，甚至没有人告诉他们标准是什么。

**第三，渠道结构严重失衡。**

OTA占比超过80%意味着酒店几乎没有定价权。一旦平台调整算法或佣金政策，酒店的命脉就握在别人手里。更关键的是，缺乏直销渠道意味着酒店与客人之间没有直接联系，无法建立会员体系，无法做复购运营，客源永远是"租来的"。

报告最后一页，有一行顾问的手写批注："这家店缺的从来不是客户，是把客户留下来的能力。"

---

## 三、方案：18个月，三步走，不折腾

基于诊断结果，MBCT为这家酒店量身定制了18个月的整改路线图，划分为三个阶段。

**第1-3个月：止血期**

止血是第一步。MBCT顾问首先帮助酒店梳理并重新制定了客房动态定价规则。这套规则以入住率数据为基础，设定了四个价格档位——早鸟价、常规价、紧促价、满房价，分别对应不同的预订提前量和入住率区间。前台SOP（标准操作流程）同步更新，涵盖从入住登记、客房介绍、投诉处理到离店送别的全套环节，并安排驻店培训，确保每位员工都能准确执行。

"前三个月我们没做大的营销动作，就是把内功练好。"MBCT顾问回忆说，"让员工知道标准是什么，让系统知道价格怎么动。"

**第4-9个月：稳定期**

进入第二阶段，酒店开始建立自己的会员体系。MBCT帮助酒店搭建了一套简易的会员积分系统，打通了电话预订和微信预订两个直销入口，并对曾经入住过的客人进行了一轮定向邀请。会员享有延迟退房、免费升房、积分抵扣等权益，复购率逐步有了起色。

人力成本也在这个阶段得到了优化。通过岗位合并、技能培训和排班精细化管理，酒店将人力成本占比从38%逐步压缩至28%。过程中有两名员工因岗位调整离职，但绝大多数核心员工留了下来。"留下来的原因是他们看到了改变，觉得这家店有奔头了。"顾问说。

**第10-18个月：增长期**

第三个阶段的核心任务是拓展客源结构。MBCT帮助酒店接入了周边两个景区的工作日协议价格合作，吸引自驾游客在工作日入住；同时与县城内几家规模较大的本地企业签订了商旅协议，推出月租套餐服务，针对出差频次高的商务客提供包月优惠。这两项举措直接带动了周一至周四的入住率，填补了传统商务酒店的周期短板。

与此同时，MBCT顾问每月进行一次数据复盘，重点追踪RevPAR变化趋势、会员转化率和各渠道贡献占比，持续优化定价策略和营销投入方向。

---

## 四、结果：从亏损到盈利，不是运气是系统

18个月后，这家县城酒店的账本终于翻篇了。

核心经营数据对比：

| 指标 | 改造前 | 改造后 | 变化 |
|------|--------|--------|------|
| 入住率 | 45% | 68% | +23个百分点 |
| ADR（平均房价） | 188元 | 246元 | +31% |
| RevPAR | 85元 | 167元 | +96% |
| 人力成本占比 | 38% | 27% | -11个百分点 |
| OTA订单占比 | 80% | 52% | -28个百分点 |

第16个月，酒店首次实现单月盈利。

第18个月，累计损益正式转正。

OTA依赖度从80%降至52%，与此同时，直销渠道贡献了28%的订单，其中会员复购率达到了22%。这个数字对于一家县城商务酒店而言，是一个质的飞跃——它意味着酒店终于开始拥有自己的"固定资产"：不是客房，而是愿意反复回来的客人。

"最难的不是数据变好看，是让这个店真正变成一个能自己转起来的系统。"MBCT顾问在项目复盘时写道，"老周现在可以安心睡个整觉了，因为他知道即使他不在店里，这套体系也能正常运转。"

---

## 五、MBCT视角：下沉市场单体酒店的翻牌，答案不在装修里

这个案例，是无数县城单体酒店的缩影。

它们不是没有客人——中国县域经济的活力正在释放，商务出行、探亲访友、周末短途旅游的需求一直在增长。它们缺的是一套能把这些需求接住、留下来、转化掉的经营系统。

MBCT始终认为：下沉市场单体酒店的翻牌，核心不是装修翻新，而是**管理体系的重构**。一套清晰的定价逻辑、一套可执行的服务标准、一个能沉淀客人的会员体系——这些看起来不"性感"的东西，恰恰是让一家小酒店真正站稳脚跟的根基。

诊断先于方案，数据先于直觉。

这是MBCT方法论的起点，也是每个项目启动时的第一动作。我们不相信"一套方案适用所有门店"的童话，每一家酒店面临的问题都不尽相同，只有真正深入一线、摸清数据，才能给出真正有效的解法。

MBCT（MarvelBros C&T）
专注于数字化赋能——酒店行业的全流程解决方案与咨询服务机构，致力于通过"效率+体验"双轨提升，助力酒店业绩增长。
网址：www.marvelbros.com | 邮箱：info@marvelbros.com
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

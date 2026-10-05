# 网站SEO与咨询路径修复记录 — 2026-10-05

状态：修复分支已验证，未合并、未发布生产。
基于 GitHub main `660ae6cd75958ae8b48602cccd8d6cd23e1cfdc5`。

## 已修复

- 中英文联系页补齐独立 description、canonical、hreflang、Open Graph、Twitter 元数据；type/article 参数归一到无参数联系页。
- 使用语言段根布局，在初始HTML输出 zh-CN/en-US，不再依赖JS补语言属性。共享文档组件保留字体、主题与统计；非语言路由移入 `(site)`，URL保持原样。跨非语言/语言根布局导航将完整加载页面。
- Organization/WebSite 改为普通JSON-LD脚本直接输出到初始HTML；联系邮箱与可见页面 info@marvelbros.com 一致；移除未实现的查询URL SearchAction 和未经当前页面支持的国际服务范围。
- 联系表单来源参数改由服务端传入，初始HTML可读到9个控件；加入同步提交锁防止快速连点。保留已有服务端确认接收后才记录成功的逻辑，成功事件增加 mail_accepted/saved 状态区分。
- 补回当前源码缺失的联系页访问、联系入口、电话和邮箱意图事件；不发送访客电话、邮箱或问题正文。
- 利润、诊断、成本、改造和团队五个入口采用明确的现有文章精选；完整主题列表保留自动分类，并确保精选也能在对应主题结果中找到。
- 知识库增加 CollectionPage 和只包含当前可见文章的 ItemList；引用统一WebSite实体。
- 知识库及管享精道分类页增加独立描述、正确中英文及x-default链接、OG/Twitter元数据；未知栏目使用notFound，知识库仅允许已声明栏目，避免软404；管享精道保留历史分类别名归一。

## 验证

- `npm run build` 通过；首页、文章和原有静态页面保留预渲染，联系页按请求渲染。
- `node --test scripts/website-conversion.test.cjs`：12项通过。
- 修改的文档组件、布局、联系页、表单、埋点与主题工具通过定向ESLint；`git diff --check`通过。
- 原始HTML检查：首页中英文、联系页中英文、知识库、关于页、旧文章入口共7个路径返回200，语言属性正确；Organization/WebSite实体直接存在；联系页9个字段可读，canonical正确。
- 浏览器验证：390px手机和1440px桌面；表单正常渲染、必填/同意控制、成功及失败反馈、来源保留、快速重复提交、失败后内容保留、电话/邮箱各一次事件、搜索和中英文切换均通过，无页面运行错误。
- 浏览器测试拦截外部请求，模拟咨询接口成功/失败，没有发生产邮件或污染GA数据。API接收/失败分支用模拟数据库与SMTP验证。
- 可复现脚本：`scripts/website-browser-verification.cjs`。提供 BASE_URL 和已安装的 Playwright；自定义浏览器可使用 CHROMIUM_PATH，Playwright模块位置可使用 PLAYWRIGHT_MODULE。

## 未完成的外部验证与发布前提

1. 真正的SMTP通知接收、数据库落库与GA4 DebugView/报表入库，仍需在授权环境验收；模拟测试不能证明生产配置已正常。
2. 当前没有GA4/GSC/Vercel Analytics最新报表及有效咨询台账，不能宣称流量或咨询增长。
3. **纠正此前风险判断**：知识库和管享精道分类源码实际上已经存在于GitHub main：`src/app/[lang]/knowledge/category/[category]/page.tsx`、`src/app/[lang]/lean/category/[category]/page.tsx`，构建清单也包含它们。此前“仓库缺失分类页”属于核查误判，撤回该判断。2026-10-05从Vercel部署 `dpl_28BNY2SqKAkSg6fD7Q6tpoSHBvUp` 读取的103个可见源文件标识中，102个与main原始文件SHA-1完全一致，另1个是被git忽略的生成文件next-env.d.ts。没有在该样本发现部署源码差异；接口截断深层目录和长内容，所以不能宣称整站源码逐文件一致。样本见同目录deployment-source-sample-2026-10-05.json。
4. GitHub连接返回空installation列表；写入接口返回403，无法推送修复分支或创建PR。需要将mbct-website授权给当前GitHub连接，或由有仓库写入权限的Codex环境应用补丁。
5. 业务承诺、案例数字、报价与真实团队履历未改动。本修复不保证搜索排名或AI引用。

## 应用与回退

先确认目标分支及部署版本，再审阅合并本分支。在预览环境验证原有分类页、联系页及文章来源路径，完成生产接收和GA验证后发布。
回退采用 revert 本轮修复提交，不使用 reset 或覆盖其他未提交修改。保留发布前的已验证生产版本以便部署回退。


## 继续修复的验收

- 再次生产构建通过。分类页定向ESLint和diff检查通过。
- `BASE_URL=http://127.0.0.1:3005 node scripts/website-category-verification.cjs`：核查中英文两类分类页的200、语言标记、canonical、三个hreflang、description、OG URL和H1；两类未知栏目均404/noindex；旧管享成本分类及带查询参数URL归一canonical。
- 原12项咨询/分类/埋点测试继续通过。本轮仍未上线；真实邮件接收和GA入库仍未验证。


## 最后一次权限及配置复核（2026-10-05，北京时间）

- GitHub main仍为660ae6cd75958ae8b48602cccd8d6cd23e1cfdc5；当前修复未推送。GitHub授权安装列表在不限制安装类型时仍为空。
- Vercel生产版本仍为dpl_28BNY2SqKAkSg6fD7Q6tpoSHBvUp，READY。当前可用连接接口不提供本地源码部署；执行环境没有VERCEL_TOKEN、GITHUB_TOKEN或GH_TOKEN。
- 只核查生产环境变量的名称及目标环境，未读取秘密值：SMTP_USER、SMTP_PASSWORD、SMTP_HOST、SMTP_PORT、POSTGRES_URL、POSTGRES_URL_NON_POOLING均已配置production。存在变量不能证明凭据有效或邮件接收、数据库写入正常。
- /api/contact最近24小时的Vercel错误日志查询返回403 Forbidden，无法完成后台错误验收。
- 仍需仓库写入及Vercel发布授权、生产日志访问、GA4验证访问、企业邮箱接收验证。未提交真实咨询或发送验收邮件。

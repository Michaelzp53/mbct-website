# MBCT网站当前基线状态（2026-05-04）
# 此文件为OpenClaw唯一权威参考，覆盖所有历史记忆

## 项目信息
- 项目路径: /Users/michaelzhou/mbct-website/
- 框架: Next.js 16 + Tailwind CSS + TypeScript
- 部署: Vercel (https://www.marvelbros.com)
- GitHub: https://github.com/Michaelzp53/mbct-website
- 当前分支: main
- 最新Commit: a79662f (2026-05-04)

## 网站导航结构
首页 | 行业动态 | 关于我们 | 核心业务 | 案例展示 | 联系我们 | 获取方案 | 登录注册

## 行业动态4栏目（当前准确数量）
1. 学术分析: 26篇 (count: 26)
2. 行业报告: 16篇 (count: 16)
3. 案例研究: 12篇 (count: 12)
4. 博客文章: 14篇 (count: 14)

## 文章数据结构（knowledge/page.tsx）
- articles数组: 学术分析文章（id 317, -21, -11, -12, -14, -15, 0, -3, -5, -6, 1, -1, -2, 及原有id 1-10等）
- reports数组: 行业报告文章（id 318, 311, 312等）
- cases数组: 案例研究文章（id 319, 315, 312等，featured=true为热门话题）
- blogs数组: 博客文章（id 320, 313, 301-306等）
- categories数组: 4栏目定义，含count字段

## 文章详情页（[slug]/page.tsx）
- articlesData对象包含23篇文章完整内容
- 每篇文章格式: { id, title, author, date, readTime, tag, content: string[] }
- generateStaticParams使用Object.keys(articlesData)生成静态路径

## 2026-05-04新增4篇文章（已部署）
1. gen-z-dual-logic-consumption (学术分析, id:317)
2. youth-travel-trends-2026 (行业报告, id:318)
3. emotional-consumption-hotel-spirit-charging (案例研究, id:319, featured:true)
4. youth-day-hotel-consumption-insights (博客文章, id:320)

## 核心规则
1. 新文章插入各栏目数组首位（新到旧排列）
2. 同步更新categories.count
3. 中英文同步更新
4. 文章数据同时写入page.tsx列表和[slug]/page.tsx articlesData
5. Git add → commit → push → vercel --prod --yes --archive=tgz
6. 用户验证 > CLI验证

# MBCT 网站基线状态文档

**创建时间:** 2026-05-02  
**基线提交:** `8871a5e`  
**状态:** 已固定 ✅

---

## 基线信息

| 项目 | 值 |
|------|-----|
| **网站地址** | https://www.marvelbros.com |
| **Git 仓库** | https://github.com/Michaelzp53/mbct-website.git |
| **当前分支** | main |
| **基线 Commit** | `8871a5e` |
| **Commit 信息** | fix: 修复React Error #310 - 移除ThemeProvider中的条件返回导致的Hook错误 |
| **部署状态** | ✅ 生产环境正常 |
| **Vercel 项目** | michaelzp53s-projects/mbct-website |

---

## 功能特性（当前基线）

### 主题系统
- ✅ 浅色/深色双主题
- ✅ 按访客本地时间自动切换（6:00-18:00 白天模式）
- ✅ 手动切换按钮（昼/夜）
- ✅ 会话级手动覆盖记忆

### 网站栏目
- 首页 - Hero + 核心业务 + 痛点 + 增长飞轮 + 效果保障 + 团队 + CTA
- 行业动态 - 学术分析/行业报告/案例研究/博客文章
- 关于我们
- 核心业务（9大支柱）
- 案例展示
- 联系我们

### 核心业务（9项）
1. 酒店投资可行性研究
2. 酒店品牌创建与定位
3. 酒店运营诊断与增长
4. AI管理系统（SaaS）
5. 私域流量运营
6. 落地陪跑与效果保障
7. 轻量管理顾问
8. 融资顾问
9. 行业研究内容

---

## 文章统计（基线状态）

| 栏目 | 数量 |
|------|------|
| 学术分析 | 24篇 |
| 行业报告 | 14篇 |
| 案例研究 | 9篇 |
| 博客文章 | 13篇 |

---

## 技术栈

- **框架:** Next.js 16.2.1 + React 19
- **样式:** Tailwind CSS v4
- **语言:** TypeScript
- **部署:** Vercel (SSG 静态生成)
- **图标:** Lucide React

---

## 配色方案（Gemini 风格）

| 用途 | 色值 |
|------|------|
| 主色（蓝）| #4285f4 |
| 成功（绿）| #34a853 |
| 警告（黄）| #fbbc04 |
| 错误（红）| #ea4335 |
| 紫色 | #764ba2 |
| 粉色 | #ec4899 |

---

## 更新规范（从此基线开始）

### 文章发布5条强制规范
1. **新到旧排列** - 新文章插入各栏目数组第一位（index 0）
2. **更新栏目数量** - 同步更新 categories.count
3. **中英文同步** - 检查 /en/knowledge 是否匹配
4. **亲自检查** - 验证显示、颜色、链接正确
5. **Git + Vercel 同步** - git add → commit → push → vercel --prod

### 禁止行为
- ❌ 使用 stash 保存工作内容
- ❌ 只本地构建不推送
- ❌ 假期未结束引用假期数据
- ❌ 同一文章出现在多个栏目

---

## 关键文件位置

```
/Users/michaelzhou/mbct-website/
├── src/app/globals.css              # 配色核心
├── src/components/Navbar.tsx        # 导航栏
├── src/components/ThemeProvider.tsx # 主题管理
├── src/components/ThemeToggle.tsx   # 主题切换
├── src/app/[lang]/knowledge/page.tsx # 文章数据
├── src/lib/dicts/zh.ts              # 中文内容
├── src/lib/dicts/en.ts              # 英文内容
└── BASELINE_STATUS.md               # 本文档
```

---

## 验证命令

```bash
# 检查状态
cd ~/mbct-website
git status
git log --oneline -3

# 本地构建测试
npm run build

# 部署
npx vercel --prod --yes
```

---

**备注:** 此文档标记 2026-05-02 修复 React Error #310 后的稳定状态。明天起所有更新从此基线开始。

**维护者:** 小马弟弟 🐎  
**服务对象:** 老马叔叔 / MBCT

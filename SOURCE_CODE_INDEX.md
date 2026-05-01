# MBCT 网站源代码位置索引

**创建日期:** 2026-05-01  
**最后更新:** 2026-05-01  
**维护者:** 小马弟弟 🐎

---

## 📂 项目根目录

```
/Users/michaelzhou/mbct-website/
```

---

## 🎨 核心设计文件 (Gemini 配色)

| 文件 | 路径 | 用途 |
|------|------|------|
| **全局样式** | `/Users/michaelzhou/mbct-website/src/app/globals.css` | ⭐ **配色核心** - 所有颜色定义 |
| **导航栏** | `/Users/michaelzhou/mbct-website/src/components/Navbar.tsx` | ⭐ **响应式核心** - 导航布局 |
| **首页** | `/Users/michaelzhou/mbct-website/src/app/[lang]/page.tsx` | 首页内容 |

---

## 📱 组件文件

| 组件 | 路径 |
|------|------|
| Navbar.tsx | `/Users/michaelzhou/mbct-website/src/components/Navbar.tsx` |
| Footer.tsx | `/Users/michaelzhou/mbct-website/src/components/Footer.tsx` |
| HeroWithStats.tsx | `/Users/michaelzhou/mbct-website/src/components/HeroWithStats.tsx` |
| BentoServices.tsx | `/Users/michaelzhou/mbct-website/src/components/BentoServices.tsx` |
| CTASection.tsx | `/Users/michaelzhou/mbct-website/src/components/CTASection.tsx` |
| ContactForm.tsx | `/Users/michaelzhou/mbct-website/src/components/ContactForm.tsx` |

---

## 📄 页面文件

| 页面 | 路径 |
|------|------|
| 首页 | `/Users/michaelzhou/mbct-website/src/app/[lang]/page.tsx` |
| 服务页 | `/Users/michaelzhou/mbct-website/src/app/[lang]/services/page.tsx` |
| 案例页 | `/Users/michaelzhou/mbct-website/src/app/[lang]/cases/page.tsx` |
| 联系页 | `/Users/michaelzhou/mbct-website/src/app/[lang]/contact/page.tsx` |
| 行业前沿 | `/Users/michaelzhou/mbct-website/src/app/[lang]/knowledge/page.tsx` |

---

## 🌐 语言字典

| 语言 | 路径 |
|------|------|
| 中文 | `/Users/michaelzhou/mbct-website/src/lib/dicts/zh.ts` |
| 英文 | `/Users/michaelzhou/mbct-website/src/lib/dicts/en.ts` |

---

## 🖼️ 资源文件

| 资源 | 路径 |
|------|------|
| 新 Logo | `/Users/michaelzhou/mbct-website/public/logo-new.png` |
| 旧 Logo | `/Users/michaelzhou/mbct-website/public/MBCT_final_gold.png` |

---

## 🔧 配置文件

| 文件 | 路径 |
|------|------|
| package.json | `/Users/michaelzhou/mbct-website/package.json` |
| next.config.ts | `/Users/michaelzhou/mbct-website/next.config.ts` |
| vercel.json | `/Users/michaelzhou/mbct-website/vercel.json` |
| tsconfig.json | `/Users/michaelzhou/mbct-website/tsconfig.json` |

---

## 📚 Git 信息

| 项目 | 信息 |
|------|------|
| 本地仓库 | `/Users/michaelzhou/mbct-website/.git` |
| 远程仓库 | `https://github.com/Michaelzp53/mbct-website.git` |
| 当前分支 | `main` |
| 最新 Commit | `c984b51` (2026-05-01) |

---

## 🚀 快速访问命令

```bash
# 打开项目
cd ~/mbct-website
open .

# VS Code 打开
code ~/mbct-website

# 打开核心文件
code ~/mbct-website/src/app/globals.css        # 配色
code ~/mbct-website/src/components/Navbar.tsx  # 导航
code ~/mbct-website/src/app/[lang]/page.tsx    # 首页

# 查看结构
tree -L 3 ~/mbct-website
```

---

## 📖 相关技能文档

| 技能名称 | 路径 |
|---------|------|
| mbct-website-gemini-style | `~/.hermes/skills/openclaw-workflow/mbct-website-gemini-style/SKILL.md` |
| mbct-website-update | `~/.hermes/skills/openclaw-workflow/mbct-website-update/SKILL.md` |

---

**备注:** 所有路径均为绝对路径，可直接在 Finder 或终端中使用。

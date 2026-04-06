# MBCT Website Specification

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- next/font for typography

## Design System
- Primary: #0f172a (deep-space)
- Accent: #f59e0b (star-gold)
- Secondary: #3b82f6 (electric-blue)
- Success: #22c55e (growth-green)
- Background Dark: #111827 (night-black)
- Background Light: #f8fafc (moon-white)
- Text Dark: #1e293b
- Text Muted: #64748b

## Pages (MVP)
1. Home (/) - Hero + Services overview + Advantages + Cases + CTA
2. About (/about) - Company intro + Team + Credentials
3. Services (/services) - 8 pillars detailed
4. Cases (/cases) - Case studies grid
5. Contact (/contact) - Form + Contact info

## i18n
- URL: /zh/* and /en/*
- Default redirect: / → /zh/
- Language switcher in navbar
- Dictionaries: dicts/zh.json, dicts/en.json

## Components
- Navbar (sticky, glassmorphism)
- Hero (full-screen, gradient bg)
- ServiceCard (icon + title + desc)
- CaseCard (image + client + results)
- AdvantageStats (numbers + labels)
- CTASection (gradient bg, buttons)
- Footer (links + contact)
- LanguageSwitcher

## Responsive
- Desktop: 1400px max-width, 80px margins
- Tablet: 40px margins
- Mobile: 16px margins, hamburger menu

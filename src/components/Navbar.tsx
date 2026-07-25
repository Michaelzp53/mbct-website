"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Dict } from "@/lib/dicts";

interface NavbarProps {
  lang: string;
  dict: Dict;
}

export function Navbar({ lang, dict }: NavbarProps) {
  const { nav } = dict;
  const isZh = lang === "zh";

  const navLinks = [
    { href: `/${lang}/`, label: nav.home },
    { href: `/${lang}/knowledge`, label: isZh ? "酒店知识" : "Knowledge" },
    { href: `/${lang}/lean`, label: isZh ? "管享精道" : "Lean Insights" },
    { href: `/${lang}/services`, label: isZh ? "解决方案" : "Solutions" },
    {
      href: `/${lang}/services/ai-hotel-website`,
      label: isZh ? "AI搜索获客" : "AI Search",
    },
    { href: `/${lang}/cases`, label: isZh ? "案例成果" : "Results" },
    { href: `/${lang}/about`, label: isZh ? "专业力量" : "Capabilities" },
  ];

  const primaryCta = {
    href: `/${lang}/contact?type=diagnosis`,
    label: isZh ? "发起经营诊断" : "Start a Diagnosis",
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
          <div className="flex h-[72px] items-center justify-between">
            <Link
              href={`/${lang}/`}
              className="flex items-center gap-2 lg:gap-3 flex-shrink-0"
            >
              <Image
                src="/logo-new.png"
                alt={isZh ? "迈创兄弟C&T 标志" : "MarvelBros C&T Logo"}
                width={48}
                height={48}
                className="object-contain flex-shrink-0"
              />
              <div className="flex flex-col min-w-0">
                <span className="text-[13px] font-semibold leading-none text-slate-950 dark:text-white lg:text-[14px]">
                  MarvelBros C&amp;T
                </span>
                <span className="mt-1 max-w-[160px] truncate text-[10px] font-medium text-[#0b4a6f] dark:text-sky-300 sm:text-xs lg:max-w-none">
                  {isZh
                    ? "迈创兄弟C&T · 酒店经营知识与实战"
                    : "Hospitality Knowledge & Action"}
                </span>
              </div>
            </Link>

            <nav className="hidden flex-shrink-0 items-center gap-1 xl:flex 2xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex-shrink-0 whitespace-nowrap px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#0b4a6f] dark:text-slate-300 dark:hover:text-sky-300",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-3 xl:gap-4 flex-shrink-0">
              <Link href={primaryCta.href}>
                <Button className="flex items-center gap-1.5 rounded-none bg-[#0b4a6f] px-4 py-2 text-xs font-semibold text-white shadow-none hover:bg-[#073a58] sm:text-sm">
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <ThemeToggle lang={lang} />

              <Link
                href={`/${lang === "zh" ? "en" : "zh"}/`}
                className="flex flex-shrink-0 items-center gap-1.5 px-2 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#0b4a6f] dark:text-slate-300 dark:hover:text-sky-300"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === "zh" ? "EN" : "中文"}</span>
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-slate-600 transition-colors hover:text-[#0b4a6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4a6f] focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-sky-300 xl:hidden"
              aria-label={isZh ? "打开导航菜单" : "Open navigation menu"}
              aria-haspopup="dialog"
              aria-controls="mobile-navigation"
              popoverTarget="mobile-navigation"
              popoverTargetAction="show"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-navigation"
        popover="auto"
        role="dialog"
        aria-label={isZh ? "网站导航" : "Site navigation"}
        className="fixed inset-0 z-[100] m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-transparent p-0 xl:hidden"
      >
        <button
          type="button"
          className="absolute inset-0 bg-slate-950/25 backdrop-blur-[2px]"
          aria-label={isZh ? "点击菜单外部关闭" : "Close from outside menu"}
          popoverTarget="mobile-navigation"
          popoverTargetAction="hide"
        />

        <aside className="absolute inset-y-0 right-0 flex w-[min(86vw,340px)] flex-col overflow-y-auto border-l border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-new.png"
                alt={isZh ? "迈创兄弟C&T 标志" : "MarvelBros C&T Logo"}
                width={44}
                height={44}
                className="object-contain"
              />
              <span className="text-[13px] font-semibold text-slate-950 dark:text-white">
                MarvelBros C&amp;T
              </span>
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-slate-600 transition-colors hover:text-[#0b4a6f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4a6f] dark:text-slate-300 dark:hover:text-sky-300"
              aria-label={isZh ? "关闭导航菜单" : "Close navigation menu"}
              popoverTarget="mobile-navigation"
              popoverTargetAction="hide"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            className="flex flex-col px-5 py-3"
            aria-label={isZh ? "手机导航" : "Mobile navigation"}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-slate-200 px-1 py-3 text-base font-medium text-slate-700 transition-colors hover:text-[#0b4a6f] dark:border-slate-800 dark:text-slate-200 dark:hover:text-sky-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 border-t border-slate-200 p-5 dark:border-slate-800">
            <Link href={primaryCta.href}>
              <Button className="h-11 w-full rounded-none bg-[#0b4a6f] text-white hover:bg-[#073a58]">
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <div className="flex items-center justify-between">
              <ThemeToggle lang={lang} />
              <Link
                href={`/${lang === "zh" ? "en" : "zh"}/`}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#0b4a6f] dark:text-slate-300 dark:hover:text-sky-300"
              >
                <Globe className="h-4 w-4" />
                {lang === "zh" ? "EN" : "中文"}
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

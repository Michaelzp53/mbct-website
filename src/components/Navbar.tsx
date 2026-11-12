"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import type { Dict } from "@/lib/dicts";

interface NavbarProps {
  lang: string;
  dict: Dict;
}

export function Navbar({ lang, dict }: NavbarProps) {
  const { nav } = dict;
  const isZh = lang === "zh";
  const pathname = usePathname();
  const otherLang = isZh ? "en" : "zh";
  const languageHref = pathname.replace(/^\/(zh|en)(?=\/|$)/, `/${otherLang}`);

  useEffect(() => {
    const menu = document.getElementById("mobile-navigation");
    if (menu?.matches(":popover-open")) menu.hidePopover();
  }, [pathname]);

  const navLinks = [
    { href: `/${lang}/`, label: nav.home },
    { href: `/${lang}/knowledge`, label: isZh ? "酒店投、筹、管、退、改决议" : "Resolutions" },
    { href: `/${lang}/lean`, label: isZh ? "投管知识" : "Practice Library" },
    { href: `/${lang}/services`, label: isZh ? "解决方案" : "Solutions" },
    { href: `/${lang}/about`, label: isZh ? "关于我们" : "About Us" },
  ];

  const primaryCta = {
    href: `/${lang}/contact?type=diagnosis`,
    label: isZh ? "交流酒店项目" : "Discuss a Hotel Project",
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-[72px] items-center justify-between py-2 min-[1480px]:h-[108px]">
            <Link
              href={`/${lang}/`}
              className="flex min-w-0 items-center gap-3 flex-shrink-0"
            >
              <Image
                src="/logo-new.png"
                alt={isZh ? "迈创兄弟C&T 标志" : "MarvelBros C&T Logo"}
                width={48}
                height={48}
                className="object-contain flex-shrink-0"
              />
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-none text-slate-950 dark:text-white">MarvelBros C&amp;T</span>
                <span className="mt-1 block text-xs font-medium leading-4 text-brand-blue dark:text-sky-300">
                  {isZh ? "迈创兄弟C&T · 酒店全生命周期价值提升咨询服务商" : "Hotel Lifecycle Value Enhancement Consultancy"}
                </span>
              </span>
            </Link>

            <nav className="hidden flex-shrink-0 items-center gap-1 min-[1480px]:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex-shrink-0 whitespace-nowrap px-2 py-2 text-[28px] font-bold leading-none text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-300 dark:hover:text-sky-300",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden min-[1480px]:flex items-center gap-3 flex-shrink-0">
              <Link href={primaryCta.href} className="inline-flex items-center gap-1.5 bg-primary px-4 py-2 text-[28px] font-bold leading-none text-primary-foreground hover:bg-primary/90">
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="h-6 w-6" />
              </Link>

              <a
                href={languageHref}
                onClick={event => { event.currentTarget.href = `${languageHref}${window.location.search}${window.location.hash}` }}
                hrefLang={otherLang}
                aria-label={isZh ? "Read this page in English" : "以中文阅读本页"}
                className="flex flex-shrink-0 items-center gap-1.5 px-2 py-2 text-[28px] font-bold leading-none text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-300 dark:hover:text-sky-300"
              >
                <Globe className="h-6 w-6" />
                <span>{lang === "zh" ? "EN" : "中文"}</span>
              </a>
              <ThemeToggle lang={lang} prominent />
            </div>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-slate-600 transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4a6f] focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-sky-300 min-[1480px]:hidden"
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
        className="fixed inset-0 z-[100] m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-transparent p-0 min-[1480px]:hidden"
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
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src="/logo-new.png"
                alt={isZh ? "迈创兄弟C&T 标志" : "MarvelBros C&T Logo"}
                width={44}
                height={44}
                className="object-contain flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-none text-slate-950 dark:text-white">MarvelBros C&amp;T</p>
                <p className="mt-1 text-xs font-medium leading-4 text-brand-blue dark:text-sky-300">
                  {isZh ? "迈创兄弟C&T · 酒店全生命周期价值提升咨询服务商" : "Hotel Lifecycle Value Enhancement Consultancy"}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-slate-600 transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4a6f] dark:text-slate-300 dark:hover:text-sky-300"
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
                className="border-b border-slate-200 px-1 py-4 text-[32px] font-bold leading-none text-slate-700 transition-colors hover:text-brand-blue dark:border-slate-800 dark:text-slate-200 dark:hover:text-sky-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 border-t border-slate-200 p-5 dark:border-slate-800">
            <Link href={primaryCta.href} className="inline-flex min-h-14 w-full items-center justify-center bg-primary px-4 py-3 text-[32px] font-bold leading-none text-primary-foreground hover:bg-primary/90">
                {primaryCta.label}
                <ArrowRight className="ml-2 h-7 w-7" />
            </Link>

            <div className="flex items-center justify-between gap-3">
              <ThemeToggle lang={lang} prominent />
              <a
                href={languageHref}
                onClick={event => { event.currentTarget.href = `${languageHref}${window.location.search}${window.location.hash}` }}
                hrefLang={otherLang}
                aria-label={isZh ? "Read this page in English" : "以中文阅读本页"}
                className="flex items-center gap-2 px-3 py-2 text-[28px] font-bold leading-none text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-300 dark:hover:text-sky-300"
              >
                <Globe className="h-6 w-6" />
                {lang === "zh" ? "EN" : "中文"}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Menu, X, Globe, ArrowRight, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { lifecycleNavLinks } from "@/lib/lifecycle-stages";
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
    const active = document.activeElement;
    if (active instanceof HTMLElement && active.closest("header")) active.blur();
  }, [pathname]);

  const knowledgeLinks = [
    { href: `/${lang}/knowledge`, label: isZh ? "决策文库" : "Decision Library" },
    { href: `/${lang}/lean`, label: isZh ? "管享精道" : "Operational Excellence" },
    { href: `/${lang}/topics`, label: isZh ? "专题" : "Topics" },
  ];
  const stageLinks = lifecycleNavLinks(lang);
  const leafLinks = [
    { href: `/${lang}/services`, label: isZh ? "服务清单" : "Services" },
    { href: `/${lang}/cases`, label: isZh ? "实践案例" : "Case Studies" },
    { href: `/${lang}/about`, label: isZh ? "关于我们" : "About Us" },
  ];
  const primaryCta = {
    href: `/${lang}/contact?type=diagnosis`,
    label: isZh ? "预约项目诊断" : "Book a Diagnostic",
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[#e4ded4] bg-[#f8f6f2]/92 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-[#0b0f17]/92">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-[76px] items-center justify-between gap-4 py-2">
            <Link
              href={`/${lang}/`}
              className="flex min-w-0 flex-shrink-0 items-center gap-3.5"
            >
              <Image
                src="/logo-new.png"
                alt={isZh ? "迈创兄弟C&T 标志" : "MarvelBros C&T Logo"}
                width={46}
                height={46}
                className="h-[46px] w-[46px] flex-shrink-0 object-contain"
              />
              <span className="min-w-0">
                <span className="block font-serif text-[17px] font-semibold tracking-wide text-[#0f172a] dark:text-[#f8f6f2]">
                  MarvelBros C&amp;T
                </span>
                <span className="mt-0.5 block text-[11px] font-medium tracking-wider text-[#8c6b39] dark:text-[#c9a66b]">
                  {isZh ? "投 · 建 · 筹 · 管 · 改 · 退 全生命周期咨询" : "Invest · Build · Pre-Open · Operate · Renovate · Exit"}
                </span>
              </span>
            </Link>

            <nav className="hidden flex-shrink-0 items-stretch gap-1 self-stretch min-[1280px]:flex 2xl:gap-2">
              <Link
                href={`/${lang}/`}
                className={cn(
                  "flex flex-shrink-0 items-center whitespace-nowrap px-2.5 text-[14.5px] font-medium text-slate-700 transition-colors hover:text-[#b08d57] dark:text-slate-300 dark:hover:text-[#c9a66b]"
                )}
              >
                {nav.home}
              </Link>
              <div className="group relative flex items-center">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-controls="nav-knowledge"
                  className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[14.5px] font-medium text-slate-700 transition-colors hover:text-[#b08d57] dark:text-slate-300 dark:hover:text-[#c9a66b]"
                >
                  <span>{isZh ? "知识库" : "Insights"}</span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                </button>
                <div id="nav-knowledge" className="invisible absolute left-0 top-full z-30 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-52 overflow-hidden rounded-xl border border-[#e4ded4] bg-white py-1.5 shadow-lg dark:border-white/10 dark:bg-[#131924]">
                    {knowledgeLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex min-h-10 items-center px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-[#f8f6f2] hover:text-[#b08d57] dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-[#c9a66b]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="group relative flex items-center">
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-controls="nav-lifecycle"
                  className="inline-flex cursor-pointer items-center gap-1 whitespace-nowrap px-2.5 py-2 text-[14.5px] font-medium text-slate-700 transition-colors hover:text-[#b08d57] dark:text-slate-300 dark:hover:text-[#c9a66b]"
                >
                  <span>{isZh ? "全周期方案" : "Lifecycle Advisory"}</span>
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
                </button>
                <div id="nav-lifecycle" className="invisible absolute left-0 top-full z-30 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="min-w-64 overflow-hidden rounded-xl border border-[#e4ded4] bg-white py-1.5 shadow-lg dark:border-white/10 dark:bg-[#131924]">
                    {stageLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex min-h-10 items-center px-4 text-sm font-medium text-slate-700 transition-colors hover:bg-[#f8f6f2] hover:text-[#b08d57] dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-[#c9a66b]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {leafLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex flex-shrink-0 items-center whitespace-nowrap px-2.5 text-[14.5px] font-medium text-slate-700 transition-colors hover:text-[#b08d57] dark:text-slate-300 dark:hover:text-[#c9a66b]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden flex-shrink-0 items-center gap-3 min-[1280px]:flex">
              <a
                href={languageHref}
                onClick={(event) => {
                  event.currentTarget.href = `${languageHref}${window.location.search}${window.location.hash}`;
                }}
                hrefLang={otherLang}
                aria-label={isZh ? "Read this page in English" : "以中文阅读本页"}
                className="inline-flex h-9 flex-shrink-0 items-center gap-1.5 rounded-full border border-[#dfd8cc] bg-white/80 px-3 text-xs font-medium text-slate-700 transition-colors hover:border-[#b08d57] hover:text-[#b08d57] dark:border-white/15 dark:bg-[#131924] dark:text-slate-200 dark:hover:border-[#c9a66b] dark:hover:text-[#c9a66b]"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>{lang === "zh" ? "EN" : "中文"}</span>
              </a>
              <ThemeToggle lang={lang} />
              <Link
                href={primaryCta.href}
                className="inline-flex h-10 items-center gap-1.5 rounded-full bg-[#0f172a] px-5 text-sm font-medium text-[#f8f6f2] shadow-xs transition-all hover:bg-[#b08d57] hover:text-white dark:bg-[#c9a66b] dark:text-[#0b0f17] dark:hover:bg-[#dfbf86]"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-[#e4ded4] text-slate-700 transition-colors hover:border-[#b08d57] hover:text-[#b08d57] dark:border-white/15 dark:text-slate-200 min-[1280px]:hidden"
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
        className="fixed inset-0 z-[100] m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-transparent p-0 min-[1280px]:hidden"
      >
        <button
          type="button"
          className="absolute inset-0 bg-[#0b0f17]/40 backdrop-blur-[2px]"
          aria-label={isZh ? "点击菜单外部关闭" : "Close from outside menu"}
          popoverTarget="mobile-navigation"
          popoverTargetAction="hide"
        />

        <aside className="absolute inset-y-0 right-0 flex w-[min(86vw,340px)] flex-col overflow-y-auto border-l border-[#e4ded4] bg-[#f8f6f2] shadow-2xl dark:border-white/10 dark:bg-[#0b0f17]">
          <div className="flex items-center justify-between border-b border-[#e4ded4] p-5 dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-new.png"
                alt={isZh ? "迈创兄弟C&T 标志" : "MarvelBros C&T Logo"}
                width={38}
                height={38}
                className="object-contain"
              />
              <span className="font-serif text-[16px] font-semibold text-[#0f172a] dark:text-white">
                MarvelBros C&amp;T
              </span>
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg text-slate-600 transition-colors hover:text-[#b08d57] dark:text-slate-300"
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
            <Link href={`/${lang}/`} className="border-b border-[#e4ded4] px-1 py-3 text-[16px] font-semibold text-[#0f172a] hover:text-[#b08d57] dark:border-white/10 dark:text-slate-100">{nav.home}</Link>
            <span className="px-1 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-[#b08d57] dark:text-[#c9a66b]">{isZh ? "知识库" : "Insights"}</span>
            {knowledgeLinks.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-10 items-center border-b border-[#e4ded4]/70 px-1 text-sm font-medium text-slate-700 hover:text-[#b08d57] dark:border-white/10 dark:text-slate-300">{item.label}</Link>
            ))}
            <span className="px-1 pt-4 pb-1 text-xs font-semibold uppercase tracking-widest text-[#b08d57] dark:text-[#c9a66b]">{isZh ? "全周期方案" : "Lifecycle Advisory"}</span>
            {stageLinks.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-10 items-center border-b border-[#e4ded4]/70 px-1 text-sm font-medium text-slate-700 hover:text-[#b08d57] dark:border-white/10 dark:text-slate-300">{item.label}</Link>
            ))}
            {leafLinks.map((link) => (
              <Link key={link.href} href={link.href} className="border-b border-[#e4ded4] px-1 py-3 text-[16px] font-semibold text-[#0f172a] hover:text-[#b08d57] dark:border-white/10 dark:text-slate-100">{link.label}</Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 border-t border-[#e4ded4] p-5 dark:border-white/10">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#0f172a] px-4 py-2 text-sm font-medium text-[#f8f6f2] hover:bg-[#b08d57] dark:bg-[#c9a66b] dark:text-[#0b0f17]"
            >
              {primaryCta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <div className="flex items-center justify-between gap-3">
              <ThemeToggle lang={lang} />
              <a
                href={languageHref}
                onClick={(event) => {
                  event.currentTarget.href = `${languageHref}${window.location.search}${window.location.hash}`;
                }}
                hrefLang={otherLang}
                aria-label={isZh ? "Read this page in English" : "以中文阅读本页"}
                className="flex items-center gap-2 rounded-full border border-[#dfd8cc] px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-[#b08d57] dark:border-white/15 dark:text-slate-200"
              >
                <Globe className="h-3.5 w-3.5" />
                {lang === "zh" ? "EN" : "中文"}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

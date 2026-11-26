"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Menu, X, Globe, ArrowRight } from "lucide-react";
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
    { href: `/${lang}/knowledge`, label: isZh ? "决策文库" : "Knowledge Library" },
    { href: `/${lang}/lean`, label: isZh ? "管享精道" : "Lean Insights" },
    { href: `/${lang}/topics`, label: isZh ? "专题" : "Topics" },
  ];
  const stageLinks = lifecycleNavLinks(lang);
  const leafLinks = [
    { href: `/${lang}/services`, label: isZh ? "服务清单" : "Services" },
    { href: `/${lang}/cases`, label: isZh ? "实践案例" : "Case Studies" },
    { href: `/${lang}/about`, label: isZh ? "关于我们" : "About" },
  ];
  const primaryCta = {
    href: `/${lang}/contact?type=diagnosis`,
    label: isZh ? "预约项目诊断" : "Book a Diagnosis",
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-[72px] items-center justify-between py-2">
            <Link
              href={`/${lang}/`}
              className="flex min-w-0 flex-shrink-0 items-center"
              style={{ gap: "0.5cm" }}
            >
              <Image
                src="/logo-new.png"
                alt={isZh ? "迈创兄弟C&T 标志" : "MarvelBros C&T Logo"}
                width={53}
                height={53}
                className="h-[52.8px] w-[52.8px] flex-shrink-0 object-contain"
              />
              <span className="min-w-0">
                <span className="block text-[13px] font-semibold leading-none text-slate-950 dark:text-white lg:text-[14px]">MarvelBros C&amp;T</span>
                <span className="mt-1 block text-[11px] font-medium leading-4 text-brand-blue dark:text-sky-300">
                  {isZh ? "酒店投、建、筹、管、改、退" : "Invest, develop, pre-open, operate, renovate, exit"}
                </span>
                <span className="block text-[11px] font-medium leading-4 text-brand-blue dark:text-sky-300">
                  {isZh ? "全生命周期价值提升咨询服务" : "Hotel lifecycle advisory"}
                </span>
              </span>
            </Link>

            <nav className="hidden flex-shrink-0 items-stretch gap-1 self-stretch min-[1280px]:flex 2xl:gap-2">
              <Link href={`/${lang}/`} className={cn("flex flex-shrink-0 items-center whitespace-nowrap px-1.5 text-[15.4px] font-bold text-slate-600 hover:text-brand-blue min-[1440px]:px-2.5 dark:text-slate-300")}>{nav.home}</Link>
              <div className="group relative flex items-center">
                <button type="button" aria-haspopup="true" aria-controls="nav-knowledge" className="whitespace-nowrap px-1.5 py-2 text-[15.4px] font-bold text-slate-600 hover:text-brand-blue min-[1440px]:px-2.5 dark:text-slate-300">{isZh ? "知识库" : "Knowledge"}</button>
                <div id="nav-knowledge" className="invisible absolute left-0 top-full z-30 pt-1 group-hover:visible group-focus-within:visible">
                  <div className="min-w-48 border border-slate-200 bg-white py-1 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    {knowledgeLinks.map((item) => <Link key={item.href} href={item.href} className="flex min-h-11 items-center px-4 text-sm font-semibold hover:bg-slate-50 hover:text-brand-blue dark:hover:bg-slate-900">{item.label}</Link>)}
                  </div>
                </div>
              </div>
              <div className="group relative flex items-center">
                <button type="button" aria-haspopup="true" aria-controls="nav-lifecycle" className="whitespace-nowrap px-1.5 py-2 text-[15.4px] font-bold text-slate-600 hover:text-brand-blue min-[1440px]:px-2.5 dark:text-slate-300">{isZh ? "全周期方案" : "Lifecycle Solutions"}</button>
                <div id="nav-lifecycle" className="invisible absolute left-0 top-full z-30 pt-1 group-hover:visible group-focus-within:visible">
                  <div className="min-w-64 border border-slate-200 bg-white py-1 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    {stageLinks.map((item) => <Link key={item.href} href={item.href} className="flex min-h-11 items-center px-4 text-sm font-semibold hover:bg-slate-50 hover:text-brand-blue dark:hover:bg-slate-900">{item.label}</Link>)}
                  </div>
                </div>
              </div>
              {leafLinks.map((link) => (
                <Link key={link.href} href={link.href} className={cn("flex flex-shrink-0 items-center whitespace-nowrap px-1.5 text-[15.4px] font-bold text-slate-600 transition-colors hover:text-brand-blue min-[1440px]:px-2.5 dark:text-slate-300 dark:hover:text-sky-300")}>{link.label}</Link>
              ))}
            </nav>

            <div className="hidden min-[1280px]:flex items-center gap-2 min-[1440px]:gap-4 flex-shrink-0">
              <Link href={primaryCta.href} className="inline-flex min-h-11 items-center gap-1.5 bg-primary px-4 py-2 text-[15.4px] font-bold text-primary-foreground hover:bg-primary/90">
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={languageHref}
                onClick={event => { event.currentTarget.href = `${languageHref}${window.location.search}${window.location.hash}` }}
                hrefLang={otherLang}
                aria-label={isZh ? "Read this page in English" : "以中文阅读本页"}
                className="flex flex-shrink-0 items-center gap-1.5 px-2 py-2 text-[15.4px] font-bold text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-300 dark:hover:text-sky-300"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === "zh" ? "EN" : "中文"}</span>
              </a>
              <ThemeToggle lang={lang} />
            </div>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-slate-600 transition-colors hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b4a6f] focus-visible:ring-offset-2 dark:text-slate-300 dark:hover:text-sky-300 min-[1280px]:hidden"
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
            <Link href={`/${lang}/`} className="border-b border-slate-200 px-1 py-3 text-[17.6px] font-bold text-slate-700 hover:text-brand-blue dark:border-slate-800 dark:text-slate-200">{nav.home}</Link>
            <button type="button" className="border-b border-slate-200 px-1 py-3 text-left text-[17.6px] font-bold text-slate-700 dark:border-slate-800 dark:text-slate-200">{isZh ? "知识库" : "Knowledge"}</button>
            {knowledgeLinks.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center border-b border-slate-200 px-1 text-sm font-semibold text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.label}</Link>
            ))}
            <button type="button" className="border-b border-slate-200 px-1 py-3 text-left text-[17.6px] font-bold text-slate-700 dark:border-slate-800 dark:text-slate-200">{isZh ? "全周期方案" : "Lifecycle Solutions"}</button>
            {stageLinks.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-11 items-center border-b border-slate-200 px-1 text-sm font-semibold text-slate-600 dark:border-slate-800 dark:text-slate-300">{item.label}</Link>
            ))}
            {leafLinks.map((link) => (
              <Link key={link.href} href={link.href} className="border-b border-slate-200 px-1 py-3 text-[17.6px] font-bold text-slate-700 hover:text-brand-blue dark:border-slate-800 dark:text-slate-200">{link.label}</Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4 border-t border-slate-200 p-5 dark:border-slate-800">
            <Link href={primaryCta.href} className="inline-flex min-h-11 w-full items-center justify-center bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90">
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <div className="flex items-center justify-between gap-3">
              <ThemeToggle lang={lang} />
              <a
                href={languageHref}
                onClick={event => { event.currentTarget.href = `${languageHref}${window.location.search}${window.location.hash}` }}
                hrefLang={otherLang}
                aria-label={isZh ? "Read this page in English" : "以中文阅读本页"}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:text-brand-blue dark:text-slate-300 dark:hover:text-sky-300"
              >
                <Globe className="h-4 w-4" />
                {lang === "zh" ? "EN" : "中文"}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

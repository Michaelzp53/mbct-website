'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

interface ThemeToggleProps {
  lang?: string
  className?: string
}

export function ThemeToggle({ lang = 'zh', className = '' }: ThemeToggleProps) {
  const { theme, setTheme, isManualOverride } = useTheme()
  const isZh = lang === 'zh'

  return (
    <div
      className={`relative flex items-center gap-0.5 rounded-full border border-[#dfd8cc] bg-white/80 p-0.5 shadow-xs dark:border-white/15 dark:bg-[#131924] ${className}`}
    >
      <button
        type="button"
        aria-pressed={theme === 'light'}
        onClick={() => setTheme('light')}
        className={`flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
          theme === 'light'
            ? 'bg-[#0f172a] text-[#f8f6f2]'
            : 'text-slate-500 hover:text-[#0f172a] dark:text-slate-400 dark:hover:text-white'
        }`}
        title={isZh ? '白天模式' : 'Light mode'}
      >
        <Sun className="h-3.5 w-3.5" />
        <span>{isZh ? '昼' : 'Light'}</span>
      </button>

      <button
        type="button"
        aria-pressed={theme === 'dark'}
        onClick={() => setTheme('dark')}
        className={`flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
          theme === 'dark'
            ? 'bg-[#c9a66b] text-[#0b0f17]'
            : 'text-slate-500 hover:text-[#0f172a] dark:text-slate-400 dark:hover:text-white'
        }`}
        title={isZh ? '夜间模式' : 'Dark mode'}
      >
        <Moon className="h-3.5 w-3.5" />
        <span>{isZh ? '夜' : 'Dark'}</span>
      </button>

      {isManualOverride && (
        <span
          className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#b08d57] ring-2 ring-[#f8f6f2] dark:bg-[#c9a66b] dark:ring-[#0b0f17]"
          title={isZh ? '已手动切换，关闭浏览器后恢复自动' : 'Manual override, will reset on browser close'}
        />
      )}
    </div>
  )
}

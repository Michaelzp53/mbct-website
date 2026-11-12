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
    <div className={`relative flex items-center gap-0.5 border border-[#dfd1bc] bg-[#fffdf8] p-0.5 dark:border-[#5b4631] dark:bg-[#211a13] ${className}`}>
      <button
        type="button"
        aria-pressed={theme === 'light'}
        onClick={() => setTheme('light')}
        className={`
          flex cursor-pointer items-center gap-1.5 px-2 py-1.5 text-xs font-medium transition-colors
          ${theme === 'light'
            ? 'bg-brand-blue text-white'
            : 'text-slate-500 hover:text-brand-blue dark:text-[#cdbfae] dark:hover:text-[#d8b98a]'}
        `}
        title={isZh ? '白天模式' : 'Light mode'}
      >
        <Sun className="w-3.5 h-3.5" />
        <span>{isZh ? '昼' : 'Light'}</span>
      </button>

      <button
        type="button"
        aria-pressed={theme === 'dark'}
        onClick={() => setTheme('dark')}
        className={`
          flex cursor-pointer items-center gap-1.5 px-2 py-1.5 text-xs font-medium transition-colors
          ${theme === 'dark'
            ? 'bg-[#3d2f22] text-[#fff8ec]'
            : 'text-slate-500 hover:text-brand-blue dark:text-[#cdbfae] dark:hover:text-[#d8b98a]'}
        `}
        title={isZh ? '夜间模式' : 'Dark mode'}
      >
        <Moon className="w-3.5 h-3.5" />
        <span>{isZh ? '夜' : 'Dark'}</span>
      </button>

      {isManualOverride && (
        <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-brand-gold" title={isZh ? '已手动切换，关闭浏览器后恢复自动' : 'Manual override, will reset on browser close'} />
      )}
    </div>
  )
}

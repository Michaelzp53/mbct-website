'use client'

import { useState, useEffect } from 'react'
import { Users, TrendingUp } from 'lucide-react'

interface RegistrationStatsProps {
  showDetail?: boolean
}

export default function RegistrationStats({ showDetail = false }: RegistrationStatsProps) {
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    week: 0,
  })

  useEffect(() => {
    const registrations = JSON.parse(localStorage.getItem('mbct_registrations') || '[]')
    
    const now = new Date()
    const today = now.toDateString()
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)

    const todayCount = registrations.filter((r: any) => 
      new Date(r.date).toDateString() === today
    ).length

    const weekCount = registrations.filter((r: any) => 
      new Date(r.date) >= weekAgo
    ).length

    setStats({
      total: registrations.length,
      today: todayCount,
      week: weekCount,
    })
  }, [])

  if (showDetail) {
    return (
      <div className="bg-muted rounded-2xl border border-border p-6">
        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-[#f59e0b]" />
          会员注册统计
        </h3>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-background dark:bg-[#0f172a] rounded-xl">
            <div className="text-3xl font-bold text-[#f59e0b] mb-1">{stats.total}</div>
            <div className="text-sm text-muted-foreground">总注册数</div>
          </div>
          
          <div className="text-center p-4 bg-background dark:bg-[#0f172a] rounded-xl">
            <div className="text-3xl font-bold text-green-500 mb-1">{stats.today}</div>
            <div className="text-sm text-muted-foreground">今日新增</div>
          </div>
          
          <div className="text-center p-4 bg-background dark:bg-[#0f172a] rounded-xl">
            <div className="text-3xl font-bold text-blue-500 mb-1">{stats.week}</div>
            <div className="text-sm text-muted-foreground">本周新增</div>
          </div>
        </div>

        {stats.today > 0 && (
          <div className="mt-4 flex items-center gap-2 text-green-500 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>今日新增 {stats.today} 位会员</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Users className="w-4 h-4" />
      <span>{stats.total} 位会员</span>
    </div>
  )
}

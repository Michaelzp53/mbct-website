export function articleLabel(label: string, lang: string) {
  if (lang !== 'en') return label
  const labels: Record<string, string> = {
    '专业洞察': 'Professional Insights', '行业分析': 'Industry Analysis', '行业报告': 'Industry Report',
    '案例研究': 'Case Study', '博客文章': 'Article', '团队建设': 'Team Management',
    '成本优化': 'Cost Management', '营销策略': 'Marketing', '运营升级': 'Operating Improvement',
    '投资决策': 'Investment Decisions', '筹备筹开': 'Pre-opening', '数字平台': 'Digital Platforms',
    '迈创兄弟C&T': 'MarvelBros C&T', '迈创兄弟': 'MarvelBros C&T',
  }
  return labels[label] || (/[\u3400-\u9fff]/u.test(label) ? 'Hotel Management' : label)
}

export function containsChineseBody(content: string) {
  const chinese = content.match(/[\u3400-\u9fff]/gu)?.length || 0
  return chinese > 100 && chinese / Math.max(content.length, 1) > 0.2
}
export function plainArticleText(text: string) {
  return text.replace(/\*\*/g, '').replace(/^#{1,6}\s+/gm, '').replace(/^副标?题[：:]\s*/u, '')
}

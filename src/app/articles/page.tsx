import { redirect } from 'next/navigation'

export default function ArticlesPage() {
  redirect('/zh/lean')
}

export function generateMetadata() {
  return {
    title: '管享精道 - MBCT',
  }
}

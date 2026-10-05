import RootDocument, { siteMetadata } from '@/components/RootDocument'

export const metadata = siteMetadata

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="zh-CN">{children}</RootDocument>
}

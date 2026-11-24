import HotelTopicPage, { topicMetadata } from '@/components/HotelTopicPage'
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) { const { lang } = await params; return topicMetadata('hotel-development', lang) }
export default async function Page({ params }: { params: Promise<{ lang: string }> }) { const { lang } = await params; return <HotelTopicPage slug="hotel-development" lang={lang} /> }

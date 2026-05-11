import { sql } from '@vercel/postgres'
import QuestionsAdminClient from './QuestionsAdminClient'

interface Question {
  id: number
  title: string
  detail: string
  pillar: string
  waste_types: string[] | string
  nickname: string | null
  hotel_name: string | null
  created_at: string
  status: string | null
}

export default async function QuestionsAdminPage() {
  let questions: Question[] = []
  try {
    const result = await sql`SELECT * FROM questions ORDER BY created_at DESC`
    questions = result.rows as Question[]
  } catch (err) {
    console.error('Failed to load questions:', err)
  }

  return <QuestionsAdminClient questions={questions} />
}

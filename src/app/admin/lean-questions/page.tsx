import { getQuestions } from '../../api/lean/questions/store'
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
  const questions = await getQuestions()
  return <QuestionsAdminClient questions={questions} />
}

// 临时内存存储，后续迁移到数据库
interface Question {
  id: number;
  title: string;
  detail: string;
  pillar: string;
  waste_types: string[];
  nickname: string | null;
  hotel_name: string | null;
  ip_hash: string;
  status: string;
  created_at: string;
}

let questions: Question[] = [];
let nextId = 1;

export function addQuestion(data: Omit<Question, 'id' | 'status' | 'created_at'>): Question {
  const question: Question = {
    ...data,
    id: nextId++,
    status: 'pending',
    created_at: new Date().toISOString(),
  };
  questions.unshift(question);
  // 只保留最近 100 条
  if (questions.length > 100) {
    questions = questions.slice(0, 100);
  }
  return question;
}

export function getQuestions(): Question[] {
  return questions;
}

export function getQuestionById(id: number): Question | undefined {
  return questions.find(q => q.id === id);
}

export function updateQuestionStatus(id: number, status: string): Question | undefined {
  const question = questions.find(q => q.id === id);
  if (question) {
    question.status = status;
  }
  return question;
}

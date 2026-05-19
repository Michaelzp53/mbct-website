import { sql } from '@vercel/postgres';

const hasDatabaseUrl = Boolean(process.env.POSTGRES_URL || process.env.POSTGRES_URL_NON_POOLING);

type MaybeQuestionRow = {
  id: number;
  title: string;
  detail: string;
  pillar: string;
  waste_types: string[] | null;
  nickname: string | null;
  hotel_name: string | null;
  ip_hash: string;
  status: string;
  created_at: string;
};

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

function normalize(row: MaybeQuestionRow): Question {
  return {
    id: row.id,
    title: row.title,
    detail: row.detail,
    pillar: row.pillar,
    waste_types: row.waste_types || [],
    nickname: row.nickname,
    hotel_name: row.hotel_name,
    ip_hash: row.ip_hash,
    status: row.status,
    created_at: row.created_at,
  };
}

export async function addQuestion(data: Omit<Question, 'id' | 'status' | 'created_at'>): Promise<Question> {
  if (!hasDatabaseUrl) {
    throw new Error('Database connection is not configured.');
  }
  const wasteTypesStr = `{${(data.waste_types || []).map((w: string) => `"${w}"`).join(',')}}`;
  const result = await sql`
    INSERT INTO questions (title, detail, pillar, waste_types, nickname, hotel_name, ip_hash, status, created_at)
    VALUES (${data.title}, ${data.detail}, ${data.pillar}, ${wasteTypesStr}::text[], ${data.nickname}, ${data.hotel_name}, ${data.ip_hash}, 'pending', NOW())
    RETURNING *
  `;
  return normalize(result.rows[0] as MaybeQuestionRow);
}

export async function getQuestions(): Promise<Question[]> {
  if (!hasDatabaseUrl) return [];
  const result = await sql`SELECT * FROM questions ORDER BY created_at DESC LIMIT 100`;
  return result.rows.map(row => normalize(row as MaybeQuestionRow));
}

export async function getQuestionById(id: number): Promise<Question | undefined> {
  if (!hasDatabaseUrl) return undefined;
  const result = await sql`SELECT * FROM questions WHERE id = ${id}`;
  if (result.rows.length === 0) return undefined;
  return normalize(result.rows[0] as MaybeQuestionRow);
}

export async function updateQuestionStatus(id: number, status: string): Promise<Question | undefined> {
  if (!hasDatabaseUrl) return undefined;
  const result = await sql`
    UPDATE questions SET status = ${status} WHERE id = ${id}
    RETURNING *
  `;
  if (result.rows.length === 0) return undefined;
  return normalize(result.rows[0] as MaybeQuestionRow);
}

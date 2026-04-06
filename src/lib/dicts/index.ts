import { zh } from './zh'
import { en } from './en'

export const dicts = { zh, en } as const
export type Lang = keyof typeof dicts
export type Dict = typeof zh

export function getDict(lang: string): Dict {
  return dicts[lang as Lang] ?? zh
}

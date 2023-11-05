import * as MBTI from '@/types/MBTI';

export type t = {
  indicator: keyof MBTI.t;
  content: string;
};

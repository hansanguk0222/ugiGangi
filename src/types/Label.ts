export const LABEL = ['extraversion', 'introversion', 'sensing', 'intuition', 'thinking', 'feeling', 'judging', 'perceiving'] as const;
export type t = (typeof LABEL)[number];

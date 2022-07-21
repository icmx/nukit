export const re = (pattern: string, flags?: string): RegExp => {
  return new RegExp(pattern, flags);
};

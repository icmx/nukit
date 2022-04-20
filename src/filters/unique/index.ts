export const uniquePredicate = <T = unknown>(
  value: T,
  index: number,
  array: T[]
): boolean => {
  return array.indexOf(value) === index;
};

export const uniqie = <T = unknown>(value: T[]): T[] => {
  return Array.from(new Set<T>(value));
};

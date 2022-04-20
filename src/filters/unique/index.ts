/**
 * Returns an array without duplicates, a predicate version. Useful for
 * array chaining.
 *
 * Please note that this predicate internally much slower than standard
 * unique utility.
 * @example
 * array
 *  .map(i => i + 1)
 *  .filter(uniquePredicate) // <- here it is
 *  .join(':')
 */
export const uniquePredicate = <T = unknown>(
  value: T,
  index: number,
  array: T[]
): boolean => {
  return array.indexOf(value) === index;
};

/**
 * Returns an array without duplicates.
 */
export const uniqie = <T = unknown>(value: T[]): T[] => {
  return Array.from(new Set<T>(value));
};

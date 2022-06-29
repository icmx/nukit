import { throwOn } from '../../error/throwOn';
import { isArray } from '../isArray';
import { ERROR_NOT_ARRAY } from './constants';

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
  throwOn(!isArray(value), ERROR_NOT_ARRAY);

  return Array.from(new Set<T>(value));
};

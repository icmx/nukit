import { getKeyFallback } from './utils';

/**
 * Creates a comparator function for standard array's sort method to
 * sort elements by keys provided in a custom order.
 */
export const byKeys = <I = unknown, K = number | string>(
  order: K[],
  getKey: (value: I) => K = getKeyFallback
) => {
  const indexes = new Map(order.map((value, index) => [value, index]));

  return (previous: I, next: I): number => {
    return indexes.get(getKey(previous))! - indexes.get(getKey(next))!;
  };
};

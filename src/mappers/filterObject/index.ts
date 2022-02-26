import { Entry } from '../../types/Entry';

/**
 * Filters object entries by predicate like standard array's filter.
 */
export const filterObject = (
  source: object,
  predicate: (value?: Entry, index?: number, array?: Entry[]) => unknown
): object => {
  return Object.fromEntries(Object.entries(source).filter(predicate));
};

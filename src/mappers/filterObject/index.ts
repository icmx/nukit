import { isObject } from '../../filters/isObject';
import { Entry } from '../../types/Entry';

export type FilterObjectOptions = {
  /**
   * Enable same filtering over sub-objects (if any).
   */
  recursive?: boolean;
};

/**
 * Filters object entries by predicate like standard array's filter.
 */
export const filterObject = (
  source: object,
  filter: (entry: Entry, index?: number, array?: Entry[]) => any,
  { recursive = false }: FilterObjectOptions = {}
): object => {
  return recursive
    ? Object.fromEntries(
        Object.entries(source)
          .filter(filter)
          .map(([key, value]) => [
            key,
            isObject(value)
              ? filterObject(value, filter, { recursive })
              : value,
          ])
      )
    : Object.fromEntries(Object.entries(source).filter(filter));
};

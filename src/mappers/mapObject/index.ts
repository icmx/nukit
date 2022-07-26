import { isObject } from '../../filters/isObject';
import { Entry } from '../../types/Entry';

export interface MapObjectOptions {
  /**
   * Enable same mapping over sub-objects (if any).
   */
  recursive?: boolean;
}

/**
 * Maps object entries by callback function like standard array's map.
 */
export const mapObject = (
  source: object,
  action: (entry: Entry, index?: number, array?: Entry[]) => any,
  { recursive = false }: MapObjectOptions = {}
): object => {
  return recursive
    ? Object.fromEntries(
        Object.entries(source).map(([key, value], index?, array?) =>
          isObject(value)
            ? [key, mapObject(value, action, { recursive })]
            : action([key, value], index, array)
        )
      )
    : Object.fromEntries(Object.entries(source).map(action));
};

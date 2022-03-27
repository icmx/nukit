import { isObject } from '../../filters/isObject';
import { Entry } from '../../types/Entry';

export type MapObjectOptions = {
  /**
   * True to enable same mapping over sub-objects (if any).
   */
  recursive?: boolean;
};

/**
 * Maps object entries by callback function like standard array's map.
 */
export const mapObject = (
  source: object,
  action: (entry: Entry, index?: number, array?: Entry[]) => any,
  options: MapObjectOptions = {}
): object => {
  const { recursive }: MapObjectOptions = {
    recursive: false,
    ...options,
  };

  return recursive
    ? Object.fromEntries(
        Object.entries(source).map(([key, value], index?, array?) =>
          isObject(value)
            ? [key, mapObject(value, action, options)]
            : action([key, value], index, array)
        )
      )
    : Object.fromEntries(Object.entries(source).map(action));
};

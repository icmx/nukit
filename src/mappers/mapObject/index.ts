import { Entry } from '../../types/Entry';

/**
 * Maps object entries by callback function like standard array's map.
 */
export const mapObject = (
  source: object,
  callbackfn: (value?: Entry, index?: number, array?: Entry[]) => Entry
): object => {
  return Object.fromEntries(Object.entries(source).map(callbackfn));
};

import { Entry } from '../../types/Entry';

export const filterObject = (
  source: object,
  predicate: (value?: Entry, index?: number, array?: Entry[]) => unknown
): object => {
  return Object.fromEntries(Object.entries(source).filter(predicate));
};

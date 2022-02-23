import { Entry } from '../../types/Entry';

export const mapObject = (
  source: object,
  callbackfn: (value?: Entry, index?: number, array?: Entry[]) => Entry
): object => {
  return Object.fromEntries(Object.entries(source).map(callbackfn));
};

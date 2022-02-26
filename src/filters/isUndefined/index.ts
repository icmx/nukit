/**
 * Returns true if value is undefined.
 */
export const isUndefined = (value: unknown): value is undefined => {
  return typeof value === 'undefined';
};

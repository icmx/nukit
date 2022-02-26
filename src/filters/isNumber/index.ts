/**
 * Returns true if value is a number.
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};

/**
 * Returns true if at least one of values in array meets filter
 * condition.
 * @param {unknown[]} values
 * @returns {boolean}
 */
export const oneOf = <T = unknown>(
  values: T[],
  filter: (value: unknown) => boolean
): boolean => {
  return values.length > 0 && values.some((value) => filter(value));
};

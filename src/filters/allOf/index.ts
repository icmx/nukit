/**
 * Returns true if all values in array meets filter condition.
 */
export const allOf = <T = unknown>(
  values: T[],
  filter: (value: unknown) => boolean
): boolean => {
  return values.length > 0 && values.every((value) => filter(value));
};

export const anyOf = <T = unknown>(
  values: T[],
  filter: (value: unknown) => boolean
): boolean => {
  return values.length > 0 && values.some((value) => filter(value));
};

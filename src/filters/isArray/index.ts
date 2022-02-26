/**
 * Returns true if value is array of any items.
 */
export const isArray = (value: unknown): value is any[] => {
  return Array.isArray(value);
};

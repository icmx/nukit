export const isArray = (value: unknown): value is any[] => {
  return Array.isArray(value);
};

export interface IsNumberOptions {
  /**
   * Return true if value is positive or negative Infinity.
   */
  allowInfinity?: boolean;

  /**
   * Return true if value is NaN.
   */
  allowNaN?: boolean;
}

/**
 * Returns true if value is a number.
 *
 * *Note:* for Infinity and NaN values it returns false by default.
 */
export const isNumber = (
  value: unknown,
  { allowInfinity = false, allowNaN = false }: IsNumberOptions = {}
): value is number => {
  return (
    typeof value === 'number' &&
    (allowInfinity
      ? true
      : value !== -Infinity && value !== Infinity) &&
    (allowNaN ? true : !Number.isNaN(value))
  );
};

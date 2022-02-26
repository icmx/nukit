import { WithRNGOption } from '../../types/WithRNGOption';

export type IntOptions = {
  /**
   * Minimum possible value to be returned, inclusive.
   * @default Number.MIN_SAFE_INTEGER // i.e. -9 007 199 254 740 991
   */
  min?: number;

  /**
   * Maximum possible value to be returned, inclusive.
   * @default Number.MAX_SAFE_INTEGER // i.e. +9 007 199 254 740 991
   */
  max?: number;
} & WithRNGOption;

/**
 * Returns random integer number value.
 */
export const int = (options: IntOptions = {}): number => {
  const { min, max, rng }: IntOptions = {
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    rng: Math.random,
    ...options,
  };

  if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
    throw new RangeError(
      'Minimum and maximum values should be safe integers'
    );
  }

  if (min > max) {
    throw new RangeError(
      'Minimum value should not be greater than maximum value'
    );
  }

  return (
    Math.floor(rng() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
};

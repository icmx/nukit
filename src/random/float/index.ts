import { WithRNGOption } from '../../types/WithRNGOption';

export type FloatOptions = {} & WithRNGOption;

/**
 * Returns random float number value, from 0 (inclusive) to 1
 * (exclusive).
 */
export const float = (options: FloatOptions = {}): number => {
  const { rng }: FloatOptions = { rng: Math.random, ...options };

  return rng();
};

import { float, FloatOptions } from '../../random/float';
import { createMulberry32RNG } from '../../utils/createMulberry32RNG';

/**
 * Creates seeded version of float function.
 */
export const seedFloat = (seed: number) => {
  const rng = createMulberry32RNG(seed);

  return (options: Omit<FloatOptions, 'rng'> = {}) => {
    return float({ ...options, rng });
  };
};

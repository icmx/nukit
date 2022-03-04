import { bool, BoolOptions } from '../../random/bool';
import { createMulberry32RNG } from '../../utils/createMulberry32RNG';

/**
 * Creates seeded version of bool function.
 */
export const seedBool = (seed: number) => {
  const rng = createMulberry32RNG(seed);

  return (options: Omit<BoolOptions, 'rng'> = {}) => {
    return bool({ ...options, rng });
  };
};

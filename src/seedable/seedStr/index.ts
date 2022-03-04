import { str, StrOptions } from '../../random/str';
import { createMulberry32RNG } from '../../utils/createMulberry32RNG';

/**
 * Creates seeded version of str function.
 */
export const seedStr = (seed: number) => {
  const rng = createMulberry32RNG(seed);

  return (options: Omit<StrOptions, 'rng'>) => {
    return str({ ...options, rng });
  };
};

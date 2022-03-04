import { shuffle, ShuffleOptions } from '../../random/shuffle';
import { createMulberry32RNG } from '../../utils/createMulberry32RNG';

/**
 * Creates seeded version of shuffle function.
 */
export const seedShuffle = (seed: number) => {
  const rng = createMulberry32RNG(seed);

  return <T = unknown>(
    values: T[],
    options: Omit<ShuffleOptions, 'rng'> = {}
  ) => {
    return shuffle(values, { ...options, rng });
  };
};

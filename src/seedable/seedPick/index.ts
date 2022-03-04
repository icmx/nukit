import { pick, PickOptions } from '../../random/pick';
import { createMulberry32RNG } from '../../utils/createMulberry32RNG';

/**
 * Returns seeded version of pick function.
 */
export const seedPick = (seed: number) => {
  const rng = createMulberry32RNG(seed);

  return <T = unknown>(
    values: T[],
    options: Omit<PickOptions, 'rng'> = {}
  ) => {
    return pick<T>(values, { ...options, rng });
  };
};

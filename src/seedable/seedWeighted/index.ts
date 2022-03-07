import { weighted, WeightedEntry, WeightedOptions } from '../../random/weghted';
import { createMulberry32RNG } from '../../utils/createMulberry32RNG'

/**
 * Creates seeded version of weighted function.
 */
export const seedWeighted = (seed: number) => {
  const rng = createMulberry32RNG(seed);

  return <T = unknown>(
    values: WeightedEntry<T>[],
    options: Omit<WeightedOptions, 'rng'> = {}
  ): T => {
    return weighted<T>(values, { ...options, rng });
  };
}

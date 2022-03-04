import { bool, BoolOptions } from '../../random/bool';
import { createMulberry32RNG } from '../../utils/createMulberry32RNG';

export const seedBool = (seed: number) => {
  const rng = createMulberry32RNG(seed);

  return (options: Omit<BoolOptions, 'rng'> = {}) => {
    return bool({ ...options, rng });
  };
};

import { int, IntOptions } from '../../random/int';
import { createMulberry32RNG } from '../../utils/createMulberry32RNG';

export const seedInt = (seed: number) => {
  const rng = createMulberry32RNG(seed);

  return (options: Omit<IntOptions, 'rng'> = {}) => {
    return int({ ...options, rng });
  };
};

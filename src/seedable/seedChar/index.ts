import { char, CharOptions } from '../../random/char';
import { createMulberry32RNG } from '../../utils/createMulberry32RNG';

export const seedChar = (seed: number) => {
  const rng = createMulberry32RNG(seed);

  return (options: Omit<CharOptions, 'rng'> = {}) => {
    return char({ ...options, rng });
  };
};

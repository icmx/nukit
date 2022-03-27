import { RNG } from '../../types/RNG';

/**
 * Creates Mulberry32 pseudo-random number generator.
 *
 * Implementation is based on StackOverflow question "Seeding the random
 * number generator in Javascript":
 *
 *   - https://stackoverflow.com/q/521295 (question by weepy)
 *   - https://stackoverflow.com/a/47593316 (answer by bryc)
 */
export const createMulberry32RNG = (seed: number): RNG => {
  return (): number => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

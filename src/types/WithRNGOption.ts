import { RNG } from './RNG';

export type WithRNGOption = {
  /**
   * (pesudo) Random Number Generator function.
   *
   * Must be an alternative to standard Math.random and return only
   * numeric values between 0 (inclusive) and 1 (exclusive).
   *
   * By default uses Math.random if not provided.
   */
  rng?: RNG;
};

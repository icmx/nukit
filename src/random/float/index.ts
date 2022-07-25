import { RNG } from '../../constants';
import { WithRNGOption } from '../../types/WithRNGOption';

export type FloatOptions = {} & WithRNGOption;

/**
 * Returns random float number value, from 0 (inclusive) to 1
 * (exclusive).
 */
export const float = ({ rng = RNG }: FloatOptions = {}): number => {
  return rng();
};

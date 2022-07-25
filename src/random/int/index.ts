import { RNG } from '../../constants';
import { when } from '../../error/when';
import { neither } from '../../filters/neither';
import { WithRNGOption } from '../../types/WithRNGOption';
import {
  ERROR_MIN_MAX_ARE_NOT_SAFE_INT,
  ERROR_MIN_GT_MAX,
} from './constants';

export type IntOptions = {
  /**
   * Minimum possible value to be returned, inclusive.
   * @default Number.MIN_SAFE_INTEGER // i.e. -9 007 199 254 740 991
   */
  min?: number;

  /**
   * Maximum possible value to be returned, inclusive.
   * @default Number.MAX_SAFE_INTEGER // i.e. +9 007 199 254 740 991
   */
  max?: number;
} & WithRNGOption;

/**
 * Returns random integer number value.
 */
export const int = ({
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  rng = RNG,
}: IntOptions = {}): number => {
  when(
    neither(!Number.isSafeInteger(min), !Number.isSafeInteger(max)),
    ERROR_MIN_MAX_ARE_NOT_SAFE_INT
  );
  when(min > max, ERROR_MIN_GT_MAX);

  return (
    Math.floor(rng() * (Math.floor(max) - Math.ceil(min) + 1)) +
    Math.ceil(min)
  );
};

import { RNG } from '../../constants';
import { when } from '../../error/when';
import { neither } from '../../filters/neither';
import { WithRNGOption } from '../../types/WithRNGOption';
import { float } from '../float';
import { ERROR_CHANCE_NOT_FLOAT_BETWEEN_0_1 } from './constants';

export type BoolOptions = {
  /**
   * Chance for true value, must be a float number between 0 and 1
   * inclusively.
   */
  chance?: number;
} & WithRNGOption;

/**
 * Returns random boolean value, false or true.
 */
export const bool = ({
  chance = 0.5,
  rng = RNG,
}: BoolOptions = {}): boolean => {
  when(neither(chance < 0, chance > 1, !Number.isFinite(chance))).drop(
    ERROR_CHANCE_NOT_FLOAT_BETWEEN_0_1
  );

  const value = float({ rng });
  return value < chance ? true : false;
};

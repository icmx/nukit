import { throwOn } from '../../error/throwOn';
import { neither } from '../../filters/neither';
import { WithRNGOption } from '../../types/WithRNGOption';
import { float } from '../float';

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
export const bool = (options: BoolOptions = {}): boolean => {
  const { chance, rng }: BoolOptions = {
    chance: 0.5,
    rng: Math.random,
    ...options,
  };

  throwOn(
    neither(chance < 0, chance > 1, !Number.isFinite(chance)),
    new RangeError(
      'Chance should be a float number between 0 and 1 inclusively'
    )
  );

  const value = float({ rng });
  return value < chance ? true : false;
};

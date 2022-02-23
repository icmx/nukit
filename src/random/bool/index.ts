import { WithRNGOption } from '../../types/WithRNGOption';
import { float } from '../float';

export type BoolOptions = {
  chance?: number;
} & WithRNGOption;

export const bool = (options: BoolOptions = {}): boolean => {
  const { chance, rng }: BoolOptions = {
    chance: 0.5,
    rng: Math.random,
    ...options,
  };

  if (chance < 0 || chance > 1 || !Number.isFinite(chance)) {
    throw new RangeError(
      'Chance should be a float number between 0 and 1 inclusively'
    );
  }

  const value = float({ rng });
  return value < chance ? true : false;
};

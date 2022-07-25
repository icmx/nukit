import { RNG } from '../../constants';
import { throwOn } from '../../error/throwOn';
import { WithRNGOption } from '../../types/WithRNGOption';
import { int } from '../int';
import { ERROR_VALUES_IS_EMPTY } from './constants';

export type PickOptions = {} & WithRNGOption;

/**
 * Returns random value from an array of one or more items.
 */
export const pick = <T = unknown>(
  values: T[],
  { rng = RNG }: PickOptions = {}
): T => {
  throwOn(!values.length, ERROR_VALUES_IS_EMPTY);

  return values[int({ min: 0, max: values.length - 1, rng })];
};

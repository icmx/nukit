import { RNG } from '../../constants';
import { when } from '../../error/when';
import { isArray } from '../../filters/isArray';
import { WithRNGOption } from '../../types/WithRNGOption';
import { ERROR_VALUES_NOT_ARRAY } from './constants';

export type ShuffleOptions = {} & WithRNGOption;

/**
 * Returns shuffled copy of array.
 *
 * *Note for non-primitive values:* this utility does not perform deep
 * copy.
 */
export const shuffle = <T = unknown>(
  values: T[],
  { rng = RNG }: ShuffleOptions = {}
): T[] => {
  when(!isArray(values)).drop(ERROR_VALUES_NOT_ARRAY);

  const result = [...values];
  let x: T;

  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));

    x = result[i];
    result[i] = result[j];
    result[j] = x;
  }

  return result;
};

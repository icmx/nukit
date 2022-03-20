import { throwOn } from '../../error/throwOn';
import { isArray } from '../../filters/isArray';
import { WithRNGOption } from '../../types/WithRNGOption';
import {
  ERROR_VALUES_IS_EMPTY,
  ERROR_VALUES_HAS_NON_ARRAY_ITEM,
  ERROR_VALUES_HAS_NON_FINITE_WEIGHT,
  ERROR_NO_VALID_WEIGHTS,
} from './constants';

export type WeightedOptions = {} & WithRNGOption;

export type WeightedEntry<T = unknown> = [T, number];

/**
 * Returns weighted random value from an array of values and weights.
 *
 * *Note:* current implementation is mostly based on same utility from
 * Chance library (https://chancejs.com/).
 *
 * See https://github.com/chancejs/chancejs/blob/859e555e29725df471d8110ad73c303e8a7f03b3/chance.js#L720
 */
export const weighted = <T = unknown>(
  values: WeightedEntry<T>[],
  options: WeightedOptions = {}
): T => {
  const { rng }: WeightedOptions = {
    rng: Math.random,
    ...options,
  };

  throwOn(!values.length, ERROR_VALUES_IS_EMPTY);

  let sum = 0;

  for (let i = 0; i < values.length; ++i) {
    const value = values[i];
    const weight = value[1];

    throwOn(!isArray(value), ERROR_VALUES_HAS_NON_ARRAY_ITEM);

    throwOn(
      !Number.isFinite(weight),
      ERROR_VALUES_HAS_NON_FINITE_WEIGHT
    );

    if (weight > 0) {
      sum += weight;
    }
  }

  throwOn(sum === 0, ERROR_NO_VALID_WEIGHTS);

  let selected = rng() * sum;
  let total = 0;
  let index = -1;
  let lastGoodIndex = -1;

  for (let i = 0; i < values.length; i++) {
    const weight = values[i][1];
    total += weight;

    if (weight > 0) {
      if (selected <= total) {
        index = i;
        break;
      }

      lastGoodIndex = i;
    }

    if (i === values.length - 1) {
      index = lastGoodIndex;
    }
  }

  return values[index][0];
};

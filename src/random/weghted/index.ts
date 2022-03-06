import { isArray } from '../../filters/isArray';
import { WithRNGOption } from '../../types/WithRNGOption';

export type WeightedOptions = {} & WithRNGOption;

export type WeightedEntry<T = unknown> = [T, number?];

export const weighted = <T = unknown>(
  values: WeightedEntry<T>[],
  options: WeightedOptions
): T => {
  const { rng }: WeightedOptions = {
    rng: Math.random,
    ...options,
  };

  if (!values.length) {
    throw new TypeError(
      'Array should include at least one item for picking'
    );
  }

  let sum = 0;

  for (let i = 0; i < values.length; ++i) {
    const value = values[i];
    const weight = value[1];

    if (!isArray(value)) {
      throw new TypeError(
        'Iterable for weighted pick should have array-like objects'
      );
    }

    if (!Number.isFinite(weight)) {
      throw new TypeError('Weight should be finite number');
    }

    if (weight && weight > 0) {
      sum += weight;
    }
  }

  if (sum === 0) {
    throw new TypeError('No valid weights in array if values');
  }

  let index = rng() * sum;
  let total = 0;
  let lastGoodIndex = -1;
  let choosenIndex = -1;

  for (let i = 0; i < values.length; i++) {
    const weight = values[i][1];
    total += weight ?? 0;

    if (weight && weight > 0) {
      if (index <= total) {
        choosenIndex = i;
        break;
      }

      lastGoodIndex = i;
    }

    if (i === values.length - 1) {
      choosenIndex = lastGoodIndex;
    }
  }

  return values[choosenIndex][0];
};

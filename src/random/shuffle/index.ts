import { isArray } from '../../filters/isArray';
import { WithRNGOption } from '../../types/WithRNGOption';

export type ShuffleOptions = {} & WithRNGOption;

export const shuffle = <T = unknown>(
  values: T[],
  options: ShuffleOptions = {}
): T[] => {
  if (!isArray(values)) {
    throw new TypeError('Iterable for shuffle should be array');
  }

  const { rng }: ShuffleOptions = { rng: Math.random, ...options };

  const result: T[] = [];

  let ci = values.length;
  let ri: number;

  while (ci !== 0) {
    ri = Math.floor(rng() * ci);
    ci--;

    [result[ci], result[ri]] = [values[ri], values[ci]];
  }

  return result;
};

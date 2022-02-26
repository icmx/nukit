import { WithRNGOption } from '../../types/WithRNGOption';
import { int } from '../int';

export type PickOptions = {} & WithRNGOption;

/**
 * Returns random value from an array of one or more items.
 */
export const pick = <T = unknown>(
  values: T[],
  options: PickOptions = {}
): T => {
  const { rng }: PickOptions = {
    rng: Math.random,
    ...options,
  };

  if (!values.length) {
    throw new TypeError(
      'Array should include at least one item for picking'
    );
  }

  return values[int({ min: 0, max: values.length - 1, rng })];
};

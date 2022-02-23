import { WithRNGOption } from '../../types/WithRNGOption';

export type FloatOptions = {} & WithRNGOption;

export const float = (options: FloatOptions = {}): number => {
  const { rng }: FloatOptions = { rng: Math.random, ...options };

  return rng();
};

import { WORD_CHARS } from '../../constants';
import { WithRNGOption } from '../../types/WithRNGOption';
import { pick } from '../pick';

export type CharOptions = {
  /**
   * Alphabet of characters where to pick a value.
   * @default `[A-z0-9]`
   */
  alphabet?: string;
} & WithRNGOption;

/**
 * Returns random character value.
 */
export const char = (options: CharOptions = {}): string => {
  const { alphabet, rng }: CharOptions = {
    alphabet: WORD_CHARS,
    rng: Math.random,
    ...options,
  };

  if (alphabet === '') {
    throw new TypeError(
      'Alphabet should include at least one character'
    );
  }

  return pick<string>([...alphabet], { rng });
};

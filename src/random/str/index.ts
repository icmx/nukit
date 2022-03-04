import { WORD_CHARS } from '../../constants';
import { WithRNGOption } from '../../types/WithRNGOption';
import { char } from '../char';
import { int } from '../int';

export type StrOptions = {
  /**
   * Alphabet of characters where to pick a value.
   * @default `[A-z0-9]`
   */
  alphabet?: string;

  /**
   * Minimum posible length of returned string, inclusive.
   */
  minLength?: number;

  /**
   * Maximum possible length of returned string, inclusive.
   */
  maxLength?: number;
} & WithRNGOption;

/**
 * Returns random string value.
 */
export const str = (options: StrOptions = {}): string => {
  const { alphabet, minLength, maxLength, rng }: StrOptions = {
    alphabet: WORD_CHARS,
    minLength: 0,
    maxLength: 1,
    rng: Math.random,
    ...options,
  };

  const length = int({ min: minLength, max: maxLength, rng });

  if (length < 0) {
    throw new TypeError('Length should be more than or equal to 0');
  }

  let result = '';

  for (let i = 0; i < length; i++) {
    result += char({ alphabet, rng });
  }

  return result;
};

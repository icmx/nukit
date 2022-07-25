import { RNG, WORD_CHARS } from '../../constants';
import { throwOn } from '../../error/throwOn';
import { WithRNGOption } from '../../types/WithRNGOption';
import { pick } from '../pick';
import { ERROR_ALPHABET_IS_EMPTY } from './constants';

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
export const char = ({
  alphabet = WORD_CHARS,
  rng = RNG,
}: CharOptions = {}): string => {
  throwOn(alphabet === '', ERROR_ALPHABET_IS_EMPTY);

  return pick<string>([...alphabet], { rng });
};

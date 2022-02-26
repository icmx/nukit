import { WithRNGOption } from '../../types/WithRNGOption';

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

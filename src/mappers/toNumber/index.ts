import { OF_UNDEFINED } from '../../constants';
import { FallbackHandler } from '../../types/FallbackHandler';
import { FloatHandling } from '../../types/FloatHandling';

export interface ToNumberOptions {
  /**
   * How to handle decimal part in a value, if any.
   *
   * - `ceil`, `floor`, `round` and `trunc` are standard Math handlers
   * - `fallback` will use fallback on parsed value if it's not integer
   * - `keep` is default option to just keep decimal part
   * @default 'keep'
   */
  floats?: 'fallback' | FloatHandling;

  /**
   * Action to perform when value can't be mapped into a number.
   * Returns undefined by default.
   * Throws `TypeError` if manually unset.
   */
  onFallback?: FallbackHandler;
}

/**
 * Maps value into a number if possible.
 */
export const toNumber = (
  value: unknown,
  { floats = 'keep', onFallback = OF_UNDEFINED }: ToNumberOptions = {}
): number => {
  const parseResult = Number.parseFloat(value as any);
  const plusResult = +(value as any);

  if (parseResult !== plusResult) {
    return onFallback(value);
  }

  if (floats === 'keep' || Number.isInteger(parseResult)) {
    return parseResult;
  } else {
    return floats === 'fallback'
      ? onFallback(parseResult)
      : Math[floats](parseResult);
  }
};

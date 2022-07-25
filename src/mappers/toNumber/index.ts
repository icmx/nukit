import { OF_UNDEFINED } from '../../constants';
import { FallbackHandler } from '../../types/FallbackHandler';
import { FloatHandling } from '../../types/FloatHandling';

export type ToNumberOptions = {
  /**
   * Method to handle decimal part of value, if any.
   *
   *   - `'fallback'` - will activate fallback set in `onFallback`
   *     or default fallback
   *   - `'ceil'` - rounds a number up to the next largest integer
   *   - `'floor'` - returns the largest integer less than or equal to
   *     a given number
   *   - `'round'` - returns the value of a number rounded to the
   *     nearest integer
   *   - `'trunc'` - returns the integer part of a number by removing
   *     any fractional digits
   *   - If unset, will keep the decimal part.
   *
   * Note: `'ceil'`, `'floor'`, `'round'` and `'trunc'` are internally
   * uses appropriate `Math` methods.
   *
   * Math reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
   * @default undefined
   */
  floats?: 'fallback' | FloatHandling;

  /**
   * Action to perform when value can't be mapped into a number.
   * Returns undefined by default.
   * Throws `TypeError` if manually unset.
   */
  onFallback?: FallbackHandler;
};

/**
 * Maps value into a number if possible.
 */
export const toNumber = (
  value: unknown,
  {
    floats = undefined,
    onFallback = OF_UNDEFINED,
  }: ToNumberOptions = {}
): number => {
  const parseResult = Number.parseFloat(value as any);
  const plusResult = +(value as any);

  if (parseResult !== plusResult) {
    return onFallback(value);
  }

  if (floats) {
    return floats === 'fallback'
      ? onFallback(parseResult)
      : Math[floats](parseResult);
  }

  return parseResult;
};

import { TO_NUMBER_DEFAULTS } from '../../constants';
import { FallbackHandler } from '../../types/FallbackHandler';
import { createErrorFallback } from '../../utils/createErrorFallback';

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
  floatHandler?:
    | 'fallback'
    | keyof Pick<Math, 'ceil' | 'floor' | 'round' | 'trunc'>;

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
  options: ToNumberOptions = {}
): number => {
  const parseResult = Number.parseFloat(value as any);
  const plusResult = +(value as any);

  const { onFallback, floatHandler }: ToNumberOptions = {
    onFallback: createErrorFallback(
      new TypeError(`Unable to map ${value} into number`)
    ),
    ...TO_NUMBER_DEFAULTS,
    ...options,
  };

  if (parseResult !== plusResult) {
    return onFallback(value);
  }

  if (floatHandler) {
    return floatHandler === 'fallback'
      ? onFallback(parseResult)
      : Math[floatHandler](parseResult);
  }

  return parseResult;
};

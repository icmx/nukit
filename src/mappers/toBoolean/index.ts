import { OF_UNDEFINED } from '../../constants';
import { isBoolean } from '../../filters/isBoolean';
import { FallbackHandler } from '../../types/FallbackHandler';

export interface ToBooleanOptions {
  /**
   * Values that should be treated as boolean false.
   * @default [ 'false' ]
   */
  falseValues?: any[];

  /**
   * Values that should be treated as boolean true.
   * @default [ 'true' ]
   */
  trueValues?: any[];

  /**
   * Action to perform when value can't be mapped into a boolean.
   * Returns undefined by default.
   * Throws `TypeError` if manually unset.
   */
  onFallback?: FallbackHandler;
}

/**
 * Maps value into a boolean if possible.
 */
export const toBoolean = (
  value: unknown,
  {
    falseValues = ['false'],
    trueValues = ['true'],
    onFallback = OF_UNDEFINED,
  }: ToBooleanOptions = {}
): boolean => {
  if (isBoolean(value)) {
    return value;
  }

  if (falseValues.length && falseValues.includes(value)) {
    return false;
  }

  if (trueValues.length && trueValues.includes(value)) {
    return true;
  }

  return onFallback(value);
};

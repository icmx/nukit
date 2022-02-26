import { TO_BOOLEAN_DEFAULTS } from '../../constants';
import { isBoolean } from '../../filters/isBoolean';
import { FallbackHandler } from '../../types/FallbackHAndler';
import { createErrorFallback } from '../../utils/createErrorFallback';

export type ToBooleanOptions = {
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
};

/**
 * Maps value into a boolean if possible.
 */
export const toBoolean = (
  value: unknown,
  options: ToBooleanOptions = {}
): boolean => {
  if (isBoolean(value)) {
    return value;
  }

  const { falseValues, trueValues, onFallback }: ToBooleanOptions = {
    falseValues: [],
    trueValues: [],
    onFallback: createErrorFallback(
      new TypeError(`Unable to map ${value} into boolean`)
    ),
    ...TO_BOOLEAN_DEFAULTS,
    ...options,
  };

  if (falseValues.length && falseValues.includes(value)) {
    return false;
  }

  if (trueValues.length && trueValues.includes(value)) {
    return true;
  }

  return onFallback(value);
};

import { TO_BOOLEAN_DEFAULTS } from '../../constants';
import { isBoolean } from '../../filters/isBoolean';
import { FallbackHandler } from '../../types/FallbackHAndler';
import { createErrorFallback } from '../../utils/createErrorFallback';

export type ToBooleanOptions = {
  falseValues?: any[];
  trueValues?: any[];
  onFallback?: FallbackHandler;
};

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

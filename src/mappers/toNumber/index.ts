import { TO_NUMBER_DEFAULTS } from '../../constants';
import { FallbackHandler } from '../../types/FallbackHandler';
import { createErrorFallback } from '../../utils/createErrorFallback';

export type ToNumberOptions = {
  floatHandler?:
    | 'fallback'
    | keyof Pick<Math, 'ceil' | 'floor' | 'round' | 'trunc'>;
  onFallback?: FallbackHandler;
};

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

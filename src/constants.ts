import { ToBooleanOptions } from './mappers/toBoolean';
import { ToNumberOptions } from './mappers/toNumber';
import { ToStringOptions } from './mappers/toString';

export const TO_BOOLEAN_DEFAULTS: ToBooleanOptions = {
  falseValues: ['false'],
  trueValues: ['true'],
  onFallback: () => undefined,
};

export const TO_NUMBER_DEFAULTS: ToNumberOptions = {
  onFallback: () => undefined,
};

export const TO_STRING_DEFAULTS: ToStringOptions = {};

export const WORD_CHARS =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-';

/**
 * Average days in month
 */
export const AVG_DIM = 30.437;

import { TO_STRING_DEFAULTS } from '../../constants';
import { isString } from '../../filters/isString';

export type ToStringOptions = {
  /**
   * Arguments to be passed into `value.toString()` or
   * `JSON.stringify()` if `useToJSON` options is set to true.
   */
  handlerArgs?: any[];

  /**
   * Use `JSON.stringify()` and `toJSON()` stringify methods instead of
   * default `toString()`.
   */
  useToJSON?: boolean;
};

/**
 * Maps value into a string.
 */
export const toString = (
  value: unknown,
  options: ToStringOptions = TO_STRING_DEFAULTS
): string => {
  if (isString(value)) {
    return value;
  }

  const handlerArgs = options.handlerArgs || [];

  if (options.useToJSON) {
    return JSON.stringify(value, ...handlerArgs);
  }

  return (value as any)?.toString?.(...handlerArgs) || `${value}`;
};

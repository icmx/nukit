import { isString } from '../../filters/isString';

export interface ToStringOptions {
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
}

/**
 * Maps value into a string.
 */
export const toString = (
  value: unknown,
  { handlerArgs = [], useToJSON = false }: ToStringOptions = {}
): string => {
  if (isString(value)) {
    return value;
  }

  if (useToJSON) {
    return JSON.stringify(value, ...handlerArgs);
  }

  return (value as any)?.toString?.(...handlerArgs) || `${value}`;
};

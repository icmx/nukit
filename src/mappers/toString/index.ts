import { TO_STRING_DEFAULTS } from '../../constants';
import { isString } from '../../filters/isString';

export type ToStringOptions = {
  handlerArgs?: any[];
  useToJSON?: boolean;
};

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

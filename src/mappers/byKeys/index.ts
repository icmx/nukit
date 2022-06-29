import { isNumber } from '../../filters/isNumber';
import { isString } from '../../filters/isString';
import { neither } from '../../filters/neither';

export const getKeyFallback = <T = any>(value: T): number | string => {
  if (neither(isNumber(value), isString(value))) {
    return (value as unknown) as number | string;
  } else {
    throw new TypeError(
      `getKey function is required for byKeys objects sorting`
    );
  }
};

export const byKeys = <T = unknown>(
  order: number[] | string[],
  getKey: (value: T) => number | string = getKeyFallback
) => {
  const indexes = new Map(order.map((value, index) => [value, index]));

  return (previous: T, next: T): number => {
    return indexes.get(getKey(previous))! - indexes.get(getKey(next))!;
  };
};

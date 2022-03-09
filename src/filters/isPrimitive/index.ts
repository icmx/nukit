import { isBoolean } from '../isBoolean';
import { isNull } from '../isNull';
import { isNumber } from '../isNumber';
import { isString } from '../isString';
import { isUndefined } from '../isUndefined';

export type Primitive = undefined | null | boolean | number | string;

/**
 * Returns true if value is a primitive, i.e. undefined, null, boolean,
 * number or string.
 */
export const isPrimitive = (value: unknown): value is Primitive => {
  return (
    isUndefined(value) ||
    isNull(value) ||
    isBoolean(value) ||
    isNumber(value, { allowInfinity: true, allowNaN: true }) ||
    isString(value)
  );
};

import { isBoolean } from '../isBoolean';
import { isNull } from '../isNull';
import { isNumber } from '../isNumber';
import { isString } from '../isString';
import { isUndefined } from '../isUndefined';

export type Primitive = undefined | null | boolean | number | string;

export const isPrimitive = (value: unknown): value is Primitive => {
  return (
    isUndefined(value) ||
    isNull(value) ||
    isBoolean(value) ||
    isNumber(value) ||
    isString(value)
  );
};

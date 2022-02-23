import { isArray } from '../isArray';
import { isNull } from '../isNull';

export const isObject = (value: unknown): value is object => {
  return typeof value === 'object' && !isNull(value) && !isArray(value);
};

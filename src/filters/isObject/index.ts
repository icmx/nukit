import { isArray } from '../isArray';
import { isNull } from '../isNull';

/**
 * Returns true if value is an object but not null nor array.
 */
export const isObject = (value: unknown): value is object => {
  return typeof value === 'object' && !isNull(value) && !isArray(value);
};

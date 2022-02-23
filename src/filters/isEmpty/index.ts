import { isArray } from '../isArray';
import { isNull } from '../isNull';
import { isObject } from '../isObject';
import { isUndefined } from '../isUndefined';

export const isEmpty = (value: unknown): boolean => {
  return (
    isUndefined(value) ||
    isNull(value) ||
    value === '' ||
    (isArray(value) && value.length === 0) ||
    (isObject(value) && Object.entries(value).length === 0)
  );
};

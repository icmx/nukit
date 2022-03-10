import { isArray } from '../isArray';
import { isNull } from '../isNull';
import { isObject } from '../isObject';
import { isUndefined } from '../isUndefined';

export type IsEmptyOptions = {
  /**
   * Values that sould be considered as empty. By default it's NaN and
   * empty string.
   *
   * To disallow NaN and empty string as empty values should be unset,
   * i.e. set to empty array — [].
   */
  emptyValues?: any[];
};

/**
 * Returns true if value is empty, i.e. undefined, null, empty string,
 * empty array or empty object (i.e. object without own properties).
 */
export const isEmpty = (
  value: unknown,
  options: IsEmptyOptions = {}
): boolean => {
  const { emptyValues }: IsEmptyOptions = {
    emptyValues: [NaN, ''],
    ...options,
  };

  if (!isArray(emptyValues)) {
    throw new TypeError('Empty values should be an array');
  }

  return (
    isUndefined(value) ||
    isNull(value) ||
    emptyValues.includes(value) ||
    (isArray(value) && value.length === 0) ||
    (isObject(value) && Object.entries(value).length === 0)
  );
};

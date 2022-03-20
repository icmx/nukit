import { throwOn } from '../../error/throwOn';
import { isArray } from '../isArray';
import { isNull } from '../isNull';
import { isObject } from '../isObject';
import { isUndefined } from '../isUndefined';
import { neither } from '../neither';
import { ERROR_EMPTY_VALUES_NOT_ARRAY } from './constants';

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

  throwOn(!isArray(emptyValues), ERROR_EMPTY_VALUES_NOT_ARRAY);

  return neither(
    isUndefined(value),
    isNull(value),
    emptyValues.includes(value),
    isArray(value) && value.length === 0,
    isObject(value) && Object.entries(value).length === 0
  );
};

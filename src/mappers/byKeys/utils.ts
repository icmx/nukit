import { throwOn } from 'src/error';
import { equally } from 'src/filters';
import { isNumber } from '../../filters/isNumber';
import { isString } from '../../filters/isString';

import { ERROR_MUST_HAVE_GET_KEY_FUNCTION } from './constants';

export const getKeyFallback = <I = unknown, K = number | string>(
  value: I
): K => {
  throwOn(
    equally(!isNumber(value), !isString(value)),
    ERROR_MUST_HAVE_GET_KEY_FUNCTION
  );

  return (value as unknown) as K;
};

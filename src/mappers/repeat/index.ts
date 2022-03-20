import { throwOn } from '../../error/throwOn';
import {
  ERROR_TIMES_LT_1,
  ERROR_TIMES_NOT_SAFE_INT,
} from './constants';

export type RepeatOptions = {
  /**
   * How many times to repeat some action. Once by default.
   */
  times?: number;
};

/**
 * Repeats some action for a specified number of times. Returns array
 * of action results if any.
 */
export const repeat = <T = void>(
  action: (step: number) => T,
  options: RepeatOptions = {}
): T[] => {
  const { times }: RepeatOptions = { times: 1, ...options };

  throwOn(!Number.isSafeInteger(times), ERROR_TIMES_NOT_SAFE_INT);

  throwOn(times < 1, ERROR_TIMES_LT_1);

  let result: T[] = [];

  for (let i = 0; i < times; i++) {
    result.push(action(i));
  }

  return result;
};

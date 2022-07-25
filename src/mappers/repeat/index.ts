import { when } from '../../error/when';
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
  { times = 1 }: RepeatOptions = {}
): T[] => {
  when(!Number.isSafeInteger(times)).drop(ERROR_TIMES_NOT_SAFE_INT);
  when(times < 1).drop(ERROR_TIMES_LT_1);

  let result: T[] = [];

  for (let i = 0; i < times; i++) {
    result.push(action(i));
  }

  return result;
};

import { throwOn } from '../../error/throwOn';

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

  throwOn(
    !Number.isSafeInteger(times),
    new TypeError('times should be safe integer number')
  );

  throwOn(times < 1, new RangeError('times should be greater than 0'));

  let result: T[] = [];

  for (let i = 0; i < times; i++) {
    result.push(action(i));
  }

  return result;
};

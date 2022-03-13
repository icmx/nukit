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

  if (!Number.isSafeInteger(times)) {
    throw new TypeError('times should be safe integer number');
  }

  if (times < 1) {
    throw new RangeError('times should be greater than 0');
  }

  let result: T[] = [];

  for (let i = 0; i < times; i++) {
    result.push(action(i));
  }

  return result;
};

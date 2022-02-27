export type RepeatOptions = {
  times?: number;
};

/**
 * Repeats some action for a specified number of times. Returns array
 * of action results if any.
 */
export const repeat = <T = void>(
  callback: (...args: any[]) => T,
  options: RepeatOptions = {}
): T[] => {
  const { times }: RepeatOptions = { times: 1, ...options };

  if (!Number.isSafeInteger(times)) {
    throw new TypeError('times should be safe integer number');
  }

  if (times < 1) {
    throw new RangeError('times should be greater than 0')
  }


  let result: T[] = [];

  for (let i = 0; i < times; i++) {
    result.push(callback());
  }

  return result;
};

/**
 * Repeats some action for a specified number of times. Returns array
 * of action results if any.
 */
export const repeat = <T = void>(
  callback: (...args: any[]) => T,
  times: number
): T[] => {
  let result: T[] = [];

  for (let i = 0; i < times; i++) {
    result.push(callback());
  }

  return result;
};

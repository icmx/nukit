import { nameOf } from '../../../test/utils/nameOf';
import {
  ERROR_MIN_GT_MAX,
  ERROR_MIN_MAX_ARE_NOT_SAFE_INT,
} from './constants';
import { int } from './index';

describe(nameOf(int), () => {
  it('should throw error when min or max option is not safe integer value', () => {
    expect(() => {
      const error = int({ min: -Infinity, max: Infinity });
    }).toThrow(ERROR_MIN_MAX_ARE_NOT_SAFE_INT);

    expect(() => {
      const error = int({ min: NaN, max: 1 });
    }).toThrow(ERROR_MIN_MAX_ARE_NOT_SAFE_INT);

    expect(() => {
      const error = int({ min: 0, max: NaN });
    }).toThrow(ERROR_MIN_MAX_ARE_NOT_SAFE_INT);
  });

  it('should throw error when min option is greater than max', () => {
    expect(() => {
      const error = int({ min: 43, max: 42 });
    }).toThrow(ERROR_MIN_GT_MAX);
  });

  it('should return integer value in specified range inclusive', () => {
    const results: boolean[] = [];
    const min = -10;
    const max = 10;

    for (let i = 0; i < 10_000; i++) {
      const result = int({ min, max });
      results.push(result >= min && result <= max);
    }

    expect(results.every((result) => result === true)).toBe(true);
  });
});

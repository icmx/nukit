import { nameOf } from '../../../test/utils/nameOf';
import { allOf } from '../../filters/allOf';
import { isUndefined } from '../../filters/isUndefined';
import {
  ERROR_TIMES_LT_1,
  ERROR_TIMES_NOT_SAFE_INT,
} from './constants';
import { repeat } from './index';

describe(nameOf(repeat), () => {
  it('should throw if times option is not safe integer', () => {
    expect(() => {
      const error = repeat(() => null, { times: 42.525 });
    }).toThrow(ERROR_TIMES_NOT_SAFE_INT);

    expect(() => {
      const error = repeat(() => null, { times: Infinity });
    }).toThrow(ERROR_TIMES_NOT_SAFE_INT);

    expect(() => {
      const error = repeat(() => null, {
        times: Number.MAX_SAFE_INTEGER + 1,
      });
    }).toThrow(ERROR_TIMES_NOT_SAFE_INT);
  });

  it('should throw if times option is less than 1', () => {
    expect(() => {
      const error = repeat(() => null, { times: 0 });
    }).toThrow(ERROR_TIMES_LT_1);

    expect(() => {
      const error = repeat(() => null, { times: -1 });
    }).toThrow(ERROR_TIMES_LT_1);
  });

  it('should return empty array if callback returns nothing', () => {
    const times = 100;

    const results = repeat(
      () => {
        const a = 2;
        const b = a + 2;
        const c = Math.max(a, b);
      },
      { times }
    );

    expect(results.length).toBe(times);
    expect(allOf(results, isUndefined)).toBe(true);
  });

  it('should return array of values if callback returns some results', () => {
    const times = 100;
    const results = repeat(() => 'a', { times });

    expect(results.join('')).toBe('a'.repeat(times));
  });

  it('should take iterator correctly', () => {
    const times = 100;

    const results = repeat((step) => step + 1, { times });

    expect(results[times - 1]).toBe(times);
  });
});

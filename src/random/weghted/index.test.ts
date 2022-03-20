import { nameOf } from '../../../test/utils/nameOf';
import { ERROR_NO_VALID_WEIGHTS, ERROR_VALUES_HAS_NON_ARRAY_ITEM, ERROR_VALUES_HAS_NON_FINITE_WEIGHT, ERROR_VALUES_IS_EMPTY } from './constants';
import { weighted, WeightedEntry } from './index';

/**
 * Tests are based on Oleksii Trekhleb's implementation of weighted
 * random.
 *
 * See:
 *
 *   - https://dev.to/trekhleb/weighted-random-algorithm-in-javascript-1pdc
 *   - https://github.com/trekhleb/javascript-algorithms/blob/99945f30deba9fb0ec5077e07ed093d0a531f1c1/src/algorithms/statistics/weighted-random/__test__/weightedRandom.test.js
 */
describe(nameOf(weighted), () => {
  it('should throw error if values array has no values', () => {
    expect(() => {
      const error = weighted([]);
    }).toThrow(ERROR_VALUES_IS_EMPTY);
  });

  it('should throw error if values array includes non-weighted value', () => {
    expect(() => {
      // @ts-ignore
      const error = weighted([['a', 1], 'b']);
    }).toThrow(ERROR_VALUES_HAS_NON_ARRAY_ITEM);
  });

  it('should throw error if values array includes entry with invalid weight', () => {
    expect(() => {
      // @ts-ignore
      const error = weighted([['a', 1], ['b', NaN]]);
    }).toThrow(ERROR_VALUES_HAS_NON_FINITE_WEIGHT);

    expect(() => {
      // @ts-ignore
      const error = weighted([['a', 1], ['b', -Infinity]]);
    }).toThrow(ERROR_VALUES_HAS_NON_FINITE_WEIGHT);

    expect(() => {
      // @ts-ignore
      const error = weighted([['a', 1], ['b', Infinity]]);
    }).toThrow(ERROR_VALUES_HAS_NON_FINITE_WEIGHT);

    expect(() => {
      // @ts-ignore
      const error = weighted([['a', 1], ['b', undefined]]);
    }).toThrow(ERROR_VALUES_HAS_NON_FINITE_WEIGHT);

    expect(() => {
      // @ts-ignore
      const error = weighted([['a', 1], ['b', null]]);
    }).toThrow(ERROR_VALUES_HAS_NON_FINITE_WEIGHT);

    expect(() => {
      // @ts-ignore
      const error = weighted([['a', 1], ['b', 'weight!']]);
    }).toThrow(ERROR_VALUES_HAS_NON_FINITE_WEIGHT);

    expect(() => {
      // @ts-ignore
      const error = weighted([['a', 1], ['b', '42']]);
    }).toThrow(ERROR_VALUES_HAS_NON_FINITE_WEIGHT);
  });

  it('should throw error if total weight is 0', () => {
    expect(() => {
      const error = weighted([['a', 0], ['b', 0]]);
    }).toThrow(ERROR_NO_VALID_WEIGHTS)
  });

  it('should correctly do random selection based on wights in straightforward cases', () => {
    expect(weighted([['a', 1], ['b', 0], ['c', 0]])).toEqual('a');
    expect(weighted([['a', 0], ['b', 1], ['c', 0]])).toEqual('b');
    expect(weighted([['a', 0], ['b', 0], ['c', 1]])).toEqual('c');
    expect(weighted([['a', 0], ['b', 1], ['c', 1]])).not.toEqual('a');
    expect(weighted([['a', 1], ['b', 0], ['c', 1]])).not.toEqual('b');
    expect(weighted([['a', 1], ['b', 1], ['c', 0]])).not.toEqual('c');
  });

  it('should correctly do random selection based on wights', () => {
    const attempts = 1000;
    const threshold = 50;
    const entries: WeightedEntry<string>[] = [
      ['a', 0.1],
      ['b', 0.3],
      ['c', 0.6],
    ];

    const values = entries.map((entry) => entry[0]);
    const weights = entries.map((entry) => entry[1]);

    const counter = [];

    for (let i = 0; i < attempts; i += 1) {
      const value = weighted(entries);
      const index = values.indexOf(value);

      if (!counter[index]) {
        counter[index] = 1;
      } else {
        counter[index] += 1;
      }
    }

    for (let i = 0; i < entries.length; i++) {
      expect(counter[i]).toBeGreaterThan(
        attempts * weights[i] - threshold
      );

      expect(counter[i]).toBeLessThan(
        attempts * weights[i] + threshold
      );
    }
  });
});

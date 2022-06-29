import { nameOf } from '../../../test/utils/nameOf';
import {
  ERROR_MUST_BE_NON_EMPTY_ARRAY,
  ERROR_MUST_HAVE_GET_KEY_FUNCTION,
} from './constants';
import { byKeys } from './index';

describe(nameOf(byKeys), () => {
  it('should create a comparator function for a custom order', () => {
    const comparator = byKeys([1, 2, 3]);

    expect(comparator(1, 3)).toBe(-2);
    expect(comparator(3, 1)).toBe(2);
  });

  it('should sort values in a custom order (numbers)', () => {
    const source = [6, 3, 2, 1, 5, 7, 4, 0, 8, 9]; // pre-shuffled
    const target = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    const result = source.sort(byKeys(target));

    expect(result).toEqual(target);
  });

  it('should sort values in a custom order (number keys objects)', () => {
    type Item = { key: number };

    const source: Item[] = [
      { key: 6 },
      { key: 3 },
      { key: 2 },
      { key: 1 },
      { key: 5 },
      { key: 7 },
      { key: 4 },
      { key: 0 },
      { key: 8 },
      { key: 9 },
    ];

    const target = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    const result = source.sort(byKeys(target, (value) => value.key));

    result.forEach((value, index) => {
      expect(value.key).toBe(target[index]);
    });
  });

  it('should sort values in a custom order (strings)', () => {
    const source = ['apple', 'banana', 'carrot'];

    const target = ['carrot', 'apple', 'banana'];

    const result = source.sort(byKeys(target));

    expect(result).toEqual(target);
  });

  it('should sort values in a custom order (string keys objects)', () => {
    type Item = { key: string };

    const source: Item[] = [
      { key: 'id-6' },
      { key: 'id-3' },
      { key: 'id-2' },
      { key: 'id-1' },
      { key: 'id-5' },
      { key: 'id-7' },
      { key: 'id-4' },
      { key: 'id-0' },
      { key: 'id-8' },
      { key: 'id-9' },
    ];

    const target = [
      'id-9',
      'id-8',
      'id-7',
      'id-6',
      'id-5',
      'id-4',
      'id-3',
      'id-2',
      'id-1',
      'id-0',
    ];

    const result = source.sort(byKeys(target, (value) => value.key));

    result.forEach((value, index) => {
      expect(value.key).toBe(target[index]);
    });
  });

  it('should throw if source array has non-primitive values and getKey function is not provided', () => {
    expect(() => {
      [{ key: 'id-1' }, { key: 'id-2' }].sort(byKeys(['id-999']));
    }).toThrow(ERROR_MUST_HAVE_GET_KEY_FUNCTION);

    // this should not work on array of single element
    expect(() => {
      [{ key: 'id-1' }].sort(byKeys(['id-999']));
    }).not.toThrow();
  });

  it('should throw if order is not non-empty array', () => {
    expect(() => {
      [1, 2, 3].sort(byKeys([]));
    }).toThrow(ERROR_MUST_BE_NON_EMPTY_ARRAY);
  });
});

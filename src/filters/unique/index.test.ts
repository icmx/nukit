import { nameOf } from '../../../test/utils/nameOf';
import { ERROR_NOT_ARRAY } from './constants';
import { unique, byUnique } from './index';

const samples = [
  [
    [1, 1, 2, 3, 5, 5, 5, 5, 5],
    [1, 2, 3, 5],
  ],
  [
    ['uno', 'uno', 'dos'],
    ['uno', 'dos'],
  ],
  [
    [null, null, undefined, undefined, 1, 2, 1],
    [null, undefined, 1, 2],
  ],
];

describe(nameOf(unique), () => {
  it('should throw an error if value is not an array', () => {
    expect(() => {
      // @ts-ignore
      const error = unique(1);
    }).toThrow(ERROR_NOT_ARRAY);

    expect(() => {
      // @ts-ignore
      const error = unique('not an array');
    }).toThrow(ERROR_NOT_ARRAY);
  });

  it('should return empty array if value is empty array', () => {
    expect(unique([])).toEqual([]);
  });

  it('should return array without duplicates', () => {
    samples.forEach(([source, result]) => {
      expect(unique<any>(source)).toEqual(result);
    });
  });
});

describe(nameOf(byUnique), () => {
  it('should return empty array if value is empty array', () => {
    expect([].filter(byUnique)).toEqual([]);
  });

  it('should return array without duplicates', () => {
    samples.forEach(([source, result]) => {
      expect((source as any[]).filter(byUnique)).toEqual(result);
    });
  });
});

import { nameOf } from '../../../test/utils/nameOf';
import { ERROR_NOT_ARRAY } from './constants';
import { uniqie, uniquePredicate } from './index';

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

describe(nameOf(uniqie), () => {
  it('should throw an error if value is not an array', () => {
    expect(() => {
      // @ts-ignore
      const error = uniqie(1);
    }).toThrow(ERROR_NOT_ARRAY);

    expect(() => {
      // @ts-ignore
      const error = uniqie('not an array');
    }).toThrow(ERROR_NOT_ARRAY);
  });

  it('should return empty array if value is empty array', () => {
    expect(uniqie([])).toEqual([]);
  });

  it('should return array without duplicates', () => {
    samples.forEach(([source, result]) => {
      expect(uniqie<any>(source)).toEqual(result);
    });
  });
});

describe(nameOf(uniquePredicate), () => {
  it('should return empty array if value is empty array', () => {
    expect([].filter(uniquePredicate)).toEqual([]);
  });

  it('should return array without duplicates', () => {
    samples.forEach(([source, result]) => {
      expect((source as any[]).filter(uniquePredicate)).toEqual(result);
    });
  });
});

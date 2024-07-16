import { nameOf } from '../../../test/utils/nameOf';
import { ERROR_NOT_BOOLEAN } from './constants';
import { resolvePredicate } from './index';

describe(nameOf(resolvePredicate), () => {
  it('should throw an error if predicate is not a boolean not returns a boolean', () => {
    expect(() => {
      // @ts-ignore
      const error = resolvePredicate(undefined);
    }).toThrow(ERROR_NOT_BOOLEAN);

    expect(() => {
      // @ts-ignore
      const error = resolvePredicate(null);
    }).toThrow(ERROR_NOT_BOOLEAN);

    expect(() => {
      // @ts-ignore
      const error = resolvePredicate(0);
    }).toThrow(ERROR_NOT_BOOLEAN);

    expect(() => {
      // @ts-ignore
      const error = resolvePredicate('');
    }).toThrow(ERROR_NOT_BOOLEAN);
  });

  it('should resolve a boolean value', () => {
    expect(resolvePredicate(false)).toBe(false);
    expect(resolvePredicate(true)).toBe(true);
    expect(resolvePredicate(1 < 2)).toBe(true);
    expect(resolvePredicate(1 > 2)).toBe(false);
  });

  it('should resolve a boolean function value', () => {
    expect(resolvePredicate(() => false)).toBe(false);
    expect(resolvePredicate(() => true)).toBe(true);
    expect(resolvePredicate(() => 1 < 2)).toBe(true);
    expect(resolvePredicate(() => 1 > 2)).toBe(false);
  });
});

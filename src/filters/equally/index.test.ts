import { allOf } from '../allOf';
import { isBoolean } from '../isBoolean';
import { isNumber } from '../isNumber';
import { isString } from '../isString';
import { equally } from './index';

describe(`${equally.name} function`, () => {
  it('should work as classic boolean and operator', () => {
    const falsePredicate = () => false;
    const truePredicate = () => true;

    expect(equally(false, false)).toBe(false);
    expect(equally(false, true)).toBe(false);
    expect(equally(true, false)).toBe(false);
    expect(equally(true, true)).toBe(true);

    expect(equally(falsePredicate, falsePredicate)).toBe(false);
    expect(equally(falsePredicate, truePredicate)).toBe(false);
    expect(equally(truePredicate, falsePredicate)).toBe(false);
    expect(equally(truePredicate, truePredicate)).toBe(true);
  });

  it('should work correctly in real-world cases', () => {
    expect(
      equally(
        1 < 2,
        Math.max(1, 2) === 2,
        'abc' === 'cba'.split('').reverse().join('')
      )
    ).toBe(true);

    expect(
      equally(
        isBoolean(false),
        isNumber(2),
        allOf(['a', 'b', 'c'], isString)
      )
    ).toBe(true);
  });
});

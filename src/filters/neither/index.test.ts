import { allOf } from '../allOf';
import { isBoolean } from '../isBoolean';
import { isNumber } from '../isNumber';
import { isString } from '../isString';
import { neither } from './index';

describe(`${neither.name} function`, () => {
  it('should work as classic boolean and operator', () => {
    const falsePredicate = () => false;
    const truePredicate = () => true;

    expect(neither(false, false)).toBe(false);
    expect(neither(false, true)).toBe(true);
    expect(neither(true, false)).toBe(true);
    expect(neither(true, true)).toBe(true);

    expect(neither(falsePredicate, falsePredicate)).toBe(false);
    expect(neither(falsePredicate, truePredicate)).toBe(true);
    expect(neither(truePredicate, falsePredicate)).toBe(true);
    expect(neither(truePredicate, truePredicate)).toBe(true);
  });

  it('should work correctly in real-world cases', () => {
    expect(
      neither(
        1 > 2,
        Math.max(1, 2) === 2,
        'abc' === 'cba'.split('').join('')
      )
    ).toBe(true);

    expect(
      neither(
        isBoolean('false'),
        isNumber(2),
        allOf(['a', 2, 'c'], isString)
      )
    ).toBe(true);
  });
});

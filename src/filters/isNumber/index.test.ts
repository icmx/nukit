import { createFilterTests } from '../../../test/utils/createFilterTests';
import { nameOf } from '../../../test/utils/nameOf';
import { isNumber } from './index';

describe(nameOf(isNumber), () => {
  it(
    'should return true for number values only',
    createFilterTests(isNumber, {
      number0Mock: true,
      number42Mock: true,
      number42p525Mock: true,
      numberMinus42Mock: true,
      numberMinus42p525Mock: true,
    })
  );

  it('should return true for infinity only if appropriate option is enabled', () => {
    expect(isNumber(-Infinity)).toBe(false);
    expect(isNumber(-Infinity, { allowInfinity: true })).toBe(true);
    expect(isNumber(Infinity)).toBe(false);
    expect(isNumber(Infinity, { allowInfinity: true })).toBe(true);
  });

  it('should return true for nan only if appropriate option is enabled', () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber(NaN, { allowNaN: true })).toBe(true);
  });
});

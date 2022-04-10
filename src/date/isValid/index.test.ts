import { nameOf } from '../../../test/utils/nameOf';
import { isValid } from './index';

describe(nameOf(isValid), () => {
  it('should return false for invalid date values including falsies', () => {
    expect(isValid(-Infinity)).toBe(false);
    expect(isValid(NaN)).toBe(false);
    expect(isValid('not a date')).toBe(false);
    expect(isValid('0x00')).toBe(false);

    expect(isValid('2020-01-01T12')).toBe(false);
    expect(isValid('20/10/2020')).toBe(false);
  });

  it('should return true for falsy values when allowFalsy is set', () => {
    expect(isValid(0, { allowFalsy: true })).toBe(true);
    expect(isValid('', { allowFalsy: true })).toBe(true);
  });

  it('should return true if input string ends with number (wontfix feature)', () => {
    expect(isValid('this is 1')).toBe(true);
  });

  it('should return true for valid date values', () => {
    expect(isValid(1600000000000)).toBe(true);
    expect(isValid('2020')).toBe(true);
    expect(isValid('2020-01')).toBe(true);
    expect(isValid('2020-01-01')).toBe(true);
    expect(isValid('2020-01-01T12:30')).toBe(true);
    expect(isValid('2020-01-01T12:30:15')).toBe(true);
    expect(isValid('2020-01-01T12:30:15.000Z')).toBe(true);
    expect(isValid('Wed Jan 01 2020 12:30:15')).toBe(true);
    expect(isValid('10/20/2020')).toBe(true);
  });
});

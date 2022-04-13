import { nameOf } from '../../../test/utils/nameOf';
import { isValidDate } from './index';

describe(nameOf(isValidDate), () => {
  it('should return false for invalid date values including falsies', () => {
    expect(isValidDate(-Infinity)).toBe(false);
    expect(isValidDate(NaN)).toBe(false);
    expect(isValidDate('not a date')).toBe(false);
    expect(isValidDate('0x00')).toBe(false);

    expect(isValidDate('2020-01-01T12')).toBe(false);
    expect(isValidDate('20/10/2020')).toBe(false);
  });

  it('should return true for falsy values when allowFalsy is set', () => {
    expect(isValidDate(0, { allowFalsy: true })).toBe(true);
    expect(isValidDate('', { allowFalsy: true })).toBe(true);
  });

  it('should return true if input string ends with number (wontfix feature)', () => {
    expect(isValidDate('this is 1')).toBe(true);
  });

  it('should return true for valid date values', () => {
    expect(isValidDate(1600000000000)).toBe(true);
    expect(isValidDate('2020')).toBe(true);
    expect(isValidDate('2020-01')).toBe(true);
    expect(isValidDate('2020-01-01')).toBe(true);
    expect(isValidDate('2020-01-01T12:30')).toBe(true);
    expect(isValidDate('2020-01-01T12:30:15')).toBe(true);
    expect(isValidDate('2020-01-01T12:30:15.000Z')).toBe(true);
    expect(isValidDate('Wed Jan 01 2020 12:30:15')).toBe(true);
    expect(isValidDate('10/20/2020')).toBe(true);
  });
});

import { MOCKS } from '../../../test/constants';
import { nameOf } from '../../../test/utils/nameOf';
import { isBoolean } from '../isBoolean';
import { isNumber } from '../isNumber';
import { isString } from '../isString';
import { isUndefined } from '../isUndefined';
import { oneOf } from './index';

const { arrayEmptyMock, arrayFalse42JohnDoeMock } = MOCKS;

describe(nameOf(oneOf), () => {
  it('should throw error if values are not in array', () => {
    expect(() => {
      oneOf(undefined as any, isUndefined);
    }).toThrow();
  });

  it('should return false for empty array', () => {
    expect(oneOf(arrayEmptyMock, isUndefined)).toBe(false);
  });

  it('should return false for empty array (custom filter)', () => {
    expect(oneOf(arrayEmptyMock, (value) => value === undefined)).toBe(
      false
    );
  });

  it('should return true if at least one of values in array meets filter condition', () => {
    expect(oneOf(arrayFalse42JohnDoeMock, isBoolean)).toBe(true);
    expect(oneOf(arrayFalse42JohnDoeMock, isNumber)).toBe(true);
    expect(oneOf(arrayFalse42JohnDoeMock, isString)).toBe(true);

    expect(oneOf(arrayFalse42JohnDoeMock, isUndefined)).toBe(false);
  });

  it('should return true if at least one of values in array meets filter condition (custom filters)', () => {
    expect(
      oneOf(
        arrayFalse42JohnDoeMock,
        (value) => typeof value === 'boolean'
      )
    ).toBe(true);

    expect(
      oneOf(
        arrayFalse42JohnDoeMock,
        (value) => typeof value === 'number'
      )
    ).toBe(true);

    expect(
      oneOf(
        arrayFalse42JohnDoeMock,
        (value) => typeof value === 'string'
      )
    ).toBe(true);

    expect(
      oneOf(arrayFalse42JohnDoeMock, (value) => value === undefined)
    ).toBe(false);
  });
});

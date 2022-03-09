import { MOCKS } from '../../../test/constants';
import { isNumber } from '../isNumber';
import { isPrimitive } from '../isPrimitive';
import { isUndefined } from '../isUndefined';
import { allOf } from './index';

const { arrayEmptyMock, arrayFalse42JohnDoeMock } = MOCKS;

describe(`${allOf.name} function`, () => {
  it('should throw error if values are not in array', () => {
    expect(() => {
      // @ts-ignore
      allOf(undefined, isUndefined);
    }).toThrow();
  });

  it('should return false for empty array', () => {
    expect(allOf(arrayEmptyMock, isUndefined)).toBe(false);
  });

  it('should return false for empty array (custom filter)', () => {
    expect(allOf(arrayEmptyMock, (value) => value === undefined)).toBe(
      false
    );
  });

  it('should return true if all values in array meets filter condition', () => {
    expect(allOf(arrayFalse42JohnDoeMock, isPrimitive)).toBe(true);

    expect(allOf(arrayFalse42JohnDoeMock, isNumber)).toBe(false);
  });

  it('should return true if all values in array meets filter condition (custom filters)', () => {
    expect(
      allOf(arrayFalse42JohnDoeMock, (value) => {
        return (
          typeof value === 'boolean' ||
          typeof value === 'number' ||
          typeof value === 'string'
        );
      })
    ).toBe(true);

    expect(
      allOf(arrayFalse42JohnDoeMock, (value) => value === undefined)
    ).toBe(false);
  });
});

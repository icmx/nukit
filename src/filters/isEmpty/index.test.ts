import { createFilterTests } from '../../../test/utils/createFilterTests';
import { nameOf } from '../../../test/utils/nameOf';
import { ERROR_EMPTY_VALUES_NOT_ARRAY } from './constants';
import { isEmpty } from './index';

describe(nameOf(isEmpty), () => {
  it('should throw an error if custom empty values is not an array', () => {
    expect(() => {
      // @ts-ignore
      const error = isEmpty(42, { emptyValues: null });
    }).toThrow(ERROR_EMPTY_VALUES_NOT_ARRAY);

    expect(() => {
      // @ts-ignore
      const error = isEmpty(42, { emptyValues: '' });
    }).toThrow(ERROR_EMPTY_VALUES_NOT_ARRAY);
  });

  it(
    'should return true only if value is undefined, null, empty string, empty array or empty object',
    createFilterTests(isEmpty, {
      undefinedMock: true,
      nullMock: true,
      numberNaNMock: true,
      stringEmptyMock: true,
      arrayEmptyMock: true,
      objectEmptyMock: true,
      objectMathMock: true,
      objectErrorMock: true,
    })
  );

  it('should return true for custom empty values', () => {
    const emptyValues = [false, 0, 'none'];

    emptyValues.forEach((emptyValue) => {
      expect(isEmpty(emptyValue, { emptyValues })).toBe(true);
    });
  });

  it('should return false if empty values is manually unset', () => {
    expect(isEmpty(NaN, { emptyValues: [] })).toBe(false);
    expect(isEmpty('', { emptyValues: [] })).toBe(false);
  });
});

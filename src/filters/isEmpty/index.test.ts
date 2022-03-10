import { createFilterTests } from '../../../test/utils/createFilterTests';
import { isEmpty } from './index';

describe(`${isEmpty.name} function`, () => {
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

    emptyValues.forEach(emptyValue => {
      expect(isEmpty(emptyValue, { emptyValues })).toBe(true);
    });
  });

  it('should return false if empty values is manually unset', () => {
    expect(isEmpty(NaN, { emptyValues: [] })).toBe(false);
    expect(isEmpty('', { emptyValues: [] })).toBe(false);
  });

  it('should throw an error if custom empty values is not an array', () => {
    expect(() => {
      // @ts-ignore
      const error = isEmpty(42, { emptyValues: null });
    }).toThrow();

    expect(() => {
      // @ts-ignore
      const error = isEmpty(42, { emptyValues: '' });
    }).toThrow();
  });
});

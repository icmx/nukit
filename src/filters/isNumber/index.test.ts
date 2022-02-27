import { createFilterTests } from '../../../test/utils/createFilterTests';
import { isNumber } from './index';

describe(`${isNumber.name} function`, () => {
  it(
    'should return true for number values only',
    createFilterTests(isNumber, {
      number0Mock: true,
      number42Mock: true,
      number42p525Mock: true,
      numberMinus42Mock: true,
      numberMinus42p525Mock: true,
      numberNaNMock: true,
      numberInfinityMock: true,
    })
  );
});

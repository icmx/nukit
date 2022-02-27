import { createFilterTests } from '../../../test/utils/createFilterTests';
import { isBoolean } from './index';

describe(`${isBoolean.name} function`, () => {
  it(
    'should return true for boolean values only',
    createFilterTests(isBoolean, {
      booleanFalseMock: true,
      booleanTrueMock: true,
    })
  );
});

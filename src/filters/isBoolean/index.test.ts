import { createFilterTests } from '../../../test/utils/createFilterTests';
import { nameOf } from '../../../test/utils/nameOf';
import { isBoolean } from './index';

describe(nameOf(isBoolean), () => {
  it(
    'should return true for boolean values only',
    createFilterTests(isBoolean, {
      booleanFalseMock: true,
      booleanTrueMock: true,
    })
  );
});

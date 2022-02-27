import { createFilterTests } from '../../../test/utils/createFilterTests';
import { isArray } from './index';

describe(`${isArray.name} function`, () => {
  it(
    'should return true only for array values',
    createFilterTests(isArray, {
      arrayEmptyMock: true,
      arrayUndefinedMock: true,
      arrayFalse42JohnDoeMock: true,
    })
  );
});

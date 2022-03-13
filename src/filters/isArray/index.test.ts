import { createFilterTests } from '../../../test/utils/createFilterTests';
import { nameOf } from '../../../test/utils/nameOf';
import { isArray } from './index';

describe(nameOf(isArray), () => {
  it(
    'should return true only for array values',
    createFilterTests(isArray, {
      arrayEmptyMock: true,
      arrayUndefinedMock: true,
      arrayFalse42JohnDoeMock: true,
    })
  );
});

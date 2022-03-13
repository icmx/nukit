import { createFilterTests } from '../../../test/utils/createFilterTests';
import { nameOf } from '../../../test/utils/nameOf';
import { isNull } from './index';

describe(nameOf(isNull), () => {
  it(
    'should return true for null value only',
    createFilterTests(isNull, {
      nullMock: true,
    })
  );
});

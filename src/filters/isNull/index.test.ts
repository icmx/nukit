import { createFilterTests } from '../../../test/utils/createFilterTests';
import { isNull } from './index';

describe(`${isNull.name} function`, () => {
  it(
    'should return true for null value only',
    createFilterTests(isNull, {
      nullMock: true,
    })
  );
});

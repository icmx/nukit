import { createFilterTests } from '../../../test/utils/createFilterTests';
import { isEmpty } from './index';

describe(`${isEmpty.name} function`, () => {
  it(
    'should return true only if value is undefined, null, empty string, empty array or empty object',
    createFilterTests(isEmpty, {
      undefinedMock: true,
      nullMock: true,
      stringEmptyMock: true,
      arrayEmptyMock: true,
      objectEmptyMock: true,
      objectMathMock: true,
      objectErrorMock: true
    })
  );
});

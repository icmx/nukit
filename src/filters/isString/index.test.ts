import { createFilterTests } from '../../../test/utils/createFilterTests';
import { nameOf } from '../../../test/utils/nameOf';
import { isString } from './index';

describe(nameOf(isString), () => {
  it(
    'should return true for string value only',
    createFilterTests(isString, {
      stringEmptyMock: true,
      string42Mock: true,
      string42p525Mock: true,
      stringLatinMock: true,
      stringNonlatinMock: true,
      stringEmojiMock: true,
    })
  );
});

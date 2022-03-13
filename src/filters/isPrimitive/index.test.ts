import { createFilterTests } from '../../../test/utils/createFilterTests';
import { nameOf } from '../../../test/utils/nameOf';
import { isPrimitive } from './index';

describe(nameOf(isPrimitive), () => {
  it(
    'should return true only for null, undefined, boolean, number or string values',
    createFilterTests(isPrimitive, {
      undefinedMock: true,
      nullMock: true,
      booleanFalseMock: true,
      booleanTrueMock: true,
      number0Mock: true,
      number42Mock: true,
      number42p525Mock: true,
      numberMinus42Mock: true,
      numberMinus42p525Mock: true,
      numberNaNMock: true,
      numberInfinityMock: true,
      stringEmptyMock: true,
      string42Mock: true,
      string42p525Mock: true,
      stringLatinMock: true,
      stringNonlatinMock: true,
      stringEmojiMock: true,
    })
  );
});

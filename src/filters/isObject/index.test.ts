import { createFilterTests } from '../../../test/utils/createFilterTests';
import { nameOf } from '../../../test/utils/nameOf';
import { isObject } from './index';

describe(nameOf(isObject), () => {
  it(
    'should return true only for object values',
    createFilterTests(isObject, {
      objectEmptyMock: true,
      objectFooUndefinedMock: true,
      objectFoo42Mock: true,
      objectFooBarMock: true,
      objectMathMock: true,
      objectErrorMock: true,
    })
  );
});

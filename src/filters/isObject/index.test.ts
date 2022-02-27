import { createFilterTests } from '../../../test/utils/createFilterTests';
import { isObject } from './index';

describe(`${isObject} function`, () => {
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

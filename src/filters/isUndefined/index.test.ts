import { createFilterTests } from '../../../test/utils/createFilterTests';
import { nameOf } from '../../../test/utils/nameOf';
import { isUndefined } from './index';

describe(nameOf(isUndefined), () => {
  it(
    'should return true for undefined value only',
    createFilterTests(isUndefined, {
      undefinedMock: true,
    })
  );

  it('should return true for undefined values (realworld cases)', () => {
    const arrayMock = [] as any;
    const objectMock = {} as any;
    const functionMock = () => {};

    expect(isUndefined(arrayMock[42])).toBe(true);
    expect(isUndefined(objectMock['nonExistingKey'])).toBe(true);
    expect(isUndefined(functionMock())).toBe(true);
  });
});

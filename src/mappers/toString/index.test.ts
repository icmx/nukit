import { MOCKS } from '../../../test/constants';
import { toString } from './index'

describe(`${toString.name} function`, () => {
  it('should pass a value if it is a string already', () => {
    expect(toString(MOCKS.stringEmptyMock)).toBe(MOCKS.stringEmptyMock);
    expect(toString(MOCKS.stringLatinMock)).toBe(MOCKS.stringLatinMock);
  });

  it('should map undefined value as literal undefined string', () => {
    expect(toString(MOCKS.undefinedMock)).toBe('undefined');
  });

  it('should map null value as literal null string', () => {
    expect(toString(MOCKS.nullMock)).toBe('null');
  });

  it('shoul map number values just as strings', () => {
    expect(toString(MOCKS.number0Mock)).toBe(MOCKS.number0Mock.toString());
    expect(toString(MOCKS.number42Mock)).toBe(MOCKS.number42Mock.toString());
    expect(toString(MOCKS.number42p525Mock)).toBe(MOCKS.number42p525Mock.toString());
    expect(toString(MOCKS.numberMinus42Mock)).toBe(MOCKS.numberMinus42Mock.toString());
    expect(toString(MOCKS.numberMinus42p525Mock)).toBe(MOCKS.numberMinus42p525Mock.toString());
    expect(toString(MOCKS.numberNaNMock)).toBe(MOCKS.numberNaNMock.toString());
    expect(toString(MOCKS.numberInfinityMock)).toBe(MOCKS.numberInfinityMock.toString());
  });

  it('should map undefined value as actual undefined value in JSON mode', () => {
    expect(toString(MOCKS.undefinedMock, { useToJSON: true })).toBe(MOCKS.undefinedMock);
  });

  it('should map null value as actual null value in JSON mode', () => {
    expect(toString(MOCKS.nullMock, { useToJSON: true })).toBe('null');
  });

  it('should map object into a JSON  string', () => {
    expect(toString(MOCKS.objectFooBarMock, { useToJSON: true })).toBe(
      JSON.stringify(MOCKS.objectFooBarMock)
    );
  });

  it('should pass handler args appropriately', () => {
    const toStringHandlerArgs: any[] = [16];

    expect(toString(MOCKS.number42Mock, { handlerArgs: toStringHandlerArgs })).toBe(
      MOCKS.number42Mock.toString(16)
    );

    const toJSONHandlerArgs: any[] = [null, 2];

    expect(
      toString(MOCKS.objectFooBarMock, {
        handlerArgs: toJSONHandlerArgs,
        useToJSON: true,
      })
    ).toBe(JSON.stringify(MOCKS.objectFooBarMock, ...toJSONHandlerArgs));
  });
});

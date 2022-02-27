import { MOCKS } from '../../../test/constants';
import { toBoolean } from './index';

describe(`${toBoolean.name} function`, () => {
  it('should pass already boolean values', () => {
    expect(toBoolean(MOCKS.booleanFalseMock)).toBe(false);
    expect(toBoolean(MOCKS.booleanTrueMock)).toBe(true);
  });

  it('should treat string false and true as boolean false and true by default', () => {
    expect(toBoolean('false')).toBe(false);
    expect(toBoolean('true')).toBe(true);
  });

  it('should treat unknown values as undefined by default', () => {
    expect(toBoolean(0)).toBe(undefined);
  });

  it('should throw error if fallback option is unset', () => {
    const customToBoolean = (value: unknown): value is boolean =>
      toBoolean(value, { onFallback: undefined });

    expect(() => {
      customToBoolean(0);
    }).toThrow();
  });

  it('should return exact value as specified in fallback if set', () => {
    const customToBoolean = (value: unknown): value is boolean =>
      toBoolean(value, { onFallback: (value) => `Unknown: ${value}` });

    expect(customToBoolean(0)).toBe(`Unknown: 0`);
  });

  it('should treat custom false and true values appropriately', () => {
    const customToBoolean = (value: unknown): value is boolean =>
      toBoolean(value, { falseValues: ['no'], trueValues: ['yes'] });

    expect(customToBoolean('no')).toBe(false);
    expect(customToBoolean('yes')).toBe(true);
  });
});

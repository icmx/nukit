import { nameOf } from '../../../test/utils/nameOf';
import { toBoolean } from './index';

describe(nameOf(toBoolean), () => {
  it('should pass already boolean values', () => {
    expect(toBoolean(false)).toBe(false);
    expect(toBoolean(true)).toBe(true);
  });

  it('should treat string false and true as boolean false and true by default', () => {
    expect(toBoolean('false')).toBe(false);
    expect(toBoolean('true')).toBe(true);
  });

  it('should treat unknown values as undefined by default', () => {
    expect(toBoolean(0)).toBe(undefined);
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

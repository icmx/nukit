import { nameOf } from '../../../test/utils/nameOf';
import { FallbackHandler } from '../../types/FallbackHandler';
import { toNumber } from './index';

describe(nameOf(toNumber), () => {
  it('should return undefined if value cannot be mapped into a number by default', () => {
    expect(toNumber(null)).toBe(undefined);
    expect(toNumber('two')).toBe(undefined);
    expect(toNumber({})).toBe(undefined);
  });

  it('should return undefined if values contains parseable numbers but entirely not numbers', () => {
    expect(toNumber('42ab')).toBe(undefined);
    expect(toNumber('ab42')).toBe(undefined);
  });

  it('should parse untouched floats by default', () => {
    expect(toNumber('42.525')).toBe(42.525);
  });

  it('should threat float handlers appropriately', () => {
    expect(toNumber('42.525', { floatHandler: 'ceil' })).toBe(43);
    expect(toNumber('42.525', { floatHandler: 'floor' })).toBe(42);
    expect(toNumber('42.525', { floatHandler: 'round' })).toBe(43);
    expect(toNumber('42.525', { floatHandler: 'trunc' })).toBe(42);
  });

  it('should return undefined by fallback when float value parsed', () => {
    expect(toNumber('42.525', { floatHandler: 'fallback' })).toBe(
      undefined
    );
  });

  it('should handle custom fallback correctly', () => {
    const customFallbackValue = Infinity;
    const customFallback: FallbackHandler = () => customFallbackValue;

    expect(toNumber('42ab', { onFallback: customFallback })).toBe(
      customFallbackValue
    );

    expect(toNumber('ab42', { onFallback: customFallback })).toBe(
      customFallbackValue
    );

    expect(toNumber('42.525', { onFallback: customFallback })).toBe(
      42.525
    );
  });
});

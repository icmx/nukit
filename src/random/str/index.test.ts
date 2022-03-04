import { str } from './index';

describe(`${str.name} function`, () => {
  it('should calculate result value length correctly', () => {
    for (let i = 0; i < 10; i++) {
      const value = str({ minLength: 10, maxLength: 100 });

      expect(value.length).toBeGreaterThanOrEqual(10);
      expect(value.length).toBeLessThanOrEqual(100);
    }

    const exact = str({ minLength: 10, maxLength: 10 });
    expect(exact.length).toBe(10);
  });
});

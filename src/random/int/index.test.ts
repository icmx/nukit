import { int } from './index';

describe(`${int.name} function`, () => {
  it('should return integer value in specified range inclusive', () => {
    const results: boolean[] = [];
    const min = -10;
    const max = 10;

    for (let i = 0; i < 1_000_000; i++) {
      const result = int({ min, max });
      results.push(result >= min && result <= max);
    }

    expect(results.every((result) => result === true)).toBe(true);
  });

  it('should throw error when min or max option is not safe integer value', () => {
    expect(() => {
      const error = int({ min: -Infinity, max: Infinity });
    }).toThrow();

    expect(() => {
      const error = int({ min: NaN, max: 1 });
    }).toThrow();

    expect(() => {
      const error = int({ min: 0, max: NaN });
    }).toThrow();
  });

  it('should throw error when min option is greater than max', () => {
    expect(() => {
      const error = int({ min: 43, max: 42 });
    }).toThrow();
  });
});

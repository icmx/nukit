import { float } from './index';

describe(`${float.name}`, () => {
  it('should return random float value from 0 (inclusive) to 1 (exclusive)', () => {
    const results: boolean[] = [];

    for (let i = 0; i < 1_000_000; i++) {
      const result = float();
      results.push(result >= 0 && result < 1);
    }

    expect(results.every((result) => result === true)).toBe(true);
  });
});

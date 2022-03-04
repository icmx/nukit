import { shuffle } from './index';

describe(`${shuffle.name} function`, () => {
  it('should shuffle array', () => {
    const source = ['apple', 'banana', 'carrot'];
    const results: boolean[] = [];

    for (let i = 0; i < 1000; i++) {
      const target = shuffle(source);
      results.push(target.every((item) => source.includes(item)));
    }

    expect(results.every((result) => result === true)).toBe(true);
  });
});

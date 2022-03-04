import { WORD_CHARS } from '../../constants';
import { char } from './index';

describe(`${char.name} function`, () => {
  it('should return random character from specified alphabet', () => {
    const alphabet = WORD_CHARS;
    const results: boolean[] = [];

    for (let i = 0; i < 1_000_000; i++) {
      const result = char({ alphabet });
      results.push(alphabet.includes(result));
    }

    expect(results.every((result) => result === true)).toBe(true);
  });

  it('should throw error when alphabet option is empty', () => {
    expect(() => {
      const error = char({ alphabet: '' });
    }).toThrow();
  });
});

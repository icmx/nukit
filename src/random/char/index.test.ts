import { nameOf } from '../../../test/utils/nameOf';
import { WORD_CHARS } from '../../constants';
import { ERROR_ALPHABET_IS_EMPTY } from './constants';
import { char } from './index';

describe(nameOf(char), () => {
  it('should throw error when alphabet option is empty', () => {
    expect(() => {
      const error = char({ alphabet: '' });
    }).toThrow(ERROR_ALPHABET_IS_EMPTY);
  });

  it('should return random character from specified alphabet', () => {
    const alphabet = WORD_CHARS;
    const results: boolean[] = [];

    for (let i = 0; i < 1000; i++) {
      const result = char({ alphabet });
      results.push(alphabet.includes(result));
    }

    expect(results.every((result) => result === true)).toBe(true);
  });
});

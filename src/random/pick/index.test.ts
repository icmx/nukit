import { nameOf } from '../../../test/utils/nameOf';
import { pick } from './index';

describe(nameOf(pick), () => {
  it('should return same value from array with one item', () => {
    expect(pick(['apple'])).toBe('apple');
  });

  it('should return one random item from array provided', () => {
    const result = pick(['apple', 'banana', 'carrot']);
    const includes =
      result.includes('apple') ||
      result.includes('banana') ||
      result.includes('carrot');

    expect(includes).toBe(true);
  });

  it('should throw an error when array to pick from is empty', () => {
    expect(() => {
      const error = pick([]);
    }).toThrow();
  });
});

import { nameOf } from '../../../test/utils/nameOf';
import { ERROR_VALUES_NOT_ARRAY } from './constants';
import { shuffle } from './index';

describe(nameOf(shuffle), () => {
  it('should throw an error if values are not array', () => {
    expect(() => {
      // @ts-ignore
      const error = shuffle(undefined);
    }).toThrow(ERROR_VALUES_NOT_ARRAY);

    expect(() => {
      // @ts-ignore
      const error = shuffle(null);
    }).toThrow(ERROR_VALUES_NOT_ARRAY);

    expect(() => {
      // @ts-ignore
      const error = shuffle('');
    }).toThrow(ERROR_VALUES_NOT_ARRAY);
  });

  it('should shuffle array (numbers)', () => {
    const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    for (let i = 0; i < 1_000; i++) {
      const target = shuffle(source);

      const ainb = source.every((item) => target.includes(item));
      const bina = target.every((item) => source.includes(item));

      expect(ainb).toBe(true);
      expect(bina).toBe(true);
    }
  });

  it('should shuffle array (strings)', () => {
    const source = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    for (let i = 0; i < 1_000; i++) {
      const target = shuffle(source);

      const ainb = source.every((item) => target.includes(item));
      const bina = target.every((item) => source.includes(item));

      expect(ainb).toBe(true);
      expect(bina).toBe(true);
    }
  });
});

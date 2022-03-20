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

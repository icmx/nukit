import { nameOf } from '../../../test/utils/nameOf';
import { bool } from './index';

describe(nameOf(bool), () => {
  it('should return only false values or true values when chance is 0 or 1', () => {
    const falseOnlys: boolean[] = [];
    const trueOnlys: boolean[] = [];

    for (let i = 0; i < 100; i++) {
      falseOnlys.push(bool({ chance: 0 }));
      trueOnlys.push(bool({ chance: 1 }));
    }

    expect(falseOnlys.find((value) => value === true)).toBeUndefined();
    expect(trueOnlys.find((value) => value === false)).toBeUndefined();
  });

  it('should throw an error when chance is not a float number between 0 and 1 inclusively', () => {
    expect(() => {
      const error = bool({ chance: -1 });
    }).toThrow();

    expect(() => {
      const error = bool({ chance: 2 });
    }).toThrow();

    expect(() => {
      const error = bool({ chance: NaN });
    }).toThrow();

    expect(() => {
      const error = bool({ chance: -Infinity });
    }).toThrow();

    expect(() => {
      const error = bool({ chance: Infinity });
    }).toThrow();
  });
});

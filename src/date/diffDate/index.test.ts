import { nameOf } from '../../../test/utils/nameOf';
import { ERROR_INVALID_DATE } from './constants';
import { diffDate } from './index';

describe(nameOf(diffDate), () => {
  it('should throw an error if input dates are invalid', () => {
    expect(() => {
      const error = diffDate('not a date', 'not a date too!');
    }).toThrow(ERROR_INVALID_DATE);
  });

  it('should calculate absolute values correctly', () => {
    const from = new Date('2020-01-01T12:30:15');
    const to = new Date('2022-01-01T12:35:45');

    const result = diffDate(from, to);

    console.log(result);

    expect(result).toEqual({
      total: {
        milliseconds: 63158730000,
        seconds: 63158730,
        minutes: 1052646,
        hours: 17544,
        days: 731,
        months: 24,
        years: 2,
      },
      remain: {
        milliseconds: 0,
        seconds: 30,
        minutes: 6,
        hours: 0,
        days: 0,
        months: 0,
        years: 2,
      },
      raw: 63158730000,
      inversed: false,
    });
  });
});

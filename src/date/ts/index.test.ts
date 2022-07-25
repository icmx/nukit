import { nameOf } from '../../../test/utils/nameOf';
import { ts } from './index';

describe(nameOf(ts), () => {
  it('should return current date milliseconds by default', () => {
    jest.useFakeTimers().setSystemTime(new Date().getTime());
    const currentTs = ts();

    expect(currentTs).toBe(new Date().getTime());
  });

  it('should return specified date milliseconds if from options is set', () => {
    const customDate = new Date('2020-02-02');
    const customTs = ts({ from: customDate });

    expect(customTs).toBe(customDate.getTime());
  });

  it('should handle milliseconds appropriately', () => {
    jest.useFakeTimers().setSystemTime(new Date().getTime());
    const currentNow = ts();

    expect(ts({ milliseconds: 'ceil' })).toBe(Math.ceil(currentNow / 1000));
    expect(ts({ milliseconds: 'floor' })).toBe(Math.floor(currentNow / 1000));
    expect(ts({ milliseconds: 'round' })).toBe(Math.round(currentNow / 1000));
    expect(ts({ milliseconds: 'trunc' })).toBe(Math.trunc(currentNow / 1000));
  });
});

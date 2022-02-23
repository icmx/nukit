import { main } from './index';

describe('main function', () => {
  it('should return numeric zero when ends', () => {
    const end = main();

    expect(end).toBe(0);
  });
});

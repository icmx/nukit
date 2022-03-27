import { nameOf } from '../../../test/utils/nameOf';
import { repeat } from '../../mappers/repeat';
import { createMulberry32RNG } from './index';

describe(nameOf(createMulberry32RNG), () => {
  it('should create a pseudo-random numbers generator which generates predictable series of numbers', () => {
    const rng = createMulberry32RNG(42);

    const results = repeat(rng, { times: 1_000_000 });

    expect(results[9]).toBe(0.4723170551005751);
    expect(results[99]).toBe(0.47539179865270853);
    expect(results[999]).toBe(0.6425111389253289);
    expect(results[9_999]).toBe(0.6580179932061583);
    expect(results[99_999]).toBe(0.9818388000130653);
    expect(results[999_999]).toBe(0.7716141713317484);
  });
});

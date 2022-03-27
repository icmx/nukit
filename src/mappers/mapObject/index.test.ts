import { nameOf } from '../../../test/utils/nameOf';
import { isNull } from '../../filters/isNull';
import { mapObject } from './index';

describe(nameOf(mapObject), () => {
  it('should map object properties (non-recursive case)', () => {
    const exampleSource = {
      a: 'hello',
      b: null,
      c: null,
      d: {
        a: null,
        b: 2,
      },
      e: null,
    };

    const exampleResult = {
      a: 'hello',
      b: true,
      c: true,
      d: {
        a: null,
        b: 2,
      },
      e: true,
    };

    expect(
      mapObject(exampleSource, ([key, value]) =>
        isNull(value) ? [key, true] : [key, value]
      )
    ).toEqual(exampleResult);
  });

  it('should map object properties (recursive case)', () => {
    const exampleSource = {
      a: 'hello',
      b: null,
      c: null,
      d: {
        a: null,
        b: 2,
        c: {
          a: false,
          b: null,
          c: 'test',
        },
      },
      e: null,
    };

    const exampleResult = {
      a: 'hello',
      b: true,
      c: true,
      d: {
        a: true,
        b: 2,
        c: {
          a: false,
          b: true,
          c: 'test',
        },
      },
      e: true,
    };

    expect(
      mapObject(
        exampleSource,
        ([key, value]) => (isNull(value) ? [key, true] : [key, value]),
        { recursive: true }
      )
    ).toEqual(exampleResult);
  });
});

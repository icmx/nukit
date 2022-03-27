import { nameOf } from '../../../test/utils/nameOf';
import { isNull } from '../../filters/isNull';
import { filterObject } from './index';

describe(nameOf(filterObject), () => {
  it('should filter object properties (non-recursive case)', () => {
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
      d: {
        a: null,
        b: 2,
      },
    };

    expect(
      filterObject(exampleSource, ([key, value]) => !isNull(value))
    ).toEqual(exampleResult);
  });

  it('should filter object properties (recursive case)', () => {
    const exampleSource = {
      a: 'hello',
      b: null,
      c: null,
      d: {
        a: null,
        b: 2,
        c: {
          a: 'test',
          b: null,
        },
      },
      e: null,
      f: 2,
    };

    const exampleResult = {
      a: 'hello',
      d: {
        b: 2,
        c: {
          a: 'test',
        },
      },
      f: 2,
    };

    expect(
      filterObject(exampleSource, ([, value]) => !isNull(value), {
        recursive: true,
      })
    ).toEqual(exampleResult);
  });
});

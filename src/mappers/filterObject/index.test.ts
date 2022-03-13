import { nameOf } from '../../../test/utils/nameOf';
import { isNull } from '../../filters/isNull';
import { filterObject } from './index';

describe(nameOf(filterObject), () => {
  it('should filter object properties', () => {
    const exampleSource = {
      a: 'hello',
      b: null,
      c: null,
      d: {
        f: null,
        g: 2,
      },
      e: null,
    };

    const exampleResult = {
      a: 'hello',
      d: {
        f: null,
        g: 2,
      },
    };

    expect(
      filterObject(exampleSource, (entry) => !isNull(entry[1]))
    ).toEqual(exampleResult);
  });
});

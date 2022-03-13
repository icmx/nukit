import { nameOf } from '../../../test/utils/nameOf';
import { isNull } from '../../filters/isNull';
import { mapObject } from './index';

describe(nameOf(mapObject), () => {
  it('should map object properties', () => {
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
      b: true,
      c: true,
      d: {
        f: null,
        g: 2,
      },
      e: true,
    };

    expect(
      mapObject(exampleSource, (entry) =>
        isNull(entry[1]) ? [entry[0], true] : entry
      )
    ).toEqual(exampleResult);
  });
});

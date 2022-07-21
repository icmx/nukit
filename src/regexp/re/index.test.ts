import { nameOf } from '../../../test/utils/nameOf';
import { re } from './index';

describe(nameOf(re), () => {
  it('should build correct regular expressions', () => {
    const test = (options: {
      literalRegExp: RegExp;
      stringRegExp: RegExp;
      reRegExp: RegExp;
      truthy: string[];
      falsy: string[];
    }): void => {
      options.truthy.forEach((value) => {
        expect(value.match(options.literalRegExp)).toBeTruthy();
        expect(value.match(options.stringRegExp)).toBeTruthy();
        expect(value.match(options.reRegExp)).toBeTruthy();
      });

      options.falsy.forEach((value) => {
        expect(value.match(options.literalRegExp)).toBeFalsy();
        expect(value.match(options.stringRegExp)).toBeFalsy();
        expect(value.match(options.reRegExp)).toBeFalsy();
      });
    };

    test({
      literalRegExp: /^aab$/gu,
      stringRegExp: new RegExp('^aab$', 'gu'),
      reRegExp: re('^aab$', 'gu'),
      falsy: ['aac', 'daab', 'AAB', '123', 'aabc'],
      truthy: ['aab'],
    });

    test({
      literalRegExp: /^\w{1,8}(\.[A-Za-z]{3})?$/gu,
      stringRegExp: new RegExp('^\\w{1,8}(\\.[A-Za-z]{3})?$', 'gu'),
      reRegExp: re('^\\w{1,8}(\\.[A-Za-z]{3})?$', 'gu'),
      falsy: ['toolongname.exe', 'shext.e', 'ilch+2.123'],
      truthy: ['EXPLORER.EXE', 'test.bin', 'noext'],
    });
  });
});

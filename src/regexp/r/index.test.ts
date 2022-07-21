import { nameOf } from '../../../test/utils/nameOf';
import { r } from './index';

describe(nameOf(r), () => {
  it('should build correct regular expressions', () => {
    const test = (options: {
      literalRegExp: RegExp;
      stringRegExp: RegExp;
      templateRegExp: RegExp;
      truthy: string[];
      falsy: string[];
    }): void => {
      options.truthy.forEach((value) => {
        expect(value.match(options.literalRegExp)).toBeTruthy();
        expect(value.match(options.stringRegExp)).toBeTruthy();
        expect(value.match(options.templateRegExp)).toBeTruthy();
      });

      options.falsy.forEach((value) => {
        expect(value.match(options.literalRegExp)).toBeFalsy();
        expect(value.match(options.stringRegExp)).toBeFalsy();
        expect(value.match(options.templateRegExp)).toBeFalsy();
      });
    };

    test({
      literalRegExp: /^aab$/gu,
      stringRegExp: new RegExp('^aab$', 'gu'),
      templateRegExp: r`^aab$`,
      falsy: ['aac', 'daab', 'AAB', '123', 'aabc'],
      truthy: ['aab'],
    });

    test({
      literalRegExp: /^\w{1,8}(\.[A-Za-z]{3})?$/gu,
      stringRegExp: new RegExp('^\\w{1,8}(\\.[A-Za-z]{3})?$', 'gu'),
      templateRegExp: r`^\\w{1,8}(\\.[A-Za-z]{3})?$`,
      falsy: ['toolongname.exe', 'shext.e', 'ilch+2.123'],
      truthy: ['EXPLORER.EXE', 'test.bin', 'noext'],
    });
  });
});

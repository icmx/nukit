import { nameOf } from '../../../test/utils/nameOf';
import { re } from './index';

describe(nameOf(re), () => {
  it('should build correct regular expressions', () => {
    const test = (options: {
      literalRegExp: RegExp;
      stringRegExp: RegExp;
      templateRegExp: RegExp;
      truthy: string[];
      falsy: string[];
    }): void => {
      options.truthy.forEach((value) => {
        expect(options.literalRegExp.test(value)).toBe(true);
        expect(options.stringRegExp.test(value)).toBe(true);
        expect(options.templateRegExp.test(value)).toBe(true);
      });

      options.falsy.forEach((value) => {
        expect(options.literalRegExp.test(value)).toBe(false);
        expect(options.stringRegExp.test(value)).toBe(false);
        expect(options.templateRegExp.test(value)).toBe(false);
      });
    };

    test({
      literalRegExp: /^aab$/,
      stringRegExp: new RegExp('^aab$'),
      templateRegExp: re`^aab$`,
      falsy: ['aac', 'daab', 'AAB', '123'],
      truthy: ['aab'],
    });

    test({
      literalRegExp: /^\w{1,8}(\.[A-Za-z]{3})?$/,
      stringRegExp: new RegExp('^\\w{1,8}(\\.[A-Za-z]{3})?$'),
      templateRegExp: re`^\\w{1,8}(\\.[A-Za-z]{3})?$`,
      falsy: ['toolongname.exe', 'shext.e', 'ilch+2.123'],
      truthy: ['EXPLORER.EXE', 'test.bin', 'noext'],
    });
  });
});

import { nameOf } from '../../../test/utils/nameOf';
import { throwOn } from './index';

describe(nameOf(throwOn), () => {
  const ofFalse = () => false;
  const ofTrue = () => true;

  it('should not throw an error if predicate returns false', () => {
    expect(() => {
      throwOn(false);
    }).not.toThrow();

    expect(() => {
      // @ts-ignore
      throwOn(0 === 1);
    }).not.toThrow();

    expect(() => {
      // @ts-ignore
      throwOn(ofFalse());
    }).not.toThrow();
  });

  it('should throw an error if predicate returns true', () => {
    expect(() => {
      throwOn(true);
    }).toThrow();

    expect(() => {
      throwOn(ofTrue());
    }).toThrow();

    expect(() => {
      throwOn(0 === 0);
    }).toThrow();
  });
});

import { nameOf } from '../../../test/utils/nameOf';
import { when } from './index';

describe(nameOf(when), () => {
  const ofFalse = () => false;
  const ofTrue = () => true;

  it('should not throw an error if predicate returns false', () => {
    expect(() => {
      when(false);
    }).not.toThrow();

    expect(() => {
      // @ts-ignore
      when(0 === 1);
    }).not.toThrow();

    expect(() => {
      // @ts-ignore
      when(ofFalse());
    }).not.toThrow();
  });

  it('should throw an error if predicate returns true', () => {
    expect(() => {
      when(true);
    }).toThrow();

    expect(() => {
      when(ofTrue());
    }).toThrow();

    expect(() => {
      when(0 === 0);
    }).toThrow();
  });
});

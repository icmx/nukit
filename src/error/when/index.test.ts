import { nameOf } from '../../../test/utils/nameOf';
import { ERROR } from './constants';
import { when } from './index';

describe(nameOf(when), () => {
  const ofFalse = () => false;
  const ofTrue = () => true;

  it('should not throw an error if predicate returns false', () => {
    expect(() => {
      when(false).drop();
    }).not.toThrow();

    expect(() => {
      // @ts-ignore
      when(0 === 1).drop();
    }).not.toThrow();

    expect(() => {
      // @ts-ignore
      when(ofFalse()).drop();
    }).not.toThrow();
  });

  it('should throw an error if predicate returns true', () => {
    expect(() => {
      when(true).drop();
    }).toThrow(ERROR);

    expect(() => {
      when(ofTrue()).drop();
    }).toThrow(ERROR);

    expect(() => {
      when(0 === 0).drop();
    }).toThrow(ERROR);
  });
});

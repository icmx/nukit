import { Predicate } from '../types/Predicate';

export const resolvePredicate = (predicate: Predicate): boolean => {
  if (typeof predicate === 'boolean') {
    return predicate;
  }

  if (predicate instanceof Function) {
    return predicate();
  }

  throw new TypeError('Predicate should be a boolean or function ');
};

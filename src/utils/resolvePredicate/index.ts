import { Predicate } from '../../types/Predicate';
import { ERROR_NOT_BOOLEAN } from './constants';

export const resolvePredicate = (predicate: Predicate): boolean => {
  if (typeof predicate === 'boolean') {
    return predicate;
  }

  if (predicate instanceof Function) {
    return predicate();
  }

  throw ERROR_NOT_BOOLEAN;
};

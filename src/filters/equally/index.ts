import { Predicate } from '../../types/Predicate';
import { resolvePredicate } from '../../utils/resolvePredicate';

/**
 * Returns true if all of predicates are true.
 */
export const equally = (...predicates: Predicate[]): boolean => {
  for (let i = 0; i < predicates.length; i++) {
    if (resolvePredicate(predicates[i]) === false) {
      return false;
    }
  }

  return true;
};

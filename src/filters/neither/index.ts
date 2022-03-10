import { Predicate } from '../../types/Predicate';
import { resolvePredicate } from '../../utils/resolvePredicate';

/**
 * Returns true if at least one of predicates is true.
 *
 * **or** — alias
 */
export const neither = (...predicates: Predicate[]): boolean => {
  for (let i = 0; i < predicates.length; i++) {
    if (resolvePredicate(predicates[i]) === true) {
      return true;
    }
  }

  return false;
};

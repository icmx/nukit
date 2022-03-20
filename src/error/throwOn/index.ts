import { Predicate } from '../../types/Predicate';
import { resolvePredicate } from '../../utils/resolvePredicate';

/**
 * Throws an error if predicate returns true.
 */
export const throwOn = (
  predicate: Predicate,
  error = new Error()
): void => {
  if (resolvePredicate(predicate)) {
    throw error;
  }
};

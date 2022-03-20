import { resolvePredicate } from 'src/utils/resolvePredicate';
import { Predicate } from '../types/Predicate';

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

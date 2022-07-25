import { Predicate } from '../../types/Predicate';
import { resolvePredicate } from '../../utils/resolvePredicate';
import { ERROR } from './constants';

export interface DropOptions {
  /**
   * True to use raw error value and not to wrap it into a standard
   * Error instance.
   * @default false
   */
  raw?: boolean;
}

export interface Drop {
  drop(error?: string | Error, options?: DropOptions): void;
}

/**
 * Returns a function to drop an error when predicate is true.
 * @example
 * when(a < 42).drop('Must be less than 42!')
 */
export const when = (predicate: Predicate): Drop => {
  const resolved = resolvePredicate(predicate);

  return {
    drop(error = ERROR, { raw = false } = {}) {
      if (resolved) {
        if (raw) {
          throw error;
        } else {
          throw error instanceof Error ? error : new Error(error);
        }
      }
    },
  };
};

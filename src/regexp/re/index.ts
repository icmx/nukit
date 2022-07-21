/**
 * Creates a RegExp from a string in a short way.
 *
 * @example
 * // equal to new RegExp('^test$', 'gim')
 * const example = re('^test$', 'gim');
 */
export const re = (pattern: string, flags?: string): RegExp => {
  return new RegExp(pattern, flags);
};

/**
 * Builds a RegExp from a template string.
 *
 * @example
 * const example = re`.+`; // equal to new RegExp('.+');
 */
export const re = (strings: string[], ...keys: string[]): RegExp => {
  const pattern = keys
    .map((value, index) => strings[index] + value)
    .join('')
    .concat(strings[strings.length - 1]);

  return new RegExp(pattern);
};

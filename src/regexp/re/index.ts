/**
 * Builds a RegExp from a template string.
 *
 * @example
 * // === new RegExp('.+');
 * const example = re`.+`;
 */
export const re = (
  strings: TemplateStringsArray,
  ...keys: any[]
): RegExp => {
  const pattern = keys
    .map((value, index) => strings[index] + value)
    .join('')
    .concat(strings[strings.length - 1]);

  return new RegExp(pattern);
};

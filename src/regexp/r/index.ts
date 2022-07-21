/**
 * Creates a RegExp from a template string, `gu` flags are enabled.
 *
 * @example
 * // this is equal to new RegExp(/.+/, 'gu');
 * const example = r`.+`;
 */
export const r = (
  strings: TemplateStringsArray,
  ...keys: any[]
): RegExp => {
  const pattern = keys
    .map((value, index) => strings[index] + value)
    .join('')
    .concat(strings[strings.length - 1]);

  return new RegExp(pattern, 'gu');
};

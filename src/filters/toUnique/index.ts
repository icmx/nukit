/** Options of `toUnique` */
export type ToUniqueOptions<T> = {
  /**
   * Function to extract a unique key when filtering object values.
   *
   * Primitive values does not need this.
   *
   * When omitted for object values, will filter objects by their
   * references.
   */
  by?: (value: T) => unknown;
};

/**
 * Creates a predicate function for standard Array.prototype.filter
 * method to filter only unique values. Works both for primitive values
 * and objects to.
 *
 * @example
 * [1, 2, 2].filter(toUnique()); // -> [1, 2]
 *
 * @example
 * const objects = [{ id: 'a1' }, { id: 'a1' }, { id: 'b2' }];
 * objects.filter(toUnique({ by: (value) => value.id }));
 * // -> [{ id: 'a1' }, { id: 'b2' }]
 */
export const toUnique = <T>({
  by = (value) => value,
}: ToUniqueOptions<T> = {}) => {
  const valuesByIds = new Map<unknown, T>();

  return (value: T): boolean => {
    const id = by(value);

    if (valuesByIds.has(id)) {
      return false;
    }

    valuesByIds.set(id, value);

    return true;
  };
};

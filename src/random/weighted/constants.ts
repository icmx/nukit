export const ERROR_VALUES_IS_EMPTY = new TypeError(
  'Values array should include at least one item'
);

export const ERROR_VALUES_HAS_NON_ARRAY_ITEM = new TypeError(
  'Iterable for weighted pick should have array-like objects'
);

export const ERROR_VALUES_HAS_NON_FINITE_WEIGHT = new TypeError(
  'Weight should be finite number'
);

export const ERROR_NO_VALID_WEIGHTS = new TypeError(
  'No valid weights in array if values'
);

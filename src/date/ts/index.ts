export type TsOptions = {
  /**
   * Date to use for timestamp creation. Current by default.
   */
  from?: Date;

  /**
   * Option to handle milliseconds in timestamp.
   *
   * *Note: `'ceil'`, `'floor'`, `'round'` and `'trunc'` are internally
   * uses appropriate `Math` methods.
   *
   * Math reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
   * @default undefined
   */
  ms?: keyof Pick<Math, 'ceil' | 'floor' | 'round' | 'trunc'>;
};


/**
 * Returns a Unix timestamp for current or specified date.
 */
export const ts = (options: TsOptions = {}) => {
  const { from, ms }: TsOptions = {
    from: new Date(),
    ...options,
  };

  if (ms) {
    return Math[ms](from.getTime() / 1000);
  } else {
    return from.getTime();
  }
};

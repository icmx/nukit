import { FloatHandling } from '../../types/FloatHandling';

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
  milliseconds?: FloatHandling;
};

/**
 * Returns a Unix timestamp for current or specified date.
 */
export const ts = ({
  from = new Date(),
  milliseconds = undefined,
}: TsOptions = {}) => {
  if (milliseconds) {
    return Math[milliseconds](from.getTime() / 1000);
  } else {
    return from.getTime();
  }
};

import { FloatHandling } from '../../types/FloatHandling';

export type TsOptions = {
  /**
   * Date to use for timestamp creation. Current by default.
   */
  from?: Date;

  /**
   * How to handle milliseconds part in a timetamp.
   *
   * - `ceil`, `floor`, `round` and `trunc` are standard Math handlers
   * - `keep` is default option to just keep milliseconds
   * @default 'keep'
   */
  milliseconds?: FloatHandling;
};

/**
 * Returns a Unix timestamp for current or specified date.
 */
export const ts = ({
  from = new Date(),
  milliseconds = 'keep',
}: TsOptions = {}) => {
  if (milliseconds === 'keep') {
    return from.getTime();
  } else {
    return Math[milliseconds](from.getTime() / 1000);
  }
};

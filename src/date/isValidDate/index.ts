import { equally } from '../../filters/equally';
import { DateValue } from '../../types/DateValue';

export type IsValidDateOptions = {
  /**
   * Treat falsy values (0 and '') as valid. They return zero date
   * which is 1970-01-01T00:00:00.000.
   */
  allowFalsy?: boolean;
};

/**
 * Returns true if value is valid Date or suits for Date creation.
 */
export const isValidDate = (
  value: DateValue,
  options: IsValidDateOptions = {}
): value is DateValue => {
  const { allowFalsy }: IsValidDateOptions = {
    allowFalsy: false,
    ...options,
  };

  if (!value) {
    return allowFalsy ? true : false;
  }

  try {
    const target = new Date(value);

    return equally(
      target instanceof Date,
      !Number.isNaN(target.valueOf())
    );
  } catch {
    return false;
  }
};

import { equally } from '../../filters/equally';
import { DateValue } from '../../types/DateValue';

export type IsValidOptions = {
  allowFalsy?: boolean;
};

export const isValid = (
  value: DateValue,
  options: IsValidOptions = {}
): value is DateValue => {
  const { allowFalsy }: IsValidOptions = {
    allowFalsy: false,
    ...options,
  };

  if (!value) {
    return allowFalsy ? true : false;
  }

  try {
    const target = new Date(value);
    return equally(target instanceof Date, !Number.isNaN(target));
  } catch {
    return false;
  }
};

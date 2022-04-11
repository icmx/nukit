import { AVG_DIM } from '../../constants';
import { throwOn } from '../../error/throwOn';
import { neither } from '../../filters/neither';
import { DateValue } from '../../types/DateValue';
import { isValid } from '../isValid';
import { ERROR_INVALID_DATE } from './constants';

export type AbsoluteBetweenResult = {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
  raw: number;
  inversed: boolean;
};

/**
 * Returns total amount of time between two dates (years, months, days,
 * hours etc). All units are independent to each other.
 */
export const absoluteBetween = (
  from: DateValue,
  to: DateValue
): AbsoluteBetweenResult => {
  throwOn(neither(!isValid(from), !isValid(to)), ERROR_INVALID_DATE);

  const raw = new Date(to).valueOf() - new Date(from).valueOf();
  const { abs, round } = Math;
  const milliseconds = abs(raw);

  return {
    milliseconds,
    seconds: round(milliseconds / 1000),
    minutes: round(milliseconds / (1000 * 60)),
    hours: round(milliseconds / (1000 * 60 * 60)),
    days: round(milliseconds / (1000 * 60 * 60 * 24)),
    months: round(milliseconds / (1000 * 60 * 60 * 24 * AVG_DIM)),
    years: round(milliseconds / (1000 * 60 * 60 * 24 * AVG_DIM * 12)),
    raw,
    inversed: raw < 0,
  };
};

import { AVG_DIM } from '../../constants';
import { throwOn } from '../../error/throwOn';
import { neither } from '../../filters/neither';
import { DateValue } from '../../types/DateValue';
import { isValid } from '../isValid';
import { ERROR_INVALID_DATE } from './constants';

export type AbsoluteBetweenResult = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  weeks: number;
  quarters: number;
  raw: number;
  inversed: boolean;
};

export const absoluteBetween = (
  from: DateValue,
  to: DateValue
): AbsoluteBetweenResult => {
  throwOn(neither(!isValid(from), !isValid(to)), ERROR_INVALID_DATE);

  const raw = new Date(to).valueOf() - new Date(from).valueOf();
  const inversed = raw < 0;

  const milliseconds = Math.abs(raw);
  const seconds = Math.round(milliseconds / 1000);
  const minutes = Math.round(milliseconds / (1000 * 60));
  const hours = Math.round(milliseconds / (1000 * 60 * 60));
  const days = Math.round(milliseconds / (1000 * 60 * 60 * 24));
  const months = Math.round(milliseconds / (1000 * 60 * 60 * 24 * AVG_DIM));
  const years = Math.round(milliseconds / (1000 * 60 * 60 * 24 * AVG_DIM * 12));
  const weeks = Math.round(days / 7);
  const quarters = Math.round(months / 3);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    weeks,
    quarters,
    raw,
    inversed,
  };
};

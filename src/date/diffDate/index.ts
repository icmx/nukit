import { AVG_DIM } from '../../constants';
import { when } from '../../error/when';
import { neither } from '../../filters/neither';
import { DateValue } from '../../types/DateValue';
import { isValidDate } from '../isValidDate';
import { ERROR_INVALID_DATE } from './constants';

export interface DiffDateResultUnits {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
}

export interface DiffDateResult {
  total: DiffDateResultUnits;
  remain: DiffDateResultUnits;
  raw: number;
  inversed: boolean;
}

/**
 * Returns total amount of time between two dates (years, months, days,
 * hours etc).
 */
export const diffDate = (
  from: DateValue,
  to: DateValue
): DiffDateResult => {
  when(neither(!isValidDate(from), !isValidDate(to))).drop(
    ERROR_INVALID_DATE
  );

  const raw = new Date(to).valueOf() - new Date(from).valueOf();
  const { abs, floor, round } = Math;
  const milliseconds = abs(raw);

  const total: DiffDateResultUnits = {
    milliseconds,
    seconds: round(milliseconds / 1000),
    minutes: round(milliseconds / (1000 * 60)),
    hours: round(milliseconds / (1000 * 60 * 60)),
    days: round(milliseconds / (1000 * 60 * 60 * 24)),
    months: round(milliseconds / (1000 * 60 * 60 * 24 * AVG_DIM)),
    years: round(milliseconds / (1000 * 60 * 60 * 24 * AVG_DIM * 12)),
  };

  const remain: DiffDateResultUnits = {
    milliseconds: total.milliseconds % 1000,
    seconds: total.seconds % 60,
    minutes: total.minutes % 60,
    hours: total.hours % 24,
    days: floor(total.days % AVG_DIM),
    months: total.months % 12,
    years: total.years,
  };

  return {
    total,
    remain,
    raw,
    inversed: raw < 0,
  };
};

import { WithRNGOption } from '../../types/WithRNGOption';

export type StrOptions = {
  alphabet?: string;
  minLength?: number;
  maxLength?: number;
} & WithRNGOption;

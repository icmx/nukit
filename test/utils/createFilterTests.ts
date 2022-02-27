import { MOCKS } from '../constants';
import { MocksKeys } from '../types/MocksKeys';

export type CreateFilterTestOptions = {
  [key in MocksKeys]?: boolean;
};

export const createFilterTests = (
  filter: (value: unknown) => boolean,
  options: CreateFilterTestOptions
) => {
  return () => {
    Object.entries(MOCKS).forEach(([key, value]) => {
      expect(filter(value)).toBe(options[key as MocksKeys] ?? false);
    });
  };
};

import { FallbackHandler } from '../types/FallbackHandler';

export const createErrorFallback = (error: Error): FallbackHandler => {
  return (): never => {
    throw error;
  };
};

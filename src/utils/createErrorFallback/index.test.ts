import { nameOf } from '../../../test/utils/nameOf';
import { createErrorFallback } from './index';

describe(nameOf(createErrorFallback), () => {
  it('should throw an error when called', () => {
    const error = new Error('This is an error!');
    const fallback = createErrorFallback(error);

    expect(() => fallback()).toThrow(error);
  });
});

import '@testing-library/jest-dom';

import 'given2';
import 'given2/setup';

declare global {
  const given: {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    <T = any>(key: string, callback: () => T): T
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    [key: string]: any
  };
}
import '@testing-library/jest-dom';

import 'given2';
import 'given2/setup';

import 'jest-localstorage-mock';

declare global {
  const given: {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    <T = any>(key: string, callback: () => T): T
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    [key: string]: any
  };
}

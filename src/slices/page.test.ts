import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import { AppDispatch } from '../store';

import reducer, {
  clear,
  initialState,
  notify,
} from './page';

const mockStore = configureStore();

describe('pages slice', () => {
  let store: MockStoreEnhanced<unknown, AppDispatch>;

  beforeEach(() => {
    store = mockStore(() => ({
      pages: {
        ...initialState,
      },
    }));
  })

  describe('notify', () => {
    it('메세지를 update 한다.', () => {
      const { title, message } = reducer(
        initialState, notify({
          title: 'Error',
          message: '일시적인 장애가 발생했습니다. 관리자에게 문의 해 주세요',
        }),
      )

      expect(title).toBe('Error');
      expect(message).toBe('일시적인 장애가 발생했습니다. 관리자에게 문의 해 주세요');
    });
  });

  describe('clear', () => {
    it('pages의 상태를 초기화 한다', () => {
      const result = reducer({ title: 'hello', message: 'test123' }, clear());

      expect(result).toEqual(initialState);
    });
  });
});

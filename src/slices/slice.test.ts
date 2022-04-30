import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import reducer, {
  initialState,
  setForm,
  setTimeTable,
} from './slice';

const mockStore = configureStore();

describe('slice', () => {
  let store: MockStoreEnhanced<unknown>;

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        ...initialState,
      },
    }))
  })

  describe('setForm', () => {
    it('form의 상태를 변경한다', () => {
      const { form } = reducer(
        initialState, setForm({ name: 'naverId', value: 'rhkrgudwh' }),
      );

      expect(form.naverId).toBe('rhkrgudwh');
    });
  });

  describe('setTimeTable', () => {
    const mockData = {
      "0900": [
        { name: '홍길동', phone: '1234', date: '2022.03.29. 22:30' },
        { name: '김철수', phone: '5678', date: '2022.03.29. 22:30' },
      ],
    }

    it('timeTable의 상태를 변경한다', () => {
      const { timeTable } = reducer(
        initialState, setTimeTable(mockData),
      )

      expect(timeTable).toEqual(mockData);
    });
  });
});

import { waitFor } from '@testing-library/react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk'

import { AppDispatch } from '../store';
import { loadUserTimeTable } from '../api';

import reducer, {
  initialState,
  setForm,
  setTimeTable,
  setLoadingState,
  submitForm,
} from './slice';
import { mockUserList } from '../../fixtures';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../api');

describe('slice', () => {
  let store: MockStoreEnhanced<unknown, AppDispatch>;

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        ...initialState,
      },
    }));

    (loadUserTimeTable as jest.Mock).mockResolvedValue(mockUserList.data);
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

  describe('setLoadingState', () => {
    it('loading 상태와 메세지를 업데이트 한다.', () => {
      const { loading } = reducer(
        initialState, setLoadingState({
          isLoading: true,
          message: '데이터를 불러오고 있습니다...',
        }),
      )

      expect(loading).toEqual({
        isLoading: true,
        message: '데이터를 불러오고 있습니다...',
      });
    });
  });

  describe('submitForm', () => {
    it('form을 제출하면 setTimeTable action을 실행한다.', async () => {
      store.dispatch(submitForm());

      await waitFor(() => {
        const actions = store.getActions();

        expect(actions[0].type).toBe('app/setLoadingState');
        expect(actions[1].type).toBe('app/setTimeTable');
        expect(actions[2].type).toBe('app/setLoadingState');
      })
    });
  });
});

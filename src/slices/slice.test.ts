import { waitFor } from '@testing-library/react';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import thunk from 'redux-thunk'

import { AppDispatch } from '../store';
import { getClassArticles, getReservationData } from '../services';

import reducer, {
  initialState,
  setTimeTable,
  setFailUsers,
  setArticles,
  setLoadingState,
  submitForm,
  setArticleNumber,
  loadClassReservationArticles,
} from './slice';
import { mockUserList } from '../../fixtures';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services');

describe('slice', () => {
  let store: MockStoreEnhanced<unknown, AppDispatch>;

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        ...initialState,
      },
    }));

    (getReservationData as jest.Mock).mockResolvedValue({
      timeTable: mockUserList.data.timeTable,
      failUsers: mockUserList.data.wrongData,
    });
    (getClassArticles as jest.Mock).mockResolvedValue([
      { title: '220504수업예약', articleNumber: '12345' },
      { title: '220503수업예약', articleNumber: '12232' },
      { title: '220502수업예약', articleNumber: '33232' },
    ])
  })

  describe('setArticleNumber', () => {
    it('수업 글 번호를 변경한다', () => {
      const { articleNumber } = reducer(
        initialState, setArticleNumber('12345'),
      )

      expect(articleNumber).toBe('12345');
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


  describe('setFailUsers', () => {
    it('예약 실패한 사용자를 update 한다.', () => {
      const mockData = {
        ...mockUserList.data.wrongData,
      }

      const { failUsers } = reducer(
        initialState, setFailUsers(mockData),
      );

      expect(failUsers).toEqual(mockData);
    });

  });

  describe('setArticles', () => {
    const mockArticles = [
      { title: '220504수업예약', articleNumber: '12345' },
      { title: '220503수업예약', articleNumber: '54321' },
    ]

    it('articles 의 상태를 변경한다', () => {
      const { articles } = reducer(
        initialState, setArticles(mockArticles),
      )

      expect(articles).toEqual(mockArticles);
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
        expect(actions[2].type).toBe('app/setFailUsers');
        expect(actions[3].type).toBe('app/setLoadingState');
      })
    });
  });

  describe('loadClassReservationArticles', () => {
    it('수업 예약 글 목록을 가져오면 setArticles action을 실행한다.', async () => {
      store.dispatch(loadClassReservationArticles());

      await waitFor(() => {
        const actions = store.getActions();

        expect(actions[0].type).toBe('app/setLoadingState');
        expect(actions[1].type).toBe('app/setArticles');
        expect(actions[2].type).toBe('app/setArticleNumber');
        expect(actions[3].type).toBe('app/setLoadingState');
      })
    });
  });
});

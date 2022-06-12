import { fireEvent, render, waitFor, within } from '@testing-library/react';

import { useSelector, useDispatch } from "react-redux";

import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import thunk from 'redux-thunk';

import Form from './Form';

import { getReservationData } from '../services';
import { mockUserList } from "../../fixtures";

import { initialState, setArticleNumber } from "../slices/slice";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services');
jest.mock('react-redux');

describe('Form', () => {
  let store: MockStoreEnhanced<unknown>;

  given('articles', () => []);

  const renderForm = () => render((
    <Form />
  ))

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        ...initialState,
        articles: given.articles,
      },
    }));

    (useDispatch as jest.Mock)
      .mockImplementation(() => store.dispatch);
    (useSelector as jest.Mock)
      .mockImplementation((selector) => selector(store.getState()));

    (getReservationData as jest.Mock).mockResolvedValue({
      timeTable: mockUserList.data.timeTable,
      failUsers: mockUserList.data.wrongData,
    });
  })

  it('아이디, 비밀번호, 수업 선택 창을 볼 수 있다', () => {
    const { getByLabelText } = renderForm();

    expect(getByLabelText('아이디를 입력해주세요')).toBeInTheDocument();
    expect(getByLabelText('비밀번호를 입력해주세요')).toBeInTheDocument();
    expect(getByLabelText('수업을 선택해주세요')).toBeInTheDocument();
  });

  it('입력란에 값을 입력할 수 있다.', () => {
    const { getByLabelText } = renderForm();

    const field = getByLabelText('아이디를 입력해주세요');

    expect(field).toHaveValue('');

    fireEvent.change(field, {
      target: {
        value: 'rhkrgudwh',
      },
    })

    const actions = store.getActions();

    expect(actions[0].type).toBe('app/setForm');
    expect(actions[0].payload).toEqual({ name: 'naverId', value: 'rhkrgudwh' });
  });

  it('"제출하기" 버튼을 누르면 setTimeTable action이 실행된다.', async () => {
    const { getByText } = renderForm();

    fireEvent.click(getByText('제출하기'));

    await waitFor(() => {
      const actions = store.getActions();

      expect(actions[0].type).toBe('app/setLoadingState');
      expect(actions[1].type).toBe('app/setTimeTable');
      expect(actions[1].payload).toEqual(mockUserList.data.timeTable);
      expect(actions[2].type).toBe('app/setLoadingState');
    })
  });

  context('수업 예약 글 목록이 있으면', () => {
    given('articles', () => [
      { title: '220504수업예약', articleNumber: '12345' },
      { title: '220503수업예약', articleNumber: '12232' },
      { title: '220502수업예약', articleNumber: '33232' },
    ]);

    it('수업을 선택하고 setArticleNumber action이 실행된다.', async () => {
      const { getByRole } = renderForm();

      fireEvent.mouseDown(getByRole('button', { name: /수업을 선택해주세요/ }));

      const listbox = within(getByRole('listbox'));

      fireEvent.click(listbox.getByText(
        given.articles[2].title,
      ));

      await waitFor(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual(setArticleNumber(
          given.articles[2].articleNumber,
        ));
      })
    });
  });
});

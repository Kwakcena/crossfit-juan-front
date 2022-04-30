import { fireEvent, render, waitFor } from '@testing-library/react';

import { useSelector, useDispatch } from "react-redux";

import Form from './Form';

import { loadUserTimeTable } from '../api';
import { mockUserList } from "../../fixtures";

import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

import { initialState } from "../slices/slice";

const mockStore = configureStore();

jest.mock('../api');
jest.mock('react-redux');

describe('Form', () => {
  let store: MockStoreEnhanced<unknown>;

  const renderForm = () => render((
    <Form />
  ))

  beforeEach(() => {
    store = mockStore(() => ({
      ...initialState,
    }));

    (useDispatch as jest.Mock)
      .mockImplementation(() => store.dispatch);
    (useSelector as jest.Mock)
      .mockImplementation((selector) => selector(store.getState()));

    (loadUserTimeTable as jest.Mock).mockResolvedValue(mockUserList.data);
  })

  it('아이디, 비밀번호, 글 번호 입력창을 볼 수 있다', () => {
    const { getByLabelText } = renderForm();

    expect(getByLabelText('아이디를 입력해주세요')).toBeInTheDocument();
    expect(getByLabelText('비밀번호를 입력해주세요')).toBeInTheDocument();
    expect(getByLabelText('글 번호를 입력해주세요')).toBeInTheDocument();
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

      expect(actions[0].type).toBe('app/setTimeTable');
      expect(actions[0].payload).toEqual(mockUserList.data.timeTable);
    })
  });
});

import { render } from "@testing-library/react";

import Main from './Main';

import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { useSelector } from "react-redux";

import { initialState } from "../slices/slice";

import thunk from 'redux-thunk';
import { AppDispatch } from "../store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('react-redux');

describe('Main', () => {
  const renderMain = () => render(
    <Main />,
  );

  let store: MockStoreEnhanced<unknown, AppDispatch>;

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        ...initialState,
      },
    }));

    (useSelector as jest.Mock)
      .mockImplementation((selector) => selector(store.getState()));
  })

  it('아이디/비밀번호 입력 form을 볼 수 있다.', () => {
    const { container, getByLabelText } = renderMain();

    expect(container).toHaveTextContent('아이디/비밀번호 입력');
    expect(getByLabelText('아이디를 입력해주세요')).toBeInTheDocument();
  });

  it('예약자 현황 테이블을 볼 수 있다.', () => {
    const { container } = renderMain();

    expect(container).toHaveTextContent('예약자 현황');
  });
});

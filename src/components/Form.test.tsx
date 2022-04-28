import { fireEvent, render, waitFor } from "@testing-library/react";

import Form from './Form';

import { loadUserTimeTable } from '../api';
import { mockUserList } from "../../fixtures";

jest.mock('../api');

describe('Form', () => {
  const setTimeTable = jest.fn();

  const renderForm = () => render(
    <Form setTimeTable={setTimeTable} />,
  )

  beforeEach(() => {
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

    expect(field).toHaveValue('rhkrgudwh');
  });

  context('제출 버튼을 클릭하면', () => {
    it('사용자 예약 현황을 가져와 setTimeTable을 호출한다.', async () => {
      const { getByText } = renderForm();

      fireEvent.click(getByText('제출하기'));

      await waitFor(() => {
        expect(setTimeTable).toBeCalledWith(mockUserList.data.timeTable);
      })
    });
  });
});

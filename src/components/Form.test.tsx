import { fireEvent, render } from "@testing-library/react";

import Form from './Form';

describe('Form', () => {
  const renderForm = () => render(
    <Form />,
  )

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
});

import { render } from "@testing-library/react";

import Main from './Main';

describe('Main', () => {
  const renderMain = () => render(
    <Main />,
  );

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

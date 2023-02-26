import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  const renderHeader = () => render(
    <Header />,
  )

  it('앱의 title을 볼 수 있다', () => {
    const { container } = renderHeader();

    expect(container).toHaveTextContent('크로스핏 주안 예약자 확인하기');
  });
});

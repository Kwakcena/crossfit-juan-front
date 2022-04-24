import { render } from "@testing-library/react";

import Main from './Main';

describe('Main', () => {
  const renderMain = () => render(
    <Main />,
  );

  it('Main을 볼 수 있다', () => {
    const { container } = renderMain();

    expect(container).toHaveTextContent('main');
  });
});

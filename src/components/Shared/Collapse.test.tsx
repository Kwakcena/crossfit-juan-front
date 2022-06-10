import { render } from "@testing-library/react";

import Collapse from "./Collapse";

describe('Collapse', () => {
  const handleClick = jest.fn();

  const renderCollapse = () => render(
    <Collapse
      title={given.title}
      summary={given.summary}
      opened={given.opened}
      onClick={handleClick}
    >
      <div>Hello world</div>
    </Collapse>,
  );

  context('title이 주어지면', () => {
    given('title', () => '1900');

    it('title을 볼 수 있다.', () => {
      const { container } = renderCollapse();

      expect(container).toHaveTextContent(given.title);
    });
  });

  context('summary가 주어지면', () => {
    given('summary', () => '총 5명');

    it('summary 를 볼 수 있다.', () => {
      const { container } = renderCollapse();

      expect(container).toHaveTextContent(given.summary);
    });
  });

  context('opened 가 true이면', () => {
    given('opened', () => true);

    it('children 컴포넌트를 볼 수 있다.', () => {
      const { container } = renderCollapse();

      expect(container).toHaveTextContent('Hello world');
    });
  });

  context('opened 가 false이면', () => {
    given('opened', () => false);

    it('children 컴포넌트를 볼 수 없다.', () => {
      const { container } = renderCollapse();

      expect(container).not.toHaveTextContent('Hello world');
    });
  });
});

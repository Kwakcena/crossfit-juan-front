import { fireEvent, render } from "@testing-library/react";
import CollapseHead from "./CollapseHead";

describe('CollapseHead', () => {
  const handleClick = jest.fn();

  const renderCollapseHead = () => render(
    <CollapseHead
      title={given.title}
      summary={given.summary}
      opened={true}
      onClick={handleClick}
    />
  )

  context('title이 있으면', () => {
    given('title', () => '1900');

    it('title을 볼 수 있다.', () => {
      const { container } = renderCollapseHead();

      expect(container).toHaveTextContent(given.title);
    });
  });

  context('summary가 있으면', () => {
    given('summary', () => '총 7명');

    it('summary 를 볼 수 있다.', () => {
      const { container } = renderCollapseHead();

      expect(container).toHaveTextContent(given.summary);
    });
  });

  context('CollapseHead를 클릭하면', () => {
    it('handleClick이 호출된다.', () => {
      const { getByRole } = renderCollapseHead();

      fireEvent.click(getByRole('button'));

      expect(handleClick).toBeCalled();
    });
  });
});
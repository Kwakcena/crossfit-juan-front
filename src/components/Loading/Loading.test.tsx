import { render } from '@testing-library/react';

import Loading from './Loading';

describe('Loading', () => {
  const renderLoading = () => render(
    <Loading text={given.text} />,
  );

  context('로딩 문구가 없으면', () => {
    it('기본 텍스트를 노출한다.', () => {
      const { container } = renderLoading();

      expect(container).toHaveTextContent('로딩중 입니다...');
    });
  });

  context('로딩 문구가 있으면', () => {
    given('text', () => '데이터를 불러오고 있습니다...');

    it('전달한 문구를 볼 수 있다', () => {
      const { container } = renderLoading();

      expect(container).toHaveTextContent(given.text);
    });
  });
});

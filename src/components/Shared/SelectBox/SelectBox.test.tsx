import { fireEvent, render, within } from "@testing-library/react";

import SelectBox from './SelectBox';

describe('SelectBox component', () => {
  given('articles', () => []);
  given('selected', () => '');

  const handleChange = jest.fn();

  const renderSelectBox = () => render(
    <SelectBox
      articles={given.articles}
      selected={given.selected}
      onChange={handleChange}
    />,
  )

  it('label을 볼 수 있다', () => {
    const { container } = renderSelectBox();

    expect(container).toHaveTextContent('수업을 선택해주세요');
  });

  context('articles 가 있으면', () => {
    given('articles', () => [
      { title: '220504수업예약', articleNumber: '12345' },
      { title: '220503수업예약', articleNumber: '12232' },
      { title: '220502수업예약', articleNumber: '33232' },
    ])

    it('select box를 클릭헀을 때 article 목록을 볼 수 있다', async () => {
      const { getAllByRole, getByRole } = renderSelectBox();

      fireEvent.mouseDown(getByRole('button'));

      given.articles.forEach((article: { title: string, articleNumber: string }, index: number) => {
        expect(getAllByRole('option')[index]).toHaveTextContent(article.title);
      })
    });

    it('article을 선택할 수 있다.', () => {
      const { getByRole } = renderSelectBox();

      fireEvent.mouseDown(getByRole('button'));

      const listbox = within(getByRole('listbox'));

      fireEvent.click(listbox.getByText('220502수업예약'));

      expect(handleChange).toBeCalled();
    });
  });

  context('선택된 값이 있으면', () => {
    given('articles', () => [
      { title: '220504수업예약', articleNumber: '12345' },
      { title: '220503수업예약', articleNumber: '12232' },
      { title: '220502수업예약', articleNumber: '33232' },
    ])
    given('selected', () => given.articles[0].articleNumber);

    it('select box에 기본값으로 볼 수 있다', () => {
      const { container } = renderSelectBox();

      expect(container).toHaveTextContent(given.articles[0].title);
    });
  });
});

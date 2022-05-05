import { render } from "@testing-library/react";

import { mockTimeTable, mockUserList } from "../../../fixtures";

import TimeTable from './TimeTable';

describe('TimeTable', () => {
  given('timeTable', () => ({}));
  given('maxPersons', () => 0);

  const renderTimeTable = () => render(
    <TimeTable
      timeTable={given.timeTable}
      maxPersons={given.maxPersons}
    />,
  )

  it('예약자 현황 title을 볼 수 있다.', () => {
    const { container } = renderTimeTable();

    expect(container).toHaveTextContent('예약자 현황');
  });

  context('조회된 데이터가 없으면', () => {
    given('timeTable', () => ({}));

    it('조회된 결과가 없습니다 문구를 볼 수 있다', () => {
      const { container } = renderTimeTable();

      expect(container).toHaveTextContent('조회된 결과가 없습니다.');
    });
  });

  context('수업 시간, 예약자 데이터가 있으면', () => {
    const times = ['0630', '0900', '1200', '1700', '1800', '1900', '2000', '2100', '2200'];

    given('timeTable', () => mockUserList.data.timeTable);

    it('수업 시간 목록과 예약자 현황을 볼 수 있다', () => {
      const { container } = renderTimeTable();

      times.forEach((time) => {
        expect(container).toHaveTextContent(time);
      })

      mockTimeTable[0].forEach(({ name, phone }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(phone);
      })
    });
  });

  context('최대 인원 수가 있으면', () => {
    given('maxPersons', () => 13);

    it('cell에 1부터 maxPersons 까지의 숫자를 볼 수 있다', () => {
      const { getByRole } = renderTimeTable();

      const numbers = Array.from({ length: given.maxPersons }, (_, index) => index + 1);

      numbers.forEach((value) => {
        const cell = getByRole('columnheader', { name: value.toLocaleString() });

        expect(cell).toBeInTheDocument();
      })
    });
  });
});

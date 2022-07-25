import { render } from "@testing-library/react";

import { mockTimeTable, mockUserList } from "../../../fixtures";
import { TIMES } from "../../constants/times";

import ReservationBoard from './ReservationBoard';

describe('TimeTable', () => {
  given('timeTable', () => ({}));

  const renderTimeTable = () => render(
    <ReservationBoard timeTable={given.timeTable} />,
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
    given('timeTable', () => mockUserList.data.timeTable);

    it('수업 시간 목록과 예약자 현황을 볼 수 있다', () => {
      const { container } = renderTimeTable();

      TIMES.forEach((time) => {
        expect(container).toHaveTextContent(time);
      })

      mockTimeTable[0].forEach(({ name, phone }, index) => {
        expect(container).toHaveTextContent(`${index + 1}`);
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(phone);
      })
    });
  });

  context('한 타임에 예약자 데이터가 없으면', () => {
    const wrongTimeTable = {
      "1000": [],
      "1200": [
        {
          "name": "홍길동",
          "phone": "1234",
          "date": "2022.07.24. 23:00",
        },
      ],
    };

    given('timeTable', () => wrongTimeTable);

    it('해당 타임의 예약자는 볼 수 없다.', () => {
      const { container } = renderTimeTable();

      expect(container).toHaveTextContent('예약자가 없습니다.');
    });
  });
});

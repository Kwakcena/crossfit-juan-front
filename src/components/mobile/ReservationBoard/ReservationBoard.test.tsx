import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import ReservationBoard from "./ReservationBoard";

describe('ReservationBoard', () => {
  const renderReservationBoard = () => render(
    <ReservationBoard timeTable={given.timeTable} />
  );

  context('특정 시간에 예약자가 없으면', () => {
    given('timeTable', () => ({
      "1000": [],
    }));

    it('해당 시간을 클릭했을 때 "예약자가 없습니다." 메세지를 볼 수 있다.', () => {
      renderReservationBoard();

      fireEvent.click(screen.getByText('1000'));

      expect(screen.getByText('예약자가 없습니다.')).toBeInTheDocument();
    });
  });

  context('특정 시간에 예약자가 있으면', () => {
    given('timeTable', () => ({
      "1000": [
        { name: "김보라", phone: "7477", date: "2022.03.29. 22:30" },
        { name: "함새암", phone: "8368", date: "2022.03.29. 22:30" },
        { name: "김민주", phone: "4144", date: "2022.03.29. 22:33" },
      ]
    }));

    it('해당 시간의 총 인원수를 볼 수 있다.', () => {
      renderReservationBoard();

      const count = given.timeTable['1000'].length;

      expect(screen.getByText(`총 ${count}명`)).toBeInTheDocument();
    });

    it('해당 시간을 클릭했을 때 예약자 목록을 볼 수 있다.', () => {
      renderReservationBoard();

      fireEvent.click(screen.getByText('1000'));

      given.timeTable['1000'].forEach(async ({ name }: { name: string }) => {
        await waitFor(() => screen.getByRole('listitem'));
        expect(screen.getByRole('listitem')).toHaveTextContent(name);
      })
    });
  });
});
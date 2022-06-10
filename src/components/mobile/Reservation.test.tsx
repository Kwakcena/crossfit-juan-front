import { fireEvent, render } from "@testing-library/react";
import { mockUserList } from "../../../fixtures";
import Reservation from "./Reservation";

describe('Reservation', () => {
  const renderReservation = () => render(
    <Reservation
      time={given.time}
      users={given.users}
    />
  )

  context('시간이 주어지면', () => {
    given('time', () => '1900');

    it('시간을 볼 수 있다', () => {
      const { container } = renderReservation();

      expect(container).toHaveTextContent(given.time);
    });
  });

  context('사용자가 있으면', () => {
    given('time', () => '1900');
    given('users', () => mockUserList.data.timeTable["1900"]);

    it('해당 영역을 클릭하여 예약한 사람들을 볼 수 있다.', () => {
      const { container, getByText } = renderReservation();

      fireEvent.click(getByText('1900'));

      given.users.forEach(({ name, phone }: { name: string; phone: string; }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(phone);
      })
    });
  });
});
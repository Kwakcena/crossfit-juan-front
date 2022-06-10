import { render } from "@testing-library/react";
import { mockUserList } from "../../../../fixtures";
import Users from "./Users";

describe('Users', () => {
  const renderUsers = () => render(
    <Users users={given.users} />
  )

  context('해당 시간의 예약자 데이터가 있으면', () => {
    given('users', () => mockUserList.data.timeTable["1000"])

    it('예약한 사람들을 볼 수 있다.', () => {
      const { container } = renderUsers();

      given.users.forEach(({ name, phone }: { name: string; phone: string; }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(phone);
      })
    });
  });

  context('해당 시간의 예약자 데이터가 없으면', () => {
    given('users', () => []);

    it('"예약자가 없습니다" 메세지를 볼 수 있다.', () => {
      const { container } = renderUsers();

      expect(container).toHaveTextContent('예약자가 없습니다.');
    });
  });
});
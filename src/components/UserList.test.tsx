import { render } from '@testing-library/react';

import UserList from './UserList';

import { mockTimeTable } from '../../fixtures';

describe('UserList', () => {
  given('time', () => '');
  given('users', () => []);

  const renderUserList = () => render(
    <UserList time={given.time} users={given.users} />,
  )

  context('User 목록이 없으면', () => {
    it('아무것도 보이지 않는다.', () => {
      const { container } = renderUserList();

      expect(container).toBeEmptyDOMElement();
    });
  });

  context('시간과 User 목록이 있으면', () => {
    given('time', () => '1000');
    given('users', () => mockTimeTable[0]);

    it('시간, 예약한 유저 목록을 볼 수 있다.', () => {
      const { container } = renderUserList();

      expect(container).toHaveTextContent(`시간: ${given.time}`);
      mockTimeTable[0].forEach(({ name, phone, date }) => {
        expect(container).toHaveTextContent(`이름: ${name} [${phone}] 예약시간: ${date}`);
      })
    })
  })
})


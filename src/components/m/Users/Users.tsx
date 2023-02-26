import styled from "@emotion/styled";
import { isEmpty } from "lodash";

import { User } from "../../../interfaces";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  background-color: #f2f2f2;
`;

const Item = styled.li`
  position: relative;
  text-align: center;
  font-size: 0.85rem;
  padding: 8px 0;
  width: 25%;
  @media (min-width: 375px) {
    width: 20%;
  }
`;

const UserCount = styled.span`
  position: absolute;
  font-size: 0.5rem;
  top: 2px;
  left: 4px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 8px 0;
  background-color: #f2f2f2;
`;

interface Props {
  users: User[];
}

export default function Users({ users }: Props) {
  if (isEmpty(users)) {
    return <EmptyMessage>예약자가 없습니다.</EmptyMessage>;
  }

  return (
    <List>
      {users.map((user, index) => (
        <Item key={`${user.name}-${user.phone}`}>
          <UserCount>{index + 1}</UserCount>
          {user.name}
          <br />({user.phone})
        </Item>
      ))}
    </List>
  );
}

import useToggle from "../../hooks/useToggle";

import { User } from "../../interfaces";

import Collapse from "../Shared/Collapse";
import Users from "./Users/Users";

interface Props {
  time: string;
  users: User[];
}

export default function Reservation({
  time = '',
  users = [],
}: Props) {
  const { isOpen, toggle } = useToggle();

  return (
    <>
      <Collapse
        title={time}
        summary={`총 ${users.length}명`}
        opened={isOpen}
        onClick={toggle}
      >
        <Users users={users} />
      </Collapse>
    </>
  )
}
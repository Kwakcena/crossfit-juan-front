import { Times } from "../../constants/times";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import { User } from "../../interfaces";
import { tabToggle } from "../../slices/slice";

import Collapse from "../Shared/Collapse";
import Users from "./Users/Users";

interface Props {
  time: Times;
  users: User[];
}

export default function Reservation({ time, users = [] }: Props) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(({ app }) => app.toggleState[time]);

  const handleClickToggle = () => {
    dispatch(tabToggle({ time, isOpen: !isOpen }));
  };

  return (
    <>
      <Collapse
        title={time}
        summary={`총 ${users.length}명`}
        opened={isOpen}
        onClick={handleClickToggle}
      >
        <Users users={users} />
      </Collapse>
    </>
  );
}

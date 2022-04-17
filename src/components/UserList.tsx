import { User } from '../interfaces';

interface Props {
  time: string;
  users: User[],
}

export default function UserList({ time, users }: Props) {
  if (users.length === 0) {
    return null;
  }

  return (
    <div>
      <h2>시간: {time}</h2>
      <ul>
        {users.map(({ name, phone, date }) => (
          <li key={phone}>
            <strong>이름:</strong> {name} [{phone}] 예약시간: {date}
          </li>
        ))}
      </ul>
    </div>
  )
}
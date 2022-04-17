import UserList from "./components/UserList";

import { mockUserList } from "../fixtures";

export default function App() {
  return (
    <>
      {Object.entries(mockUserList.data.timeTable)
        .map(([key, value]) => (
          <UserList key={key} time={key} users={value} />
        ))}
    </>
  )
}
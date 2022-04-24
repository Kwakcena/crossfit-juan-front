import Header from "./components/Header";
import UserList from "./components/UserList";

import { CssBaseline } from "@mui/material";

import { mockUserList } from "../fixtures";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      {Object.entries(mockUserList.data.timeTable)
        .map(([key, value]) => (
          <UserList key={key} time={key} users={value} />
        ))}
    </>
  )
}

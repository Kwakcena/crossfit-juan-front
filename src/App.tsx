import Header from "./components/Header";
import UserList from "./components/UserList";
import Form from './components/Form';

import { CssBaseline } from "@mui/material";

import { mockUserList } from "../fixtures";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Form />
      {Object.entries(mockUserList.data.timeTable)
        .map(([key, value]) => (
          <UserList key={key} time={key} users={value} />
        ))}
    </>
  )
}

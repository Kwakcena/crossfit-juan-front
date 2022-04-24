import { Container } from '@mui/material';

import UserList from "./UserList";
import Form from "./Form";

import { mockUserList } from "../../fixtures";

export default function Main() {
  return (
    <Container component="main" maxWidth={false}>
      <Form />
      <div>main</div>
      {Object.entries(mockUserList.data.timeTable)
        .map(([key, value]) => (
          <UserList key={key} time={key} users={value} />
        ))}
    </Container>
  )
}

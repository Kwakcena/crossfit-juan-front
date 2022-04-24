import { Container } from '@mui/material';

import Form from "./Form";
import TimeTable from './TimeTable/TimeTable';

import { mockUserList } from '../../fixtures';

export default function Main() {
  return (
    <Container component="main" maxWidth={false}>
      <Form />
      {/* TODO: 실제 네트워크를 통해 불러 온 데이터를 전달해야 합니다. */}
      <TimeTable timeTable={mockUserList.data.timeTable} />
    </Container>
  )
}

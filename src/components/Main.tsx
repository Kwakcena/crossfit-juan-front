import { Container } from '@mui/material';

import Form from "./Form";
import TimeTable from './TimeTable/TimeTable';

export default function Main() {
  return (
    <Container component="main" maxWidth={false}>
      <Form />
      <TimeTable timeTable={{}} />
    </Container>
  )
}

import { Container } from '@mui/material';

import { useAppSelector } from '../hooks';

import Form from "./Form";
import TimeTable from './TimeTable/TimeTable';

export default function Main() {
  const { timeTable } = useAppSelector((state) => state.app);

  return (
    <Container component="main" maxWidth={false}>
      <Form />
      <TimeTable timeTable={timeTable} />
    </Container>
  )
}

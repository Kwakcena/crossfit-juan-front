import { Container } from '@mui/material';

import { useAppSelector } from '../hooks/hooks';

import Form from "./Form";
import TimeTable from './TimeTable/TimeTable';

export default function Main() {
  const { timeTable, maxPersons } = useAppSelector((state) => state.app);

  return (
    <Container component="main" maxWidth={false}>
      <Form />
      <TimeTable timeTable={timeTable} maxPersons={maxPersons} />
    </Container>
  )
}

import { useEffect, useState } from 'react';

import { Container } from '@mui/material';

import Form from "./Form";
import TimeTable from './TimeTable/TimeTable';

export default function Main() {
  const [timeTable, setTimeTable] = useState({});

  useEffect(() => {
    console.log('timeTable: ', timeTable);
  }, [timeTable])

  return (
    <Container component="main" maxWidth={false}>
      <Form setTimeTable={setTimeTable} />
      <TimeTable timeTable={timeTable} />
    </Container>
  )
}

import { Container, Divider, Paper, PaperProps, styled, Typography } from '@mui/material';

import { isMobile } from 'react-device-detect';

import { TIMES } from '../constants/times';

import { useAppSelector } from '../hooks/hooks';

import Form from "./Form";
import Reservation from './mobile/Reservation';
import TimeTable from './TimeTable/TimeTable';

const Wrapper = styled(Paper)<PaperProps>(() => ({
  padding: '4px',
}))

export default function Main() {
  const { timeTable, maxPersons } = useAppSelector((state) => state.app);

  return (
    <Container component="main" maxWidth={false}>
      <Form />
      {isMobile ? (
        <Wrapper elevation={3}>
          <Typography sx={{ pt: 2, pl: 2 }} variant="h6" component="h2">
            예약자 현황
          </Typography>
          {TIMES.map((time) => (
            <div key={time}>
              <Reservation
                time={time}
                users={timeTable[time]}
              />
              <Divider />
            </div>
          ))}
        </Wrapper>
      ) : (
        <TimeTable timeTable={timeTable} maxPersons={maxPersons} />
      )
      }
    </Container >
  )
}

import styled from "@emotion/styled"

import { Divider, Paper, PaperProps, Typography } from "@mui/material"
import { isMobile } from "react-device-detect"

import Reservation from "../components/mobile/Reservation"
import TimeTable from "../components/TimeTable/TimeTable"
import { TIMES } from "../constants/times"

import { useAppSelector } from "../hooks/hooks"

const Wrapper = styled(Paper)<PaperProps>(() => ({
  padding: '4px',
}))

export default function ReservationsContainer() {
  const { timeTable, maxPersons } = useAppSelector((state) => state.app);

  return (
    <>
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
      )}
    </>
  )
}
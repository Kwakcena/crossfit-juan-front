import {
  Divider,
  Paper,
  PaperProps,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";

import { times } from "../../../constants/times";

import { TimeTableInterface } from "../../../interfaces";

import Reservation from "../Reservation/Reservation";
import TabToggleButtons from "../TabToggleButtons/TabToggleButtons";

const Wrapper = styled(Paper)<PaperProps>(() => ({}));

const Title = styled(Typography)<TypographyProps>(() => ({
  padding: "16px 24px 0 16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

interface Props {
  timeTable: TimeTableInterface;
}

export default function ReservationBoard({ timeTable }: Props) {
  return (
    <Wrapper elevation={3}>
      <Title variant="h5">
        예약자 현황
        <TabToggleButtons />
      </Title>
      {times.map((time) => (
        <div key={time}>
          <Reservation time={time} users={timeTable[time]} />
          <Divider />
        </div>
      ))}
    </Wrapper>
  );
}

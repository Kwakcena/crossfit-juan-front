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

import Reservation from "../Reservation";
import TabToggleButtons from "../TabToggleButtons/TabToggleButtons";

const Wrapper = styled(Paper)<PaperProps>(() => ({}));

const Title = styled(Typography)<TypographyProps>(() => ({
  padding: "16px 0 0 16px",
}));

interface Props {
  timeTable: TimeTableInterface;
}

export default function ReservationBoard({ timeTable }: Props) {
  return (
    <Wrapper elevation={3}>
      <Title variant="h5">예약자 현황</Title>
      <TabToggleButtons />
      {times.map((time) => (
        <div key={time}>
          <Reservation time={time} users={timeTable[time]} />
          <Divider />
        </div>
      ))}
    </Wrapper>
  );
}

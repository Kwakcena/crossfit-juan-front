import { Container } from "@mui/material";

import { useAppSelector } from "../../../hooks/hooks";

import ClassDateSelectForm from "../../Shared/ClassDateSelectForm/ClassDateSelectForm";
import ReservationBoard from "../ReservationBoard/ReservationBoard";

export default function Main() {
  const { timeTable } = useAppSelector((state) => state.app);

  return (
    <Container component="main" maxWidth={false}>
      <ClassDateSelectForm />
      <ReservationBoard timeTable={timeTable} />
    </Container>
  );
}

import { Container } from "@mui/material";

import ReservationsContainer from "../containers/ReservationsContainer";

import ClassDateSelectForm from "./ClassDateSelectForm";

export default function Main() {
  return (
    <Container component="main" maxWidth={false}>
      <ClassDateSelectForm />
      <ReservationsContainer />
    </Container>
  );
}

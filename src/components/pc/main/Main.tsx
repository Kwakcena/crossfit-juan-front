import { Container } from "@mui/material";

import ReservationsContainer from "../../../containers/ReservationsContainer";

import ClassDateSelectForm from "../../Shared/ClassDateSelectForm/ClassDateSelectForm";

export default function Main() {
  return (
    <Container component="main" maxWidth={false}>
      <ClassDateSelectForm />
      <ReservationsContainer />
    </Container>
  );
}

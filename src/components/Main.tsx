import { Container } from '@mui/material';

import ReservationsContainer from '../containers/ReservationsContainer';

import Form from "./Form";

export default function Main() {
  return (
    <Container component="main" maxWidth={false}>
      <Form />
      <ReservationsContainer />
    </Container >
  )
}

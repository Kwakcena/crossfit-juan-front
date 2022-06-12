import { fetchUserTimeTable } from "../api"

import { Form } from "../interfaces"

export const getReservationData = async (form: Form) => {
  const { timeTable } = await fetchUserTimeTable(form);

  return {
    timeTable,
  };
}

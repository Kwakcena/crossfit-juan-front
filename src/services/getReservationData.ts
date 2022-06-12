import { fetchUserTimeTable } from "../api"

import { Form } from "../interfaces"

export const getReservationData = async (form: Form) => {
  const { timeTable, wrongData } = await fetchUserTimeTable(form);

  return {
    timeTable,
    failUsers: wrongData,
  };
}

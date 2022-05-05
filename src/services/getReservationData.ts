import { fetchUserTimeTable } from "../api"

import { Form } from "../interfaces"

export const getReservationData = async (form: Form) => {
  const { timeTable } = await fetchUserTimeTable(form);

  const maxPersons = Object.keys(timeTable)
    .reduce((acc, time) => (acc < timeTable[time].length ? timeTable[time].length : acc), 0);

  return {
    maxPersons,
    timeTable,
  };
}
import { mockUserList } from "../../fixtures";
import { fetchUserTimeTable } from "../api"

import { Form } from "../interfaces"

export const getReservationData = async (form: Form) => {
  // const { timeTable } = await fetchUserTimeTable(form);
  const { timeTable } = mockUserList.data;

  return {
    timeTable,
  };
}

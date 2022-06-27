import { fetchUserTimeTable } from "../api"

export const getReservationData = async (articleNumber: string) => {
  const { timeTable, wrongData } = await fetchUserTimeTable({ articleNumber });

  return {
    timeTable,
    failUsers: wrongData,
  };
}

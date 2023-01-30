import { useMutation } from "react-query";

import { useAppDispatch } from "../hooks/hooks";
import { getReservationData } from "../services";

import { FailUser, TimeTableInterface } from "../interfaces";
import { setFailUsers, setTimeTable } from "../slices/slice";
import { notify } from "../slices/page";
import { queryKeys } from "./queryKeys";

interface ResponseReservationData {
  timeTable: TimeTableInterface;
  failUsers: FailUser[];
}

export default function useGetReservations() {
  const dispatch = useAppDispatch();

  return useMutation(
    (articleNumber: string) => getReservationData(articleNumber),
    {
      mutationKey: queryKeys.reservations(),
      onSuccess: (response: ResponseReservationData) => {
        console.log(response);
        const { timeTable, failUsers } = response;
        dispatch(setTimeTable(timeTable));
        dispatch(setFailUsers(failUsers));
      },
      onError: (err: Error) => {
        dispatch(
          notify({
            title: "Error",
            message: err.message,
          }),
        );
        console.error(err);
      },
    },
  );
}

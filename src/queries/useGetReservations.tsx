import { useMutation } from "react-query";

import { useAppDispatch } from "../hooks/hooks";
import { getReservationData } from "../services";

import { TimeTableInterface } from "../interfaces";
import { setTimeTable } from "../slices/slice";
import { notify } from "../slices/page";
import { queryKeys } from "./queryKeys";

interface ResponseReservationData {
  timeTable: TimeTableInterface;
  failUsers: any;
}

export default function useGetReservations() {
  const dispatch = useAppDispatch();

  return useMutation(
    (articleNumber: string) => getReservationData(articleNumber),
    {
      mutationKey: queryKeys.reservations(),
      onSuccess: (response: ResponseReservationData) => {
        const { timeTable } = response;
        dispatch(setTimeTable(timeTable));
      },
      onError: (err: Error) => {
        dispatch(
          notify({
            title: "Error",
            message: err.message,
          })
        );
        console.error(err);
      },
    }
  );
}

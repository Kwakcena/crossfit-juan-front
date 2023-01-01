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
            message:
              "일시적인 장애가 발생했습니다.\n관리자에게 문의 해 주세요.",
          })
        );
        console.error(err);
      },
    }
  );
}

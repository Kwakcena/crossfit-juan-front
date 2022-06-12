import { isMobile } from "react-device-detect"

import ReservationBoard from "../components/mobile/ReservationBoard/ReservationBoard"
import TimeTable from "../components/TimeTable/TimeTable"

import { useAppSelector } from "../hooks/hooks"

export default function ReservationsContainer() {
  const { timeTable, maxPersons } = useAppSelector((state) => state.app);

  return (
    <>
      {isMobile ? (
        <ReservationBoard timeTable={timeTable} />
      ) : (
        <TimeTable timeTable={timeTable} maxPersons={maxPersons} />
      )}
    </>
  )
}

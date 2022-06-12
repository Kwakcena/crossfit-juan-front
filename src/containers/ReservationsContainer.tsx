import { isMobile } from "react-device-detect"

import ReservationBoardMobile from "../components/mobile/ReservationBoard/ReservationBoard"
import ReservationBoardPC from "../components/ReservationBoard/ReservationBoard"

import { useAppSelector } from "../hooks/hooks"

export default function ReservationsContainer() {
  const { timeTable } = useAppSelector((state) => state.app);

  return (
    <>
      {isMobile ? (
        <ReservationBoardMobile timeTable={timeTable} />
      ) : (
        <ReservationBoardPC timeTable={timeTable} />
      )}
    </>
  )
}

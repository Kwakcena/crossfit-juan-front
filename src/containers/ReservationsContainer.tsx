import styled from "@emotion/styled"
import { isMobile } from "react-device-detect"

import ReservationBoardMobile from "../components/mobile/ReservationBoard/ReservationBoard"
import ReservationBoardPC from "../components/ReservationBoard/ReservationBoard"
import ReservationFailUserList from "../components/ReservationFailUserList/ReservationFailUserList"

import { useAppSelector } from "../hooks/hooks"

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export default function ReservationsContainer() {
  const { timeTable } = useAppSelector((state) => state.app);

  return (
    <>
      {isMobile ? (
        <ReservationBoardMobile timeTable={timeTable} />
      ) : (
        <Wrapper>
          <ReservationBoardPC timeTable={timeTable} />
          <ReservationFailUserList />
        </Wrapper>
      )}
    </>
  )
}

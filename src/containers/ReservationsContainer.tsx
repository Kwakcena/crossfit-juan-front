import styled from "@emotion/styled"

import ReservationBoardPC from "../components/pc/ReservationBoard/ReservationBoard"
import ReservationFailUserList from "../components/pc/ReservationFailUserList/ReservationFailUserList"

import { useAppSelector } from "../hooks/hooks"

const Wrapper = styled.div`
  display: flex;
`

export default function ReservationsContainer() {
  const { timeTable } = useAppSelector((state) => state.app);

  return (
    <>
      <Wrapper>
        <ReservationBoardPC timeTable={timeTable} />
        <ReservationFailUserList />
      </Wrapper>
    </>
  )
}

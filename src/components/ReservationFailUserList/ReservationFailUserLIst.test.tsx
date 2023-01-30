import { initialState } from "../../slices/slice";
import { renderWithProviders } from "../../utils/test-utils";

import ReservationFailUserList from "./ReservationFailUserList";

describe('ReservationFailUserList', () => {
  const renderReservationFailUserList = () => renderWithProviders(<ReservationFailUserList />)

  it('예약 실패 리스트 title을 볼 수 있다.', () => {
    const { queryByText } = renderReservationFailUserList();

    expect(queryByText('예약 실패 리스트')).toBeInTheDocument();
  });

  context('예약 실패자 목록이 있으면', () => {
    const initialFailUsers = [
      {
        nickName: '잘못 예약한 사람 이름',
        date: "2023.01.29 22:34",
        content: '잘못된 예약',
      },
    ]

    it('실패한 사람의 nickname과 content를 볼 수 있다.', () => {
      const { queryByText } = renderWithProviders(<ReservationFailUserList />, {
        preloadedState: {
          app: {
            ...initialState,
            failUsers: initialFailUsers,
          },
        },
      })

      expect(queryByText(initialFailUsers[0].content)).toBeInTheDocument();
    });
  });
});

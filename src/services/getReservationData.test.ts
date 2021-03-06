import { mockUserList } from "../../fixtures";

import { fetchUserTimeTable } from "../api";
import { getReservationData } from './getReservationData';

jest.mock('../api');

describe('getReservationData service', () => {
  beforeEach(() => {
    (fetchUserTimeTable as jest.Mock).mockResolvedValue(mockUserList.data);
  })

  it('예약 현황을 불러와서 각 수업의 인원, 가장 많은 인원의 수를 구한다', async () => {
    const articleNumber = '1234';

    const result = await getReservationData(articleNumber);

    expect(result.timeTable).toEqual(mockUserList.data.timeTable);
    expect(result.failUsers).toEqual(mockUserList.data.wrongData);
  });
});

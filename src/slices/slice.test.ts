import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";

import { AppDispatch } from "../store";
import { getClassArticles, getReservationData } from "../services";

import reducer, {
  initialState,
  setTimeTable,
  setFailUsers,
  tabToggle,
} from "./slice";

import { mockUserList } from "../../fixtures";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("../services");

describe("slice", () => {
  let store: MockStoreEnhanced<unknown, AppDispatch>;

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        ...initialState,
      },
    }));

    (getReservationData as jest.Mock).mockResolvedValue({
      timeTable: mockUserList.data.timeTable,
      failUsers: mockUserList.data.wrongData,
    });
    (getClassArticles as jest.Mock).mockResolvedValue([
      { title: "220504수업예약", articleNumber: "12345" },
      { title: "220503수업예약", articleNumber: "12232" },
      { title: "220502수업예약", articleNumber: "33232" },
    ]);
  });

  describe("setTimeTable", () => {
    const mockData = {
      "0900": [
        { name: "홍길동", phone: "1234", date: "2022.03.29. 22:30" },
        { name: "김철수", phone: "5678", date: "2022.03.29. 22:30" },
      ],
    };

    it("timeTable의 상태를 변경한다", () => {
      const { timeTable } = reducer(initialState, setTimeTable(mockData));

      expect(timeTable).toEqual(mockData);
    });
  });

  describe("setFailUsers", () => {
    it("예약 실패한 사용자를 update 한다.", () => {
      const mockData = {
        ...mockUserList.data.wrongData,
      };

      const { failUsers } = reducer(initialState, setFailUsers(mockData));

      expect(failUsers).toEqual(mockData);
    });
  });

  describe("tabToggle", () => {
    it("예약자 현황의 탭을 open / close 한다.", () => {
      const { toggleState } = reducer(
        initialState,
        tabToggle({
          time: "2200",
          isOpen: true,
        })
      );

      expect(toggleState["2200"]).toEqual(true);
    });
  });
});

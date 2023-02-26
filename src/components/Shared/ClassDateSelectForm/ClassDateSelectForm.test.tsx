import { fireEvent, render, waitFor } from "@testing-library/react";

import { useSelector, useDispatch } from "react-redux";

import configureStore, { MockStoreEnhanced } from "redux-mock-store";

import thunk from "redux-thunk";

import Form from "./ClassDateSelectForm";

import { getReservationData } from "../../../services";
import { mockUserList } from "../../../../fixtures";

import { initialState } from "../../../slices/slice";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("../services");
jest.mock("react-redux");

describe("Form", () => {
  let store: MockStoreEnhanced<unknown>;

  given("articles", () => []);

  const renderForm = () => render(<Form />);

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        ...initialState,
        articles: given.articles,
      },
    }));

    (useDispatch as jest.Mock).mockImplementation(() => store.dispatch);
    (useSelector as jest.Mock).mockImplementation((selector) =>
      selector(store.getState()),
    );

    (getReservationData as jest.Mock).mockResolvedValue({
      timeTable: mockUserList.data.timeTable,
      failUsers: mockUserList.data.wrongData,
    });
  });

  it("수업 선택 창을 볼 수 있다", () => {
    const { getByText, getByLabelText } = renderForm();

    expect(getByText("수업 선택")).toBeInTheDocument();
    expect(getByLabelText("수업을 선택해주세요")).toBeInTheDocument();
  });

  it('"제출하기" 버튼을 누르면 setTimeTable action이 실행된다.', async () => {
    const { getByText } = renderForm();

    fireEvent.click(getByText("제출하기"));

    await waitFor(() => {
      const actions = store.getActions();

      expect(actions[0].type).toBe("app/setLoadingState");

      expect(actions[1].type).toBe("app/setTimeTable");
      expect(actions[1].payload).toEqual(mockUserList.data.timeTable);

      expect(actions[2].type).toBe("app/setFailUsers");
      expect(actions[2].payload).toEqual(mockUserList.data.wrongData);

      expect(actions[3].type).toBe("app/setLoadingState");
    });
  });
});

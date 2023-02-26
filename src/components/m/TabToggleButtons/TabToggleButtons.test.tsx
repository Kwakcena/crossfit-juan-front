import { fireEvent, render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";

import { allCloseTabs, allOpenTabs, initialState } from "../../../slices/slice";

import TabToggleButtons from "./TabToggleButtons";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock("react-redux");

describe("TabToggleButtons", () => {
  let store: MockStoreEnhanced<unknown>;

  const renderTabToggleButtons = () => render(<TabToggleButtons />);

  beforeEach(() => {
    store = mockStore(() => ({
      app: {
        ...initialState,
      },
    }));
    (useDispatch as jest.Mock).mockImplementation(() => store.dispatch);
  });

  it("'전체 열기', '전체 닫기' 버튼을 볼 수 있다.", () => {
    const { getByText } = renderTabToggleButtons();

    expect(getByText("전체 열기")).toBeInTheDocument();
    expect(getByText("전체 닫기")).toBeInTheDocument();
  });

  context("전체 열기를 클릭하면", () => {
    it("allOpenTab action 을 실행한다.", () => {
      const { getByText } = renderTabToggleButtons();

      const allOpenButton = getByText("전체 열기");

      fireEvent.click(allOpenButton);

      const actions = store.getActions();

      expect(actions[0]).toEqual(allOpenTabs());
    });
  });

  context("전체 닫기를 클릭하면", () => {
    it("allCloseTab action 을 실행한다.", () => {
      const { getByText } = renderTabToggleButtons();

      const allCloseButton = getByText("전체 닫기");

      fireEvent.click(allCloseButton);

      const actions = store.getActions();

      expect(actions[0]).toEqual(allCloseTabs());
    });
  });
});

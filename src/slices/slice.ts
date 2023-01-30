import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { times, Times } from "../constants/times";

import { FailUser, User } from "../interfaces";

export interface AppState {
  timeTable: {
    [x: string]: User[];
  };
  failUsers: FailUser[];
  toggleState: {
    [x: string]: boolean;
  };
}

export const initialState: AppState = {
  timeTable: {},
  failUsers: [],
  toggleState: times.reduce((acc, time) => ({ ...acc, [time]: false }), {}),
};

export const { actions, reducer } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTimeTable: (state, { payload: timeTable }) => ({
      ...state,
      timeTable,
    }),
    setFailUsers: (state, { payload: failUsers }) => ({
      ...state,
      failUsers,
    }),
    tabToggle: (
      state,
      {
        payload: { time, isOpen },
      }: PayloadAction<{ time: Times; isOpen: boolean }>,
    ) => {
      state.toggleState[time] = isOpen;
    },
    allOpenTabs: (state) => {
      const allOpenState = Object.keys(state.toggleState).reduce(
        (acc, time) => ({ ...acc, [time]: true }),
        {},
      );

      state.toggleState = allOpenState;
    },
    allCloseTabs: (state) => {
      const allCloseTabs = Object.keys(state.toggleState).reduce(
        (acc, time) => ({ ...acc, [time]: false }),
        {},
      );

      state.toggleState = allCloseTabs;
    },
  },
});

export const {
  setTimeTable,
  setFailUsers,
  tabToggle,
  allOpenTabs,
  allCloseTabs,
} = actions;

export default reducer;

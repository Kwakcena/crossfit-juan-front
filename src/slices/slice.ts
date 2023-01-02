import { createSlice } from "@reduxjs/toolkit";

import { User } from "../interfaces";

export interface AppState {
  timeTable: {
    [x: string]: User[];
  };
  failUsers: User[];
}

export const initialState: AppState = {
  timeTable: {},
  failUsers: [],
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
  },
});

export const { setTimeTable, setFailUsers } = actions;

export default reducer;

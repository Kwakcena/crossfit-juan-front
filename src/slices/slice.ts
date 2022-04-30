import { createSlice } from "@reduxjs/toolkit";
import { User } from "../interfaces";

export interface AppState {
  form: {
    naverId: string;
    naverPw: string;
    articleNumber: string;
  }
  timeTable: {
    [x: string]: User[],
  }
}

export const initialState: AppState = {
  form: {
    naverId: '',
    naverPw: '',
    articleNumber: '',
  },
  timeTable: {},
}

export const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setForm: (state, { payload: { name, value } }) => ({
      ...state,
      form: {
        ...state.form,
        [name]: value,
      },
    }),
    setTimeTable: (state, { payload: timeTable }) => ({
      ...state,
      timeTable,
    }),
  },
})

export const {
  setForm,
  setTimeTable,
} = actions;

export default reducer;

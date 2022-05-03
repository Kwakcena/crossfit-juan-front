import { createSlice } from "@reduxjs/toolkit";

import { loadUserTimeTable } from "../api";
import { User } from "../interfaces";
import { AppThunk } from "../store";

export interface AppState {
  form: {
    naverId: string;
    naverPw: string;
    articleNumber: string;
  }
  timeTable: {
    [x: string]: User[],
  }
  loading: {
    isLoading: boolean,
    message: string;
  };
}

export const initialState: AppState = {
  form: {
    naverId: '',
    naverPw: '',
    articleNumber: '',
  },
  timeTable: {},
  loading: {
    isLoading: false,
    message: '',
  },
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
    setLoadingState: (state, { payload }) => ({ ...state, loading: payload }),
  },
})

export const {
  setForm,
  setTimeTable,
  setLoadingState,
} = actions;

export const submitForm = (): AppThunk => async (dispatch, getState) => {
  const { app } = getState();
  const { form } = app;

  dispatch(setLoadingState({
    isLoading: true,
    message: '데이터를 불러오고 있습니다...',
  }));

  try {
    const { timeTable } = await loadUserTimeTable(form);
    dispatch(setTimeTable(timeTable));
  } catch (err) {
    // TODO: Error 처리를 해야 함.
    console.error(err);
  } finally {
    dispatch(setLoadingState({
      isLoading: false,
      message: '',
    }));
  }
}

export default reducer;

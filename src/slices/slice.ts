import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  form: {
    naverId: string;
    naverPw: string;
    articleNumber: string;
  }
}

export const initialState: AppState = {
  form: {
    naverId: '',
    naverPw: '',
    articleNumber: '',
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
  },
})

export const {
  setForm,
} = actions;

export default reducer;

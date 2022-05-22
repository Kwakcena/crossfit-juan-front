import { createSlice } from "@reduxjs/toolkit";

export interface PageState {
  title: string;
  message: string;
}

export const initialState: PageState = {
  title: '',
  message: '',
}

export const { actions, reducer } = createSlice({
  name: 'page',
  initialState,
  reducers: {
    notify: (state, { payload: { title, message } }) => ({
      ...state,
      title,
      message,
    }),
    clear: () => ({ ...initialState }),
  },
})

export const { notify, clear } = actions;

export default reducer

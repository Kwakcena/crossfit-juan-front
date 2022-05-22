import { createSlice } from "@reduxjs/toolkit";

export interface PageState {
  message: string;
}

export const initialState: PageState = {
  message: '',
}

export const { actions, reducer } = createSlice({
  name: 'page',
  initialState,
  reducers: {
    notify: (state, { payload: message }) => ({ ...state, message }),
    clear: () => ({ ...initialState }),
  }
})

export const { notify, clear } = actions;

export default reducer
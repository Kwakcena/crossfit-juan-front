import { createSlice } from "@reduxjs/toolkit";

import { ClassArticle, User } from "../interfaces";

export interface AppState {
  articleNumber: string;
  timeTable: {
    [x: string]: User[];
  };
  failUsers: User[];
  articles: ClassArticle[];
}

export const initialState: AppState = {
  articleNumber: "",
  timeTable: {},
  failUsers: [],
  articles: [],
};

export const { actions, reducer } = createSlice({
  name: "app",
  initialState,
  reducers: {
    setArticleNumber: (state, { payload: articleNumber }) => ({
      ...state,
      articleNumber,
    }),
    setTimeTable: (state, { payload: timeTable }) => ({
      ...state,
      timeTable,
    }),
    setFailUsers: (state, { payload: failUsers }) => ({
      ...state,
      failUsers,
    }),
    setArticles: (state, { payload: articles }) => ({ ...state, articles }),
  },
});

export const { setArticleNumber, setTimeTable, setFailUsers, setArticles } =
  actions;

export default reducer;

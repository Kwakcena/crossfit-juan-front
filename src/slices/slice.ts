import { createSlice } from "@reduxjs/toolkit";

import { ClassArticle, User } from "../interfaces";
import { getReservationData } from "../services";

import { AppThunk } from "../store";
import { notify } from "./page";

export interface AppState {
  articleNumber: string;
  timeTable: {
    [x: string]: User[];
  };
  failUsers: User[];
  articles: ClassArticle[];
  loading: {
    isLoading: boolean;
    message: string;
  };
}

export const initialState: AppState = {
  articleNumber: "",
  timeTable: {},
  failUsers: [],
  articles: [],
  loading: {
    isLoading: false,
    message: "",
  },
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
    setLoadingState: (state, { payload }) => ({ ...state, loading: payload }),
  },
});

export const {
  setArticleNumber,
  setTimeTable,
  setFailUsers,
  setArticles,
  setLoadingState,
} = actions;

export const submitForm =
  ({ articleNumber }: { articleNumber: string }): AppThunk =>
    async (dispatch) => {
      dispatch(
        setLoadingState({
          isLoading: true,
          message: "데이터를 불러오고 있습니다...",
        }),
      )

      try {
        const { timeTable, failUsers } = await getReservationData(articleNumber);

        dispatch(setTimeTable(timeTable));
        dispatch(setFailUsers(failUsers));
      } catch (err) {
      // TODO: Error 처리를 해야 함.
        dispatch(
          notify({
            title: "Error",
            message: "일시적인 장애가 발생했습니다.\n관리자에게 문의 해 주세요.",
          }),
        );
        console.error(err);
      } finally {
        dispatch(
          setLoadingState({
            isLoading: false,
            message: "",
          }),
        );
      }
    };

export default reducer;

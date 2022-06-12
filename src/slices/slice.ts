import { createSlice } from "@reduxjs/toolkit";

import { ClassArticle, Form, User } from "../interfaces";
import { getClassArticles, getReservationData } from "../services";

import { AppThunk } from "../store";
import { notify } from "./page";

export interface AppState {
  form: Form,
  timeTable: {
    [x: string]: User[],
  }
  failUsers: User[],
  articles: ClassArticle[];
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
  failUsers: [],
  articles: [],
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
    setArticleNumber: (state, { payload: articleNumber }) => ({
      ...state,
      form: {
        ...state.form,
        articleNumber,
      },
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
})

export const {
  setForm,
  setArticleNumber,
  setTimeTable,
  setFailUsers,
  setArticles,
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
    const { timeTable } = await getReservationData(form);

    dispatch(setTimeTable(timeTable));
  } catch (err) {
    // TODO: Error 처리를 해야 함.
    dispatch(notify({
      title: 'Error',
      message: '일시적인 장애가 발생했습니다.\n관리자에게 문의 해 주세요.',
    }));
    console.error(err);
  } finally {
    dispatch(setLoadingState({
      isLoading: false,
      message: '',
    }));
  }
}

export const loadClassReservationArticles = (): AppThunk => async (dispatch) => {
  dispatch(setLoadingState({
    isLoading: true,
    message: '수업 예약 글 목록을 불러오고 있습니다...',
  }));

  try {
    const articles = await getClassArticles();

    dispatch(setArticles(articles));
  } catch (err) {
    // TODO: Error 처리를 해야 함.
    dispatch(notify({
      title: 'Error',
      message: '일시적인 장애가 발생했습니다.\n관리자에게 문의 해 주세요.',
    }));
    console.error(err);
  } finally {
    dispatch(setLoadingState({
      isLoading: false,
      message: '',
    }));
  }
}

export default reducer;

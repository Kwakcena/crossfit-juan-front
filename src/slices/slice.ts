import { createSlice } from "@reduxjs/toolkit";

import { ClassArticle, Form, User } from "../interfaces";
import { getClassArticles, getReservationData } from "../services";

import { AppThunk } from "../store";

export interface AppState {
  form: Form,
  timeTable: {
    [x: string]: User[],
  }
  maxPersons: number;
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
  maxPersons: 0,
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
    setMaxPersons: (state, { payload: maxPersons }) => ({ ...state, maxPersons }),
    setArticles: (state, { payload: articles }) => ({ ...state, articles }),
    setLoadingState: (state, { payload }) => ({ ...state, loading: payload }),
  },
})

export const {
  setForm,
  setArticleNumber,
  setTimeTable,
  setMaxPersons,
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
    const { timeTable, maxPersons } = await getReservationData(form);

    dispatch(setTimeTable(timeTable));
    dispatch(setMaxPersons(maxPersons));
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
    console.error(err);
  } finally {
    dispatch(setLoadingState({
      isLoading: false,
      message: '',
    }));
  }
}

export default reducer;

import {
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";

import { AnyAction, combineReducers } from "redux";

import appReducer from './slices/slice';
import pageReducer from './slices/page';

const reducer = combineReducers({
  app: appReducer,
  page: pageReducer,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

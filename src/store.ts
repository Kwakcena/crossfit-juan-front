import {
  configureStore,
  combineReducers,
  ThunkAction,
} from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";

import { AnyAction } from "redux";

import appReducer from './slices/slice';
import pageReducer from './slices/page';

const rootReducer = combineReducers({
  app: appReducer,
  page: pageReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

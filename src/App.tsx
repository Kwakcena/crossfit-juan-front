import { useEffect } from "react";
import { CssBaseline } from "@mui/material";

import Header from "./components/Header";
import Main from './components/Main';
import Loading from "./components/Loading/Loading";

import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import usePage from "./hooks/usePage";

import { loadClassReservationArticles } from "./slices/slice";

export default function App() {
  usePage();

  const dispatch = useAppDispatch();

  const { loading: { isLoading, message } } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(loadClassReservationArticles());
  }, [])

  return (
    <>
      <CssBaseline />
      {isLoading && <Loading text={message} />}
      <Header />
      <Main />
    </>
  )
}

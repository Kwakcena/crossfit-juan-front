import { useEffect } from "react";
import { CssBaseline } from "@mui/material";

import styled from "@emotion/styled";

import Header from "./components/Header";
import Main from './components/Main';
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";

import GlobalStyles from "./GlobalStyles";

import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { loadClassReservationArticles } from "./slices/slice";

import usePage from "./hooks/usePage";

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100%;
  position: relative;
  width: 100%;
`

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
      <GlobalStyles />
      {isLoading && <Loading text={message} />}
      <Wrap>
        <Header />
        <Main />
        <Footer />
      </Wrap>
    </>
  )
}

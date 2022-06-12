import { useEffect } from "react";
import { CssBaseline } from "@mui/material";

import styled from "@emotion/styled";

import Header from "./components/Header";
import Main from './components/Main';
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";

import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { loadClassReservationArticles } from "./slices/slice";

import usePage from "./hooks/usePage";
import { css, Global } from "@emotion/react";

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
      <Global styles={css`
        html, body, #app {
          height: 100%;
        }
      `} />
      {isLoading && <Loading text={message} />}
      <Wrap>
        <Header />
        <Main />
        <Footer />
      </Wrap>
    </>
  )
}

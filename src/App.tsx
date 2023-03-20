import { CssBaseline } from "@mui/material";

import styled from "@emotion/styled";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

import GlobalStyles from "./GlobalStyles";

import usePage from "./hooks/usePage";

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100%;
  position: relative;
  width: 100%;
`;

export default function App() {
  usePage();

  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      <Wrap>
        <Header />
        <Main />
        <Footer />
      </Wrap>
    </>
  );
}

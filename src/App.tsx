import { CssBaseline } from "@mui/material";

import styled from "@emotion/styled";

import Header from "./components/Header";
import Main from "./components/Main";
import Loading from "./components/Loading/Loading";
import Footer from "./components/Footer/Footer";
import PullToRefresh from "react-simple-pull-to-refresh";

import GlobalStyles from "./GlobalStyles";

import { useAppSelector } from "./hooks/hooks";

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

  const {
    loading: { isLoading, message },
  } = useAppSelector((state) => state.app);

  return (
    <>
      <CssBaseline />
      <GlobalStyles />
      {isLoading && <Loading text={message} />}
      <PullToRefresh
        onRefresh={async () => window.location.reload()}
        pullingContent=""
        pullDownThreshold={95}
        maxPullDownDistance={105}
      >
        <Wrap>
          <Header />
          <Main />
          <Footer />
        </Wrap>
      </PullToRefresh>
    </>
  );
}

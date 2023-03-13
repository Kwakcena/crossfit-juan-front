// import { CssBaseline } from "@mui/material";

import styled from "@emotion/styled";

// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer/Footer";

import GlobalStyles from "./GlobalStyles";

// import usePage from "./hooks/usePage";

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  text-align: center;
`

function Wrapper() {
  return (
    <Wrap>
      <Box>
        <h1>주안 크로스핏</h1>
        <p>현재 사이트 공사중입니다. 다음에 다시 방문 해 주세요.</p>
      </Box>
    </Wrap>
  )
}

export default function App() {
  // usePage();

  return (
    <>
      <GlobalStyles />
      <Wrapper />
    </>
  )

}

import styled from "@emotion/styled";

import Header from "../src/components/Header";
import Main from "../src/components/Main";
import Footer from "../src/components/Footer/Footer";

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100%;
  position: relative;
  width: 100%;
`;

export default function App() {
  return (
    <Wrap>
      <Header />
      <Main />
      <Footer />
    </Wrap>
  );
}

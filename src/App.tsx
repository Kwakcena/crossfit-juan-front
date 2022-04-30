import Header from "./components/Header";
import Main from './components/Main';

import { CssBaseline } from "@mui/material";
import Loading from "./components/Loading/Loading";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Loading />
      <Header />
      <Main />
    </>
  )
}

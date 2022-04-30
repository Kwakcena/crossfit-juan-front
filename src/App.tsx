import Header from "./components/Header";
import Main from './components/Main';

import { CssBaseline } from "@mui/material";
import { useAppSelector } from "./hooks";
import Loading from "./components/Loading/Loading";

export default function App() {
  const { loading: { isLoading, message } } = useAppSelector((state) => state.app);

  return (
    <>
      <CssBaseline />
      {isLoading && <Loading text={message} />}
      <Header />
      <Main />
    </>
  )
}

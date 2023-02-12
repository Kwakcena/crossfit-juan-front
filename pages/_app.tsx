import { useState } from "react";

import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";

import { CssBaseline } from "@mui/material";

import { setupStore } from "../src/store";

import usePage from "../src/hooks/usePage";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  usePage();

  return (
    <Component {...pageProps} />
  )
}

export default function App(props: AppProps) {
  const store = setupStore();

  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CssBaseline />
        <MyApp {...props} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

// serviceWorkerRegistration.register();

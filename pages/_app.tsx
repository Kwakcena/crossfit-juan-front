import { useState } from "react";
import Head from "next/head";

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
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>크로스핏 주안</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default function App(props: AppProps) {
  const store = setupStore();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CssBaseline />
        <MyApp {...props} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

// serviceWorkerRegistration.register();

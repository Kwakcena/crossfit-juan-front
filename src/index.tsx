import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";

import { store } from "./store";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const root = createRoot(document.getElementById("app") as Element);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

serviceWorkerRegistration.register();

import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";

import { store } from "./store";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = createRoot(document.getElementById("app") as Element);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

serviceWorkerRegistration.register();

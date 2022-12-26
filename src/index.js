import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store/with_reduxtoolKit/storeV2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

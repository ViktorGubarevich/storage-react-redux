import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

import { saveState } from "./store/localStorage";

saveState("accounts", {
  admin: 12345,
  admin2: 123456,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

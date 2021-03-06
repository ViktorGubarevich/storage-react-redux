import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

import { saveState } from "./_helpers/localStorage";

saveState({
  users: {
    admin: {
      password: "12345",
    },
    admin2: {
      password: "123456",
    },
  },
});

// saveState([
//   {
//     users: [
//       { username: "admin", password: "12345" },
//       { username: "admin2", password: "123456" },
//     ],
//   },
// ]);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

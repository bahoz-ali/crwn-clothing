// eslint-disable-next-line
import React from "react";
import ReactDom from "react-dom";
import App from "./app.js";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

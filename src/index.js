// eslint-disable-next-line
import React from "react";
import ReactDom from "react-dom";
import App from "./app.js";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

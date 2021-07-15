import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/styles.css";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

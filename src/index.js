import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Draw from "./Drawer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Draw />
  </React.StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
// import { MainContextProvider } from "./Context/mainContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MainContextProvider> */}
        <App />
      {/* </MainContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

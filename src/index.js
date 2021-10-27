import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./Context/dataContext";
import { DataRepoContextProvider } from "./Context/repoContext";
import { LoginContextProvider } from "./Context/loginContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <DataRepoContextProvider>
          <LoginContextProvider>
            <App />
          </LoginContextProvider>
        </DataRepoContextProvider>
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

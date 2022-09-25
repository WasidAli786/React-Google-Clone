import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextState from "./Container/Hooks/ContextState";
import "./index.css";
import store from "./Redux/store";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ContextState>
          <App />
        </ContextState>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

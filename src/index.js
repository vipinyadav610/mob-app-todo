import React from "react";
import { Provider } from "mobx-react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import * as stores from "./Stores/indexStore";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <>
    <Provider {...stores}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

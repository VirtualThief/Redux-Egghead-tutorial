import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles.css";

import configureStore from "./configureStore";
import App from "./App";

const store = configureStore();

const Root = ({ store }) => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import throttle from "lodash.throttle";

import "./styles.css";

import { saveState, loadState } from "./localStorage";
import rootReducer from "./reducers/rootReducer";
import TodoListContainer from "./containers/TodoListContainer";
import FiltersFooterContainer from "./containers/FiltersFooterContainer";

const initialState = loadState();
const store = createStore(rootReducer, initialState);
store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000)
);

const App = () => (
  <>
    <h1>TODOs:</h1>
    <TodoListContainer />
    <FiltersFooterContainer />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

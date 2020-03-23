import { createStore } from "redux";
import throttle from "lodash.throttle";

import { saveState, loadState } from "./localStorage";
import rootReducer from "./reducers/rootReducer";

const configureStore = () => {
  const initialState = loadState();
  const store = createStore(rootReducer, initialState);
  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos
      });
    }, 1000)
  );

  return store;
};

export default configureStore;

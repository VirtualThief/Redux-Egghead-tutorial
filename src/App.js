import React from "react";

import TodoListContainer from "./containers/TodoListContainer";
import FiltersFooterContainer from "./containers/FiltersFooterContainer";

const App = () => (
  <>
    <h1>TODOs:</h1>
    <TodoListContainer />
    <FiltersFooterContainer />
  </>
);

export default App;

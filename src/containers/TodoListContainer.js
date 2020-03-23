import React from "react";
import { connect } from "react-redux";

import { addTodo, toggleTodo } from "../actions/todos";
import TodoItemList from "../components/TodoItemList";

const TodoListContainer = ({ displayedTodos, onAddTodo, onTodoClick }) => (
  <>
    <button onClick={onAddTodo}>Add todo</button>
    <TodoItemList todos={displayedTodos} onTodoClick={onTodoClick} />
  </>
);

const getTodosFilter = filter => todo => {
  switch (filter) {
    case "DISPLAY_ALL":
      return true;
    case "DISPLAY_ACTIVE":
      return !todo.completed;
    case "DISPLAY_COMPLETED":
      return todo.completed;
    default:
      throw Error(`Unexpected filter ${filter}`);
  }
};

const mapStateToProps = state => ({
  displayedTodos: state.todos.filter(getTodosFilter(state.visibilityFilter))
});

const mapDispatchToProps = dispatch => ({
  onAddTodo() {
    dispatch(addTodo("Test"));
  },
  onTodoClick(todo) {
    dispatch(toggleTodo(todo.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer);

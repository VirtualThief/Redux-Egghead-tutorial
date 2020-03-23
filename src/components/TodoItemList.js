import React from "react";

import TodoItem from "./TodoItem";

const TodoItemList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} onClick={() => onTodoClick(todo)} />
    ))}
  </ul>
);

export default TodoItemList;

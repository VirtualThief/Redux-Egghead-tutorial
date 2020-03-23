import React from "react";

const TodoItem = ({ todo, onClick }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: todo.completed ? "line-through" : ""
    }}
  >
    {todo.name}
  </li>
);

export default TodoItem;

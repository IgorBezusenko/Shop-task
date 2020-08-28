import React from "react";
import TodoHeader from "../todo/todo-header";
import TodoSearch from "../todo/todo-search";
import TodoFilter from "../todo/todo-filter";
import TodoList from "../todo/todo-list";

const TodoApp = () => {
  return (
    <div style={{ width: "500px" }} className="container">
      <TodoHeader />
      <div className="d-flex justify-content-between mb-2">
        <TodoSearch />
        <TodoFilter />
      </div>
      <TodoList />
    </div>
  );
};
export default TodoApp;

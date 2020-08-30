import React, { Component } from "react";
import TodoHeader from "../todo/todo-header";
import TodoSearch from "../todo/todo-search";
import TodoFilter from "../todo/todo-filter";
import TodoList from "../todo/todo-list";

export default class TodoApp extends Component {
  state = {
    items: [
      {
        id: 0,
        name: "Устроиться на работу",
      },
      {
        id: 1,
        name: "Купить ноутбук",
      },
      {
        id: 2,
        name: "Развиваться",
      },
    ],
  };

  deletedItem = (id) => {
    this.setState(({ items }) => {
      const index = items.findIndex((item) => item.id === id);

      return { items: [...items.slice(0, index), ...items.slice(index + 1)] };
    });
  };

  render() {
    return (
      <div style={{ width: "500px" }} className="container">
        <TodoHeader />
        <div className="d-flex justify-content-between mb-2">
          <TodoSearch />
          <TodoFilter />
        </div>
        <TodoList items={this.state.items} onItemDeleted={this.deletedItem} />
      </div>
    );
  }
}

import React, { Component } from "react";
import TodoListItem from "./todo-list-item";
import "../../index.css";

export default class TodoList extends Component {
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

  render() {
    const { items } = this.state;

    return (
      <ul className="list-group">
        {items.map((item) => (
          <TodoListItem key={item.id} id={item.id} name={item.name} />
        ))}
      </ul>
    );
  }
}

import React, { Component } from "react";
import TodoListItem from "./todo-list-item";
import "../../index.css";

export default class TodoList extends Component {
  // onDeleted = () => {
  //   console.log("del", this.state.items.id);
  // };

  render() {
    const { items, onItemDeleted } = this.props;

    const elements = items.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <li key={id}>
          <TodoListItem
            {...itemProps}
            onItemDeleted={() => onItemDeleted(id)}
          />
        </li>
      );
    });

    return <ul className="list-group">{elements}</ul>;
  }
}

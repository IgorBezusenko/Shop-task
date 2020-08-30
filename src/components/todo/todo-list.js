import React, { Component } from "react";
import TodoListItem from "./todo-list-item";
import "../../index.css";

export default class TodoList extends Component {
  render() {
    const {
      items,
      onItemDeleted,
      onToggleDone,
      onToggleImportant,
    } = this.props;

    const elements = items.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <li key={id}>
          <TodoListItem
            {...itemProps}
            onItemDeleted={() => onItemDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}
          />
        </li>
      );
    });

    return <ul className="list-group">{elements}</ul>;
  }
}

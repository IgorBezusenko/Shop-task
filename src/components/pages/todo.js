import React, { Component } from "react";
import TodoHeader from "../todo/todo-header";
import TodoSearch from "../todo/todo-search";
import TodoFilter from "../todo/todo-filter";
import TodoList from "../todo/todo-list";
import TodoAddItemForm from "../todo/todo-add-item-form";

export default class TodoApp extends Component {
  generId = 1000;

  state = {
    items: [
      this.createTodoItem("Устроится на работу"),
      this.createTodoItem("Купить ноутбук"),
      this.createTodoItem("Развиватся"),
    ],
    term: "",
    filter: "all",
  };

  deletedItem = (id) => {
    this.setState(({ items }) => {
      const index = items.findIndex((item) => item.id === id);
      return {
        items: [...items.slice(0, index), ...items.slice(index + 1)],
      };
    });
  };

  createTodoItem(text) {
    return {
      text,
      id: this.generId++,
      done: false,
      important: false,
    };
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ items }) => {
      const newArr = [...items, newItem];
      return {
        items: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);

      const oldItem = items[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newItems = [
        ...items.slice(0, idx),
        newItem,
        ...items.slice(idx + 1),
      ];
      return {
        items: newItems,
      };
    });
  };
  onToggleImportant = (id) => {
    this.setState(({ items }) => {
      const idx = items.findIndex((el) => el.id === id);

      const oldItem = items[idx];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newItems = [
        ...items.slice(0, idx),
        newItem,
        ...items.slice(idx + 1),
      ];
      return {
        items: newItems,
      };
    });
  };

  onChangeSerch = (term) => {
    this.setState({ term });
  };

  onFilterItem = (filter) => {
    this.setState({ filter });
  };

  serchItems(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filterItem(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "important":
        return items.filter((item) => item.important);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { items, term, filter } = this.state;

    const visibleItems = this.filterItem(this.serchItems(items, term), filter);
    const totalCount = visibleItems.length;
    const doneCount = items.filter((el) => el.done).length;
    const doneImportant = items.filter((el) => el.important).length;

    return (
      <div style={{ width: "600px" }} className="container">
        <TodoHeader
          totalItems={totalCount}
          doneCount={doneCount}
          doneImportant={doneImportant}
        />

        <div className="d-flex  mb-2">
          <TodoSearch onChangeSerch={this.onChangeSerch} />
          <TodoFilter filter={filter} onFilterItem={this.onFilterItem} />
        </div>

        <TodoAddItemForm onItemAdd={this.addItem} />

        <TodoList
          items={visibleItems}
          onItemDeleted={this.deletedItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
      </div>
    );
  }
}

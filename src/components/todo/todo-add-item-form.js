import React, { Component } from "react";

export default class TodoAddItemForm extends Component {
  render() {
    const { onItemAdd } = this.props;
    return (
      <div className="mt-2">
        <button
          onClick={() => onItemAdd("Привет Сцуки")}
          className="btn btn-secondary"
        >
          Add Item
        </button>
      </div>
    );
  }
}

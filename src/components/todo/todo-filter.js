import React, { Component } from "react";

export default class TodoFilter extends Component {
  buttonGroup = [
    { name: "all", text: "All" },
    { name: "important", text: "Important" },
    { name: "done", text: "Done" },
  ];

  render() {
    const { filter, onFilterItem } = this.props;
    const buttons = this.buttonGroup.map(({ name, text }) => {
      const isActive = filter === name;
      const classActive = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={name}
          type="button"
          className={`btn ${classActive}`}
          onClick={() => onFilterItem(name)}
        >
          {text}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}

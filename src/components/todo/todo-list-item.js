import React, { Component } from "react";
import "../../index.css";

export default class TodoListItem extends Component {
  render() {
    const {
      text,
      onItemDeleted,
      onToggleDone,
      onToggleImportant,
      done,
      important,
    } = this.props;

    let classItem = "list-group-item";
    if (done) {
      classItem += " done";
    }
    if (important) {
      classItem += " important";
    }

    return (
      <div className={classItem}>
        <span onClick={onToggleDone} className="list-group-item-name">
          {text}
        </span>
        <div className=" float-right ">
          <i
            onClick={onToggleImportant}
            className="btn btn-success fa fa-info  mr-1"
          />
          <i onClick={onItemDeleted} className="btn btn-danger fa fa-trash " />
        </div>
      </div>
    );
  }
}

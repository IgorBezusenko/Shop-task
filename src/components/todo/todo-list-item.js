import React, { Component } from "react";
import "../../index.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onItemDone = () => {
    this.setState((state) => {
      return {
        done: !state.done,
      };
    });
  };
  onItemImportant = () => {
    this.setState((state) => {
      return {
        important: !state.important,
      };
    });
  };

  render() {
    const { name, onItemDeleted } = this.props;
    const { done, important } = this.state;

    let classItem = "list-group-item";
    if (done) {
      classItem += " done";
    }
    if (important) {
      classItem += " important";
    }

    return (
      <div className={classItem}>
        <span onClick={this.onItemDone} className="list-group-item-name">
          {name}
        </span>
        <div className=" float-right ">
          <i
            onClick={this.onItemImportant}
            className="btn btn-success fa fa-info  mr-1"
          />
          <i onClick={onItemDeleted} className="btn btn-danger fa fa-trash " />
        </div>
      </div>
    );
  }
}

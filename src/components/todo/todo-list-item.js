import React, { Component } from "react";
import "../../index.css";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false,
  };

  onItemDone = () => {
    console.log("клик Done", this.props.name);
    this.setState((state) => {
      return {
        done: !this.state.done,
      };
    });
  };
  onItemImportant = () => {
    console.log("клик Important", this.props.name);
    this.setState((state) => {
      return {
        important: !this.state.important,
      };
    });
  };

  render() {
    const { id, name } = this.props;
    const { done, important } = this.state;

    let classItem = "list-group-item";
    if (done) {
      classItem += " done";
    }
    if (important) {
      classItem += " important";
    }

    return (
      <li key={id} className={classItem}>
        <span onClick={this.onItemDone} className="list-group-item-name">
          {name}
        </span>
        <div className=" float-right ">
          <i
            onClick={this.onItemImportant}
            className="btn btn-success fa fa-info  mr-1"
          />
          <i className="btn btn-danger fa fa-trash " />
        </div>
      </li>
    );
  }
}

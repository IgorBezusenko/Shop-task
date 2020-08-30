import React, { Component } from "react";
import "../../index.css";
export default class TodoAddItemForm extends Component {
  state = {
    text: "",
  };

  onItemChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onItemSubmit = (e) => {
    e.preventDefault();
    if (this.state.text) {
      this.props.onItemAdd(this.state.text);
      this.setState({
        text: "",
      });
    }
  };

  render() {
    return (
      <form className="d-flex" onSubmit={this.onItemSubmit}>
        <input
          type="text"
          value={this.state.text}
          placeholder="Write a note..."
          className="form-control mr-2"
          onChange={this.onItemChange}
        />
        <button className="btn btn-primary w-25">Add Item</button>
      </form>
    );
  }
}

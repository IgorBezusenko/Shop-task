import React, { Component } from "react";

export default class TodoSearch extends Component {
  state = {
    term: "",
  };

  onChangeSerch = (e) => {
    const termItput = e.target.value;
    this.setState({ term: termItput });
    this.props.onChangeSerch(termItput);
  };
  render() {
    return (
      <input
        onChange={this.onChangeSerch}
        type="text"
        value={this.state.term}
        placeholder="Search..."
        className="form-control mr-2"
      />
    );
  }
}

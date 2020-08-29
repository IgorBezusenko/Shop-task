import React, { Component } from "react";

export default class TodoFilter extends Component {
  render() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary">
          All
        </button>
        <button type="button" className="btn btn-secondary">
          Done
        </button>
        <button type="button" className="btn btn-secondary">
          Important
        </button>
      </div>
    );
  }
}

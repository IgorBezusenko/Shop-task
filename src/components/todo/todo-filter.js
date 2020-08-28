import React, { Component } from "react";

export default class TodoFilter extends Component {
  render() {
    return (
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary">
          All
        </button>
        <button type="button" class="btn btn-secondary">
          Done
        </button>
        <button type="button" class="btn btn-secondary">
          Important
        </button>
      </div>
    );
  }
}

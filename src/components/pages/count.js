import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div style={{ width: "400px" }} className="counter">
        <h1 className="ml-5">0</h1>
        <div className="d-flex">
          <button className="btn btn-primary mr-2 ml-2"> + </button>
          <button className="btn btn-primary mr-2"> - </button>
          <button className="btn btn-primary"> Reset </button>
        </div>
      </div>
    );
  }
}
export default Counter;

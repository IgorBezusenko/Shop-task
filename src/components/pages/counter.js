import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncClick = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  onDecClick = () => {
    this.setState((state) => {
      return {
        count: state.count - 1,
      };
    });
  };

  onResetClick = () => {
    this.setState((state) => {
      return {
        count: state.count * 0,
      };
    });
  };

  render() {
    return (
      <div style={{ width: "400px" }} className="container">
        <h1 className="title">Счетчик {this.state.count}</h1>
        <div className="button-group d-flex">
          <button
            onClick={this.onIncClick}
            className="btn btn-primary mr-2 ml-3"
          >
            INC
          </button>
          <button onClick={this.onDecClick} className="btn btn-primary mr-2">
            DEC
          </button>
          <button onClick={this.onResetClick} className="btn btn-primary">
            RESET
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;

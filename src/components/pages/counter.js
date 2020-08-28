import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncClick = () => {
    let correntCount = this.state.count;
    this.setState({
      count: correntCount + 1,
    });
  };

  onDecClick = () => {
    let correntCount = this.state.count;
    this.setState({
      count: correntCount - 1,
    });
  };

  onResetClick = () => {
    this.setState({
      count: 0,
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

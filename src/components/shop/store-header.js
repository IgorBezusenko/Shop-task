import React, { Component } from "react";

import "./store.css";

export default class ShoesHeader extends Component {
  render() {
    const { onViewModalCart } = this.props;

    return (
      <header className="header container">
        <div className="header-logo">
          <h3>Shoes Store</h3>
        </div>
        <div className="header-cart">
          <span className="mr-3">Tottal: {0}</span>
          <button onClick={onViewModalCart} className="btn btn-success">
            <i className="fa fa-shopping-cart mr-2" />
            Cart
          </button>
        </div>
      </header>
    );
  }
}

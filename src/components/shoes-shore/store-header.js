import React, { Component } from "react";

import "./store.css";

export default class ShoesHeader extends Component {
  state = {
    cartItems: [],
    viewCart: "none",
  };

  onViewCart = () => {
    this.setState({
      viewCart: "block",
    });
  };
  onCloseViewCart = () => {
    this.setState({
      viewCart: "none",
    });
  };

  render() {
    const { items } = this.props;
    const { cartItems } = this.state;

    const element = cartItems.map((item, index) => {
      const { id, name, price } = item;
      return (
        <tr key={id}>
          <th scope="row">{index + 1}</th>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <button className="btn btn-outline-danger ">
              <i className="fa fa-trash" />
            </button>
          </td>
        </tr>
      );
    });

    return (
      <header className="header container">
        <div className="header-logo">
          <h3>Shoes Store</h3>
        </div>
        <div className="header-cart">
          <span className="mr-3">Tottal: {0}</span>
          <button onClick={this.onViewCart} className="btn btn-success">
            <i className="fa fa-shopping-cart mr-2" />
            Cart
          </button>
        </div>

        <div
          style={{ display: this.state.viewCart }}
          className="header-cart-modal"
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart with your goods!</h5>
                <button
                  onClick={this.onCloseViewCart}
                  type="button"
                  className="btn btn-outline-primary"
                >
                  <i className="fa fa-window-close"></i>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>{element}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

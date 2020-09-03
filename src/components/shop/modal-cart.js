import React, { Component } from "react";

import "./store.css";

class ModalCart extends Component {
  render() {
    const { onCloseModalCart, itemCart, deleteFromCart, onBuy } = this.props;

    const element = itemCart.map((cart, index) => {
      const { id, name, price } = cart;

      return (
        <tr key={id}>
          <th scope="row">{index + 1}</th>
          <td>{name}</td>
          <td>{price}$</td>
          <td>
            <button
              onClick={() => deleteFromCart(id)}
              className="btn btn-outline-danger "
            >
              <i className="fa fa-trash" />
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="header-cart-modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart with your goods!</h5>
              <button
                onClick={onCloseModalCart}
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
              <button onClick={onBuy} type="button" className="btn btn-primary">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCart;

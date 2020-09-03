import React, { Component } from "react";

import "./store.css";

export default class ShoesListItem extends Component {
  render() {
    const {
      name,
      price,
      description,
      image,
      addItemToCart,
      onViewModalItem,
    } = this.props;

    return (
      <div className="shoes-list-item">
        <div className="item-image">
          <img src={image} alt="cover" />
        </div>
        <div>
          <ul>
            <li>{name}</li>
            <li>Description: {description}</li>
            <li>Price: {price} $</li>
            <li>
              <button onClick={onViewModalItem} className="btn btn-info mr-2">
                View
              </button>
              <button onClick={addItemToCart} className="btn btn-primary">
                Add to Cart
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

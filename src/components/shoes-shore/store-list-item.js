import React, { Component } from "react";

import "./store.css";

// state = { viewItems: "none" };

// onViewItem = () => {
//   this.setState({
//     viewItem: "block",
//   });
// };

// onCloseViewItem = () => {
//   this.setState({
//     viewItem: "none",
//   });
// };

export default class ShoesListItem extends Component {
  render() {
    const { name, price, description, image, onViewModalItem } = this.props;

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
              <button className="btn btn-primary">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

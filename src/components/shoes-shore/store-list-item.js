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
    const {
      name,
      price,
      description,
      image,
      viewItem,
      onViewItem,
      onCloseViewItem,
    } = this.props;

    console.log(viewItem);
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
              <button onClick={onViewItem} className="btn btn-info mr-2">
                View
              </button>
              <button className="btn btn-primary">Add to Cart</button>
            </li>
          </ul>
        </div>

        <div style={{ display: viewItem }} className="modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{name}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span onClick={onCloseViewItem} aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="item-image">
                  <img src={image} alt="cover" />
                </div>
                <ul>
                  <li>Description: {description}</li>
                  <li> Price: {price} $</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  onClick={onCloseViewItem}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

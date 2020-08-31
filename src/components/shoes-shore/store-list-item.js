import React, { Component } from "react";

import "./store.css";

export default class ShoesListItem extends Component {
  render() {
    const { name, price, description, image } = this.props;

    return (
      <div className="shoes-list-item">
        <div className="item-image">
          <img src={image} alt="Image-shoes" />
        </div>
        <div>
          <ul>
            <li>{name}</li>
            <li>Description: {description}</li>
            <li>Price: {price} $</li>
            <li>
              <button className="btn btn-info mr-2">View</button>
              <button className="btn btn-primary">Add to Cart</button>
            </li>
          </ul>
        </div>

        <div className="modal" tabindex="-1">
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
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="item-image">
                  <img src={image} alt="Image-shoes" />
                </div>
                <ul>
                  <li>Description: {description}</li>
                  <li> Price: {price}</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
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

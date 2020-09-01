import React from "react";

import "./store.css";

const ModalItem = ({ item, onCloseModal }) => {
  console.log(item);
  const { name, price, description, image } = item;
  console.log(name);

  return (
    <div className="modal-item" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{name}</h5>
            <button
              onClick={onCloseModal}
              type="button"
              className="btn btn-outline-primary"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="fa fa-window-close"></i>
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
              onClick={onCloseModal}
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
  );
};

export default ModalItem;

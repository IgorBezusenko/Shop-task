import React, { Component } from "react";

import "./store.css";

export default class ShoesHeader extends Component {
  render() {
    return (
      <header className="header container">
        <div className="header-logo">
          <h3>Shoes Store</h3>
        </div>
        <div className="header-cart">
          <span className="mr-3">Tottal: {0}</span>
          <button className="btn btn-success">
            <i className="fa fa-shopping-cart mr-2" />
            Cart
          </button>
        </div>
        {/* 
        <div class="modal header-cart-modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div> */}

        <div className="header-cart-modal">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span>&times;</span>
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button className="btn btn-outline-danger ">
                    <i className="fa fa-trash" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Buy
            </button>
          </div>
        </div>
      </header>
    );
  }
}

import React from "react";

import "./store.css";

const ModalCart = ({ item, onCloseModalCart }) => {
  // const element = item.map((cart, index) => {
  //   const { id, name, price } = cart;
  //   return (
  //     <tr key={id}>
  //       <th scope="row">{index + 1}</th>
  //       <td>{name}</td>
  //       <td>{price}</td>
  //       <td>
  //         <button className="btn btn-outline-danger ">
  //           <i className="fa fa-trash" />
  //         </button>
  //       </td>
  //     </tr>
  //   );
  // });

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
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>
                    <button className="btn btn-outline-danger ">
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              </tbody>
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
  );
};

export default ModalCart;

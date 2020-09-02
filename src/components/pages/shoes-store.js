import React, { Component } from "react";
import ShoesList from "../shoes-shore/store-list";
import * as shoesState from "../../store.json";
import ShoesHeader from "../shoes-shore/store-header";
import ModalItem from "../shoes-shore/modal-item";
import ModalCart from "../shoes-shore/modal-cart";

export default class ShoesStore extends Component {
  state = {
    shoesState: shoesState.items,
    totalItem: 0,
    modalVisibleItem: false,
    modalItem: {},
    modalVisibleCart: false,
    modalCart: {},
  };

  onViewModalItem = (item) => {
    this.setState({
      modalVisibleItem: true,
    });
    this.setState({
      modalItem: item,
    });
  };

  onCloseModalItem = (item) => {
    this.setState({
      modalVisibleItem: false,
    });
    this.setState({
      modalItem: item,
    });
  };

  onViewModalCart = () => {
    this.setState({
      modalVisibleCart: true,
    });
    this.setState({
      modalCart: this.state.modalCart,
    });
  };

  onCloseModalCart = () => {
    this.setState({
      modalVisibleCart: false,
    });
    this.setState({
      modalCart: this.state.modalCart,
    });
  };

  render() {
    const {
      shoesState,
      totalItem,
      viewItem,
      modalVisibleItem,
      modalItem,
      modalVisibleCart,
      modalCart,
    } = this.state;

    return (
      <div className="container">
        <ShoesHeader
          items={shoesState}
          onViewModalCart={this.onViewModalCart}
        />

        <ShoesList
          items={shoesState}
          viewItem={viewItem}
          onViewModalItem={this.onViewModalItem}
          totalItem={totalItem}
        />

        {modalVisibleItem ? (
          <ModalItem
            item={modalItem}
            onCloseModalItem={this.onCloseModalItem}
          />
        ) : null}

        {modalVisibleCart ? (
          <ModalCart
            item={modalCart}
            onCloseModalCart={this.onCloseModalCart}
          />
        ) : null}
      </div>
    );
  }
}

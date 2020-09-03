import React, { Component } from "react";
import ShoesList from "../shop/store-list";
import * as shoesState from "../../store.json";
import ShoesHeader from "../shop/store-header";
import ModalItem from "../shop/modal-item";
import ModalCart from "../shop/modal-cart";
import AlertBuy from "../shop/alert-buy";

export default class ShoesStore extends Component {
  cartId = 1000;

  state = {
    shoesState: shoesState.items,
    totalItem: 0,
    modalVisibleItem: false,
    modalItem: {},
    modalVisibleCart: false,
    modalCart: {},
    cartState: [],
    alertBuy: false,
  };

  addItemToCart = (item) => {
    this.setState(({ cartState }) => {
      const newItem = {
        id: this.cartId++,
        name: item.name,
        price: item.price,
      };
      return {
        cartState: [...cartState, newItem],
      };
    });
  };
  deleteFromCart = (id) => {
    this.setState(({ cartState }) => {
      const index = cartState.findIndex((el) => el.id === id);
      const newArrCart = [
        ...cartState.slice(0, index),
        ...cartState.slice(index + 1),
      ];
      return {
        cartState: newArrCart,
      };
    });
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

  onBuy = () => {
    const cartState = this.state.cartState;

    if (cartState.length === 0) {
      return;
    } else {
      this.setState({ alertBuy: true });
      setTimeout(
        () =>
          this.setState({
            alertBuy: false,
          }),
        3000
      );
    }

    this.setState({
      cartState: [],
    });
  };

  render() {
    const {
      shoesState,
      totalItem,

      modalVisibleItem,
      modalItem,
      modalVisibleCart,
      modalCart,
      cartState,
      alertBuy,
    } = this.state;

    return (
      <div className="container">
        <ShoesHeader
          items={shoesState}
          totalItem={totalItem}
          onViewModalCart={this.onViewModalCart}
        />

        <ShoesList
          items={shoesState}
          onViewModalItem={this.onViewModalItem}
          itemCart={cartState}
          addItemToCart={this.addItemToCart}
        />

        {modalVisibleItem ? (
          <ModalItem
            item={modalItem}
            onCloseModalItem={this.onCloseModalItem}
            addItemToCart={() => this.addItemToCart(modalItem)}
          />
        ) : null}

        {modalVisibleCart ? (
          <ModalCart
            item={modalCart}
            itemCart={cartState}
            onCloseModalCart={this.onCloseModalCart}
            deleteFromCart={this.deleteFromCart}
            onBuy={this.onBuy}
          />
        ) : null}

        {alertBuy ? <AlertBuy /> : null}
      </div>
    );
  }
}

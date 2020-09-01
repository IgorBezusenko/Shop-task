import React, { Component } from "react";
import ShoesList from "../shoes-shore/store-list";
import * as shoesState from "../../store.json";
import ShoesHeader from "../shoes-shore/store-header";
import ModalItem from "../shoes-shore/modal-item";

export default class ShoesStore extends Component {
  state = {
    shoesState: shoesState.items,
    totalItem: 0,
    viewItem: "none",
    modalVisible: false,
    modalItem: {},
  };

  onViewModal = (item) => {
    this.setState({
      modalVisible: true,
    });

    this.setState({
      modalItem: item,
    });
  };

  onCloseModal = (item) => {
    this.setState({
      modalVisible: false,
    });
    this.setState({
      modalItem: item,
    });
  };

  // onViewItem = (id) => {
  //   this.setState({
  //     viewItem: "block",
  //   });
  // };

  // onCloseViewItem = () => {
  //   this.setState({
  //     viewItem: "none",
  //   });
  // };

  render() {
    const {
      shoesState,
      totalItem,
      viewItem,
      modalVisible,
      modalItem,
    } = this.state;

    return (
      <div className="container">
        <ShoesHeader items={shoesState} />

        <ShoesList
          items={shoesState}
          viewItem={viewItem}
          onViewItem={this.onViewModal}
          onCloseViewItem={this.onCloseViewItem}
          totalItem={totalItem}
        />

        {modalVisible ? (
          <ModalItem item={modalItem} onCloseModal={this.onCloseModal} />
        ) : null}
      </div>
    );
  }
}

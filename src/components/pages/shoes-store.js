import React, { Component } from "react";
import ShoesList from "../shoes-shore/store-list";
import * as shoesState from "../../store.json";
import ShoesHeader from "../shoes-shore/store-header";

export default class ShoesStore extends Component {
  state = { shoesState: shoesState.items, totalItem: 0, viewItem: "none" };

  onViewItem = (id) => {
    console.log("view", id);
    this.setState({
      viewItem: "block",
    });
  };

  onCloseViewItem = () => {
    this.setState({
      viewItem: "none",
    });
  };

  render() {
    const { shoesState, totalItem, viewItem } = this.state;

    return (
      <div className="container">
        <ShoesHeader items={shoesState} />

        <ShoesList
          items={shoesState}
          viewItem={viewItem}
          onViewItem={this.onViewItem}
          onCloseViewItem={this.onCloseViewItem}
          totalItem={totalItem}
        />
      </div>
    );
  }
}

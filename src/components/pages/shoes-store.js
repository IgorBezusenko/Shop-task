import React, { Component } from "react";
import ShoesList from "../shoes-shore/store-list";
import * as shoesState from "../../store.json";
import ShoesHeader from "../shoes-shore/store-header";

export default class ShoesStore extends Component {
  state = { shoesState: shoesState.items, totalItem: 0 };

  render() {
    const { shoesState, totalItem } = this.state;

    return (
      <div className="container">
        <ShoesHeader totalItem={totalItem} items={shoesState} />
        <ShoesList items={shoesState} />
      </div>
    );
  }
}

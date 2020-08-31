import React, { Component } from "react";
import ShoesList from "../shoes-shore/store-list";
import * as shoesState from "../../store.json";
import ShoesHeader from "../shoes-shore/store-header";

export default class ShoesStore extends Component {
  state = { shoesState: shoesState.items, totalItem: [] };

  render() {
    const { shoesState } = this.state;

    console.log(shoesState);
    return (
      <div className="container">
        <ShoesHeader />
        <ShoesList items={shoesState} />
      </div>
    );
  }
}

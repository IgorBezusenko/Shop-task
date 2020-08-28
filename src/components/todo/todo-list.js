import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
      <ul class="list-group">
        <li class="list-group-item ">Купить рыбу</li>
        <li class="list-group-item">Продать оператуиву</li>
        <li class="list-group-item">
          Научится клепать SPI как шелкать семечки
        </li>
      </ul>
    );
  }
}

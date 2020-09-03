import React from "react";
import ShoesListItem from "./store-list-item";

const ShoesList = ({ items, itemCart, addItemToCart, onViewModalItem }) => {
  const element = items.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="ml-3 mb-3">
        <ShoesListItem
          {...itemProps}
          id={id}
          addItemToCart={() => addItemToCart(item)}
          onViewModalItem={() => onViewModalItem(item)}
        />
      </li>
    );
  });

  return <ul className="container d-flex flex-wrap">{element}</ul>;
};

export default ShoesList;

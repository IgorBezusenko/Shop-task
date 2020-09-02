import React from "react";
import ShoesListItem from "./store-list-item";

const ShoesList = ({ items, viewItem, onViewModalItem }) => {
  const element = items.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="ml-3 mb-3">
        <ShoesListItem
          {...itemProps}
          viewItem={viewItem}
          onViewModalItem={() => onViewModalItem(item)}
        />
      </li>
    );
  });

  return <ul className="container d-flex flex-wrap">{element}</ul>;
};

export default ShoesList;
